import React, { useState, useEffect } from "react"; // Added useEffect here
import { motion } from "framer-motion";

import { 
  SpeakerXMarkIcon, 
  SparklesIcon, 
  CubeIcon, 
  ArrowRightIcon,
  CheckCircleIcon,
  WrenchScrewdriverIcon,
  BeakerIcon,
  ShieldCheckIcon,
  LightBulbIcon,
  HomeIcon,
  ChatBubbleLeftRightIcon
} from "@heroicons/react/24/outline";

/* ================= IMAGE ASSETS ================= */
import Titan1 from "../../asset/productimg/CMwebpimg/Titan Diffuser/1.webp";
import Titan2 from "../../asset/productimg/CMwebpimg/Titan Diffuser/2.webp";
import Titan3 from "../../asset/productimg/CMwebpimg/Titan Diffuser/3.webp";
import Titan4 from "../../asset/productimg/CMwebpimg/Titan Diffuser/4.webp";

const TitanDiffuserPage = () => {
  const [activeImg, setActiveImg] = useState(Titan1);
  const gallery = [Titan1, Titan2, Titan3, Titan4];

  // --- SEO Implementation ---
  useEffect(() => {
    document.title = "Titan Diffuser – Floor-Standing Aroma System | Cool Max";
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute("content", "Titan Diffuser is a premium floor-standing aroma diffuser with quiet operation, cold-air atomization, and elegant aluminum design for modern spaces.");
    }
    
    // Canonical link handling
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', 'https://www.coolmaxscent.com/floor-standing-aroma-diffusers/titan-diffuser/');
  }, []);

  // Redirection Links
  const whatsappNumber = "+971509282702";
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=Hello%20Cool%20Max%20Scent,%20I%20am%20interested%20in%20the%20Titan%20Diffuser.`;
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
            <div className="inline-block px-4 py-1 rounded-full bg-blue-50 border border-blue-100 text-blue-600 text-[10px] font-black uppercase tracking-[0.2em] mb-6">
              Sculptural Floor-Standing Design
            </div>
            <h1 className="text-4xl md:text-6xl font-serif mb-4 leading-tight">
              Titan Diffuser
            </h1>
            <p className="text-lg text-slate-600 font-medium mb-6 leading-relaxed">
              Premium Floor-Standing Aroma Diffuser for Modern Commercial & Lifestyle Spaces
            </p>
            <p className="text-sm text-slate-500 mb-8 leading-relaxed font-light">
              The Titan Diffuser is a refined floor-standing aroma diffuser designed for environments that value quiet operation, modern aesthetics, and controlled fragrance performance. With a sculptural desktop-pillar design and a durable aluminum alloy body, Titan Diffuser blends seamlessly into premium interiors while delivering consistent aroma diffusion.
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
              <img src={activeImg} alt="Titan Diffuser" className="w-full h-full object-contain transition-all duration-700 hover:scale-110" />
            </div>
            <div className="flex gap-3 mt-4 justify-center">
              {gallery.map((img, i) => (
                <button key={i} onClick={() => setActiveImg(img)} className={`w-14 h-14 rounded-lg border-2 overflow-hidden transition-all ${activeImg === img ? "border-blue-600 shadow-md" : "border-transparent opacity-60 hover:opacity-100"}`}>
                  <img src={img} className="w-full h-full object-cover" alt="Titan variant thumb" />
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
            <p className="text-base text-slate-600 leading-relaxed max-w-4xl mx-auto font-light text-center">
              Titan Diffuser combines elegant design with professional scent diffusion technology. Unlike traditional bulky fragrance machines, Titan Diffuser features a compact yet powerful floor-standing form that delivers smooth fragrance output with minimal noise.
              Its sealed internal chamber, efficient atomization system, and dual-tone lighting make it both a functional scent diffuser and a visual design element.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ================= SECTION 2: KEY HIGHLIGHTS ================= */}
      <section className="py-16 bg-[#0c101b] text-white px-6 text-left">
        <div className="max-w-[1400px] mx-auto text-center text-left">
          <h2 className="text-2xl md:text-4xl font-serif mb-12 tracking-tight text-center">Key Highlights</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 text-center">
            {[
              { icon: CubeIcon, text: "Premium floor-standing aroma diffuser with sculptural design" },
              { icon: BeakerIcon, text: "Covers up to 550 m³" },
              { icon: SparklesIcon, text: "Compact footprint with strong diffusion output" },
              { icon: SpeakerXMarkIcon, text: "Ultra-quiet sealed chamber operation" },
              { icon: ShieldCheckIcon, text: "Aluminum alloy body with sleek finish" },
              { icon: LightBulbIcon, text: "Dual-tone ambient lighting" },
              { icon: HomeIcon, text: "Suitable for home and light commercial spaces" }
            ].map((item, i) => (
              <div key={i} className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors text-center flex flex-col items-center">
                <item.icon className="w-8 h-8 text-blue-500 mb-4" />
                <p className="text-[11px] font-bold uppercase tracking-widest leading-relaxed text-center">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= SECTION 3: DESIGN & BUILD ================= */}
      <section className="py-16 px-6 lg:px-12 max-w-[1400px] mx-auto text-left">
        <h2 className="text-2xl md:text-4xl font-serif mb-12 text-center tracking-tight text-slate-900 text-center">Design & Build Quality</h2>
        
        <div className="grid gap-16 text-left">
          <div className="grid md:grid-cols-2 gap-10 items-center text-left">
            <div className="order-2 md:order-1 text-left">
              <h3 className="text-xl font-serif mb-4 text-slate-900 text-left">Sculptural Floor-Standing Form</h3>
              <p className="text-sm text-slate-500 leading-relaxed mb-4 font-light text-left text-justify">
                Titan Diffuser stands out with its modern pillar-inspired silhouette, designed to complement contemporary interiors. The form allows placement on floors or counters without overpowering the décor.
              </p>
              <div className="grid grid-cols-2 gap-2 text-left">
                {["Boutique interiors", "Hotel lounges", "Reception desks", "Luxury homes"].map((li, i) => (
                  <div key={i} className="flex items-center gap-2 text-xs text-slate-600 font-medium p-2 bg-white rounded-lg border border-slate-100 shadow-sm text-left">
                    <CheckCircleIcon className="w-4 h-4 text-blue-600 shrink-0" /> {li}
                  </div>
                ))}
              </div>
            </div>
            <div className="rounded-3xl bg-slate-100 p-6 order-1 md:order-2 h-64 flex items-center justify-center text-left">
               <img src={Titan2} alt="Titan Sculptural Design" className="w-full h-full object-contain" />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-10 items-center text-left">
            <div className="rounded-3xl bg-slate-100 p-6 h-64 flex items-center justify-center order-1 text-left">
               <img src={Titan3} alt="Aluminum Construction" className="w-full h-full object-contain" />
            </div>
            <div className="text-left">
              <h3 className="text-xl font-serif mb-4 text-slate-900 text-left">Aluminum Alloy Construction</h3>
              <p className="text-sm text-slate-500 leading-relaxed mb-6 font-light italic text-left">
                The diffuser is built using a high-quality aluminum alloy casing, offering long-term durability and a premium appearance while reducing vibration.
              </p>
              <div className="bg-slate-900 text-white p-6 rounded-2xl text-left">
                <h4 className="text-lg font-serif mb-2 text-blue-400 text-left">Diffusion Performance</h4>
                <p className="text-slate-300 text-[11px] font-light leading-relaxed text-left text-justify">Designed to cover up to 550 cubic meters, ensuring a balanced scent presence and efficient fragrance consumption.</p>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6 text-left">
            <div className="p-8 bg-white border border-slate-100 rounded-[2rem] shadow-sm text-left text-left">
              <BeakerIcon className="w-10 h-10 text-blue-600 mb-4 text-left" />
              <h3 className="text-lg font-serif mb-2 text-left">Efficient Atomization</h3>
              <p className="text-slate-500 text-xs leading-relaxed text-left">Uses cold-air technology to convert oil into micro-particles without heat damage or wet residue.</p>
            </div>
            <div className="p-8 bg-blue-600 text-white rounded-[2rem] shadow-xl text-left text-left">
              <SpeakerXMarkIcon className="w-10 h-10 text-white mb-4 text-left" />
              <h3 className="text-lg font-serif mb-2 text-white text-left">Ultra-Quiet Operation</h3>
              <p className="text-blue-100 text-xs leading-relaxed font-light italic text-left">Noise level ≤38 dB thanks to an engineered sealed internal chamber for discreet operation.</p>
            </div>
            <div className="p-8 bg-white border border-slate-100 rounded-[2rem] shadow-sm text-left text-left">
              <LightBulbIcon className="w-10 h-10 text-blue-600 mb-4 text-left" />
              <h3 className="text-lg font-serif mb-2 text-left">Ambient Lighting</h3>
              <p className="text-slate-500 text-xs leading-relaxed text-left">Built-in dual-color temperature lighting allows the unit to blend into decorative ambient environments.</p>
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
                  ["Product Type", "Floor-Standing Aroma Diffuser"],
                  ["Coverage Area", "Up to 550 m³"],
                  ["Fragrance Capacity", "110 ml"],
                  ["Voltage / Power", "DC 12V / 12W"],
                  ["Noise Level", "≤38 dB"],
                  ["Body Material", "Aluminum alloy"],
                  ["Lighting", "Dual-tone ambient lighting"],
                  ["Weight", "Approx. 1.5 kg"]
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
        <h2 className="text-2xl md:text-4xl font-serif mb-12 tracking-tight text-slate-900 text-center">Recommended Applications</h2>
        <div className="flex flex-wrap justify-center gap-3 mb-20 text-center">
          {["Boutiques", "Hotel lounges", "Reception areas", "Luxury homes", "Commercial spaces"].map((item, i) => (
            <span key={i} className="px-5 py-3 bg-white border border-slate-100 rounded-xl shadow-sm text-[10px] font-bold text-slate-700 uppercase tracking-widest text-center">
              {item}
            </span>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-10 items-center text-left bg-slate-900 rounded-[3rem] p-8 md:p-16 text-white text-left">
          <div className="text-left">
            <h2 className="text-2xl md:text-4xl font-serif mb-6 tracking-tight text-left">How Titan Works</h2>
            <p className="text-slate-400 text-sm leading-relaxed mb-6 font-light text-left text-justify">
              Titan Diffuser uses cold-air diffusion technology to atomize fragrance oil into microscopic particles, dispersing them evenly throughout the space.
            </p>
            <div className="space-y-2 text-[10px] font-black uppercase tracking-widest text-blue-400 text-left">
               <p className="flex items-center gap-2 text-left"><CheckCircleIcon className="w-4 h-4"/> Pure fragrance output</p>
               <p className="flex items-center gap-2 text-left"><CheckCircleIcon className="w-4 h-4"/> Heat-free atomization</p>
               <p className="flex items-center gap-2 text-left"><CheckCircleIcon className="w-4 h-4"/> Stable sealed-chamber system</p>
            </div>
          </div>
          <div className="bg-white/5 p-8 rounded-[2rem] border border-white/10 flex flex-col items-center text-left">
             <BeakerIcon className="w-10 h-10 text-blue-500 mb-6 text-center" />
             <img src={Titan4} alt="Internal Chamber View" className="w-full h-40 object-contain rounded-xl opacity-80" />
             <p className="text-[10px] font-black uppercase mt-4 tracking-widest text-blue-200 text-center">Sealed Chamber Technology</p>
          </div>
        </div>
      </section>

      {/* ================= SECTION 7: WHY CHOOSE ================= */}
      <section className="py-16 px-6 lg:px-12 max-w-[1400px] mx-auto text-left">
        <h2 className="text-2xl md:text-4xl font-serif mb-12 text-center tracking-tight text-slate-900 text-center text-left">Why Choose Titan Diffuser</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 text-left">
          {[
            "Elegant, design-focused floor-standing diffuser",
            "Quiet operation for professional environments",
            "Balanced scent coverage for medium spaces",
            "Durable aluminum construction",
            "Low maintenance and simple operation",
            "Suitable for both commercial and residential use"
          ].map((text, i) => (
            <div key={i} className="p-8 bg-white border border-slate-100 rounded-2xl shadow-sm text-left">
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
               <li className="text-left">• Simple fragrance refill process</li>
               <li className="text-left">• Durable internal components</li>
               <li className="text-left">• Stable long-term performance</li>
            </ul>
          </div>
          <div className="p-8 bg-blue-600 text-white rounded-3xl shadow-xl text-left text-white">
            <h4 className="text-lg font-bold mb-4 flex items-center gap-2 text-white text-left text-white">
              <ShieldCheckIcon className="w-5 h-5 text-white" /> Expert Support
            </h4>
            <ul className="space-y-2 text-xs text-blue-50 font-light text-left text-left">
               <li className="text-left">• Scent selection consultation</li>
               <li className="text-left">• Product usage guidance</li>
               <li className="text-left">• Ongoing refill maintenance</li>
            </ul>
          </div>
        </div>
      </section>

      {/* ================= COLLECTION RANGE ================= */}
      <section className="py-16 bg-white px-6 text-left">
        <div className="max-w-[1200px] mx-auto text-center border-t border-slate-100 pt-16 text-left">
          <h2 className="text-2xl md:text-4xl font-serif mb-6 tracking-tight text-center text-slate-900">The Floor-Standing Range</h2>
          <p className="text-sm text-slate-500 max-w-3xl mx-auto mb-10 leading-relaxed font-light text-center text-left">
            Titan Diffuser is part of Cool Max’s Floor-Standing Aroma Diffusers range, developed for spaces that need visible yet refined scent solutions.
          </p>
          <div className="grid md:grid-cols-3 gap-4 max-w-3xl mx-auto text-center text-left">
            {["AeroPillar Diffuser", "AirPole Pro Diffuser", "NanoPillar Diffuser"].map((range, i) => (
              <div key={i} className="p-6 rounded-2xl bg-slate-50 border border-slate-100 hover:border-blue-600 transition-all font-bold uppercase tracking-widest text-[9px] text-slate-500 cursor-pointer text-center text-left">
                Explore {range}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= CTA (MASTER REDIRECT) ================= */}
      <section className="py-20 px-6 text-left">
        <div className="max-w-[1200px] mx-auto bg-[#0c101b] rounded-[4rem] p-10 md:p-16 text-center text-white relative overflow-hidden shadow-2xl text-left">
          <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-blue-600/20 blur-[100px] rounded-full text-left" />
          <h2 className="text-3xl md:text-5xl font-serif mb-6 relative z-10 tracking-tight leading-tight text-center text-white text-center">Speak to Our Scent Experts</h2>
          <p className="text-slate-400 text-lg mb-10 relative z-10 max-w-2xl mx-auto leading-relaxed font-light text-center text-center">
            Looking for a premium floor-standing aroma diffuser that complements your space while delivering reliable fragrance performance?
          </p>
          <div className="flex flex-wrap justify-center gap-4 relative z-10 text-center text-left">
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="px-10 py-4 bg-white text-slate-900 rounded-xl font-black uppercase tracking-widest text-[10px] hover:bg-blue-600 hover:text-white transition-all shadow-xl flex items-center gap-2 text-center text-left">
               <ChatBubbleLeftRightIcon className="w-5 h-5 text-left" /> WhatsApp Support
            </a>
            <a href={contactPath} className="px-10 py-4 bg-white/5 text-white rounded-xl font-black uppercase tracking-widest text-[10px] hover:bg-white/10 border border-white/10 transition-all flex items-center gap-2 text-center text-left text-white">
              Contact Cool Max <ArrowRightIcon className="w-4 h-4 text-left" />
            </a>
          </div>
        </div>
      </section>

    </div>
  );
};

export default TitanDiffuserPage;