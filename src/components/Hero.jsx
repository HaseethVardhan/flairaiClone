import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

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

  // Variants
  // Variants
const lineVariants = {
  hidden: { opacity: 0 }, // removed y: 40
  visible: (delay = 0) => ({
    opacity: 1,
    transition: { duration: 0.8, ease: "easeOut", delay },
  }),
};

const containerVariants = {
  initial: { opacity: 0 }, // removed y: 40
  final: {
    opacity: 1,
    transition: { duration: 1, ease: "easeOut" },
  },
};


  const wordChange = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.5 } },
    exit: { opacity: 0, y: -20, transition: { duration: 0.4 } },
  };

  return (
    <section className="relative flex flex-col items-center h-full w-full overflow-hidden text-white px-6 font-muoto hide-scrollbar">
      {/* Animate the whole block */}
      <motion.div
        className="text-center z-10 mt-20"
        variants={containerVariants}
        initial="initial"
        animate="final"
      >
        {/* Line 1 */}
        <motion.h1
          className="text-5xl text-zinc-100/80 font-light sm:text-6xl lg:text-8xl leading-tight"
          initial="hidden"
          animate="visible"
          variants={lineVariants}
          custom={0.2}
        >
          The AI design tool for
        </motion.h1>

        {/* Line 2 with word animation */}
        <motion.h1
          className="text-5xl text-zinc-100/80 font-light sm:text-6xl lg:text-8xl leading-tight"
          initial="hidden"
          animate="visible"
          variants={lineVariants}
          custom={0.8}
        >
          <span className="text-[#85cd14]">product </span>
          <AnimatePresence mode="wait">
            <motion.span
              key={index}
              variants={wordChange}
              initial="initial"
              animate="animate"
              exit="exit"
              className="ml-2 text-[#85cd14] inline-block"
            >
              {words[index]}
            </motion.span>
          </AnimatePresence>
        </motion.h1>

        {/* Bottom text */}
        <motion.p
          className="mt-6 text-2xl lg:text-3xl text-[#b0b0b0] font-thin"
          initial="hidden"
          animate="visible"
          variants={lineVariants}
          custom={1.4}
        >
          Build stunning AI product content with your team in real-time.
        </motion.p>

        {/* Buttons */}
        <motion.div
          className="mt-10 flex flex-row sm:flex-row gap-4 justify-center"
          initial="hidden"
          animate="visible"
          variants={lineVariants}
          custom={1.8}
        >
          <a
            href="#"
            className="px-6 py-3 rounded-lg text-black font-semibold bg-lime-500 border border-lime-500 hover:bg-lime-400 transition-colors min-w-[160px] text-center"
          >
            Get Started{" "}
            {typeof window !== "undefined" &&
            window.matchMedia("(min-width:1024px)").matches
              ? "- It's Free"
              : ""}
          </a>
          <a
            href="#"
            className="px-6 py-3 rounded-lg text-zinc-300 font-semibold border border-zinc-800 hover:border-zinc-500 hover:bg-zinc-900/50 hover:text-zinc-200 transition-colors min-w-[160px] text-center"
          >
            Book a Demo
          </a>
        </motion.div>
      </motion.div>

      {/* Background & laptop */}
      <div className="relative w-full h-full flex justify-center mb-20 sm:mb-40 lg:mb-60">
        <img
          src="./bg-1.webp"
          alt="Green Tint"
          className="absolute z-0 scale-150 opacity-60 pointer-events-none select-none"
        />

        <img
          src="./laptop.webp"
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
            top: "32%",
            left: "36%",
            width: "43%",
            height: "50%",
            clipPath: "polygon(0% 0%, 92% 4%, 94% 84%, 0% 84%)",
            transform: "perspective(2800px) rotateX(6deg) rotateY(25deg)",
          }}
        />
      </div>
    </section>
  );
};

export default Hero;
