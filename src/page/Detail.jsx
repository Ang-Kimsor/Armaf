import { useEffect, useState } from "react";
import { ProductData } from "./../data/Product";
import { Link, useParams } from "react-router-dom";
import { CartWidget, DropDown, ImagePreview, ProductCard } from "../components";
import { useCart } from "../context/CartContext";
const Detail = () => {
  const { Cart, dispatchCart } = useCart();
  const [qty, setQTy] = useState(1);
  const [preview, setPreview] = useState(false);
  const [cart, setCart] = useState(false);
  const [full, setFull] = useState(false);
  const { category, productname } = useParams();
  const Cate = category.toLowerCase().replaceAll("-", " ");
  const ProdName = productname.toLowerCase().replaceAll("-", " ");
  const Data = ProductData.find((p) => p.name.toLowerCase() == ProdName);
  let Filter = ProductData.slice(0, 5);
  if (Cate != "all products") {
    Filter = ProductData.filter((p) => p.category.toLowerCase() == Cate).slice(
      0,
      5
    );
  }
  useEffect(() => {
    if (preview) document.querySelector("body").style.overflowY = "hidden";
    else document.querySelector("body").style.overflowY = "auto";
  }, [preview]);
  const handleAddtocart = (e) => {
    e.preventDefault();
    const inCart = Cart.find((item) => item.id === Data.id);
    const qtyCart = inCart ? inCart.qty + qty : qty;
    if (qtyCart > Data.stock) {
      setFull(true);
      setTimeout(() => setFull(false), 3000);
      return;
    }
    setCart(true);
    dispatchCart({
      type: "ADD",
      payload: {
        id: Data.id,
        name: Data.name,
        category: Data.category,
        price: Data.price,
        qty: qty,
        stock: Data.stock,
        img: Data.img,
        gender: Data.gender,
      },
    });
    setTimeout(() => setCart(false), 3000);
  };
  console.log(Cart);
  return (
    <>
      {preview && (
        <ImagePreview img={Data.img} setFalse={() => setPreview(false)} />
      )}
      <CartWidget
        img={Data.img}
        name={Data.name}
        qty={qty}
        price={Data.price}
        cart={cart}
        full={full}
      />
      <main className="flex flex-col items-center w-full py-8">
        <article className="w-[95%] grid md:grid-cols-2 gap-5">
          <div className="relative flex items-center justify-center py-5 bg-white border cursor-pointer border-black/10 group h-fit">
            <img src={Data.img} alt="" />
            <div
              className="absolute top-5 left-5 border border-black/10 p-2 rounded-full size-[40px] md:group-hover:flex flex items-center justify-center md:hidden"
              onClick={() => setPreview(true)}
            >
              <i className="bi bi-search"></i>
            </div>
          </div>
          <div className="flex flex-col items-start gap-5 p-5">
            <p className="uppercase text-black/40">{Data.category}</p>
            <h1 className="text-3xl tracking-wider uppercase lg:text-4xl font-extralight text-black/80">
              {Data.name}
            </h1>
            <p className="text-lg text-black/70">
              ${Data.price.toFixed(2)} USD
            </p>
            <div className="w-fit border border-black/20 h-[50px] flex items-center">
              {Data.stock == 0 ? (
                <h1 className="px-5 uppercase text-black/60 selection:bg-transparent">
                  Sold Out
                </h1>
              ) : (
                <>
                  <div
                    className={`${
                      qty <= 1
                        ? "cursor-not-allowed text-black/20"
                        : "cursor-pointer text-black/60"
                    } px-4 text-3xl selection:bg-transparent`}
                    onClick={() => setQTy(qty <= 1 ? 1 : qty - 1)}
                  >
                    -
                  </div>
                  <div className="px-4 text-xl text-black/60">{qty}</div>
                  <div
                    className={`${
                      qty >= Data.stock
                        ? "cursor-not-allowed text-black/20"
                        : "cursor-pointer text-black/60"
                    } px-4 text-3xl selection:bg-transparent`}
                    onClick={() =>
                      setQTy(qty >= Data.stock ? Data.stock : qty + 1)
                    }
                  >
                    +
                  </div>
                </>
              )}
            </div>
            <div className="w-full border-b border-black/20">
              <DropDown
                icon={"clipboard"}
                header={"Product Descriptions"}
                title={Data.title}
                des={Data.des}
                top={Data.top}
                mid={Data.mid}
                base={Data.base}
              />
              <DropDown
                icon={"heart"}
                header={"Free Shipping"}
                des={"Free delivery is available on all orders within the U.S."}
              />
              <DropDown
                icon={"airplane"}
                header={"Shipping Policy"}
                title={"Estimated Delivery Time:"}
                des={
                  "Armaf aims to process & deliver all orders within 3-7 working days. No deliveries will be made on Sundays or public holidays. Order Tracking: We will update your order with tracking information once your package has been shipped. We currently deliver to all regions within the United States."
                }
              />
              <DropDown
                icon={"truck"}
                header={"Return Policy"}
                title={"Return:"}
                des={`Return Policy: We have a 14-day return policy, which means that you have 14 days after receiving your item to request a return. To be eligible for a return, your item must be in the same condition that you received it—unworn or unused, with tags, and in its original packaging. You’ll also need the receipt or proof of purchase. To start a return, you can contact us at support@armafusa.com.`}
              />
              <DropDown
                icon={"cash"}
                header={"Refund Policy"}
                title={"Refund:"}
                des={`We will notify you once we’ve received and inspected your return and let you know if the refund was approved. If approved, you’ll be automatically refunded on your original payment method. Please remember it can take some time for your bank or credit card company to process and post the refund.`}
              />
            </div>
            <button
              className="w-full py-3 text-xl text-white uppercase bg-black cursor-pointer"
              onClick={(e) => handleAddtocart(e)}
            >
              Add to cart
            </button>
            <button className="w-full py-3 text-xl uppercase border cursor-pointer">
              Buy Now
            </button>
          </div>
        </article>
        <h1 className="my-5 text-3xl text-center">You may also like</h1>
        <section className="w-[98.5%] grid xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-2 z-[9]">
          {Filter.map(({ id, name, category, price, stock, img }) => (
            <ProductCard
              key={id}
              name={name}
              category={category}
              price={price}
              stock={stock}
              img={img}
            />
          ))}
        </section>
      </main>
    </>
  );
};

export default Detail;
