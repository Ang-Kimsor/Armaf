import { Link } from "react-router-dom";
const ImageHero = ({ name, path, image, button }) => {
  return (
    <Link
      to={`/Collections/${path.replaceAll(" ", "-")}`}
      className="relative cursor-pointer"
    >
      <img src={image} className="w-full" alt={name} />
      <div className="absolute flex flex-col items-center w-full gap-8 bottom-8">
        <p className="text-xl font-medium tracking-wider text-white uppercase">
          {name}
        </p>
        {button && (
          <button className="relative inline-block px-8 py-3 overflow-hidden text-sm font-light tracking-wider text-white uppercase transition-all ease-linear border border-white cursor-pointer group">
            <span className="relative z-10 group-hover:text-black">
              Shop Now
            </span>
            <span className="absolute inset-0 transition-transform duration-300 ease-linear origin-left scale-x-0 bg-white group-hover:scale-x-100 group-hover:origin-left group-hover:transition-transform"></span>
          </button>
        )}
      </div>
    </Link>
  );
};

export default ImageHero;
