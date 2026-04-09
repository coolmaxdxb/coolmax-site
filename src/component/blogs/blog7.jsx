import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { 
  ChatBubbleLeftRightIcon, 
  ArrowRightIcon,
  BuildingOfficeIcon,
  ChartBarIcon,
  UserGroupIcon,
  BriefcaseIcon,
} from "@heroicons/react/24/outline";

import BlogHeroImg from "../../asset/hero/hero3.gif"; 

export default function CorporateOfficeScentBlog() {
  const whatsappNumber = "971509282702";

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="relative min-h-screen bg-white text-slate-900 font-sans selection:bg-blue-100 overflow-x-hidden text-left pt-16">
      
      {/* ================= SEO METADATA ================= */}
      <title>Why UAE Modern Offices Use Scent Systems | Scent System for Office</title>
      <meta name="description" content="Discover why leading corporations invest in scent system for office in UAE. Learn how scent marketing for office boosts productivity, & brand perception." />
      <link rel="canonical" href="https://www.coolmaxscent.com/blog/why-modern-offices-use-scent-systems"/>

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
              <BriefcaseIcon className="w-4 h-4 text-blue-600" />
              <span className="text-blue-700 text-[10px] font-black uppercase tracking-[0.3em]">Corporate Strategy</span>
            </div>
            
            <h1 className="text-4xl md:text-7xl font-serif text-slate-900 tracking-tighter leading-[1.1] mb-8 text-left text-balance">
              Why Modern Offices Use Scent Systems - <br />
              <span className="italic text-slate-400 font-light text-left">The Strategic Advantage for Corporate Workplaces</span>
            </h1>

            <p className="text-xl md:text-2xl text-slate-600 font-light leading-relaxed mb-10 text-left">
              In today's competitive corporate landscape, the difference between a good company and a great one often lies in the details—the details that shape how employees feel, how clients perceive, and how business gets done.
            </p>
          </motion.div>
        </section>

        {/* ================= MAIN CONTENT SECTION ================= */}
        <section className="pb-24 px-6 lg:px-16 max-w-[1400px] mx-auto">
          <div className="grid lg:grid-cols-12 gap-16">
            <div className="lg:col-span-8 space-y-8 text-lg text-slate-600 font-light leading-relaxed text-left">
              
              <div className="space-y-6">
                <p className="text-justify">
                  Walk into any leading corporate headquarters in Dubai, and you'll notice something beyond the polished marble and modern architecture. There's a certain quality to the air. A freshness that feels intentional. An atmosphere that signals professionalism before a single word is spoken.
                </p>
                <p className="text-justify">
                  This is not accidental. This is the result of a carefully implemented scent system for office in UAE. For C-suite executives, facility managers, and corporate decision-makers, the question is no longer whether to invest in workplace scenting. It's how to implement it strategically for maximum return.
                </p>
              </div>

              {/* THE CORPORATE CASE (H2) */}
              <div className="py-10 text-left">
                <h2 className="text-3xl md:text-4xl font-serif mb-6 tracking-tight text-slate-900 text-left">The Corporate Case for Scent</h2>
                <p className="mb-6 text-justify">Corporate environments face unique challenges. High expectations from clients. Pressure to attract and retain top talent. The constant need to differentiate in competitive markets. Workplace scenting addresses each of these challenges directly.</p>
                
                <div className="space-y-8">
                  <div className="p-8 bg-slate-50 rounded-3xl border border-slate-100">
                    <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-3"><UserGroupIcon className="w-6 h-6 text-blue-600"/> For Client Impressions</h3>
                    <p className="text-base text-justify">Every client visit begins the moment your elevator doors open. A professionally scented environment signals: Attention to detail (If you care about how your office smells, you care about everything), Organizational excellence (Pleasant environments reflect capable management), and Investment in experience (You understand that every touchpoint matters).</p>
                  </div>

                  <div className="p-8 bg-blue-50 rounded-3xl border border-blue-100">
                    <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-3"><ChartBarIcon className="w-6 h-6 text-blue-600"/> For Employee Experience</h3>
                    <p className="text-base text-justify">Your people are your greatest asset. Corporate workplaces that invest in scent marketing for office consistently report: Higher employee engagement scores, Reduced turnover among high performers, Improved collaboration, and Stronger alignment with company culture.</p>
                  </div>

                  <div className="p-8 bg-slate-900 rounded-3xl text-white">
                    <h3 className="text-xl font-bold text-blue-400 mb-4 flex items-center gap-3"><BuildingOfficeIcon className="w-6 h-6"/> For Brand Expression</h3>
                    <p className="text-base text-justify opacity-80">Your office is your brand made physical. The scent you choose becomes part of your corporate identity—as recognizable as your logo, as memorable as your values.</p>
                  </div>
                </div>
              </div>

              {/* MEASURABLE OUTCOMES (H2 & Table) */}
              <div className="py-10 text-left border-t border-slate-100">
                <h2 className="text-3xl md:text-4xl font-serif mb-8 tracking-tight text-slate-900 text-left">The Science That Matters to Decision-Makers</h2>
                <p className="mb-8">Let's move beyond theory to what matters: measurable outcomes. Research conducted across corporate environments demonstrates that strategic scenting delivers quantifiable returns.</p>
                
                <div className="overflow-x-auto rounded-2xl border border-slate-200 mb-10">
                  <table className="w-full text-left text-sm">
                    <thead className="bg-slate-900 text-white uppercase text-[10px] tracking-widest">
                      <tr>
                        <th className="px-6 py-4 text-left">Outcome</th>
                        <th className="px-6 py-4 text-left">Measured Improvement</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100">
                      {[
                        { o: "Employee Focus", m: "15-20% increase in concentration" },
                        { o: "Stress Reduction", m: "25% decrease in perceived workload" },
                        { o: "Cognitive Performance", m: "12% improvement in task accuracy" },
                        { o: "Client Satisfaction", m: "30% higher positive feedback" },
                        { o: "Staff Retention", m: "18% lower voluntary turnover" }
                      ].map((row, i) => (
                        <tr key={i} className="hover:bg-blue-50/50 transition-colors">
                          <td className="px-6 py-4 font-bold text-slate-900">{row.o}</td>
                          <td className="px-6 py-4 text-slate-600">{row.m}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                <div className="grid md:grid-cols-3 gap-6">
                    <div className="p-4 bg-slate-50 rounded-xl text-center">
                        <p className="text-xs font-black uppercase text-blue-600 mb-2">Citrus Profiles</p>
                        <p className="text-xs">Increase alertness and reduce errors.</p>
                    </div>
                    <div className="p-4 bg-slate-50 rounded-xl text-center">
                        <p className="text-xs font-black uppercase text-blue-600 mb-2">Woody Profiles</p>
                        <p className="text-xs">Create stability and trust.</p>
                    </div>
                    <div className="p-4 bg-slate-50 rounded-xl text-center">
                        <p className="text-xs font-black uppercase text-blue-600 mb-2">Fresh Profiles</p>
                        <p className="text-xs">Maintain clarity and focus.</p>
                    </div>
                </div>
              </div>

              {/* GRADE SOLUTIONS (H2) */}
              <div className="py-16 text-left">
                <h2 className="text-3xl md:text-4xl font-serif mb-6 tracking-tight text-slate-900 text-left">Corporate-Grade Scent Solutions</h2>
                <div className="space-y-10 mt-8">
                    <div>
                        <h4 className="text-xl font-bold text-slate-900 mb-2">For Corporate Headquarters</h4>
                        <p className="text-base text-justify">
                          <Link to="/hvac-scenting-solutions/" className="text-blue-600 font-medium underline hover:text-blue-800 transition-colors">HVAC-integrated scent diffusers</Link> connect directly to existing infrastructure, offering: Complete coverage, Invisible integration (no visible equipment), Centralized control, and Scalable architecture for multiple floors.
                        </p>
                    </div>
                    <div>
                        <h4 className="text-xl font-bold text-slate-900 mb-2">For Executive Floors and Boardrooms</h4>
                        <p className="text-base text-justify">
                          Where high-stakes meetings occur, presentation matters. <Link to="/floor-standing-aroma-diffusers/" className="text-blue-600 font-medium underline hover:text-blue-800 transition-colors">Floor-standing aroma diffusers</Link> combine elegant design with powerful performance. These units serve as design elements while delivering targeted coverage for Executive reception areas, Boardrooms, VIP client spaces, and C-suite corridors.
                        </p>
                    </div>
                    <div>
                        <h4 className="text-xl font-bold text-slate-900 mb-2">For Departmental Zones</h4>
                        <p className="text-base text-justify">
                          Different departments have different needs. Creative teams may benefit from energizing fragrances while finance prefers focus-enhancing profiles. <Link to="/wall-mounted-and-ceiling-aroma-diffusers/" className="text-blue-600 font-medium underline hover:text-blue-800 transition-colors">Wall-mounted diffusers</Link> allow zone-specific scenting without affecting adjacent areas.
                        </p>
                    </div>
                </div>
              </div>

              {/* IMPLEMENTATION (H2) */}
              <div className="py-16 text-left bg-blue-600 rounded-[3rem] p-10 md:p-16 text-white">
                <h2 className="text-3xl md:text-4xl font-serif mb-8 tracking-tight text-white text-left uppercase font-bold">Strategic Implementation for Corporate Clients</h2>
                <div className="grid md:grid-cols-1 gap-6">
                    {[
                        { p: "Phase 1: Discovery", d: "Understanding brand identity, corporate culture, goals, and infrastructure." },
                        { p: "Phase 2: Fragrance Selection", d: "Selecting signature scents that align with identity and support objectives." },
                        { p: "Phase 3: System Design", d: "Designing for optimal coverage with minimal ongoing attention." },
                        { p: "Phase 4: Implementation", d: "Professional installation with minimal operational disruption." },
                        { p: "Phase 5: Ongoing Management", d: "Scheduled refills, maintenance, and 24/7 technical support." }
                    ].map((phase, i) => (
                        <div key={i} className="flex gap-4 items-start border-b border-white/20 pb-4">
                            <span className="font-black text-blue-200">0{i+1}</span>
                            <div>
                                <h5 className="font-bold">{phase.p}</h5>
                                <p className="text-sm opacity-80">{phase.d}</p>
                            </div>
                        </div>
                    ))}
                </div>
              </div>

              {/* WHY COOL MAX (H2) */}
              <div className="py-16 text-left">
                <h2 className="text-3xl md:text-4xl font-serif mb-6 tracking-tight text-slate-900 text-left">Why Leading Corporations Choose Cool Max</h2>
                <div className="grid md:grid-cols-2 gap-8">
                    <div>
                        <h4 className="font-bold text-slate-900 mb-2">Corporate Experience</h4>
                        <p className="text-sm">We work with facility management teams, respecting security protocols and operational schedules.</p>
                    </div>
                    <div>
                        <h4 className="font-bold text-slate-900 mb-2">Technical Excellence</h4>
                        <p className="text-sm">Engineered for continuous operation in demanding environments with consistent performance.</p>
                    </div>
                    <div>
                        <h4 className="font-bold text-slate-900 mb-2">Service Commitment</h4>
                        <p className="text-sm">Reliable infrastructure ensures scheduled refills and immediate technical response.</p>
                    </div>
                    <div>
                        <h4 className="font-bold text-slate-900 mb-2">Local Presence</h4>
                        <p className="text-sm">Based in Dubai, we understand the local market and climate considerations of the UAE.</p>
                    </div>
                </div>
              </div>

              {/* BOTTOM LINE (H2) */}
              <div className="py-16 text-left border-t border-slate-100">
                <h2 className="text-3xl md:text-4xl font-serif mb-6 tracking-tight text-slate-900 text-left uppercase">The Bottom Line</h2>
                <p className="text-justify mb-4">
                  Your workplace environment shapes everything—how clients perceive your organization, how employees perform their roles, how talent decides to stay or leave.
                </p>
                <p className="text-justify">
                  A professionally implemented scent system for office in UAE delivers measurable ROI through improved productivity, retention, and brand expression. For C-suite leaders, workplace scenting has moved from "nice to have" to "strategic imperative."
                </p>
              </div>

            </div>

            {/* SIDEBAR WIDGETS */}
            <aside className="lg:col-span-4 lg:sticky lg:top-32 h-fit text-left">
              <div className="bg-slate-950 rounded-[2.5rem] p-8 text-white shadow-xl text-left overflow-hidden relative">
                <div className="absolute top-0 right-0 w-32 h-32 bg-blue-600/20 blur-2xl rounded-full" />
                <h4 className="font-bold mb-6 uppercase text-xs tracking-widest text-left text-blue-400 relative z-10">Corporate Consult</h4>
                <p className="text-slate-400 text-sm leading-relaxed mb-8 text-justify relative z-10">
                  Ready to transform your corporate environment? Book a corporate consultation with our specialists.
                </p>
                <div className="space-y-4 relative z-10">
                  <a href={`https://wa.me/${whatsappNumber}`} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-3 bg-[#25D366] text-white w-full py-4 rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-white hover:text-slate-900 transition-all">
                    <ChatBubbleLeftRightIcon className="w-5 h-5" /> WhatsApp Experts
                  </a>
                  <Link to="/contact/" className="flex items-center justify-center gap-3 bg-white text-slate-900 w-full py-4 rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-blue-600 hover:text-white transition-all">
                    Book Consultation
                  </Link>
                </div>
              </div>

              <div className="mt-8 bg-white border border-slate-100 rounded-[2.5rem] p-8 shadow-sm text-left">
                <h4 className="font-bold mb-6 uppercase text-xs tracking-widest text-slate-400">Office Tech</h4>
                <div className="h-40 bg-slate-50 rounded-2xl mb-4 flex items-center justify-center overflow-hidden">
                  <img src={BlogHeroImg} alt="Scenting Engine" className="w-full h-full object-cover" />
                </div>
                <h5 className="font-serif text-lg mb-2">HVAC Scenting</h5>
                <p className="text-slate-500 text-xs font-light mb-6">Invisible whole-building coverage for corporate HQ.</p>
                <Link to="/hvac-scenting-solutions/" className="text-[10px] font-black uppercase text-blue-600 flex items-center gap-2 hover:gap-3 transition-all">
                  View Solutions <ArrowRightIcon className="w-3 h-3" />
                </Link>
              </div>
            </aside>
          </div>
        </section>

        {/* ================= FINAL CTA (H2) ================= */}
        <section className="pb-32 px-6 text-center">
          <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} className="max-w-[1200px] mx-auto bg-slate-900 rounded-[4rem] p-16 md:p-24 text-center text-white relative shadow-2xl overflow-hidden">
            <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/10 blur-3xl rounded-full -translate-y-1/2 translate-x-1/2" />
            
            <h2 className="text-4xl md:text-6xl font-serif mb-8 tracking-tighter leading-tight relative z-10 text-center uppercase font-bold text-white text-balance">
              Strategic Imperative <br />for Workplace
            </h2>
            <p className="text-xl text-slate-400 mb-12 max-w-3xl mx-auto font-light leading-relaxed relative z-10 text-center font-sans">
              Discover how strategic scenting can elevate your workplace. Deploy the right scent system for office in UAE.
            </p>
            
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 relative z-10 w-full max-w-2xl mx-auto">
  <a 
    href={`https://wa.me/${whatsappNumber}`} 
    target="_blank" 
    rel="noopener noreferrer" 
    className="flex-1 flex items-center justify-center gap-3 bg-blue-600 text-white w-full py-6 rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-white hover:text-slate-900 transition-all shadow-xl border border-transparent"
  >
    <ChatBubbleLeftRightIcon className="w-5 h-5" /> 
    <span className="whitespace-nowrap">WhatsApp Strategy Team</span>
  </a>

  <Link 
    to="/contact/" 
    className="flex-1 flex items-center justify-center gap-3 bg-white text-slate-900 w-full py-6 rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-blue-600 hover:text-white transition-all border border-white shadow-xl"
  >
    <span className="whitespace-nowrap">Request Corporate Audit</span>
    <ArrowRightIcon className="w-5 h-5" />
  </Link>
</div>
          </motion.div>
        </section>

      </div>
    </div>
  );
}