export const ShowcaseComponent = () => {
  return (
    <section className="w-full min-h-screen flex items-center font-muoto font-light justify-center px-6 lg:px-12">
      {/* Outer Wrapper with Border */}
      <div className="flex flex-col w-full max-w-6xl lg:flex-row items-center justify-center gap-8 border border-[#ffffff11] rounded-2xl p-6 lg:p-10 shadow-lg">
        
        {/* Left: Text */}
        <div className="w-full lg:w-1/2 flex flex-col justify-center max-w-md text-left space-y-2">
          <p className="text-[#84cc16] text-sm tracking-wide uppercase">
            New Feature
          </p>
          <h2 className="text-xl lg:text-2xl font-light text-[#d6d6d6]">
            Fashion photoshoots
          </h2>
          <p className="text-xl lg:text-2xl text-[#818181] font-light py-8">
            Fit your clothing and jewelry onto AI generated models with patterns
            and logos preserved. Create high-quality on-model imagery at scale.
          </p>
          <button className="px-5 py-3 rounded-lg bg-[#84cc16] text-black font-medium hover:brightness-110 transition">
            Try AI Fashion for Free
          </button>
        </div>

        {/* Right: Image with hover effect */}
        <div className="relative w-full lg:w-1/2 flex justify-center">
          {/* Hover Swap Images */}
          <div className="relative rounded-2xl overflow-hidden shadow-xl group w-[220px] sm:w-[300px] lg:w-[350px]">
            <img
              src="/e8.png"
              alt="Model"
              className="w-full h-auto object-cover transition-opacity duration-500 group-hover:opacity-0"
            />
            <img
              src="/e7.png"
              alt="Model Hover"
              className="absolute inset-0 w-full h-full object-cover opacity-0 transition-opacity duration-500 group-hover:opacity-100"
            />
          </div>

          {/* Middle overlapping image (only on large screens) */}
          <div className="hidden lg:block absolute left-[-40px] top-1/2 -translate-y-1/2 z-20 w-[150px]">
            <img
              src="/productpic.png"
              alt="Product"
              className="rounded-xl shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
