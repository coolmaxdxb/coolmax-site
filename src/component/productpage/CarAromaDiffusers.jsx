import React from "react";
import { motion } from "framer-motion";
import { 
  TruckIcon, 
  ComputerDesktopIcon, 
  BriefcaseIcon, 
  CheckCircleIcon, 
  UserIcon,
  HandThumbUpIcon,
  ShieldCheckIcon,
  ArrowRightIcon,
  BoltIcon,
  SparklesIcon
} from "@heroicons/react/24/outline";

// --- IMAGE IMPORTS ---
import HeroImg from "../../asset/hero/hero2.webp"; 
import Product1 from "../../asset/hero/hero2.webp"; 
import Product2 from "../../asset/hero/hero2.webp"; 
import Product3 from "../../asset/hero/hero2.webp"; 
import Product4 from "../../asset/hero/hero2.webp"; 
import FeatureImg from "../../asset/hero/hero2.webp"; 

export default function CarAromaDiffusersPage() {
  return (
    <div className="relative min-h-screen bg-[#020617] text-slate-300 font-sans selection:bg-blue-500/30 selection:text-blue-200 overflow-hidden">
      
      {/* ================= GLOBAL BACKGROUND ================= */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-[-20%] left-[10%] w-[1000px] h-[1000px] bg-blue-900/10 rounded-full blur-[150px] mix-blend-screen animate-pulse" />
        <div className="absolute bottom-[-20%] right-[-10%] w-[800px] h-[800px] bg-indigo-900/10 rounded-full blur-[150px] mix-blend-screen" />
        {/* Subtle Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:60px_60px] opacity-20" />
        {/* Vignette */}
        <div className="absolute inset-0 bg-[radial-gradient(transparent,rgba(2,6,23,0.8))]" />
      </div>

      <div className="relative z-10 max-w-[1600px] mx-auto px-6 md:px-12 pb-32">

        {/* ================= HERO SECTION ================= */}
        <section className="min-h-screen flex flex-col justify-center items-center text-center pt-32 pb-20 relative">
          
          {/* Spotlight behind text */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-blue-500/10 blur-[120px] rounded-full pointer-events-none" />

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative z-10 max-w-5xl"
          >
            {/* Status Badge */}
            <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full border border-blue-500/20 bg-blue-950/30 backdrop-blur-xl mb-10 shadow-[0_0_30px_rgba(59,130,246,0.15)]">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-blue-500"></span>
              </span>
              <span className="text-blue-200 text-[11px] font-bold tracking-[0.2em] uppercase">
                Smart, Compact Scent Solutions
              </span>
            </div>
            
            <h1 className="text-6xl md:text-8xl lg:text-7xl font-serif text-white tracking-tight mb-8 leading-[1.05] drop-shadow-2xl">
              Car Aroma Diffusers <br />
              <span className="relative inline-block">
                <span className="absolute -inset-1 blur-xl bg-blue-500/20 rounded-full"></span>
                <span className="relative text-transparent bg-clip-text bg-gradient-to-r from-blue-300 via-white to-blue-300 italic pr-2">
                  in UAE
                </span>
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-slate-400 font-light max-w-3xl mx-auto mb-16 leading-relaxed">
              Smart, Compact Scent Solutions for Cars & Personal Spaces.
              <br className="hidden md:block"/>
              <span className="text-base md:text-lg text-slate-500 mt-4 block">
                Cool Max offers a premium range of car aroma diffusers in UAE, designed to keep vehicle interiors fresh, clean, and comfortable. Our car scent diffusers are compact, easy to use, and ideal for both personal and professional vehicles.
              </span>
            </p>

            {/* --- HERO IMAGE WITH REFLECTION --- */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95, rotateX: 10 }}
              animate={{ opacity: 1, scale: 1, rotateX: 0 }}
              transition={{ delay: 0.3, duration: 1, type: "spring" }}
              className="relative w-full max-w-4xl mx-auto perspective-1000"
            >
              <div className="relative rounded-[2rem] overflow-hidden border border-white/10 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.5)] bg-[#0B0F19]">
                <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/5 to-transparent z-10 mix-blend-overlay"></div>
                <img 
                  src={HeroImg} 
                  alt="Car Aroma Diffuser" 
                  className="w-full h-auto object-cover opacity-90 hover:scale-105 transition-transform duration-[1.5s] ease-in-out" 
                />
              </div>
              
              {/* Reflection Effect */}
              <div className="absolute -bottom-10 left-4 right-4 h-12 bg-blue-500/20 blur-[50px] rounded-full opacity-60"></div>
            </motion.div>

          </motion.div>
        </section>

        {/* ================= SECTION 1: PRODUCT COLLECTION ================= */}
        <section className="py-32">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6 border-b border-white/5 pb-10">
            <div className="max-w-3xl">
              <h2 className="text-4xl md:text-6xl font-serif text-white mb-6">Our Collection</h2>
              <p className="text-lg text-slate-400 max-w-2xl">
                Explore our range of professional car aroma diffusers, designed for vehicles and compact personal spaces. Each product focuses on comfort, safety, and long-lasting freshness.
              </p>
            </div>
            <div className="hidden md:block">
              <SparklesIcon className="w-12 h-12 text-blue-500/50" />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* CARD TEMPLATE */}
            {[
              { img: Product1, name: "DriveScent", tag: "Compact Car Aroma Diffuser", desc: "A sleek and portable car aroma diffuser designed for everyday driving. It delivers subtle, even fragrance and blends seamlessly into modern vehicle interiors.", checks: ["Personal cars", "Daily commuters", "Small cabins"] },
              { img: Product2, name: "VentoCar", tag: "Advanced Car & Personal Space Diffuser", desc: "Designed for longer usage and consistent performance, this diffuser provides steady fragrance output throughout the day.", checks: ["Company vehicles", "Taxis", "Ride-sharing cars"] },
              { img: Product3, name: "DeskScent", tag: "Multi-Use Personal Space Diffuser", desc: "A versatile aroma diffuser that works perfectly in both vehicles and office environments. Easy to move, easy to maintain, and visually minimal.", checks: ["Cars", "Office desks", "Meeting rooms"] },
              { img: Product4, name: "NovaCar", tag: "Modern Vehicle Aroma Diffuser", desc: "A compact and efficient diffuser designed for shared and frequently used vehicles. Provides reliable fragrance diffusion with minimal attention.", checks: ["Fleet vehicles", "Service cars", "Commercial use"] },
            ].map((product, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ delay: idx * 0.1 }}
                className="group relative p-1 rounded-[2.5rem] bg-gradient-to-b from-white/10 to-transparent hover:from-blue-500/30 transition-all duration-500"
              >
                <div className="absolute inset-0 bg-blue-500/5 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="relative h-full bg-[#050914] rounded-[2.4rem] p-8 overflow-hidden">
                  {/* Image Area */}
                  <div className="h-72 w-full bg-gradient-to-b from-[#0f1629] to-transparent rounded-3xl mb-8 overflow-hidden flex items-center justify-center border border-white/5 group-hover:border-blue-500/20 transition-colors">
                    <img src={product.img} alt={product.name} className="h-[90%] w-full object-contain p-4 group-hover:scale-110 group-hover:-rotate-3 transition-transform duration-700 ease-out" />
                  </div>

                  <div className="flex flex-col h-full">
                    <h3 className="text-4xl font-serif text-white mb-2 group-hover:text-blue-200 transition-colors">{product.name}</h3>
                    <p className="text-blue-400 font-bold text-[10px] uppercase tracking-[0.2em] mb-6">{product.tag}</p>
                    <p className="text-slate-400 mb-8 leading-relaxed text-sm h-16">
                      {product.desc}
                    </p>
                    
                    <div className="bg-white/5 rounded-2xl p-5 mb-8 border border-white/5">
                      <span className="text-[10px] font-bold text-slate-500 uppercase block mb-3 tracking-wider">Best suited for:</span>
                      <div className="flex flex-wrap gap-3 text-sm text-slate-300">
                        {product.checks.map((check, i) => (
                          <span key={i} className="flex items-center gap-2 bg-black/40 px-3 py-1.5 rounded-full border border-white/5">
                            <CheckCircleIcon className="w-4 h-4 text-emerald-500"/> {check}
                          </span>
                        ))}
                      </div>
                    </div>

                    <button className="mt-auto w-full py-5 rounded-2xl border border-white/10 bg-white/[0.03] text-white font-bold tracking-wide uppercase text-xs hover:bg-blue-600 hover:border-blue-600 hover:shadow-[0_0_30px_rgba(37,99,235,0.4)] transition-all flex items-center justify-center gap-2 group/btn">
                      View product details <ArrowRightIcon className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform"/>
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* ================= SECTION 2: WHY CHOOSE (Feature Split) ================= */}
        <section className="py-24">
          <div className="relative rounded-[3rem] overflow-hidden border border-white/10 bg-[#080c17]">
            {/* Background Texture */}
            <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-600/10 blur-[100px] rounded-full" />

            <div className="grid lg:grid-cols-2 relative z-10">
              {/* Text Side */}
              <div className="p-10 md:p-16 flex flex-col justify-center">
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                >
                  <h2 className="text-4xl md:text-5xl font-serif text-white mb-8 leading-tight">
                    Why Choose a Professional <br/>
                    <span className="text-blue-400 italic">Car Aroma Diffuser?</span>
                  </h2>
                  <p className="text-slate-400 mb-10 leading-relaxed text-lg border-l-2 border-blue-500/30 pl-6">
                    Most car fresheners only mask odors temporarily and fade quickly. Cool Max car aroma diffusers offer a smarter and cleaner solution.
                  </p>
                  
                  <ul className="space-y-6">
                    {[
                      { title: "Consistent & Controlled Fragrance", desc: "Even scent diffusion without sudden strong smells." },
                      { title: "Long-Lasting Freshness", desc: "Designed for continuous use, not short bursts." },
                      { title: "Clean & Safe Design", desc: "No liquid spills, no hanging chemicals, no mess." },
                      { title: "Professional Appearance", desc: "Ideal for business and fleet vehicles." }
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-5 group">
                        <div className="flex-shrink-0 p-3 rounded-xl bg-blue-500/10 text-blue-400 group-hover:bg-blue-500 group-hover:text-white transition-colors duration-300">
                          <CheckCircleIcon className="w-6 h-6" />
                        </div>
                        <div>
                          <h4 className="font-bold text-white text-lg group-hover:text-blue-300 transition-colors">{item.title}</h4>
                          <p className="text-slate-400 text-sm mt-1">{item.desc}</p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              </div>
              
              {/* Image Side */}
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="relative min-h-[500px] lg:h-auto bg-gray-900 overflow-hidden"
              >
                 <img src={FeatureImg} alt="Interior Scenting" className="absolute inset-0 w-full h-full object-cover opacity-80" />
                 <div className="absolute inset-0 bg-gradient-to-l from-[#080c17] via-transparent to-transparent"></div>
                 <div className="absolute inset-0 bg-gradient-to-t from-[#080c17] via-transparent to-transparent"></div>
                 
                 <div className="absolute bottom-12 left-12 right-12">
                   <div className="bg-white/5 backdrop-blur-xl border border-white/20 p-8 rounded-3xl shadow-2xl">
                     <p className="text-white font-serif text-xl italic leading-relaxed">"Subtle fragrance helps create a calm and welcoming atmosphere."</p>
                   </div>
                 </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ================= SECTION 3: WHERE USED (Grid) ================= */}
        <section className="py-24">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-20"
          >
            <h2 className="text-4xl md:text-5xl font-serif text-white mb-6">Common Applications</h2>
            <p className="text-slate-400 text-lg">
              Cool Max car aroma diffusers are suitable for more than just vehicles. Many customers use these diffusers as personal space scenting solutions.
            </p>
          </motion.div>

          <div className="flex flex-wrap justify-center gap-6">
            {[
              { title: "Personal cars", icon: <TruckIcon className="w-6 h-6"/> },
              { title: "Taxis and ride-sharing", icon: <UserIcon className="w-6 h-6"/> },
              { title: "Company fleet vehicles", icon: <BriefcaseIcon className="w-6 h-6"/> },
              { title: "Office cabins & desks", icon: <ComputerDesktopIcon className="w-6 h-6"/> },
              { title: "Small meeting rooms", icon: <UserIcon className="w-6 h-6"/> }
            ].map((item, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
                className="group p-8 bg-[#0F111A] border border-white/5 rounded-[2rem] w-full md:w-[45%] lg:w-[30%] hover:bg-[#161b29] hover:border-blue-500/30 hover:shadow-[0_10px_40px_-10px_rgba(59,130,246,0.2)] transition-all cursor-default"
              >
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-900/40 to-transparent border border-white/5 flex items-center justify-center text-blue-400 mb-6 group-hover:scale-110 group-hover:text-white transition-all duration-300">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-white group-hover:text-blue-200 transition-colors">{item.title}</h3>
              </motion.div>
            ))}
          </div>
        </section>

        {/* ================= SECTION 4: INFO CARDS ================= */}
        <section className="py-24 grid lg:grid-cols-2 gap-8">
          
          {/* How It Works */}
          <div className="bg-gradient-to-br from-[#0c1221] to-blue-950/20 rounded-[3rem] border border-blue-500/10 p-12 relative overflow-hidden group hover:border-blue-500/30 transition-colors">
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/10 blur-[80px] rounded-full" />
            
            <h2 className="text-3xl font-serif text-white mb-8 relative z-10">How Car Aroma Diffusers Work</h2>
            <p className="text-slate-400 mb-8 leading-relaxed relative z-10">
              Our car aroma diffusers use controlled atomization technology to release fragrance in fine, even particles. This ensures the scent spreads gently throughout the space without becoming overwhelming.
            </p>
            <h4 className="text-blue-300 font-bold uppercase tracking-widest text-xs mb-6 relative z-10">Key benefits include:</h4>
            <ul className="space-y-4 relative z-10">
              {[
                "Quiet operation", 
                "Efficient fragrance usage", 
                "Compact, discreet design", 
                "Safe for enclosed environments"
              ].map((tech, i) => (
                <li key={i} className="flex items-center gap-4 text-slate-200 font-medium p-3 rounded-xl bg-white/5 border border-white/5">
                  <div className="w-8 h-8 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-400">
                    <BoltIcon className="w-4 h-4" />
                  </div>
                  {tech}
                </li>
              ))}
            </ul>
            <p className="mt-8 text-sm text-slate-500 italic border-t border-white/10 pt-4 relative z-10">This makes them ideal for daily use in vehicles and small spaces.</p>
          </div>

          {/* How to Choose */}
          <div className="bg-[#05080f] rounded-[3rem] border border-white/5 p-12 relative overflow-hidden group hover:border-white/10 transition-colors">
             <div className="absolute bottom-0 left-0 w-64 h-64 bg-indigo-600/5 blur-[80px] rounded-full" />
            
            <h2 className="text-3xl font-serif text-white mb-8 relative z-10">How to Choose the Right One</h2>
            <p className="text-slate-400 mb-8 relative z-10">When selecting a car aroma diffuser, consider:</p>
            <div className="space-y-4 relative z-10">
              {[
                { label: "Space Size", desc: "Designed for cars and small enclosed areas." },
                { label: "Usage Pattern", desc: "Daily-use vehicles benefit from steady fragrance systems." },
                { label: "Power Convenience", desc: "Battery or USB-powered options allow flexibility." },
                { label: "Fragrance Preference", desc: "Subtle scents work best in compact spaces." }
              ].map((item, i) => (
                <div key={i} className="flex flex-col md:flex-row md:items-center justify-between p-4 border border-white/5 rounded-2xl bg-white/[0.02] hover:bg-white/[0.05] transition-colors">
                  <span className="text-blue-400 font-bold text-sm uppercase tracking-wide mb-1 md:mb-0">{item.label}</span>
                  <span className="text-slate-400 text-sm md:text-right">{item.desc}</span>
                </div>
              ))}
            </div>
            <p className="mt-8 text-white font-medium flex items-center gap-2 relative z-10">
              <SparklesIcon className="w-5 h-5 text-yellow-500" />
              If you’re unsure, our team can help you select the right option.
            </p>
          </div>
        </section>

        {/* ================= SECTION 6: WHY CHOOSE COOL MAX ================= */}
        <section className="py-24">
          <div className="bg-gradient-to-r from-[#05080f] to-[#0B0F19] rounded-[3rem] p-10 md:p-20 border border-white/10 text-center relative overflow-hidden shadow-2xl">
            {/* Pattern Overlay */}
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5 mix-blend-overlay" />
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[1px] bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-50" />

            <div className="relative z-10">
              <div className="w-16 h-16 mx-auto bg-blue-500/20 rounded-full flex items-center justify-center text-blue-400 mb-8 blur-[1px] animate-pulse">
                  <ShieldCheckIcon className="w-8 h-8" />
              </div>
              
              <h2 className="text-4xl md:text-5xl font-serif text-white mb-8">Why Choose Cool Max?</h2>
              <p className="text-slate-400 mb-12 max-w-2xl mx-auto text-lg">
                Customers across the UAE trust Cool Max because we focus on reliability and real-world usage.
              </p>
              
              <div className="flex flex-wrap justify-center gap-4 mb-16">
                {[
                  "UAE-based company with local support", 
                  "Professional-grade scent diffuser machines", 
                  "Suitable for personal and commercial use", 
                  "Easy maintenance and refill support", 
                  "Trusted by businesses across multiple industries"
                ].map((reason, i) => (
                  <span key={i} className="px-6 py-4 rounded-full bg-white/5 text-blue-100 text-sm border border-white/10 flex items-center gap-3 hover:bg-white/10 hover:border-blue-500/30 transition-all cursor-default backdrop-blur-md">
                    <ShieldCheckIcon className="w-5 h-5 text-emerald-400"/> {reason}
                  </span>
                ))}
              </div>
              <p className="text-xl font-serif italic text-transparent bg-clip-text bg-gradient-to-r from-slate-400 via-white to-slate-400">
                "We don’t just sell products — we support them."
              </p>
            </div>
          </div>
        </section>

        {/* ================= SECTION 7: RELATED SOLUTIONS ================= */}
        <section className="py-16 border-t border-white/5">
          <div className="max-w-7xl mx-auto px-6 lg:px-12 text-center">
            <h2 className="text-sm font-bold text-slate-500 uppercase tracking-widest mb-10">Explore Related Solutions</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                "Car & Personal Space Scenting Solutions",
                "Desktop & Small Space Aroma Diffusers",
                "Maintenance & Refill Support"
              ].map((item, i) => (
                <a key={i} href="/contact" className="group flex items-center justify-between p-6 bg-white/[0.02] rounded-2xl border border-white/5 hover:border-blue-500/50 hover:bg-blue-500/5 transition-all duration-300">
                  <span className="font-bold text-slate-300 group-hover:text-white transition-colors text-left">{item}</span>
                  <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-blue-500 transition-colors">
                     <ArrowRightIcon className="w-4 h-4 text-slate-400 group-hover:text-white transition-colors" />
                  </div>
                </a>
              ))}
            </div>
            <p className="mt-8 text-xs text-slate-600">These solutions help maintain freshness across all environments.</p>
          </div>
        </section>

        {/* ================= SECTION 8: CTA ================= */}
        <section className="pt-10 pb-20 text-center relative">
           <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-blue-600/20 blur-[120px] rounded-full pointer-events-none" />
           
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="max-w-5xl mx-auto pt-20 relative z-10"
          >
            <h2 className="text-5xl md:text-7xl font-serif text-white mb-8 leading-tight">
              Need Help Choosing the Right <br/> 
              <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">Car Aroma Diffuser?</span>
            </h2>
            <p className="text-xl text-slate-400 mb-10 leading-relaxed font-light max-w-3xl mx-auto">
              Whether you need a car aroma diffuser for personal use or for multiple vehicles, Cool Max offers dependable solutions designed for comfort and consistency.
              Our team will guide you in selecting the right product and provide ongoing support.
            </p>
            
            <p className="text-blue-300 font-bold mb-12 uppercase tracking-[0.2em] text-xs">
              Looking for car aroma diffusers in UAE?
            </p>
            
            <a href="/contact" className="group relative inline-flex items-center gap-4 px-12 py-6 bg-blue-600 text-white font-bold text-lg rounded-full overflow-hidden transition-all hover:scale-105 hover:shadow-[0_0_60px_rgba(37,99,235,0.5)]">
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-blue-500" />
              <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.3)_50%,transparent_75%)] bg-[length:250%_250%] animate-[shimmer_2s_linear_infinite]" />
              <span className="relative z-10">Contact Cool Max Today</span>
              <HandThumbUpIcon className="relative z-10 w-6 h-6 group-hover:rotate-12 transition-transform" />
            </a>
          </motion.div>
        </section>

      </div>
    </div>
  );
}