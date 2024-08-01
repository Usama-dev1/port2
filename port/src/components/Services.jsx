import React from 'react'
import {bubbleimg}  from "../assets/index";
import { FaShopify, FaWordpress } from "react-icons/fa";
import { FaMoneyBillTrendUp } from "react-icons/fa6";
import { FaLaptopFile } from "react-icons/fa6";

const Services = () => {
  return (
    <>
      <section id="#services" className="leading-loose relative">
        {/* <!-- Bubbly top banner --> */}
        <div>
          <img src={bubbleimg} alt="Green and red bubble banner. " />
        </div>

        {/* <!-- Headings and text container --> */}
        <div className="text-center pt-8 pb-24 px-4 md:pt-12 lg:flex lg:flex-col lg:items-center lg:pb-48">
          {/* <!-- Heading and description --> */}
          <h2 className="text-2xl font-bold md:text-3xl lg:text-4xl">
            We Help You{" "}
            <div className="relative inline-block z-20">
              <div className="relative z-10">Grow</div>
              <div className="absolute bottom-1 bg-accent h-3 w-full transform -rotate-6"></div>
            </div>{" "}
            Your Business
          </h2>
          <p className="text-sm mt-5 md:mx-auto lg:text-md lg:mt-6">
            Boost your business with a standout online presence. From
            eye-catching websites to dynamic web apps, I create digital
            solutions that captivate and drive results. Let's turn your vision
            into a compelling web experience.
          </p>

          {/* <!-- Value Propositions --> */}
          <div className="text-left mt-10 grid gap-y-12 md:grid-cols-2 md:gap-x-12 md:px-4 lg:gap-x-20 lg:mt-16">
            {/* <!-- 1 --> */}
            <div>
              {/* <!-- Icon --> */}
              <div>
                <FaShopify className="text-2xl" />
              </div>

              {/* <!-- Heading --> */}
              <h3 className="mb-2 font-medium">
                <b className="font-black">Shopify Development </b> for
                E-Commerce Store
              </h3>

              {/* <!-- Description --> */}
              <p className="leading-relaxed">
                Transform your e-commerce vision into reality with our Shopify
                development services. We craft engaging and efficient online
                stores that drive sales and enhance user experience.
              </p>
            </div>

            {/* <!-- 2 --> */}
            <div>
              {/* <!-- Icon --> */}
              <div>
                <FaWordpress className="text-2xl" />
              </div>
              {/* <!-- Heading --> */}
              <h3 className="mb-2 font-medium">
                <b className="font-black">WordPress Development</b> User
                friendly Websites
              </h3>
              {/* <!-- Description --> */}
              <p className="leading-relaxed">
                Elevate your online presence with our WordPress development
                expertise. We build custom, responsive websites tailored to your
                needs, ensuring a seamless user experience and robust
                functionality.
              </p>
            </div>

            {/* <!-- 3 --> */}
            <div>
              {/* <!-- Icon --> */}
              <div>
                <FaMoneyBillTrendUp className="text-2xl" />
              </div>
              {/* <!-- Heading --> */}
              <h3 className="mb-2 font-medium">
                <b className="font-black">Custom Web Development</b> that matter
              </h3>
              {/* <!-- Description --> */}
              <p className="leading-relaxed">
                If you want Custom Designed Website.Get a website that stands
                out with our custom web development services. We provide
                tailored solutions that address your specific needs, offering a
                unique and effective.
              </p>
            </div>

            {/* <!-- 4 --> */}
            <div>
              {/* <!-- Icon --> */}
              <div>
                <FaLaptopFile className="text-xl" />
              </div>
              {/* <!-- Heading --> */}
              <h3 className="mb-2 font-medium">
                <b className="font-black">MERN Stack Development</b> for Web
                Applications
              </h3>
              {/* <!-- Description --> */}
              <p className="leading-relaxed">
                MongoDB, Express, React, and Node.js with our MERN stack
                development services. We create scalable and efficient web
                applications that meet modern demands and deliver outstanding
                performance.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Services