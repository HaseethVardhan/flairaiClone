import { useEffect, useState } from "react";

const Hero = () => {
  const words = [
    "content",
    "advertising",
    "photoshoot",
    "branding",
    "marketing",
  ];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % words.length);
    }, 2400);
    return () => clearInterval(id);
  }, [words.length]);

  return (
    <section className="relative flex flex-col items-center h-full w-full overflow-hidden text-white px-6 font-muoto">
      <div className="text-center z-10 mt-20">
        <h1 className="text-5xl text-zinc-100/80 font-light sm:text-6xl lg:text-8xl leading-tight">
          The AI design tool for <br />
          <span className="text-[#85cd14]">product {""}</span>
          <span key={index} className="animate-fadeUp ml-2 text-[#85cd14]">
            {words[index]}
          </span>
        </h1>
        <p className="mt-6 text-2xl lg:text-3xl text-[#b0b0b0] font-thin">
          Build stunning AI product content with your team in real-time.
        </p>

        <div className="mt-10 flex flex-row sm:flex-row gap-4 justify-center">
          <a
            href="#"
            className="px-6 py-3 rounded-lg text-black font-semibold bg-lime-500 border border-lime-500 hover:bg-lime-400 transition-colors min-w-[160px] text-center"
          >
            Get Started
          </a>
          <a
            href="#"
            className="px-6 py-3 rounded-lg text-zinc-300 font-semibold border border-zinc-800 hover:border-zinc-500 hover:bg-zinc-900/50 hover:text-zinc-200 transition-colors min-w-[160px] text-center"
          >
            Book a Demo
          </a>
        </div>
      </div>

      <div className="relative w-full h-full flex justify-center mb-20 sm:mb-40">
        <img
          src="./src/assets/bg-1.webp"
          alt="Green Tint"
          className="absolute z-0 scale-150 opacity-60 pointer-events-none select-none"
        />

        <img
          src="./src/assets/laptop.webp"
          alt="Laptop"
          className="relative z-10 pointer-events-none select-none scale-150"
        />

        <video
          autoPlay
          loop
          muted
          playsInline
          src="/flairhero.mp4"
          className="absolute z-10 object-contain scale-150"
          style={{
            top: "32%", // adjust to match laptop bezel
            left: "36%", // adjust left edge
            width: "43%", // adjust width
            height: "50%", // adjust height
            clipPath: "polygon(0% 0%, 92% 4%, 94% 84%, 0% 84%)",
            transform: "perspective(2800px) rotateX(6deg) rotateY(25deg)",
          }}
        />
      </div>
    </section>
  );
};

export default Hero;
