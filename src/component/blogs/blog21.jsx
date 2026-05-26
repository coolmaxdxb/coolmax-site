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
 
  CloudIcon,
  HeartIcon,
  UserGroupIcon,
  BriefcaseIcon,

} from "@heroicons/react/24/outline";

// --- ASSET IMPORTS ---
import BlogHeroImg from "../../asset/blogimg/blog21.webp"; 

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 }
};

export default function OfficeAromaSolutionsBlog() {
  const whatsappNumber = "971509282702";

  // --- SEO Implementation & Scroll Fix ---
  useEffect(() => {
    window.scrollTo(0, 0);

    document.title = "Aroma Diffuser Solutions in Dubai for Modern Office Workspaces";
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute("content", "Discover how modern offices in Dubai use aroma diffuser solutions, HVAC scent systems, & commercial aroma diffusers to improve workplace atmosphere & employee experience.");
    }
    
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', 'https://www.coolmaxscent.com/blog/aroma-diffuser-solutions-in-dubai-for-offices/');
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
              <BriefcaseIcon className="w-4 h-4 text-blue-600" />
              <span className="text-blue-700 text-[10px] font-black uppercase tracking-[0.3em]">Workplace Freshness Guide</span>
            </div>
            
            <h1 className="text-4xl md:text-7xl font-serif text-slate-900 tracking-tighter leading-[1.1] mb-8 text-left">
              How Modern Offices in Dubai Use Different <span className="text-blue-600">Aroma Diffuser Solutions</span> Across Every Workspace
            </h1>

            <p className="text-xl md:text-2xl text-slate-500 font-light leading-relaxed mb-10 text-left">
              If you’ve ever stepped into a premium corporate office in Dubai, you may have noticed something beyond the sleek interiors and advanced technology. The workspace feels calm, professional, and welcoming.
            </p>
          </motion.div>
        </section>

        {/* ================= INTRODUCTION SECTION ================= */}
        <section className="pb-24 px-6 lg:px-16 max-w-[1400px] mx-auto text-left">
          <div className="grid lg:grid-cols-12 gap-16">
            <div className="lg:col-span-8 space-y-8 text-lg text-slate-600 font-light leading-relaxed">
              <p className="text-justify">
                One of the most powerful reasons behind that experience is fragrance. Fragrance quietly influences how employees feel, how clients perceive the business, and how comfortable a workspace becomes throughout the day. Today, businesses across the UAE are investing in <strong>Aroma diffuser solutions in Dubai</strong> to enhance workplace atmosphere, employee productivity, and overall office experience. From reception areas and open workspaces to executive cabins and conference halls, every office zone requires a different scenting strategy. This is where professional office scent solutions and advanced fragrance diffusion technology play a crucial role.
              </p>

              {/* WHY IT MATTERS (H2) */}
              <motion.div {...fadeInUp} className="py-12 border-t border-slate-100">
                <h2 className="text-3xl md:text-4xl font-serif text-slate-900 mb-6 text-left">Why Aroma Diffuser Solutions Matter in Modern Offices</h2>
                <p className="mb-8 text-justify">
                  Modern offices are designed to support productivity, creativity, and employee well-being. Companies today want work environments that offer comfortable indoor spaces, professional ambiance, and reduced stress levels. Because of this, organizations are increasingly adopting <strong>scent marketing for offices</strong> using customized commercial aroma diffusers.
                </p>
                <h3 className="text-xl font-bold text-slate-900 mb-6 text-left">A well-planned workplace fragrance strategy helps businesses:</h3>
                <div className="grid md:grid-cols-2 gap-4">
                   {[
                     "Improve employee mood and concentration",
                     "Create a more welcoming environment for clients",
                     "Enhance corporate brand perception",
                     "Reduce unwanted odors",
                     "Promote a memorable office experience"
                   ].map((benefit, i) => (
                     <div key={i} className="flex gap-3 items-center p-4 bg-slate-50 rounded-xl border border-slate-100">
                        <CheckCircleIcon className="w-5 h-5 text-blue-600" />
                        <span className="text-sm font-medium text-slate-700">{benefit}</span>
                     </div>
                   ))}
                </div>
                <p className="mt-8 text-justify">Rather than using one fragrance system throughout the building, modern businesses deploy different <strong>aroma diffuser for offices</strong> based on each workspace requirement.</p>
              </motion.div>

              {/* 1. RECEPTION (H2) */}
              <motion.div {...fadeInUp} className="space-y-6">
                <h2 className="text-3xl font-serif text-slate-900 text-left">1. Reception & Lobby</h2>
                <p className="text-sm font-bold text-blue-600 uppercase tracking-widest mb-1">Best Solution: <Link to="/" className="underline">Floor-Standing Aroma Diffuser</Link></p>
                <p className="text-justify">
                  The reception area creates the first impression. Professional <strong>Floor-standing aroma diffuser</strong> systems are ideal for lobbies because they provide excellent fragrance coverage while complementing modern office interiors.
                </p>
                <div className="bg-blue-50 p-6 rounded-2xl border border-blue-100">
                  <h4 className="font-bold text-slate-900 mb-2">Recommended Products:</h4>
                  <ul className="space-y-2 text-slate-700">
                    <li>• <Link to="/" className="text-blue-600 font-semibold underline">AeroPillar Diffuser</Link></li>
                    <li>• <Link to="/" className="text-blue-600 font-semibold underline">NanoPillar Diffuser</Link></li>
                    <li>• <Link to="/" className="text-blue-600 font-semibold underline">Titan Diffuser</Link></li>
                  </ul>
                </div>
              </motion.div>

              {/* 2. OPEN WORKSPACE (H2) */}
              <motion.div {...fadeInUp} className="py-12 border-t border-slate-100">
                <h2 className="text-3xl font-serif text-slate-900 text-left">2. Open Workspace</h2>
                <p className="text-sm font-bold text-blue-600 uppercase tracking-widest mb-1">Best Solution: <Link to="/" className="underline">HVAC Aroma Diffuser</Link></p>
                <p className="text-justify">
                  Open office areas require uniform fragrance across expansive floor plans. Large corporate environments often rely on <strong>HVAC aroma diffuser</strong> systems connected directly to central air conditioning to maintain consistent workplace comfort and employee well-being.
                </p>
                <div className="bg-blue-50 p-6 rounded-2xl border border-blue-100">
                  <h4 className="font-bold text-slate-900 mb-2">Recommended Products:</h4>
                  <ul className="space-y-2 text-slate-700">
                    <li>• <Link to="/" className="text-blue-600 font-semibold underline">AeroBlack Pro Diffuser</Link></li>
                    <li>• <Link to="/" className="text-blue-600 font-semibold underline">AirPulse 150</Link></li>
                  </ul>
                </div>
              </motion.div>

              {/* 3. MEETING ROOMS (H2) */}
              <motion.div {...fadeInUp} className="space-y-6 py-12 border-t border-slate-100">
                <h2 className="text-3xl font-serif text-slate-900 text-left">3. Meeting Rooms</h2>
                <p className="text-sm font-bold text-blue-600 uppercase tracking-widest mb-1">Best Solution: <Link to="/" className="underline">Commercial Aroma Diffusers</Link></p>
                <p className="text-justify">
                  Meeting rooms benefit from subtle fragrance that promotes focus. Professional <strong>Commercial aroma diffusers</strong> offer precise scent control suitable for medium-sized enclosed rooms, reinforcing brand perception and quality.
                </p>
                <div className="bg-blue-50 p-6 rounded-2xl border border-blue-100">
                  <h4 className="font-bold text-slate-900 mb-2">Recommended Products:</h4>
                  <ul className="space-y-2 text-slate-700">
                    <li>• <Link to="/" className="text-blue-600 font-semibold underline">AeroBlack Med Diffuser</Link></li>
                    <li>• <Link to="/" className="text-blue-600 font-semibold underline">MistBox X Diffuser</Link></li>
                  </ul>
                </div>
              </motion.div>

              {/* 4. EXECUTIVE CABINS (H2) */}
              <motion.div {...fadeInUp} className="py-12 border-t border-slate-100">
                <h2 className="text-3xl font-serif text-slate-900 text-left">4. Executive Cabins</h2>
                <p className="text-sm font-bold text-blue-600 uppercase tracking-widest mb-1">Best Solution: <Link to="/" className="underline">Desktop Aroma Diffusers</Link></p>
                <p className="text-justify">
                  Executive cabins require a personalized experience. Compact <strong>Desktop aroma diffusers</strong> like the <strong><Link to="/" className="text-blue-600 font-semibold underline">AromaDesk</Link></strong> fit neatly on desks and allow for customized fragrance preferences in enclosed spaces.
                </p>
              </motion.div>

              {/* 5. WAITING LOUNGE (H2) */}
              <motion.div {...fadeInUp} className="space-y-6 py-12 border-t border-slate-100">
                <h2 className="text-3xl font-serif text-slate-900 text-left">5. Waiting Lounge</h2>
                <p className="text-sm font-bold text-blue-600 uppercase tracking-widest mb-1">Best Solution: <Link to="/" className="underline">Floor-Standing Aroma Diffuser</Link></p>
                <p className="text-justify">
                  Waiting lounges should help visitors feel relaxed. Floor-standing systems like the <strong><Link to="/" className="text-blue-600 font-semibold underline">NanoPillar Diffuser</Link></strong> or <strong><Link to="/" className="text-blue-600 font-semibold underline">AeroPillar Diffuser</Link></strong> create a refined atmosphere that helps visitors feel at ease.
                </p>
              </motion.div>

              {/* 6. CONFERENCE HALL (H2) */}
              <motion.div {...fadeInUp} className="py-12 border-t border-slate-100">
                <h2 className="text-3xl font-serif text-slate-900 text-left">6. Conference Hall</h2>
                <p className="text-sm font-bold text-blue-600 uppercase tracking-widest mb-1">Best Solution: <Link to="/" className="underline">Large Area & HVAC Aroma Diffusers</Link></p>
                <p className="text-justify">
                  Conference halls host large sessions and seminars. Powerful <strong>Large Area & HVAC Aroma Diffusers</strong> (such as the <strong><Link to="/" className="text-blue-600 font-semibold underline">AeroBlack Pro Diffuser</Link></strong> or <strong><Link to="/" className="text-blue-600 font-semibold underline">AirPulse 150</Link></strong>) ensure uniform distribution and a premium event atmosphere.
                </p>
              </motion.div>

              {/* 7. PANTRY (H2) */}
              <motion.div {...fadeInUp} className="space-y-6 py-12 border-t border-slate-100">
                <h2 className="text-3xl font-serif text-slate-900 text-left">7. Pantry & Breakout Area</h2>
                <p className="text-sm font-bold text-blue-600 uppercase tracking-widest mb-1">Best Solution: <Link to="/" className="underline">Wall-Mounted Aroma Diffuser</Link></p>
                <p className="text-justify">
                  Pantries require odor management to neutralize food smells. Professional <strong>Wall-Mounted aroma diffuser</strong> solutions like the <strong><Link to="/" className="text-blue-600 font-semibold underline">CeilAir Pro Diffuser</Link></strong> or <strong><Link to="/" className="text-blue-600 font-semibold underline">AeroMax Pro</Link></strong> help maintain freshness while conserving surface space.
                </p>
              </motion.div>

              {/* STRATEGIC PLANNING (H2) */}
              <motion.div {...fadeInUp} className="py-12 border-t border-slate-100">
                <h2 className="text-3xl font-serif text-slate-900 text-left">Why Strategic Scent Planning Matters for Offices</h2>
                <p className="text-justify">
                  Modern office environments are no longer designed only for work — they are designed for experience, comfort, and employee well-being. Professional <strong>Aroma diffuser solutions in Dubai</strong> help companies create environments that support productivity, strengthen brand identity, and enhance workplace well-being.
                </p>
              </motion.div>

            </div>

            {/* SIDEBAR */}
            <aside className="lg:col-span-4 lg:sticky lg:top-32 h-fit">
              <div className="bg-slate-900 rounded-[2.5rem] p-8 text-white shadow-xl">
                <h4 className="font-bold mb-6 uppercase text-xs tracking-widest text-blue-400">Office Scent Audit</h4>
                <p className="text-sm text-slate-300 mb-8 text-left">
                  Forward-thinking businesses are moving beyond basic air fresheners and investing in complete workplace fragrance solutions.
                </p>
                <div className="space-y-4">
                  <a href={`https://wa.me/${whatsappNumber}`} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-3 bg-blue-600 text-white w-full py-4 rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-white hover:text-blue-600 transition-all text-center">
                    <ChatBubbleLeftRightIcon className="w-5 h-5" /> WhatsApp Support
                  </a>
                </div>
              </div>
            </aside>
          </div>
        </section>

        {/* ================= STRATEGIC BENEFITS SECTION ================= */}
        <section className="py-24 bg-slate-50 px-6 lg:px-16 text-left">
          <div className="max-w-[1400px] mx-auto">
            <h2 className="text-3xl md:text-5xl font-serif text-slate-900 mb-16 tracking-tighter text-left">Benefits of Workplace <br/><span className="text-blue-600 italic font-light">Fragrance Solutions</span></h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[
                  { t: "Better Productivity", d: "A comfortable environment can improve focus and efficiency.", i: <AdjustmentsHorizontalIcon /> },
                  { t: "Reduced Stress", d: "Pleasant fragrances help employees feel more relaxed during the day.", i: <FaceSmileIcon /> },
                  { t: "Stronger Branding", d: "Visitors associate a refined scent with professionalism and quality.", i: <SparklesIcon /> },
                  { t: "Enhanced Client Experience", d: "Creates a welcoming atmosphere during important meetings and visits.", i: <UserGroupIcon /> },
                  { t: "Seamless Integration", d: "Scenting reinforces corporate branding strategies silently.", i: <CloudIcon /> },
                  { t: "Improved Well-being", d: "Fresh and clean-smelling interiors support overall mental health.", i: <HeartIcon /> }
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

        {/* ================= CONCLUSION ================= */}
        <section className="py-24 px-6 lg:px-16 border-t border-slate-100 text-left">
           <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-serif text-slate-900 mb-6 uppercase text-left">Conclusion</h2>
              <p className="text-lg text-slate-600 font-light leading-relaxed mb-8 text-justify">
                Every workspace inside a modern office serves a different purpose, and each area requires a specialized scenting solution. From advanced HVAC aroma diffuser systems in open workspaces to elegant Floor-standing aroma diffuser units in lobbies and lounges, professional fragrance planning transforms ordinary offices into productive and memorable environments. <strong><Link to="/" className="text-blue-600 font-medium">Cool Max</Link></strong> helps businesses choose the ideal aroma diffuser systems based on office size, employee density, coverage requirements, interior layout, and brand experience goals. Whether you manage a corporate office, coworking space, clinic, or premium commercial workspace, the right fragrance strategy can significantly improve how employees and clients experience your business.
              </p>
              <div className="relative">
                <div className="bg-slate-100 rounded-[4rem] p-12 overflow-hidden shadow-inner text-center">
                  <img src={BlogHeroImg} alt="Modern Office Scenting" className="w-full h-auto rounded-[2rem] shadow-2xl mx-auto max-w-2xl" />
                </div>
              </div>
           </div>
        </section>

        {/* ================= FINAL CTA ================= */}
        <section className="pb-32 px-6">
          <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} className="max-w-[1200px] mx-auto bg-blue-600 rounded-[4rem] p-16 md:p-24 text-center text-white relative shadow-2xl overflow-hidden">
            <div className="absolute top-0 right-0 w-96 h-96 bg-blue-50/10 blur-3xl rounded-full -translate-y-1/2 translate-x-1/2" />
            <h2 className="text-4xl md:text-6xl font-serif mb-8 tracking-tighter leading-tight relative z-10 uppercase font-bold text-white text-center">
              Elevate Your <br />Office Workspace
            </h2>
            <p className="text-xl text-blue-100 mb-12 max-w-3xl mx-auto font-light leading-relaxed relative z-10 text-center">
              Contact Cool Max Scent today to design a tailored fragrance experience for your workplace.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 relative z-10">
              <a href={`https://wa.me/${whatsappNumber}`} target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto px-12 py-6 bg-white text-blue-600 rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-slate-900 hover:text-white transition-all shadow-xl flex items-center justify-center gap-3">
                <ChatBubbleLeftRightIcon className="w-5 h-5" /> WhatsApp Support
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