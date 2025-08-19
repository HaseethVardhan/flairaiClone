import { useEffect, useState } from "react";

const AnimatedComponent = () => {
  const [animationDone, setAnimationDone] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimationDone(true);
    }, 1200); // match longest animation

    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="text-[#d6d6d6] min-h-screen font-muoto font-light flex items-center justify-center px-10 relative mt-20">
      
      {/* Decorative Image (independent of max-w-6xl) */}
      <img
        src="/e1.png"
        alt="Decor"
        className="hidden lg:block absolute top-0 left-5 w-[300px] h-[300px] object-contain z-0"
      />

      <div className="max-w-6xl w-full flex flex-col items-start gap-6 relative z-10 lg:mt-50">
        {/* Text */}
        <div className="text-left">
          <h1 className="text-4xl lg:text-8xl font-light leading-tight tracking-tight">
            Stage scenes digitally with
            drag &amp; drop props.{" "}
            <span className="lg:max-w-[50%] text-wrap">
               Bring it to life with AI.
            </span>
          </h1>
        </div>

        {/* Image Hover Effect */}
        <div className="relative w-full flex justify-center lg:justify-end lg:-mt-20">
          <div className="relative w-full md:w-[40%] lg:w-[40%] h-[500px] rounded-lg overflow-hidden group">
            
            {/* Back Composite Images */}
            <img src="/e2.png" alt="Back Layer 1"
              className="w-full h-full object-cover absolute top-0 left-0 slideDown"
            />
            <img src="/e3.png" alt="Back Layer 2"
              className="w-full h-full object-cover absolute top-0 left-0 slideUp"
            />
            <img src="/e4.png" alt="Back Layer 3"
              className="w-full h-full object-cover absolute top-0 left-0 slideLeft"
            />
            <img src="/e5.png" alt="Back Layer 4"
              className="w-full h-full object-cover absolute top-0 left-0 slideRight"
            />

            {/* Front Image */}
            <img
              src="/e6.png"
              alt="Front"
              className={`w-full h-full object-cover absolute top-0 left-0 transition-opacity duration-700 group-hover:opacity-0 
                ${animationDone ? "opacity-100" : "opacity-0"}`}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AnimatedComponent;
