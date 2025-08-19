import React from "react";
import { Check, X } from "lucide-react";
import { motion } from "framer-motion";

const ComparisionComponent = () => {
  const data = [
    { feature: "Custom model image generation", description: "Create images with models trained on your products", flair: true, pebbely: false, botika: true, claid: true },
    { feature: "On model photography", description: "Generate images with products on models", flair: true, pebbely: false, botika: true, claid: true },
    { feature: "Instant image generation", description: "Quickly generate product images without training", flair: true, pebbely: false, botika: false, claid: false },
    { feature: "Background image regeneration", description: "Recreate and modify image backgrounds", flair: true, pebbely: true, botika: false, claid: true },
    { feature: "Video generation", description: "Generate product and model videos", flair: true, pebbely: false, botika: false, claid: false },
    { feature: "Ad generation", description: "Generate advertising creative automatically", flair: true, pebbely: false, botika: false, claid: false },
    { feature: "AI editing tools", description: "Edit and refine images with AI assistance", flair: true, pebbely: true, botika: true, claid: true },
    { feature: "Brand asset management", description: "Manage your brand assets in one place", flair: true, pebbely: false, botika: false, claid: false },
    { feature: "Human builder", description: "Create and customize human models", flair: true, pebbely: false, botika: false, claid: false },
    { feature: "Custom background and assets", description: "Add your own backgrounds and props", flair: true, pebbely: true, botika: false, claid: false },
    { feature: "Team collaboration", description: "Work together with your team in real-time", flair: true, pebbely: false, botika: false, claid: false },
    { feature: "API access", description: "Access via API for integration", flair: true, pebbely: true, botika: false, claid: true },
  ];

  return (
    <section className="w-full py-16 px-6 lg:px-12 font-muoto overflow-x-hidden">
      <motion.div
        className="max-w-6xl mx-auto border border-[#ffffff11] rounded-2xl p-8"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true, amount: 0.3 }}
      >
        <h2 className="text-center text-3xl lg:text-5xl font-light text-white mb-4">
          How does Flair compare?
        </h2>
        <p className="text-center text-lg font-light text-gray-400 mb-12">
          See how Flair stacks up against other AI product photography platforms
        </p>

        {/* ✅ Prevent horizontal scroll */}
<div className="w-full overflow-hidden">
  <table className="w-full table-auto border-collapse">
    <thead>
      <tr className="text-left text-gray-300 border-b border-[#ffffff11]">
        <th className="py-4 px-4 w-1/2">Features</th>
        <th className="py-4 px-4 text-center w-[12%]">Flair</th>
        <th className="py-4 px-4 text-center w-[12%]">Pebebly</th>
        <th className="py-4 px-4 text-center w-[12%]">Botika</th>
        <th className="py-4 px-4 text-center w-[12%]">Claid</th>
      </tr>
    </thead>
    <tbody>
      {data.map((row, idx) => (
        <motion.tr
  key={idx}
  className="border-b border-[#ffffff11] last:border-0 hover:bg-[#161616] transition-colors duration-300"
  initial={{ opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.4, delay: idx * 0.05 }}
  viewport={{ once: true, amount: 0.2 }}
>

          <td className="py-6 px-4 text-white align-top">
            <div className="font-medium">{row.feature}</div>
            <div className="text-sm text-gray-500">{row.description}</div>
          </td>

          <td className="py-6 px-4 text-center">
            {row.flair ? <Check className="text-green-500 inline" /> : <X className="text-gray-600 inline" />}
          </td>
          <td className="py-6 px-4 text-center">
            {row.pebbely ? <Check className="text-green-500 inline" /> : <X className="text-gray-600 inline" />}
          </td>
          <td className="py-6 px-4 text-center">
            {row.botika ? <Check className="text-green-500 inline" /> : <X className="text-gray-600 inline" />}
          </td>
          <td className="py-6 px-4 text-center">
            {row.claid ? <Check className="text-green-500 inline" /> : <X className="text-gray-600 inline" />}
          </td>
        </motion.tr>
      ))}
    </tbody>
  </table>
</div>

      </motion.div>
    </section>
  );
};

export default ComparisionComponent;
