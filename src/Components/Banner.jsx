"use client";
import navData from "@/Data/NavData";
import Image from "next/image";
import React, { useState } from "react";
import Slider from "./Slider";

const Banner = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <div className="flex gap-5 my-5">
      <ul className="w-1/4 duration-300 relative min-h-[400px] 2xl:min-h-[600px] rounded-[10px] p-6 space-y-4 2xl:space-y-6 bg-white">
        {navData?.map((item, idx) => (
          <li
            key={idx}
            onMouseEnter={() => setHoveredIndex(idx)}
            onMouseLeave={() => setHoveredIndex(null)}
            className="text-lg 2xl:text-xl font-medium relative"
          >
            <p className="cursor-pointer">{item?.category}</p>

            {/* Subcategories Dropdown */}
            <div
              className={`absolute top-[20px] left-[200px] z-[999] bg-white text-black min-h-[300px] shadow-md duration-300 ease-in-out transform ${
                hoveredIndex === idx && item?.subCategories?.length
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 pointer-events-none"
              }`}
            >
              {item?.subCategories?.[0]?.title ? (
                <div className="duration-300 min-w-[500px] flex px-5 py-6 gap-10">
                  {item?.subCategories?.map((subItem, subIdx) => (
                    <div key={subIdx} className="flex-1">
                      <p className="text-lg cursor-pointer 2xl:text-xl font-bold">
                        {subItem?.title}
                      </p>
                      <ul className="mt-5 space-y-1">
                        {subItem?.items?.map((subItemDetail, detailIdx) => (
                          <li
                            className="cursor-pointer"
                            key={detailIdx}
                          >
                            {subItemDetail?.name}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="duration-300 min-w-[250px] space-y-2 px-5 py-6 gap-10">
                  {item?.subCategories?.map((subItem, subIdx) => (
                    <div key={subIdx} className="flex-1">
                      <p className="text-lg cursor-pointer 2xl:text-xl font-medium">
                        {subItem?.name}
                      </p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </li>
        ))}
      </ul>
      <div className="bg-primary overflow-hidden rounded-[10px] relative min-h-[400px] w-3/4">
        <Slider />
      </div>
    </div>
  );
};

export default Banner;
