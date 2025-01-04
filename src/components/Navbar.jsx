import React, { useContext } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { ShoppingCartContext } from "../context/ProductContext";
import { LINKS } from "../constants";

const Navbar = () => {
  const { cartItems } = useContext(ShoppingCartContext);
  const navigate = useNavigate();
  const location = useLocation();

  const navigateToHeroSection = () => {
    if (location.pathname !== "/") {
      navigate("/");
    } else {
      const targetElement = document.getElementById("home");
      if (targetElement) {
        const offsetTop = targetElement.offsetTop - 80;
        window.scrollTo({
          top: offsetTop,
          behavior: "smooth",
        });
      }
    }
  };

  const handleScroll = (event, targetId) => {
    event.preventDefault();

    if (location.pathname !== "/") {
      navigate("/");
    } else {
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        const offsetTop = targetElement.offsetTop - 80;
        window.scrollTo({
          top: offsetTop,
          behavior: "smooth",
        });
      }
    }
  };

  const handleShopClick = () => {
    navigate("/products");
  };

  const handleCartClick = () => {
    navigate("/cart");
  };

  return (
    <nav className="sticky top-0 z-50 py-3 backdrop-blur-lg border-b border-neutral-700/80">
      <div className="container px-4 mx-auto relative lg:text-sm">
        <div className="flex justify-between items-center">
          <div className="flex items-center flex-shrink-0">
            <p
              className="cursor-pointer text-xl font-bold"
              onClick={navigateToHeroSection}
            >
              Malboosat
            </p>
          </div>
          <div className="hidden lg:flex ml-14 space-x-12">
            {LINKS.map((link, index) =>
              link.targetId === "products" ? (
                <a
                  key={index}
                  className="p-2 cursor-pointer"
                  onClick={handleShopClick}
                >
                  {link.text}
                </a>
              ) : (
                <a
                  key={index}
                  href={`#${link.targetId}`}
                  className="p-2 cursor-pointer"
                  onClick={(e) => handleScroll(e, link.targetId)}
                >
                  {link.text}
                </a>
              )
            )}
          </div>

          <div className="hidden lg:flex justify-center space-x-12 items-center">
            <a
              href="/signin"
              className="py-2 px-3 border border-[#3a7ef9] rounded-md text-[#3a7ef9] hover:bg-slate-50 shadow-lg transform transition hover:scale-105"
            >
              Sign in
            </a>
            <a
              href="/signup"
              className="text-white border bg-[#3a7ef9] py-2 px-3 rounded-md hover:bg-blue-600 shadow-lg transform transition hover:scale-105"
            >
              Create an account
            </a>
            {cartItems && cartItems.length > 0 && (
              <button
                onClick={handleCartClick}
                className="text-white py-2 px-3 border bg-[#3a7ef9] rounded-md hover:bg-blue-600 shadow-lg transform transition hover:scale-105"
              >
                Cart ({cartItems.length})
              </button>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
