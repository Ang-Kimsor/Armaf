import { Navbar, Footer } from "../components";
import { Outlet, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Suspense } from "react";
import Loading from "../components/Loading";
const Rootlayout = () => {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, [location.pathname]);
  return (
    <>
      <Navbar />
      <Suspense key={location.pathname} fallback={<Loading />}>
        <Outlet />
      </Suspense>
      <Footer />
    </>
  );
};

export default Rootlayout;
