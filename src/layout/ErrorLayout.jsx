import { Navbar, Footer } from "../components";
import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
const ErrorLayout = () => {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, [location.pathname]);
  return (
    <>
      <Navbar />
      <main className="w-full h-[500px] flex items-center justify-center  flex-col">
        <i class="bi bi-exclamation-circle text-8xl mb-5 text-red-500"></i>
        <span className="text-center">
          <h1 className="text-5xl  mb-5">404 - Page Not Found</h1>
          <p className="mb-10 text-gray-500/90">
            Look like you're trying to find the page that we don't have! Any
            Problems{" "}
            <Link to={"/"} className="underline">
              Contact Us
            </Link>
          </p>
          <Link to={"/"} className="bg-red-500 px-5 py-3 text-white rounded">
            Back to Home
          </Link>
        </span>
      </main>
      <Footer />
    </>
  );
};

export default ErrorLayout;
