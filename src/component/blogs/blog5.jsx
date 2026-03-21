import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { 
  SparklesIcon, 
  ChatBubbleLeftRightIcon, 
  ArrowRightIcon,
  CheckCircleIcon,
  BuildingOffice2Icon,
  UserGroupIcon,
  // Fixed: Replaced Target with CursorArrowRaysIcon and removed unused icons
  CursorArrowRaysIcon
} from "@heroicons/react/24/outline";

// --- ASSET IMPORTS ---
import BlogHeroImg from "../../asset/hero/hero3.gif"; 

export default function CorporateReceptionScentBlog() {
  const whatsappNumber = "971509282702";

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="relative min-h-screen bg-white text-slate-900 font-sans selection:bg-blue-100 overflow-x-hidden text-left pt-16">
      
      {/* ================= SEO METADATA ================= */}
      <title>First Impressions Matter: Scent Solutions for Corporate Reception Areas | Cool Max</title>
      <meta name="description" content="Discover how commercial scent diffuser machines create lasting first impressions. Explore scent marketing solutions in UAE for corporate reception areas." />
      <link rel="canonical" href="https://www.coolmaxscent.com/blog/scent-solutions-corporate-reception-areas/"/>

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
              <BuildingOffice2Icon className="w-4 h-4 text-blue-600" />
              <span className="text-blue-700 text-[10px] font-black uppercase tracking-[0.3em]">Corporate Excellence</span>
            </div>
            
            <h1 className="text-4xl md:text-7xl font-serif text-slate-900 tracking-tighter leading-[1.1] mb-8 text-left">
              First Impressions Matter: Scent Solutions for <br />
              <span className="italic text-slate-400 font-light text-left">Corporate Reception Areas</span>
            </h1>

            <p className="text-xl md:text-2xl text-slate-600 font-light leading-relaxed mb-10 text-left">
              How Commercial Scent Diffuser Machines Transform Business Environments. Within seconds of walking through your doors, clients, partners, and potential employees form opinions about your company.
            </p>
          </motion.div>
        </section>

        {/* ================= MAIN CONTENT SECTION ================= */}
        <section className="pb-24 px-6 lg:px-16 max-w-[1400px] mx-auto">
          <div className="grid lg:grid-cols-12 gap-16">
            <div className="lg:col-span-8 space-y-8 text-lg text-slate-600 font-light leading-relaxed text-left">
              
              <div className="space-y-6">
                <p className="text-justify">
                  They say you never get a second chance to make a first impression. In the corporate world, this truth plays out every single day in your reception area. They notice the lighting. They see the furniture. They observe the cleanliness. But there's something else they sense—something that affects their perception more than most business owners realize.
                </p>
                <p className="text-justify">
                  Scent. The moment someone enters your reception, their brain processes the aroma of your space. It happens faster than conscious thought. And that initial olfactory impression shapes everything that follows.
                </p>
                <p className="text-justify">
                  At Cool Max, we've helped countless businesses across the UAE transform their corporate reception areas using commercial scent diffuser machines. In this article, we'll explore why scent marketing matters for corporate spaces and how you can leverage it to create powerful first impressions.
                </p>
              </div>

              {/* THE SCIENCE BEHIND (H2) */}
              <div className="py-10 text-left">
                <h2 className="text-3xl md:text-4xl font-serif mb-6 tracking-tight text-slate-900 text-left">The Science Behind First Impressions</h2>
                <p className="mb-6 text-justify">
                  Before we discuss solutions, let's understand why scent carries such weight. The human brain processes scent 10,000 times faster than visual or auditory information. When someone walks into your reception, their olfactory system activates immediately—bypassing rational thought and triggering emotional responses.
                </p>
                
                <div className="grid md:grid-cols-2 gap-4 mb-8">
                    <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100">
                        <h4 className="text-blue-600 font-bold mb-2 text-sm uppercase">Immediate Impact:</h4>
                        <ul className="space-y-2 text-sm">
                            <li>• Within milliseconds, visitors form feelings about your space</li>
                            <li>• Those feelings influence perception of your entire organization</li>
                            <li>• Positive scents create positive associations</li>
                        </ul>
                    </div>
                    <div className="p-6 bg-blue-600 rounded-2xl text-white shadow-lg">
                        <h4 className="text-blue-100 font-bold mb-2 text-sm uppercase">Research Results:</h4>
                        <ul className="space-y-2 text-sm">
                            <li>• 40% improved mood among visitors</li>
                            <li>• 30% longer dwell time</li>
                            <li>• 25% stronger memory recall</li>
                            <li>• Higher perceived value of products</li>
                        </ul>
                    </div>
                </div>
              </div>

              {/* WHY PROFESSIONAL SCENTING (H2) */}
              <div className="py-10 text-left border-t border-slate-100">
                <h2 className="text-3xl md:text-4xl font-serif mb-6 tracking-tight text-slate-900 text-left">Why Corporate Reception Areas Need Professional Scenting</h2>
                
                <div className="space-y-8">
                    <div>
                        <h3 className="text-xl font-bold text-slate-900 flex items-center gap-2"><SparklesIcon className="w-5 h-5 text-blue-600" /> 1. Instant Brand Perception</h3>
                        <p className="text-base text-justify mt-2">A carefully chosen signature scent communicates Professionalism (Clean, fresh fragrances), Luxury (Sophisticated scents), Warmth (Welcoming aromas), and Competence (Pleasant environments suggesting capable organizations).</p>
                    </div>
                    <div>
                        {/* Fixed: CursorArrowRaysIcon used here instead of Target */}
                        <h3 className="text-xl font-bold text-slate-900 flex items-center gap-2"><CursorArrowRaysIcon className="w-5 h-5 text-blue-600" /> 2. Competitive Differentiation</h3>
                        <p className="text-base text-justify mt-2">Scent marketing UAE has become a powerful tool for businesses seeking to stand out. While competitors focus solely on visual branding, forward-thinking companies engage multiple senses—creating memorable experiences that stick.</p>
                    </div>
                    <div>
                        <h3 className="text-xl font-bold text-slate-900 flex items-center gap-2"><UserGroupIcon className="w-5 h-5 text-blue-600" /> 3. Employee Morale</h3>
                        <p className="text-base text-justify mt-2">A pleasant, fresh environment boosts mood before the workday begins, reduces stress and anxiety, increases job satisfaction, and creates pride in the workplace.</p>
                    </div>
                </div>
              </div>

              {/* HOW THEY WORK (H2) */}
              <div className="py-10 text-left bg-slate-50 rounded-[3rem] p-10 md:p-16">
                <h2 className="text-3xl md:text-4xl font-serif mb-6 tracking-tight text-slate-900 text-left">Commercial Scent Diffuser Machines: How They Work</h2>
                <p className="mb-8">For corporate reception areas, you need professional-grade equipment designed for continuous operation, large spaces (up to 500sqm), consistent output, and low maintenance.</p>
                
                <div className="space-y-10">
                    <div className="flex flex-col md:flex-row gap-6">
                        <div className="flex-1">
                            <h4 className="font-bold text-blue-600 text-xl mb-2">Floor-Standing Diffusers</h4>
                            <p className="text-sm">Perfect for spacious areas and high ceilings. Visible design element that enhances decor, powerful output, and portable for flexibility.</p>
                        </div>
                        <div className="flex-1">
                            <h4 className="font-bold text-blue-600 text-xl mb-2">Wall-Mounted Diffusers</h4>
                            <p className="text-sm">Space-saving and discreet. Ideal for medium-sized receptions with easy maintenance access.</p>
                        </div>
                    </div>
                    <div className="p-6 bg-white rounded-2xl border border-slate-200">
                        <h4 className="font-bold text-blue-600 text-xl mb-2">HVAC-Integrated Systems</h4>
                        <p className="text-sm">Invisible diffusion through existing air conditioning. Even distribution across multi-floor corporate offices with centralized control.</p>
                    </div>
                </div>
              </div>

              {/* FRAGRANCE CHOICE (H2) */}
              <div className="py-16 text-left">
                <h2 className="text-3xl md:text-4xl font-serif mb-6 tracking-tight text-slate-900 text-left">Choosing the Right Fragrance for Corporate Reception</h2>
                <p className="mb-8">Recommended Fragrance Profiles for Corporate Spaces:</p>
                
                <div className="overflow-x-auto rounded-2xl border border-slate-200 mb-8">
                  <table className="w-full text-left text-sm">
                    <thead className="bg-slate-900 text-white uppercase text-[10px] tracking-widest">
                      <tr>
                        <th className="px-6 py-4">Fragrance Type</th>
                        <th className="px-6 py-4">Best For</th>
                        <th className="px-6 py-4">Emotional Response</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100">
                      {[
                        { type: "Citrus", for: "Modern companies", response: "Alertness, freshness" },
                        { type: "Green", for: "Eco-conscious brands", response: "Calm, natural, clean" },
                        { type: "Woody", for: "Law/Financial firms", response: "Stability, trust" },
                        { type: "Aquatic", for: "Tech/Innovation", response: "Fresh, clean" },
                        { type: "Light floral", for: "Creative agencies", response: "Welcoming, inspiring" }
                      ].map((row, i) => (
                        <tr key={i} className="hover:bg-blue-50/50 transition-colors">
                          <td className="px-6 py-4 font-bold">{row.type}</td>
                          <td className="px-6 py-4">{row.for}</td>
                          <td className="px-6 py-4 italic">{row.response}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                <div className="p-8 bg-red-50 border-l-4 border-red-400 rounded-r-2xl">
                    <h4 className="text-red-900 font-bold mb-2">What to Avoid:</h4>
                    <p className="text-sm text-red-800">Overpowering scents (subtlety is key), artificial low-quality smells, and conflicting aromas with cleaning products.</p>
                </div>
              </div>

              {/* COOL MAX APPROACH (H2) */}
              <div className="py-16 text-left bg-blue-600 rounded-[3rem] p-10 md:p-16 text-white">
                <h2 className="text-3xl md:text-4xl font-serif mb-8 tracking-tight text-white text-left uppercase font-bold">Scent Marketing Solutions in UAE: The Cool Max Approach</h2>
                <p className="mb-10 text-blue-100">Since 2020, Cool Max has provided solutions to corporate clients across Dubai, Abu Dhabi, and beyond. Our process: Consultation, Recommendation, Installation, and Ongoing Support.</p>
                <div className="grid md:grid-cols-2 gap-6 text-sm">
                    {[
                        { t: "Consultation", d: "Assess space size, layout, HVAC, and brand identity." },
                        { t: "Recommendation", d: "Right machines and fragrances aligned with your brand." },
                        { t: "Installation", d: "Professional equipment positioning and calibration." },
                        { t: "Support", d: "Regular refills, maintenance, and seasonal rotations." }
                    ].map((step, i) => (
                        <div key={i} className="bg-white/10 p-4 rounded-xl border border-white/20">
                            <h5 className="font-bold text-blue-200">Step {i+1}: {step.t}</h5>
                            <p className="text-xs text-blue-50 mt-1">{step.d}</p>
                        </div>
                    ))}
                </div>
              </div>

              {/* ROI (H2) */}
              <div className="py-16 text-left border-t border-slate-100">
                <h2 className="text-3xl md:text-4xl font-serif mb-6 tracking-tight text-slate-900 text-left">The ROI of Corporate Scent Marketing</h2>
                <div className="grid md:grid-cols-2 gap-8">
                    <div>
                        <h4 className="font-bold text-slate-900 mb-4">Direct Benefits</h4>
                        <ul className="space-y-2 text-sm text-slate-600">
                            <li className="flex gap-2"><CheckCircleIcon className="w-4 h-4 text-blue-600" /> Stronger first impressions</li>
                            <li className="flex gap-2"><CheckCircleIcon className="w-4 h-4 text-blue-600" /> Increased dwell time</li>
                            <li className="flex gap-2"><CheckCircleIcon className="w-4 h-4 text-blue-600" /> Better client reviews</li>
                            <li className="flex gap-2"><CheckCircleIcon className="w-4 h-4 text-blue-600" /> Higher perceived value</li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-bold text-slate-900 mb-4">Indirect Benefits</h4>
                        <ul className="space-y-2 text-sm text-slate-600">
                            <li className="flex gap-2"><CheckCircleIcon className="w-4 h-4 text-blue-600" /> Employee satisfaction</li>
                            <li className="flex gap-2"><CheckCircleIcon className="w-4 h-4 text-blue-600" /> Brand differentiation</li>
                            <li className="flex gap-2"><CheckCircleIcon className="w-4 h-4 text-blue-600" /> Memorable experiences</li>
                            <li className="flex gap-2"><CheckCircleIcon className="w-4 h-4 text-blue-600" /> Positive Word-of-mouth</li>
                        </ul>
                    </div>
                </div>
              </div>

              {/* CONCLUSION (H2) */}
              <div className="py-16 text-left border-t border-slate-100">
                <h2 className="text-3xl md:text-4xl font-serif mb-6 tracking-tight text-slate-900 text-left uppercase">Conclusion</h2>
                <p className="text-justify mb-4">
                  Your corporate reception area tells a story before you say a single word. Make sure it's the right story. With professional commercial scent diffuser machines from Cool Max, you can create welcoming, memorable environments that impress clients and inspire employees.
                </p>
                <p className="text-justify">
                  In a competitive market like the UAE, every sensory detail matters—and scent is one of the most powerful tools at your disposal. Don't let your reception area blend in. Make it unforgettable.
                </p>
              </div>

            </div>

            {/* SIDEBAR WIDGETS */}
            <aside className="lg:col-span-4 lg:sticky lg:top-32 h-fit text-left">
              <div className="bg-slate-950 rounded-[2.5rem] p-8 text-white shadow-xl text-left overflow-hidden relative">
                <div className="absolute top-0 right-0 w-32 h-32 bg-blue-600/20 blur-2xl rounded-full" />
                <h4 className="font-bold mb-6 uppercase text-xs tracking-widest text-left text-blue-400 relative z-10">Transform Reception</h4>
                <p className="text-slate-400 text-sm leading-relaxed mb-8 text-justify relative z-10">
                  Discover why leading UAE businesses trust Cool Max for scent marketing solutions and professional fragrance strategies.
                </p>
                <div className="space-y-4 relative z-10">
                  <a href={`https://wa.me/${whatsappNumber}`} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-3 bg-[#25D366] text-white w-full py-4 rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-white hover:text-slate-900 transition-all">
                    <ChatBubbleLeftRightIcon className="w-5 h-5" /> WhatsApp Specialists
                  </a>
                  <Link to="/contact/" className="flex items-center justify-center gap-3 bg-white text-slate-900 w-full py-4 rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-blue-600 hover:text-white transition-all">
                    Book Free Consultation
                  </Link>
                </div>
              </div>

              <div className="mt-8 bg-white border border-slate-100 rounded-[2.5rem] p-8 shadow-sm text-left">
                <h4 className="font-bold mb-6 uppercase text-xs tracking-widest text-slate-400">Reception Systems</h4>
                <div className="h-40 bg-slate-50 rounded-2xl mb-4 flex items-center justify-center overflow-hidden">
                  <img src={BlogHeroImg} alt="Scenting Demo" className="w-full h-full object-cover" />
                </div>
                <h5 className="font-serif text-lg mb-2">Corporate Solutions</h5>
                <p className="text-slate-500 text-xs font-light mb-6">Commercial grade machines for business environments.</p>
                <Link to="/commercial-aroma-diffusion-solutions/" className="text-[10px] font-black uppercase text-blue-600 flex items-center gap-2 hover:gap-3 transition-all">
                  Explore Solutions <ArrowRightIcon className="w-3 h-3" />
                </Link>
              </div>
            </aside>
          </div>
        </section>

        {/* ================= FINAL CTA (H2) ================= */}
        <section className="pb-32 px-6 text-center">
          <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} className="max-w-[1200px] mx-auto bg-slate-900 rounded-[4rem] p-16 md:p-24 text-center text-white relative shadow-2xl overflow-hidden">
            <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/10 blur-3xl rounded-full -translate-y-1/2 translate-x-1/2" />
            
            <h2 className="text-4xl md:text-6xl font-serif mb-8 tracking-tighter leading-tight relative z-10 text-center uppercase font-bold">
              Ready to <br />Transform?
            </h2>
            <p className="text-xl text-slate-400 mb-12 max-w-3xl mx-auto font-light leading-relaxed relative z-10 text-center font-sans">
              Let us help you make first impressions that last. Call us: +971 50 928 2702 | +974 6604 3446
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 relative z-10">
              <a href={`https://wa.me/${whatsappNumber}`} target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto px-12 py-6 bg-[#25D366] text-white rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-white hover:text-slate-900 transition-all shadow-xl flex items-center justify-center gap-3">
                <ChatBubbleLeftRightIcon className="w-5 h-5" /> Free Demonstration
              </a>
              <a href="mailto:info@coolmaxscent.com" className="w-full sm:w-auto px-12 py-6 bg-white text-slate-900 border border-white rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-blue-600 hover:text-white transition-all flex items-center justify-center gap-3">
                Email Our Strategy Team <ArrowRightIcon className="w-4 h-4" />
              </a>
            </div>
          </motion.div>
        </section>

      </div>
    </div>
  );
}