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
  HomeIcon,
  UserGroupIcon,
  BuildingOffice2Icon,
  CloudIcon
} from "@heroicons/react/24/outline";

// --- ASSET IMPORTS ---
import BlogHeroImg from "../../asset/productimg/CMwebpimg/AeroBlack Med diffuser/1.webp"; 

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 }
};

export default function SummerOdorControlBlog() {
  const whatsappNumber = "971509282702";

  // --- SEO Implementation & Scroll Fix ---
  useEffect(() => {
    window.scrollTo(0, 0);

    document.title = "Air Fragrance Diffusers in Dubai Hospitality Industry | Cool Max Scent";
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute("content", "Discover how luxury hotels use air fragrance diffusers in Dubai to create premium guest experiences, strengthen brand identity, and elevate atmosphere.");
    }
    
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', 'https://www.coolmaxscent.com/blog/summer-odor-control-homes-offices-malls-with-cool-max-scent/');
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
            <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-blue-50 border border-blue-100 mb-8">
              <SparklesIcon className="w-4 h-4 text-blue-600" />
              <span className="text-blue-700 text-[10px] font-black uppercase tracking-[0.3em]">Hospitality Guide</span>
            </div>
            
            <h1 className="text-4xl md:text-7xl font-serif text-slate-900 tracking-tighter leading-[1.1] mb-8 text-left">
              Air Fragrance Diffusers in Dubai Hospitality Industry: How Hotels Create Premium Guest Experiences
            </h1>

            <p className="text-xl md:text-2xl text-slate-500 font-light leading-relaxed mb-10 text-left">
              Dubai is known for luxury, innovation, and world-class hospitality. From premium hotels and resorts to boutique stays and serviced apartments, every hospitality brand in the city competes to deliver memorable guest experiences.
            </p>
          </motion.div>
        </section>

        {/* ================= INTRODUCTION SECTION ================= */}
        <section className="pb-24 px-6 lg:px-16 max-w-[1400px] mx-auto text-left">
          <div className="grid lg:grid-cols-12 gap-16">
            <div className="lg:col-span-8 space-y-8 text-lg text-slate-600 font-light leading-relaxed">
              <p className="text-justify">
                Dubai attracts travelers from around the world who expect comfort, quality, and premium service. Today, that experience goes beyond beautiful interiors and excellent service. Guests remember how a place feels the moment they enter. One of the most powerful ways hotels create that feeling is through scent.
              </p>
              
              <p className="text-justify">
                This is why many hospitality brands are now investing in <a href="https://www.coolmaxscent.com" className="text-blue-600 font-medium underline hover:text-blue-800 transition-colors">air fragrance diffusers in Dubai</a> to create welcoming, elegant, and consistent environments for their guests. A great fragrance does more than freshen the air—it becomes part of the guest journey.
              </p>

              {/* WHY GUEST EXPERIENCE MATTERS */}
              <motion.div {...fadeInUp} className="py-12 border-t border-slate-100">
                <h2 className="text-3xl md:text-4xl font-serif text-slate-900 mb-6 text-left">Why Guest Experience Matters in Dubai Hospitality</h2>
                <p className="mb-8 text-justify">
                  In a market this competitive, hotels need to focus on every detail that shapes perception, including visual design, cleanliness, staff service, lighting, music, atmosphere, and fragrance. When all these elements work together, the guest experience feels complete.
                </p>
                
                <h3 className="text-xl font-bold text-slate-900 mb-6 text-left">Elements of the Guest Journey:</h3>
                <div className="grid md:grid-cols-2 gap-4">
                   {[
                     "Creating a strong first impression",
                     "Building an environment of luxury",
                     "Making the brand memorable",
                     "Enhancing comfort during the stay"
                   ].map((benefit, i) => (
                     <div key={i} className="flex gap-3 items-center p-4 bg-slate-50 rounded-xl border border-slate-100">
                        <CheckCircleIcon className="w-5 h-5 text-blue-600" />
                        <span className="text-sm font-medium text-slate-700">{benefit}</span>
                     </div>
                   ))}
                </div>
              </motion.div>

              {/* COMMON SOURCES / ZONES */}
              <motion.div {...fadeInUp} className="space-y-6">
                <h2 className="text-3xl font-serif text-slate-900 text-left">Where Hotels Use Fragrance Diffusers</h2>
                <p className="text-justify">Professional scent systems can be used across many hospitality zones to improve the emotional experience and strengthen brand identity.</p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="p-6 bg-white border border-slate-100 rounded-3xl shadow-sm">
                    <HomeIcon className="w-8 h-8 text-blue-500 mb-4" />
                    <h4 className="font-bold mb-2">Lobby & Reception</h4>
                    <p className="text-xs text-slate-500">Creates a warm welcome and premium first impression upon arrival.</p>
                  </div>
                  <div className="p-6 bg-white border border-slate-100 rounded-3xl shadow-sm">
                    <BuildingOffice2Icon className="w-8 h-8 text-blue-500 mb-4" />
                    <h4 className="font-bold mb-2">Corridors</h4>
                    <p className="text-xs text-slate-500">Maintains freshness and consistency throughout guest floors.</p>
                  </div>
                  <div className="p-6 bg-white border border-slate-100 rounded-3xl shadow-sm">
                    <ShoppingBagIcon className="w-8 h-8 text-blue-500 mb-4" />
                    <h4 className="font-bold mb-2">Spa Areas</h4>
                    <p className="text-xs text-slate-500">Adds comfort and supports a relaxing, luxurious atmosphere.</p>
                  </div>
                </div>
              </motion.div>

              {/* WHY PROFESSIONAL SOLUTIONS */}
              <motion.div {...fadeInUp} className="py-12 border-t border-slate-100">
                <h2 className="text-3xl font-serif text-slate-900 text-left">Why Basic Air Fresheners Are Not Enough</h2>
                <p className="text-justify">Some smaller properties may use regular air fresheners, but these products have clear limitations such as short-lasting fragrance, uneven coverage, and high replacement frequency. Professional hotel diffusers offer controlled intensity and long-term performance.</p>
                <ul className="mt-6 space-y-3">
                  {["Consistent fragrance output", "Controlled, subtle intensity", "Supports premium hotel brand image"].map((item, idx) => (
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
                <h4 className="font-bold mb-6 uppercase text-xs tracking-widest text-blue-400">Scent Strategy</h4>
                <p className="text-sm text-slate-300 mb-8 text-left">Create a complete sensory experience in the premium hospitality market.</p>
                <div className="space-y-4">
                  <a href={`https://wa.me/${whatsappNumber}`} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-3 bg-blue-600 text-white w-full py-4 rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-white hover:text-blue-600 transition-all text-center">
                    <ChatBubbleLeftRightIcon className="w-5 h-5" /> WhatsApp Support
                  </a>
                </div>
              </div>
            </aside>
          </div>
        </section>

        {/* ================= SOLUTIONS SECTION ================= */}
        <section className="py-24 bg-slate-50 px-6 lg:px-16 text-left">
          <div className="max-w-[1400px] mx-auto">
            <h2 className="text-3xl md:text-5xl font-serif text-slate-900 mb-16 tracking-tighter text-left">How Cool Max Scent Systems <br/><span className="text-blue-600 italic font-light">Elevate Guest Experience</span></h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[
                  { t: "Tailored Scent Programs", d: "Tailored systems based on property size, guest expectations, and operational needs.", i: <CloudIcon /> },
                  { t: "HVAC Scenting Solutions", d: "Scent large commercial areas without placing multiple devices.", i: <AdjustmentsHorizontalIcon /> },
                  { t: "Premium Aroma Oils", d: "Deep and luxurious aroma blends carefully crafted for luxury spaces.", i: <SparklesIcon /> },
                  { t: "Signature Scent Design", d: "Develop a unique fragrance that guests associate with your brand.", i: <CheckCircleIcon /> },
                  { t: "Quality and Reputation", d: "Ensure consistent output to meet high guest expectations.", i: <FaceSmileIcon /> },
                  { t: "Maintenance & Refills", d: "Dedicated service and refill programs designed for long-term value.", i: <UserGroupIcon /> }
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
              <h2 className="text-3xl md:text-4xl font-serif text-slate-900 mb-6 uppercase text-left">Conclusion</h2>
              <p className="text-lg text-slate-600 font-light leading-relaxed mb-8 text-justify">
                Air fragrance diffusers are playing a critical role in Dubai’s hospitality industry by helping hotels create elegant, welcoming, and memorable guest experiences. From first impressions in the lobby to comfort throughout the stay, fragrance supports the emotional side of hospitality. In a market built on experience, even the air your guests breathe can become part of your brand.
              </p>
              <div className="relative">
                <div className="bg-slate-100 rounded-[4rem] p-12 overflow-hidden shadow-inner text-center">
                  <img src={BlogHeroImg} alt="Hotel Scent Experience" className="w-full h-auto rounded-[2rem] shadow-2xl mx-auto max-w-2xl" />
                </div>
              </div>
           </div>
        </section>

        {/* ================= FINAL CTA ================= */}
        <section className="pb-32 px-6">
          <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} className="max-w-[1200px] mx-auto bg-blue-600 rounded-[4rem] p-16 md:p-24 text-center text-white relative shadow-2xl overflow-hidden">
            <div className="absolute top-0 right-0 w-96 h-96 bg-blue-50/10 blur-3xl rounded-full -translate-y-1/2 translate-x-1/2" />
            <h2 className="text-4xl md:text-6xl font-serif mb-8 tracking-tighter leading-tight relative z-10 uppercase font-bold text-white text-center">
              Elevate Your <br />Scent Strategy
            </h2>
            <p className="text-xl text-blue-100 mb-12 max-w-3xl mx-auto font-light leading-relaxed relative z-10 text-center">
              Contact Cool Max Scent today to design a signature scent experience for your property.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 relative z-10">
              <a href={`https://wa.me/${whatsappNumber}`} target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto px-12 py-6 bg-white text-blue-600 rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-slate-900 hover:text-white transition-all shadow-xl flex items-center justify-center gap-3">
                <ChatBubbleLeftRightIcon className="w-5 h-5" /> WhatsApp Support
              </a>
              <Link to="/contact/" className="w-full sm:w-auto px-12 py-6 bg-blue-800 text-white border border-blue-500 rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-white hover:text-blue-600 transition-all flex items-center justify-center gap-3">
                Contact Our Team <ArrowRightIcon className="w-4 h-4" />
              </Link>
            </div>
          </motion.div>
        </section>

      </div>
    </div>
  );
}