import React from "react";

import RetreatPalm from "../asset/clientslogo//The Retreat Palm Dubai.webp";
import Mercure from "../asset/clientslogo/Mercure Hotels.webp";
import PanHome from "../asset/clientslogo/PAN HOME.webp";
import Lulu from "../asset/clientslogo/lulu.webp"
import Ramada from "../asset/clientslogo/Ramada by Wyndham.webp";

/* ================= LOGO ARRAY ================= */
const logos = [
   RetreatPalm,
   Mercure,
   PanHome,
   Lulu,
   Ramada,
];

export default function OurClienteles() {
  return (
    <section className="relative py-24 bg-white border-t border-gray-100">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        
        {/* HEADER SECTION */}
        <div className="flex flex-col md:flex-row items-center md:items-end justify-between mb-16 gap-6">
          <div className="text-center md:text-left">
            <span className="text-blue-600 font-bold text-[10px] uppercase tracking-[0.3em] mb-3 block">
              Global Partnerships
            </span>
            <h2 className="text-4xl md:text-5xl font-serif text-slate-900 leading-tight">
              Our <span className="italic font-light text-slate-400">Esteemed</span> Clienteles
            </h2>
          </div>
          <div className="max-w-xs text-center md:text-right">
            <p className="text-slate-500 text-sm leading-relaxed">
              Trusted by leading government entities, hospitality groups, and luxury retail brands across the UAE.
            </p>
          </div>
        </div>

        {/* LOGO GRID - Original Colors & Enlarged Sizing */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {logos.map((logo, index) => (
            <div
              key={index}
              className="group relative h-[180px] md:h-[220px] 
                         bg-white border border-gray-100 
                         rounded-[2.5rem] flex items-center justify-center 
                         p-8 shadow-sm transition-all duration-500 
                         hover:shadow-[0_30px_60px_-12px_rgba(0,0,0,0.1)] 
                         hover:border-blue-100 hover:-translate-y-1"
            >
              {/* Decorative accent for the enlarged view */}
              <div className="absolute inset-0 rounded-[2.5rem] bg-gradient-to-br from-slate-50 to-white opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <img
                src={logo}
                alt="Client Logo"
                className="relative z-10 h-full w-full 
                           object-contain 
                           transition-all duration-500 group-hover:scale-110"
              />
            </div>
          ))}
        </div>

        {/* TRUST INDICATOR FOOTER */}
        <div className="mt-20 pt-10 border-t border-gray-50 flex flex-wrap justify-center gap-x-12 gap-y-6">
            <div className="flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-blue-500"></span>
                <p className="text-[11px] font-black uppercase tracking-widest text-slate-400">Hospitality Sector</p>
            </div>
            <div className="flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-blue-500"></span>
                <p className="text-[11px] font-black uppercase tracking-widest text-slate-400">Retail Excellence</p>
            </div>
            <div className="flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-blue-500"></span>
                <p className="text-[11px] font-black uppercase tracking-widest text-slate-400">Corporate Spaces</p>
            </div>
        </div>
      </div>
    </section>
  );
}