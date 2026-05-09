import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import { 
  ChatBubbleLeftRightIcon, 
  ArrowRightIcon,
  CheckCircleIcon,
  SparklesIcon,
  AdjustmentsHorizontalIcon,
  FaceSmileIcon,
  ShoppingBagIcon,

  BuildingOffice2Icon,
  CloudIcon,
  UserGroupIcon
} from "@heroicons/react/24/outline";

// --- ASSET IMPORTS ---
import BlogHeroImg from "../../asset/productimg/CMwebpimg/AeroBlack Med diffuser/1.webp"; 

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 }
};

export default function HospitalityScentBlog() {
  const whatsappNumber = "971509282702";

  // --- SEO Implementation & Scroll Fix ---
  useEffect(() => {
    window.scrollTo(0, 0);

    document.title = "Why Floor standing diffusers are ideal for commercial spaces";
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute("content", "Discover why Floor-Standing Aroma Diffusers in UAE are ideal for luxury hotels, offices, showrooms, and large commercial spaces with premium scent coverage.");
    }
    
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', 'https://coolmaxscent.com/blog/why-floor-standing-diffusers-are-ideal-for-commercial-space');
  }, []);

  return (
    <div className="relative min-h-screen bg-white text-slate-900 font-sans selection:bg-blue-100 overflow-x-hidden pt-16">
      
      {/* ================= GLOBAL BACKGROUND ================= */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-0 right-0 w-[1000px] h-[1000px] bg-slate-50 rounded-full blur-[150px]" />
        <div className="absolute bottom-0 left-0 w-[800px] h-[800px] bg-blue-50/30 rounded-full blur-[120px]" />
      </div>

      <div className="relative z-10">
        
        {/* ================= HERO SECTION (H1) ================= */}
        <section className="pt-20 pb-16 px-6 lg:px-16 max-w-[1400px] mx-auto text-left">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="max-w-5xl">
            <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-blue-50 border border-blue-200 text-blue-700 mb-8">
              <SparklesIcon className="w-4 h-4" />
              <span className="text-[10px] font-black uppercase tracking-[0.3em]">Commercial Scenting Guide</span>
            </div>
            
            <h1 className="text-4xl md:text-7xl font-serif text-slate-900 tracking-tighter leading-[1.1] mb-8 text-left">
              Why <a href="https://coolmaxscent.com/floor-standing-diffusers" className="text-blue-600 hover:text-blue-800 transition-colors">Floor-Standing Aroma Diffusers in UAE</a> Are Perfect for Luxury & Large Commercial Spaces
            </h1>

            <p className="text-xl md:text-2xl text-slate-500 font-light leading-relaxed mb-10 text-left">
              When people walk into a luxury hotel or premium showroom, they notice the atmosphere. Scent marketing has become an essential part of the customer experience.
            </p>
          </motion.div>
        </section>

        {/* ================= INTRODUCTION SECTION ================= */}
        <section className="pb-24 px-6 lg:px-16 max-w-[1400px] mx-auto text-left">
          <div className="grid lg:grid-cols-12 gap-16">
            <div className="lg:col-span-8 space-y-8 text-lg text-slate-600 font-light leading-relaxed">
              <p className="text-justify">
                A pleasant fragrance can instantly make a space feel more welcoming, relaxing, and luxurious. In large commercial environments, this has become an important part of brand identity. This is why many businesses are now choosing <a href="https://coolmaxscent.com/floor-standing-diffusers" className="text-blue-600 font-medium underline hover:text-blue-800 transition-colors">Floor-Standing Aroma Diffusers in UAE</a> to create a consistent and premium atmosphere in their spaces.
              </p>

              {/* ROLE OF FRAGRANCE (H2) */}
              <motion.div {...fadeInUp} className="py-12 border-t border-slate-100">
                <h2 className="text-3xl md:text-4xl font-serif text-slate-900 mb-6 text-left">The Role of Fragrance in Customer Experience</h2>
                <p className="mb-8 text-justify">
                  People connect strongly with scent, often without realizing it. In hospitality, fragrance plays a major role in creating that crucial first impression. A clean and balanced scent can make customers stay longer and remember the space more positively.
                </p>
                
                <h3 className="text-xl font-bold text-slate-900 mb-6 text-left">Why Businesses Invest in Scent:</h3>
                <div className="grid md:grid-cols-2 gap-4">
                   {[
                     "Influencing guest mood and behavior",
                     "Shaping brand perception instantly",
                     "Increasing customer dwell time",
                     "Creating lasting emotional memories"
                   ].map((benefit, i) => (
                     <div key={i} className="flex gap-3 items-center p-4 bg-slate-50 rounded-xl border border-slate-100">
                        <CheckCircleIcon className="w-5 h-5 text-blue-600" />
                        <span className="text-sm font-medium text-slate-700">{benefit}</span>
                     </div>
                   ))}
                </div>
              </motion.div>

              {/* LOBBY DIFFUSERS (H2) */}
              <motion.div {...fadeInUp} className="space-y-6">
                <h2 className="text-3xl font-serif text-slate-900 text-left">A Popular Choice for Hotels and Lobbies</h2>
                <p className="text-justify">Hotels are among the biggest users of <a href="https://coolmaxscent.com/lobby-diffusers" className="text-blue-600 font-medium underline hover:text-blue-800 transition-colors">Lobby Aroma Diffusers in Dubai</a> because first impressions matter so much. A well-scented lobby immediately creates a feeling of comfort and elegance. Guests often associate that signature fragrance with the luxury hotel experience itself.</p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="p-6 bg-white border border-slate-100 rounded-3xl shadow-sm">
                    <UserGroupIcon className="w-8 h-8 text-blue-500 mb-4" />
                    <h4 className="font-bold mb-2">Hospitality</h4>
                    <p className="text-xs text-slate-500">Perfect for lobbies and resorts to create an elite welcoming feel.</p>
                  </div>
                  <div className="p-6 bg-white border border-slate-100 rounded-3xl shadow-sm">
                    <ShoppingBagIcon className="w-8 h-8 text-blue-500 mb-4" />
                    <h4 className="font-bold mb-2">Premium Retail</h4>
                    <p className="text-xs text-slate-500">Ideal for malls and showrooms to encourage browsing.</p>
                  </div>
                  <div className="p-6 bg-white border border-slate-100 rounded-3xl shadow-sm">
                    <BuildingOffice2Icon className="w-8 h-8 text-blue-500 mb-4" />
                    <h4 className="font-bold mb-2">Corporate</h4>
                    <p className="text-xs text-slate-500">Enhances office reception areas for high-end real estate and finance.</p>
                  </div>
                </div>
              </motion.div>

              {/* TECHNOLOGY (H2) */}
              <motion.div {...fadeInUp} className="py-12 border-t border-slate-100">
                <h2 className="text-3xl font-serif text-slate-900 text-left">Modern Technology Makes Management Easier</h2>
                <p className="text-justify">Floor-standing aroma diffusers have become popular because modern systems are much easier to manage. Most units now include automatic scheduling, adjustable intensity, and smart controls. Since these diffusers use cold-air technology instead of heat, the fragrance quality remains natural and long-lasting.</p>
                <ul className="mt-6 space-y-3">
                  {["Cold-air dry mist technology", "Bluetooth/WiFi smart app control", "Uniform distribution for large open layouts"].map((item, idx) => (
                    <li key={idx} className="flex items-center gap-3 text-sm text-slate-600">
                      <div className="w-1.5 h-1.5 bg-blue-400 rounded-full" /> {item}
                    </li>
                  ))}
                </ul>
              </motion.div>

            </div>

            {/* SIDEBAR */}
            <aside className="lg:col-span-4 lg:sticky lg:top-32 h-fit">
              <div className="bg-slate-900 rounded-[2.5rem] p-8 text-white shadow-xl">
                <h4 className="font-bold mb-6 uppercase text-xs tracking-widest text-blue-400">Consultation</h4>
                <p className="text-sm text-slate-300 mb-8 text-left">Choose the right Aroma Diffusers for Large Spaces in Dubai with our expert team.</p>
                <div className="space-y-4">
                  <a href={`https://wa.me/${whatsappNumber}`} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-3 bg-blue-600 text-white w-full py-4 rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-white hover:text-blue-600 transition-all text-center">
                    <ChatBubbleLeftRightIcon className="w-5 h-5" /> WhatsApp Support
                  </a>
                </div>
              </div>
            </aside>
          </div>
        </section>

        {/* ================= WHY FLOOR STANDING (H2) ================= */}
        <section className="py-24 bg-slate-50 px-6 lg:px-16 text-left">
          <div className="max-w-[1400px] mx-auto">
            <h2 className="text-3xl md:text-5xl font-serif text-slate-900 mb-16 tracking-tighter text-left">Why Floor-Standing Units <br/><span className="text-blue-600 italic font-light">Lead the Market</span></h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[
                  { t: "Superior Scent Coverage", d: "Built specifically to handle high ceilings and open layouts efficiently.", i: <CloudIcon /> },
                  { t: "Quiet Performance", d: "Designed for commercial environments where silent operation is key.", i: <AdjustmentsHorizontalIcon /> },
                  { t: "Aesthetic Design", d: "Modern and minimal looks that blend naturally into premium interiors.", i: <SparklesIcon /> },
                  { t: "Low Maintenance", d: "High-capacity reservoirs mean fewer refills and easier upkeep.", i: <CheckCircleIcon /> },
                  { t: "Custom Strength", d: "Adjustable intensity to match the specific foot traffic of your zone.", i: <FaceSmileIcon /> },
                  { t: "Cold-Air Diffusion", d: "Maintains the therapeutic and aromatic integrity of fragrance oils.", i: <SparklesIcon /> }
                ].map((item, i) => (
                  <motion.div key={i} {...fadeInUp} className="bg-white p-8 rounded-[2.5rem] shadow-sm border border-slate-100">
                    <div className="text-blue-600 w-10 h-10 mb-6">{item.i}</div>
                    <h4 className="text-lg font-bold text-slate-900 mb-2 text-left">{item.t}</h4>
                    <p className="text-sm text-slate-500 leading-relaxed text-justify">{item.d}</p>
                  </motion.div>
                ))}
            </div>
          </div>
        </section>

        {/* ================= CONCLUSION (H2) ================= */}
        <section className="py-24 px-6 lg:px-16 border-t border-slate-100 text-left">
           <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-serif text-slate-900 mb-6 uppercase text-left">Final Thoughts</h2>
              <p className="text-lg text-slate-600 font-light leading-relaxed mb-8 text-justify">
                Creating a memorable commercial environment is no longer just about visuals. Fragrance has become an essential part of modern commercial spaces. That’s why many businesses are now investing in <a href="https://coolmaxscent.com/floor-standing-diffusers" className="text-blue-600 font-medium hover:underline transition-colors">Floor-Standing Aroma Diffusers in UAE</a> for their hotels, offices, and retail stores.
              </p>
              <div className="relative">
                <div className="bg-slate-100 rounded-[4rem] p-12 overflow-hidden shadow-inner text-center">
                  <img src={BlogHeroImg} alt="Commercial Scenting Solution" className="w-full h-auto rounded-[2rem] shadow-2xl mx-auto max-w-2xl" />
                </div>
              </div>
           </div>
        </section>

        {/* ================= FINAL CTA ================= */}
        <section className="pb-32 px-6">
          <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} className="max-w-[1200px] mx-auto bg-blue-600 rounded-[4rem] p-16 md:p-24 text-center text-white relative shadow-2xl overflow-hidden">
            <div className="absolute top-0 right-0 w-96 h-96 bg-blue-50/10 blur-3xl rounded-full -translate-y-1/2 translate-x-1/2" />
            <h2 className="text-4xl md:text-6xl font-serif mb-8 tracking-tighter leading-tight relative z-10 uppercase font-bold text-white text-center">
              Elevate Your <br />Space Atmosphere
            </h2>
            <p className="text-xl text-blue-100 mb-12 max-w-3xl mx-auto font-light leading-relaxed relative z-10 text-center">
              Transform your commercial environment with professional Floor-Standing scent solutions from Cool Max Scent.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 relative z-10">
              <a href={`https://wa.me/${whatsappNumber}`} target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto px-12 py-6 bg-white text-blue-600 rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-slate-900 hover:text-white transition-all shadow-xl flex items-center justify-center gap-3">
                <ChatBubbleLeftRightIcon className="w-5 h-5" /> Request a Quote
              </a>
              <Link to="/contact/" className="w-full sm:w-auto px-12 py-6 bg-blue-800 text-white border border-blue-500 rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-white hover:text-blue-600 transition-all flex items-center justify-center gap-3">
                Contact Experts <ArrowRightIcon className="w-4 h-4" />
              </Link>
            </div>
          </motion.div>
        </section>

      </div>
    </div>
  );
}