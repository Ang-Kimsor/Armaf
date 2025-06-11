import React from "react";
import { Link } from "react-router-dom";
const Cart = ({ img, name, qty, price, cart, full }) => {
  return (
    <>
      <div
        className={`${
          !full ? "translate-y-[100px]" : "translate-y-0"
        } transition-all duration-300 text-nowrap md:text-sm text-[12px] fixed left-1/2 -translate-x-1/2 bottom-7 z-[99] bg-red-500 md:w-fit w-[280px] justify-center p-4 rounded text-white font-semibold flex gap-2 items-center`}
      >
        <svg
          className="md:size-4 size-3.5"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 11.793a1 1 0 1 1-1.414 1.414L10 11.414l-2.293 2.293a1 1 0 0 1-1.414-1.414L8.586 10 6.293 7.707a1 1 0 0 1 1.414-1.414L10 8.586l2.293-2.293a1 1 0 0 1 1.414 1.414L11.414 10l2.293 2.293Z" />
        </svg>
        Adding Quantity More Than Stock
      </div>
      <div
        className={`${
          !cart ? "translate-x-[320px]" : "translate-x-0"
        } transition-all duration-300 w-[300px] h-[150px] border rounded border-black/20 bg-white shadow-2xs shadow-black/20 fixed right-[10px] bottom-[10px] z-[99] p-2`}
      >
        <div className="w-full h-[90px] flex">
          <img src={img} className="size-[90px]" alt="" />
          <div className="flex flex-col justify-center">
            <p className="text-[10.5px] text-black/80">{name}</p>
            <p className="text-[10px] text-black/80">QTY: {qty}</p>
            <p className="text-[10px] text-black/80">
              Price: ${(qty * price).toFixed(2)} USD
            </p>
          </div>
        </div>
        <div className="w-full h-[40px] flex items-center gap-3 px-2 uppercase text-sm">
          <Link
            to={"/Cart"}
            className="bg-white text-black border w-1/2 justify-center h-full flex items-center"
          >
            View Cart
          </Link>
          <Link className="bg-green-500 w-1/2 justify-center h-full flex items-center text-white">
            Checkout
          </Link>
        </div>
      </div>
    </>
  );
};

export default Cart;
