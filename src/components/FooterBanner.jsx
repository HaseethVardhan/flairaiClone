import React from "react";

const FooterBanner = ({
  mobileImage = "/bg-1.webp",
  desktopImage = "/bg-2.webp",
  onGetStarted,
}) => {
  return (
    <section
      className="relative rounded-3xl overflow-hidden text-white h-[90vh] md:h-screen font-muoto font-light group"
      aria-label="Hero banner"
    >
      {/* responsive background images */}
      <picture>
        <source srcSet={desktopImage} media="(min-width: 768px)" />
        <img
          src={mobileImage}
          alt=""
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          aria-hidden="true"
          draggable="false"
        />
      </picture>

      {/* dark overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/20" />

      {/* content */}
      <div className="relative z-10 h-full flex flex-col justify-between px-6 py-8 md:px-12 md:py-12">
        {/* Mobile layout (centered) */}
        <div className="flex flex-col items-center justify-center text-center h-full md:hidden">
          <h1 className="text-3xl sm:text-5xl leading-tight max-w-xl">
            Design with Flair
          </h1>

          <button
            type="button"
            onClick={onGetStarted}
            aria-label="Get started"
            className="mt-8 relative flex items-center gap-4 px-8 py-4 rounded-full border border-white/20 text-lg sm:text-2xl font-light bg-transparent hover:bg-white/10 backdrop-blur-none hover:backdrop-blur-md transition-all duration-500 ease-in-out"
          >
            Get started
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 108 108"
              className="w-6 h-6 transition-transform duration-500 ease-in-out group-hover/button:scale-110"
              style={{ transform: "rotate(45deg)" }}
              aria-hidden="true"
            >
              <path
                fill="#fff"
                fillRule="evenodd"
                d="M99 13.243V105h6V3H3v6h91.757L3.88 99.879l4.242 4.242L99 13.243z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </div>

        {/* Desktop layout (original) */}
        <div className="hidden md:flex flex-col justify-between h-full">
          <div className="flex justify-between items-start md:mt-6 lg:mt-12">
            <h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl leading-tight max-w-3xl">
              Design with Flair
            </h1>

            {/* top-right arrow (desktop only) */}
            <div
              className="p-2 rounded-full inline-flex items-center justify-center hover:scale-110 transition-transform duration-500 ease-in-out"
              aria-hidden="true"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 108 108"
                className="w-10 h-10 lg:w-16 lg:h-16 xl:w-20 xl:h-20"
                aria-hidden="true"
              >
                <path
                  fill="#fff"
                  fillRule="evenodd"
                  d="M99 13.243V105h6V3H3v6h91.757L3.88 99.879l4.242 4.242L99 13.243z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
          </div>

          {/* button bottom-right */}
          <div className="flex justify-end mt-8 md:mt-12">
            <button
              type="button"
              onClick={onGetStarted}
              aria-label="Get started"
              className="relative flex items-center gap-6 sm:gap-8 px-12 py-5 rounded-full border border-white/20 text-2xl lg:text-5xl font-light bg-transparent hover:bg-white/10 backdrop-blur-none hover:backdrop-blur-md transition-all duration-500 ease-in-out group/button"
            >
              Get started
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 108 108"
                className="w-6 h-6 md:w-7 md:h-7 lg:w-8 lg:h-8 transition-transform duration-500 ease-in-out group-hover/button:scale-110"
                style={{ transform: "rotate(45deg)" }}
                aria-hidden="true"
              >
                <path
                  fill="#fff"
                  fillRule="evenodd"
                  d="M99 13.243V105h6V3H3v6h91.757L3.88 99.879l4.242 4.242L99 13.243z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FooterBanner;
