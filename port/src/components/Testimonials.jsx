import React from "react";
import { testim1, testim2, testim3, accb1, accb2 } from "../assets/index";

import ContactHome from "./ContactHome";
const Testimonials = () => {
  return (
    <>
      {/* <!-- Container to stop Contact bubbles overflowing --> */}
      <div className="overflow-hidden">
        {/* <!-- Testimonials --> */}
        <section id="testimonials" className="relative lg:mb-16 xl:mb-0">
          <div className="relative z-20">
            <h2 className="pt-8 text-2xl font-bold text-center md:text-3xl lg:text-4xl lg:py-16">
              What the{" "}
              <div className="relative inline-block z-20">
                <div className="relative z-10">Experts</div>
                <div className="absolute bottom-2 bg-accent h-3 w-full transform -rotate-3"></div>
              </div>{" "}
              are saying
            </h2>

            {/* <!-- Testimonials container --> */}
            <div className="lg:flex lg:justify-center">
              <div className="py-24 relative z-20 md:px-20 md:pt-16 lg:flex lg:flex-wrap lg:max-w-screen lg:pt-8 lg:justify-center lg:gap-12">
                {/* <!-- Testimonial 1 --> */}
                <div className="relative border border-opacity-5 border-b-0 shadow-md mx-4 mb-24 grid grid-cols-8 px-4 py-8 bg-white md:mb-28 lg:px-12 lg:mb-0 lg:w-2/3 lg:max-w-lg lg:mx-0">
                  {/* <!-- Mobile Text --> */}
                  <p className="text-sm col-start-1 col-end-6 z-10 italic md:hidden lg:text-lg">
                    “Top-notch MERN stack app development services.”
                  </p>

                  {/* <!-- Tablet and bigger Text --> */}
                  <p className="text-sm col-start-1 col-end-6 z-10 italic hidden md:inline-block md:px-3 lg:text-lg">
                    Working with this team on our MERN stack project was a
                    game-changer. Their expertise transformed our idea into a
                    seamless web application that exceeded our expectations.
                    Highly recommended!” — Alex Johnson
                  </p>

                  {/* <!-- Image --> */}
                  <div className="relative col-start-6 col-end-9 overflow-visible">
                    <img
                      className="h-[8rem] absolute bottom-0 right-0 -mb-8 md:h-56"
                      src={testim1}
                      alt="Portait of a grey shirted man"
                    />
                  </div>
                </div>

                {/* <!-- Testimonial 2 --> */}
                <div className="relative border border-opacity-5 border-b-0 shadow-md mx-4 mb-24 grid grid-cols-8 px-4 py-8 bg-white md:mb-28 lg:px-12 lg:mb-0 lg:w-2/3 lg:max-w-lg lg:mx-0">
                  {/* <!-- Mobile Text --> */}
                  <p className="text-sm col-start-4 col-end-10 z-10 italic md:hidden lg:text-lg">
                    “WordPress site with great attention to detail.”
                  </p>

                  {/* <!-- Tablet and bigger Text --> */}
                  <p className="text-sm col-start-4 col-end-10 z-10 italic hidden md:inline-block md:px-3 lg:text-lg">
                    “The team delivered a WordPress site for our business. Their
                    attention to detail and understanding of our needs made the
                    entire process smooth and efficient. We couldn’t be happier
                    with the result!” — Emily Davis
                  </p>

                  {/* <!-- Image --> */}
                  <div className="relative col-start-1 col-end-4 overflow-visible">
                    <img
                      className="h-[8rem] absolute bottom-0 right-0 -mb-8 md:h-64 md:left-0 xl:w-72"
                      src={testim2}
                      alt="Portait of a grey shirted man"
                    />
                  </div>
                </div>

                {/* <!-- Testimonial 3 --> */}
                <div className="relative border border-opacity-5 border-b-0 shadow-md mx-4 mb-24 grid grid-cols-8 px-4 py-8 bg-white md:mb-28 lg:px-12 lg:mb-0 lg:w-2/3 lg:max-w-lg lg:mx-0">
                  {/* <!-- Mobile Text --> */}
                  <p className="text-sm col-start-1 col-end-6 z-10 italic md:hidden lg:text-lg">
                    “Outstanding design and Communication.”
                  </p>

                  {/* <!-- Tablet and bigger Text --> */}
                  <p className="text-sm col-start-1 col-end-6 z-10 italic hidden md:inline-block md:px-3 lg:text-lg">
                    “Our Shopify store has been taken to the next level thanks
                    to the team. Their innovative approach and technical skills
                    turned our vision into a user-friendly and visually stunning
                    online shop. Excellent work!” — Michael Brown
                  </p>

                  {/* <!-- Image --> */}
                  <div className="relative col-start-6 col-end-9 overflow-visible">
                    <img
                      className=" h-[8rem] absolute bottom-0 right-0 -mb-8 md:h-60"
                      src={testim3}
                      alt="Portait of a woman."
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* <!-- Vertical accent line --> */}
          <div className="absolute ml-8 top-0 bottom-0 w-1 border-l-2 border-accent z-10 lg:hidden"></div>
        </section>

        {/* <!-- Contact --> */}
        <section
          id="contact"
          className="relative mb-8 md:flex md:justify-center md:pb-16">
          {/* <!-- Text and form Container --> */}
          <div className="relative z-20">
            <h2 className="relative text-2xl font-bold text-center my-16 md:text-left md:pl-12 md:text-3xl xl:pl-0 xl:text-center">
              Let's Get to Work Today
            </h2>

            {/* <!-- Form Container--> */}
            <div className="px-12">
              {/* <!-- Form --> */}
              <ContactHome />
            </div>
          </div>

          {/* <!-- Accent Bubbles --> */}

          {/* <!-- Green bubble --> */}
          <img
            className="absolute transform scale-200 top-20 z-10 md:scale-175 md:top-40 md:right-20 lg:top-112 xl:scale-75 xl:top-auto xl:bottom-auto"
            src={accb1}
            alt="Green decorative background"
          />

          {/* <!-- Red bubble --> */}
          <img
            className="absolute transform scale-200 top-40 left-60 z-0 md:scale-150 md:top-20 md:left-80 lg:top-32 lg:right-0 lg:left-auto xl:opacity-90 xl:top-48"
            src={accb2}
            alt="Red decorative background"
          />

          {/* <!-- Vertical accent line --> */}
          <div className="absolute ml-8 -top-60 bottom-0 w-1 border-l-2 border-accent z-10 md:hidden"></div>
        </section>
      </div>
    </>
  );
};

export default Testimonials;
