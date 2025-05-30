import { useParams } from "react-router-dom";
import { HeroCollections, HeroSmallCollections } from "./../data/Collections";
import { ProductData } from "../data/Product";
import { BigHero, SmallHero, ProductCard } from "../components";
import { useEffect, useState } from "react";

const Collections = () => {
  let { category } = useParams();
  category = category.replaceAll("-", " ");

  const [bigHeroData, setBigHeroData] = useState(null);
  const [smallHeroData, setSmallHeroData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [availabilityopen, setAvailabilityopen] = useState(false);
  const [availability, setAvailability] = useState("Default");
  const [genderopen, setGenderopen] = useState(false);
  const [gender, setGender] = useState("All");
  const [priceopen, setPriceopen] = useState(false);
  const [pricemin, setPricemin] = useState(0);
  const [pricemax, setPricemax] = useState(100);
  const [sortby, setSortby] = useState("default");
  const FilterA = ["Default", "In Stock", "Out of Stock"];
  const FilterB = ["All", "Male", "Female", "Unisex"];
  const sort = [
    { name: "Default", value: "default" },
    { name: "Alphabetically, A-Z", value: "az" },
    { name: "Alphabetically, Z-A", value: "za" },
    { name: "Price, Low-High", value: "low" },
    { name: "Price, High-Low", value: "high" },
  ];
  useEffect(() => {
    const big = HeroCollections.find(
      (c) => c.category.toLowerCase() === category.toLowerCase()
    );
    const small = HeroSmallCollections.filter(
      (c) => c.category.toLowerCase() === category.toLowerCase()
    );
    setBigHeroData(big);
    setSmallHeroData(small);
    setLoading(false);
  }, [category]);
  const reset = () => {
    setGenderopen(false);
    setAvailabilityopen(false);
    setPriceopen(false);
  };

  if (loading) {
    return (
      <main
        role="status"
        className="w-full h-[400px] flex items-center justify-center"
      >
        <svg
          aria-hidden="true"
          className="inline text-gray-200 md:size-20 size-10 animate-spin fill-gray-600"
          viewBox="0 0 100 101"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
            fill="currentColor"
          />
          <path
            d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
            fill="currentFill"
          />
        </svg>
        <span className="sr-only">Loading...</span>
      </main>
    );
  }

  return (
    <main className="flex flex-col items-center">
      <h1 className="my-4 text-2xl tracking-wider text-center uppercase md:text-4xl text-black/80 font-extralight">
        {category}
      </h1>
      {category !== "New Launches" && bigHeroData && (
        <>
          <section className="w-full">
            <BigHero img={bigHeroData.img} name={bigHeroData.name} />
          </section>
          <section className="lg:w-[760px] lg:mt-10 lg:mb-16 mt-10 mb-32 grid lg:gap-[50px] gap-[150px]">
            {smallHeroData.map(
              ({ category, title, des, imgbig, imgsmall }, index) => (
                <SmallHero
                  key={index}
                  category={category}
                  title={title}
                  des={des}
                  imgbig={imgbig}
                  imgsmall={imgsmall}
                  reverse={index % 2 != 0}
                />
              )
            )}
          </section>
        </>
      )}
      <section className="w-[98.5%] z-[10]">
        <div className="flex flex-col w-full gap-5 py-10 md:justify-between md:flex-row">
          <div className="flex flex-col gap-3 text-sm md:items-center md:flex-row text-black/70 md:text-md">
            <h1 className="px-1 tracking-wide">Filter: </h1>
            <div className="flex justify-between md:gap-3">
              <div className="relative">
                <div
                  className="flex items-center gap-2 px-1 bg-white cursor-pointer text-black/70 hover:underline"
                  onClick={() => {
                    reset();
                    setAvailabilityopen(!availabilityopen);
                  }}
                >
                  Availability
                  <i className="text-[12px] bi bi-chevron-down mt-[1.3px] hover:no-underline"></i>
                </div>
                <div
                  className={`bg-white absolute md:w-[320px] w-fit left-0 border-black/20 border md:p-2 px-5 py-2 my-2 ${
                    availabilityopen ? "flex" : "hidden"
                  } flex-col gap-3 justify-center`}
                >
                  {FilterA.map((item, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-2 text-sm uppercase cursor-pointer text-nowrap"
                      onClick={() => setAvailability(item)}
                    >
                      <input
                        type="checkbox"
                        value={item}
                        checked={availability == item}
                        onChange={() => setAvailability(item)}
                        className="w-4 h-4 bg-white border border-gray-400 rounded appearance-none checked:bg-black checked:border-transparent"
                      />
                      {item}
                    </div>
                  ))}
                </div>
              </div>
              <div className="relative">
                <div
                  className="flex items-center gap-2 px-1 bg-white cursor-pointer text-black/70 hover:underline"
                  onClick={() => {
                    reset();
                    setGenderopen(!genderopen);
                  }}
                >
                  Gender
                  <i className="text-[12px] bi bi-chevron-down mt-[1.3px] hover:no-underline"></i>
                </div>
                <div
                  className={`bg-white absolute md:w-[320px] w-fit left-0 border-black/20 border md:p-2 px-5 py-2 my-2 ${
                    genderopen ? "flex" : "hidden"
                  } flex-col gap-3 justify-center`}
                >
                  {FilterB.map((item, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-2 text-sm uppercase cursor-pointer text-nowrap"
                      onClick={() => setGender(item)}
                    >
                      <input
                        type="checkbox"
                        value={item}
                        checked={gender == item}
                        onChange={() => setGender(item)}
                        className="w-4 h-4 bg-white border border-gray-400 rounded appearance-none checked:bg-black checked:border-transparent"
                      />
                      {item}
                    </div>
                  ))}
                </div>
              </div>
              <div className="md:relative">
                <div
                  className="flex items-center gap-2 px-1 bg-white cursor-pointer text-black/70 hover:underline"
                  onClick={() => {
                    reset();
                    setPriceopen(!priceopen);
                  }}
                >
                  Price
                  <i className="text-[12px] bi bi-chevron-down mt-[1.3px] hover:no-underline"></i>
                </div>
                <div
                  className={`bg-white absolute md:w-[320px] w-[95%] md:left-0 left-[2.5%] border-black/20 border md:p-2 px-5 py-2 my-2 ${
                    priceopen ? "flex" : "hidden"
                  } flex-col gap-3 justify-center`}
                >
                  <h1 className="text-black/60">Highest price: ${100}</h1>
                  <div className="flex items-center gap-5 text-sm uppercase cursor-pointer text-nowrap">
                    <input
                      type="number"
                      min={0}
                      value={pricemin}
                      onChange={(e) =>
                        setPricemin(e.target.value < 0 ? 0 : e.target.value)
                      }
                      placeholder="Minimum"
                      className="w-1/2 h-[50px] bg-white border text-center text-xl rounded input-no-arrows outline-0"
                    />
                    <input
                      type="number"
                      max={100}
                      value={pricemax}
                      onChange={(e) =>
                        setPricemax(e.target.value > 100 ? 100 : e.target.value)
                      }
                      placeholder="Maximum"
                      className="w-1/2 h-[50px] bg-white border text-center text-xl rounded input-no-arrows outline-0"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-row items-center justify-between gap-2 px-1 text-sm text-black/70 text-nowrap md:text-md">
            <div className="flex">
              <h1>Sort by: </h1>
              <select
                className="px-3 text-sm border-none outline-0"
                defaultValue={sortby}
                onChange={(e) => setSortby(e.target.value)}
                onClick={() => reset()}
              >
                {sort.map(({ name, value }, index) => (
                  <option key={index} value={value}>
                    {name}
                  </option>
                ))}
              </select>
            </div>
            <p className="text-sm text-black/50">100 Products</p>
          </div>
        </div>
      </section>
      <section className="w-[98.5%] grid xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-2 z-[9]">
        {ProductData.map(({ id, img }) => (
          <ProductCard key={id} img={img} />
        ))}
      </section>
    </main>
  );
};

export default Collections;
