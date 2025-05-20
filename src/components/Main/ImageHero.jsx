import { Link } from "react-router-dom";
const ImageHero = ({ name, path, image }) => {
  return (
    <div className="relative">
      <img src={image} className="w-full" alt="" />
      <div className="w-full absolute bottom-8 flex flex-col gap-8 items-center">
        <p className="text-xl font-medium text-white uppercase tracking-wider">
          {name}
        </p>
        <Link
          to={path}
          className="relative inline-block overflow-hidden border border-white px-8 py-1.5 text-white transition-all ease-linear uppercase text-sm font-light tracking-wider group"
        >
          <span className="relative z-10 group-hover:text-black">Shop Now</span>
          <span className="absolute inset-0 bg-white scale-x-0 origin-left transition-transform duration-300 ease-linear group-hover:scale-x-100 group-hover:origin-left group-hover:transition-transform"></span>
        </Link>
      </div>
    </div>
  );
};

export default ImageHero;
