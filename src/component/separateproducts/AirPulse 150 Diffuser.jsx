import React, { useState, useEffect } from "react"; // Added useEffect here
import { motion } from "framer-motion";

import { 
  BoltIcon, 
  ArrowRightIcon,
  CheckCircleIcon,
  WrenchScrewdriverIcon,
  BeakerIcon,
  BuildingOfficeIcon,
  ShieldCheckIcon,
  GlobeAltIcon,
  CubeIcon,
  Squares2X2Icon,
  ChatBubbleLeftRightIcon
} from "@heroicons/react/24/outline";

/* ================= IMAGE ASSETS MAPPED TO VS-160 ================= */
import AirPulse1501 from "../../asset/productimg/CMwebpimg/AirPulse 150/1.webp";
import AirPulse1502 from "../../asset/productimg/CMwebpimg/AirPulse 150/2.webp";
import AirPulse1503 from "../../asset/productimg/CMwebpimg/AirPulse 150/3.webp";
import AirPulse1504 from "../../asset/productimg/CMwebpimg/AirPulse 150/4.webp";

const AirPulse150Page = () => {
  const [activeImg, setActiveImg] = useState(AirPulse1501);
  const gallery = [AirPulse1501, AirPulse1502, AirPulse1503, AirPulse1504];

  // --- SEO Implementation ---
  useEffect(() => {
    document.title = "High Capacity HVAC Aroma Diffuser | AirPulse 150";
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute("content", "High capacity HVAC aroma diffuser for mega commercial spaces. Covers 5,000–15,000 m³ with industrial performance, dual atomization, and precise scent control.");
    }
    
    // Canonical link handling
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', 'https://www.coolmaxscent.com/large-area-and-hvac-aroma-diffusers/air-pulse-150-diffuser/');
  }, []);

  // Redirection Links
  const whatsappNumber = "+971509282702";
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=Hello%20Cool%20Max%20Scent,%20I%20am%20interested%20in%20the%20AirPulse%20150%20Diffuser.`;
  const contactPath = "/contact/";

  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  return (
    <div className="bg-[#FAF9F6] text-slate-900 font-sans selection:bg-blue-100 overflow-hidden text-left">

      {/* ================= HERO SECTION (OPTIMIZED HEIGHT) ================= */}
      <section className="relative pt-24 pb-12 px-6 lg:px-12 max-w-[1600px] mx-auto text-left">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <motion.div {...fadeIn}>
            <div className="inline-block px-4 py-1 rounded-full bg-blue-50 border border-blue-100 text-blue-600 text-[10px] font-black uppercase tracking-[0.2em] mb-6 text-left">
              Mega-Scale HVAC System
            </div>
            <h1 className="text-4xl md:text-6xl font-serif mb-4 leading-tight text-slate-900 text-left">
              AirPulse 150 Diffuser
            </h1>
            <p className="text-lg text-slate-600 font-medium mb-6 leading-relaxed text-left">
              Ultra-High Capacity HVAC Aroma Diffuser for Mega Commercial Spaces
            </p>
            <p className="text-sm text-slate-500 mb-4 leading-relaxed font-light text-left">
              The AirPulse 150 is a heavy-duty large area & HVAC aroma diffuser designed for extremely large commercial environments where standard scent machines are not sufficient. Built to handle 5,000 to 15,000 cubic meters, this system is ideal for locations that require powerful, precise, and uninterrupted fragrance diffusion across multiple zones.
            </p>
            <p className="text-sm text-slate-500 mb-8 leading-relaxed border-l-4 border-blue-600 pl-6 italic font-light text-justify md:text-left text-left">
              With dual atomization technology, industrial-grade components, and full HVAC integration, AirPulse 150 is a premium scent air machine engineered for airports, high-end malls, large office buildings, cinemas, and entertainment venues.
            </p>
            <div className="flex flex-wrap gap-4 mt-6 text-left">
              <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="px-6 py-3 bg-slate-900 text-white rounded-xl font-bold text-[10px] uppercase tracking-widest hover:bg-blue-600 transition-all flex items-center gap-3 shadow-lg">
                Talk to Scent Specialists <ChatBubbleLeftRightIcon className="w-4 h-4" />
              </a>
              <a href={contactPath} className="px-6 py-3 border border-slate-200 text-slate-900 rounded-xl font-bold text-[10px] uppercase tracking-widest hover:bg-white transition-all flex items-center gap-2 font-sans">
                Get Quote <ArrowRightIcon className="w-3 h-3" />
              </a>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="relative text-left">
            <div className="aspect-[4/3] bg-white rounded-[2.5rem] border border-slate-100 shadow-xl flex items-center justify-center p-8 overflow-hidden text-left">
              <img src={activeImg} alt="AirPulse 150 Diffuser" className="w-full h-full object-contain transition-all duration-700 hover:scale-110" />
            </div>
            <div className="flex gap-3 mt-4 justify-center">
              {gallery.map((img, i) => (
                <button key={i} onClick={() => setActiveImg(img)} className={`w-14 h-14 rounded-lg border-2 overflow-hidden transition-all ${activeImg === img ? "border-blue-600 shadow-md" : "border-transparent opacity-60 hover:opacity-100"}`}>
                  <img src={img} className="w-full h-full object-cover" alt="variant-thumb" />
                </button>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ================= SECTION 1: PRODUCT OVERVIEW ================= */}
      <section className="py-16 bg-white px-6 text-left">
        <div className="max-w-[1000px] mx-auto text-center">
          <motion.div {...fadeIn}>
            <h2 className="text-2xl md:text-4xl font-serif mb-6 tracking-tight text-slate-900 text-center">Product Overview</h2>
            <p className="text-base text-slate-600 leading-relaxed max-w-4xl mx-auto font-light text-justify md:text-center text-center">
              AirPulse 150 is developed for enterprise-level scenting requirements. Unlike compact commercial scent machines, this system is built to deliver stable and consistent fragrance output across very large interiors without scent fluctuation or oil degradation.
              Its modular design allows the diffuser to operate through direct HVAC connection, ensuring fragrance is evenly distributed via central air systems. With high-capacity oil support and long-life compressors, AirPulse 150 offers reliability, performance, and control for demanding environments.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ================= SECTION 2: KEY HIGHLIGHTS ================= */}
      <section className="py-16 bg-[#0c101b] text-white px-6 text-left">
        <div className="max-w-[1400px] mx-auto text-center">
          <h2 className="text-2xl md:text-4xl font-serif mb-12 tracking-tight text-center">Key Highlights</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 text-center">
            {[
              { icon: GlobeAltIcon, text: "Ultra-large area aroma scent diffuser" },
              { icon: BeakerIcon, text: "Covers 5,000 – 15,000 m³" },
              { icon: Squares2X2Icon, text: "Dual atomizer & compressor system" },
              { icon: WrenchScrewdriverIcon, text: "HVAC scent diffuser compatible" },
              { icon: BoltIcon, text: "Industrial-grade continuous operation" },
              { icon: CubeIcon, text: "High-capacity fragrance support" },
              { icon: BuildingOfficeIcon, text: "Designed for multi-zone commercial spaces" }
            ].map((item, i) => (
              <div key={i} className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors text-center">
                <item.icon className="w-8 h-8 text-blue-500 mx-auto mb-4" />
                <p className="text-[11px] font-bold uppercase tracking-widest leading-relaxed text-center">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= SECTION 3: ADVANCED FEATURES ================= */}
      <section className="py-16 px-6 lg:px-12 max-w-[1400px] mx-auto text-left">
        <h2 className="text-2xl md:text-4xl font-serif mb-16 text-center tracking-tight text-slate-900 text-center">Advanced Features & Performance</h2>
        <div className="grid gap-16 text-left">
          <div className="grid md:grid-cols-2 gap-10 items-center text-left">
            <div className="order-2 md:order-1 text-left">
              <h3 className="text-xl font-serif mb-4 text-slate-900 text-left">Extreme Coverage for Large Spaces</h3>
              <p className="text-sm text-slate-500 leading-relaxed mb-4 font-light text-left text-justify">
                AirPulse 150 is designed for very large commercial areas where standard scent machines cannot perform effectively. Its dual-atomizer configuration ensures wide and balanced fragrance dispersion even in complex layouts.
              </p>
              <p className="text-xs text-blue-600 font-bold italic border-l-2 border-blue-600 pl-4 text-left">
                Reliable for business environments with open spaces, multiple floors, or centralized air systems.
              </p>
            </div>
            <div className="rounded-3xl bg-slate-100 p-6 order-1 md:order-2 h-64 flex items-center justify-center text-left">
               <img src={AirPulse1502} alt="Dual Atomization" className="w-full h-full object-contain" />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-10 items-center text-left">
            <div className="rounded-3xl bg-slate-100 p-6 h-64 flex items-center justify-center order-1 text-left">
               <img src={AirPulse1503} alt="Dual Compressor System" className="w-full h-full object-contain" />
            </div>
            <div className="order-2 text-left">
              <h3 className="text-xl font-serif mb-4 text-slate-900 text-left">Dual Atomization & Compressor Technology</h3>
              <p className="text-sm text-slate-500 mb-4 font-light text-left">The system features dual atomizers, independent compressors, and separate control panels allowing:</p>
              <div className="grid grid-cols-2 gap-3 text-left">
                {["Stable output", "Accurate control", "Reduced wastage", "Long life"].map((li, i) => (
                  <div key={i} className="flex items-center gap-2 text-left p-3 bg-white border border-slate-100 rounded-xl shadow-sm">
                    <CheckCircleIcon className="w-4 h-4 text-blue-600 shrink-0" />
                    <span className="text-slate-700 text-[10px] font-black uppercase text-left">{li}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6 text-left">
            <div className="bg-slate-900 text-white p-8 rounded-[2rem] col-span-2 shadow-xl text-left">
              <h3 className="text-xl font-serif mb-4 text-blue-400 text-left">Full HVAC System Integration</h3>
              <p className="text-sm text-slate-300 leading-relaxed mb-6 font-light text-left">Fragrance travels naturally through airflow, ensuring uniform coverage without localized overpowering.</p>
              <div className="grid grid-cols-3 gap-2 text-left">
                 {["Uniform coverage", "No localization", "Efficiency"].map((item, i) => (
                    <div key={i} className="p-2 bg-white/5 rounded-lg text-[9px] font-black uppercase text-center border border-white/10">{item}</div>
                 ))}
              </div>
            </div>
            <div className="bg-white border border-slate-100 p-8 rounded-[2rem] shadow-sm flex flex-col justify-center text-left">
              <ShieldCheckIcon className="w-10 h-10 text-blue-600 mb-4 text-left" />
              <h3 className="text-lg font-serif mb-2 text-slate-900 text-left">Industrial Build</h3>
              <p className="text-slate-500 text-xs font-light text-left">Long-life compressor for continuous commercial operation.</p>
            </div>
          </div>

          <div className="p-10 bg-blue-600 rounded-[2.5rem] text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl shadow-blue-100 text-left">
             <div className="max-w-xl text-left">
               <h3 className="text-xl font-serif mb-3 text-left">5L Large Oil Capacity</h3>
               <p className="text-blue-100 text-xs font-light leading-relaxed text-left">Supports standard 500 ml × 2 or optional 5-liter external containers to reduce refill frequency.</p>
             </div>
             <div className="bg-white/10 p-6 rounded-2xl border border-white/20 text-center">
                <span className="text-4xl font-black italic">5L</span>
                <p className="text-[8px] font-black uppercase mt-1">Optional External</p>
             </div>
          </div>
        </div>
      </section>

      {/* ================= SECTION 4: TECHNICAL SPECIFICATIONS ================= */}
      <section className="py-16 bg-slate-50 px-6 text-left">
        <div className="max-w-[800px] mx-auto text-left">
          <h2 className="text-2xl md:text-4xl font-serif mb-10 text-center tracking-tight text-slate-900 text-center">Technical Specifications</h2>
          <div className="bg-white rounded-[2rem] overflow-hidden border border-slate-200 shadow-sm text-left">
            <table className="w-full text-left border-collapse text-left">
              <thead>
                <tr className="bg-slate-900 text-white text-left">
                  <th className="p-4 font-bold uppercase tracking-widest text-[10px] text-left">Specification</th>
                  <th className="p-4 font-bold uppercase tracking-widest text-[10px] text-left">Details</th>
                </tr>
              </thead>
              <tbody className="text-xs text-left">
                {[
                  ["Product Type", "Large Area & HVAC Aroma Diffuser"],
                  ["Coverage Area", "5,000 – 15,000 m³"],
                  ["Fragrance Capacity", "500 ml × 2 (optional 5L support)"],
                  ["Voltage / Power", "DC 12V / 16W"],
                  ["Oil Consumption", "Approx. 5 ml/hr"],
                  ["Control System", "Independent control panels"],
                  ["Installation", "HVAC system connection"],
                  ["Color", "Black"]
                ].map((row, i) => (
                  <tr key={i} className="border-b border-slate-100 hover:bg-slate-50 transition-colors text-left">
                    <td className="p-4 font-bold text-slate-400 uppercase tracking-widest text-[9px] text-left">{row[0]}</td>
                    <td className="p-4 text-slate-700 font-medium text-left">{row[1]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ================= SECTION 5: APPLICATIONS ================= */}
      <section className="py-16 px-6 lg:px-12 max-w-[1400px] mx-auto text-center text-left">
        <h2 className="text-2xl md:text-4xl font-serif mb-10 tracking-tight text-slate-900 text-center">Recommended Applications</h2>
        <div className="flex flex-wrap justify-center gap-3 text-center">
          {[
            "International airports", "High-end shopping malls", 
            "Large office buildings", "Cinemas & theatres", 
            "Convention centers", "Entertainment clubs"
          ].map((item, i) => (
            <span key={i} className="px-6 py-3 bg-white border border-slate-100 rounded-xl shadow-sm text-[10px] font-bold text-slate-700 uppercase tracking-widest">
              {item}
            </span>
          ))}
        </div>
      </section>

      {/* ================= SECTION 6: HOW IT WORKS ================= */}
      <section className="py-16 bg-slate-900 text-white px-6 text-left">
        <div className="max-w-[1200px] mx-auto grid lg:grid-cols-2 gap-12 items-center text-left">
          <div className="text-left">
            <h2 className="text-2xl md:text-4xl font-serif mb-6 leading-tight tracking-tight text-blue-400 text-left">How AirPulse 150 Works</h2>
            <p className="text-slate-400 text-sm leading-relaxed mb-6 font-light text-left">
              AirPulse 150 uses cold-air atomization, converting fragrance oil into micro-particles without heat or water, ensuring purity and longevity.
            </p>
            <div className="flex gap-4 text-left">
               {["Consistent", "Natural", "Residue-Free"].map((val, idx) => (
                 <div key={idx} className="p-3 bg-white/5 rounded-xl text-[9px] font-black uppercase text-blue-400 border border-white/10 text-center">{val}</div>
               ))}
            </div>
          </div>
          <div className="bg-blue-600/10 p-10 rounded-[2rem] border border-blue-500/20 text-center backdrop-blur-sm text-left">
             <BeakerIcon className="w-12 h-12 text-blue-500 mb-6 mx-auto text-center" />
             <h4 className="text-lg font-serif mb-4 text-center">Dual Cold-Air Atomization</h4>
             <img src={AirPulse1504} alt="Internal Mechanism" className="w-full h-40 object-contain rounded-xl opacity-80" />
          </div>
        </div>
      </section>

      {/* ================= SECTION 7: WHY CHOOSE ================= */}
      <section className="py-16 px-6 lg:px-12 max-w-[1400px] mx-auto text-left">
        <h2 className="text-2xl md:text-4xl font-serif mb-12 text-center tracking-tight text-slate-900 text-center">Why Choose AirPulse 150?</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 text-left">
          {[
            "Designed for mega-scale scenting projects",
            "Handles extreme coverage requirements",
            "Dual atomizer system for reliability",
            "HVAC-ready architecture",
            "Reduced maintenance with large oil capacity",
            "Trusted commercial-grade performance"
          ].map((text, i) => (
            <div key={i} className="p-8 bg-white border border-slate-100 rounded-2xl shadow-sm hover:border-blue-200 transition-colors text-left">
              <CheckCircleIcon className="w-6 h-6 text-blue-600 mb-4 text-left" />
              <p className="text-slate-700 text-sm font-medium leading-relaxed text-left">{text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ================= SECTION 8: MAINTENANCE & SUPPORT ================= */}
      <section className="py-16 bg-slate-50 px-6 text-left">
        <div className="max-w-[1000px] mx-auto grid lg:grid-cols-2 gap-6 text-left">
          <div className="p-8 bg-white rounded-3xl shadow-sm border border-slate-100 text-left">
            <h4 className="text-lg font-bold mb-4 flex items-center gap-3 text-slate-900 text-left">Maintenance</h4>
            <ul className="space-y-2 text-xs text-slate-500 font-light text-left">
               <li className="text-left">• Easy oil replacement</li>
               <li className="text-left">• Stable internal components</li>
               <li className="text-left">• Minimal routine servicing</li>
            </ul>
          </div>
          <div className="p-8 bg-blue-600 text-white rounded-3xl shadow-xl text-left">
            <h4 className="text-lg font-bold mb-4 flex items-center gap-3 text-white text-left">Cool Max Support</h4>
            <ul className="space-y-2 text-xs text-blue-50 font-light text-left">
               <li className="text-left">• System & Installation planning</li>
               <li className="text-left">• Maintenance & refill services</li>
               <li className="text-left">• Long-term technical assistance</li>
            </ul>
          </div>
        </div>
      </section>

      {/* ================= CTA SECTION ================= */}
      <section className="py-20 px-6 text-left">
        <div className="max-w-[1200px] mx-auto bg-[#0c101b] rounded-[3rem] p-10 md:p-16 text-center text-white relative overflow-hidden shadow-2xl text-left">
          <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-blue-600/20 blur-[100px] rounded-full text-left" />
          <h2 className="text-3xl md:text-5xl font-serif mb-6 relative z-10 text-white text-center">Talk to Our Scent Experts</h2>
          <p className="text-slate-400 text-lg mb-10 relative z-10 max-w-2xl mx-auto leading-relaxed font-light text-center">
            Looking for a high-capacity HVAC scent diffuser for your large facility? Our experts will help you plan the right solution.
          </p>
          <div className="flex flex-wrap justify-center gap-4 relative z-10 font-sans text-left">
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="px-10 py-4 bg-white text-slate-900 rounded-xl font-black uppercase tracking-widest text-[10px] hover:bg-blue-600 hover:text-white transition-all shadow-xl flex items-center gap-2 text-left">
               <ChatBubbleLeftRightIcon className="w-5 h-5 text-left" /> WhatsApp Support
            </a>
            <a href={contactPath} className="px-10 py-4 bg-white/5 text-white rounded-xl font-black uppercase tracking-widest text-[10px] hover:bg-white/10 border border-white/10 transition-all flex items-center gap-2 text-left">
              Contact Cool Max <ArrowRightIcon className="w-4 h-4 text-left" />
            </a>
          </div>
        </div>
      </section>

    </div>
  );
};

export default AirPulse150Page;