import React from "react";
import {
  avatar1,
  avatar2,
  avatar3,
  avatar4,
  avatar5,
  heroimg,
  mainaccent,
} from "../assets/index";
import { FaFacebook, FaTwitter, FaLinkedin } from "react-icons/fa";
import { CiMail } from "react-icons/ci";

const Hero = () => {
  return (
    <>
      {/* <!-- Main landing section --> */}
      <section className="md:flex md:justify-center md:items-end lg:items-center lg:relative lg:gap-x-24 xl:max-w-screen-2xl xl:mx-auto">
        <div>
          {/* <!-- Text Container--> */}
          <div className="text-center md:text-left xs:pr-1 pt-8 px-4 md:px-8 md:flex-shrink-0 lg:py-24">
            <span className="inline-block text-sm opacity-70 lg:text-base lg:pb-2">
              The only value proposition that really matters:
            </span>
            <h1 className="font-bold text-2xl md:text-4xl lg:text-5xl">
              It’s Time for a Switch-Up
            </h1>
            <p className="text-sm opacity-75 mt-4 mb-8 md:text-base md:w-3/4 lg:text-xl">
              You can focus on running your business while we focus on growing
              it.
            </p>

            {/* <!-- CTA --> */}
            <a
              href="#contact"
              className="inline-block uppercase font-medium bg-accent px-4 py-2 text-black shadow-md mb-8">
              <span className="text-md  opacity-75">Get Started</span>
            </a>

            {/* <!-- Avatars container --> */}
            <div className="relative flex items-center justify-center md:justify-start my-4">
              {/* <!-- Avatars --> */}
              <div className="inline-block z-10 pl-2">
                <div className="inline-block rounded-full border-2 border-white">
                  <img className="h-8" src={avatar1} alt="Avatar 1" />
                </div>
                <div className="inline-block rounded-full -ml-3 border-2 border-white">
                  <img className="h-8" src={avatar2} alt="Avatar 2" />
                </div>
                <div className="inline-block rounded-full -ml-3 border-2 border-white">
                  <img className="h-8" src={avatar3} alt="Avatar 3" />
                </div>
                <div className="hidden md:inline-block rounded-full -ml-3 border-2 border-white">
                  <img className="h-8" src={avatar4} alt="Avatar 4" />
                </div>
                <div className="hidden md:inline-block rounded-full -ml-3 border-2 border-white">
                  <img className="h-8" src={avatar5} alt="Avatar 5" />
                </div>
              </div>

              <div className="inline-block z-10 ml-2">
                <span className="font-bold">30+</span>
                <span className="text-xs md:text-sm lg:text-base">
                  Happy Clients
                </span>
              </div>

              <div className="absolute h-1 w-56 md:w-72 bg-accent mt-3 rounded-r"></div>
            </div>
          </div>
        </div>
        {/* hero image container */}
        <div className="h-80 lg:h-full">
          <div className="pointer-events-none absolute h-full overflow-hidden right-0 lg:w-full">
            <div className="h-80 overflow-hidden -mb-8 -mr-12 md:-mr-96 z-0 lg:h-full lg:relative">
              <img
                className="lg:absolute lg:right-1/6 lg:transform lg:scale-75"
                src={mainaccent}
                alt="Big accent coloured blob"
              />
            </div>
          </div>

          <div className="relative z-10 h-full flex items-end md:-ml-20 overflow-hidden">
            <div className="inline-block lg:pt-40">
              <img
                className="w-64 lg:w-96"
                src={heroimg}
                alt="Ecstatic hero client"
              />
            </div>

            <div className="md:hidden opacity-75 mb-8 flex flex-col ml-10">
              <a href="#" className="p-2 text-3xl">
                <CiMail />
              </a>

              <a href="#" className="p-2 text-3xl">
                <FaLinkedin />
              </a>

              <a href="#" className="p-2 text-3xl">
                <FaFacebook />
              </a>
              <a href="#" className="p-2 text-3xl">
                <FaTwitter />
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
