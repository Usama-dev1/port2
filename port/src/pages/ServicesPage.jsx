import React, { useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { s1, s2, s3, sbubble } from "../assets/index";
import { FaArrowRight } from "react-icons/fa";

const ServicesPage = () => {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (location.hash === "#testimonials") {
      navigate("/#testimonials", { replace: true });
    }
    if (location.hash === "#experience") {
      navigate("/#experience", { replace: true });
    }
  }, [location, navigate]);

  return (
    <>
      <main>
        {/* <!-- Main landing section --> */}
        <section className="px-8 lg:px-0 lg:relative lg:flex lg:justify-center xl:max-w-screen-2xl xl:mx-auto">
          {/* <!-- Centered landing section --> */}
          <div>
            <div className="pt-4 pb-16 md:grid md:grid-cols-2 md:gap-x-8 md:place-items-center lg:pt-8 lg:pb-20 lg:flex lg:items-center lg:justify-center">
              {/* <!-- Text Container--> */}
              <div className="pt-8 mx-auto lg:w-1/3 lg:py-24">
                <h1 className="font-bold text-3xl md:text-4xl lg:text-5xl">
                  Our Services
                </h1>
                <p className="mt-4 text-sm opacity-75 md:pr-4 lg:mt-8 md:text-lg lg:text-2xl">
                  Discover the range of services we offer to elevate your
                  business and streamline your digital presence.
                </p>
              </div>

              {/* <!-- Services --> */}
              <div className="pt-12 lg:pt-0">
                <h2 className="inline-block uppercase opacity-75 text-xs font-light italic lg:text-sm lg:pb-4">
                  Our Expertise
                </h2>

                {/* <!-- Value Propositions --> */}
                <div className="grid gap-y-4 md:gap-y-0 md:grid-cols-2 md:gap-x-12 lg:gap-y-12">
                  {/* <!-- 1 --> */}
                  <div>
                    <FaArrowRight className="m-1" />
                    <div></div>
                    {/* <!-- Heading --> */}
                    <h3 className="mb-2 font-medium text-sm -mt-2 lg:text-base lg:mt-0">
                      <b className="font-black">Custom Web Development</b>{" "}
                      tailored to your needs
                    </h3>
                  </div>

                  {/* <!-- 2 --> */}
                  <div>
                    <FaArrowRight className="m-1" />
                    <div></div>
                    {/* <!-- Heading --> */}
                    <h3 className="mb-2 font-medium text-sm -mt-2 lg:text-base lg:mt-0">
                      <b className="font-black">Web Applications</b> that drive
                      results
                    </h3>
                  </div>

                  {/* <!-- 3 --> */}
                  <div>
                    <FaArrowRight className="m-1" />
                    <div></div>
                    {/* <!-- Heading --> */}
                    <h3 className="mb-2 font-medium text-sm -mt-2 lg:text-base lg:mt-0">
                      <b className="font-black">E-commerce Solutions</b> for
                      seamless shopping
                    </h3>
                  </div>

                  {/* <!-- 4 --> */}
                  <div>
                    <FaArrowRight className="m-1" />
                    <div></div>
                    {/* <!-- Heading --> */}
                    <h3 className="mb-2 font-medium text-sm -mt-2 lg:text-base lg:mt-0">
                      <b className="font-black">Troubleshooting</b> and
                      Optimization
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* <!-- Services Container --> */}
        <section className="px-1 md:px-2 lg:px-4">
          {/* <!-- Service 1 --> */}
          <div className="lg:grid lg:grid-cols-2 mb-1 md:mb-2 lg:mb-4">
            {/* <!-- Pic and # --> */}
            <div className="relative w-full pb-1/1 overflow-hidden xl:pb-2/3">
              <img
                className="absolute right-0 bottom-0 w-full h-full object-cover"
                src={s1}
                alt="Working people"
              />
              <div className="absolute pl-4 pt-2 lg:pl-6 lg:pt-4">
                <span className="w-full relative z-20 text-6xl font-bold text-stroke_thick text-transparent opacity-40 xl:text-7xl">
                  1
                </span>
                <img
                  className="absolute top-0 right-0 transform scale-250 z-10"
                  src={sbubble}
                  alt=""
                />
              </div>
            </div>

            {/* <!-- Text --> */}
            <div className="flex flex-col justify-center items-center bg-accentLight px-6 pt-8 pb-16 md:pt-10 md:pb-20 lg:px-20 lg:pt-20 lg:pb-24">
              <div>
                {/* <!-- Heading --> */}
                <h2 className="text-2xl font-bold mb-6 lg:text-4xl lg:mb-12">
                  Custom Web Development
                </h2>

                {/* <!-- Short description --> */}
                <p className="mb-6 md:text-lg lg:text-xl lg:mb-12">
                  Crafting bespoke websites tailored to your unique business
                  needs. Our custom web development services ensure a seamless
                  blend of functionality and design.
                </p>
                <div className="relative z-20 mb-10 lg:mb-12">
                  <div className="text-base -mt-2 md:text-lg lg:text-xl">
                    What{" "}
                    <div className="relative inline-block z-20">
                      <div className="relative z-10">sets</div>
                      <div className="absolute bottom-1 bg-accent2Light opacity-75 h-3 w-full transform -rotate-3"></div>
                    </div>{" "}
                    us apart
                  </div>
                </div>

                {/* <!-- Longer text --> */}
                <p className="text-sm md:text-base leading-normal lg:leading-relaxed">
                  We create custom websites that not only look great but also
                  work flawlessly. Our approach focuses on understanding your
                  specific requirements and delivering a solution that enhances
                  user experience and meets your business goals. Instead of a
                  one-size-fits-all approach, we tailor every aspect to ensure
                  your site stands out and performs efficiently.
                </p>
              </div>
            </div>
          </div>
          {/* <!-- Service 2 --> */}
          <div className="lg:grid lg:grid-cols-2 mb-1 md:mb-2 lg:mb-4">
            {/* <!-- Pic and # --> */}
            <div className="relative w-full pb-1/1 overflow-hidden lg:order-2 xl:pb-2/3">
              <img
                className="absolute right-0 bottom-0 w-full h-full object-cover"
                src={s2}
                alt="Working people"
              />
              <div className="absolute pr-4 pt-2 lg:pr-6 lg:pt-4 right-0">
                <span className="w-full relative z-20 text-6xl font-bold text-stroke_thick text-transparent opacity-40 xl:text-7xl">
                  2
                </span>
                <img
                  className="absolute top-0 right-0 transform scale-250 z-10"
                  src={sbubble}
                  alt=""
                />
              </div>
            </div>

            {/* <!-- Text --> */}
            <div className="flex flex-col justify-center items-center bg-accentLight px-6 pt-8 pb-16 md:pt-10 md:pb-20 lg:px-20 lg:pt-20 lg:pb-24">
              <div>
                {/* <!-- Heading --> */}
                <h2 className="text-2xl font-bold mb-6 lg:text-4xl lg:mb-12">
                  E-Commerce Solutions
                </h2>

                {/* <!-- Short description --> */}
                <div className="text-base -mt-2 max-w-prose md:text-lg lg:text-xl mb-6 lg:mb-12">
                  Tailored e-commerce solutions for WordPress and Shopify.
                  <div className="relative inline-block z-20">
                    <div className="relative z-10">Transforming</div>
                    <div className="absolute bottom-1 bg-accent2Light opacity-75 h-3 w-full transform -rotate-3"></div>
                  </div>{" "}
                  your online store experience.
                </div>
                <div className="relative z-20 mb-10 lg:mb-12">
                  <div className="text-base -mt-2 md:text-lg lg:text-xl">
                    What enhances your online success.
                  </div>
                </div>

                {/* <!-- Longer text --> */}
                <p className="text-sm md:text-base leading-normal lg:leading-relaxed">
                  Whether you're looking for a robust Shopify store or a
                  flexible WordPress e-commerce site, our solutions are designed
                  to meet your needs. We focus on creating seamless shopping
                  experiences, optimizing performance, and integrating essential
                  features to help your business thrive online. Get a website
                  that not only looks great but also converts visitors into
                  customers efficiently.
                </p>
              </div>
            </div>
          </div>

          {/* <!-- Service 3 --> */}
          <div className="lg:grid lg:grid-cols-2">
            {/* <!-- Pic and # --> */}
            <div className="relative w-full pb-1/1 overflow-hidden xl:pb-2/3">
              <img
                className="absolute right-0 bottom-0 w-full h-full object-cover"
                src={s3}
                alt="Working people"
              />
              <div className="absolute pl-4 pt-2 lg:pl-6 lg:pt-4">
                <span className="w-full relative z-20 text-6xl font-bold text-stroke_thick text-transparent opacity-40 xl:text-7xl">
                  3
                </span>
                <img
                  className="absolute top-0 right-0 transform scale-250 z-10"
                  src={sbubble}
                  alt=""
                />
              </div>
            </div>

            {/* <!-- Text --> */}
            <div className="flex flex-col justify-center items-center bg-accentLight px-6 pt-8 pb-16 md:pt-10 md:pb-20 lg:px-20 lg:pt-20 lg:pb-24">
              <div>
                {/* <!-- Heading --> */}
                <h2 className="text-2xl font-bold mb-6 lg:text-4xl lg:mb-8">
                  Web Application Development
                </h2>
                {/* <!-- Short description --> */}
                <div className="text-base -mt-2 max-w-prose md:text-lg lg:text-xl mb-6 lg:mb-12">
                  Expert web apps development that’s both
                  <div className="relative inline-block z-20">
                    <div className="relative z-10">innovative</div>
                    <div className="absolute bottom-1 bg-accent2Light opacity-75 h-3 w-full transform -rotate-3"></div>
                  </div>{" "}
                  and effective.
                </div>
                <div className="relative z-20 mb-10 lg:mb-12">
                  <div className="text-base -mt-2 md:text-lg lg:text-xl">
                    What drives your digital success.
                  </div>
                </div>

                {/* <!-- Longer text --> */}
                <p className="text-sm md:text-base leading-normal lg:leading-relaxed">
                  We specialize in creating dynamic and high-performing web
                  applications tailored to your specific needs. From seamless
                  user interfaces to robust back-end solutions, our approach
                  ensures your web app not only meets your requirements but
                  exceeds expectations. Let's turn your ideas into engaging and
                  scalable applications that drive your business forward.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* <!-- Get in Touch Today mini-banner --> */}
        <div className="relative w-full text-center my-4 md:my-8 lg:my-10 xl:my-24">
          <span className="relative px-2 bg-white z-10 uppercase font-medium hover:text-accent2">
            <a href="contact.html">Get in touch today</a>
          </span>

          {/* <!-- Green line --> */}
          <div className="absolute h-1 w-full bg-accent top-3 z-0"></div>
        </div>
      </main>
    </>
  );
};

export default ServicesPage;
