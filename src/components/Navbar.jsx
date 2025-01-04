import React from "react";
import { LINKS } from "../constants";

const Navbar = () => {
  const navigateToHeroSection = () => {
    const targetElement = document.getElementById("home");
    if (targetElement) {
      const offsetTop = targetElement.offsetTop - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      });
    }
  };

  const handleScroll = (event, targetId) => {
    event.preventDefault();
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      const offsetTop = targetElement.offsetTop - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      });
    }
  };

  return (
    <nav className="sticky top-0 z-50 py-3 backdrop-blur-lg border-b border-neutral-700/80">
      <div className="container px-4 mx-auto relative lg:text-sm">
        <div className="flex justify-between items-center">
          <div className="flex items-center flex-shrink-0">
            <p className="cursor-pointer" onClick={navigateToHeroSection}>
              Malboosat
            </p>
          </div>
          <div className="hidden lg:flex ml-14 space-x-12">
            {LINKS.map((link, index) => (
              <a
                key={index}
                href={`/${link.targetId}`}
                className="p-2"
                onClick={(e) => handleScroll(e, link.targetId)}
              >
                {link.text}
              </a>
            ))}
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
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
