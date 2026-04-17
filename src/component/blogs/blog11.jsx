import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {  
  ChatBubbleLeftRightIcon, 
  ArrowRightIcon,
  CheckCircleIcon,
  WrenchScrewdriverIcon,
  ClockIcon,
  BeakerIcon,
  ExclamationTriangleIcon,
  AdjustmentsHorizontalIcon
} from "@heroicons/react/24/outline";

// --- ASSET IMPORTS ---
import BlogHeroImg from "../../asset/hero/hero3.gif"; 

export default function DiffuserMaintenanceBlog() {
  const whatsappNumber = "971509282702";

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="relative min-h-screen bg-white text-slate-900 font-sans selection:bg-blue-100 overflow-x-hidden text-left pt-16">
      
      {/* ================= SEO METADATA ================= */}
      <title>5 Simple Steps to Clean and Maintain Your Diffuser | Cool Max</title>
      <meta name="description" content="Learn 5 simple steps to clean and maintain your diffuser for long-lasting performance. Improve efficiency and scent quality with expert tips from Cool Max Scent UAE & Qatar." />
      <link rel="canonical" href="https://www.coolmaxscent.com/blog/clean-and-maintain-your-diffuser-for-long-lasting-performance/"/>

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
              <WrenchScrewdriverIcon className="w-4 h-4 text-blue-600" />
              <span className="text-blue-700 text-[10px] font-black uppercase tracking-[0.3em]">Maintenance Guide</span>
            </div>
            
            <h1 className="text-4xl md:text-7xl font-serif text-slate-900 tracking-tighter leading-[1.1] mb-8 text-left text-balance">
              5 Simple Steps to Clean and Maintain Your Diffuser for <br />
              <span className="italic text-slate-400 font-light text-left">Long-Lasting Performance</span>
            </h1>

            <p className="text-xl md:text-2xl text-slate-600 font-light leading-relaxed mb-10 text-left">
              A good scent diffuser helps spread a pleasant fragrance evenly and makes any space feel more inviting—whether it’s your home, hotel, office, or shop.
            </p>
          </motion.div>
        </section>

        {/* ================= MAIN CONTENT SECTION ================= */}
        <section className="pb-24 px-6 lg:px-16 max-w-[1400px] mx-auto">
          <div className="grid lg:grid-cols-12 gap-16">
            <div className="lg:col-span-8 space-y-8 text-lg text-slate-600 font-light leading-relaxed text-left">
              
              <div className="space-y-6">
                <p className="text-justify">
                  At Cool Max, our diffusers are made to run for long hours with very little maintenance, so you can enjoy a fresh environment without any hassle. But like any device, a little care goes a long way. Over time, oil buildup, dust, or improper use can affect how well it works. This might make the scent weaker or even cause damage inside the machine.
                </p>
                <p className="text-justify">
                  The good part? Taking care of your diffuser is easy. With a few simple steps, you can keep it working smoothly and enjoy a consistent, long-lasting fragrance every day.
                </p>
              </div>

              {/* MAINTENANCE STEPS (H2) */}
              <div className="py-10 text-left border-t border-slate-100">
                <h2 className="text-3xl md:text-4xl font-serif mb-10 tracking-tight text-slate-900 text-left">Here are 5 easy steps to keep your diffuser running like new.</h2>
                
                <div className="space-y-16">
                  {/* Step 1 */}
                  <div className="flex flex-col gap-6">
                    <h3 className="text-2xl font-bold text-slate-900 flex items-center gap-3">
                      <span className="flex-shrink-0 w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-black">1</span>
                      Keep Your Diffuser Clean with Regular Maintenance
                    </h3>
                    <p className="text-justify">
                      Regular maintenance helps your diffuser deliver consistent fragrance and smooth performance. Over time, oil residue can build up and affect efficiency. Clean the system periodically to prevent blockages and ensure even scent distribution. For continuous use, follow a simple maintenance routine to keep performance at its best.
                    </p>
                    <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100 grid md:grid-cols-3 gap-4 text-sm font-bold text-blue-800">
                        <div className="flex items-center gap-2"><CheckCircleIcon className="w-5 h-5"/> Even distribution</div>
                        <div className="flex items-center gap-2"><CheckCircleIcon className="w-5 h-5"/> Longer lifespan</div>
                        <div className="flex items-center gap-2"><CheckCircleIcon className="w-5 h-5"/> Scent quality</div>
                    </div>
                  </div>

                  {/* Step 2 */}
                  <div className="flex flex-col gap-6">
                    <h3 className="text-2xl font-bold text-slate-900 flex items-center gap-3">
                      <span className="flex-shrink-0 w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-black">2</span>
                      Use High-Quality Fragrance Oils for Optimal Results
                    </h3>
                    <p className="text-justify">
                      The performance of your diffuser depends heavily on the quality of fragrance oils used. At Cool Max, our systems are designed to work with premium-grade, diffuser-compatible oils that ensure smooth atomization and consistent scent delivery. Using low-quality or diluted oils can lead to clogging and reduced system efficiency.
                    </p>
                    <div className="bg-slate-900 text-white p-8 rounded-3xl flex items-start gap-4">
                        <BeakerIcon className="w-8 h-8 text-blue-400 shrink-0" />
                        <p className="text-sm opacity-90">High-quality oils protect internal components and ensure efficient, uniform coverage. Always use recommended oils compatible with your system.</p>
                    </div>
                  </div>

                  {/* Step 3 */}
                  <div className="flex flex-col gap-6">
                    <h3 className="text-2xl font-bold text-slate-900 flex items-center gap-3">
                      <span className="flex-shrink-0 w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-black">3</span>
                      Adjust Fragrance Timing for Better Performance
                    </h3>
                    <p className="text-justify">
                      Setting the right fragrance timing is key to achieving consistent scent coverage while maximizing efficiency. Cool Max diffuser systems are designed to operate on adjustable schedules, allowing you to control when and how long the fragrance is released. Customize the timing based on your space and foot traffic.
                    </p>
                    <div className="grid md:grid-cols-2 gap-4">
                        <div className="p-4 bg-blue-50 rounded-xl flex items-center gap-3 text-sm">
                            <ClockIcon className="w-5 h-5 text-blue-600"/> Reduce oil consumption
                        </div>
                        <div className="p-4 bg-blue-50 rounded-xl flex items-center gap-3 text-sm">
                            <AdjustmentsHorizontalIcon className="w-5 h-5 text-blue-600"/> Better system efficiency
                        </div>
                    </div>
                  </div>

                  {/* Step 4 */}
                  <div className="flex flex-col gap-6">
                    <h3 className="text-2xl font-bold text-slate-900 flex items-center gap-3">
                      <span className="flex-shrink-0 w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-black">4</span>
                      Avoid Overfilling for Optimal Performance
                    </h3>
                    <p className="text-justify">
                      Maintaining the correct oil level is essential for smooth and efficient diffuser operation. Overfilling can disrupt the atomization process, leading to uneven fragrance output and potential system strain. Cool Max diffuser systems are designed to perform best within recommended capacity limits.
                    </p>
                    <div className="p-6 bg-amber-50 border border-amber-100 rounded-2xl flex items-start gap-4">
                        <ExclamationTriangleIcon className="w-6 h-6 text-amber-600 shrink-0"/>
                        <p className="text-sm text-amber-900 font-medium">Avoid adding excess oil beyond capacity. Filling beyond the recommended level may cause leakage or clogging over time.</p>
                    </div>
                  </div>

                  {/* Step 5 */}
                  <div className="flex flex-col gap-6">
                    <h3 className="text-2xl font-bold text-slate-900 flex items-center gap-3">
                      <span className="flex-shrink-0 w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-black">5</span>
                      Follow Smart Usage Practices
                    </h3>
                    <p className="text-justify">
                      Smart usage habits help you get the best results over time. Operate the diffuser based on your space requirements and avoid unnecessary continuous use. Position the unit correctly in a well-ventilated location to ensure even fragrance distribution and optimal coverage.
                    </p>
                  </div>
                </div>
              </div>

              {/* CONCLUSION (H2) */}
              <div className="py-16 text-left border-t border-slate-100">
                <h2 className="text-3xl md:text-4xl font-serif mb-6 tracking-tight text-slate-900 text-left uppercase">Conclusion</h2>
                <p className="text-justify mb-4">
                  Maintaining your diffuser doesn’t require complex routines—just a few smart steps can make a significant difference. By keeping the system clean, using high-quality oils, managing fill levels, and optimizing usage and timing, you can ensure consistent performance and long-lasting efficiency.
                </p>
                <p className="text-justify">
                  Cool Max Scent UAE & Qatar offers advanced scenting solutions designed for reliable, low-maintenance operation. With proper care and the right usage practices, you can maximize performance, extend the lifespan of your system, and enjoy a premium, consistent fragrance experience across any space.
                </p>
              </div>

            </div>

            {/* SIDEBAR WIDGETS */}
            <aside className="lg:col-span-4 lg:sticky lg:top-32 h-fit text-left">
              <div className="bg-slate-950 rounded-[2.5rem] p-8 text-white shadow-xl text-left overflow-hidden relative">
                <div className="absolute top-0 right-0 w-32 h-32 bg-blue-600/20 blur-2xl rounded-full" />
                <h4 className="font-bold mb-6 uppercase text-xs tracking-widest text-left text-blue-400 relative z-10">Care Support</h4>
                <p className="text-slate-400 text-sm leading-relaxed mb-8 text-justify relative z-10">
                  Having trouble with your device? Contact our technical team in UAE or Qatar for expert maintenance assistance.
                </p>
                <div className="space-y-4 relative z-10">
                  <a href={`https://wa.me/${whatsappNumber}`} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-3 bg-[#25D366] text-white w-full py-4 rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-white hover:text-slate-900 transition-all">
                    <ChatBubbleLeftRightIcon className="w-5 h-5" /> WhatsApp Support
                  </a>
                  <Link to="/contact/" className="flex items-center justify-center gap-3 bg-white text-slate-900 w-full py-4 rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-blue-600 hover:text-white transition-all">
                    Get Maintenance Help
                  </Link>
                </div>
              </div>

              <div className="mt-8 bg-white border border-slate-100 rounded-[2.5rem] p-8 shadow-sm">
                <h4 className="font-bold mb-6 uppercase text-xs tracking-widest text-slate-400">System Tech</h4>
                <div className="h-40 bg-slate-50 rounded-2xl mb-4 flex items-center justify-center overflow-hidden">
                  <img src={BlogHeroImg} alt="Atmospheric Diffusion gif" className="w-full h-full object-cover" />
                </div>
                <h5 className="font-serif text-lg mb-2">Atomization Core</h5>
                <p className="text-slate-500 text-xs font-light mb-6">Engineered for performance and low-maintenance longevity.</p>
                <Link to="/products/" className="text-[10px] font-black uppercase text-blue-600 flex items-center gap-2 hover:gap-3 transition-all">
                  Browse Machines <ArrowRightIcon className="w-3 h-3" />
                </Link>
              </div>
            </aside>
          </div>
        </section>

        {/* ================= FINAL CTA (H2) ================= */}
        <section className="pb-32 px-6 text-center">
          <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} className="max-w-[1200px] mx-auto bg-slate-900 rounded-[4rem] p-16 md:p-24 text-center text-white relative shadow-2xl overflow-hidden">
            <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/10 blur-3xl rounded-full -translate-y-1/2 translate-x-1/2" />
            
            <h2 className="text-4xl md:text-6xl font-serif mb-8 tracking-tighter leading-tight relative z-10 text-center uppercase font-bold text-white">
              Consistent <br />Atmospheres
            </h2>
            <p className="text-xl text-slate-400 mb-12 max-w-3xl mx-auto font-light leading-relaxed relative z-10 text-center font-sans">
              Experience the premium fragrance quality of a perfectly maintained Cool Max system.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 relative z-10 w-full max-w-2xl mx-auto">
              <a 
                href={`https://wa.me/${whatsappNumber}`} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex-1 w-full sm:w-auto px-12 py-6 bg-[#25D366] text-white rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-white hover:text-slate-900 transition-all shadow-xl flex items-center justify-center gap-3 border border-transparent"
              >
                <ChatBubbleLeftRightIcon className="w-5 h-5" /> 
                <span className="whitespace-nowrap">WhatsApp Specialist</span>
              </a>

              <Link 
                to="/contact/" 
                className="flex-1 w-full sm:w-auto px-12 py-6 bg-white text-slate-900 border border-white rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-blue-600 hover:text-white transition-all flex items-center justify-center gap-3 shadow-xl"
              >
                <span className="whitespace-nowrap">Find Your Solution</span>
                <ArrowRightIcon className="w-4 h-4" />
              </Link>
            </div>
          </motion.div>
        </section>

      </div>
    </div>
  );
}