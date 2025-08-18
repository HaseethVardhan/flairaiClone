import React, { useState, useRef, useEffect } from "react";

const Content = () => {
  const [activeCategory, setActiveCategory] = useState("On Model Photography");

  const categories = [
    "On Model Photography",
    "Product Videos",
    "Marketing & Ads",
    "Product Photography",
  ];

  const modelPhotography = [
    "/models/m1.webp",
    "/models/m2.webp",
    "/models/m4.png",
    "/models/m5.png",
    "/models/m6.png",
    "/models/m7.png",
    "/models/m8.png",
  ];

  const productVideos = [
    "https://video.flair.ai/assetsV2_vTK3AYqNLgEo9ROo4YD1V_asset.mp4",
    "https://video.flair.ai/assetsV2_7CfLV0p8Hmc15SHY90866_asset.mp4",
    "https://video.flair.ai/assetsV2_4uje21gxNUyhLdI4C733g_asset.mp4",
    "https://video.flair.ai/assetsV2_6O2EXGA8lxByNqlGkYVuu_asset.mp4",
    "https://video.flair.ai/assetsV2_rUa8fgEXE9LFNRcN9KXAj_asset.mp4",
    "https://video.flair.ai/assetsV2_yfg5JAFw8cVHZzlR9YRCG_asset.mp4",
  ];

  const productPhotography = [
    "/productPics/p1.png",
    "/productPics/p2.webp",
    "/productPics/p3.webp",
    "/productPics/p4.webp",
    "/productPics/p5.webp",
    "/productPics/p6.webp",
    "/productPics/p7.webp",
    "/productPics/p8.png",
    "/productPics/p9.webp",
    "/productPics/p10.webp",
  ];

  const marketingAds = [
    "/marketAds/a1.png",
    "/marketAds/a2.png",
    "/marketAds/a3.png",
    "/marketAds/a4.png",
    "/marketAds/a5.png",
    "/marketAds/a6.png",
    "/marketAds/a7.png",
    "/marketAds/a8.png",
    "/marketAds/a9.png",
    "/marketAds/a10.png",
  ];

  const [currentCategory, setCurrentCategory] = useState(modelPhotography);

  return (
    <div className="w-full h-full font-muoto font-light flex flex-col justify-center items-center gap-9 hide-scrollbar">
      <div className="text-left px-4 max-w-6xl w-full">
        <p className="text-[#84cc16] font-thin text-lg tracking-tight">
          Create content that matches your brand rules and aesthetic.
        </p>
      </div>
      <div className="text-left px-4 max-w-6xl w-full">
        <h1 className="text-[#d4d4d8] font-light text-[2.7rem] leading-[1] tracking-tight lg:text-8xl">
          Generate on brand content for all your business needs.
        </h1>
      </div>
      <div className="w-full max-w-6xl flex flex-row items-center justify-between gap-2 overflow-x-scroll px-3 mt-7 hide-scrollbar">
        {categories.map((category, idx) => (
          <div
            key={idx}
            onClick={() => {
              setActiveCategory(category);
              if (category === "Product Videos") {
                setCurrentCategory(productVideos);
              } else if (category === "On Model Photography") {
                setCurrentCategory(modelPhotography);
              } else if (category === "Marketing & Ads") {
                setCurrentCategory(marketingAds);
              } else {
                setCurrentCategory(productPhotography);
              }
            }}
            className={`px-5 py-3 rounded-3xl max-w-xl w-100 flex flex-col text-nowrap items-center justify-center 
              transition-colors duration-700
              ${
              activeCategory === category
                ? "border-1 border-[#84cc16] text-[#84cc16]"
                : "border-1 border-[#ffffff1d] text-[#d4d4d8]"
            }`}
          >
            {category}
          </div>
        ))}
      </div>
      {activeCategory !== "Product Videos" && <div className="w-full max-w-6xl flex flex-row gap-5 overflow-x-scroll px-3 hide-scrollbar">
        {currentCategory.map((pic, idx) => (
            <div
              key={idx}
              className={`rounded-3xl min-w-[260px] h-60 overflow-hidden lg:min-w-[300px] lg:h-80`}
            >
              <img src={pic} className="w-full h-full object-cover" />
            </div>
          ))}
      </div>}
      {activeCategory === "Product Videos" && <div className="w-full max-w-6xl flex flex-row gap-5 overflow-x-scroll px-3 hide-scrollbar">
        { currentCategory.map((pic, idx) => (
            <div
              key={idx}
              className={`rounded-3xl min-w-[260px] h-60 overflow-hidden lg:min-w-[300px] lg:h-80`}
            >
              <video
                autoPlay
                loop
                muted
                playsInline
                src={pic}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
      </div>}
    </div>
  );
};

export default Content;
