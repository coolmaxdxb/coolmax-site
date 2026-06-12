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

export default function LuxuryHomeFragranceBlog() {
  const whatsappNumber = "971509282702";

  // --- SEO Implementation & Scroll Fix ---
  useEffect(() => {
    window.scrollTo(0, 0);

    // Dynamic SEO update
    document.title = "Create a Luxurious Home with Professional Aroma Diffusers | CoolMax";
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute("content", "Discover how essential oil diffusers and premium fragrance oils create a luxurious, welcoming, and relaxing atmosphere throughout your home.");
    }
    
    // Canonical link handling
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', 'https://www.coolmaxscent.com/blog/luxury-home-fragrance-with-essential-oil-diffusers/');
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
              <span className="text-blue-700 text-[10px] font-black uppercase tracking-[0.3em]">Home Fragrance Guide</span>
            </div>
            
            <h1 className="text-4xl md:text-7xl font-serif text-slate-900 tracking-tighter leading-[1.1] mb-8 text-balance">
              Creating a Luxurious Home Atmosphere with Professional <br />
              <span className="italic text-slate-400 font-light">Essential Aroma Oil Diffusers</span>
            </h1>

            <p className="text-xl md:text-2xl text-slate-600 font-light leading-relaxed mb-10">
              A luxurious home is about more than beautiful furniture, elegant décor, and stylish interiors. One of the most powerful yet often overlooked elements of a premium living space is fragrance. The right scent can instantly transform a room, creating an inviting atmosphere that promotes comfort, relaxation, and sophistication.
            </p>

            <p className="text-xl md:text-2xl text-slate-600 font-light leading-relaxed mb-10">
              Unlike traditional air fresheners that provide only temporary results, professional diffusers distribute fragrance evenly throughout the home, creating a consistent and long-lasting scent experience. Whether you want to create a calming retreat, a welcoming environment for guests, or a luxurious ambiance that reflects your personal style, fragrance plays an important role in achieving your goals.
            </p>
          </motion.div>
        </section>

        {/* ================= MAIN CONTENT SECTION ================= */}
        <section className="pb-24 px-6 lg:px-16 max-w-[1400px] mx-auto">
          <div className="grid lg:grid-cols-12 gap-16">
            <div className="lg:col-span-8 space-y-8 text-lg text-slate-600 font-light leading-relaxed">
              
              <div className="space-y-6">
                <p className="text-justify">
                  Fragrance has a direct impact on how people experience a space. Just as lighting, color schemes, and furnishings influence mood, scent can shape emotions and perceptions. A carefully selected scent fragrance oil can make a home feel warm, elegant, and memorable.
                </p>
              </div>

              <motion.div {...fadeInUp} className="py-10 border-t border-slate-100">
                <h2 className="text-3xl md:text-4xl font-serif mb-10 tracking-tight text-slate-900">The Power of Fragrance in Home Design</h2>
                
                <p className="text-justify mb-8">
                  Luxury hotels, spas, and high-end retail stores have long used scent marketing to create distinctive experiences. Today, homeowners can achieve similar results by incorporating professional aroma diffusers into their living spaces. With the right fragrance profile, every room can feel more inviting and refined.
                </p>

                <h2 className="text-3xl md:text-4xl font-serif mb-10 tracking-tight text-slate-900">Why Professional Aroma Diffusers Make a Difference</h2>

                <p className="text-justify mb-6">
                  Professional diffusion systems are designed to provide superior fragrance performance compared to candles, sprays, or plug-in air fresheners. These advanced systems convert essential diffuser oil into a fine mist that disperses evenly throughout the space, ensuring consistent coverage without overwhelming the senses.
                </p>
                <p className="text-justify mb-8">
                  One of the biggest advantages of professional diffusers is their ability to maintain fragrance levels throughout the day. Whether installed in a living room, bedroom, hallway, or open-plan area, they deliver a seamless scent experience that enhances the atmosphere of the entire home.
                </p>
                <p className="text-justify">
                  Additionally, professional diffusers allow homeowners to customize fragrance intensity according to their preferences. This flexibility ensures that the scent remains pleasant and balanced while complementing the home's overall design.
                </p>
              </motion.div>

              <motion.div {...fadeInUp} className="py-12 border-t border-slate-100">
                <h2 className="text-3xl md:text-4xl font-serif text-slate-900 mb-6">Choosing the Right Fragrance for a Luxurious Atmosphere</h2>

                <p className="text-justify mb-6">
                  Selecting the right fragrance diffuser oil is essential for creating the desired ambiance. Different scent families can evoke different emotions and experiences.
                </p>

                <div className="space-y-6">
                  <div className="bg-slate-50 p-6 rounded-3xl border border-slate-100">
                    <h3 className="text-xl font-bold text-slate-900 mb-3">Floral Elegance for Living Areas</h3>
                    <p className="text-slate-600 text-justify leading-relaxed">
                      Floral fragrances often create a sense of elegance and freshness, making them ideal for living rooms and entryways. They help bring a refined, inviting atmosphere to shared spaces.
                    </p>
                  </div>
                  <div className="bg-slate-50 p-6 rounded-3xl border border-slate-100">
                    <h3 className="text-xl font-bold text-slate-900 mb-3">Citrus Energy and Warmth</h3>
                    <p className="text-slate-600 text-justify leading-relaxed">
                      Citrus scents provide an uplifting and energetic atmosphere, making them perfect for kitchens, hallways, and social spaces where a fresh, lively mood is desired.
                    </p>
                  </div>
                  <div className="bg-slate-50 p-6 rounded-3xl border border-slate-100">
                    <h3 className="text-xl font-bold text-slate-900 mb-3">Woody Comfort and Sophistication</h3>
                    <p className="text-slate-600 text-justify leading-relaxed">
                      Woody and amber notes add warmth and sophistication. These fragrances are excellent for dens, study spaces, and formal rooms where a rich, luxurious presence is ideal.
                    </p>
                  </div>
                  <div className="bg-slate-50 p-6 rounded-3xl border border-slate-100">
                    <h3 className="text-xl font-bold text-slate-900 mb-3">Spa-Inspired Calm for Bedrooms</h3>
                    <p className="text-slate-600 text-justify leading-relaxed">
                      For relaxation spaces such as bedrooms, calming essential oil blends featuring lavender, sandalwood, or chamomile can help create a peaceful environment and improve rest.
                    </p>
                  </div>
                </div>

                <p className="text-justify mt-8">
                  Many homeowners also choose signature fragrance blends that reflect their personal style and create a unique identity for their homes. A consistent scent throughout the property can leave a lasting impression on family members and guests alike.
                </p>
              </motion.div>

              {/* CONCLUSION (H2) */}
              <motion.div {...fadeInUp} className="py-16 border-t border-slate-100">
                <h2 className="text-3xl md:text-4xl font-serif mb-6 tracking-tight text-slate-900 uppercase">Conclusion</h2>
                <p className="text-justify mb-4">
                  Creating a luxurious home atmosphere goes beyond visual aesthetics. Fragrance is a powerful design element that enhances comfort, elevates experiences, and transforms everyday living spaces into welcoming retreats.
                </p>
                <p className="text-justify">
                  By using professional aroma diffusion systems and premium essential diffuser oil, homeowners can enjoy consistent, long-lasting fragrance throughout their homes. Whether you prefer floral, citrus, woody, or spa-inspired aromas, the right scent fragrance oil and fragrance diffuser oil can help create an elegant and memorable environment.
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
              Transform Every Room with Premium Home Fragrance Diffusion Solutions
            </h2>
            <p className="text-xl text-slate-400 mb-12 max-w-3xl mx-auto font-light leading-relaxed relative z-10">
              Elevate your home's ambiance with professional aroma diffusers and premium fragrance oils for a lasting luxury experience.
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