import React from "react";
import {
  accimg1,
  accimg2,
  accimg3,
  project1,
  project2,
  project3,
} from "../assets/index";
import ProjectCard from "./ProjectCard";
const Projects = () => {
  const projects=[
    {
     projectImg:project1,
     projectTitle:"WordPress eCommerce store for selling electronic gadgets",
     projectDesc:"The store utilizes plugins like WooCommerce for eCommerce functionality, Elementor for page building, and WPForms for contact forms. Features include a responsive design, easy navigation, and various payment options",
     projectExtra:"eCommerce Store",
     projectUrl:"https://xstore.8theme.com/elementor/demos/minimal-electronics/"
    },
    {
     projectImg:project2,
     projectTitle:"Shopify Fast Food Ordering Website",
     projectDesc:"This project is full shopify food ordering website template made in shopify where the client can add his menu and his customers can order direclty from the website  Enter password as 1 to veiw the template",
     projectExtra:"Shopify Store",
     projectUrl:"https://demo-suruchi-food.myshopify.com/"
    },
    {
     projectImg:project3,
     projectTitle:"Custom Made Cleaning Services Website",
     projectDesc:"Custom made Cleaning Services Website Made for Clients in HTML Tailwind and Reatjs ",
     projectExtra:"Custom Website",
     projectUrl:"https://preview.themeforest.net/item/cleeny-cleaning-services-repair-company-react-tailwind-template/full_screen_preview/52569732?_ga=2.173220451.1703226937.1722663276-1023737775.1722663276&_gac=1.188436314.1722671167.CjwKCAjwqre1BhAqEiwA7g9QhiTgfLBtD8RF4H3ikYtXuglFccG2iYmXFASWufneqqKhvh3nV75eeBoCYm8QAvD_BwE"
    },
    
  ]
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
              Project Portfolio
            </h2>
            <p className="relative text-sm mx-auto mt-5 z-10 lg:mt-6 lg:text-sm">
            Some eCommerce and Custom build Project Deleivered for Clients 
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
            {projects.map((project) => (
              <ProjectCard
                projectImg={project.projectImg}
                projectTitle={project.projectTitle}
                projectDesc={project.projectDesc}
                projectExtra={project.projectExtra}
                projectUrl={project.projectUrl}
              />
            ))}
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
