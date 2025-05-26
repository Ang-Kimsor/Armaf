import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import logo from "./../../assets/logo.jpg";
import { Link } from "react-router-dom";
import { NavbarData } from "../../data/Navbar";

const Navbar = () => {
  const navigate = useNavigate();
  const [submenusm, setSubmenusm] = useState(null);
  const [submenulg, setSubmenulg] = useState(null);
  const [opened, setOpened] = useState(false);
  const handleSubmenuLgClick = (e, index) => {
    e.preventDefault();
    setSubmenulg((prev) => (prev === index ? null : index));
  };
  const handleSubmenuSmClick = (e, index) => {
    e.preventDefault();
    setSubmenusm(index);
  };
  const setDefault = () => {
    setSubmenulg(null);
    setSubmenusm(null);
    setOpened(false);
  };
  useEffect(() => {
    if (opened) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [opened]);
  return (
    <>
      <header className="w-full h-[40px] bg-white flex items-center justify-center md:text-[13px] text-[9px] tracking-wider text-black/80">
        FREE SHIPPING ON ALL ORDERS | U.S. ONLY
      </header>
      <aside
        className={`lg:hidden w-full ${
          opened ? "translate-x-0" : "-translate-x-full"
        } fixed h-screen bg-white top-0 z-[101] transition-all duration-300 flex flex-col justify-between`}
      >
        <i
          className="right-3 top-3 bi bi-x absolute text-3xl cursor-pointer z-[99]"
          onClick={() => setOpened(false)}
        ></i>
        <ul className={`w-full h-full bg-white md:py-3 my-12 z-[100]`}>
          {NavbarData.map(({ name, submenu }, index) => (
            <li
              className="w-full overflow-x-hidden"
              key={index}
              onClick={(e) => handleSubmenuSmClick(e, index)}
            >
              <p className="flex items-center justify-between px-5 py-3 font-medium tracking-widest uppercase cursor-pointer md:p-3 hover:bg-black/10 text-md text-black/70">
                {name} <i className="text-xl bi bi-arrow-right"></i>
              </p>
              <span
                className={`${
                  submenusm == index ? " translate-x-0" : " translate-x-[200%]"
                } w-full absolute top-0 left-0 h-screen bg-white z-[101] transition-all duration-500`}
              >
                <p
                  onClick={(e) => {
                    e.stopPropagation();
                    setSubmenusm(null);
                  }}
                  className="flex gap-2 px-5 py-3 font-medium tracking-widest uppercase cursor-pointer w-fit md:p-3 text-md text-black/70"
                >
                  <i className="bi bi-arrow-left"></i>
                  {name}
                </p>
                <ul className="flex flex-col">
                  {submenu.map((item, j) => (
                    <li
                      key={j}
                      className="flex items-center justify-between px-5 py-3 font-medium tracking-widest uppercase cursor-pointer md:p-3 hover:bg-black/10 text-md text-black/70"
                    >
                      <Link
                        className="size-full"
                        onClick={setDefault}
                        to={`Collections/${item.replaceAll(" ", "-")}`}
                      >
                        {item}
                      </Link>
                    </li>
                  ))}
                </ul>
              </span>
            </li>
          ))}
          <li className="w-full cursor-pointer">
            <Link
              onClick={setDefault}
              className="flex items-center justify-between px-5 py-3 font-medium tracking-widest uppercase cursor-pointer md:p-3 hover:bg-black/10 text-md text-black/70"
            >
              Store Location
            </Link>
          </li>
        </ul>
        <div className="flex items-center justify-center w-full gap-3 p-2 py-3 text-2xl text-white bg-black/10">
          <i className="text-3xl cursor-pointer bi bi-person"></i>
          <i className="cursor-pointer bi bi-facebook"></i>
          <i className="cursor-pointer bi bi-instagram"></i>
          <i className="cursor-pointer bi bi-tiktok"></i>
        </div>
      </aside>
      <nav
        className={`lg:h-[140px] h-[80px] sticky top-0 flex flex-col items-center z-[100] bg-white border-b border-black/20`}
      >
        <div className="lg:h-[100px] h-full w-full relative flex justify-between items-center px-5">
          <i
            className={`bi bi-list cursor-pointer lg:opacity-0 lg:invisible text-3xl text-black/70`}
            onClick={() => {
              setOpened(true);
              setSubmenusm(null);
            }}
          ></i>
          <img
            onClick={() => navigate("/")}
            src={logo}
            alt="Armaf"
            className="lg:h-[70px] absolute left-1/2 transform -translate-x-1/2 h-[50px] cursor-pointer"
          />

          <div className={`flex gap-3 items-center text-black/70`}>
            <i className="text-xl bi bi-search"></i>
            <i className="hidden text-2xl bi bi-person lg:block"></i>
            <i className="text-xl bi bi-bag"></i>
          </div>
        </div>
        <div className="lg:flex hidden h-[40px] justify-center items-center w-full">
          <ul className={`w-fit p-0 flex-row flex gap-5 text-black/70`}>
            {NavbarData.map(({ name, submenu }, index) => (
              <li
                key={index}
                className="relative"
                onClick={(e) => handleSubmenuLgClick(e, index)}
              >
                <p className="text-[13px] hover:underline uppercase flex items-center gap-1 justify-between tracking-widest cursor-pointer">
                  {name}
                  <i
                    className={`bi bi-chevron-${
                      submenulg == index ? "up" : "down"
                    } text-[12px]`}
                  ></i>
                </p>
                <span
                  className={`${
                    submenulg == index ? "flex" : "hidden"
                  } absolute w-fit bg-white left-[-14px] top-[32px]`}
                >
                  <ul className="flex flex-col gap-3 px-4 py-3 border border-black/20">
                    {submenu.map((item, j) => (
                      <li key={j} onClick={() => setDefault}>
                        <Link
                          to={`Collections/${item.replaceAll(" ", "-")}`}
                          className="text-sm tracking-wide uppercase hover:underline text-nowrap"
                        >
                          {item}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </span>
              </li>
            ))}

            <li className="group" onClick={() => setDefault}>
              <Link className="text-[13px] group-hover:underline uppercase flex items-center gap-1 justify-between tracking-widest cursor-pointer">
                Store Location
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
