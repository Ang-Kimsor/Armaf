import React from "react";

const ImagePreview = ({ img, setFalse }) => {
  return (
    <div className="w-full h-screen bg-white fixed top-0 z-[100] flex items-center justify-center">
      <i
        className="bi bi-x absolute right-5 top-5 text-5xl cursor-pointer"
        onClick={setFalse}
      ></i>
      <div className="md:w-[60%] w-[95%]">
        <img src={img} alt="" className="w-full " />
      </div>
    </div>
  );
};

export default ImagePreview;
