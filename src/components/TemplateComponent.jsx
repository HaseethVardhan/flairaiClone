const TemplateComponent = () => {
  return (
    <section className="w-full min-h-screen flex flex-col font-muoto font-light lg:flex-row items-center justify-center px-6 mt-10 lg:px-12 gap-8">
      {/* Left: Video with background */}
      <div className="w-full lg:w-[55%] flex flex-col justify-between h-full ">
        <div className="rounded-2xl p-3 lg:p-4">
          <video
            autoPlay
            loop
            muted
            src="/sample-video.mp4" type="video/mp4"
            className="w-full h-[300px] md:w-auto lg:h-[500px] object-cover rounded-xl"
          >
          </video>
        </div>
      </div>

      {/* Right: Text */}
      <div className="w-full lg:w-[45%] max-w-md flex flex-col justify-evenly h-[500px] text-left">
        <h2 className="text-3xl lg:text-5xl font-light text-[#d6d6d6] leading-snug">
          Mix & match product with templates
        </h2>
        <h2 className="text-lg lg:text-xl font-light text-[#818181]">
          Test design concepts that convert customers with one click. Build
          reusable templates at scale.
        </h2>
        <button className="group flex items-center gap-3 text-xl font-thin lg:text-2xl text-[#84cc16] hover:text-[#92e319] transition-colors">
          Start with Templates
          <span className="transition-transform duration-300 group-hover:translate-x-2">
            <svg
              width="26"
              height="26"
              viewBox="0 0 15 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8.14645 3.14645C8.34171 2.95118 8.65829 2.95118 8.85355 3.14645L12.8536 7.14645C13.0488 7.34171 13.0488 7.65829 12.8536 7.85355L8.85355 11.8536C8.65829 12.0488 8.34171 12.0488 8.14645 11.8536C7.95118 11.6583 7.95118 11.3417 8.14645 11.1464L11.2929 8H2.5C2.22386 8 2 7.77614 2 7.5C2 7.22386 2.22386 7 2.5 7H11.2929L8.14645 3.85355C7.95118 3.65829 7.95118 3.34171 8.14645 3.14645Z"
                fill="currentColor"
                fillRule="evenodd"
                clipRule="evenodd"
              />
            </svg>
          </span>
        </button>
      </div>
    </section>
  );
};

export default TemplateComponent;
