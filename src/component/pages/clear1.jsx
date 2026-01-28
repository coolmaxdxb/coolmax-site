import React from "react";
import { Link } from "react-router-dom"; 
import { motion } from "framer-motion";
import { 
  SwatchIcon, 
  WrenchScrewdriverIcon, 
  HeartIcon,
  ArrowLongRightIcon,
  SparklesIcon,
  BuildingOfficeIcon,
  HomeModernIcon,
  CpuChipIcon,
  ChatBubbleBottomCenterTextIcon
} from "@heroicons/react/24/outline";

/* ================= IMAGE IMPORTS ================= */
import D100Black from "../../asset/productimg/Model D100/Model D100 - 1.jpeg"; 
import M41BBlack from "../../asset/productimg/Model M41-B/Model M41-B - 1.jpeg"; 
import VS160Black from "../../asset/productimg/Model VS160/Model VS160 - 2.jpeg"; 
import H11Black from "../../asset/productimg/Model H11-A-2026/Model H11-A-2026 - 1.jpeg"; 

const ProcessAndInsights = () => {
  return (
    <div className="bg-[#020617] font-sans selection:bg-indigo-500 selection:text-white overflow-hidden text-slate-300">
      
      {/* ================= SECTION 1: HOW IT WORKS ================= */}
      <section className="relative py-24 lg:py-32 px-6">
        {/* Ambient Background Gradient */}
        <div className="absolute top-0 left-0 w-full h-[800px] bg-gradient-to-b from-indigo-900/10 to-transparent pointer-events-none"></div>
        <div className="absolute top-[-10%] right-[-10%] w-[600px] h-[600px] bg-cyan-900/10 rounded-full blur-[120px] pointer-events-none" />

        <div className="max-w-[1400px] mx-auto relative z-10">
          
          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-24 gap-8 border-b border-white/5 pb-8">
            <div className="max-w-3xl">
              <span className="text-xs font-extrabold text-indigo-400 uppercase tracking-[0.2em] mb-4 block">
                The Process
              </span>
              <h2 className="text-5xl md:text-7xl font-serif font-bold text-white leading-[1] tracking-tight mb-4">
                How Our Scent <br />
                <span className="italic font-light text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400">Solutions Work</span>
              </h2>
              <p className="text-xl font-medium text-slate-400 tracking-tight">
                Simple, Clear, and Effective
              </p>
            </div>
          </div>

          {/* Steps Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
            {/* Connecting Line (Desktop) */}
            <div className="absolute top-[3rem] left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent hidden lg:block -z-10"></div>

            {[
              { 
                title: "Consultation", 
                desc: "Understand your space and scenting goals", 
                icon: ChatBubbleBottomCenterTextIcon 
              },
              { 
                title: "Solution Design", 
                desc: "Choose the right diffuser and fragrance", 
                icon: SwatchIcon 
              },
              { 
                title: "Installation", 
                desc: "Professional setup and configuration", 
                icon: WrenchScrewdriverIcon 
              },
              { 
                title: "Ongoing Support", 
                desc: "Refills, maintenance, and adjustments", 
                icon: HeartIcon 
              }
            ].map((step, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="group relative bg-white/[0.02] p-8 rounded-[2.5rem] border border-white/5 hover:border-indigo-500/30 hover:bg-white/[0.04] transition-all duration-500 flex flex-col items-center text-center backdrop-blur-sm"
              >
                <div className="w-20 h-20 bg-white/5 rounded-full border border-white/10 flex items-center justify-center mb-6 text-indigo-400 group-hover:text-white group-hover:scale-110 group-hover:border-indigo-500 transition-all duration-500 relative z-10 group-hover:bg-indigo-600 shadow-lg shadow-indigo-900/20">
                  <step.icon className="w-8 h-8" />
                </div>
                
                <h3 className="text-xl font-bold text-white mb-3 tracking-tight font-serif">{step.title}</h3>
                
                <p className="text-slate-400 text-sm font-medium leading-relaxed group-hover:text-slate-300 transition-colors">
                  {step.desc}
                </p>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* ================= SECTION 2: INSIGHTS ================= */}
      <section className="relative py-24 lg:py-32 bg-gradient-to-br from-[#0B0F19] via-indigo-950/20 to-[#0B0F19] px-6 rounded-t-[3rem] md:rounded-t-[5rem] overflow-hidden border-t border-white/5">
        
        {/* Atmosphere */}
        <div className="absolute inset-0 opacity-[0.03] bg-[url('https://grainy-gradients.vercel.app/noise.svg')] pointer-events-none mix-blend-overlay"></div>
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-indigo-600/10 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-cyan-600/10 rounded-full blur-[120px] pointer-events-none" />

        <div className="max-w-[1400px] mx-auto relative z-10">
          
          {/* Header */}
          <div className="text-center mb-20">
             <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-indigo-500/30 bg-indigo-900/20 backdrop-blur-sm mb-6">
                <SparklesIcon className="w-4 h-4 text-indigo-300" />
                <span className="text-xs font-bold uppercase tracking-widest text-indigo-200">Blog & Resources</span>
             </div>
             
             <h2 className="text-4xl md:text-6xl font-serif font-bold mb-6 leading-tight text-white tracking-tight">
               Insights from the World of <br/>
               <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-300">Scent Marketing.</span>
             </h2>
             <p className="text-xl font-medium text-slate-400 mb-4 tracking-tight">
               Learn, Explore, and Make Better Decisions
             </p>
             <p className="text-indigo-400 text-sm font-bold uppercase tracking-widest">
               Our blog shares practical insights on:
             </p>
          </div>

          {/* Insights Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
             {[
               { title: "Choosing the right scent diffuser machine", img: D100Black, icon: CpuChipIcon },
               { title: "Benefits of HVAC scent diffusers", img: M41BBlack, icon: BuildingOfficeIcon },
               { title: "How scent impacts customer experience", img: VS160Black, icon: SparklesIcon },
               { title: "Selecting the best home fragrance system", img: H11Black, icon: HomeModernIcon }
             ].map((item, idx) => (
               <motion.div 
                 key={idx}
                 initial={{ opacity: 0, y: 20 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 viewport={{ once: true }}
                 transition={{ delay: idx * 0.1 }}
                 className="group relative bg-white/[0.02] rounded-[2rem] border border-white/5 hover:border-indigo-500/30 overflow-hidden transition-all duration-500 shadow-lg hover:shadow-indigo-900/20"
               >
                  {/* Image Area */}
                  <div className="relative aspect-square overflow-hidden bg-white/[0.02] p-8 group-hover:bg-white/[0.04] transition-colors">
                     <img 
                       src={item.img} 
                       alt={item.title} 
                       className="w-full h-full object-contain opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 mix-blend-lighten" 
                     />
                     <div className="absolute top-4 right-4 p-2 bg-indigo-950/80 rounded-full backdrop-blur-sm border border-indigo-500/20 group-hover:bg-indigo-600 transition-colors">
                        <item.icon className="w-4 h-4 text-indigo-200 group-hover:text-white" />
                     </div>
                  </div>

                  {/* Text Area */}
                  <div className="p-8">
                      <h3 className="text-lg font-bold text-white mb-4 group-hover:text-indigo-300 transition-colors leading-snug font-serif">
                        {item.title}
                      </h3>
                      <div className="flex items-center gap-2 text-[10px] font-extrabold text-indigo-400 uppercase tracking-widest group-hover:gap-3 transition-all">
                        Read More <ArrowLongRightIcon className="w-4 h-4" />
                      </div>
                  </div>
               </motion.div>
             ))}
          </div>

          <div className="mt-16 text-center">
            <p className="text-slate-400 font-medium text-lg tracking-wide italic">
              Stay informed and make confident decisions.
            </p>
          </div>

        </div>
      </section>

      {/* ================= SECTION 3: CTA ================= */}
      <section className="relative py-24 lg:py-32 px-6">
        <div className="max-w-[1400px] mx-auto">
          {/* CTA Background */}
          <div className="relative bg-gradient-to-br from-indigo-900/20 via-[#0B0F19] to-indigo-900/10 rounded-[3rem] p-12 md:p-20 overflow-hidden text-center border border-white/10 shadow-2xl backdrop-blur-sm">
              
             {/* Decor */}
             <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] pointer-events-none mix-blend-overlay"></div>
             
             <div className="relative z-10 max-w-4xl mx-auto">
               <h2 className="text-4xl md:text-6xl font-serif font-bold text-white mb-8 leading-tight tracking-tight">
                 Let’s Create a Fresher <br/>
                 <span className="italic font-light text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400">Environment Together.</span>
               </h2>
               
               <p className="text-slate-300 text-lg font-light leading-relaxed mb-8">
                 Whether you are looking for a home scent diffuser, a hotel scent diffuser, or a powerful commercial scent machine, Cool Max has the right solution for you.
               </p>
               
               <p className="text-slate-400 text-lg font-light leading-relaxed mb-12 italic border-l-2 border-indigo-500 pl-4 inline-block">
                 Our team will help you select the right system, plan installation, and ensure long-term performance.
               </p>

               <div className="flex flex-col items-center gap-8">
                   <p className="text-indigo-400 text-xs font-extrabold uppercase tracking-[0.2em]">
                     Looking for professional scent solutions in the UAE?
                   </p>
                   
                   <Link to="/contact">
                     <button className="px-12 py-6 bg-white text-[#020617] rounded-full font-bold uppercase tracking-widest text-xs hover:bg-indigo-50 transition-all shadow-[0_0_40px_-10px_rgba(99,102,241,0.5)] hover:-translate-y-1 flex items-center gap-3">
                       <span></span> Contact Cool Max today for a consultation
                     </button>
                   </Link>
               </div>
             </div>

          </div>
        </div>
      </section>

    </div>
  );
};

export default ProcessAndInsights;