import React, { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoMdClose } from "react-icons/io";
import { FaFacebook, FaTwitter, FaLinkedin } from "react-icons/fa";
import { CiMail } from "react-icons/ci";
import { FaLaptopCode } from "react-icons/fa6";
import {accb1} from "../assets/index"
import { NavLink } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

const Navbar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen((prevState) => !prevState);
  };

  return (
    <>
      {/* Mobile Navbar */}
      <nav
        role="navigation"
        className="sticky flex justify-between items-center top-0 px-4 bg-white z-40 border-b border-gray-5 border-opacity-5 shadow-sm md:hidden py-3">
        <div>
          <NavLink
            to="/"
            className="inline-block text-xl  hover:text-custom-green">
            Dev
            <FaLaptopCode className="inline-block text-center text-3xl opacity-50" />
          </NavLink>
        </div>

        <button className="p-2" onClick={toggleNav}>
          {isNavOpen ? <IoMdClose /> : <RxHamburgerMenu className="text-xl" />}
        </button>

        <ul
          id="nav_content"
          className={`absolute top-0 h-screen w-full transition-all duration-500 overflow-hidden bg-white ${
            isNavOpen ? "right-0" : "right-full"
          }`}>
          <div className="absolute grid grid-cols-3 w-full place-items-center pt-4">
            <div className="col-start-2 col-end-3">
              <NavLink
                to="/"
                className="inline-block text-xl  hover:text-custom-green">
                Dev
                <FaLaptopCode className="inline-block text-center text-3xl opacity-50 " />
              </NavLink>
            </div>

            <button
              className="col-start-3 col-end-4 ml-8 p-1 border border-accent2 border-black rounded-md"
              onClick={toggleNav}>
              <IoMdClose className="text-xl text-red-600 opacity-100" />
            </button>
          </div>

          <div className="text-4xl font-thin text-center h-full">
            <div className="flex flex-col items-center justify-center gap-y-12 mt-40">
              <div className="inline-block relative">
                <li className="relative z-10 text-2xl font-light">
                  <NavLink
                    to="/"
                    className="inline-block h-full w-full   hover:text-custom-green">
                    Home
                  </NavLink>
                </li>
                <div className="absolute bottom-0 h-2 w-full bg-accent"></div>
              </div>
              <div className="inline-block relative">
                <li className="relative z-10 text-2xl font-light">
                  <NavLink
                    to="/services"
                    className="inline-block h-full w-full   hover:text-custom-green">
                    Services
                  </NavLink>
                </li>
                <div className="absolute bottom-0 h-2 w-full bg-accent"></div>
              </div>

              <div className="inline-block relative">
                <li className="relative z-10 text-2xl font-light">
                  <NavLink
                    to="/contact"
                    className="inline-block h-full w-full   hover:text-custom-green">
                    Contact Us
                  </NavLink>
                </li>
                <div className="absolute bottom-0 h-2 w-full bg-accent"></div>
              </div>
            </div>

            <div className="relative mt-24 text-2xl">
              <div className="relative opacity-75 pt-8 z-10">
                <a
                  href="#"
                  className="p-2 mx-2 pl-0 inline-block   hover:text-blue-600">
                  <CiMail />
                </a>
                <a
                  href="#"
                  className="p-2 mx-2 inline-block   hover:text-blue-600">
                  <FaTwitter />
                </a>
                <a href="#" className="p-2 mx-2 inline-block  ">
                  <FaFacebook className=" hover:text-blue-600" />
                </a>
                <a
                  href="#"
                  className="p-2 mx-2 inline-block  hover:text-blue-600">
                  <FaLinkedin />
                </a>
              </div>
              <img
                className="absolute transform scale-150 top-20 z-0"
                src={accb1}
                alt="Green decorative background"></img>
            </div>
          </div>
        </ul>
      </nav>

      {/* Desktop Navbar */}
      <main>
        <nav
          role="navigation"
          className="hidden px-8 md:flex md:justify-center md:gap-x-32 md:mt-4 xl:max-w-screen-2xl xl:mx-auto">
          <div>
            <NavLink
              to="/"
              className="inline-block text-xl hover:text-custom-green">
              Dev
              <FaLaptopCode className="inline-block text-center text-3xl opacity-50" />
            </NavLink>
          </div>

          <div className="list-none flex justify-center items-center gap-x-8 text-xs opacity-60 font-medium xl:text-sm xl:gap-x-12 xl:pl-10">
            <div className="inline-block relative">
              <li className="relative">
                <NavLink
                  to="/"
                  className="inline-block h-full w-full   hover:text-custom-green">
                  Home
                </NavLink>
              </li>
            </div>
            <div className="inline-block relative">
              <li className="relative">
                <NavLink
                  to="/services"
                  className="inline-block h-full w-full   hover:text-custom-green">
                  Services
                </NavLink>
              </li>
            </div>

            <div className="inline-block relative">
              <li className="relative">
                <HashLink
                  to="#testimonials"
                  className="inline-block h-full w-full   hover:text-custom-green">
                  Testimonials
                </HashLink>
              </li>
            </div>

            <div className="inline-block relative">
              <li className="relative">
                <HashLink
                  to="#experience"
                  className="inline-block h-full w-full  hover:text-custom-green">
                  Experience
                </HashLink>
              </li>
            </div>

            <div className="inline-block relative">
              <li className="relative">
                <NavLink
                  to="/contact"
                  className="inline-block h-full w-full  hover:text-custom-green">
                  Contact Us
                </NavLink>
              </li>
            </div>
          </div>

          <div className="flex gap-x-4 opacity-75">
            <a href="#" className="p-2 opacity-60  hover:text-custom-green">
              <CiMail />
            </a>
            <a href="#" className="p-2 opacity-60   hover:text-custom-green">
              <FaFacebook />
            </a>
            <a href="#" className="p-2 opacity-60   hover:text-custom-green">
              <FaLinkedin />
            </a>
            <a href="#" className="p-2 opacity-60   hover:text-custom-green">
              <FaTwitter />
            </a>
          </div>
        </nav>
      </main>
    </>
  );
};

export default Navbar;
