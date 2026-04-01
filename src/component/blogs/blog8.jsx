import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { 
  ChatBubbleLeftRightIcon, 
  ArrowRightIcon,
  CheckCircleIcon,
  SunIcon, // For Summer
  CloudIcon, // For Spring/Autumn
  SparklesIcon, // For Winter/Luxury
  CalendarDaysIcon,
} from "@heroicons/react/24/outline";

// --- ASSET IMPORTS ---
import BlogHeroImg from "../../asset/hero/hero3.gif"; 

export default function SeasonalScentingDubaiBlog() {
  const whatsappNumber = "971509282702";

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="relative min-h-screen bg-white text-slate-900 font-sans selection:bg-blue-100 overflow-x-hidden text-left pt-16">
      
      {/* ================= SEO METADATA ================= */}
      <title>Seasonal Scenting Guide | Best Aroma Diffusers in Dubai</title>
      <meta name="description" content="Discover what to diffuse each season with the best aroma diffusers in Dubai. From spring florals to winter woods – we bring you a complete seasonal scenting guide." />
      <link rel="canonical" href="https://www.coolmaxscent.com/blog/seasonal-scenting-with-aroma-diffusers"/>

      {/* ================= GLOBAL BACKGROUND ================= */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-0 right-0 w-[1000px] h-[1000px] bg-slate-50 rounded-full blur-[150px]" />
        <div className="absolute bottom-0 left-0 w-[800px] h-[800px] bg-blue-50/30 rounded-full blur-[120px]" />
      </div>

      <div className="relative z-10">
        
        {/* ================= HERO SECTION (H1) ================= */}
        <section className="pt-20 pb-16 px-6 lg:px-16 max-w-[1400px] mx-auto">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="max-w-5xl text-left">
            <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-blue-50 border border-blue-100 mb-8">
              <CalendarDaysIcon className="w-4 h-4 text-blue-600" />
              <span className="text-blue-700 text-[10px] font-black uppercase tracking-[0.3em]">Facility Management Strategy</span>
            </div>
            
            <h1 className="text-4xl md:text-7xl font-serif text-slate-900 tracking-tighter leading-[1.1] mb-8 text-left text-balance">
              Best Aroma Diffuser in Dubai – <br />
              <span className="italic text-slate-400 font-light text-left">How to Choose Scents for Every Season</span>
            </h1>

            <p className="text-xl md:text-2xl text-slate-600 font-light leading-relaxed mb-10 text-left">
              Here is something most facility managers overlook. You change your AC filters seasonally. You adjust lighting schedules. But your building's fragrance? Most commercial spaces keep the same scent running all year long.
            </p>
          </motion.div>
        </section>

        {/* ================= MAIN CONTENT SECTION ================= */}
        <section className="pb-24 px-6 lg:px-16 max-w-[1400px] mx-auto">
          <div className="grid lg:grid-cols-12 gap-16">
            <div className="lg:col-span-8 space-y-8 text-lg text-slate-600 font-light leading-relaxed text-left">
              
              <div className="space-y-6">
                <p className="text-justify">
                  That is a missed opportunity. The warm, woody scent that feels welcoming in a hotel lobby during December? It feels completely wrong during July. For businesses that truly care about customer experience and employee wellbeing, seasonal scenting is not a luxury. It is a strategy.
                </p>
                <p className="text-justify">
                  At Cool Max, known for providing the best aroma diffuser in Dubai for commercial applications, we help malls, corporate offices, schools, and hotels implement seasonal scenting strategies that actually work.
                </p>
              </div>

              {/* WHY SEASONAL (H2) */}
              <div className="py-10 text-left border-t border-slate-100">
                <h2 className="text-3xl md:text-4xl font-serif mb-6 tracking-tight text-slate-900 text-left">Why Commercial Spaces Need Seasonal Scenting</h2>
                <div className="space-y-6">
                    <p><strong>Customer Experience Changes with Seasons:</strong> A customer walking into your mall in March has different expectations than one in October. Spring visitors want fresh experiences; Autumn visitors want warmth.</p>
                    <p><strong>Employee Productivity Varies Year-Round:</strong> The right seasonal scents can counter summer fatigue and winter motivation dips.</p>
                    <p><strong>Brand Perception Stays Consistent:</strong> Seasonal scenting means expressing your identity appropriately for the climate. A brand remains consistent; the expression evolves.</p>
                </div>
              </div>

              {/* SPRING (H2) */}
              <div className="py-10 text-left">
                <h2 className="text-3xl md:text-4xl font-serif mb-6 tracking-tight text-blue-600 text-left flex items-center gap-4">
                    <CloudIcon className="w-8 h-8" /> Spring: Fresh, Clean, and Inviting
                </h2>
                <p className="mb-6 text-justify">During spring, you want scents that are fresh, clean, and subtly inviting. Try these from the Cool Max collection:</p>
                <ul className="grid md:grid-cols-2 gap-4 mb-8">
                    <li className="bg-slate-50 p-4 rounded-xl text-sm"><strong>Lavender Aroma Oil:</strong> Soft and calming. Perfect for healthcare.</li>
                    <li className="bg-slate-50 p-4 rounded-xl text-sm"><strong>White Tea Aroma Oil:</strong> Clean and delicate. Excellent for offices.</li>
                    <li className="bg-slate-50 p-4 rounded-xl text-sm"><strong>Floral Aroma Oil:</strong> Universally pleasant for retail environments.</li>
                    <li className="bg-slate-50 p-4 rounded-xl text-sm"><strong>Lotus Flower Aroma Oil:</strong> Gentle and peaceful for schools.</li>
                </ul>

                <div className="overflow-x-auto rounded-2xl border border-slate-200 mb-6">
                  <table className="w-full text-left text-sm">
                    <thead className="bg-slate-900 text-white uppercase text-[10px] tracking-widest">
                      <tr>
                        <th className="px-6 py-4">Commercial Space</th>
                        <th className="px-6 py-4">Recommended Oil</th>
                        <th className="px-6 py-4">Expected Benefit</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100">
                      {[
                        { s: "Corporate Reception", o: "White Tea", b: "Professional first impression" },
                        { s: "Hotel Lobby", o: "Floral", b: "Welcoming atmosphere" },
                        { s: "Healthcare Waiting", o: "Lavender", b: "Reduced patient anxiety" },
                        { s: "School Common Area", o: "Lotus Flower", b: "Calm learning environment" },
                        { s: "Retail Store", o: "White Tea", b: "Extended browsing time" }
                      ].map((row, i) => (
                        <tr key={i}><td className="px-6 py-4 font-bold">{row.s}</td><td className="px-6 py-4">{row.o}</td><td className="px-6 py-4 italic">{row.b}</td></tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* SUMMER (H2) */}
              <div className="py-10 text-left border-t border-slate-100">
                <h2 className="text-3xl md:text-4xl font-serif mb-6 tracking-tight text-orange-500 text-left flex items-center gap-4">
                    <SunIcon className="w-8 h-8" /> Summer: Energising and Refreshing
                </h2>
                <p className="text-justify mb-6">Summer in the UAE is intense. Scents must cut through the staleness of recirculated AC air to wake up tired employees and weary shoppers.</p>
                <div className="grid md:grid-cols-2 gap-4 mb-10">
                    <div className="p-6 bg-slate-900 rounded-3xl text-white">
                        <h4 className="text-blue-400 font-bold mb-2">Crystal Aroma Oil</h4>
                        <p className="text-sm">Clean and sharp freshness for energy dips.</p>
                    </div>
                    <div className="p-6 bg-slate-900 rounded-3xl text-white">
                        <h4 className="text-blue-400 font-bold mb-2">True Coffee Aroma Oil</h4>
                        <p className="text-sm">Bold and awakening for food courts and cafes.</p>
                    </div>
                </div>

                <div className="overflow-x-auto rounded-2xl border border-slate-200 mb-8">
                  <table className="w-full text-left text-sm">
                    <thead className="bg-slate-900 text-white uppercase text-[10px] tracking-widest">
                      <tr>
                        <th className="px-6 py-4">Commercial Space</th>
                        <th className="px-6 py-4">Recommended Oil</th>
                        <th className="px-6 py-4">Expected Benefit</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100">
                      {[
                        { s: "Corporate Office", o: "Crystal", b: "Reduced afternoon fatigue" },
                        { s: "Shopping Mall", o: "Crystal", b: "Extended dwell time" },
                        { s: "Food Court", o: "True Coffee", b: "Increased appetite/energy" },
                        { s: "Hotel Lobby", o: "Crystal", b: "Fresh escape from heat" }
                      ].map((row, i) => (
                        <tr key={i}><td className="px-6 py-4 font-bold">{row.s}</td><td className="px-6 py-4">{row.o}</td><td className="px-6 py-4 italic">{row.b}</td></tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* AUTUMN (H2) */}
              <div className="py-10 text-left border-t border-slate-100">
                <h2 className="text-3xl md:text-4xl font-serif mb-6 tracking-tight text-amber-700 text-left flex items-center gap-4">
                    <SparklesIcon className="w-8 h-8" /> Autumn: Warm, Welcoming, and Comforting
                </h2>
                <p className="text-justify mb-6">Autumn is when commercial scenting becomes strategic as people spend more time outdoors. Think spices, woods, and heritage.</p>
                <div className="grid md:grid-cols-2 gap-4 mb-8">
                    <div className="p-4 border border-slate-100 rounded-xl bg-slate-50 text-xs"><strong>Oriental Aroma Oil:</strong> Rich and exotic for fine dining.</div>
                    <div className="p-4 border border-slate-100 rounded-xl bg-slate-50 text-xs"><strong>Arabian Peninsula:</strong> Traditional stability for corporate HQs.</div>
                    <div className="p-4 border border-slate-100 rounded-xl bg-slate-50 text-xs"><strong>Arabian Bakhour:</strong> Smoky and deep for luxury retail.</div>
                    <div className="p-4 border border-slate-100 rounded-xl bg-slate-50 text-xs"><strong>Emaar Aroma Oil:</strong> Sophisticated warmth for event spaces.</div>
                </div>
              </div>

              {/* WINTER (H2) */}
              <div className="py-10 text-left border-t border-slate-100 bg-slate-50 p-8 rounded-[3rem]">
                <h2 className="text-3xl md:text-4xl font-serif mb-6 tracking-tight text-slate-900 text-left flex items-center gap-4">
                    <SparklesIcon className="w-8 h-8 text-blue-600" /> Winter: Rich, Luxurious, and Memorable
                </h2>
                <p className="text-justify mb-8">Winter scents should be opulent and unforgettable. Pick one oil that defines your brand and use it consistently.</p>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-10">
                    {["Gold", "Tuscan Leather", "Splendor", "Classic", "Harmony", "Event", "Passion", "Brown Orchid", "Taj Sunset", "Scents Natural", "For You"].map((oil, idx) => (
                        <div key={idx} className="p-3 bg-white rounded-xl border border-slate-200 text-center text-[10px] font-black uppercase tracking-widest">{oil}</div>
                    ))}
                </div>
              </div>

              {/* WHY COOL MAX (H2) */}
              <div className="py-16 text-left">
                <h2 className="text-3xl md:text-4xl font-serif mb-6 tracking-tight text-slate-900 text-left">Why Cool Max for Commercial Seasonal Scenting?</h2>
                <div className="grid md:grid-cols-2 gap-6">
                  {[
                      "HVAC-integrated systems for building coverage",
                      "Floor-standing diffusers for lobbies",
                      "Wall-mounted units for corridors",
                      "Premium commercial-grade oils for every season",
                      "Expert seasonal rotation strategies",
                      "Full maintenance and refill support"
                  ].map((item, i) => (
                      <div key={i} className="flex gap-3 items-center text-base">
                          <CheckCircleIcon className="w-5 h-5 text-blue-600 shrink-0" /> {item}
                      </div>
                  ))}
                </div>
              </div>

              {/* FINAL THOUGHTS (H2) */}
              <div className="py-16 text-left border-t border-slate-100">
                <h2 className="text-3xl md:text-4xl font-serif mb-6 tracking-tight text-slate-900 text-left uppercase">Final Thoughts</h2>
                <p className="text-justify">
                  Seasonal scenting delivers returns across your entire operation. Switch your commercial scents every few months to boost morale, extend dwell time, and signal commitment to excellence. When you are ready to implement a professional seasonal scenting strategy, Cool Max is here to help.
                </p>
              </div>

            </div>

            {/* SIDEBAR WIDGETS */}
            <aside className="lg:col-span-4 lg:sticky lg:top-32 h-fit text-left">
              <div className="bg-slate-950 rounded-[2.5rem] p-8 text-white shadow-xl text-left overflow-hidden relative">
                <div className="absolute top-0 right-0 w-32 h-32 bg-blue-600/20 blur-2xl rounded-full" />
                <h4 className="font-bold mb-6 uppercase text-xs tracking-widest text-left text-blue-400 relative z-10">Seasonal Strategy</h4>
                <p className="text-slate-400 text-sm leading-relaxed mb-8 text-justify relative z-10">
                  Is your building scenting ready for the next season? Let our specialists plan your commercial rotation.
                </p>
                <div className="space-y-4 relative z-10">
                  <a href={`https://wa.me/${whatsappNumber}`} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-3 bg-[#25D366] text-white w-full py-4 rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-white hover:text-slate-900 transition-all">
                    <ChatBubbleLeftRightIcon className="w-5 h-5" /> WhatsApp Experts
                  </a>
                  <Link to="/contact/" className="flex items-center justify-center gap-3 bg-white text-slate-900 w-full py-4 rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-blue-600 hover:text-white transition-all">
                    Plan Your Season
                  </Link>
                </div>
              </div>

              <div className="mt-8 bg-white border border-slate-100 rounded-[2.5rem] p-8 shadow-sm text-left">
                <h4 className="font-bold mb-6 uppercase text-xs tracking-widest text-slate-400">Diffusion Systems</h4>
                <div className="h-40 bg-slate-50 rounded-2xl mb-4 flex items-center justify-center overflow-hidden">
                  <img src={BlogHeroImg} alt="Dubai Aroma Diffuser" className="w-full h-full object-cover" />
                </div>
                <h5 className="font-serif text-lg mb-2">Best in Dubai</h5>
                <p className="text-slate-500 text-xs font-light mb-6">Commercial grade systems engineered for UAE climate.</p>
                <Link to="/products/" className="text-[10px] font-black uppercase text-blue-600 flex items-center gap-2 hover:gap-3 transition-all">
                  View Diffusers <ArrowRightIcon className="w-3 h-3" />
                </Link>
              </div>
            </aside>
          </div>
        </section>

        {/* ================= FINAL CTA (H2) ================= */}
        <section className="pb-32 px-6 text-center">
          <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} className="max-w-[1200px] mx-auto bg-blue-600 rounded-[4rem] p-16 md:p-24 text-center text-white relative shadow-2xl overflow-hidden">
            <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 blur-3xl rounded-full -translate-y-1/2 -translate-x-1/2" />
            
            <h2 className="text-4xl md:text-6xl font-serif mb-8 tracking-tighter leading-tight relative z-10 text-center uppercase font-bold text-white">
              Scenting for <br />Every Season
            </h2>
            <p className="text-xl text-blue-100 mb-12 max-w-3xl mx-auto font-light leading-relaxed relative z-10 text-center font-sans">
              Book your FREE seasonal consultation and demonstration today. Let us help you make first impressions that last.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 relative z-10">
              <a href={`https://wa.me/${whatsappNumber}`} target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto px-12 py-6 bg-white text-blue-600 rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-slate-900 hover:text-white transition-all shadow-xl flex items-center justify-center gap-3">
                <ChatBubbleLeftRightIcon className="w-5 h-5" /> WhatsApp Audit
              </a>
              <Link to="/contact/" className="w-full sm:w-auto px-12 py-6 bg-blue-700 text-white border border-blue-500 rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-white hover:text-blue-600 transition-all flex items-center justify-center gap-3">
                Request Seasonal Plan <ArrowRightIcon className="w-4 h-4" />
              </Link>
            </div>
          </motion.div>
        </section>

      </div>
    </div>
  );
}