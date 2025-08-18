import { useRef, useState, useEffect } from "react";
const Brands = () => {
    const logos = [
    "/brands_carousel/1.png",
    "/brands_carousel/2.png",
    "/brands_carousel/3.png",
    "/brands_carousel/4.png",
    "/brands_carousel/5.png",
    "/brands_carousel/6.png",
    "/brands_carousel/7.png",
  ];

  const containerRef = useRef(null);
  const [stripWidth, setStripWidth] = useState(0);

  useEffect(() => {
    if (containerRef.current) {
      setStripWidth(containerRef.current.scrollWidth / 2); 
    }
  }, []);

  return (
    <div className="min-h-screen w-full relative">
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `
        linear-gradient(to right, #ffffff0d 1px, transparent 1px),
        linear-gradient(to bottom, #ffffff0d 1px, transparent 1px)
      `,
          backgroundSize: "70px 50px",
          WebkitMaskImage:
            "linear-gradient(to bottom, #000 1%, transparent 14%)",
          WebkitMaskRepeat: "no-repeat",
          WebkitMaskSize: "100% 100%",
          maskImage: "linear-gradient(to bottom, #000 1%, transparent 14%)",
          maskRepeat: "no-repeat",
          maskSize: "100% 100%",
        }}
      />

      <div className="flex flex-col justify-between items-center gap-20 py-36">
        <div className="flex flex-col justify-center items-center">
          <h1 className="font-muoto font-light text-[1.4rem] text-[#71717A] px-10 text-center">
            Used by brands of all sizes and industries
          </h1>
        </div>
        <div className="w-full max-w-6xl overflow-hidden relative">
          <div
            ref={containerRef}
            className="flex"
            style={{
              width: "fit-content",
              animation: stripWidth
                ? `scrollAnim ${stripWidth / 50}s linear infinite`
                : "none", 
            }}
          >
            {[...logos, ...logos].map((logo, index) => (
              <div
                key={index}
                className="flex-shrink-0 mx-8 w-40 h-40 flex items-center justify-center px-4 border border-[#ffffff15] rounded-3xl"
              >
                <img
                  src={logo}
                  alt={`Brand Logo ${index + 1}`}
                  className="h-12 object-contain"
                />
              </div>
            ))}
          </div>
        </div>
        </div>
      </div>
  );
};

export default Brands;
