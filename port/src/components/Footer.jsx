import React from 'react'
import { FaFacebook, FaTwitter, FaCopyright,FaLinkedin } from "react-icons/fa";
import { CiMail } from "react-icons/ci";
import { FaLaptopCode } from "react-icons/fa6";
import { Link } from 'react-router-dom';
import { HashLink } from "react-router-hash-link";
const Footer = () => {
  return (
    <>
      <footer className="relative z-20 flex flex-col items-center justify-between px-[8rem] pt-6 bg-white md:pt-4 lg:bg-gray-100 lg:shadow-inner">
        {/* <!-- Nav Links container -->
    <!-- Menu Items --> */}
        <div className="text-sm list-none w-full max-w-screen-xl md:flex md:flex-row md:justify-between md:items-center md:pb-8 gap-x-8 opacity-75 lg:gap-x-16">
          {/* <!-- Logo --> */}
          <div className="md:mt-4 mb-4 lg:mt-11 lg:mb-8">
            <Link
              to="/"
              className="inline-block text-xl  hover:text-custom-green">
              Dev
              <FaLaptopCode className="inline-block text-3xl opacity-50 text-center" />
            </Link>
          </div>

          {/* <!-- Menu items --> */}
          <div className="flex flex-col justify-left max-w-max gap-y-2 md:gap-y-0 md:flex-row md:gap-x-12">
            {/* <!-- Menu Item --> */}
            <div className="inline-block relative ">
              <li className="relative z-10 text-sm font-medium lg:text-base lg:font-normal lg: hover:text-custom-green">
                <Link
                  to="/services"
                  className="inline-block h-full w-full  hover:text-custom-green">
                  Services
                </Link>
              </li>
              <div className="absolute bottom-0 h-1 w-full bg-accent hidden md:absolute lg:hidden"></div>
            </div>

            {/* <!-- Menu Item --> */}
            <div className="inline-block relative">
              <li className="relative z-10 text-sm font-medium lg:text-base lg:font-normal ">
                <HashLink
                  to="#testimonials"
                  className="inline-block h-full w-full  hover:text-custom-green">
                  Testimonials
                </HashLink>
              </li>
              <div className="absolute bottom-0 h-1 w-full bg-accent hidden md:absolute lg:hidden"></div>
            </div>

            {/* <!-- Menu Item --> */}
            <div className="inline-block relative">
              <li className="relative z-10 text-sm font-medium lg:text-base lg:font-normal lg: hover:text-custom-green">
                <HashLink
                  to="#experience"
                  className="inline-block h-full w-full  hover:text-custom-green">
                  Experience
                </HashLink>
              </li>
              <div className="absolute bottom-0 h-1 w-full bg-accent hidden md:absolute lg:hidden"></div>
            </div>

            {/* <!-- Menu Item --> */}
            <div className="inline-block relative">
              <li className="relative z-10 text-sm font-medium lg:text-base lg:font-normal lg: hover:text-custom-green">
                <Link
                  to="/contact"
                  className="inline-block h-full w-full  hover:text-custom-green">
                  Contact
                </Link>
              </li>
              <div className="absolute bottom-0 h-1 w-full bg-accent hidden md:absolute lg:hidden"></div>
            </div>
          </div>

          {/* <!-- Social Links --> */}

          {/* <!-- Icons --> */}
          <div className="flex opacity-75 mt-2 mb-2 justify-end md:gap-x-2 md:mt-0 md:mb-0">
            {/* <!-- Mail Icon --> */}
            <Link
              to="/contact"
              className="p-2 pl-0 inline-block md:pb-0 mx-2  hover:text-custom-green">
              <CiMail />
            </Link>

            {/* <!-- Twitter Icon --> */}
            <a
              href="#"
              className="p-2 pl-0 inline-block md:pb-0 mx-2  hover:text-custom-green">
              <FaTwitter />
            </a>

            {/* <!-- Facebook Icon --> */}
            <a
              href="#"
              className="p-2 pl-0 inline-block md:pb-0 mx-2  hover:text-custom-green">
              <FaFacebook />
            </a>
            {/* <!-- LinkedIn Icon --> */}
            <a
              href="#"
              className="p-2 pl-0 inline-block md:pb-0 mx-2  hover:text-custom-green">
              <FaLinkedin />
            </a>
          </div>
        </div>

        {/* <!-- Disclaimers --> */}
        <div className="flex flex-col items-center opacity-50 text-xs md:mb-2 lg:mb-6">
          <div className="flex gap-x-4 mb-2">
            <a href="#">Terms & Conditions</a>
            <a href="#">Privacy Policy</a>
          </div>
          <div className="font-medium mb-1">
            <FaCopyright className="inline-block" /> devday
          </div>
        </div>

        {/* <!-- Copyright + Privacy Policy --> */}
      </footer>
    </>
  );
}

export default Footer
