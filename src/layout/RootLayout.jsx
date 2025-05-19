import { Navbar, Footer } from "../components/Main";
import { Outlet } from "react-router-dom";

const Rootlayout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
};

export default Rootlayout;
