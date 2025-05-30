import React from "react";
import { Link } from "react-router-dom";
const ProductCard = ({ id, img }) => {
  return (
    <Link className="relative py-2 border border-black/20">
      <div className="overflow-hidden">
        <img
          src={img}
          alt={id}
          className="transition-all duration-500 hover:scale-105"
        />
      </div>
      <span className="absolute px-2 left-0 top-3 text-white bg-black tracking-wider text-[7px] py-1 rounded-full mx-3 font-semibold">
        SOLD OUT
      </span>
      <h1 className="px-3 md:text-[13px] text-[10px] text-center tracking-wide text-black/80">
        CLUB DE NUIT PRECIEUX 1 EXTRAIT DE PARFUM
      </h1>
      <p className="md:text-sm text-[12px] mt-2 text-center text-black/70">
        $94.99 USD
      </p>
    </Link>
  );
};

export default ProductCard;
