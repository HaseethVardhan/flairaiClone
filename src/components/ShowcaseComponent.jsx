import { useEffect, useRef, useState } from "react";

const ShowcaseComponent = () => {
  const sectionRef = useRef(null);
  const [triggered, setTriggered] = useState(false); // show back when in view
  const [frontVisible, setFrontVisible] = useState(false); // fade in front

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTriggered(true); // back becomes visible
          // tiny delay so you clearly see back before front fades in
          setTimeout(() => setFrontVisible(true), 30);
          io.disconnect();
        }
      },
      { threshold: 0.2, rootMargin: "0px 0px -10% 0px" }
    );

    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="w-full min-h-screen flex items-center font-muoto font-light justify-center px-6 lg:px-12"
    >
      <div className="flex flex-col w-full max-w-6xl lg:flex-row items-center justify-center gap-8 border border-[#ffffff11] rounded-2xl p-6 lg:p-10 shadow-lg">
        {/* Left */}
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

        {/* Right */}
        <div className="relative w-full lg:w-1/2 flex justify-center">
          <div className="relative rounded-2xl overflow-hidden shadow-xl group w-[220px] sm:w-[300px] lg:w-[350px]">
            {/* BACK: shows once triggered; stays visible underneath (no fade-out) */}
            <img
              src="/e7.png"
              alt="Model Back"
              className={`absolute inset-0 z-0 w-full h-full object-cover transition-opacity ${
                triggered ? "opacity-100" : "opacity-0"
              }`}
            />

            {/* FRONT: fades in on top; hides on hover to reveal back */}
            <img
              src="/e8.png"
              alt="Model Front"
              className={`relative z-10 w-full h-auto object-cover 
    ${frontVisible ? "opacity-100" : "opacity-0"} 
    ${frontVisible ? "transition-opacity duration-[1200ms]" : ""} 
    group-hover:opacity-0 group-hover:transition-opacity group-hover:duration-300`}
              style={{ willChange: "opacity" }}
            />
          </div>

          {/* Overlap product */}
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

export default ShowcaseComponent;
