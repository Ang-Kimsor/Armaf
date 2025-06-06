import React from "react";
import { Link } from "react-router-dom";
const ProductCard = ({ id, name, category, price, stock, img }) => {
  return (
    <Link
      to={`/Collections/${category.replaceAll(" ", "-").toLowerCase()}/${name
        .replaceAll(" ", "-")
        .toLowerCase()}`}
      className="relative p-2 border border-black/20"
    >
      <div className="flex items-center justify-center mb-4 overflow-hidden">
        <img
          src={img}
          alt={id + " - " + category}
          className="transition-all duration-500 hover:scale-105"
        />
      </div>
      {!stock && (
        <span className="absolute px-2 left-0 top-3 text-white bg-black tracking-wider text-[7px] py-1 rounded-full mx-3 font-semibold">
          SOLD OUT
        </span>
      )}
      <h1 className="px-3 md:text-[13px] text-[10px] text-center tracking-wide text-black/60">
        {name}
      </h1>
      <p className="text-[12px] mt-2 text-center text-black/60">
        ${price.toFixed(2)} USD
      </p>
    </Link>
  );
};

export default ProductCard;
