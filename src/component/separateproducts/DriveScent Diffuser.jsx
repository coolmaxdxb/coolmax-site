import React, { useState, useEffect } from "react"; // Added useEffect here
import { motion } from "framer-motion";

import { 
  SpeakerXMarkIcon, 
  ArrowRightIcon,
  CheckCircleIcon,
  WrenchScrewdriverIcon,
  BeakerIcon,
  Battery100Icon,
  ShieldCheckIcon,
  HomeIcon,
  TruckIcon,
  CommandLineIcon,
  ArrowsRightLeftIcon,
  ChatBubbleLeftRightIcon
} from "@heroicons/react/24/outline";

/* ================= IMAGE ASSETS MAPPED TO H11-A-2026 ================= */
import DriveScent1 from "../../asset/productimg/CMwebpimg/DriveScent/1.webp";
import DriveScent2 from "../../asset/productimg/CMwebpimg/DriveScent/2.webp";
import DriveScent3 from "../../asset/productimg/CMwebpimg/DriveScent/3.webp";
import DriveScent4 from "../../asset/productimg/CMwebpimg/DriveScent/4.webp";

const DriveScentPage = () => {
  const gallery = [DriveScent1, DriveScent2, DriveScent3, DriveScent4];
  const [activeImg, setActiveImg] = useState(gallery[0]);

  // --- SEO Implementation ---
  useEffect(() => {
    document.title = "Car Aroma Diffuser – DriveScent Diffuser | Cool Max";
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute("content", "DriveScent Diffuser is a premium car aroma diffuser with rechargeable battery, quiet operation and smart fragrance control for cars and desks.");
    }
    
    // Canonical link handling
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', 'https://www.coolmaxscent.com/car-aroma-diffusers/drive-scent-diffuser/');
  }, []);

  // Redirection Links
  const whatsappNumber = "+971509282702";
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=Hello%20Cool%20Max%20Scent,%20I%20am%20interested%20in%20the%20DriveScent%20Diffuser.`;
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
        <div className="grid lg:grid-cols-2 gap-10 items-center text-left">
          <motion.div {...fadeIn} className="text-left">
            <div className="inline-block px-4 py-1 rounded-full bg-blue-50 border border-blue-100 text-blue-600 text-[10px] font-black uppercase tracking-[0.2em] mb-6 text-left">
              Personal Space & Automotive Series
            </div>
            <h1 className="text-4xl md:text-6xl font-serif mb-4 leading-tight text-slate-900 text-left">
              DriveScent Diffuser
            </h1>
            <p className="text-lg text-slate-600 font-medium mb-6 leading-relaxed text-left">
              Smart Car & Desktop Aroma Diffuser for Personal Spaces
            </p>
            <p className="text-sm text-slate-500 mb-8 leading-relaxed font-light text-justify md:text-left text-left">
              The DriveScent Diffuser is a compact car aroma diffuser designed for drivers and personal-space users who want a clean, consistent fragrance experience without distraction. Built with an aviation-grade aluminum body and intelligent diffusion control, DriveScent Diffuser delivers reliable scent performance in a small, stylish form.
            </p>
            <div className="flex flex-wrap gap-4 mt-6 text-left">
              <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="px-6 py-3 bg-slate-900 text-white rounded-xl font-bold text-[10px] uppercase tracking-widest hover:bg-blue-600 transition-all flex items-center gap-3 shadow-lg font-sans text-left">
                Talk to Scent Expert <ChatBubbleLeftRightIcon className="w-4 h-4" />
              </a>
              <a href={contactPath} className="px-6 py-3 border border-slate-200 text-slate-900 rounded-xl font-bold text-[10px] uppercase tracking-widest hover:bg-white transition-all flex items-center gap-2 font-sans text-left">
                Contact Cool Max <ArrowRightIcon className="w-3 h-3" />
              </a>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="relative text-left">
            <div className="aspect-[4/3] bg-white rounded-[2.5rem] border border-slate-100 shadow-xl flex items-center justify-center p-8 overflow-hidden text-left">
              <img src={activeImg} alt="DriveScent Diffuser" className="w-full h-full object-contain transition-all duration-700 hover:scale-110" />
            </div>
            <div className="flex gap-3 mt-4 justify-center text-left">
              {gallery.map((img, i) => (
                <button key={i} onClick={() => setActiveImg(img)} className={`w-14 h-14 rounded-lg border-2 overflow-hidden transition-all ${activeImg === img ? "border-blue-600 shadow-md" : "border-transparent opacity-60 hover:opacity-100"}`}>
                  <img src={img} className="w-full h-full object-cover" alt="DriveScent variant thumb" />
                </button>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ================= SECTION 1: PRODUCT OVERVIEW ================= */}
      <section className="py-16 bg-white px-6 text-left">
        <div className="max-w-[1000px] mx-auto text-center text-left">
          <motion.div {...fadeIn} className="text-center">
            <h2 className="text-2xl md:text-4xl font-serif mb-6 tracking-tight text-slate-900 text-center">Product Overview</h2>
            <p className="text-base text-slate-600 leading-relaxed max-w-4xl mx-auto font-light text-justify md:text-center text-center">
              DriveScent Diffuser is designed for personal scenting, where space is limited but performance still matters. Its compact cylindrical body fits neatly into car cup holders or desktop setups while delivering efficient aroma diffusion without overpowering the space. 
              With intelligent timed diffusion, a built-in lithium battery, and leak-proof construction, DriveScent Diffuser is ideal for daily use—whether you’re commuting, working, or relaxing.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ================= SECTION 2: KEY HIGHLIGHTS ================= */}
      <section className="py-16 bg-[#0c101b] text-white px-6 text-left">
        <div className="max-w-[1400px] mx-auto text-center text-left">
          <h2 className="text-2xl md:text-4xl font-serif mb-12 tracking-tight text-center">Key Highlights</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 text-left">
            {[
              { icon: TruckIcon, text: "Compact car aroma diffuser for vehicles and desktops" },
              { icon: ShieldCheckIcon, text: "Aviation-grade aluminum metal body" },
              { icon: Battery100Icon, text: "Built-in rechargeable lithium battery" },
              { icon: CommandLineIcon, text: "Intelligent four-gear fragrance control" },
              { icon: SpeakerXMarkIcon, text: "Quiet operation with low noise output" },
              { icon: ShieldCheckIcon, text: "Leak-proof and durable design" },
              { icon: HomeIcon, text: "Suitable for cars and small indoor spaces" }
            ].map((item, i) => (
              <div key={i} className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors text-center">
                <item.icon className="w-8 h-8 text-blue-500 mx-auto mb-4" />
                <p className="text-[11px] font-bold uppercase tracking-widest leading-relaxed text-center">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= SECTION 3: DESIGN & BUILD QUALITY ================= */}
      <section className="py-16 px-6 lg:px-12 max-w-[1400px] mx-auto text-left">
        <h2 className="text-2xl md:text-4xl font-serif mb-12 text-center tracking-tight text-slate-900 text-center">Design & Build Quality</h2>
        
        <div className="grid gap-16 text-left">
          <div className="grid md:grid-cols-2 gap-10 items-center text-left">
            <div className="order-2 md:order-1 text-left">
              <h3 className="text-xl font-serif mb-4 text-slate-900 text-left">Premium Aluminum Body</h3>
              <p className="text-sm text-slate-500 leading-relaxed mb-6 font-light text-justify md:text-left text-left">
                DriveScent Diffuser features an aviation aluminum metal body with a sandblasting finish. This improves surface texture while making the diffuser more resistant to wear, scratches, and daily handling. 
                The refined metallic finish gives it a premium look that complements modern car interiors and clean desktop setups.
              </p>
              <h3 className="text-xl font-serif mb-4 text-slate-900 text-left">Compact & Minimal Form</h3>
              <div className="grid grid-cols-2 gap-2 text-left">
                {["Car cup holders", "Office desks", "Home workstations", "Small shelves"].map((li, i) => (
                  <div key={i} className="flex items-center gap-2 text-xs text-slate-600 font-medium p-2 bg-white rounded-lg border border-slate-100 shadow-sm text-left">
                    <CheckCircleIcon className="w-4 h-4 text-blue-600 shrink-0" /> {li}
                  </div>
                ))}
              </div>
            </div>
            <div className="rounded-3xl bg-slate-100 p-6 order-1 md:order-2 h-64 flex items-center justify-center border border-slate-200 shadow-inner text-left">
               <img src={DriveScent2} alt="DriveScent Design" className="w-full h-full object-contain" />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-10 items-center text-left">
            <div className="rounded-3xl bg-slate-100 p-6 h-64 flex items-center justify-center border border-slate-200 shadow-inner text-left">
               <img src={DriveScent3} alt="Battery and Power" className="w-full h-full object-contain" />
            </div>
            <div className="text-left">
              <h3 className="text-xl font-serif mb-4 text-slate-900 text-left">Battery & Power Performance</h3>
              <div className="bg-slate-900 text-white p-6 rounded-2xl mb-6 shadow-xl text-left">
                <h4 className="text-lg font-serif mb-3 text-blue-400 flex items-center gap-3 text-left">
                  <Battery100Icon className="w-6 h-6"/> 2000mAh Battery
                </h4>
                <p className="text-slate-300 text-xs font-light leading-relaxed mb-4 text-left">Allows cordless operation for extended periods with rapid USB charging support.</p>
                <div className="grid grid-cols-2 gap-3 text-[9px] font-black uppercase tracking-widest text-center text-left">
                  <div className="bg-white/5 p-2 rounded-lg border border-white/10 text-center">3.5h Charging</div>
                  <div className="bg-white/5 p-2 rounded-lg border border-white/10 text-center">12h+ Operation</div>
                </div>
              </div>
              
              <div className="p-4 bg-blue-50 rounded-xl border border-blue-100 shadow-sm text-left">
                <h4 className="font-bold text-blue-900 text-[10px] uppercase tracking-widest mb-3 text-center text-left">Timed Spray Cycle</h4>
                <div className="flex items-center gap-4 text-blue-800 text-left">
                  <div className="flex-1 p-2 bg-white rounded-lg text-center font-black text-xs border border-blue-100">15s ON</div>
                  <ArrowsRightLeftIcon className="w-4 h-4 opacity-30 text-center"/>
                  <div className="flex-1 p-2 bg-white rounded-lg text-center font-black text-xs border border-blue-100">200s OFF</div>
                </div>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6 text-left">
            <div className="bg-white border border-slate-100 p-8 rounded-[2rem] shadow-sm hover:shadow-md transition-shadow text-left">
              <SpeakerXMarkIcon className="w-8 h-8 text-blue-600 mb-4 text-left" />
              <h3 className="text-lg font-serif mb-2 text-slate-900 text-left">Quiet Operation</h3>
              <p className="text-slate-500 text-xs leading-relaxed font-light text-left">With a noise level of ≤40 dB, DriveScent works quietly in the background, ensuring no distraction while driving or working.</p>
            </div>
            <div className="bg-blue-600 text-white p-8 rounded-[2rem] shadow-xl hover:bg-blue-700 transition-colors text-left">
              <ShieldCheckIcon className="w-8 h-8 text-white mb-4 text-left" />
              <h3 className="text-lg font-serif mb-2 text-white text-left">Leak-Proof Structure</h3>
              <p className="text-blue-100 text-xs leading-relaxed font-light text-left">Ensures safe usage even on uneven roads. Durable aviation-grade housing protects all internal components.</p>
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
                  ["Product Type", "Car / Desktop Aroma Diffuser"],
                  ["Fragrance Capacity", "20 ml"],
                  ["Voltage / Power", "DC 5V / 2W"],
                  ["Battery Capacity", "2000 mAh"],
                  ["Working Cycle", "15s ON / 200s OFF"],
                  ["Coverage Area", "Up to 100 m³"],
                  ["Noise Level", "≤40 dB"],
                  ["Dimensions", "Ø70 × H139 mm"],
                  ["Material", "Aviation aluminum"]
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

      {/* ================= SECTION: APPLICATIONS & HOW IT WORKS ================= */}
      <section className="py-16 px-6 lg:px-12 max-w-[1400px] mx-auto text-center text-left">
        <h2 className="text-2xl md:text-4xl font-serif mb-12 tracking-tight text-slate-900 text-center">Ideal Applications</h2>
        <div className="flex flex-wrap justify-center gap-3 mb-20 text-center">
          {["Cars & vehicles", "Office desks", "Study rooms", "Compact spaces"].map((item, i) => (
            <span key={i} className="px-6 py-3 bg-white border border-slate-100 rounded-xl shadow-sm text-[10px] font-bold text-slate-700 uppercase tracking-widest text-center">
              {item}
            </span>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-10 items-center text-left bg-slate-900 rounded-[3rem] p-8 md:p-16 text-white shadow-2xl overflow-hidden relative text-left">
          <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/10 blur-[80px] text-left" />
          <div className="relative z-10 text-left">
            <h2 className="text-2xl md:text-4xl font-serif mb-6 tracking-tight text-left">How DriveScent Works</h2>
            <p className="text-slate-400 text-sm leading-relaxed mb-6 font-light text-left text-justify">
              DriveScent Diffuser uses fine atomization to convert fragrance oil into micro-sized particles, allowing the scent to disperse evenly in small spaces.
            </p>
            <div className="space-y-3 text-[10px] font-black uppercase tracking-widest text-blue-400 text-left">
               <p className="flex items-center gap-2 text-left"><CheckCircleIcon className="w-4 h-4"/> Preserves fragrance quality</p>
               <p className="flex items-center gap-2 text-left"><CheckCircleIcon className="w-4 h-4"/> Prevents residue buildup</p>
               <p className="flex items-center gap-2 text-left"><CheckCircleIcon className="w-4 h-4"/> Consistent scent intensity</p>
            </div>
          </div>
          <div className="bg-white/5 p-8 rounded-[2rem] border border-white/10 flex flex-col items-center relative z-10 backdrop-blur-sm text-left">
             <BeakerIcon className="w-10 h-10 text-blue-500 mb-6 text-left" />
             <img src={DriveScent4} alt="Fine Atomization Technology" className="w-full h-40 object-contain rounded-xl opacity-80" />
          </div>
        </div>
      </section>

      {/* ================= SECTION 7: WHY CHOOSE ================= */}
      <section className="py-16 px-6 lg:px-12 max-w-[1400px] mx-auto text-left">
        <h2 className="text-2xl md:text-4xl font-serif mb-12 text-center tracking-tight text-slate-900 text-center">Why Choose DriveScent?</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 text-left">
          {[
            "Compact and travel-friendly design",
            "Durable aluminum construction",
            "Smart timed fragrance control",
            "Long-lasting rechargeable battery",
            "Quiet and leak-proof operation",
            "Suitable for both cars and desktops"
          ].map((text, i) => (
            <div key={i} className="p-6 bg-white border border-slate-100 rounded-2xl shadow-sm hover:border-blue-200 transition-colors text-left">
              <CheckCircleIcon className="w-6 h-6 text-blue-600 mb-4 text-left" />
              <p className="text-slate-700 text-sm font-medium leading-relaxed text-left">{text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ================= MAINTENANCE ================= */}
      <section className="py-16 bg-slate-50 px-6 text-left">
        <div className="max-w-[1000px] mx-auto grid lg:grid-cols-2 gap-6 text-left">
          <div className="p-8 bg-white rounded-3xl shadow-sm border border-slate-100 text-left">
            <h4 className="text-lg font-bold mb-4 flex items-center gap-2 text-slate-900 text-left">
              <WrenchScrewdriverIcon className="w-5 h-5 text-blue-600" /> Maintenance
            </h4>
            <ul className="space-y-2 text-xs text-slate-500 font-light text-left">
               <li className="text-left">• Easy oil refilling process</li>
               <li className="text-left">• Minimal maintenance required</li>
               <li className="text-left">• Long-lasting components</li>
            </ul>
          </div>
          <div className="p-8 bg-blue-600 text-white rounded-3xl shadow-xl text-left">
            <h4 className="text-lg font-bold mb-4 flex items-center gap-2 text-left text-white">
              <ShieldCheckIcon className="w-5 h-5" /> Expert Support
            </h4>
            <ul className="space-y-2 text-xs text-blue-50 font-light text-left">
               <li className="text-left">• Fragrance recommendations</li>
               <li className="text-left">• Refill & Product support</li>
               <li className="text-left">• Expert usage guidance</li>
            </ul>
          </div>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="py-20 px-6 text-center text-left">
        <div className="max-w-[1200px] mx-auto bg-[#0c101b] rounded-[3rem] p-10 md:p-16 text-center text-white relative overflow-hidden shadow-2xl text-center">
          <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-blue-600/20 blur-[100px] rounded-full text-left" />
          <h2 className="text-3xl md:text-5xl font-serif mb-6 relative z-10 text-center">Get Started with DriveScent</h2>
          <p className="text-slate-400 text-lg mb-10 relative z-10 max-w-2xl mx-auto leading-relaxed font-light text-center">
            Looking for a reliable car aroma diffuser that fits your lifestyle? Our team is here to help you choose the best fragrance for your journey.
          </p>
          <div className="flex flex-wrap justify-center gap-4 relative z-10 text-center">
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="px-10 py-4 bg-white text-slate-900 rounded-xl font-black uppercase tracking-widest text-[10px] hover:bg-blue-600 hover:text-white transition-all shadow-xl flex items-center gap-2 font-sans text-center">
               <ChatBubbleLeftRightIcon className="w-5 h-5" /> WhatsApp Expert
            </a>
            <a href={contactPath} className="px-10 py-4 bg-white/5 text-white rounded-xl font-black uppercase tracking-widest text-[10px] hover:bg-white/10 border border-white/10 transition-all flex items-center gap-2 font-sans text-center">
              Contact Cool Max <ArrowRightIcon className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

    </div>
  );
};

export default DriveScentPage;