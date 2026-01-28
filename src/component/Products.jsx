import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  StarIcon, 
  ArrowRightIcon, 
  BeakerIcon, 
  CubeTransparentIcon,
  CheckCircleIcon
} from "@heroicons/react/24/outline";

/* ================= IMAGE IMPORTS ================= */
import M10Black from "../asset/productimg/Model M10/M10 - 1.jpeg";
import M10White from "../asset/productimg/Model M10/M10 - 2.jpeg";
import Q500Black from "../asset/productimg/Model Q500/Model Q500 - 1.jpeg";
import Q500White from "../asset/productimg/Model Q500/Model Q500 - 2.jpeg";
import M45Black from "../asset/productimg/Model M45/Model M45 1.jpeg";
import M45White from "../asset/productimg/Model M45/Model M45 2.jpeg";
import M41BBlack from "../asset/productimg/Model M41-B/Model M41-B - 1.jpeg";
import M41BWhite from "../asset/productimg/Model M41-B/Model M41-B - 2.jpeg";
import D100Black from "../asset/productimg/Model D100/Model D100 - 1.jpeg";
import D100White from "../asset/productimg/Model D100/Model D100 - 2.jpeg";
import H11Black from "../asset/productimg/Model H11-A-2026/Model H11-A-2026 - 1.jpeg";
import H11White from "../asset/productimg/Model H11-A-2026/Model H11-A-2026 - 10.jpeg";
import A500Black from "../asset/productimg/Model D100/Model D100 - 11.jpeg";
import A500White from "../asset/productimg/Model D100/Model D100 - 13.jpeg";
import VS160Black from "../asset/productimg/Model VS160/Model VS160 - 2.jpeg";
import VS160White from "../asset/productimg/Model VS160/Model VS160 - 1.jpeg";
import DSQBlack from "../asset/productimg/Model DSQ1010-1/Model DSQ1010-1 (1).jpeg";
import DSQWhite from "../asset/productimg/Model DSQ1010-1/Model DSQ1010-1 (2).jpeg";

/* ================= 20 PRODUCTS DATA ================= */
const baseProducts = [
  { id: 1, name: "Car Aroma Diffuser", model: "M10", desc: "Compact and portable scent solutions designed specifically for vehicles.", type: "Portable", imgs: [M10Black, M10White] },
  { id: 2, name: "Desktop Smart Diffuser", model: "A500", desc: "Perfect for desks and washrooms. Quiet operation with elegant design.", type: "Tabletop", imgs: [A500Black, A500White] },
  { id: 3, name: "Wall-Mount Pro", model: "M45", desc: "Space-saving designs that mount easily to walls or ceilings.", type: "Wall", imgs: [M45Black, M45White] },
  { id: 4, name: "Commercial Tower", model: "D100", desc: "Powerful standalone units built for retail stores and lobbies.", type: "Floor", imgs: [D100Black, D100White] },
  { id: 5, name: "HVAC Integrated System", model: "M41-B", desc: "Connects directly to HVAC systems for invisible scent coverage.", type: "HVAC", imgs: [M41BBlack, M41BWhite] },
  { id: 6, name: "Luxury Floor Stand", model: "VS160", desc: "Statement pieces designed to stand on the floor with style.", type: "Floor", imgs: [VS160Black, VS160White] },
  { id: 7, name: "Eco-Passive Diffuser", model: "Q500", desc: "Eco-friendly, silent diffusion solutions that require no electricity.", type: "Passive", imgs: [Q500Black, Q500White] },
  { id: 8, name: "Industrial Power Unit", model: "DSQ1010", desc: "Maximum output diffusers for industrial spaces and event halls.", type: "HVAC", imgs: [DSQBlack, DSQWhite] },
  { id: 9, name: "Smart Tech Series", model: "H11-A", desc: "Next-generation smart diffusers with programmable controls.", type: "Smart", imgs: [H11Black, H11White] },
];

const expandedProducts = [
  ...baseProducts,
  { id: 10, name: "Compact Office Plus", model: "A500-Pro", desc: "Enhanced output for meeting rooms.", type: "Tabletop", imgs: [A500White, A500Black] },
  { id: 11, name: "Lobby Master X", model: "D100-X", desc: "Extended battery life version.", type: "Floor", imgs: [D100White, D100Black] },
  { id: 12, name: "HVAC Enterprise", model: "M41-Pro", desc: "Dual-nozzle HVAC system.", type: "HVAC", imgs: [M41BWhite, M41BBlack] },
  { id: 13, name: "Vertical Slim", model: "VS160-S", desc: "Slim profile for corridors.", type: "Floor", imgs: [VS160White, VS160Black] },
  { id: 14, name: "Travel Scent Pod", model: "M10-Go", desc: "Pocket-sized for travelers.", type: "Portable", imgs: [M10White, M10Black] },
  { id: 15, name: "Ceiling Cloud", model: "M45-C", desc: "Recessed ceiling mount unit.", type: "Ceiling", imgs: [M45White, M45Black] },
  { id: 16, name: "Event Scent Cannon", model: "DSQ-Max", desc: "Rapid diffusion for events.", type: "Portable", imgs: [DSQWhite, DSQBlack] },
  { id: 17, name: "Spa Serenity", model: "Q500-Zen", desc: "Whisper-quiet for spas.", type: "Tabletop", imgs: [Q500White, Q500Black] },
  { id: 18, name: "Retail Omni", model: "D100-R", desc: "Designed for retail shelves.", type: "Tabletop", imgs: [D100Black, D100White] },
  { id: 19, name: "Smart Home Hub", model: "H11-IoT", desc: "Connects to Google/Alexa.", type: "Smart", imgs: [H11White, H11Black] },
  { id: 20, name: "Signature Grand", model: "VS-Gold", desc: "Our flagship floor unit.", type: "Floor", imgs: [VS160Black, VS160White] },
];

export default function ProductDetail() {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const activeProduct = expandedProducts[selectedIndex];

  return (
    <section className="relative py-24 bg-[#F8FAFC] font-sans selection:bg-indigo-500 selection:text-white min-h-screen mt-16">
      
      <div className="max-w-[1800px] mx-auto px-6 md:px-12 h-full">
        
        {/* --- Header --- */}
        <div className="mb-12 border-b border-slate-200 pb-8 flex flex-col md:flex-row justify-between items-end">
          <div>
            <span className="text-indigo-600 font-bold tracking-widest uppercase text-xs mb-3 block">
              Cool Max Collection
            </span>
            <h2 className="text-4xl md:text-5xl font-serif text-slate-900">
              Product Catalogue
            </h2>
          </div>
          <div className="text-right hidden md:block">
            <p className="text-slate-500 text-sm font-medium">Displaying 20 Models</p>
          </div>
        </div>

        {/* --- Main Content Layout --- */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 h-full">
          
          {/* LEFT: Scrollable Menu (4 Cols) */}
          <div className="lg:col-span-4 h-[calc(100vh-200px)] overflow-y-auto pr-4 space-y-3 custom-scrollbar">
            {expandedProducts.map((product, idx) => (
              <button
                key={product.id}
                onClick={() => setSelectedIndex(idx)}
                className={`w-full p-5 rounded-xl border text-left transition-all duration-300 group ${
                  selectedIndex === idx 
                    ? "bg-white border-indigo-500 shadow-xl shadow-indigo-100 ring-1 ring-indigo-500 transform scale-[1.02]" 
                    : "bg-white border-slate-200 hover:border-slate-300 hover:bg-slate-50"
                }`}
              >
                <div className="flex justify-between items-center mb-2">
                  <span className={`text-[10px] font-bold uppercase tracking-widest ${selectedIndex === idx ? "text-indigo-600" : "text-slate-400"}`}>
                    Model {product.model}
                  </span>
                  {selectedIndex === idx && <CheckCircleIcon className="w-5 h-5 text-indigo-500"/>}
                </div>
                <h3 className={`text-lg font-bold ${selectedIndex === idx ? "text-slate-900" : "text-slate-700"}`}>
                  {product.name}
                </h3>
                <p className={`text-xs mt-1 truncate ${selectedIndex === idx ? "text-slate-500" : "text-slate-400"}`}>
                  {product.type} Series
                </p>
              </button>
            ))}
          </div>

          {/* RIGHT: Sticky Preview (8 Cols) */}
          <div className="lg:col-span-8 relative h-full">
            <div className="sticky top-10 bg-white rounded-[2.5rem] p-10 md:p-16 border border-slate-200 shadow-2xl overflow-hidden min-h-[600px] flex flex-col justify-center">
              
              {/* Decorative Background */}
              <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-indigo-50 rounded-full blur-[100px] opacity-60 pointer-events-none -mr-20 -mt-20"></div>
              
              <div className="grid grid-cols-1 xl:grid-cols-2 gap-16 items-center relative z-10">
                
                {/* Text Info */}
                <div className="order-2 xl:order-1">
                  <div className="flex items-center gap-3 mb-6">
                    <span className="px-3 py-1 bg-slate-900 text-white text-[10px] font-bold uppercase tracking-widest rounded-full">
                      In Stock
                    </span>
                    <span className="flex text-yellow-400 gap-0.5">
                      {[...Array(5)].map((_,i) => <StarIcon key={i} className="w-4 h-4 fill-current"/>)}
                    </span>
                  </div>

                  <motion.h1 
                    key={`title-${activeProduct.id}`}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-4xl md:text-6xl font-serif text-slate-900 mb-6 leading-tight"
                  >
                    {activeProduct.name}
                  </motion.h1>

                  <motion.p 
                    key={`desc-${activeProduct.id}`}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.1 }}
                    className="text-lg text-slate-500 font-light leading-relaxed mb-10"
                  >
                    {activeProduct.desc} Engineered for those who appreciate the finer details of scent architecture.
                  </motion.p>

                  <div className="grid grid-cols-2 gap-6 mb-10">
                    <div className="flex items-center gap-4">
                      <div className="p-3 bg-slate-50 rounded-xl text-indigo-600"><CubeTransparentIcon className="w-6 h-6"/></div>
                      <div>
                        <p className="text-xs text-slate-400 font-bold uppercase">Coverage</p>
                        <p className="text-sm font-bold text-slate-900">Up to 300m²</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="p-3 bg-slate-50 rounded-xl text-indigo-600"><BeakerIcon className="w-6 h-6"/></div>
                      <div>
                        <p className="text-xs text-slate-400 font-bold uppercase">Technology</p>
                        <p className="text-sm font-bold text-slate-900">Cold Diffusion</p>
                      </div>
                    </div>
                  </div>

                  <button className="flex items-center gap-3 px-8 py-4 bg-indigo-600 text-white rounded-full font-bold uppercase tracking-widest text-sm hover:bg-indigo-700 transition-all shadow-lg hover:shadow-indigo-200">
                    Request Quote <ArrowRightIcon className="w-4 h-4" />
                  </button>
                </div>

                {/* Image */}
                <div className="order-1 xl:order-2 flex justify-center items-center h-[300px] xl:h-[450px]">
                  <AnimatePresence mode="wait">
                    <motion.img
                      key={activeProduct.id}
                      initial={{ opacity: 0, scale: 0.9, x: 20 }}
                      animate={{ opacity: 1, scale: 1, x: 0 }}
                      exit={{ opacity: 0, scale: 0.9, x: -20 }}
                      transition={{ duration: 0.4 }}
                      src={activeProduct.imgs[0]}
                      alt={activeProduct.name}
                      className="max-h-full w-auto object-contain drop-shadow-2xl"
                    />
                  </AnimatePresence>
                </div>

              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Scrollbar Utility */}
      <style>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: transparent;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background-color: #cbd5e1;
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background-color: #94a3b8;
        }
      `}</style>
    </section>
  );
}