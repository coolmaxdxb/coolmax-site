import React, { useState } from "react";
import { ArrowLongRightIcon, SparklesIcon } from "@heroicons/react/24/solid";

// ================= IMAGE IMPORTS =================
import ProdHome from "../../asset/hero/vs-160_converted.webp"; 
import ProdComm from "../../asset/hero/q3000pro_converted.webp"; 
import ProdWall from "../../asset/hero/m45_converted.webp"; 
import ProdHVAC from "../../asset/hero/m41-b_converted.webp"; 
import ProdFloor from "../../asset/hero/a500_converted.webp"; 
import ProdCar from "../../asset/hero/Q-500_converted.webp"; 

// ================= DATA STRUCTURE =================
const categories = [
  {
    id: 1,
    title: "Home & Small Space Aroma Diffusers",
    desc: "Compact and efficient home diffuser machines that are ideal for bedrooms, living rooms, small offices, and personal spaces. These systems deliver controlled fragrance without being too strong.",
    gallery: [ProdHome, ProdHVAC, ProdComm, ProdFloor] 
  },
  {
    id: 2,
    title: "Wall-Mounted & Ceiling Aroma Diffusers",
    desc: "Perfect for corridors, washrooms, elevators, and common areas. These aroma scent diffusers are discreet, space-saving, and designed for continuous use.",
    gallery: [ProdWall, ProdHVAC, ProdComm, ProdFloor]
  },
  {
    id: 3,
    title: "Commercial Aroma Diffusers",
    desc: "Professional-grade commercial scent machines suitable for offices, clinics, gyms, and retail stores, ensuring consistent fragrance throughout working hours.",
    gallery: [ProdHome, ProdHVAC, ProdComm, ProdFloor]
  },
  {
    id: 4,
    title: "Floor-Standing Aroma Diffusers",
    desc: "Elegant and powerful scent air machines designed for hotel lobbies, showrooms, and premium interiors where both performance and appearance matter.",
    gallery: [ProdHome, ProdHVAC, ProdComm, ProdFloor]
  },
  {
    id: 5,
    title: "Large Area & HVAC Aroma Diffusers",
    desc: "High-capacity HVAC scent diffusers and hotel scent diffuser systems designed for large spaces ranging from 3,000 m³ to 15,000 m³.",
    gallery: [ProdHome, ProdHVAC, ProdComm, ProdFloor]
  },
  {
    id: 6,
    title: "Car Aroma Diffusers",
    desc: "Portable scent machines for home and car that keep vehicle interiors fresh and pleasant.",
    gallery: [ProdHome, ProdHVAC, ProdCar, ProdFloor]
  },
];

export default function Products() {
  return (
    <section className="relative w-full py-32 bg-[#02040a] text-white overflow-hidden" id="products">
      
      {/* ================= AMBIENT BACKGROUND ================= */}
      <div className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] bg-blue-900/20 rounded-full blur-[120px] pointer-events-none animate-pulse" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[40vw] h-[40vw] bg-cyan-900/20 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
           style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }} 
      />

      <div className="relative z-10 max-w-[1400px] mx-auto px-6 md:px-12">
        
        {/* ================= HEADER ================= */}
        <div className="mb-32 max-w-5xl mx-auto text-center md:text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-blue-500/30 bg-blue-500/10 backdrop-blur-md mb-6">
             <SparklesIcon className="w-4 h-4 text-blue-400" />
             <span className="text-blue-200 text-xs font-bold tracking-widest uppercase">
               Our Collection
             </span>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-medium text-white mb-6 tracking-tight leading-tight">
            Aroma Diffusers for <br className="hidden md:block"/> 
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-200 via-white to-cyan-200">
              Every Space
            </span>
          </h2>
          
          <div className="space-y-4">
            <p className="text-xl text-white font-normal">
              From Small Rooms to Large Commercial Areas
            </p>
            <p className="text-lg text-slate-400 leading-relaxed max-w-3xl mx-auto md:mx-0 font-light">
              Cool Max offers a wide range of scent diffuser machines designed to suit different environments and coverage requirements. Our product range includes:
            </p>
          </div>
        </div>

        {/* ================= LIST ================= */}
        <div className="flex flex-col gap-32">
          {categories.map((cat, index) => (
            <ProductCard key={cat.id} data={cat} index={index} />
          ))}
        </div>

        {/* ================= BOTTOM BUTTON ================= */}
        <div className="mt-32 text-center">
            <a href="/contact" className="inline-block group relative px-10 py-5 bg-white text-black rounded-full font-bold overflow-hidden transition-all hover:scale-105 duration-300 shadow-[0_0_40px_-10px_rgba(56,189,248,0.3)]">
                <span className="relative z-10 flex items-center gap-3 text-sm tracking-widest uppercase">
                    Explore All Diffuser Categories
                    <ArrowLongRightIcon className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-200 to-cyan-200 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </a>
        </div>

      </div>
    </section>
  );
}

// ================= PRODUCT CARD COMPONENT =================
function ProductCard({ data, index }) {
    const isEven = index % 2 === 0;
    const [activeImage, setActiveImage] = useState(data.gallery[0]);

    return (
        <div className={`flex flex-col lg:flex-row gap-12 lg:gap-20 items-center ${isEven ? '' : 'lg:flex-row-reverse'}`} id={`category-${data.id}`}>
            
            {/* --- IMAGE SECTION --- */}
            <div className="w-full lg:w-3/5 relative group">
                <div className="relative aspect-[4/3] rounded-[2rem] overflow-hidden border border-white/10 shadow-2xl bg-slate-900">
                    <img 
                        src={activeImage} 
                        alt={data.title} 
                        className="w-full h-full object-cover transition-all duration-700 ease-in-out group-hover:scale-105 opacity-90 group-hover:opacity-100"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-80" />
                    
                    {/* THUMBNAILS */}
                    <div className="absolute bottom-6 left-6 flex gap-3 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 delay-100 z-20">
                        {data.gallery.map((img, i) => (
                             <button 
                                key={i} 
                                onClick={() => setActiveImage(img)} 
                                className={`w-16 h-12 rounded-lg border overflow-hidden backdrop-blur-md transition-all cursor-pointer hover:scale-110 ${
                                    activeImage === img ? "border-blue-400 opacity-100 ring-2 ring-blue-500/50" : "border-white/30 opacity-60 hover:opacity-100"
                                }`}
                             >
                                <img src={img} alt="thumb" className="w-full h-full object-cover" />
                             </button>
                        ))}
                    </div>
                </div>
                <div className={`absolute -z-10 w-full h-full top-4 ${isEven ? 'left-4' : 'right-4'} rounded-[2rem] border border-white/5 bg-white/[0.02]`} />
            </div>

            {/* --- TEXT SECTION --- */}
            <div className="w-full lg:w-2/5 relative">
                <div className="absolute -top-20 -left-10 text-[120px] font-bold text-white/[0.03] select-none pointer-events-none font-serif">
                    0{data.id}
                </div>

                <div className="relative z-10">
                    <div className="flex items-center gap-3 mb-6">
                        <div className="h-px w-8 bg-blue-500" />
                        <span className="text-blue-400 text-xs font-bold uppercase tracking-widest">
                             Series {data.id}
                        </span>
                    </div>

                    <h3 className="text-3xl lg:text-4xl font-medium text-white mb-6 leading-tight">
                        {data.title}
                    </h3>

                    <p className="text-lg text-slate-400 leading-relaxed mb-8 font-light">
                        {data.desc}
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4">
                        {/* === UPDATED BUTTON === */}
                        <a 
                            href="/contact" 
                            className="px-8 py-4 rounded-full border border-blue-500/30 text-white font-medium text-xs uppercase tracking-widest hover:bg-blue-600 hover:border-blue-600 hover:text-white transition-all duration-300 flex items-center justify-center gap-2 group/btn shadow-[0_0_20px_-5px_rgba(59,130,246,0.3)]"
                        >
                            Contact
                            <ArrowLongRightIcon className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                        </a>
                    </div>
                </div>
            </div>

        </div>
    );
}