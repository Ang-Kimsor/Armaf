import { Navbar, Footer } from "../components";
import { Outlet, useLocation } from "react-router-dom";
import { useEffect } from "react";

const Rootlayout = () => {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, [location.pathname]);
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
};

export default Rootlayout;
