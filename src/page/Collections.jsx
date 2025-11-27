import { lazy, Suspense, useEffect, useMemo, useState } from "react";
import { useParams } from "react-router-dom";
import { HeroCollections, HeroSmallCollections } from "./../data/Collections";
import { ProductData } from "../data/Product";
const BigHero = lazy(() => import("../components/Collections/BigHero"));
const SmallHero = lazy(() => import("../components/Collections/SmallHero"));
const ProductCard = lazy(() => import("../components/Collections/ProductCard"));
import { motion } from "framer-motion";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
const Collections = () => {
  let { category } = useParams();
  category = category.replaceAll("-", " ");

  const maxPrice = useMemo(() => {
    let prices = ProductData.map((p) => p.price);
    if (category != "All Products") {
      prices = ProductData.filter(
        (p) => p.category.toLowerCase() === category.toLowerCase()
      ).map((p) => p.price);
    }
    return prices.length ? Math.max(...prices) : 100;
  }, [category]);

  const [bigHeroData, setBigHeroData] = useState(null);
  const [smallHeroData, setSmallHeroData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [availabilityopen, setAvailabilityopen] = useState(false);
  const [genderopen, setGenderopen] = useState(false);
  const [priceopen, setPriceopen] = useState(false);
  const [availability, setAvailability] = useState("Default");
  const [gender, setGender] = useState("All");
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
    document.title = `Armaf-${category}`;
    const big = HeroCollections.find(
      (c) => c.category.toLowerCase() === category.toLowerCase()
    );
    const small = HeroSmallCollections.filter(
      (c) => c.category.toLowerCase() === category.toLowerCase()
    );
    let pdata = ProductData;
    if (category != "All Products") {
      pdata = ProductData.filter(
        (c) => c.category.toLowerCase() === category.toLowerCase()
      );
    }
    setBigHeroData(big);
    setSmallHeroData(small);
    setFilteredProducts(pdata);
    setCurrentPage(1);

    setPricemin(0);
    setPricemax(maxPrice);

    setLoading(false);
    setGenderopen(false);
    setAvailabilityopen(false);
    setPriceopen(false);
    setAvailability("Default");
    setGender("All");
    setPricemin(0);
    setPricemax(maxPrice);
    setSortby("default");
  }, [category, maxPrice]);

  const filtered = useMemo(() => {
    let data = ProductData;
    if (category != "All Products") {
      data = ProductData.filter(
        (p) => p.category.toLowerCase() === category.toLowerCase()
      );
    }

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
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
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

  return (
    <main className="flex flex-col items-center">
      <motion.h1
        initial={{ opacity: 0, y: -10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
        className="my-4 text-2xl tracking-wider text-center uppercase md:text-4xl text-black/80 font-extralight"
      >
        {category}
      </motion.h1>

      {category !== "New Launches" && bigHeroData && (
        <>
          <Suspense
            fallback={
              <Skeleton
                className="mb-8"
                width="100vw"
                height="600px"
                baseColor="#B0B0B0"
              />
            }
          >
            <motion.section
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
              className="w-full"
            >
              <BigHero img={bigHeroData.img} name={bigHeroData.name} />
            </motion.section>
          </Suspense>
          <motion.section
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={{
              hidden: {},
              visible: {
                transition: {
                  staggerChildren: 0.3,
                },
              },
            }}
            className="lg:w-[760px] lg:mt-10 lg:mb-16 mt-10 mb-32 grid lg:gap-[50px] gap-[150px]"
          >
            {smallHeroData.map(
              ({ category, title, des, imgbig, imgsmall }, index) => (
                <motion.div
                  key={index}
                  variants={{
                    hidden: { opacity: 0, y: -10 },
                    visible: {
                      opacity: 1,
                      y: 0,
                      transition: { duration: 0.6, ease: "easeInOut" },
                    },
                  }}
                >
                  <SmallHero
                    category={category}
                    title={title}
                    des={des}
                    imgbig={imgbig}
                    imgsmall={imgsmall}
                    reverse={index % 2 !== 0}
                  />
                </motion.div>
              )
            )}
          </motion.section>
        </>
      )}

      <section className="w-[98.5%] z-[10]">
        <div className="flex flex-col w-full gap-5 py-10 md:justify-between md:flex-row">
          <div className="flex flex-col gap-3 text-sm md:items-center md:flex-row text-black/70 md:text-md">
            <motion.h1
              initial={{ opacity: 0, y: -10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
              className="px-1 tracking-wide"
            >
              Filter:{" "}
            </motion.h1>
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
              className="flex justify-between md:gap-3"
            >
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
                        setPricemax(
                          e.target.value > maxPrice ? maxPrice : e.target.value
                        )
                      }
                      placeholder="Maximum"
                      className="w-1/2 h-[50px] bg-white border text-center text-xl rounded input-no-arrows outline-0"
                    />
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
          <div className="flex flex-row items-center justify-between gap-2 px-1 text-sm text-black/70 text-nowrap md:text-md">
            <div className="flex">
              <motion.h1
                initial={{ opacity: 0, y: -10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
              >
                Sort by:{" "}
              </motion.h1>
              <motion.select
                initial={{ opacity: 0, y: -10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
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
              </motion.select>
            </div>
            <motion.p
              initial={{ opacity: 0, y: -10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
              className="text-sm text-black/50"
            >
              {currentProducts.length} Products
            </motion.p>
          </div>
        </div>
      </section>
      {currentProducts.length == 0 ? (
        <div className="h-[400px] flex items-center justify-center flex-col w-full text-center">
          <h1>No Products Found In This Filter</h1>
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
          <Suspense
            fallback={
              <>
                <section className="w-[98.5%] grid xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-2 z-[9]">
                  {currentProducts.map(({ id }) => (
                    <Skeleton key={id} height="340px" baseColor="#B0B0B0" />
                  ))}
                </section>
              </>
            }
          >
            {loading ? (
              <section className="w-[98.5%] grid xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-2 z-[9]">
                {currentProducts.map(({ id }) => (
                  <Skeleton key={id} height="340px" />
                ))}
              </section>
            ) : (
              <section className="w-[98.5%] grid xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-2 z-[9]">
                {currentProducts.map(
                  ({ id, name, category, price, stock, img }) => (
                    <motion.div
                      className="relative"
                      key={id}
                      initial={{ opacity: 0, y: -10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, amount: 0.2 }}
                      transition={{ duration: 0.6, ease: "easeInOut" }}
                    >
                      <ProductCard
                        name={name}
                        category={category}
                        price={price}
                        stock={stock}
                        img={img}
                      />
                    </motion.div>
                  )
                )}
              </section>
            )}
          </Suspense>
          <motion.section
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
            className="w-full h-[30px] mt-5 flex justify-center items-center"
          >
            <div className="flex items-center h-full gap-3 w-fit">
              <i
                className={`${
                  currentPage == 1 && "hidden"
                } bi bi-arrow-left md:text-[12px] text-md text-black/80 cursor-pointer`}
                onClick={() => {
                  window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
                  setCurrentPage(currentPage > 1 ? currentPage - 1 : 1);
                  setLoading(true);
                  setTimeout(() => {
                    setLoading(false);
                  }, 2000);
                }}
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
                    setLoading(true);
                    setTimeout(() => {
                      setLoading(false);
                    }, 2000);
                  }}
                >
                  {i + 1}
                </div>
              ))}
              <i
                className={`${
                  currentPage == totalPages && "hidden"
                } bi bi-arrow-right md:text-[12px] text-md text-black/80 cursor-pointer`}
                onClick={() => {
                  window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
                  setCurrentPage(
                    currentPage < totalPages ? currentPage + 1 : totalPages
                  );
                  setLoading(true);
                  setTimeout(() => {
                    setLoading(false);
                  }, 2000);
                }}
              ></i>
            </div>
          </motion.section>
        </>
      )}
    </main>
  );
};

export default Collections;
