import React from 'react'
import logo from "../assests/logo.png"
import { GiHamburgerMenu } from "react-icons/gi";
const Navbar = () => {
    return (
      <nav className="bg-white dark:bg-gray-900  w-full z-20 top-0 start-0 border-b border-gray-200 dark:border-gray-600">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <a
            href="#"
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <img src={logo} className="h-8" alt="Flowbite Logo" />
          </a>
          <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
            <div className="text-white flex flex-row items-center bg-[#F5DFD6]  focus:outline-none  font-medium  text-sm px-2 py-2 text-center rounded-full">
              <GiHamburgerMenu color="black" className="mx-2 text-xl" />
              <button
                type="button"
                className="text-white bg-[#2B1845]  focus:outline-none  font-medium  text-sm px-4 py-2 text-center rounded-full"
              >
                Find Top Talent
              </button>
            </div>
          </div>
          <div
            className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
            id="navbar-sticky"
          ></div>
        </div>
      </nav>
    );
}

export default Navbar