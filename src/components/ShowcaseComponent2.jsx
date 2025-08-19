import React from "react";

const ShowcaseComponent2 = () => {
  return (
    <section className="w-full min-h-screen flex justify-center px-6 lg:px-12 font-muoto font-light mt-20">
      <div className="max-w-6xl w-full flex flex-col lg:flex-row gap-12">
        
        {/* Left Div */}
        <div className="flex flex-col border border-[#ffffff11] rounded-2xl p-6 lg:p-8 w-full lg:w-1/2 group transition">
          {/* Text block with fixed min-height */}
          <div className="min-h-[160px]">
            <h2 className="text-2xl lg:text-4xl font-light text-[#d6d6d6] mb-4">
              AI Ad Generation
            </h2>
            <p className="text-xl lg:text-2xl font-light text-[#505050] group-hover:text-[#808080] transition">
              Generate high-quality ads for your products with brand consistency
              alongside a library of templates.
            </p>
          </div>

          {/* Image flex-grow and centered */}
          <div className="flex-grow flex items-center justify-center mt-8 rounded-xl overflow-hidden">
            <img
              src="/s1.webp"
              alt="AI Ad Example"
              className="w-full h-[280px] object-cover rounded-xl"
            />
          </div>
        </div>

        {/* Right Div */}
        <div className="flex flex-col border border-[#ffffff11] rounded-2xl p-6 lg:p-8 w-full lg:w-1/2 group transition">
          {/* Text block with fixed min-height */}
          <div className="min-h-[160px]">
            <h2 className="text-2xl lg:text-4xl font-light text-[#d6d6d6] mb-4">
              AI Human Models
            </h2>
            <p className="text-xl lg:text-2xl font-light text-[#505050] group-hover:text-[#808080] transition">
              Build custom AI human models based on features and scale them across
              all your brand assets. Choose from a range of features including hair
              color, body type, and more.
            </p>
          </div>

          {/* Image flex-grow and centered */}
          <div className="flex-grow flex items-center justify-center mt-8 rounded-xl overflow-hidden">
            <img
              src="/s2.png"
              alt="AI Human Model"
              className="w-full h-[280px] object-cover rounded-xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ShowcaseComponent2;
