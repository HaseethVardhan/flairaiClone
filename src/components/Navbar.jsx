import { useState, useEffect } from "react";

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <div className={`w-screen  px-4 text-zinc-200 sticky top-0 lg:px-4 py-2.5 sm:py-4 z-50 flex flex-row items-center justify-between transition-colors backdrop-blur-lg bg-[#16161678] hide-scrollbar ${scrolled ? "border-b border-[#ffffff1a]" : "border-b border-transparent"}
      }`}>
        <div className='flex flex-row items-center'>
            <svg className="text-lime-500" width="20" height="20" viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M74.4382 512H101.382C145.501 512 184.758 484.003 199.13 442.291C201.443 435.578 196.456 428.584 189.355 428.584H74.4382V512Z" fill="currentColor"></path><path d="M104.389 171.146H73V90.6067H167.596C188.629 90.6067 207.532 77.771 215.29 58.2212C229.236 23.0755 263.219 0 301.031 0H439.742V86.2921H232.502C212.533 86.2921 194.501 98.2355 186.71 116.621C172.705 149.675 140.287 171.146 104.389 171.146Z" fill="currentColor"></path><path d="M105.827 343.73H74.4382V263.191H169.034C190.067 263.191 208.97 250.355 216.728 230.805C230.675 195.66 264.657 172.584 302.469 172.584H418.169V258.876H233.94C213.971 258.876 195.939 270.82 188.149 289.206C174.143 322.259 141.726 343.73 105.827 343.73Z" fill="currentColor"></path></svg>
            <h1 className="text-[1.6rem] ml-2 text-zinc-200 select-none tracking-normal font-muoto font-[200]">Flair.ai</h1>
        </div>
        <div>
            <button className={`w-30 font-muoto text-[0.9rem]  flex flex-row items-center justify-center px-6 py-2.5 sm:py-2 text-sm rounded-lg transition-colors whitespace-nowrap text-zinc-300 font-semibold border border-zinc-800 hover:border-zinc-500 hover:bg-zinc-900/50 hover:text-zinc-200 shadow-xl ${scrolled ? "bg-[#84cc16] text-[#161616]" : ""}`}>Try Flair AI</button>
        </div>
    </div>
  );
};
