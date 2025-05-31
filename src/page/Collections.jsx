import { useParams } from "react-router-dom";
import { HeroCollections, HeroSmallCollections } from "./../data/Collections";
import { ProductData } from "../data/Product";
import { BigHero, SmallHero, ProductCard } from "../components";
import { useEffect, useMemo, useState } from "react";

const Collections = () => {
  let { category } = useParams();
  category = category.replaceAll("-", " ");

  const maxPrice = useMemo(() => {
    const prices = ProductData.filter(
      (p) => p.category.toLowerCase() === category.toLowerCase()
    ).map((p) => p.price);
    return prices.length ? Math.max(...prices) : 100;
  }, [category]);

  const [bigHeroData, setBigHeroData] = useState(null);
  const [smallHeroData, setSmallHeroData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [availabilityopen, setAvailabilityopen] = useState(false);
  const [availability, setAvailability] = useState("Default");
  const [genderopen, setGenderopen] = useState(false);
  const [gender, setGender] = useState("All");
  const [priceopen, setPriceopen] = useState(false);
  const [pricemin, setPricemin] = useState(0);
  const [pricemax, setPricemax] = useState(maxPrice);
  const [sortby, setSortby] = useState("default");
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 15;

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
    const pdata = ProductData.filter(
      (c) => c.category.toLowerCase() === category.toLowerCase()
    );
    setBigHeroData(big);
    setSmallHeroData(small);
    setFilteredProducts(pdata);
    setCurrentPage(1);

    setPricemin(0);
    setPricemax(maxPrice);

    setLoading(false);
  }, [category, maxPrice]);

  const filtered = useMemo(() => {
    let data = ProductData.filter(
      (p) => p.category.toLowerCase() === category.toLowerCase()
    );

    if (availability === "In Stock") data = data.filter((p) => p.stock > 0);
    else if (availability === "Out of Stock")
      data = data.filter((p) => p.stock <= 0);

    if (gender !== "All")
      data = data.filter((p) => p.gender === gender.toLowerCase());

    data = data.filter(
      (p) => p.price >= Number(pricemin) && p.price <= Number(pricemax)
    );

    switch (sortby) {
      case "az":
        data.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case "za":
        data.sort((a, b) => b.name.localeCompare(a.name));
        break;
      case "low":
        data.sort((a, b) => a.price - b.price);
        break;
      case "high":
        data.sort((a, b) => b.price - a.price);
        break;
      default:
        break;
    }

    return data;
  }, [availability, gender, pricemin, pricemax, sortby, category]);

  useEffect(() => {
    setFilteredProducts(filtered);
    setCurrentPage(1);
  }, [filtered]);

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = filteredProducts.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );
  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);

  const reset = () => {
    setGenderopen(false);
    setAvailabilityopen(false);
    setPriceopen(false);
  };

  if (loading) {
    return (
      <main
        className="w-full h-[400px] flex items-center justify-center"
        role="status"
      >
        <svg
          aria-hidden="true"
          className="inline text-gray-200 md:size-20 size-10 animate-spin fill-gray-600"
          viewBox="0 0 100 101"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908Z"
            fill="currentColor"
          />
          <path
            d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367012 46.6976 0.446843 41.7345 1.27873C39.2613 1.69046 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52673 55.5402 10.0491C60.8641 10.7766 65.9926 12.5457 70.6331 15.2552C75.2736 17.9648 79.3347 21.5581 82.5849 25.7572C84.9175 28.6851 86.7996 32.0957 88.1811 35.7993C89.083 38.3667 91.5421 39.6781 93.9676 39.0409Z"
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
                  reverse={index % 2 !== 0}
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
                  <h1 className="text-black/60">Highest price: ${maxPrice}</h1>
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
                value={sortby}
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
            <p className="text-sm text-black/50">
              {currentProducts.length} Products
            </p>
          </div>
        </div>
      </section>
      {currentProducts.length == 0 ? (
        <div className="h-[400px] flex items-center justify-center flex-col w-full text-center">
          <h1>No Product Found In This Filter</h1>
          <button
            className="px-5 py-2 mt-5 font-semibold text-white rounded cursor-pointer bg-black/50"
            onClick={() => {
              reset();
              setAvailability("Default");
              setGender("All");
              setPricemin(0);
              setPricemax(maxPrice);
              setSortby("default");
            }}
          >
            Reset
          </button>
        </div>
      ) : (
        <>
          <section className="w-[98.5%] grid xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-2 z-[9]">
            {currentProducts.map(
              ({ id, name, category, price, stock, img }) => (
                <ProductCard
                  key={id}
                  name={name}
                  category={category}
                  price={price}
                  stock={stock}
                  img={img}
                />
              )
            )}
          </section>
          <section className="w-full h-[30px] mt-5 flex justify-center items-center">
            <div className="flex items-center h-full gap-3 w-fit">
              <i
                className={`${
                  currentPage == 1 && "hidden"
                } bi bi-arrow-left md:text-[12px] text-md text-black/80 cursor-pointer`}
                onClick={() =>
                  setCurrentPage(currentPage > 1 ? currentPage - 1 : 1)
                }
              ></i>
              {[...Array(totalPages)].map((_, i) => (
                <div
                  key={i}
                  className={`${
                    totalPages <= 1 ? "hidden" : "flex"
                  } size-[30px] items-center justify-center  cursor-pointer ${
                    currentPage === i + 1
                      ? "border-b text-black text-sm"
                      : "text-black/50 text-[12px]"
                  }`}
                  onClick={() => {
                    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
                    setCurrentPage(i + 1);
                  }}
                >
                  {i + 1}
                </div>
              ))}
              <i
                className={`${
                  currentPage == totalPages && "hidden"
                } bi bi-arrow-right md:text-[12px] text-md text-black/80 cursor-pointer`}
                onClick={() =>
                  setCurrentPage(
                    currentPage < totalPages ? currentPage + 1 : totalPages
                  )
                }
              ></i>
            </div>
          </section>
        </>
      )}
    </main>
  );
};

export default Collections;
