import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {  
  ChatBubbleLeftRightIcon, 
  ArrowRightIcon,
  CheckCircleIcon,
  WrenchScrewdriverIcon,
  } from "@heroicons/react/24/outline";

// --- ASSET IMPORTS ---
import BlogHeroImg from "../../asset/blogimg/blog30.webp"; 

export default function DiffuserMaintenanceBlog() {
  const whatsappNumber = "971509282702";

  // --- SEO Implementation & Scroll Fix ---
  useEffect(() => {
    window.scrollTo(0, 0);

    // Dynamic SEO update
    document.title = "Scent Aroma Oil Diffusers for Clinics & Wellness Centers | CoolMax";
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute("content", "Learn how aroma oil diffusers help clinics and wellness centers create calming environments, improve patient comfort, and enhance visitor experiences. Contact Us Today!");
    }
    
    // Canonical link handling
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', 'https://www.coolmaxscent.com/blog/aroma-oil-diffusers-for-clinics-and-wellness-centers/');
  }, []);

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

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
              <WrenchScrewdriverIcon className="w-4 h-4 text-blue-600" />
              <span className="text-blue-700 text-[10px] font-black uppercase tracking-[0.3em]">Maintenance Guide</span>
            </div>
            
            <h1 className="text-4xl md:text-7xl font-serif text-slate-900 tracking-tighter leading-[1.1] mb-8 text-balance">
              How Clinics and Wellness Centers Use Aroma Oil Diffusers <br />
              <span className="italic text-slate-400 font-light">to Improve Patient Comfort</span>
            </h1>

            <p className="text-xl md:text-2xl text-slate-600 font-light leading-relaxed mb-10">
              Patient comfort plays a vital role in creating a positive healthcare experience. Whether visiting a clinic for a routine consultation or spending time at a wellness center for relaxation and therapy, patients appreciate environments that feel calm, welcoming, and stress-free. This is why many healthcare providers are incorporating scenting solutions into their spaces through professional aroma diffuser systems.
            </p>

            <p className="text-xl md:text-2xl text-slate-600 font-light leading-relaxed mb-10">
              An aroma diffuser for clinics can help reduce feelings of anxiety while creating a more pleasant atmosphere in waiting areas, treatment rooms, and reception spaces. 
            </p>
          </motion.div>
        </section>

        {/* ================= MAIN CONTENT SECTION ================= */}
        <section className="pb-24 px-6 lg:px-16 max-w-[1400px] mx-auto">
          <div className="grid lg:grid-cols-12 gap-16">
            <div className="lg:col-span-8 space-y-8 text-lg text-slate-600 font-light leading-relaxed">
              
              <div className="space-y-6">
                <p className="text-justify">
                  Likewise, a wellness center aroma diffuser can enhance relaxation and support a premium customer experience. As healthcare and wellness facilities continue to focus on patient satisfaction, scenting solutions are becoming an increasingly valuable part of the overall environment.
                </p>
              </div>

              {/* MAINTENANCE STEPS (H2) */}
              <motion.div {...fadeInUp} className="py-10 border-t border-slate-100">
                <h2 className="text-3xl md:text-4xl font-serif mb-10 tracking-tight text-slate-900">Here are 5 easy steps to keep your diffuser running like new.</h2>
                
                <div className="space-y-16">
                  {/* Step 1 */}
                  <div className="flex flex-col gap-6">
                    <h3 className="text-2xl font-bold text-slate-900 flex items-center gap-3">
                      <span className="flex-shrink-0 w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-black">1</span>
                      Benefits of Aroma Diffusers for Wellness Centers
                    </h3>
                    <p className="text-justify">
                      Wellness centers are designed to promote physical, mental, and emotional well-being. Creating a soothing environment is essential for helping clients relax and fully benefit from wellness treatments. A professionally installed aroma diffuser for clinics wellness center environment can enhance the overall atmosphere, making every visit more enjoyable and memorable. Supports Relaxation and Stress Relief
                    </p>
                    <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100 grid md:grid-cols-3 gap-4 text-sm font-bold text-blue-800">
                        <div className="flex items-center gap-2"><CheckCircleIcon className="w-5 h-5"/> Enhances Meditation and Mindfulness Practices</div>
                        <div className="flex items-center gap-2"><CheckCircleIcon className="w-5 h-5"/> Creates a Welcoming First Impression</div>
                        <div className="flex items-center gap-2"><CheckCircleIcon className="w-5 h-5"/> Improves the Overall Client Experience</div>
                        <div className="flex items-center gap-2"><CheckCircleIcon className="w-5 h-5"/> Strengthens Brand Identity</div>
                        <div className="flex items-center gap-2"><CheckCircleIcon className="w-5 h-5"/> Encourages Longer Visits</div>
                        <div className="flex items-center gap-2"><CheckCircleIcon className="w-5 h-5"/> Increases Client Retention and Loyalty</div>
                        <div className="flex items-center gap-2"><CheckCircleIcon className="w-5 h-5"/> Promotes Positive Reviews and Referrals</div>
                    </div>

                    <p className="text-justify">
                      By incorporating carefully selected fragrances, wellness centers can improve client experiences, support relaxation, and strengthen their brand image. A memorable sensory experience can leave a lasting impression on visitors, encouraging them to recommend the wellness center to friends, family, and colleagues. 
                    </p>
                  </div>

                 {/* ================= H2: CHOOSE RIGHT DIFFUSER ================= */}
                              <motion.div
                                {...fadeInUp}
                                className="py-12 border-t border-slate-100"
                              >
                                <h2 className="text-3xl md:text-4xl font-serif text-slate-900 mb-6 text-left">
                                  Best Practices for Using Scent Diffusers in Healthcare and Wellness Spaces
                                </h2>
                
                                <p className="mb-8 text-justify">
                                  Implementing a scent diffuser for healthcare environments requires careful planning to ensure fragrances enhance comfort without overwhelming patients or visitors. Selecting the right scenting approach is essential for achieving the best results.
                                </p>
                
                                <div className="space-y-6">
                                  {[
                                    {
                                      title: "Choose Mild and Universal Fragrances",
                                      desc: "Healthcare facilities should prioritize subtle fragrances that appeal to a broad audience. Light floral, herbal, and citrus notes are often effective because they create a pleasant atmosphere without becoming distracting. Strong or overpowering scents should be avoided to ensure patient comfort."
                                    },
                                    {
                                      title: "Use Professional Diffusion Technology",
                                      desc: "Commercial fragrance systems provide consistent scent coverage and better control over fragrance intensity. Unlike traditional air fresheners, professional diffusers distribute aromas evenly throughout the facility, creating a seamless and high-quality scent experience."
                                    },
                                    {
                                      title: "Consider Different Areas Within the Facility",
                                      desc: "Sweet Oud Aroma Oil offers a lighter interpretation of traditional oud, making it suitable for warmer weather. The balanced sweetness adds warmth and elegance without becoming overwhelming."
                                    },
                                    
                                  ].map((item, i) => (
                                    <div
                                      key={i}
                                      className="bg-slate-50 p-6 rounded-3xl border border-slate-100"
                                    >
                                      <h3 className="text-xl font-bold text-slate-900 mb-3 text-left">
                                        {item.title}
                                      </h3>
                                      <p className="text-slate-600 text-justify leading-relaxed">
                                        {item.desc}
                                      </p>
                                    </div>
                                  ))}
                                </div>
                              </motion.div>  
                </div>
              </motion.div>

              {/* CONCLUSION (H2) */}
              <motion.div {...fadeInUp} className="py-16 border-t border-slate-100">
                <h2 className="text-3xl md:text-4xl font-serif mb-6 tracking-tight text-slate-900 uppercase">Conclusion</h2>
                <p className="text-justify mb-4">
                  The use of an aroma diffuser for healthcare environments has become an effective way for clinics and wellness centers to improve patient comfort and create more welcoming spaces. From reducing anxiety and enhancing relaxation to strengthening brand identity and increasing client satisfaction, scent diffusion offers numerous benefits.
                </p>
                <p className="text-justify">
                  Modern aroma fragrance diffusers for clinics help healthcare providers deliver a better overall experience while maintaining a professional and inviting atmosphere. By implementing a thoughtfully designed scent diffuser for healthcare strategy, clinics and wellness centers can create positive, memorable experiences that support patient well-being and long-term loyalty.
                </p>
              </motion.div>

            </div>

            {/* SIDEBAR WIDGETS */}
            <aside className="lg:col-span-4 lg:sticky lg:top-32 h-fit">
              <div className="bg-slate-950 rounded-[2.5rem] p-8 text-white shadow-xl overflow-hidden relative">
                <div className="absolute top-0 right-0 w-32 h-32 bg-blue-600/20 blur-2xl rounded-full" />
                <h4 className="font-bold mb-6 uppercase text-xs tracking-widest text-blue-400 relative z-10">Care Support</h4>
                <p className="text-slate-400 text-sm leading-relaxed mb-8 text-justify relative z-10">
                  Having trouble with your device? Contact our technical team in UAE or Qatar for expert maintenance assistance.
                </p>
                <div className="space-y-4 relative z-10">
                  <a href={`https://wa.me/${whatsappNumber}`} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-3 bg-[#25D366] text-white w-full py-4 rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-white hover:text-slate-900 transition-all">
                    <ChatBubbleLeftRightIcon className="w-5 h-5" /> WhatsApp Support
                  </a>
                  <Link to="/contact/" className="flex items-center justify-center gap-3 bg-white text-slate-900 w-full py-4 rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-blue-600 hover:text-white transition-all">
                    Maintenance Help
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

        {/* ================= FINAL CTA ================= */}
        <section className="pb-32 px-6">
          <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} className="max-w-[1200px] mx-auto bg-slate-900 rounded-[4rem] p-16 md:p-24 text-center text-white relative shadow-2xl overflow-hidden">
            <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/10 blur-3xl rounded-full -translate-y-1/2 translate-x-1/2" />
            
            <h2 className="text-4xl md:text-6xl font-serif mb-8 tracking-tighter leading-tight relative z-10 uppercase font-bold">
              Enhance Patient Comfort Through <br />Professional Fragrance Solutions for Healthcare Facilities
            </h2>
            <p className="text-xl text-slate-400 mb-12 max-w-3xl mx-auto font-light leading-relaxed relative z-10">
              Create calming environments that reduce stress, improve satisfaction, and elevate patient experiences with advanced scent diffusion systems.
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