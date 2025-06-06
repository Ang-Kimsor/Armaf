import { Link } from "react-router-dom";
const ImageBgHero = ({ name, path, image }) => {
  return (
    <>
      <section
        className="relative w-full h-[550px] bg-cover bg-center bg-no-repeat lg:bg-fixed mt-3"
        style={{ backgroundImage: `url(${image})` }}
      >
        <div className="absolute -translate-y-1/2 top-2/3 left-10">
          <p className="mb-3 text-xl font-medium tracking-wider text-white uppercase">
            {name}
          </p>
          <Link
            to={`Collections/${path}`}
            className="relative inline-block px-8 py-3 overflow-hidden text-sm font-light tracking-wider text-white uppercase transition-all ease-linear border border-white group"
          >
            <span className="relative z-10 group-hover:text-black">
              Shop Now
            </span>
            <span className="absolute inset-0 transition-transform duration-300 ease-linear origin-left scale-x-0 bg-white group-hover:scale-x-100 group-hover:origin-left group-hover:transition-transform"></span>
          </Link>
        </div>
      </section>
    </>
  );
};

export default ImageBgHero;
