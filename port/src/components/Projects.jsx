import React from "react";
import {
  accimg1,
  accimg2,
  accimg3,
  project1,
  project2,
  project3,
} from "../assets/index";
const Projects = () => {
  return (
    <>
      <section
        id="experience"
        className="px-4 pt-10 pb-14 bg-gray-100 md:px-20 lg:px-40 lg:pt-20">
        {/* <!-- Container --> */}
        <div className="relative rounded-3xl py-8 shadow-lg overflow-hidden bg-white md:py-16 xl:max-w-screen-xl xl:mx-auto">
          {/* <!-- Heading and description --> */}
          <div className="relative text-center px-2">
            <h2 className="relative text-2xl font-bold z-10 md:text-3xl lg:text-4xl">
              Several Projects I Enjoyed
            </h2>
            <p className="relative text-sm mx-auto mt-5 z-10 lg:mt-6 lg:text-sm">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Gravida
              rhoncus volutpat congue mattis sed mollis mollis.
            </p>

            {/* <!-- Green bubble --> */}
            <img
              className="absolute w-32 top-0 left-2/3 lg:transform lg:scale-175"
              src={accimg1}
              alt="A green decorative bubble."
            />
          </div>

          {/* <!-- Projects --> */}
          <div className="px-6 py-4 md:mx-8 lg:mx-16">
            {/* <!-- Project 1 --> */}
            <div className="py-12 md:pt-16 lg:grid lg:grid-cols-2 lg:gap-x-16 lg:h-96 lg:py-0 lg:mt-24 lg:mb-32">
              {/* <!-- Project Image --> */}
              <div className="lg:relative lg:pb-2/3">
                <img
                  className="shadow-lg md:w-full lg:h-full lg:object-cover lg:object-top lg:absolute"
                  src={project1}
                  alt="Example page from project"
                />
              </div>

              {/* <!-- Project Details --> */}
              <div className="lg:h-full lg:flex lg:items-center">
                <div className="lg:grid lg:auto-rows-min">
                  {/* <!-- Project name --> */}
                  <div className="inline-block relative">
                    <div className="lg:relative lg:inline-block">
                      <h3 className="relative z-10 font-bold pt-8 md:text-xl">
                        Project Name
                      </h3>
                      <div className="absolute bottom-0 h-2 w-full bg-accent"></div>
                    </div>
                  </div>

                  {/* <!-- Project description --> */}
                  <p className="py-4 text-sm leading-relaxed md:text-base lg:py-6">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Nibh gravida gravida elementum consectetur facilisis vel
                    quam ullamcorper. Condimentum sed ultricies tellus et augue.
                    Lacus eu lobortis scelerisque vitae et. Vestibulum arcu
                    maecenas imperdiet egestas lectus.
                  </p>

                  {/* <!-- Project URL + extra info  --> */}
                  <span className="inline-block italic opacity-80 text-sm mb-8">
                    projectname.co.za - Design + Code + Marketing
                  </span>
                  <br className="lg:hidden" />

                  {/* <!-- CTA --> */}
                  <a
                    href="#"
                    className="inline-block uppercase font-medium bg-accent px-4 py-2 text-black shadow-md ml-auto lg:ml-0 lg:w-max">
                    <span className="text-sm opacity-75">Visit Project</span>
                  </a>
                </div>
              </div>
            </div>

            {/* <!-- Project 2 --> */}
            <div className="py-12 md:pt-16 lg:grid lg:grid-cols-2 lg:gap-x-16 lg:h-96 lg:py-0 lg:my-32">
              {/* <!-- Project Image --> */}
              <div className="lg:relative lg:pb-2/3 lg:col-start-2">
                <img
                  className="shadow-lg md:w-full lg:h-full lg:object-cover lg:object-top lg:absolute z-10"
                  src={project2}
                  alt="Example page from project"
                />
                <img
                  className="hidden z-0 lg:inline-block lg:absolute lg:right-20 lg:transform lg:scale-105"
                  src={accimg2}
                  alt="Red decorative bubble."
                />
              </div>

              {/* <!-- Project Details --> */}
              <div className="lg:h-full lg:flex lg:items-center lg:row-start-1">
                <div className="lg:grid lg:auto-rows-min">
                  {/* <!-- Project name --> */}
                  <div className="inline-block relative">
                    <div className="lg:relative lg:inline-block">
                      <h3 className="relative z-10 font-bold pt-8 md:text-xl">
                        Project Name
                      </h3>
                      <div className="absolute bottom-0 h-2 w-full bg-accent"></div>
                    </div>
                  </div>

                  {/* <!-- Project description --> */}
                  <p className="py-4 text-sm leading-relaxed md:text-base lg:py-6">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Nibh gravida gravida elementum consectetur facilisis vel
                    quam ullamcorper. Condimentum sed ultricies tellus et augue.
                    Lacus eu lobortis scelerisque vitae et. Vestibulum arcu
                    maecenas imperdiet egestas lectus.
                  </p>

                  {/* <!-- Project URL + extra info  --> */}
                  <span className="inline-block italic opacity-80 text-sm mb-8">
                    projectname.co.za - Design + Code + Marketing
                  </span>
                  <br className="lg:hidden" />

                  {/* <!-- CTA --> */}
                  <a
                    href="#"
                    className="inline-block uppercase font-medium bg-accent px-4 py-2 text-black shadow-md ml-auto lg:ml-0 lg:w-max">
                    <span className="text-sm opacity-75">Visit Project</span>
                  </a>
                </div>
              </div>
            </div>

            {/* <!-- Project 3 --> */}
            <div className="py-12 md:pt-16 lg:grid lg:grid-cols-2 lg:gap-x-16 lg:h-96 lg:py-0 lg:my-32">
              {/* <!-- Project Image --> */}
              <div className="lg:relative lg:pb-2/3">
                <img
                  className="shadow-lg md:w-full lg:h-full lg:object-cover lg:object-top lg:absolute"
                  src={project3}
                  alt="Example page from project"
                />
              </div>

              {/* <!-- Project Details --> */}
              <div className="lg:h-full lg:flex lg:items-center">
                <div className="lg:grid lg:auto-rows-min">
                  {/* <!-- Project name --> */}
                  <div className="inline-block relative">
                    <div className="lg:relative lg:inline-block">
                      <h3 className="relative z-10 font-bold pt-8 md:text-xl">
                        Project Name
                      </h3>
                      <div className="absolute bottom-0 h-2 w-full bg-accent"></div>
                    </div>
                  </div>

                  {/* <!-- Project description --> */}
                  <p className="py-4 text-sm leading-relaxed md:text-base lg:py-6">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Nibh gravida gravida elementum consectetur facilisis vel
                    quam ullamcorper. Condimentum sed ultricies tellus et augue.
                    Lacus eu lobortis scelerisque vitae et. Vestibulum arcu
                    maecenas imperdiet egestas lectus.
                  </p>

                  {/* <!-- Project URL + extra info  --> */}
                  <span className="inline-block italic opacity-80 text-sm mb-8">
                    projectname.co.za - Design + Code + Marketing
                  </span>
                  <br className="lg:hidden" />

                  {/* <!-- CTA --> */}
                  <a
                    href="#"
                    className="inline-block uppercase font-medium bg-accent px-4 py-2 text-black shadow-md ml-auto lg:ml-0 lg:w-max">
                    <span className="text-sm opacity-75">Visit Project</span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* <!-- Corner Bubble --> */}
          <img
            className="absolute -bottom-40 -right-20"
            src={accimg3}
            alt="Green decorative corner bubble"
          />
        </div>
      </section>
    </>
  );
};

export default Projects;
