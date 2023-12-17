import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";
const Navbar = () => {
  return (
    <nav className="sticky-header bg-white dark:bg-gray-900  w-full z-20 top-0 start-0 border-b border-gray-200 dark:border-gray-600">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto py-5">
        <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse"></div>
        <div className="Header" id="navbar-sticky">
          Project Management App
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
