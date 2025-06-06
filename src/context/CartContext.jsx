import { useReducer, useContext, createContext, useEffect } from "react";
const CartContext = createContext();
const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD":
      if (action.payload.stock == 0) return state;
      const existing = state.find((item) => item.id == action.payload.id);
      if (existing) {
        let addQty = existing.qty + action.payload.qty;
        if (addQty > existing.stock) return state;
        return state.map((item) =>
          item.id === action.payload.id ? { ...item, qty: addQty } : item
        );
      } else {
        return [...state, action.payload];
      }
    case "REMOVE":
      break;
  }
};
const LoadCartFromLocalStorage = () => {
  const stored = localStorage.getItem("cart");
  return stored ? JSON.parse(stored) : [];
};
export const CartProvider = ({ children }) => {
  const [Cart, dispatchCart] = useReducer(
    cartReducer,
    [],
    LoadCartFromLocalStorage
  );
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(Cart));
  }, [Cart]);
  return (
    <CartContext.Provider value={{ Cart, dispatchCart }}>
      {children}
    </CartContext.Provider>
  );
};
export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) throw new Error("useCart must be used within a CartProvider");
  return context;
};
