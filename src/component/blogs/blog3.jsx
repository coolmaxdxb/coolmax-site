import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import { 
  SparklesIcon, 
  ChatBubbleLeftRightIcon, 
  ArrowRightIcon,
  CheckCircleIcon,
  ShoppingBagIcon,
  BuildingOfficeIcon,
  UserGroupIcon,
  HeartIcon
} from "@heroicons/react/24/outline";

// --- ASSET IMPORTS ---
import BlogHeroImg from "../../asset/productimg/CMwebpimg/AeroBlack Med diffuser/2.webp"; 


export default function ScentMarketingBlog() {
  const whatsappNumber = "971509282702";

  // --- SEO Implementation & Scroll Fix ---
  useEffect(() => {
    window.scrollTo(0, 0);

    document.title = "Scent Marketing 101 Solutions in UAE | Cool Max Scent";
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute("content", "Discover how scent marketing solutions in UAE help hotels and businesses increase sales using commercial scent diffusers and HVAC scent systems.");
    }
    
    // Canonical link handling
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', 'https://www.coolmaxscent.com/blog/scent-marketing-101-uae');
  }, []);

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  return (
    <div className="relative min-h-screen bg-white text-slate-900 font-sans selection:bg-blue-100 overflow-x-hidden text-left pt-16">
      
      {/* ================= GLOBAL BACKGROUND ================= */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-0 right-0 w-[1000px] h-[1000px] bg-slate-50 rounded-full blur-[150px]" />
        <div className="absolute bottom-0 left-0 w-[800px] h-[800px] bg-blue-50/30 rounded-full blur-[120px]" />
      </div>

      <div className="relative z-10">
        
        {/* ================= HERO SECTION (H1) ================= */}
        <section className="pt-20 pb-16 px-6 lg:px-16 max-w-[1400px] mx-auto text-left">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="max-w-5xl text-left">
            <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-blue-50 border border-blue-100 mb-8 text-left">
              <SparklesIcon className="w-4 h-4 text-blue-600" />
              <span className="text-blue-700 text-[10px] font-black uppercase tracking-[0.3em]">Marketing Mastery</span>
            </div>
            
            <h1 className="text-4xl md:text-7xl font-serif text-slate-900 tracking-tighter leading-[1.1] mb-8 text-left">
              Scent Marketing 101: How Dubai Businesses Use <br />
              <span className="italic text-slate-400 font-light text-left">Fragrance to Increase Sales</span>
            </h1>

            <p className="text-xl md:text-2xl text-slate-600 font-light leading-relaxed mb-10 text-left">
              Walk into a well-designed space in Dubai and you’ll notice something immediately. Before the lighting, before the interiors, even before the staff interaction — the air feels different. Calm. Fresh. Inviting.
            </p>
          </motion.div>
        </section>

        {/* ================= INTRODUCTION ================= */}
        <section className="pb-24 px-6 lg:px-16 max-w-[1400px] mx-auto text-left">
          <div className="grid lg:grid-cols-12 gap-16 text-left">
            <div className="lg:col-span-8 space-y-8 text-lg text-slate-600 font-light leading-relaxed text-left">
              <motion.p {...fadeInUp} className="text-justify text-left">
                This is not accidental. It is intentional. This is scent marketing at work. Across retail stores, hotels, offices, and commercial buildings, businesses in the UAE are using <Link to="/scent-marketing-solutions/" className="text-blue-600 font-medium underline hover:text-blue-800 transition-colors">Scent Marketing Solutions in UAE</Link> to influence customer mood, improve brand perception, and ultimately increase sales — without saying a single word.
              </motion.p>

              {/* WHAT IS SCENT MARKETING (H2) */}
              <motion.div {...fadeInUp} className="py-10 text-left text-left">
                <h2 className="text-3xl md:text-4xl font-serif mb-6 tracking-tight text-slate-900 text-left text-left">What Is Scent Marketing?</h2>
                <p className="mb-6 text-justify text-left text-left">
                  Here's the simplest way to put it: scent marketing is when businesses use fragrance on purpose, not by accident. Think about it. Bakeries have always smelled like bread. Coffee shops like coffee. But that was just a byproduct of what they do. Today, hotels in Dubai aren't leaving it to chance. They're deciding exactly what you'll smell the moment you step through those revolving doors.
                </p>
                <div className="p-8 bg-blue-50 border-l-4 border-blue-400 rounded-r-2xl text-left text-left">
                   <p className="text-blue-900 font-bold mb-2 text-left">The Science of Smell:</p>
                   <p className="text-blue-800 text-base text-left">Your nose is connected to the part of your brain that handles memory and emotion. No other sense works quite like that. You can forget what someone wore, what music was playing, even what they looked like. But a smell can transport you back twenty years in an instant.</p>
                </div>
              </motion.div>

              {/* WHY SCENT MARKETING WORKS (H2) */}
              <motion.div {...fadeInUp} className="py-10 text-left text-left text-left">
                <h2 className="text-3xl md:text-4xl font-serif mb-6 tracking-tight text-slate-900 text-left text-left">Why Scent Marketing Works So Well</h2>
                <p className="mb-6 text-left text-left">People may forget what they saw or heard, but they rarely forget how a place made them feel. Studies consistently show that pleasant scents can:</p>
                <div className="grid md:grid-cols-2 gap-4 mb-8 text-left text-left">
                  {[
                    "Increase the time customers spend inside a store",
                    "Improve brand recall",
                    "Create a feeling of comfort and trust",
                    "Encourage repeat visits",
                    "Positively influence purchasing decisions"
                  ].map((item, i) => (
                    <div key={i} className="flex gap-3 items-start text-base text-slate-700 bg-slate-50 p-4 rounded-xl text-left text-left">
                      <CheckCircleIcon className="w-5 h-5 text-blue-600 shrink-0" /> {item}
                    </div>
                  ))}
                </div>
                <p className="text-justify font-light text-left text-left">
                  In commercial environments, even small improvements in customer experience can lead to noticeable business growth. This is why more brands are investing in Aroma Diffusion Solutions instead of relying on basic air fresheners or inconsistent manual methods.
                </p>
              </motion.div>

              {/* HOW DUBAI BUSINESSES USE (H2) */}
              <motion.div {...fadeInUp} className="bg-slate-900 rounded-[3rem] p-10 md:p-16 text-white mt-16 shadow-2xl relative overflow-hidden text-left text-left">
                <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/10 blur-3xl rounded-full text-left" />
                <h2 className="text-3xl md:text-4xl font-serif mb-8 tracking-tight relative z-10 text-left text-left text-white">How Dubai Businesses Use Scent Marketing Differently</h2>
                <p className="text-slate-400 mb-10 relative z-10 text-left text-left">Dubai is a city where experience matters. From luxury malls to five-star hotels, every detail is carefully curated — including fragrance.</p>
                
                <div className="space-y-8 relative z-10 text-left text-left text-left">
                  <div className="flex gap-6 items-start text-left text-left text-left">
                    <ShoppingBagIcon className="w-10 h-10 text-blue-400 shrink-0" />
                    <div className="text-left text-left">
                      <h4 className="text-xl font-bold text-left text-white">Retail & Malls</h4>
                      <p className="text-slate-400 text-base text-left text-left text-justify">Retail brands in Dubai use <Link to="/commercial-aroma-diffusers/" className="text-blue-400 font-medium underline hover:text-blue-300 transition-colors">Commercial Scent Diffusers</Link> to create a mood that matches their identity. Soft floral notes for fashion stores, woody tones for men’s sections, fresh citrus for lifestyle brands.</p>
                    </div>
                  </div>
                  <div className="flex gap-6 items-start text-left text-left text-left">
                    <UserGroupIcon className="w-10 h-10 text-blue-400 shrink-0" />
                    <div className="text-left text-left text-left text-left">
                      <h4 className="text-xl font-bold text-left text-white">Hotels & Hospitality</h4>
                      <p className="text-slate-400 text-base text-left text-left text-justify">Hotels rely heavily on Hotel Scent Diffuser Systems to create a strong first impression. Lobby scents are often designed to feel warm, premium, and calming. guests associate that fragrance with comfort and quality.</p>
                    </div>
                  </div>
                  <div className="flex gap-6 items-start text-left text-left text-left">
                    <BuildingOfficeIcon className="w-10 h-10 text-blue-400 shrink-0" />
                    <div className="text-left text-left text-left text-left">
                      <h4 className="text-xl font-bold text-left text-white">Offices & Corporate Spaces</h4>
                      <p className="text-slate-400 text-base text-left text-left text-justify">Corporate offices use scent marketing to improve focus and reduce stress. Clean, light fragrances help create a more pleasant working environment for employees and visitors alike.</p>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* MATCHING SCENT TO SPACE (H2) */}
              <motion.div {...fadeInUp} className="py-16 text-left text-left text-left">
                <h2 className="text-3xl md:text-4xl font-serif mb-8 tracking-tight text-slate-900 text-left text-left">Matching the Right Scent to the Right Space</h2>
                <p className="mb-8 text-left text-left">Not every fragrance works everywhere. This is where experience and planning matter.</p>
                <div className="grid md:grid-cols-2 gap-6 text-left text-left">
                  {[
                    { title: "Gyms & fitness centers", desc: "Citrus and mint-based scents for energy" },
                    { title: "Spas & wellness centers", desc: "Lavender, and herbal notes" },
                    { title: "Retail stores", desc: "Light florals, woods, or fresh blends" },
                    { title: "Restaurants & cafés", desc: "Warm, subtle notes that do not compete with food" },
                    { title: "Hotels", desc: "Signature scents that reflect luxury and comfort" }
                  ].map((item, i) => (
                    <div key={i} className="p-6 border border-slate-100 rounded-2xl bg-white shadow-sm hover:border-blue-200 transition-all text-left">
                       <h4 className="font-bold text-slate-900 text-base uppercase tracking-wider mb-2 text-left">{item.title}</h4>
                       <p className="text-slate-500 text-sm text-left">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* TECHNOLOGY (H2) */}
              <motion.div {...fadeInUp} className="py-16 text-left border-t border-slate-100 text-left">
                <h2 className="text-3xl md:text-4xl font-serif mb-6 tracking-tight text-slate-900 text-left text-left">The Technology Behind Professional Scenting</h2>
                <p className="mb-6 text-justify text-left text-left">Effective scent marketing depends on the right equipment. Household plug-in air fresheners are not designed for commercial use. They lack consistency, control, and coverage.</p>
                <p className="mb-6 text-justify text-left text-left">Professional Commercial Scent Diffuser systems use cold-air diffusion technology. In larger buildings, <Link to="/hvac-scenting-solutions/" className="text-blue-600 font-medium underline hover:text-blue-800 transition-colors">HVAC-integrated scent diffusers</Link> process fragrance oil into ultra-fine particles that remain suspended in the air without leaving residue on furniture or surfaces.</p>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4 font-sans uppercase text-[10px] font-black tracking-widest text-blue-600 text-center">
                   <div className="p-4 bg-blue-50 rounded-xl text-center">Even distribution</div>
                   <div className="p-4 bg-blue-50 rounded-xl text-center">Adjustable intensity</div>
                   <div className="p-4 bg-blue-50 rounded-xl text-center">Low noise operation</div>
                   <div className="p-4 bg-blue-50 rounded-xl text-center">Residue-free</div>
                   <div className="p-4 bg-blue-50 rounded-xl text-center">Long-term reliability</div>
                </div>
              </motion.div>

              {/* SEASONAL STRATEGIES (H2) */}
              <motion.div {...fadeInUp} className="py-16 text-left bg-slate-50 rounded-[3rem] p-10 md:p-16 text-left text-left">
                <h2 className="text-3xl md:text-4xl font-serif mb-6 tracking-tight text-slate-900 text-left text-left uppercase">Seasonal Scent Strategies in the UAE</h2>
                <p className="mb-8 text-left text-left text-left">Dubai’s business environment changes throughout the year, and scent strategies should adapt accordingly.</p>
                <div className="space-y-6 text-left text-left">
                  <div className="flex gap-4 text-left">
                    <div className="font-serif text-4xl text-blue-300 text-left">01</div>
                    <div className="text-left text-left">
                      <h4 className="text-xl font-bold text-left text-left text-slate-900">Ramadan</h4>
                      <p className="text-slate-600 text-left text-left text-justify">Warm, elegant scents such as oud, amber, and soft spices resonate deeply during this period.</p>
                    </div>
                  </div>
                  <div className="flex gap-4 text-left">
                    <div className="font-serif text-4xl text-blue-300 text-left">02</div>
                    <div className="text-left text-left">
                      <h4 className="text-xl font-bold text-left text-left text-slate-900">Winter Season</h4>
                      <p className="text-slate-600 text-left text-left text-justify">During peak tourism months, cozy fragrances like vanilla, sandalwood, and cinnamon encourage visitors to stay longer.</p>
                    </div>
                  </div>
                  <div className="flex gap-4 text-left">
                    <div className="font-serif text-4xl text-blue-300 text-left">03</div>
                    <div className="text-left text-left">
                      <h4 className="text-xl font-bold text-left text-left text-slate-900">Summer Months</h4>
                      <p className="text-slate-600 text-left text-left text-justify">Fresh and cooling notes — citrus, aquatic, and green scents — help create a sense of relief from the heat outside.</p>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* IMPACT ON EMPLOYEES (H2) */}
              <motion.div {...fadeInUp} className="py-16 text-left border-b border-slate-100 text-left text-left text-left">
                <h2 className="text-3xl md:text-4xl font-serif mb-6 tracking-tight text-slate-900 text-left text-left uppercase">The Impact on Employees</h2>
                <p className="mb-6 text-left text-left">Scent marketing doesn’t only affect customers. Employees working in pleasantly scented environments often feel:</p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center text-left text-left">
                   <div className="text-center text-left text-left"><HeartIcon className="w-8 h-8 text-blue-500 mx-auto mb-2 text-center" /><p className="font-bold text-center">More Relaxed</p></div>
                   <div className="text-center text-left text-left"><SparklesIcon className="w-8 h-8 text-blue-500 mx-auto mb-2 text-center" /><p className="font-bold text-center">More Positive</p></div>
                   <div className="text-center text-left text-left"><UserGroupIcon className="w-8 h-8 text-blue-500 mx-auto mb-2 text-center" /><p className="font-bold text-center">Better Morale</p></div>
                </div>
              </motion.div>

              {/* HOW TO START (H2) */}
              <motion.div {...fadeInUp} className="py-16 text-left text-left text-left text-left">
                <h2 className="text-3xl md:text-4xl font-serif mb-6 tracking-tight text-slate-900 text-left text-left uppercase">How Businesses Can Get Started</h2>
                <p className="mb-8 text-left text-left">Starting with scent marketing does not require a large commitment upfront.</p>
                <div className="space-y-4 text-left text-left">
                   {["Define the feeling you want your space to create", "Start with key areas such as entrances or reception zones", "Use professional guidance to select the right fragrance", "Choose the right system based on space size and layout", "Monitor and adjust intensity and timing over time"].map((step, idx) => (
                     <div key={idx} className="flex gap-4 items-center text-left text-left text-left">
                        <div className="w-6 h-6 rounded-full bg-slate-900 text-white flex items-center justify-center text-[10px] font-black text-center">{idx + 1}</div>
                        <p className="text-slate-700 font-medium text-left">{step}</p>
                     </div>
                   ))}
                </div>
              </motion.div>

              {/* WHY CHOOSE COOL MAX (H2) */}
              <motion.div {...fadeInUp} className="py-16 text-left bg-blue-600 rounded-[3rem] p-10 md:p-16 text-white text-left text-left text-left text-left">
                <h2 className="text-3xl md:text-4xl font-serif mb-8 tracking-tight text-white text-left text-left uppercase font-bold text-left">Why Businesses Choose <Link to="/" className="text-white underline decoration-blue-300 underline-offset-4">Cool Max Scent</Link></h2>
                <p className="mb-10 text-blue-100 text-left text-left text-left">At <Link to="/" className="text-blue-50 font-bold hover:text-white">Cool Max Scent</Link>, we provide customized Scent Marketing Solutions in UAE designed for real commercial environments.</p>
                <div className="grid md:grid-cols-2 gap-8 text-left text-left text-left">
                  <div className="space-y-4 text-left text-left">
                    <h4 className="text-xs font-black uppercase tracking-widest text-blue-200 text-left text-left text-left">Supporting:</h4>
                    <ul className="space-y-2 text-sm text-left text-left text-left">
                      <li>• Retail stores</li>
                      <li>• Hotels and hospitality brands</li>
                      <li>• Offices and corporate spaces</li>
                      <li>• Malls and commercial buildings</li>
                    </ul>
                  </div>
                  <div className="space-y-4 text-left text-left text-left">
                    <h4 className="text-xs font-black uppercase tracking-widest text-blue-200 text-left text-left text-left">Our approach:</h4>
                    <ul className="space-y-2 text-sm text-left text-left text-left text-left">
                      <li>• Understand the space</li>
                      <li>• Understand the brand</li>
                      <li>• Recommend the right Aroma Diffusion Solution</li>
                      <li>• Ensure consistent performance</li>
                    </ul>
                  </div>
                </div>
              </motion.div>

              {/* FINAL THOUGHT (H2) */}
              <motion.div {...fadeInUp} className="py-16 text-left text-left text-left text-left">
                 <h2 className="text-3xl md:text-4xl font-serif mb-6 tracking-tight text-slate-900 text-left text-left uppercase">Final Thought</h2>
                 <p className="text-xl font-serif italic text-slate-400 mb-6 text-justify text-left text-left">
                    Scent marketing is not about strong smells or noticeable fragrance. It is about creating an environment where people feel good without knowing exactly why.
                 </p>
                 <p className="text-justify text-left text-left text-left">
                    Sometimes, the smallest changes create the strongest impressions. And sometimes, that change is simply the air your customers breathe. If you’re exploring scent marketing solutions in UAE, Cool Max Scent is here to help you design an experience that lasts long after your customers leave the space.
                 </p>
              </motion.div>

            </div>

            {/* SIDEBAR WIDGETS */}
            <aside className="lg:col-span-4 lg:sticky lg:top-32 h-fit text-left">
              <div className="bg-slate-950 rounded-[2.5rem] p-8 text-white shadow-xl text-left overflow-hidden relative text-left">
                <div className="absolute top-0 right-0 w-32 h-32 bg-blue-600/20 blur-2xl rounded-full text-left" />
                <h4 className="font-bold mb-6 uppercase text-xs tracking-widest text-left text-blue-400 relative z-10 text-left">Get Expert Help</h4>
                <p className="text-slate-400 text-sm leading-relaxed mb-8 text-justify relative z-10 text-left">
                  Ready to transform your business atmosphere? Let our specialists design a custom scent strategy for your brand.
                </p>
                <div className="space-y-4 relative z-10 text-left text-left">
                  <a href={`https://wa.me/${whatsappNumber}`} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-3 bg-[#25D366] text-white w-full py-4 rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-white hover:text-slate-900 transition-all text-center">
                    <ChatBubbleLeftRightIcon className="w-5 h-5" /> WhatsApp Experts
                  </a>
                  <Link to="/contact/" className="flex items-center justify-center gap-3 bg-white text-slate-900 w-full py-4 rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-blue-600 hover:text-white transition-all text-center">
                    Get Free Quote
                  </Link>
                </div>
              </div>

              <div className="mt-8 bg-white border border-slate-100 rounded-[2.5rem] p-8 shadow-sm text-left">
                 <h4 className="font-bold mb-6 uppercase text-xs tracking-widest text-slate-400 text-left">Featured System</h4>
                 <div className="h-40 bg-slate-50 rounded-2xl mb-4 flex items-center justify-center p-6 text-center text-center">
                    <img src={BlogHeroImg} alt="AeroBlack Diffuser" className="h-full object-contain mx-auto" />
                 </div>
                 <h5 className="font-serif text-lg mb-2 text-left">AeroBlack Series</h5>
                 <p className="text-slate-500 text-xs font-light mb-6 text-left text-left text-left text-left">Industrial-grade performance for malls and large lobbies.</p>
                 <Link to="/commercial-aroma-diffusers/" className="text-[10px] font-black uppercase text-blue-600 flex items-center gap-2 hover:gap-3 transition-all text-left">
                    View Systems <ArrowRightIcon className="w-3 h-3" />
                 </Link>
              </div>
            </aside>
          </div>
        </section>

        {/* ================= FINAL CTA (H2) ================= */}
        <section className="pb-32 px-6 text-center text-left">
          <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} className="max-w-[1200px] mx-auto bg-slate-900 rounded-[4rem] p-16 md:p-24 text-center text-white relative shadow-2xl overflow-hidden text-left text-center">
            <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/20 blur-3xl rounded-full -translate-y-1/2 translate-x-1/2 text-left" />
            
            <h2 className="text-4xl md:text-6xl font-serif mb-8 tracking-tighter leading-tight relative z-10 text-center uppercase font-bold text-center">
              Elevate Your <br />Brand Experience
            </h2>
            <p className="text-xl text-slate-400 mb-12 max-w-3xl mx-auto font-light leading-relaxed relative z-10 text-center font-sans text-center">
              Join leading Dubai brands using Cool Max Scent Marketing Solutions to create unforgettable customer journeys.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 relative z-10 w-full max-w-2xl mx-auto text-center">
              <a 
                href={`https://wa.me/${whatsappNumber}`} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex-1 w-full sm:w-auto px-12 py-6 bg-[#25D366] text-white rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-white hover:text-slate-900 transition-all shadow-xl flex items-center justify-center gap-3 border border-transparent text-center"
              >
                <ChatBubbleLeftRightIcon className="w-5 h-5" /> 
                <span className="whitespace-nowrap">WhatsApp Specialist</span>
              </a>

              <Link 
                to="/contact/" 
                className="flex-1 w-full sm:w-auto px-12 py-6 bg-white text-slate-900 border border-white rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-blue-600 hover:text-white transition-all flex items-center justify-center gap-3 shadow-xl text-center"
              >
                <span className="whitespace-nowrap">Request Consultation</span>
                <ArrowRightIcon className="w-4 h-4" />
              </Link>
            </div>
          </motion.div>
        </section>

      </div>
    </div>
  );
}