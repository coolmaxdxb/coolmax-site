  import React, { useEffect, useState } from "react";
  import { motion, AnimatePresence } from "framer-motion";
  import { ArrowRightIcon, ShieldCheckIcon } from "@heroicons/react/24/solid";
  import { SparklesIcon, Square3Stack3DIcon } from "@heroicons/react/24/outline";

  // Assets
  import Hero1 from "../../src/asset/hero/A70D_converted.webp"; 
  import Hero2 from "../../src/asset/hero/D-50mini_converted.webp"; 
  import Hero3 from "../../src/asset/hero/DA-1004_converted.webp"; 
  import Hero4 from "../../src/asset/hero/H-10-A_converted.webp"; 
  import Hero5 from "../../src/asset/hero/H-11 -B_converted.webp"; 
  import Hero6 from "../../src/asset/hero/H-19 caar_converted.webp"; 
  import Hero7 from "../../src/asset/hero/M--10_converted.webp"; 
  import Hero8 from "../../src/asset/hero/Q-500_converted.webp"; 
  import Hero9 from "../../src/asset/hero/a500_converted.webp"; 
  import Hero10 from "../../src/asset/hero/m41-b_converted.webp"; 

  const productImages = [Hero1, Hero2, Hero3, Hero4, Hero5, Hero6, Hero7, Hero8, Hero9, Hero10];

  export default function HeroSection() {
    const [currentIndex, setCurrentIndex] = useState(0);

    // Auto-rotate the main showcase
    useEffect(() => {
      const timer = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % productImages.length);
      }, 5000);
      return () => clearInterval(timer);
    }, []);

    return (
      <section className="relative w-full min-h-screen bg-[#020617] font-sans overflow-hidden flex items-center selection:bg-blue-500/30 selection:text-blue-200 ">
        
        {/* --- BLUE AMBIANCE BACKGROUND --- */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-[-20%] right-[-10%] w-[800px] h-[800px] bg-blue-600/10 rounded-full blur-[140px] animate-pulse" />
          <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-cyan-500/5 rounded-full blur-[120px]" />
          <div className="absolute inset-0 opacity-[0.05] bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />
        </div>

        <div className="relative z-10 max-w-[1600px] mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center w-full">
          
          {/* --- LEFT SIDE: CONTENT & BANNER GRID --- */}
          <div className="flex flex-col pt-20 lg:pt-0">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 mt-16 mb-8">
                <SparklesIcon className="w-4 h-4 text-blue-400" />
                <span className="text-blue-400 text-[10px] font-bold uppercase tracking-[0.2em]">Blueprints for Scent</span>
              </div>

              <h1 className="text-5xl md:text-7xl font-bold text-white leading-[1.1] mb-6">
                Professional <br />
                Scent Marketing <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">& Aroma Diffusion</span>
              </h1>

              <p className="text-lg text-slate-400 font-light mb-10 max-w-lg">
                Create Fresh, Memorable, and Welcoming Spaces with <span className="text-blue-400">Cool Max</span>.
              </p>

              {/* --- 5 IMAGE BANNER GRID --- */}
              <div className="grid grid-cols-5 gap-3 mb-12 p-2 bg-white/5 rounded-2xl border border-white/10 backdrop-blur-sm">
                {productImages.slice(0, 5).map((img, idx) => (
                  <div 
                    key={idx} 
                    onClick={() => setCurrentIndex(idx)}
                    className={`relative aspect-square rounded-xl overflow-hidden cursor-pointer transition-all duration-300 border-2 ${currentIndex === idx ? 'border-blue-500 scale-105 shadow-lg shadow-blue-500/20' : 'border-transparent opacity-60 hover:opacity-100'}`}
                  >
                    <img src={img} alt="Collection" className="w-full h-full object-contain bg-[#0f172a]" />
                  </div>
                ))}
              </div>

              <div className="space-y-8">
                <p className="text-slate-500 font-medium text-sm flex items-center gap-3">
                  <ShieldCheckIcon className="w-5 h-5 text-blue-500" />
                  Looking for a trusted scent diffuser company in the UAE?
                </p>

                <div className="flex flex-wrap items-center gap-6">
                  <a 
                    href="#contact" 
                    className="group relative px-8 py-4 bg-blue-600 text-white rounded-full font-bold text-sm tracking-wide transition-all hover:bg-blue-500 hover:shadow-[0_0_30px_rgba(59,130,246,0.5)] flex items-center gap-3"
                  >
                    Talk to Cool Max <ArrowRightIcon className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </a>
                  
                  <div className="flex items-center gap-3 text-slate-400 text-xs border-l border-slate-800 pl-6">
                    <Square3Stack3DIcon className="w-5 h-5" />
                    <span>Elite Support <br />Available Across UAE</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* --- RIGHT SIDE: GLOWING SHOWCASE --- */}
          <div className="relative h-[500px] lg:h-[800px] flex items-center justify-center">
            
            {/* Circular Portal Effect */}
            <div className="absolute w-[300px] h-[300px] lg:w-[500px] lg:h-[500px] bg-blue-600/20 rounded-full blur-[80px]" />
            <div className="absolute w-[280px] h-[280px] lg:w-[480px] lg:h-[480px] border border-blue-500/30 rounded-full flex items-center justify-center">
              <div className="w-[90%] h-[90%] border border-blue-500/10 rounded-full animate-pulse" />
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 1.1 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="relative z-10 flex flex-col items-center"
              >
                <img
                  src={productImages[currentIndex]}
                  alt="Main Showcase"
                  className="h-[400px] lg:h-[580px] object-contain drop-shadow-[0_0_50px_rgba(59,130,246,0.3)]"
                />
                
                <div className="mt-8 px-6 py-2 bg-blue-500/10 backdrop-blur-md border border-blue-500/20 rounded-full">
                  <span className="text-[10px] font-black text-blue-400 uppercase tracking-[0.3em]">
                    Premium Model X-{currentIndex + 1}
                  </span>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Vertical Progress Dots */}
            <div className="absolute right-0 flex flex-col gap-2">
              {productImages.map((_, i) => (
                <div 
                  key={i} 
                  className={`w-1 rounded-full transition-all duration-500 ${currentIndex === i ? 'h-8 bg-blue-500' : 'h-1 bg-slate-700'}`} 
                />
              ))}
            </div>
          </div>

        </div>
      </section>
    );
  }