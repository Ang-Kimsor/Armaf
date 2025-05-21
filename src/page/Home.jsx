import {
  VideoHero,
  ImageHero,
  ImageProductHero,
  ImageBgHero,
} from "../components/Main";
import {
  VideoHeroData,
  ImageHeroData1,
  ImageHeroData2,
  ImageHeroData3,
  ImageHeroData4,
  ImageProductHeroData1,
  ImageBgHeroData,
  ImageProductHeroData2,
} from "../data/Home";

const Home = () => {
  return (
    <>
      <main className="flex flex-col items-center">
        <VideoHero Vdo={VideoHeroData.video} />
        <section className="lg:grid-cols-2 lg:gap-3 w-[98%] grid grid-cols-1">
          {ImageHeroData1.map(({ name, path, image }, index) => (
            <ImageHero
              key={index}
              name={name}
              path={path}
              image={image}
              button={true}
            />
          ))}
        </section>
        <section className="w-[96%] py-8 flex flex-col items-center gap-5">
          <h1 className="md:text-4xl text-md md:px-0 px-4 tracking-wide font-extralight text-center">
            EMBRACE THE GREATNESS WITHIN YOU
          </h1>
          <div className="w-full grid lg:grid-cols-3 md:grid-cols-2 grid-cols-2 gap-3">
            {ImageProductHeroData1.map(
              ({ name, price, stock, image, path }, index) => (
                <ImageProductHero
                  key={index}
                  name={name}
                  price={price}
                  stock={stock}
                  image={image}
                  path={path}
                  between={true}
                />
              )
            )}
          </div>
        </section>
        <section className="lg:grid-cols-2 lg:gap-3 w-[98%] grid grid-cols-1">
          {ImageHeroData2.map(({ name, path, image }, index) => (
            <ImageHero
              key={index}
              name={name}
              path={path}
              image={image}
              button={true}
            />
          ))}
        </section>
        <section className="lg:grid-cols-2 lg:gap-3 w-[98%] grid grid-cols-1 md:mt-3">
          {ImageHeroData3.map(({ name, path, image }, index) => (
            <ImageHero
              key={index}
              name={name}
              path={path}
              image={image}
              button={true}
            />
          ))}
        </section>
        <section className="w-full h-fit mt-3 relative">
          <ImageBgHero
            image={ImageBgHeroData.image}
            name={ImageBgHeroData.name}
            path={ImageBgHeroData.path}
          />
        </section>
        <section className="w-[96%] grid lg:grid-cols-3 md:grid-cols-2 grid-cols-2 gap-3 my-12">
          {ImageProductHeroData2.map(
            ({ name, price, stock, image, path }, index) => (
              <ImageProductHero
                key={index}
                name={name}
                price={price}
                stock={stock}
                image={image}
                path={path}
                between={false}
              />
            )
          )}
        </section>
        <section className="lg:grid-cols-2 lg:gap-3 w-[98%] grid grid-cols-1 md:mt-3">
          {ImageHeroData4.map(({ name, path, image }, index) => (
            <ImageHero
              key={index}
              name={name}
              path={path}
              image={image}
              button={false}
            />
          ))}
        </section>
      </main>
    </>
  );
};

export default Home;
