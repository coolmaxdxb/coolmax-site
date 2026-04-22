import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import { 
  CloudIcon,
  ChatBubbleLeftRightIcon, 
  ArrowRightIcon,
  CheckCircleIcon,
  SparklesIcon,
  BeakerIcon,
  AdjustmentsHorizontalIcon,

  CpuChipIcon,
  ChartBarIcon
} from "@heroicons/react/24/outline";

// --- ASSET IMPORTS ---
import BlogHeroImg from "../../asset/productimg/CMwebpimg/AeroBlack Med diffuser/1.webp"; 

// ... rest of the component remains the same

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 }
};

export default function HVACDiffuserSystemBlog() {
  const whatsappNumber = "971509282702";

  // --- SEO Implementation & Scroll Fix ---
  useEffect(() => {
    window.scrollTo(0, 0);

    document.title = "HVAC Scent Diffuser System UAE for Better Business Experience";
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute("content", "Discover how HVAC scent diffuser system UAE helps hotels, malls, and offices improve customer experience with consistent fragrance solutions.");
    }
    
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', 'https://www.coolmaxscent.com/blog/hvac-scent-diffuser-system-uae/');
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
              <CloudIcon className="w-4 h-4 text-blue-600" />
              <span className="text-blue-700 text-[10px] font-black uppercase tracking-[0.3em]">Commercial Tech Guide</span>
            </div>
            
            <h1 className="text-4xl md:text-7xl font-serif text-slate-900 tracking-tighter leading-[1.1] mb-8">
              <Link to="/hvac-scenting-solutions/" className="hover:text-blue-600 transition-colors">HVAC Scent Diffuser System UAE</Link>: How Businesses Use Scent Marketing for Better Experience
            </h1>

            <p className="text-xl md:text-2xl text-slate-500 font-light leading-relaxed mb-10">
              Walk into any premium hotel, mall, or office in the UAE, and you’ll notice something beyond visuals—it’s the feeling of the space.
            </p>
          </motion.div>
        </section>

        {/* ================= INTRODUCTION SECTION ================= */}
        <section className="pb-24 px-6 lg:px-16 max-w-[1400px] mx-auto text-left">
          <div className="grid lg:grid-cols-12 gap-16">
            <div className="lg:col-span-8 space-y-8 text-lg text-slate-600 font-light leading-relaxed">
              <p className="text-justify">
                That feeling often comes from scent. Today, businesses are not leaving fragrance to chance. They are using <strong><Link to="/hvac-scenting-solutions/" className="text-blue-600 font-medium underline hover:text-blue-800 transition-colors">HVAC scent diffuser system UAE</Link></strong> solutions to create a consistent and memorable environment that improves both customer experience and brand perception.
              </p>

              {/* WHAT IS (H2) */}
              <motion.div {...fadeInUp} className="py-12 border-t border-slate-100">
                <h2 className="text-3xl md:text-4xl font-serif text-slate-900 mb-6">What Is an HVAC Scent Diffuser System?</h2>
                <p className="mb-8 text-justify">
                  An HVAC scent diffuser system is a professional fragrance solution that connects directly to your air conditioning system. This allows businesses to scent large commercial areas without placing multiple devices.
                </p>
                <div className="grid md:grid-cols-3 gap-6">
                   {[
                     { t: "Conversion", i: <BeakerIcon />, d: "Converting aroma oil into fine particles." },
                     { t: "Release", i: <CloudIcon />, d: "Releasing them into the HVAC airflow." },
                     { t: "Distribution", i: <CpuChipIcon />, d: "Distributing fragrance evenly across the entire space." }
                   ].map((item, i) => (
                     <div key={i} className="p-6 bg-slate-50 rounded-2xl border border-slate-100">
                        <div className="text-blue-600 w-8 h-8 mb-4">{item.i}</div>
                        <h4 className="font-bold text-slate-900 mb-2">{item.t}</h4>
                        <p className="text-xs text-slate-500 leading-relaxed">{item.d}</p>
                     </div>
                   ))}
                </div>
              </motion.div>

              {/* POPULARITY (H2) */}
              <motion.div {...fadeInUp} className="py-12 border-t border-slate-100">
                <h2 className="text-3xl md:text-4xl font-serif text-slate-900 mb-6">Why HVAC Scent Diffuser Systems Are Popular in UAE</h2>
                <p className="mb-8 text-justify">The UAE is known for premium customer experiences. Businesses here focus on every detail—including scent. Here’s why HVAC systems are preferred:</p>
                <div className="space-y-4">
                  {[
                    { t: "1. Consistent Fragrance Across Large Spaces", d: "Unlike small diffusers, HVAC systems ensure uniform scent distribution in every corner." },
                    { t: "2. Ideal for High-End Commercial Environments", d: "Perfect for Hotels, Shopping malls, Airports, and Corporate offices." },
                    { t: "3. Invisible & Clean Setup", d: "No visible machines. No clutter. The system works silently within the HVAC setup." },
                    { t: "4. Better Customer Experience", d: "Makes people feel comfortable, encourages longer stays, and improves satisfaction." }
                  ].map((item, i) => (
                    <div key={i} className="flex gap-4 p-6 bg-white border border-slate-100 rounded-2xl shadow-sm">
                      <CheckCircleIcon className="w-6 h-6 text-blue-600 shrink-0" />
                      <div>
                        <h4 className="font-bold text-slate-900">{item.t}</h4>
                        <p className="text-sm text-slate-500">{item.d}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* SIDEBAR */}
            <aside className="lg:col-span-4 lg:sticky lg:top-32 h-fit">
              <div className="bg-blue-600 rounded-[2.5rem] p-8 text-white shadow-xl">
                <h4 className="font-bold mb-6 uppercase text-xs tracking-widest">Business Solutions</h4>
                <p className="text-blue-100 text-sm leading-relaxed mb-8">
                  Get a professional HVAC scenting audit for your facility in Dubai, Abu Dhabi, or Sharjah.
                </p>
                <div className="space-y-4">
                  <a href={`https://wa.me/${whatsappNumber}`} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-3 bg-white text-blue-600 w-full py-4 rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-slate-900 hover:text-white transition-all text-center">
                    <ChatBubbleLeftRightIcon className="w-5 h-5" /> Consult an Expert
                  </a>
                </div>
              </div>
            </aside>
          </div>
        </section>

        {/* ================= MARKETING STRATEGY (H2) ================= */}
        <section className="py-24 bg-slate-50 px-6 lg:px-16 text-left">
          <div className="max-w-[1400px] mx-auto">
            <h2 className="text-4xl md:text-6xl font-serif text-slate-900 mb-20 tracking-tighter">How Businesses Use <br/><span className="text-blue-600 italic font-light text-7xl leading-none">Scent Marketing with HVAC</span></h2>
            <div className="grid md:grid-cols-3 gap-12">
              {[
                { title: "Create Brand Identity", icon: <SparklesIcon />, desc: "Some brands use a signature scent that customers remember long after they leave." },
                { title: "Influence Behavior", icon: <ChartBarIcon />, desc: "A well-scented space can increase time spent, improve mood, and encourage purchases." },
                { title: "Zone Management", icon: <AdjustmentsHorizontalIcon />, desc: "Use fresh scents in entrances, warm scents in lounges, and clean scents in restrooms." }
              ].map((item, i) => (
                <motion.div key={i} {...fadeInUp} className="bg-white p-10 rounded-[3rem] shadow-sm border border-slate-100 flex flex-col h-full">
                  <div className="text-blue-600 w-12 h-12 mb-6">{item.icon}</div>
                  <h3 className="text-xl font-bold text-slate-900 mb-4">{item.title}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed text-justify">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ================= COMPARISON TABLE (H2) ================= */}
        <section className="py-24 px-6 lg:px-16 max-w-[1400px] mx-auto text-left">
           <div className="grid lg:grid-cols-2 gap-20 items-center">
              <div>
                <h2 className="text-4xl md:text-5xl font-serif text-slate-900 mb-8 tracking-tighter">HVAC vs Regular Diffusers</h2>
                <div className="overflow-x-auto rounded-3xl border border-slate-200 shadow-sm">
                   <table className="w-full text-left">
                      <thead className="bg-slate-900 text-white text-xs uppercase tracking-widest">
                         <tr>
                            <th className="p-6">Feature</th>
                            <th className="p-6">HVAC Diffuser</th>
                            <th className="p-6">Regular Diffuser</th>
                         </tr>
                      </thead>
                      <tbody className="text-sm divide-y divide-slate-100">
                         <tr><td className="p-6 font-bold">Coverage</td><td className="p-6">Large spaces</td><td className="p-6">Small areas</td></tr>
                         <tr><td className="p-6 font-bold">Distribution</td><td className="p-6">Even</td><td className="p-6">Limited</td></tr>
                         <tr><td className="p-6 font-bold">Visibility</td><td className="p-6">Hidden</td><td className="p-6">Visible</td></tr>
                         <tr><td className="p-6 font-bold">Control</td><td className="p-6">Centralized</td><td className="p-6">Manual</td></tr>
                      </tbody>
                   </table>
                </div>
                <p className="mt-8 text-blue-600 font-bold uppercase text-xs tracking-widest">For large commercial environments, HVAC is the best choice.</p>
              </div>
              <div className="relative">
                <div className="bg-slate-100 rounded-[4rem] p-12 overflow-hidden shadow-inner text-center">
                  <img src={BlogHeroImg} alt="HVAC System Integration" className="w-full h-auto rounded-[2rem] shadow-2xl" />
                </div>
              </div>
           </div>
        </section>

        {/* ================= BENEFITS & SELECTION (H2) ================= */}
        <section className="py-24 bg-slate-900 text-white px-6 lg:px-16 text-left">
           <div className="max-w-[1400px] mx-auto">
              <div className="grid md:grid-cols-2 gap-16">
                 <div>
                    <h2 className="text-3xl md:text-5xl font-serif mb-12 tracking-tighter text-blue-400 uppercase">Key Benefits</h2>
                    <ul className="grid grid-cols-1 gap-4">
                       {[
                         "Even fragrance distribution", "Suitable for large commercial spaces",
                         "No visual disturbance", "Controlled scent intensity",
                         "Long-lasting performance", "Improves brand experience"
                       ].map((ben, i) => (
                         <li key={i} className="flex gap-3 text-slate-300 items-center">
                            <CheckCircleIcon className="w-5 h-5 text-blue-500" /> {ben}
                         </li>
                       ))}
                    </ul>
                 </div>
                 <div>
                    <h2 className="text-3xl md:text-5xl font-serif mb-12 tracking-tighter text-blue-400 uppercase">Choosing Your System</h2>
                    <div className="space-y-6">
                       {[
                         { t: "Space Size", d: "Larger spaces need higher capacity systems." },
                         { t: "Airflow Design", d: "HVAC layout affects scent spread." },
                         { t: "Usage Hours", d: "Continuous operation requires durable machines." },
                         { t: "Fragrance Type", d: "Choose scents that match your brand." }
                       ].map((item, i) => (
                         <div key={i} className="border-l-2 border-blue-500 pl-6">
                            <h4 className="font-bold text-white mb-1">{item.t}</h4>
                            <p className="text-slate-400 text-sm">{item.d}</p>
                         </div>
                       ))}
                    </div>
                 </div>
              </div>
           </div>
        </section>

        {/* ================= WHY PROFESSIONAL (H2) ================= */}
        <section className="py-24 px-6 lg:px-16 max-w-5xl mx-auto text-center">
           <motion.div {...fadeInUp}>
              <h2 className="text-3xl md:text-5xl font-serif text-slate-900 mb-8 tracking-tighter">Why Choose Professional Scent Marketing</h2>
              <p className="text-lg text-slate-500 font-light mb-12">At Cool Max Scent, we focus on practical and effective scent solutions tailored for real business environments.</p>
              <div className="grid md:grid-cols-4 gap-4">
                {["Safe & Controlled", "Consistent Performance", "Easy Maintenance", "Long-term Results"].map((point, i) => (
                  <div key={i} className="p-6 bg-slate-50 rounded-2xl border border-slate-100 text-xs font-black uppercase tracking-widest text-blue-600">{point}</div>
                ))}
              </div>
           </motion.div>
        </section>

        {/* ================= CONCLUSION (H2) ================= */}
        <section className="py-24 px-6 lg:px-16 border-t border-slate-100 text-left">
           <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-serif text-slate-900 mb-6 uppercase">Conclusion: Scent Is the New Brand Experience</h2>
              <p className="text-lg text-slate-600 font-light leading-relaxed mb-8">
                In today’s competitive market, businesses are focusing on more than just visuals. An <strong>HVAC scent diffuser system UAE</strong> helps create memorable customer experiences, comfortable environments, and a strong brand identity.
              </p>
              <p className="text-2xl font-serif italic text-slate-400">Sometimes, what customers remember most… is how your space made them feel.</p>
           </div>
        </section>

        {/* ================= FAQ SECTION ================= */}
        <section className="py-24 bg-slate-50 px-6 lg:px-16 text-left">
           <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-serif text-slate-900 mb-12 uppercase font-bold text-center">FAQ SECTION</h2>
              <div className="space-y-6">
                 {[
                   { q: "What is an HVAC scent diffuser system UAE?", a: "An HVAC scent diffuser system UAE distributes fragrance through the air conditioning system to provide even scent coverage across large commercial spaces." },
                   { q: "How does an HVAC scent diffuser work?", a: "It converts fragrance oil into fine particles and releases them into the HVAC airflow, allowing the scent to spread evenly throughout the space." },
                   { q: "Where are HVAC scent diffusers used?", a: "They are used in hotels, malls, offices, airports, hospitals, and other large commercial environments." },
                   { q: "Is HVAC scenting better than regular diffusers?", a: "Yes, HVAC scenting is better for large spaces because it provides consistent and uniform fragrance distribution." },
                   { q: "What are the benefits of scent marketing for businesses?", a: "Scent marketing improves customer experience, increases time spent in a space, and enhances brand identity." },
                   { q: "Is HVAC scent diffusion safe?", a: "Yes, professional systems use safe fragrance oils and controlled diffusion technology suitable for commercial use." }
                 ].map((faq, i) => (
                   <motion.div key={i} {...fadeInUp} className="p-8 bg-white rounded-3xl shadow-sm">
                      <h4 className="font-bold text-slate-900 mb-2 text-lg">Q: {faq.q}</h4>
                      <p className="text-slate-500 text-sm">A: {faq.a}</p>
                   </motion.div>
                 ))}
              </div>
           </div>
        </section>

        {/* ================= FINAL CTA ================= */}
        <section className="pb-32 px-6">
          <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} className="max-w-[1200px] mx-auto bg-blue-600 rounded-[4rem] p-16 md:p-24 text-center text-white relative shadow-2xl overflow-hidden">
            <div className="absolute top-0 right-0 w-96 h-96 bg-blue-50/10 blur-3xl rounded-full -translate-y-1/2 translate-x-1/2" />
            <h2 className="text-4xl md:text-6xl font-serif mb-8 tracking-tighter leading-tight relative z-10 uppercase font-bold text-white">
              Upgrade Your <br />Business Atmosphere
            </h2>
            <p className="text-xl text-blue-100 mb-12 max-w-3xl mx-auto font-light leading-relaxed relative z-10 text-center">
              Cool Max provides complete HVAC scent diffusion integration across the UAE.
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