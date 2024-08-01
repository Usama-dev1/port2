import React, { useEffect } from "react";
import { accimg3, cbubble, cbubblehero, cbubbleland } from "../assets/index";
import ContactForm from "../components/ContactForm";
import { useNavigate, useLocation } from "react-router-dom";

const ContactPage = () => {
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
        <section className="relative overflow-hidden px-2 md:px-8 lg:px-0 lg:relative lg:flex lg:justify-center xl:max-w-screen-2xl xl:mx-auto">
          {/* <!-- Centered landing section --> */}
          <div className="lg:px-16">
            {/* <!-- Text and Image --> */}
            <div className="w-full pt-12 flex items-center md:gap-x-16 md:pt-24">
              {/* <!-- Header --> */}
              <h1 className="w-full pl-4 xs:text-xl text-2xl z-10 font-bold -mt-40 md:text-5xl lg:-mt-60 lg:text-6xl">
                Come Say Hello!
              </h1>

              {/* <!-- Hero Image --> */}
              <div className="relative bottom-0 w-60 md:w-96 md:-mb-2 lg:-mb-8 pb-1/2 z-10 lg:w-112">
                <img
                  className="absolute bottom-0 w-full h-full object-contain"
                  src={cbubblehero}
                  alt=""
                />
              </div>

              {/* <!-- Accent bubble --> */}
              <img
                className="absolute z-0 left-20 top-20 md:right-40 lg:right-auto lg:left-80 xl:left-auto xl:right-40"
                src={cbubbleland}
                alt="Green decorative bubble"
              />
            </div>
          </div>
        </section>

        {/* <!-- Contact form section --> */}
        <section className="md:py-16 md:pt-10 md:pb-24 bg-gray-100 md:px-8 lg:px-40 lg:pt-20">
          {/* <!-- Container --> */}
          <div className="relative md:rounded-3xl shadow-lg overflow-hidden bg-white px-2 md:pl-8 lg:pl-12 md:py-2 xl:max-w-screen-xl xl:mx-auto">
            {/* <!-- Contact Info + Form Container --> */}
            <div className="relative flex flex-col justify-center pt-8 pb-16 md:pt-0 md:pb-0 md:flex-row overflow-hidden z-10">
              <div className="contact_form-first md:px-8 lg:px-20 md:py-12 flex items-center justify-center">
                {/* <!-- Contact Info --> */}
                <div className="px-8 md:px-0 mb-8 md:mb-0">
                  {/* <!-- Header --> */}
                  <h2 className="text-sm text-left font-base italic md:normal-case md:font-bold mb-10 md:mb-16 md:text-4xl lg:text-5xl lg:mb-16 text-gray-600">
                    Our Contact Details
                  </h2>

                  {/* <!-- Item 1 --> */}
                  <div className="flex items-center mb-10">
                    <div className="p-2 rounded-full mr-6 bg-accent"></div>
                    <div>
                      <span className="block text-xs text-gray-500">
                        Telephone Number
                      </span>
                      <span className="block font-medium text-gray-800 text-sm md:text-base">
                        (+27) 81 343 4552
                      </span>
                    </div>
                  </div>

                  {/* <!-- Item 2 --> */}
                  <div className="flex items-center mb-10">
                    <div className="p-2 rounded-full mr-6 bg-accent"></div>
                    <div>
                      <span className="block text-xs text-gray-500">
                        Email Address
                      </span>
                      <span className="block font-medium text-gray-800 text-sm md:text-base">
                        decks@business.com
                      </span>
                    </div>
                  </div>

                  {/* <!-- Item 3 --> */}
                  <div className="flex items-center mb-10">
                    <div className="p-2 rounded-full bg-accent mr-6"></div>
                    <div>
                      <span className="block text-xs text-gray-500">
                        Physical Address
                      </span>
                      <span className="block font-medium text-gray-800 text-sm md:text-base">
                        3 Abbey Rd, London, United Kingdom
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* <!-- Contact Form --> */}
              <div className="contact_form-second px-4 md:px-8 md:py-12 lg:px-20">
                <div className="flex justify-center">
                  <div>
                    <h2 className="text-xl lg:text-xl font-medium mb-1 text-black md:text-gray-600 text-center md:text-left">
                      Have a Specific Question?
                    </h2>
                    <span className="inline-block w-full text-sm mb-4 text-gray-400 text-center md:text-left">
                      Feel free to send us a message and we’ll get back to you.
                    </span>

                    {/* <!-- Form --> */}
                  <ContactForm/>
                  </div>
                </div>
              </div>
            </div>

            {/* <!-- Green Corner Bubble --> */}
            <img
              className="absolute -bottom-40 -left-40 md:hidden lg:-bottom-40 lg:-right-20"
              src={accimg3}
              alt="Green decorative corner bubble"
            />

            {/* <!-- Red Corner Bubble --> */}
            <img
              className="hidden md:absolute -top-60 left-60 md:top-auto md:-bottom-20 md:transform md:rotate-12 md:-left-2/3"
              src={cbubble}
              alt="Red decorative corner bubble"
            />
          </div>
        </section>
      </main>
    </>
  );
};

export default ContactPage;
