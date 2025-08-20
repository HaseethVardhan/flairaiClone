import {
  Twitter as TwitterIcon,
  Linkedin as LinkedinIcon,
  Instagram as InstagramIcon,
  Youtube as YoutubeIcon,
  Mail as MailIcon,
} from "lucide-react";

const footerLinks = [
  {
    title: "Company",
    links: [
      "Pricing",
      "Enterprise",
      "Careers",
      "Terms of Service",
      "Blog",
      "FAQ",
    ],
  },
  {
    title: "Key Features",
    links: [
      "Bulk Content Generation",
      "On Model Photography",
      "AI Product Videos",
      "AI Marketing & Ads",
      "AI Human Builder",
      "Flair API",
    ],
  },
  {
    title: "Product Categories",
    links: [
      "AI Beauty",
      "AI Consumer Packaged Goods",
      "AI Jewelry",
      "AI Fashion Models",
      "AI Furniture",
      "AI Technology",
      "AI Handbags",
      "AI Food",
    ],
  },
  {
    title: "Editing Tools",
    links: [
      "Regenerate Product",
      "Regenerate Human",
      "Magic Erase",
      "Upscale",
      "Virtual Try On",
      "Enhance Image Resolution",
      "Generate Variations",
      "Extend Image Dimensions",
      "View all tools ›",
    ],
  },
];

const MainFooter = () => {
  return (
    <footer className="text-gray-300 font-muoto font-light mb-10">
      <div className="container mx-auto px-6 py-12 max-w-6xl">
        {/* Links Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center sm:text-left">
          {footerLinks.map((section) => (
            <div key={section.title} className="mx-auto sm:mx-0">
              <h3 className="text-[#d4d4d8] font-semibold mb-4 text-sm sm:text-base">
                {section.title}
              </h3>
              <ul className="space-y-2 sm:space-y-3">
                {section.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-[#71717a] hover:text-[#d7d7d7] transition-colors duration-200 text-xs sm:text-sm"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="mt-12 pt-8 flex flex-col md:flex-row items-center justify-between text-center md:text-left">
          {/* Logo + Copy */}
          <div className="flex items-center mb-4 md:mb-0 space-x-2">
            <svg
              className="text-lime-500"
              width="20"
              height="20"
              viewBox="0 0 512 512"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M74.4382 512H101.382C145.501 512 184.758 484.003 199.13 442.291C201.443 435.578 196.456 428.584 189.355 428.584H74.4382V512Z"
                fill="currentColor"
              />
              <path
                d="M104.389 171.146H73V90.6067H167.596C188.629 90.6067 207.532 77.771 215.29 58.2212C229.236 23.0755 263.219 0 301.031 0H439.742V86.2921H232.502C212.533 86.2921 194.501 98.2355 186.71 116.621C172.705 149.675 140.287 171.146 104.389 171.146Z"
                fill="currentColor"
              />
              <path
                d="M105.827 343.73H74.4382V263.191H169.034C190.067 263.191 208.97 250.355 216.728 230.805C230.675 195.66 264.657 172.584 302.469 172.584H418.169V258.876H233.94C213.971 258.876 195.939 270.82 188.149 289.206C174.143 322.259 141.726 343.73 105.827 343.73Z"
                fill="currentColor"
              />
            </svg>
            <p className="text-xs sm:text-sm px-2 text-[#71717a]">
              &copy; 2025 Flair AI. All rights reserved.
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center space-x-4">
            <a
              href="#"
              className="text-[#71717a] hover:text-[#d7d7d7] transition-colors duration-200"
            >
              <TwitterIcon size={18} />
            </a>
            <a
              href="#"
              className="text-[#71717a] hover:text-[#d7d7d7] transition-colors duration-200"
            >
              <LinkedinIcon size={18} />
            </a>
            <a
              href="#"
              className="text-[#71717a] hover:text-[#d7d7d7] transition-colors duration-200"
            >
              <InstagramIcon size={18} />
            </a>
            <a
              href="#"
              className="text-[#71717a] hover:text-[#d7d7d7] transition-colors duration-200"
            >
              <YoutubeIcon size={18} />
            </a>
            <a
              href="#"
              className="text-[#71717a] hover:text-[#d7d7d7] transition-colors duration-200"
            >
              <MailIcon size={18} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default MainFooter;
