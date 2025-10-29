import React from "react";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { motion } from "framer-motion";
const Checkout = () => {
  const { Cart } = useCart();
  document.title = "Checkout";
  const total =
    Cart.reduce((sum, item) => {
      return sum + item.price * item.qty;
    }, 0) + 15;
  return (
    <main className="w-[100%] flex items-center justify-center mt-10">
      <div className="w-[90%] grid lg:grid-cols-2 gap-5">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.3,
              },
            },
          }}
          className="flex flex-col items-center justify-center gap-2 py-3 text-center bg-white border-2 rounded h-fit border-black/20"
        >
          <motion.h1
            variants={{
              hidden: { opacity: 0, y: -10 },
              visible: {
                opacity: 1,
                y: 0,
                transition: { duration: 0.6, ease: "easeInOut" },
              },
            }}
            className="text-xl font-semibold text-black/70"
          >
            Sign in or create an account
          </motion.h1>
          <motion.p
            variants={{
              hidden: { opacity: 0, y: -10 },
              visible: {
                opacity: 1,
                y: 0,
                transition: { duration: 0.6, ease: "easeInOut" },
              },
            }}
            className="text-sm font-semibold text-black/70 "
          >
            Enter your email to sign in or create an account
          </motion.p>
          <motion.input
            variants={{
              hidden: { opacity: 0, y: -10 },
              visible: {
                opacity: 1,
                y: 0,
                transition: { duration: 0.6, ease: "easeInOut" },
              },
            }}
            type="text"
            className="mt-2 border outline-none px-2 rounded h-[45px] md:w-[50%] w-[90%]"
            placeholder="example@gmail.com"
          />
          <motion.button
            variants={{
              hidden: { opacity: 0, y: -10 },
              visible: {
                opacity: 1,
                y: 0,
                transition: { duration: 0.6, ease: "easeInOut" },
              },
            }}
            className="md:w-[50%] w-[90%] bg-blue-500 h-[45px] rounded-lg uppercase font-semibold text-sm  text-white"
          >
            Pay Now
          </motion.button>
          <motion.p
            variants={{
              hidden: { opacity: 0, y: -10 },
              visible: {
                opacity: 1,
                y: 0,
                transition: { duration: 0.6, ease: "easeInOut" },
              },
            }}
            className="md:w-[50%] w-[90%] font-semibold text-[12px] text-black/70"
          >
            By using Shop Pay, you agree to the{" "}
            <Link className="text-blue-500 hover:text-blue-500/50">
              terms of service
            </Link>{" "}
            and{" "}
            <Link className="text-blue-500 hover:text-blue-500/50">
              privacy policy.
            </Link>
          </motion.p>
          <motion.p
            variants={{
              hidden: { opacity: 0, y: -10 },
              visible: {
                opacity: 1,
                y: 0,
                transition: { duration: 0.6, ease: "easeInOut" },
              },
            }}
          >
            <Link to={"/"} className="text-[13px] text-black/50">
              Back
            </Link>
          </motion.p>
        </motion.div>
        <motion.div
          className="flex flex-col gap-5 p-3"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.3,
              },
            },
          }}
        >
          {Cart.map(
            ({ id, name, category, price, qty, img, gender }, index) => (
              <motion.div
                key={id}
                className="w-full h-[100px] flex flex-row gap-4 items-center"
                variants={{
                  hidden: { opacity: 0, y: -10 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: { duration: 0.6, ease: "easeInOut" },
                  },
                }}
              >
                <div className="size-[100px] border-2 border-black/20 rounded relative">
                  <img src={img} alt="" className="size-full" />
                  <div className="text-white bg-black/80 size-[20px] flex items-center justify-center rounded-full text-[12px] absolute right-[-10px] top-[-10px]">
                    {qty}
                  </div>
                </div>
                <div className="flex flex-col gap-1 [width:calc(100%-100px)]">
                  <p className="text-[10px] uppercase text-black/40">
                    {category}
                  </p>
                  <p className="text-sm text-black/80">{name}</p>
                  <p className="text-[10px] uppercase text-black/40">
                    {gender}
                  </p>
                  <p className="text-sm uppercase text-black/40">
                    ${(price * qty).toFixed(2)}
                  </p>
                </div>
              </motion.div>
            )
          )}
          <motion.div
            className="flex flex-col gap-1 text-sm text-black/70"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={{
              hidden: {},
              visible: {
                transition: {
                  staggerChildren: 0.3,
                },
              },
            }}
          >
            <motion.p
              variants={{
                hidden: { opacity: 0, y: -10 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.6, ease: "easeInOut" },
                },
              }}
            >
              Shipping: $10.00
            </motion.p>
            <motion.p
              variants={{
                hidden: { opacity: 0, y: -10 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.6, ease: "easeInOut" },
                },
              }}
            >
              Tax: $5.00
            </motion.p>
            <motion.p
              variants={{
                hidden: { opacity: 0, y: -10 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.6, ease: "easeInOut" },
                },
              }}
              className="text-lg"
            >
              Total: ${total.toFixed(2)}
            </motion.p>
          </motion.div>
        </motion.div>
      </div>
    </main>
  );
};

export default Checkout;
