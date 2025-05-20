import { VideoHero, ImageHero, ImageProduct } from "../components/Main";
import { ImageData1, ImageData2, ImageData3 } from "../data/Home";
import Vdo from "./../assets/HeroVdo.mp4";
const Home = () => {
  return (
    <>
      <main className="flex flex-col items-center">
        <VideoHero Vdo={Vdo} />
        <section className="lg:grid-cols-2 lg:gap-3 w-[98%] grid grid-cols-1">
          {ImageData1.map(({ name, path, image }, index) => (
            <ImageHero key={index} name={name} path={path} image={image} />
          ))}
        </section>
        <section className="w-[96%] py-8 flex flex-col items-center gap-5">
          <h1 className="md:text-4xl text-md md:px-0 px-4 tracking-wide font-extralight text-center">
            EMBRACE THE GREATNESS WITHIN YOU
          </h1>
          <div className="w-full grid lg:grid-cols-3 md:grid-cols-2 grid-cols-2 gap-3">
            <ImageProduct />
            <ImageProduct />
            <ImageProduct />
          </div>
        </section>
        <section className="lg:grid-cols-2 lg:gap-3 w-[98%] grid grid-cols-1">
          {ImageData2.map(({ name, path, image }, index) => (
            <ImageHero key={index} name={name} path={path} image={image} />
          ))}
        </section>
        <section className="lg:grid-cols-2 lg:gap-3 w-[98%] grid grid-cols-1 md:mt-3">
          {ImageData3.map(({ name, path, image }, index) => (
            <ImageHero key={index} name={name} path={path} image={image} />
          ))}
        </section>
      </main>
    </>
  );
};

export default Home;
