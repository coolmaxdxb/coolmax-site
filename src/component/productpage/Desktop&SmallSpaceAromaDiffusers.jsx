import React from "react";
import { motion } from "framer-motion";
import { 
  ComputerDesktopIcon, 
  BriefcaseIcon, 
  CheckCircleIcon, 
  UserIcon,
  HandThumbUpIcon,
  ShieldCheckIcon,
  ArrowRightIcon,
  BoltIcon
} from "@heroicons/react/24/outline";

// --- IMAGE IMPORTS (UPDATE THESE PATHS TO YOUR REAL IMAGES) ---
import HeroImg from "../../asset/hero/hero2.webp"; // Hero image
import Product1 from "../../asset/hero/hero2.webp"; // OpalMist Image
import Product2 from "../../asset/hero/hero2.webp"; // AromaDesk Image
import Product3 from "../../asset/hero/hero2.webp"; // ZenBox Mini Image
import Product4 from "../../asset/hero/hero2.webp"; // AeroCube Image
import Product5 from "../../asset/hero/hero2.webp"; // LuxePanel Image
import FeatureImg from "../../asset/hero/hero2.webp"; // Interior Office shot

export default function DesktopSmallSpacePage() {
  return (
    <div className="relative min-h-screen bg-[#020617] text-slate-300 font-sans selection:bg-blue-500 selection:text-white overflow-hidden">
      
      {/* ================= GLOBAL BACKGROUND ================= */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-[-10%] left-[20%] w-[800px] h-[800px] bg-blue-900/10 rounded-full blur-[120px] mix-blend-screen" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[600px] h-[600px] bg-indigo-900/10 rounded-full blur-[120px] mix-blend-screen" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.015)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.015)_1px,transparent_1px)] bg-[size:80px_80px] opacity-30" />
      </div>

      {/* CHANGED: Increased max-width to 1600px */}
      <div className="relative z-10 max-w-[1600px] mx-auto px-6 md:px-12 pb-32">

        {/* ================= HERO SECTION ================= */}
        <section className="min-h-[90vh] flex flex-col justify-center items-center text-center pt-32 relative">
          
          {/* Ambient Light */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-blue-500/20 blur-[100px] rounded-full pointer-events-none" />

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="relative z-10 max-w-6xl"
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-blue-500/30 bg-blue-900/20 backdrop-blur-md mb-8 shadow-[0_0_20px_rgba(59,130,246,0.3)]">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
              </span>
              <span className="text-blue-200 text-xs font-bold tracking-widest uppercase">
                Compact Scent Solutions
              </span>
            </div>
            
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif text-white tracking-tight mb-8 leading-[1.1]">
              Desktop & Small Space <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 via-indigo-300 to-white italic">
                Aroma Diffusers in UAE
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-slate-400 font-light max-w-5xl mx-auto mb-12">
              Compact Scent Solutions for Offices, Cabins & Small Rooms.
              <br className="hidden md:block"/>
              <span className="text-lg text-slate-500 block mt-4 leading-relaxed">
                Desktop and small space aroma diffusers from Cool Max are designed to create fresh, calm, and comfortable environments in compact areas. These scent diffuser machines are ideal for office desks, cabins, meeting rooms, home offices, and other small indoor spaces where subtle and controlled fragrance is required. Our desktop aroma diffusers and small space scent diffusers provide consistent fragrance without noise or overpowering intensity, making them suitable for daily professional and personal use.
              </span>
            </p>

            {/* --- HERO IMAGE INTEGRATION --- */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="relative w-full max-w-4xl mx-auto rounded-3xl overflow-hidden border border-white/10 shadow-2xl shadow-blue-900/50"
            >
              <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-transparent to-transparent z-10"></div>
              <img 
                src={HeroImg} 
                alt="Desktop Aroma Diffuser" 
                className="w-full h-auto object-cover opacity-90 hover:scale-105 transition-transform duration-700" 
              />
            </motion.div>

          </motion.div>
        </section>

        {/* ================= SECTION 1: PRODUCT COLLECTION ================= */}
        <section className="py-24 border-t border-white/5">
          <div className="mb-16 text-center max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-6xl font-serif text-white mb-6">Our Desktop & Small Space Diffuser Collection</h2>
            <p className="text-lg text-slate-400">
              Explore our range of compact aroma diffusers designed for desks, cabins, and small rooms. Each product combines ease of use, modern design, and reliable performance.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            
            {/* Product 1: OpalMist */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="group p-8 bg-white/[0.02] border border-white/5 rounded-[2.5rem] hover:border-blue-500/40 hover:bg-white/[0.04] transition-all duration-500"
            >
              <div className="h-72 w-full bg-gradient-to-b from-blue-900/10 to-transparent rounded-3xl mb-8 overflow-hidden flex items-center justify-center border border-white/5">
                <img src={Product1} alt="OpalMist Clock Diffuser" className="h-full w-full object-contain p-6 group-hover:scale-110 transition-transform duration-500" />
              </div>
              <h3 className="text-2xl font-serif text-white mb-2">OpalMist Clock Diffuser</h3>
              <p className="text-blue-400 font-bold text-xs uppercase tracking-widest mb-4">Smart Desk Aroma Diffuser</p>
              <p className="text-slate-400 mb-6 leading-relaxed text-sm">
                A modern desktop aroma diffuser designed for office desks and study tables. It delivers gentle fragrance diffusion while operating quietly in the background.
              </p>
              <div className="bg-black/20 rounded-xl p-4 mb-8">
                <span className="text-xs font-bold text-slate-500 uppercase block mb-1">Best suited for:</span>
                <div className="flex flex-wrap gap-2 text-xs text-slate-300">
                  <span className="flex items-center gap-1"><CheckCircleIcon className="w-3 h-3 text-blue-500"/> Office desks</span>
                  <span className="flex items-center gap-1"><CheckCircleIcon className="w-3 h-3 text-blue-500"/> Study rooms</span>
                  <span className="flex items-center gap-1"><CheckCircleIcon className="w-3 h-3 text-blue-500"/> Home offices</span>
                </div>
              </div>
              <button className="w-full py-4 rounded-xl border border-white/10 bg-white/5 text-white font-bold hover:bg-blue-600 hover:border-blue-600 transition-all text-sm">
                View product details
              </button>
            </motion.div>

            {/* Product 2: AromaDesk */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="group p-8 bg-white/[0.02] border border-white/5 rounded-[2.5rem] hover:border-blue-500/40 hover:bg-white/[0.04] transition-all duration-500"
            >
              <div className="h-72 w-full bg-gradient-to-b from-indigo-900/10 to-transparent rounded-3xl mb-8 overflow-hidden flex items-center justify-center border border-white/5">
                <img src={Product2} alt="AromaDesk" className="h-full w-full object-contain p-6 group-hover:scale-110 transition-transform duration-500" />
              </div>
              <h3 className="text-2xl font-serif text-white mb-2">AromaDesk</h3>
              <p className="text-blue-400 font-bold text-xs uppercase tracking-widest mb-4">Compact Personal Space Diffuser</p>
              <p className="text-slate-400 mb-6 leading-relaxed text-sm">
                A small yet efficient diffuser built for cabins and personal workspaces. Easy to maintain and visually minimal.
              </p>
              <div className="bg-black/20 rounded-xl p-4 mb-8">
                <span className="text-xs font-bold text-slate-500 uppercase block mb-1">Best suited for:</span>
                <div className="flex flex-wrap gap-2 text-xs text-slate-300">
                  <span className="flex items-center gap-1"><CheckCircleIcon className="w-3 h-3 text-blue-500"/> Office cabins</span>
                  <span className="flex items-center gap-1"><CheckCircleIcon className="w-3 h-3 text-blue-500"/> Small rooms</span>
                  <span className="flex items-center gap-1"><CheckCircleIcon className="w-3 h-3 text-blue-500"/> Workstations</span>
                </div>
              </div>
              <button className="w-full py-4 rounded-xl border border-white/10 bg-white/5 text-white font-bold hover:bg-blue-600 hover:border-blue-600 transition-all text-sm">
                View product details
              </button>
            </motion.div>

            {/* Product 3: ZenBox Mini */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="group p-8 bg-white/[0.02] border border-white/5 rounded-[2.5rem] hover:border-blue-500/40 hover:bg-white/[0.04] transition-all duration-500"
            >
              <div className="h-72 w-full bg-gradient-to-b from-purple-900/10 to-transparent rounded-3xl mb-8 overflow-hidden flex items-center justify-center border border-white/5">
                <img src={Product3} alt="ZenBox Mini" className="h-full w-full object-contain p-6 group-hover:scale-110 transition-transform duration-500" />
              </div>
              <h3 className="text-2xl font-serif text-white mb-2">ZenBox Mini</h3>
              <p className="text-blue-400 font-bold text-xs uppercase tracking-widest mb-4">Small Room Aroma Diffuser</p>
              <p className="text-slate-400 mb-6 leading-relaxed text-sm">
                A compact diffuser designed for enclosed spaces where consistent fragrance is needed without overwhelming the environment.
              </p>
              <div className="bg-black/20 rounded-xl p-4 mb-8">
                <span className="text-xs font-bold text-slate-500 uppercase block mb-1">Best suited for:</span>
                <div className="flex flex-wrap gap-2 text-xs text-slate-300">
                  <span className="flex items-center gap-1"><CheckCircleIcon className="w-3 h-3 text-blue-500"/> Small rooms</span>
                  <span className="flex items-center gap-1"><CheckCircleIcon className="w-3 h-3 text-blue-500"/> Meeting rooms</span>
                  <span className="flex items-center gap-1"><CheckCircleIcon className="w-3 h-3 text-blue-500"/> Personal spaces</span>
                </div>
              </div>
              <button className="w-full py-4 rounded-xl border border-white/10 bg-white/5 text-white font-bold hover:bg-blue-600 hover:border-blue-600 transition-all text-sm">
                View product details
              </button>
            </motion.div>

            {/* Product 4: AeroCube */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="group p-8 bg-white/[0.02] border border-white/5 rounded-[2.5rem] hover:border-blue-500/40 hover:bg-white/[0.04] transition-all duration-500"
            >
              <div className="h-72 w-full bg-gradient-to-b from-teal-900/10 to-transparent rounded-3xl mb-8 overflow-hidden flex items-center justify-center border border-white/5">
                <img src={Product4} alt="AeroCube" className="h-full w-full object-contain p-6 group-hover:scale-110 transition-transform duration-500" />
              </div>
              <h3 className="text-2xl font-serif text-white mb-2">AeroCube</h3>
              <p className="text-blue-400 font-bold text-xs uppercase tracking-widest mb-4">Professional Desktop Diffuser</p>
              <p className="text-slate-400 mb-6 leading-relaxed text-sm">
                Designed for steady daily use, this diffuser provides reliable fragrance output for professional environments.
              </p>
              <div className="bg-black/20 rounded-xl p-4 mb-8">
                <span className="text-xs font-bold text-slate-500 uppercase block mb-1">Best suited for:</span>
                <div className="flex flex-wrap gap-2 text-xs text-slate-300">
                  <span className="flex items-center gap-1"><CheckCircleIcon className="w-3 h-3 text-blue-500"/> Corporate desks</span>
                  <span className="flex items-center gap-1"><CheckCircleIcon className="w-3 h-3 text-blue-500"/> Clinics</span>
                  <span className="flex items-center gap-1"><CheckCircleIcon className="w-3 h-3 text-blue-500"/> Reception counters</span>
                </div>
              </div>
              <button className="w-full py-4 rounded-xl border border-white/10 bg-white/5 text-white font-bold hover:bg-blue-600 hover:border-blue-600 transition-all text-sm">
                View product details
              </button>
            </motion.div>

            {/* Product 5: LuxePanel */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="group p-8 bg-white/[0.02] border border-white/5 rounded-[2.5rem] hover:border-blue-500/40 hover:bg-white/[0.04] transition-all duration-500"
            >
              <div className="h-72 w-full bg-gradient-to-b from-cyan-900/10 to-transparent rounded-3xl mb-8 overflow-hidden flex items-center justify-center border border-white/5">
                <img src={Product5} alt="LuxePanel" className="h-full w-full object-contain p-6 group-hover:scale-110 transition-transform duration-500" />
              </div>
              <h3 className="text-2xl font-serif text-white mb-2">LuxePanel</h3>
              <p className="text-blue-400 font-bold text-xs uppercase tracking-widest mb-4">Premium Desk & Cabin Diffuser</p>
              <p className="text-slate-400 mb-6 leading-relaxed text-sm">
                A refined aroma diffuser with a clean, modern design. Ideal for users who want both performance and aesthetics.
              </p>
              <div className="bg-black/20 rounded-xl p-4 mb-8">
                <span className="text-xs font-bold text-slate-500 uppercase block mb-1">Best suited for:</span>
                <div className="flex flex-wrap gap-2 text-xs text-slate-300">
                  <span className="flex items-center gap-1"><CheckCircleIcon className="w-3 h-3 text-blue-500"/> Executive desks</span>
                  <span className="flex items-center gap-1"><CheckCircleIcon className="w-3 h-3 text-blue-500"/> Cabins</span>
                  <span className="flex items-center gap-1"><CheckCircleIcon className="w-3 h-3 text-blue-500"/> Premium workspaces</span>
                </div>
              </div>
              <button className="w-full py-4 rounded-xl border border-white/10 bg-white/5 text-white font-bold hover:bg-blue-600 hover:border-blue-600 transition-all text-sm">
                View product details
              </button>
            </motion.div>

          </div>
        </section>

        {/* ================= SECTION 2: WHY CHOOSE (With Side Image) ================= */}
        <section className="py-24">
          <div className="bg-white/[0.02] border border-white/5 rounded-[3rem] p-8 md:p-16 relative overflow-hidden">
            <div className="grid lg:grid-cols-2 gap-16 items-center relative z-10">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-4xl md:text-5xl font-serif text-white mb-8">Why Use Desktop & Small Space Aroma Diffusers?</h2>
                <p className="text-slate-400 mb-8 leading-relaxed text-lg">
                  Small indoor spaces require a different approach to scenting. Ordinary air fresheners often create uneven or strong smells that become uncomfortable over time.
                </p>
                
                <ul className="space-y-6">
                  {[
                    { title: "Balanced Fragrance Output", desc: "Desktop aroma diffusers release fragrance evenly, creating a pleasant atmosphere without distraction." },
                    { title: "Quiet & Discreet Operation", desc: "Designed for work environments where silence and focus are important." },
                    { title: "Compact & Space-Saving", desc: "Small footprint makes them ideal for desks, shelves, and side tables." },
                    { title: "Consistent Freshness", desc: "Provides long-lasting fragrance compared to sprays or plug-in fresheners." }
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-4">
                      <div className="p-2 rounded-lg bg-blue-500/10 text-blue-400 mt-1">
                        <CheckCircleIcon className="w-5 h-5" />
                      </div>
                      <div>
                        <h4 className="font-bold text-white text-lg">{item.title}</h4>
                        <p className="text-slate-400 text-sm">{item.desc}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </motion.div>
              
              {/* Feature Image */}
              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="relative h-[600px] rounded-[2.5rem] border border-white/10 overflow-hidden shadow-2xl shadow-blue-900/20"
              >
                 <img src={FeatureImg} alt="Interior Scenting" className="w-full h-full object-cover opacity-80" />
                 <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-transparent to-transparent"></div>
                 <div className="absolute bottom-8 left-8 right-8">
                   <div className="bg-white/10 backdrop-blur-md border border-white/20 p-6 rounded-2xl">
                     <p className="text-white font-serif text-lg">"Designed for work environments where silence and focus are important."</p>
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
            className="text-center max-w-4xl mx-auto mb-20"
          >
            <h2 className="text-4xl md:text-5xl font-serif text-white mb-6">Where Desktop & Small Space Diffusers Are Used</h2>
            <p className="text-slate-400 text-lg">
              Cool Max desktop and small space aroma diffusers are commonly used in:
            </p>
          </motion.div>

          <div className="flex flex-wrap justify-center gap-6">
            {[
              { title: "Office desks and workstations", icon: <ComputerDesktopIcon className="w-6 h-6"/> },
              { title: "Personal cabins and cubicles", icon: <UserIcon className="w-6 h-6"/> },
              { title: "Meeting and conference rooms", icon: <BriefcaseIcon className="w-6 h-6"/> },
              { title: "Home offices and study rooms", icon: <CheckCircleIcon className="w-6 h-6"/> }, 
              { title: "Reception desks and counters", icon: <ComputerDesktopIcon className="w-6 h-6"/> }
            ].map((item, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="group p-8 bg-[#0F111A] border border-white/5 rounded-[2rem] w-full md:w-[45%] lg:w-[30%] hover:bg-[#131620] hover:border-blue-500/40 transition-all"
              >
                <div className="w-12 h-12 rounded-full bg-blue-900/20 flex items-center justify-center text-blue-400 mb-4 group-hover:scale-110 transition-transform">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
              </motion.div>
            ))}
          </div>
          <p className="text-center mt-12 text-slate-400">They are ideal wherever subtle scenting is preferred.</p>
        </section>

        {/* ================= SECTION 4: HOW IT WORKS & CHOOSE ================= */}
        <section className="py-24 grid lg:grid-cols-2 gap-12">
          
          {/* How It Works */}
          <div className="bg-gradient-to-br from-blue-900/10 to-indigo-900/10 rounded-[2.5rem] border border-blue-500/20 p-12">
            <h2 className="text-3xl font-serif text-white mb-8">How Desktop Aroma Diffusers Work</h2>
            <p className="text-slate-400 mb-8 leading-relaxed">
              Desktop and small space diffusers use controlled atomization technology to release fragrance in fine particles. This allows the scent to spread gently within enclosed areas without becoming overpowering.
            </p>
            <h4 className="text-blue-300 font-bold uppercase tracking-widest text-sm mb-6">Key characteristics include:</h4>
            <ul className="space-y-4">
              {[
                "Low-noise performance", 
                "Efficient fragrance usage", 
                "Compact and elegant design", 
                "Safe for continuous indoor use"
              ].map((tech, i) => (
                <li key={i} className="flex items-center gap-4 text-blue-100 font-medium">
                  <div className="w-8 h-8 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-400">
                    <BoltIcon className="w-4 h-4" />
                  </div>
                  {tech}
                </li>
              ))}
            </ul>
            <p className="mt-8 text-sm text-slate-500 italic border-t border-white/10 pt-4">These features make them suitable for long working hours.</p>
          </div>

          {/* How to Choose */}
          <div className="bg-white/[0.03] rounded-[2.5rem] border border-white/10 p-12">
            <h2 className="text-3xl font-serif text-white mb-8">How to Choose the Right Desktop Aroma Diffuser</h2>
            <p className="text-slate-400 mb-8">When selecting a desktop or small space aroma diffuser, consider the following:</p>
            <ul className="space-y-6">
              {[
                { label: "Space Size", desc: "Designed for desks, cabins, and small enclosed rooms." },
                { label: "Working Environment", desc: "Choose quiet models for offices and meeting rooms." },
                { label: "Design Preference", desc: "Modern designs blend well with professional interiors." },
                { label: "Ease of Maintenance", desc: "Low-maintenance systems are ideal for daily use." }
              ].map((item, i) => (
                <li key={i} className="pb-4 border-b border-white/5 last:border-0">
                  <span className="block text-blue-400 font-bold mb-1">{item.label}</span>
                  <span className="text-slate-400 text-sm">{item.desc}</span>
                </li>
              ))}
            </ul>
            <p className="mt-4 text-white font-medium">Our team can guide you in choosing the most suitable diffuser based on your space.</p>
          </div>
        </section>

        {/* ================= SECTION 6: WHY CHOOSE COOL MAX ================= */}
        <section className="py-24">
          <div className="bg-gradient-to-r from-[#0B0F19] to-black rounded-[3rem] p-10 md:p-20 border border-white/10 text-center relative overflow-hidden">
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10 mix-blend-overlay" />

            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl font-serif text-white mb-8">Why Choose Cool Max Desktop Aroma Diffusers?</h2>
              <p className="text-slate-400 mb-12 max-w-2xl mx-auto">
                Businesses and professionals across the UAE choose Cool Max for dependable and practical scenting solutions.
              </p>
              
              <div className="flex flex-wrap justify-center gap-4 mb-16">
                {[
                  "UAE-based company with local support", 
                  "Professional-grade scent diffuser machines", 
                  "Suitable for offices, clinics, and homes", 
                  "Easy maintenance and refill support", 
                  "Trusted by businesses across multiple sectors"
                ].map((reason, i) => (
                  <span key={i} className="px-6 py-3 rounded-full bg-blue-900/20 text-blue-200 text-sm border border-blue-500/20 flex items-center gap-2 backdrop-blur-sm">
                    <ShieldCheckIcon className="w-4 h-4"/> {reason}
                  </span>
                ))}
              </div>
              <p className="text-lg font-serif italic text-slate-300">We focus on delivering solutions that work quietly and consistently.</p>
            </div>
          </div>
        </section>

        {/* ================= SECTION 7: RELATED SOLUTIONS ================= */}
        <section className="py-24 border-t border-white/5">
          <div className="max-w-7xl mx-auto px-6 lg:px-12 text-center">
            <h2 className="text-2xl md:text-3xl font-serif text-white mb-10">Related Scenting Solutions</h2>
            <p className="text-slate-400 mb-8">You may also explore:</p>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                "Car & Personal Space Scenting Solutions",
                "Commercial Aroma Diffusers",
                "Maintenance & Refill Support"
              ].map((item, i) => (
                <a key={i} href="/contact" className="group flex items-center justify-between p-6 bg-white/[0.03] rounded-xl border border-white/10 hover:border-blue-500 transition-colors">
                  <span className="font-bold text-slate-300 group-hover:text-blue-400 transition-colors">{item}</span>
                  <ArrowRightIcon className="w-5 h-5 text-slate-500 group-hover:text-blue-500 transition-colors" />
                </a>
              ))}
            </div>
            <p className="mt-8 text-sm text-slate-500">These solutions help maintain freshness across all environments.</p>
          </div>
        </section>

        {/* ================= SECTION 8: CTA ================= */}
        <section className="pt-10 pb-32 text-center">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto pt-20"
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-white mb-8 leading-tight">Need Help Choosing the Right <br/> <span className="italic text-blue-400">Desktop Aroma Diffuser?</span></h2>
            <p className="text-xl text-slate-400 mb-10 leading-relaxed font-light">
              Whether you are setting up a single workstation or multiple office cabins, Cool Max offers reliable desktop and small space aroma diffusers tailored to your needs.
              Our team will help you select the right solution and ensure long-term performance.
            </p>
            
            <p className="text-blue-300 font-bold mb-12 uppercase tracking-[0.2em] text-sm">
              Looking for desktop and small space aroma diffusers in UAE?
            </p>
            
            <a href="/contact" className="inline-flex items-center gap-3 px-12 py-6 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-bold text-lg rounded-full shadow-[0_0_50px_-10px_rgba(37,99,235,0.6)] hover:scale-105 transition-all">
              Contact Cool Max Today <HandThumbUpIcon className="w-6 h-6" />
            </a>
          </motion.div>
        </section>

      </div>
    </div>
  );
}