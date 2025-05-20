import React from "react";
import img from "./../../assets/imageproduct1.jpg";
const ImageProduct = () => {
  return (
    <div className="rounded-[2px] border border-gray-500/20 py-5">
      <img src={img} alt="" />
      <span className="px-3 text-white bg-black/80 md:text-[12px] text-[10px] py-1 rounded-full mx-4 font-semibold">
        SOLD OUT
      </span>
      <p className="text-center md:text-sm md:px-0 px-1 text-[12px] uppercase tracking-wide text-black/70 mt-4">
        club de nuit intense man
      </p>
      <p className="text-center md:text-lg md:px-0 px-1 text-[13px] capitalize tracking-wide text-black/70 mt-2">
        from $34.55 USD
      </p>
    </div>
  );
};

export default ImageProduct;
