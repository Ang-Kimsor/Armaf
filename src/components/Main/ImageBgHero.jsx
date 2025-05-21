import { Link } from "react-router-dom";
const ImageBgHero = ({ name, path, image }) => {
  return (
    <>
      <div
        className="w-full h-[550px] bg-cover bg-center bg-no-repeat bg-fixed"
        style={{ backgroundImage: `url(${image})` }}
      ></div>
      <div className="absolute top-2/3 -translate-y-1/2 left-10">
        <p className="text-xl font-medium text-white uppercase tracking-wider mb-3">
          {name}
        </p>
        <Link
          to={path}
          className="relative inline-block overflow-hidden border border-white px-8 py-3 text-white transition-all ease-linear uppercase text-sm font-light tracking-wider group"
        >
          <span className="relative z-10 group-hover:text-black">Shop Now</span>
          <span className="absolute inset-0 bg-white scale-x-0 origin-left transition-transform duration-300 ease-linear group-hover:scale-x-100 group-hover:origin-left group-hover:transition-transform"></span>
        </Link>
      </div>
    </>
  );
};

export default ImageBgHero;
