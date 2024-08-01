import React from 'react'
import { SiShopify, SiExpress } from "react-icons/si";
import { FaWordpress,FaReact } from "react-icons/fa";
import { PiFileHtmlDuotone } from "react-icons/pi";
import { PiFileCssBold } from "react-icons/pi";
import { DiMongodb } from "react-icons/di";
import { FaNode } from "react-icons/fa6";

const StackSection = () => {
  return (
    <>
      <section className="flex flex-col items-center py-16 px-4 shadow-inner bg-gray-100 lg:py-24">
        <h2 className="uppercase text-xs font-medium lg:text-base">
          Equipped with the experience that matters
        </h2>
        {/* <!-- Logos --> */}
        <div className="text-4xl grid auto-cols-min grid-flow-col grid-rows-2 gap-y-4 gap-x-6 mt-6 mb-8 lg:gap-x-12 lg:gap-y-8 lg:mt-10 lg:mb-12">
          <PiFileHtmlDuotone />
          <DiMongodb />
          <PiFileCssBold />
          <SiExpress />
          <FaWordpress />
          <FaReact />
          <SiShopify />
          <FaNode />
        </div>

        {/* <!-- Extra motivator --> */}
        <p className="text-xs text-center lg:text-base">
          Hired by 
          <span className="font-medium text-accent2 mx-1">creative agencies</span>
           and{" "}
          <span className="font-medium text-accent2">ambitious clients</span>
        </p>
      </section>
    </>
  );
}

export default StackSection