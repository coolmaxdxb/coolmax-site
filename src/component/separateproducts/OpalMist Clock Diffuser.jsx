import React, { useState, useEffect } from "react"; // Added useEffect
import { motion } from "framer-motion";

import { 
  WifiIcon, 
  ClockIcon, 
  SunIcon, 
  CloudIcon, 
  SpeakerXMarkIcon, 
  ArrowRightIcon,
  CheckCircleIcon,
  WrenchScrewdriverIcon,
  BeakerIcon,
  ShieldCheckIcon,
  HomeIcon,
  AdjustmentsHorizontalIcon,
  Squares2X2Icon,
  ChatBubbleLeftRightIcon
} from "@heroicons/react/24/outline";

/* ================= IMAGE ASSETS ================= */
import AeroCube1 from "../../asset/productimg/CMwebpimg/OpalMist Clock Diffuser/1.webp";
import AeroCube2 from "../../asset/productimg/CMwebpimg/OpalMist Clock Diffuser/2.webp";
import AeroCube3 from "../../asset/productimg/CMwebpimg/OpalMist Clock Diffuser/3.webp";
import AeroCube4 from "../../asset/productimg/CMwebpimg/OpalMist Clock Diffuser/4.webp";

const OpalMistClockPage = () => {
  const [activeImg, setActiveImg] = useState(AeroCube1);
  const gallery = [AeroCube1, AeroCube2, AeroCube3, AeroCube4];

  // --- SEO Implementation ---
  useEffect(() => {
    document.title = "OpalMist Clock Diffuser | Smart Desktop Aroma Diffuser";
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute("content", "OpalMist Clock Diffuser is a smart desktop aroma diffuser with WiFi app control, clock display and cold atomization for small spaces.");
    }
    
    // Canonical link handling
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', 'https://www.coolmaxscent.com/desktop-and-small-space-aroma-diffusers/opalmist-clock-diffuser/');
  }, []);

  // Redirection Links
  const whatsappNumber = "+971509282702";
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=Hello%20Cool%20Max%20Scent,%20I%20am%20interested%20in%20the%20OpalMist%20Clock%20Diffuser.`;
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
          <motion.div {...fadeIn}>
            <div className="inline-block px-4 py-1 rounded-full bg-blue-50 border border-blue-100 text-blue-600 text-[10px] font-black uppercase tracking-[0.2em] mb-6 text-left">
              Smart Desktop & Lifestyle Series
            </div>
            <h1 className="text-4xl md:text-6xl font-serif mb-4 leading-tight text-slate-900 text-left">
              OpalMist Clock Diffuser
            </h1>
            <p className="text-lg text-slate-600 font-medium mb-6 leading-relaxed text-left">
              Smart Desktop & Small Space Aroma Diffuser with Time, Temperature & Humidity Display
            </p>
            <p className="text-sm text-slate-500 mb-4 leading-relaxed font-light text-left">
              The OpalMist Clock Diffuser is a smart desktop aroma diffuser designed for homes, boutiques, bedrooms, and small commercial spaces where controlled fragrance diffusion and modern aesthetics matter. Combining cold atomization technology, WiFi & Bluetooth app control, and a built-in clock with temperature and humidity detection, this diffuser delivers both functionality and elegance in a compact form.
            </p>
            <p className="text-sm text-slate-500 mb-8 italic border-l-4 border-blue-600 pl-6 font-light text-left">
              Perfect for users who want a home scent diffuser that blends seamlessly into everyday spaces, OpalMist Clock Diffuser creates a calm, soothing atmosphere without heat or water.
            </p>
            <div className="flex flex-wrap gap-4 text-left">
              <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="px-6 py-3 bg-slate-900 text-white rounded-xl font-bold text-[10px] uppercase tracking-widest hover:bg-blue-600 transition-all flex items-center gap-3 shadow-lg">
                Talk to Scent Expert <ChatBubbleLeftRightIcon className="w-4 h-4" />
              </a>
              <a href={contactPath} className="px-6 py-3 border border-slate-200 text-slate-900 rounded-xl font-bold text-[10px] uppercase tracking-widest hover:bg-white transition-all flex items-center gap-2">
                Contact Cool Max <ArrowRightIcon className="w-3 h-3" />
              </a>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="relative text-left">
            <div className="aspect-[4/3] bg-white rounded-[2.5rem] border border-slate-100 shadow-xl flex items-center justify-center p-8 overflow-hidden text-left">
              <img src={activeImg} alt="OpalMist Clock Diffuser" className="w-full h-full object-contain transition-all duration-700 hover:scale-110" />
            </div>
            <div className="flex gap-3 mt-4 justify-center text-left">
              {gallery.map((img, i) => (
                <button key={i} onClick={() => setActiveImg(img)} className={`w-14 h-14 rounded-lg border-2 overflow-hidden transition-all ${activeImg === img ? "border-blue-600 shadow-md" : "border-transparent opacity-60 hover:opacity-100"}`}>
                  <img src={img} className="w-full h-full object-cover" alt="OpalMist variant thumb" />
                </button>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ================= SECTION 1: PRODUCT OVERVIEW ================= */}
      <section className="py-16 bg-white px-6 text-left">
        <div className="max-w-[1000px] mx-auto text-center text-left">
          <motion.div {...fadeIn}>
            <h2 className="text-2xl md:text-4xl font-serif mb-6 tracking-tight text-slate-900 text-center">Product Overview</h2>
            <p className="text-base text-slate-600 leading-relaxed max-w-4xl mx-auto font-light text-center">
              OpalMist Clock Diffuser is designed to enhance indoor ambiance through high-quality fragrance micro-droplets that disperse evenly across small spaces. Its intelligent system allows users to control scent intensity, spray intervals, and working time remotely, while the front digital display shows local time, temperature, and humidity for added convenience.
              This diffuser is ideal for users who want a smart home fragrance system that is quiet, efficient, and visually refined.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ================= SECTION 2: KEY FEATURES ================= */}
      <section className="py-16 bg-[#0c101b] text-white px-6 text-left">
        <div className="max-w-[1400px] mx-auto text-center text-left">
          <h2 className="text-2xl md:text-4xl font-serif mb-12 tracking-tight text-center">Key Features</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 text-left">
            {[
              { icon: HomeIcon, text: "Smart desktop & small space aroma diffuser" },
              { icon: WifiIcon, text: "WiFi & Bluetooth App Control" },
              { icon: ClockIcon, text: "Built-in digital clock display" },
              { icon: SunIcon, text: "Temperature & humidity detection" },
              { icon: Squares2X2Icon, text: "Infrared oil detection technology" },
              { icon: BeakerIcon, text: "Cold atomization (no heat, no water)" },
              { icon: ShieldCheckIcon, text: "Compact, modern aluminum design" },
              { icon: AdjustmentsHorizontalIcon, text: "Multiple scent intensity and timing options" }
            ].map((item, i) => (
              <div key={i} className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors text-center">
                <item.icon className="w-8 h-8 text-blue-500 mx-auto mb-4" />
                <p className="text-[11px] font-bold uppercase tracking-widest leading-relaxed text-center">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= SECTION 3: SMART CONTROL & CUSTOMIZATION ================= */}
      <section className="py-16 px-6 lg:px-12 max-w-[1400px] mx-auto text-left">
        <h2 className="text-2xl md:text-4xl font-serif mb-12 text-center tracking-tight text-slate-900 text-center">Smart Control & Customization</h2>
        <div className="grid gap-16 text-left">
          <div className="grid md:grid-cols-2 gap-10 items-center text-left">
            <div className="order-2 md:order-1 text-left">
              <h3 className="text-xl font-serif mb-4 text-slate-900 text-left">WiFi & Bluetooth App Control</h3>
              <p className="text-sm text-slate-500 leading-relaxed mb-6 font-light text-left">
                OpalMist Clock Diffuser can be controlled via mobile app, allowing users to:
              </p>
              <div className="grid grid-cols-2 gap-3 text-left">
                {["Adjust intensity", "Set schedules", "Control intervals", "Manage remotely"].map((li, i) => (
                  <div key={i} className="flex items-center gap-2 text-xs text-slate-600 font-medium p-2 bg-white rounded-lg border border-slate-100 shadow-sm text-left">
                    <CheckCircleIcon className="w-4 h-4 text-blue-600 shrink-0" /> {li}
                  </div>
                ))}
              </div>
              <p className="mt-6 text-slate-400 font-medium text-[11px] italic text-left">Convenient home diffuser machine for personal and professional use.</p>
            </div>
            <div className="rounded-3xl bg-slate-100 p-6 order-1 md:order-2 h-64 flex items-center justify-center text-left">
               <img src={AeroCube2} alt="App Control Interface" className="w-full h-full object-contain" />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-10 items-center text-left">
            <div className="rounded-3xl bg-slate-100 p-6 h-64 flex items-center justify-center text-left">
               <img src={AeroCube3} alt="OpalMist Multi-Function Display" className="w-full h-full object-contain" />
            </div>
            <div className="text-left">
              <h3 className="text-xl font-serif mb-4 text-slate-900 text-left">Multiple Scent & Timing Options</h3>
              <div className="grid grid-cols-2 gap-4 mb-6 text-left">
                 <div className="p-4 bg-slate-900 text-white rounded-2xl text-center">
                    <span className="text-3xl font-black text-blue-400">7</span>
                    <p className="text-[9px] font-bold uppercase tracking-widest mt-1">Intensity Levels</p>
                 </div>
                 <div className="p-4 bg-blue-600 text-white rounded-2xl text-center">
                    <span className="text-3xl font-black">9</span>
                    <p className="text-[9px] font-bold uppercase tracking-widest mt-1">Timing Settings</p>
                 </div>
              </div>
              <p className="text-sm text-slate-500 font-light leading-relaxed text-left">These options allow precise control over fragrance diffusion, ensuring the scent is never overpowering and always balanced.</p>
            </div>
          </div>

          <div className="bg-slate-900 text-white p-10 rounded-[3rem] text-center relative overflow-hidden text-left">
             <div className="absolute top-0 left-0 w-full h-full bg-blue-600/5 pointer-events-none text-left" />
             <BeakerIcon className="w-10 h-10 text-blue-500 mx-auto mb-6 text-center" />
             <h3 className="text-2xl md:text-3xl font-serif mb-4 text-center">Advanced Cold Atomization Technology</h3>
             <h4 className="text-blue-400 font-bold uppercase tracking-[0.2em] text-[10px] mb-6 text-center">Two-Fluid Cold Atomization</h4>
             <p className="text-slate-400 max-w-2xl mx-auto leading-relaxed font-light text-sm mb-6 text-center">The diffuser uses two-fluid cold atomization technology to break fragrance oil into fine micro-droplets. This process preserves fragrance quality, ensures even diffusion, and eliminates the need for heat or water.</p>
             <div className="flex flex-wrap justify-center gap-4 text-center">
                {["No Heat", "No Water", "Pure Essence"].map((tag, i) => (
                  <span key={i} className="px-4 py-1 rounded-full border border-white/10 text-[9px] font-black uppercase tracking-widest">{tag}</span>
                ))}
             </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6 text-left">
             <div className="p-8 bg-white border border-slate-100 rounded-3xl shadow-sm text-left">
                <Squares2X2Icon className="w-8 h-8 text-blue-600 mb-4 text-left" />
                <h3 className="text-lg font-serif mb-2 text-slate-900 text-left">Intelligent Oil Detection</h3>
                <h4 className="text-slate-400 text-[10px] font-bold uppercase tracking-widest mb-3 text-left">Infrared Technology</h4>
                <p className="text-slate-500 font-light text-xs leading-relaxed text-left">The built-in infrared sensor monitors oil levels to ensure stable performance and prevent inefficient diffusion.</p>
             </div>
             <div className="p-8 bg-white border border-slate-100 rounded-3xl shadow-sm text-left">
                <CloudIcon className="w-8 h-8 text-blue-600 mb-4 text-left" />
                <h3 className="text-lg font-serif mb-2 text-slate-900 text-left">Environment Detection</h3>
                <h4 className="text-slate-400 text-[10px] font-bold uppercase tracking-widest mb-3 text-left">Temp & Humidity</h4>
                <p className="text-slate-500 font-light text-xs leading-relaxed text-left">OpalMist Clock Diffuser continuously detects room temperature and ambient humidity, making it a functional home scent system.</p>
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
                  ["Product Type", "Desktop & Small Space Aroma Diffuser"],
                  ["Fragrance Capacity", "200 ml"],
                  ["Voltage / Power", "DC 12V / 6W"],
                  ["Coverage Area", "200–300 m³"],
                  ["Noise Level", "≤40 dB"],
                  ["Net Weight", "1.2 kg"],
                  ["Dimensions", "W158 × L87.7 × H171 mm"],
                  ["Material", "Aviation Aluminum"],
                  ["Technology", "Two-fluid cold atomization"]
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

      {/* ================= SECTION 5 & 6: QUIET & APPLICATIONS ================= */}
      <section className="py-16 px-6 lg:px-12 max-w-[1400px] mx-auto text-left">
        <div className="grid lg:grid-cols-2 gap-8 text-left">
          <div className="p-10 bg-white border border-slate-100 rounded-[2.5rem] shadow-sm flex flex-col justify-center text-left">
             <SpeakerXMarkIcon className="w-10 h-10 text-blue-600 mb-6 text-left" />
             <h2 className="text-2xl font-serif mb-4 text-slate-900 text-left">Quiet & Efficient Performance</h2>
             <p className="text-sm text-slate-500 mb-6 font-light text-left">With a noise level of ≤40 dB, OpalMist Clock Diffuser operates quietly, providing consistent fragrance without disturbance.</p>
             <div className="flex flex-wrap gap-2 text-left">
                {["Bedrooms", "Study rooms", "Retail counters", "Reception desks"].map((item, i) => (
                  <span key={i} className="px-3 py-2 bg-slate-50 rounded-lg text-[10px] font-bold uppercase tracking-widest text-slate-600">{item}</span>
                ))}
             </div>
          </div>
          <div className="p-10 bg-slate-900 text-white rounded-[2.5rem] shadow-xl flex flex-col justify-center text-left">
             <h2 className="text-2xl font-serif mb-6 text-blue-400 text-left">Ideal Applications</h2>
             <div className="grid grid-cols-2 gap-y-3 text-left">
                {["Brand stores", "Bedrooms", "4S auto showrooms", "Hallways", "Small offices", "Home interiors"].map((app, i) => (
                  <div key={i} className="flex items-center gap-3 text-left">
                     <div className="w-1.5 h-1.5 bg-blue-600 rounded-full text-left" />
                     <span className="text-slate-300 font-light text-xs text-left">{app}</span>
                  </div>
                ))}
             </div>
          </div>
        </div>
      </section>

      {/* ================= SECTION 7: WHY CHOOSE ================= */}
      <section className="py-16 px-6 lg:px-12 max-w-[1400px] mx-auto text-left">
        <h2 className="text-2xl md:text-4xl font-serif mb-12 text-center tracking-tight text-slate-900 text-center">Why Choose OpalMist Clock Diffuser</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 text-left">
          {[
            "Combines fragrance diffusion with time, temperature & humidity display",
            "Smart app control for modern lifestyles",
            "Cold atomization preserves fragrance quality",
            "Compact size with premium build",
            "Quiet and energy-efficient operation"
          ].map((text, i) => (
            <div key={i} className="p-6 bg-white border border-slate-100 rounded-2xl shadow-sm text-left">
              <CheckCircleIcon className="w-6 h-6 text-blue-600 mb-4 text-left" />
              <p className="text-slate-700 text-xs font-medium leading-relaxed text-left">{text}</p>
            </div>
          ))}
        </div>
        <p className="mt-10 text-center text-slate-400 font-medium text-[11px] italic text-center">Ideal for users seeking a best home fragrance system for small spaces.</p>
      </section>

      {/* ================= SECTION 8: MAINTENANCE ================= */}
      <section className="py-16 bg-slate-50 px-6 text-left">
        <div className="max-w-[1200px] mx-auto grid lg:grid-cols-2 gap-10 items-center text-left">
          <div className="p-10 bg-white rounded-3xl shadow-sm border border-slate-100 text-left">
            <h4 className="text-lg font-bold mb-6 flex items-center gap-2 text-slate-900 text-left">
                <WrenchScrewdriverIcon className="w-5 h-5 text-blue-600" /> Maintenance & Ease
            </h4>
            <ul className="space-y-3 text-xs text-slate-500 font-light text-left text-left">
               <li className="flex items-center gap-2"><CheckCircleIcon className="w-4 h-4 text-slate-300 shrink-0"/> Easy fragrance oil replacement</li>
               <li className="flex items-center gap-2"><CheckCircleIcon className="w-4 h-4 text-slate-300 shrink-0"/> Simple app-based operation</li>
               <li className="flex items-center gap-2"><CheckCircleIcon className="w-4 h-4 text-slate-300 shrink-0"/> Durable aluminum construction</li>
            </ul>
            <p className="mt-6 text-[10px] font-bold uppercase tracking-widest text-slate-400 border-t border-slate-100 pt-4 text-left">Cool Max provides fragrance selection and usage support.</p>
          </div>
          <div className="relative h-80 text-left">
             <img src={AeroCube4} alt="OpalMist Build Detail" className="w-full h-full object-contain rounded-[2rem] shadow-xl text-left" />
             <div className="absolute -bottom-4 -right-4 p-6 bg-blue-600 text-white rounded-2xl shadow-xl text-left">
                <span className="text-xl font-black italic uppercase text-left">Aviation Metal</span>
                <p className="text-[8px] font-bold uppercase tracking-widest text-left">Premium Aluminum</p>
             </div>
          </div>
        </div>
      </section>

      {/* ================= SECTION 9: COLLECTION ================= */}
      <section className="py-16 bg-white px-6 text-center text-left">
        <div className="max-w-[1200px] mx-auto border-t border-slate-100 pt-16 text-left">
          <h2 className="text-2xl md:text-4xl font-serif mb-6 tracking-tight text-slate-900 text-center">The Desktop & Small Space Collection</h2>
          <p className="text-sm text-slate-500 max-w-3xl mx-auto mb-10 leading-relaxed font-light text-center text-left">
            OpalMist Clock Diffuser belongs to Cool Max’s Desktop & Small Space Aroma Diffusers category.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center text-left">
            {["AromaDesk Diffuser", "ZenBox Mini", "AeroCube Diffuser", "LuxePanel Diffuser"].map((range, i) => (
              <div key={i} className="p-6 rounded-2xl bg-slate-50 border border-slate-100 hover:border-blue-600 transition-all font-bold uppercase tracking-widest text-[9px] text-slate-500 cursor-pointer text-center">
                Explore {range}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= SECTION 10: CTA (MASTER REDIRECT) ================= */}
      <section className="py-20 px-6 text-center text-left">
        <div className="max-w-[1200px] mx-auto bg-[#0c101b] rounded-[3rem] p-10 md:p-16 text-center text-white relative overflow-hidden shadow-2xl text-center text-left">
          <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-blue-600/20 blur-[100px] rounded-full text-left" />
          <h2 className="text-3xl md:text-5xl font-serif mb-6 relative z-10 tracking-tight leading-tight uppercase text-center text-left">Create a Calm, Scented Space</h2>
          <p className="text-slate-400 text-lg mb-10 relative z-10 max-w-2xl mx-auto leading-relaxed font-light text-center text-left">
            Looking for a smart desktop aroma diffuser that combines fragrance, function, and modern design?
          </p>
          <div className="flex flex-wrap justify-center gap-4 relative z-10 text-center text-left">
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="px-10 py-4 bg-white text-slate-900 rounded-xl font-black uppercase tracking-widest text-[10px] hover:bg-blue-600 hover:text-white transition-all shadow-xl flex items-center gap-2 text-center text-left">
               <ChatBubbleLeftRightIcon className="w-5 h-5 text-left" /> WhatsApp Support
            </a>
            <a href={contactPath} className="px-10 py-4 bg-white/5 text-white rounded-xl font-black uppercase tracking-widest text-[10px] hover:bg-white/10 border border-white/10 transition-all flex items-center gap-2 font-sans text-center text-left">
              Contact Cool Max <ArrowRightIcon className="w-4 h-4 text-left" />
            </a>
          </div>
        </div>
      </section>

    </div>
  );
};

export default OpalMistClockPage;