import React from "react";
import { motion } from "framer-motion";
import { 
 
  SparklesIcon, 
  BuildingOffice2Icon, 
  CheckCircleIcon, 
  HandThumbUpIcon, 
  ShieldCheckIcon, 
  ArrowRightIcon, 
  BoltIcon, 
  
} from "@heroicons/react/24/outline";

// --- IMAGE IMPORTS (UPDATE THESE PATHS TO YOUR REAL IMAGES) ---
import HeroImg from "../../asset/hero/hero2.webp"; // Hero image
import Product1 from "../../asset/hero/hero2.webp"; // Natural Fragrance Diffusion Image
import FeatureImg from "../../asset/hero/hero2.webp"; // Washroom/Elevator Interior shot

export default function PassiveDiffusersPage() {
  return (
    <div className="relative min-h-screen bg-[#020617] text-slate-300 font-sans selection:bg-blue-500 selection:text-white overflow-hidden">
      
      {/* ================= GLOBAL BACKGROUND ================= */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-[-10%] left-[20%] w-[800px] h-[800px] bg-blue-900/10 rounded-full blur-[120px] mix-blend-screen" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[600px] h-[600px] bg-indigo-900/10 rounded-full blur-[120px] mix-blend-screen" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.015)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.015)_1px,transparent_1px)] bg-[size:80px_80px] opacity-30" />
      </div>

      <div className="relative z-10 max-w-[1600px] mx-auto px-6 md:px-12 pb-32">

        {/* ================= HERO SECTION ================= */}
        <section className="min-h-[90vh] flex flex-col justify-center items-center text-center pt-32 relative">
          
          {/* Ambient Light */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-blue-500/20 blur-[100px] rounded-full pointer-events-none" />

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="relative z-10 max-w-5xl"
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-blue-500/30 bg-blue-900/20 backdrop-blur-md mb-8 shadow-[0_0_20px_rgba(59,130,246,0.3)]">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
              </span>
              <span className="text-blue-200 text-xs font-bold tracking-widest uppercase">
                Zero Electricity Required
              </span>
            </div>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif text-white tracking-tight mb-8 leading-[1.1]">
              Passive / No-Power <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 via-indigo-300 to-white italic">
                Diffusers in UAE
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-slate-400 font-light max-w-4xl mx-auto mb-12">
              Natural Fragrance Diffusion for Simple & Continuous Freshness.
              <br className="hidden md:block"/>
              <span className="text-lg text-slate-500 block mt-4 leading-relaxed">
                Cool Max offers Passive / No-Power Diffusers designed for spaces where silent, maintenance-free, and electricity-free fragrance is required. Our Natural Fragrance Diffusion solution provides continuous freshness without using electricity, batteries, or mechanical systems.
              </span>
            </p>

            {/* --- HERO IMAGE INTEGRATION --- */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="relative w-full max-w-3xl mx-auto rounded-3xl overflow-hidden border border-white/10 shadow-2xl shadow-blue-900/50"
            >
              <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-transparent to-transparent z-10"></div>
              <img 
                src={HeroImg} 
                alt="Passive Aroma Diffuser" 
                className="w-full h-auto object-cover opacity-90 hover:scale-105 transition-transform duration-700" 
              />
            </motion.div>

          </motion.div>
        </section>

        {/* ================= SECTION 1: PRODUCT COLLECTION ================= */}
        <section className="py-24 border-t border-white/5">
          <div className="mb-16 text-center max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-serif text-white mb-6">Our Passive / No-Power Diffuser Solution</h2>
            <p className="text-lg text-slate-400">
              Discover our reliable, non-electric aroma diffusion solution tailored for consistent freshness.
            </p>
          </div>

          <div className="max-w-2xl mx-auto">
            
            {/* Product 1: Natural Fragrance Diffusion */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="group p-8 bg-white/[0.02] border border-white/5 rounded-[2.5rem] hover:border-blue-500/40 hover:bg-white/[0.04] transition-all duration-500"
            >
              <div className="h-72 w-full bg-gradient-to-b from-blue-900/10 to-transparent rounded-3xl mb-8 overflow-hidden flex items-center justify-center border border-white/5">
                <img src={Product1} alt="Natural Fragrance Diffusion" className="h-full w-full object-contain p-6 group-hover:scale-110 transition-transform duration-500" />
              </div>
              <h3 className="text-2xl font-serif text-white mb-2">Natural Fragrance Diffusion</h3>
              <p className="text-blue-400 font-bold text-xs uppercase tracking-widest mb-4">Non-Electric Aroma Solution</p>
              <p className="text-slate-400 mb-6 leading-relaxed text-sm">
                Natural Fragrance Diffusion is a non-electric aroma diffusion solution that releases fragrance naturally into the air. It works without motors, fans, batteries, or power supply, making it one of the most reliable and low-maintenance scenting options available.
              </p>
              <div className="bg-black/20 rounded-xl p-4 mb-8">
                <span className="text-xs font-bold text-slate-500 uppercase block mb-1">Best suited for:</span>
                <div className="flex flex-wrap gap-2 text-xs text-slate-300">
                  <span className="flex items-center gap-1"><CheckCircleIcon className="w-3 h-3 text-blue-500"/> Washrooms</span>
                  <span className="flex items-center gap-1"><CheckCircleIcon className="w-3 h-3 text-blue-500"/> Elevators</span>
                  <span className="flex items-center gap-1"><CheckCircleIcon className="w-3 h-3 text-blue-500"/> Corridors</span>
                  <span className="flex items-center gap-1"><CheckCircleIcon className="w-3 h-3 text-blue-500"/> Small offices</span>
                  <span className="flex items-center gap-1"><CheckCircleIcon className="w-3 h-3 text-blue-500"/> Toilets</span>
                  <span className="flex items-center gap-1"><CheckCircleIcon className="w-3 h-3 text-blue-500"/> Utility areas</span>
                </div>
              </div>
              <button className="w-full py-4 rounded-xl border border-white/10 bg-white/5 text-white font-bold hover:bg-blue-600 hover:border-blue-600 transition-all text-sm">
                View product details
              </button>
            </motion.div>

          </div>
        </section>

        {/* ================= SECTION 2: WHAT IS IT & WHY CHOOSE ================= */}
        <section className="py-24">
          <div className="bg-white/[0.02] border border-white/5 rounded-[3rem] p-8 md:p-16 relative overflow-hidden">
            <div className="grid lg:grid-cols-2 gap-16 items-center relative z-10">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl md:text-4xl font-serif text-white mb-6">What Is Natural Fragrance Diffusion?</h2>
                <p className="text-slate-400 mb-8 leading-relaxed text-lg">
                  Natural Fragrance Diffusion is a passive scenting method. Once placed in a space, it continuously releases fragrance without any user operation.
                </p>
                <div className="flex flex-wrap gap-4 mb-10">
                    {["No electricity", "No battery", "No noise", "No programming"].map((item, i) => (
                        <span key={i} className="px-4 py-2 bg-blue-500/10 border border-blue-500/20 text-blue-200 rounded-full text-sm">
                            {item}
                        </span>
                    ))}
                </div>
                <p className="text-slate-400 mb-12">This makes it ideal for locations where power access is limited or where silent operation is required.</p>

                <h3 className="text-2xl font-serif text-white mb-6">Why Choose Passive / No-Power Diffusers?</h3>
                <ul className="space-y-6">
                  {[
                    { title: "No Electricity Required", desc: "Works completely without power, reducing operational cost." },
                    { title: "Silent Operation", desc: "No sound at all — ideal for quiet environments." },
                    { title: "Low Maintenance", desc: "No wiring, no batteries, no technical setup." },
                    { title: "Safe & Reliable", desc: "No electrical components means fewer chances of failure." }
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
                 <img src={FeatureImg} alt="Washroom Scenting" className="w-full h-full object-cover opacity-80" />
                 <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-transparent to-transparent"></div>
                 <div className="absolute bottom-8 left-8 right-8">
                   <div className="bg-white/10 backdrop-blur-md border border-white/20 p-6 rounded-2xl">
                     <p className="text-white font-serif text-lg">"Basic but continuous freshness where adjustable scent intensity isn't required."</p>
                   </div>
                 </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ================= SECTION 4: WHERE USED (Grid) ================= */}
        <section className="py-24">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-20"
          >
            <h2 className="text-4xl md:text-5xl font-serif text-white mb-6">Where Passive / No-Power Diffusers Are Used</h2>
            <p className="text-slate-400 text-lg">
              Natural Fragrance Diffusion solutions from Cool Max are commonly installed in:
            </p>
          </motion.div>

          <div className="flex flex-wrap justify-center gap-6">
            {[
              { title: "Public and office washrooms", icon: <SparklesIcon className="w-6 h-6"/> },
              { title: "Elevators and lift cabins", icon: <BuildingOffice2Icon className="w-6 h-6"/> },
              { title: "Corridors and hallways", icon: <ArrowRightIcon className="w-6 h-6"/> },
              { title: "Toilets and utility rooms", icon: <BoltIcon className="w-6 h-6"/> },
              { title: "Small enclosed commercial spaces", icon: <BuildingOffice2Icon className="w-6 h-6"/> }
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
          <p className="text-center mt-12 text-slate-400">These are places where basic but continuous freshness is more important than adjustable scent intensity.</p>
        </section>

        {/* ================= SECTION 5: HOW IT WORKS & WHEN TO CHOOSE ================= */}
        <section className="py-24 grid lg:grid-cols-2 gap-12">
          
          {/* How It Works */}
          <div className="bg-gradient-to-br from-blue-900/10 to-indigo-900/10 rounded-[2.5rem] border border-blue-500/20 p-12">
            <h2 className="text-3xl font-serif text-white mb-8">How Natural Fragrance Diffusion Works</h2>
            <p className="text-slate-400 mb-8 leading-relaxed">
              Natural Fragrance Diffusion works through controlled exposure and evaporation. The fragrance is slowly released into the air over time, creating a consistent and gentle scent.
            </p>
            <h4 className="text-blue-300 font-bold uppercase tracking-widest text-sm mb-6">Key characteristics:</h4>
            <ul className="space-y-4">
              {[
                "Continuous fragrance release", 
                "No mechanical parts", 
                "No power dependency", 
                "Long-lasting performance"
              ].map((tech, i) => (
                <li key={i} className="flex items-center gap-4 text-blue-100 font-medium">
                  <div className="w-8 h-8 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-400">
                    <BoltIcon className="w-4 h-4" />
                  </div>
                  {tech}
                </li>
              ))}
            </ul>
            <p className="mt-8 text-sm text-slate-500 italic border-t border-white/10 pt-4">Once installed, it requires very little attention.</p>
          </div>

          {/* When To Choose */}
          <div className="bg-white/[0.03] rounded-[2.5rem] border border-white/10 p-12">
            <h2 className="text-3xl font-serif text-white mb-8">When Should You Choose Passive / No-Power Diffusers?</h2>
            <p className="text-slate-400 mb-8">This solution is ideal when:</p>
            <ul className="space-y-6">
              {[
                { label: "Power Supply", desc: "Power supply is not available." },
                { label: "Silence", desc: "Silence is important." },
                { label: "Maintenance", desc: "Maintenance needs to be minimal." },
                { label: "Space", desc: "The space is small or enclosed." },
                { label: "Control", desc: "Strong scent control is not required." }
              ].map((item, i) => (
                <li key={i} className="pb-4 border-b border-white/5 last:border-0">
                  <span className="block text-blue-400 font-bold mb-1">{item.label}</span>
                  <span className="text-slate-400 text-sm">{item.desc}</span>
                </li>
              ))}
            </ul>
            <p className="mt-4 text-white font-medium">For larger spaces or controlled scenting, powered aroma diffusers are recommended instead.</p>
          </div>
        </section>

        {/* ================= SECTION 7: COMPARISON TABLE ================= */}
        <section className="py-24">
          <h2 className="text-3xl font-serif text-white mb-12 text-center">Passive / No-Power vs Powered Diffusers</h2>
          
          <div className="overflow-hidden bg-white/[0.02] rounded-[2rem] border border-white/10 backdrop-blur-sm max-w-4xl mx-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-white/10 text-xs uppercase tracking-widest text-slate-500 bg-black/20">
                  <th className="p-6 font-medium">Feature</th>
                  <th className="p-6 font-bold text-blue-400">Passive / No-Power</th>
                  <th className="p-6 font-medium">Powered Diffusers</th>
                </tr>
              </thead>
              <tbody className="text-slate-300">
                {[
                  { feature: "Electricity needed", pass: "No", pow: "Yes" },
                  { feature: "Noise", pass: "Silent", pow: "Very low" },
                  { feature: "Scent control", pass: "Basic", pow: "Advanced" },
                  { feature: "Maintenance", pass: "Very low", pow: "Low" },
                  { feature: "Best for", pass: "Washrooms, elevators", pow: "Offices, lobbies" },
                ].map((row, idx) => (
                  <tr key={idx} className="border-b border-white/5 hover:bg-white/[0.02] transition-colors">
                    <td className="p-6 font-serif text-slate-400">{row.feature}</td>
                    <td className="p-6 text-white font-medium bg-blue-500/5 border-x border-blue-500/10">{row.pass}</td>
                    <td className="p-6 text-slate-500">{row.pow}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-center mt-10 text-slate-400 text-sm font-medium">
            This helps you choose the right solution easily.
          </p>
        </section>

        {/* ================= SECTION 8: WHY CHOOSE COOL MAX ================= */}
        <section className="py-24">
          <div className="bg-gradient-to-r from-[#0B0F19] to-black rounded-[3rem] p-10 md:p-20 border border-white/10 text-center relative overflow-hidden">
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10 mix-blend-overlay" />

            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl font-serif text-white mb-8">Why Choose Cool Max for Passive / No-Power Diffusers?</h2>
              <p className="text-slate-400 mb-12 max-w-2xl mx-auto">
                Cool Max provides professionally selected fragrance solutions designed for real commercial environments.
              </p>
              
              <div className="flex flex-wrap justify-center gap-4 mb-16">
                {[
                  "UAE-based company with local experience", 
                  "Reliable and simple fragrance solutions", 
                  "Suitable for offices, schools, hospitals, and facilities", 
                  "Consistent fragrance performance", 
                  "Trusted by commercial and institutional clients"
                ].map((reason, i) => (
                  <span key={i} className="px-6 py-3 rounded-full bg-blue-900/20 text-blue-200 text-sm border border-blue-500/20 flex items-center gap-2 backdrop-blur-sm">
                    <ShieldCheckIcon className="w-4 h-4"/> {reason}
                  </span>
                ))}
              </div>
              <p className="text-lg font-serif italic text-slate-300">We focus on solutions that work without complexity.</p>
            </div>
          </div>
        </section>

        {/* ================= SECTION 9: RELATED SOLUTIONS ================= */}
        <section className="py-24 border-t border-white/5">
          <div className="max-w-7xl mx-auto px-6 lg:px-12 text-center">
            <h2 className="text-2xl md:text-3xl font-serif text-white mb-10">Related Scenting Solutions</h2>
            <p className="text-slate-400 mb-8">You may also explore:</p>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                "Desktop & Small Space Aroma Diffusers",
                "Washroom Hygiene Solutions",
                "Maintenance & Refill Support"
              ].map((item, i) => (
                <a key={i} href="/contact" className="group flex items-center justify-between p-6 bg-white/[0.03] rounded-xl border border-white/10 hover:border-blue-500 transition-colors">
                  <span className="font-bold text-slate-300 group-hover:text-blue-400 transition-colors">{item}</span>
                  <ArrowRightIcon className="w-5 h-5 text-slate-500 group-hover:text-blue-500 transition-colors" />
                </a>
              ))}
            </div>
            <p className="mt-8 text-sm text-slate-500">These solutions complement passive fragrance diffusion where more control is required.</p>
          </div>
        </section>

        {/* ================= SECTION 10: CTA ================= */}
        <section className="pt-10 pb-32 text-center">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto pt-20"
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-white mb-8 leading-tight">Looking for Passive / <br/> <span className="italic text-blue-400">No-Power Diffusers?</span></h2>
            <p className="text-xl text-slate-400 mb-10 leading-relaxed font-light">
              If you need a simple, electricity-free fragrance solution for washrooms, elevators, or enclosed spaces, Natural Fragrance Diffusion from Cool Max is the right choice.
              Our team will help you understand whether this solution fits your space or if another option is better.
            </p>
            
            <p className="text-blue-300 font-bold mb-12 uppercase tracking-[0.2em] text-sm">
              Contact Cool Max today for Passive / No-Power Diffusers in UAE.
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