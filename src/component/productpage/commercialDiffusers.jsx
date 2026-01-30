import React from "react";
import { motion } from "framer-motion";
import { 
  BuildingStorefrontIcon, 
  CurrencyDollarIcon, 
  UserGroupIcon, 
  SparklesIcon, 

  CheckCircleIcon, 
  HandThumbUpIcon, 
  ShieldCheckIcon, 
  ArrowRightIcon, 
  BoltIcon,

} from "@heroicons/react/24/outline";

// --- IMAGE IMPORTS (UPDATE THESE PATHS TO YOUR REAL IMAGES) ---
import HeroImg from "../../asset/hero/hero2.webp"; // Hero image
import Product1 from "../../asset/hero/hero2.webp"; // ProScent 2000 Image
import Product2 from "../../asset/hero/hero2.webp"; // RetailAir Max Image
import Product3 from "../../asset/hero/hero2.webp"; // OmniScent Image
import FeatureImg from "../../asset/hero/hero2.webp"; // Retail Store/Spa Interior shot

export default function CommercialDiffusersPage() {
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
                Boost Sales & Engagement
              </span>
            </div>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif text-white tracking-tight mb-8 leading-[1.1]">
              Commercial Aroma <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 via-indigo-300 to-white italic">
                Diffusers in UAE
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-slate-400 font-light max-w-4xl mx-auto mb-12">
              Elevate Your Business Ambiance with Professional Scenting.
              <br className="hidden md:block"/>
              <span className="text-lg text-slate-500 block mt-4 leading-relaxed">
                Cool Max provides advanced commercial scenting solutions that turn ordinary business spaces into memorable experiences. Designed for retail stores, spas, gyms, and corporate offices, our commercial aroma diffusers ensure consistent, high-quality fragrance delivery that enhances brand identity and customer satisfaction.
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
                alt="Commercial Aroma Diffuser" 
                className="w-full h-auto object-cover opacity-90 hover:scale-105 transition-transform duration-700" 
              />
            </motion.div>

          </motion.div>
        </section>

        {/* ================= SECTION 1: PRODUCT COLLECTION ================= */}
        <section className="py-24 border-t border-white/5">
          <div className="mb-16 text-center max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-serif text-white mb-6">Our Commercial Scent Diffuser Collection</h2>
            <p className="text-lg text-slate-400">
              Explore our versatile range of aroma machines designed for medium to large business environments.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            
            {/* Product 1: ProScent 2000 */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="group p-8 bg-white/[0.02] border border-white/5 rounded-[2.5rem] hover:border-blue-500/40 hover:bg-white/[0.04] transition-all duration-500"
            >
              <div className="h-72 w-full bg-gradient-to-b from-blue-900/10 to-transparent rounded-3xl mb-8 overflow-hidden flex items-center justify-center border border-white/5">
                <img src={Product1} alt="ProScent 2000" className="h-full w-full object-contain p-6 group-hover:scale-110 transition-transform duration-500" />
              </div>
              <h3 className="text-2xl font-serif text-white mb-2">ProScent 2000</h3>
              <p className="text-blue-400 font-bold text-xs uppercase tracking-widest mb-4">Versatile Retail Diffuser</p>
              <p className="text-slate-400 mb-6 leading-relaxed text-sm">
                A flexible scent machine that can be wall-mounted or placed on a shelf. It delivers powerful fragrance coverage for retail shops and mid-sized spaces.
              </p>
              <div className="bg-black/20 rounded-xl p-4 mb-8">
                <span className="text-xs font-bold text-slate-500 uppercase block mb-1">Best suited for:</span>
                <div className="flex flex-wrap gap-2 text-xs text-slate-300">
                  <span className="flex items-center gap-1"><CheckCircleIcon className="w-3 h-3 text-blue-500"/> Fashion Boutiques</span>
                  <span className="flex items-center gap-1"><CheckCircleIcon className="w-3 h-3 text-blue-500"/> Cafes</span>
                  <span className="flex items-center gap-1"><CheckCircleIcon className="w-3 h-3 text-blue-500"/> Clinics</span>
                </div>
              </div>
              <button className="w-full py-4 rounded-xl border border-white/10 bg-white/5 text-white font-bold hover:bg-blue-600 hover:border-blue-600 transition-all text-sm">
                View product details
              </button>
            </motion.div>

            {/* Product 2: RetailAir Max */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="group p-8 bg-white/[0.02] border border-white/5 rounded-[2.5rem] hover:border-blue-500/40 hover:bg-white/[0.04] transition-all duration-500"
            >
              <div className="h-72 w-full bg-gradient-to-b from-indigo-900/10 to-transparent rounded-3xl mb-8 overflow-hidden flex items-center justify-center border border-white/5">
                <img src={Product2} alt="RetailAir Max" className="h-full w-full object-contain p-6 group-hover:scale-110 transition-transform duration-500" />
              </div>
              <h3 className="text-2xl font-serif text-white mb-2">RetailAir Max</h3>
              <p className="text-blue-400 font-bold text-xs uppercase tracking-widest mb-4">High-Traffic Area System</p>
              <p className="text-slate-400 mb-6 leading-relaxed text-sm">
                Built for busy environments, this durable diffuser maintains consistent scent intensity even during peak hours. Can be connected to HVAC or used standalone.
              </p>
              <div className="bg-black/20 rounded-xl p-4 mb-8">
                <span className="text-xs font-bold text-slate-500 uppercase block mb-1">Best suited for:</span>
                <div className="flex flex-wrap gap-2 text-xs text-slate-300">
                  <span className="flex items-center gap-1"><CheckCircleIcon className="w-3 h-3 text-blue-500"/> Supermarkets</span>
                  <span className="flex items-center gap-1"><CheckCircleIcon className="w-3 h-3 text-blue-500"/> Gyms</span>
                  <span className="flex items-center gap-1"><CheckCircleIcon className="w-3 h-3 text-blue-500"/> Hotel Lobbies</span>
                </div>
              </div>
              <button className="w-full py-4 rounded-xl border border-white/10 bg-white/5 text-white font-bold hover:bg-blue-600 hover:border-blue-600 transition-all text-sm">
                View product details
              </button>
            </motion.div>

            {/* Product 3: OmniScent */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="group p-8 bg-white/[0.02] border border-white/5 rounded-[2.5rem] hover:border-blue-500/40 hover:bg-white/[0.04] transition-all duration-500"
            >
              <div className="h-72 w-full bg-gradient-to-b from-purple-900/10 to-transparent rounded-3xl mb-8 overflow-hidden flex items-center justify-center border border-white/5">
                <img src={Product3} alt="OmniScent" className="h-full w-full object-contain p-6 group-hover:scale-110 transition-transform duration-500" />
              </div>
              <h3 className="text-2xl font-serif text-white mb-2">OmniScent</h3>
              <p className="text-blue-400 font-bold text-xs uppercase tracking-widest mb-4">Smart Business Diffuser</p>
              <p className="text-slate-400 mb-6 leading-relaxed text-sm">
                Featuring advanced programmable timers and app control (optional), this diffuser offers precise scent management for businesses with varying operating hours.
              </p>
              <div className="bg-black/20 rounded-xl p-4 mb-8">
                <span className="text-xs font-bold text-slate-500 uppercase block mb-1">Best suited for:</span>
                <div className="flex flex-wrap gap-2 text-xs text-slate-300">
                  <span className="flex items-center gap-1"><CheckCircleIcon className="w-3 h-3 text-blue-500"/> Corporate Offices</span>
                  <span className="flex items-center gap-1"><CheckCircleIcon className="w-3 h-3 text-blue-500"/> Banks</span>
                  <span className="flex items-center gap-1"><CheckCircleIcon className="w-3 h-3 text-blue-500"/> Spas</span>
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
                <h2 className="text-3xl md:text-4xl font-serif text-white mb-8">Why Invest in Commercial Scenting?</h2>
                <p className="text-slate-400 mb-8 leading-relaxed text-lg">
                  Scent marketing is a powerful tool. In a competitive market, the right aroma can increase dwell time, boost sales, and create a lasting brand connection.
                </p>
                
                <ul className="space-y-6">
                  {[
                    { title: "Enhance Brand Identity", desc: "Create a signature scent that customers recognize instantly." },
                    { title: "Increase Dwell Time", desc: "Customers stay up to 40% longer in pleasantly scented environments." },
                    { title: "Eliminate Odors", desc: "Neutralize unwanted smells from food, sweat, or chemicals." },
                    { title: "Boost Sales Conversion", desc: "Studies show improved willingness to purchase in scented stores." }
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
                className="relative h-[500px] rounded-[2.5rem] border border-white/10 overflow-hidden shadow-2xl shadow-blue-900/20"
              >
                 <img src={FeatureImg} alt="Retail Store Scenting" className="w-full h-full object-cover opacity-80" />
                 <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-transparent to-transparent"></div>
                 <div className="absolute bottom-8 left-8 right-8">
                   <div className="bg-white/10 backdrop-blur-md border border-white/20 p-6 rounded-2xl">
                     <p className="text-white font-serif text-lg">"Customers stay up to 40% longer in pleasantly scented environments."</p>
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
            <h2 className="text-4xl md:text-5xl font-serif text-white mb-6">Industries We Serve</h2>
            <p className="text-slate-400 text-lg">
              Cool Max commercial scent machines are engineered to perform across diverse business sectors in the UAE.
            </p>
          </motion.div>

          <div className="flex flex-wrap justify-center gap-6">
            {[
              { title: "Retail Stores & Showrooms", icon: <BuildingStorefrontIcon className="w-6 h-6"/> },
              { title: "Hotels & Hospitality", icon: <UserGroupIcon className="w-6 h-6"/> },
              { title: "Banks & Corporate Offices", icon: <CurrencyDollarIcon className="w-6 h-6"/> },
              { title: "Spas & Wellness Centers", icon: <SparklesIcon className="w-6 h-6"/> },
              { title: "Gyms & Fitness Clubs", icon: <BoltIcon className="w-6 h-6"/> }
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
          <p className="text-center mt-12 text-slate-400">Transform the perception of your business with the power of scent.</p>
        </section>

        {/* ================= SECTION 4: HOW IT WORKS & CHOOSE ================= */}
        <section className="py-24 grid lg:grid-cols-2 gap-12">
          
          {/* How It Works */}
          <div className="bg-gradient-to-br from-blue-900/10 to-indigo-900/10 rounded-[2.5rem] border border-blue-500/20 p-12">
            <h2 className="text-3xl font-serif text-white mb-8">Cold-Air Diffusion Technology</h2>
            <p className="text-slate-400 mb-8 leading-relaxed">
              Unlike traditional sprays or heated oils, our commercial diffusers use Cold-Air Diffusion (Nebulization). This breaks fragrance oil into dry nanoparticles that float in the air for hours, ensuring consistent coverage without residue.
            </p>
            <h4 className="text-blue-300 font-bold uppercase tracking-widest text-sm mb-6">Key advantages:</h4>
            <ul className="space-y-4">
              {[
                "No residue on furniture or clothes", 
                "Preserves the integrity of the aroma oil", 
                "Programmable intensity & scheduling", 
                "Covers large areas efficiently"
              ].map((tech, i) => (
                <li key={i} className="flex items-center gap-4 text-blue-100 font-medium">
                  <div className="w-8 h-8 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-400">
                    <BoltIcon className="w-4 h-4" />
                  </div>
                  {tech}
                </li>
              ))}
            </ul>
          </div>

          {/* How to Choose */}
          <div className="bg-white/[0.03] rounded-[2.5rem] border border-white/10 p-12">
            <h2 className="text-3xl font-serif text-white mb-8">How to Choose the Right Commercial Diffuser</h2>
            <p className="text-slate-400 mb-8">Selecting the right unit depends on your business layout and goals:</p>
            <ul className="space-y-6">
              {[
                { label: "Coverage Area", desc: "Ensure the machine capacity matches your square footage." },
                { label: "Placement", desc: "Wall-mounted for corridors, standalone for lobbies, HVAC for multi-room." },
                { label: "Operating Hours", desc: "Look for programmable timers to match your business hours." },
                { label: "Scent Strategy", desc: "Stronger for gyms/odors, subtle for offices/luxury retail." }
              ].map((item, i) => (
                <li key={i} className="pb-4 border-b border-white/5 last:border-0">
                  <span className="block text-blue-400 font-bold mb-1">{item.label}</span>
                  <span className="text-slate-400 text-sm">{item.desc}</span>
                </li>
              ))}
            </ul>
            <p className="mt-4 text-white font-medium">Our consultants can provide a free site assessment.</p>
          </div>
        </section>

        {/* ================= SECTION 6: WHY CHOOSE COOL MAX ================= */}
        <section className="py-24">
          <div className="bg-gradient-to-r from-[#0B0F19] to-black rounded-[3rem] p-10 md:p-20 border border-white/10 text-center relative overflow-hidden">
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10 mix-blend-overlay" />

            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl font-serif text-white mb-8">Why Partner with Cool Max?</h2>
              <p className="text-slate-400 mb-12 max-w-2xl mx-auto">
                We don't just sell machines; we provide complete scent marketing strategies tailored to the UAE market.
              </p>
              
              <div className="flex flex-wrap justify-center gap-4 mb-16">
                {[
                  "Premium Fragrance Library", 
                  "24/7 Technical Support", 
                  "Custom Branding Options", 
                  "Flexible Monthly Plans", 
                  "Proven Track Record"
                ].map((reason, i) => (
                  <span key={i} className="px-6 py-3 rounded-full bg-blue-900/20 text-blue-200 text-sm border border-blue-500/20 flex items-center gap-2 backdrop-blur-sm">
                    <ShieldCheckIcon className="w-4 h-4"/> {reason}
                  </span>
                ))}
              </div>
              <p className="text-lg font-serif italic text-slate-300">Experience the difference of a professionally scented business.</p>
            </div>
          </div>
        </section>

        {/* ================= SECTION 7: RELATED SOLUTIONS ================= */}
        <section className="py-24 border-t border-white/5">
          <div className="max-w-7xl mx-auto px-6 lg:px-12 text-center">
            <h2 className="text-2xl md:text-3xl font-serif text-white mb-10">Related Scenting Solutions</h2>
            <p className="text-slate-400 mb-8">You may also be interested in:</p>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                "Large Area & HVAC Aroma Diffusers",
                "Scent Marketing Strategy",
                "Maintenance & Refill Support"
              ].map((item, i) => (
                <a key={i} href="/contact" className="group flex items-center justify-between p-6 bg-white/[0.03] rounded-xl border border-white/10 hover:border-blue-500 transition-colors">
                  <span className="font-bold text-slate-300 group-hover:text-blue-400 transition-colors">{item}</span>
                  <ArrowRightIcon className="w-5 h-5 text-slate-500 group-hover:text-blue-500 transition-colors" />
                </a>
              ))}
            </div>
            <p className="mt-8 text-sm text-slate-500">We offer comprehensive solutions for every business size.</p>
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
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-white mb-8 leading-tight">Ready to Upgrade Your <br/> <span className="italic text-blue-400">Business Atmosphere?</span></h2>
            <p className="text-xl text-slate-400 mb-10 leading-relaxed font-light">
              Whether you run a boutique, a gym, or a corporate office, Cool Max offers professional commercial aroma diffusers that deliver results.
              Let our experts design the perfect scent strategy for you.
            </p>
            
            <p className="text-blue-300 font-bold mb-12 uppercase tracking-[0.2em] text-sm">
              Looking for commercial scenting in UAE?
            </p>
            
            <a href="/contact" className="inline-flex items-center gap-3 px-12 py-6 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-bold text-lg rounded-full shadow-[0_0_50px_-10px_rgba(37,99,235,0.6)] hover:scale-105 transition-all">
              Request a Free Quote <HandThumbUpIcon className="w-6 h-6" />
            </a>
          </motion.div>
        </section>

      </div>
    </div>
  );
}