import React from "react";
import { Link } from "react-router-dom";
const ImageProduct = ({ name, price, stock, image, path, between }) => {
  return (
    <Link
      to={path}
      className="rounded-[2px] border border-gray-500/20 py-5 group relative"
    >
      <div className="flex justify-center overflow-hidden">
        <img
          src={image}
          alt={name}
          className="transition-all duration-500 group-hover:scale-105"
        />
      </div>
      {stock && (
        <span className="absolute px-2 left-0 top-3 text-white bg-black tracking-wider text-[7px] py-1 rounded-full mx-3 font-semibold">
          SOLD OUT
        </span>
      )}
      <p className="text-center md:text-lg md:px-0 px-1 text-[12px] uppercase tracking-wide text-black/70 mt-4 group-hover:text-blue-700">
        {name}
      </p>
      <p className="text-center md:text-sm md:px-0 px-1 text-[12px] capitalize tracking-wide text-black/60 mt-2">
        {between ? `from $${price} USD` : `$${price}`}
      </p>
    </Link>
  );
};

export default ImageProduct;
