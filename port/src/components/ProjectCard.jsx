import React from 'react'
const ProjectCard = ({projectImg,
                projectTitle,
                projectDesc
                ,projectExtra
                ,projectUrl}) => {
  return (
    <>
      <div className="py-12 md:pt-16 lg:grid lg:grid-cols-2 lg:gap-x-16 lg:h-96 lg:py-0 lg:my-32">
        {/* <!-- Project Image --> */}
        <div className="lg:relative lg:pb-1/3">
          <img
            className="shadow-lg md:w-full lg:h-full lg:object-cover lg:object-center lg:absolute"
            src={projectImg}
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
                  {projectTitle}
                </h3>
                <div className="absolute bottom-0 h-2 w-full bg-accent"></div>
              </div>
            </div>

            {/* <!-- Project description --> */}
            <p className="py-4 text-sm leading-relaxed md:text-base lg:py-6">
              {projectDesc}
            </p>

            {/* <!-- Project URL + extra info  --> */}
            <span className="inline-block italic opacity-80 text-sm mb-8">
                {projectExtra}
            </span>
            <br className="lg:hidden" />

            {/* <!-- CTA --> */}
            <a
              href={projectUrl}
              className="inline-block uppercase font-medium bg-accent px-4 py-2 text-black shadow-md ml-auto lg:ml-0 lg:w-max">
              <span className="text-sm opacity-75">Visit Project</span>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProjectCard
