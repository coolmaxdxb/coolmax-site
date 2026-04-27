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
  ShoppingBagIcon,
  HeartIcon,
  StarIcon
} from "@heroicons/react/24/outline";

// --- ASSET IMPORTS ---
import BlogHeroImg from "../../asset/productimg/CMwebpimg/AeroBlack Med diffuser/1.webp"; 

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 }
};

export default function BestAromaOilDiffuserGuide() {
  const whatsappNumber = "971509282702";

  // --- SEO Implementation & Scroll Fix ---
  useEffect(() => {
    window.scrollTo(0, 0);

    document.title = "Best Aroma Oil Scent Diffuser Guide for Every Room | Cool Max";
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute("content", "Find the perfect aroma oil diffuser for your space. Explore premium aroma oils like oud, lavender, white tea, and more to create a relaxing atmosphere. Contact Us Today!");
    }
    
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', 'https://www.coolmaxscent.com/blog/best-essential-aroma-oil-diffuser-for-any-room/');
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
              <SparklesIcon className="w-4 h-4 text-blue-600" />
              <span className="text-blue-700 text-[10px] font-black uppercase tracking-[0.3em]">Aroma Selection Guide</span>
            </div>
            
            <h1 className="text-4xl md:text-7xl font-serif text-slate-900 tracking-tighter leading-[1.1] mb-8 text-left">
              An Easy Guide to Selecting the <span className="text-blue-600">Best Essential Aroma Oil</span> Scent Diffuser for Any Room
            </h1>

            <p className="text-xl md:text-2xl text-slate-500 font-light leading-relaxed mb-10 text-left">
              Creating the perfect atmosphere in a home, office, hotel, or retail space is easier than ever with aroma oil diffusers. 
            </p>
          </motion.div>
        </section>

        {/* ================= INTRODUCTION SECTION ================= */}
        <section className="pb-24 px-6 lg:px-16 max-w-[1400px] mx-auto text-left">
          <div className="grid lg:grid-cols-12 gap-16">
            <div className="lg:col-span-8 space-y-8 text-lg text-slate-600 font-light leading-relaxed">
              <p className="text-justify">
                These devices disperse fragrance oils into the air, transforming any environment into a relaxing, welcoming, and memorable space. Choosing the right diffuser and aroma oil combination can make a huge difference in how a room feels. At Cool Max Scent, a wide range of premium aroma oils are designed to work with professional scent diffusers to create different moods and experiences.
              </p>

              {/* WHY POPULAR (H2) */}
              <motion.div {...fadeInUp} className="py-12 border-t border-slate-100">
                <h2 className="text-3xl md:text-4xl font-serif text-slate-900 mb-6 text-left">Why Aroma Oil Diffusers Are Popular</h2>
                <p className="mb-8 text-justify">
                  Aroma oil diffusers use advanced atomization technology to break fragrance oils into ultra-fine particles that spread evenly throughout a space. This allows the scent to linger longer and cover larger areas efficiently.
                </p>
                
                <h3 className="text-xl font-bold text-slate-900 mb-6 text-left">Benefits of aroma diffusers include:</h3>
                <div className="grid md:grid-cols-2 gap-4">
                   {[
                     "Creating a relaxing atmosphere",
                     "Improving customer experience in commercial spaces",
                     "Eliminating unwanted odors",
                     "Enhancing mood and productivity",
                     "Providing a luxurious scent experience"
                   ].map((benefit, i) => (
                     <div key={i} className="flex gap-3 items-center p-4 bg-slate-50 rounded-xl border border-slate-100">
                        <CheckCircleIcon className="w-5 h-5 text-blue-600" />
                        <span className="text-sm font-medium text-slate-700">{benefit}</span>
                     </div>
                   ))}
                </div>
              </motion.div>

              {/* COLLECTIONS SECTION */}
              <div className="space-y-16">
                
                {/* 1. ORIENTAL */}
                <motion.div {...fadeInUp} className="space-y-6">
                    <h2 className="text-3xl font-serif text-slate-900 text-left">1. Oriental Aroma Oils for Luxury and Warm Ambiance</h2>
                    <p className="text-justify">Oriental fragrances are rich, deep, and luxurious. They are ideal for hotels, living rooms, lounges, and premium retail spaces where you want a warm and elegant atmosphere.</p>
                    <div className="bg-blue-50/50 p-6 rounded-3xl border border-blue-100">
                        <h4 className="font-bold text-blue-900 mb-4 text-left uppercase text-xs tracking-widest">Popular Options:</h4>
                        <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm text-blue-700">
                            <li>• Address Aroma Oil</li>
                            <li>• Arabian Peninsula Aroma Oil</li>
                            <li>• Arabian Bakhour Aroma Oil</li>
                            <li>• Emaar Aroma Oil</li>
                            <li>• Sweet Oud Aroma Oil</li>
                        </ul>
                    </div>
                </motion.div>

                {/* 2. PERFUMERS CHOICE */}
                <motion.div {...fadeInUp} className="space-y-6">
                    <h2 className="text-3xl font-serif text-slate-900 text-left">2. Perfumers Choice Aroma Oils for Signature Scents</h2>
                    <p className="text-justify">If you want a distinctive fragrance that stands out, the Perfumers Choice collection offers unique blends crafted for professional scenting environments.</p>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                        {["Harmony", "Event", "For You", "Passion", "Gold", "Tuscan Leather", "Story", "Brown Orchid", "Scents Natural", "Splendor"].map((scent) => (
                            <div key={scent} className="p-3 bg-white border border-slate-200 rounded-xl text-center text-xs font-bold text-slate-600">{scent}</div>
                        ))}
                    </div>
                </motion.div>

                {/* 3. FOOD & BEVERAGE */}
                <motion.div {...fadeInUp} className="space-y-6">
                    <h2 className="text-3xl font-serif text-slate-900 text-left">3. Food & Beverage Aroma Oils for Cafés and Restaurants</h2>
                    <p className="text-justify">Coffee-inspired scents can enhance the atmosphere of cafés and bakeries, encouraging customers to stay longer. <strong>True Coffee Aroma Oil</strong> is carefully designed to support food environments without overpowering the space.</p>
                </motion.div>

                {/* 4. FRESH */}
                <motion.div {...fadeInUp} className="space-y-6">
                    <h2 className="text-3xl font-serif text-slate-900 text-left">4. Fresh Aroma Oils for Relaxation and Clean Environments</h2>
                    <p className="text-justify">Lavender-based scents are widely known for their calming and relaxing qualities, making them perfect for bedrooms, spas, and wellness centers.</p>
                    <div className="flex flex-wrap gap-2">
                        {["Lavender", "English Lavender", "White Tea", "Floral", "Lotus Flower"].map(f => (
                            <span key={f} className="px-4 py-2 bg-slate-100 rounded-full text-xs font-medium">{f}</span>
                        ))}
                    </div>
                </motion.div>

              </div>
            </div>

            {/* SIDEBAR */}
            <aside className="lg:col-span-4 lg:sticky lg:top-32 h-fit">
              <div className="bg-slate-900 rounded-[2.5rem] p-8 text-white shadow-xl">
                <h4 className="font-bold mb-6 uppercase text-xs tracking-widest text-blue-400">Expert Tips</h4>
                <div className="space-y-6 mb-8">
                    <div>
                        <h5 className="font-bold text-sm mb-1 text-left text-white">Room Size</h5>
                        <p className="text-xs text-slate-400 text-left">Larger rooms require stronger scent diffusion or high-capacity diffusers.</p>
                    </div>
                    <div>
                        <h5 className="font-bold text-sm mb-1 text-left text-white">Desired Mood</h5>
                        <p className="text-xs text-slate-400 text-left">Relaxing (Lavender), Luxury (Oud), Energetic (Fruity).</p>
                    </div>
                </div>
                <div className="space-y-4">
                  <a href={`https://wa.me/${whatsappNumber}`} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-3 bg-blue-600 text-white w-full py-4 rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-white hover:text-blue-600 transition-all text-center">
                    <ChatBubbleLeftRightIcon className="w-5 h-5" /> Get Consultation
                  </a>
                </div>
              </div>
            </aside>
          </div>
        </section>

        {/* ================= ENERGY & PREMIUM SECTIONS ================= */}
        <section className="py-24 bg-slate-50 px-6 lg:px-16 text-left">
          <div className="max-w-[1400px] mx-auto grid md:grid-cols-2 gap-12">
              <motion.div {...fadeInUp} className="bg-white p-10 rounded-[3rem] shadow-sm border border-slate-100">
                <div className="text-blue-600 w-12 h-12 mb-6"><FaceSmileIcon /></div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4 text-left">5. Fruity Aroma Oils</h3>
                <p className="text-slate-500 text-base leading-relaxed text-justify">Fruity fragrances like <strong>Crystal Aroma Oil</strong> bring a vibrant, uplifting energy. Perfect for fitness centers, retail stores, and creative offices.</p>
              </motion.div>
              
              <motion.div {...fadeInUp} className="bg-slate-900 p-10 rounded-[3rem] shadow-sm text-white">
                <div className="text-blue-400 w-12 h-12 mb-6"><StarIcon /></div>
                <h3 className="text-2xl font-bold mb-4 text-left">6. Premium Collection</h3>
                <p className="text-slate-300 text-base leading-relaxed text-justify">For environments that demand exceptional quality, <strong>Taj Sunset</strong> and <strong>Classic Aroma Oil</strong> deliver a powerful, long-lasting luxury presence.</p>
              </motion.div>
          </div>
        </section>

        {/* ================= SELECTION FACTORS (H2) ================= */}
        <section className="py-24 px-6 lg:px-16 max-w-[1400px] mx-auto text-left">
           <div className="grid lg:grid-cols-2 gap-20 items-center">
              <div>
                <h2 className="text-4xl md:text-5xl font-serif text-slate-900 mb-8 tracking-tighter text-left">Tips for Choosing the Right Aroma Oil</h2>
                <div className="space-y-8">
                    {[
                        { t: "Room Size", d: "Larger rooms require stronger scent diffusion or high-capacity diffusers.", i: <AdjustmentsHorizontalIcon /> },
                        { t: "Desired Mood", d: "Relaxing (Lavender/Floral), Luxury (Oud/Oriental), Energetic (Fruity).", i: <HeartIcon /> },
                        { t: "Environment Type", d: "Home (Fresh), Office (Light/Clean), Retail (Signature/Memorable).", i: <ShoppingBagIcon /> }
                    ].map((factor, idx) => (
                        <div key={idx} className="flex gap-6">
                            <div className="w-12 h-12 rounded-2xl bg-blue-50 flex items-center justify-center text-blue-600 shrink-0">{factor.i}</div>
                            <div>
                                <h4 className="font-bold text-slate-900 text-lg text-left">{factor.t}</h4>
                                <p className="text-slate-500 text-sm text-left">{factor.d}</p>
                            </div>
                        </div>
                    ))}
                </div>
              </div>
              <div className="relative">
                <div className="bg-slate-100 rounded-[4rem] p-12 overflow-hidden shadow-inner text-center">
                  <img src={BlogHeroImg} alt="Aroma Diffuser Selection" className="w-full h-auto rounded-[2rem] shadow-2xl" />
                </div>
              </div>
           </div>
        </section>

        {/* ================= CONCLUSION (H2) ================= */}
        <section className="py-24 px-6 lg:px-16 border-t border-slate-100 text-left">
           <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-serif text-slate-900 mb-6 uppercase text-left">Conclusion</h2>
              <p className="text-lg text-slate-600 font-light leading-relaxed mb-8 text-justify">
                Selecting the best essential aroma oil scent diffuser for any room involves choosing both the right diffuser and the perfect fragrance oil. Whether you prefer luxurious oriental scents, relaxing floral fragrances, or energetic fruity aromas, the right combination can completely transform your space. With the diverse aroma oil collections available at <strong>Cool Max Scent</strong>, you can easily find the ideal fragrance to enhance your home, office, or commercial environment and create a truly unforgettable scent experience.
              </p>
              <p className="text-2xl font-serif italic text-slate-400 text-left">Transform your space with the perfect scent today.</p>
           </div>
        </section>

        {/* ================= FINAL CTA ================= */}
        <section className="pb-32 px-6">
          <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} className="max-w-[1200px] mx-auto bg-blue-600 rounded-[4rem] p-16 md:p-24 text-center text-white relative shadow-2xl overflow-hidden">
            <div className="absolute top-0 right-0 w-96 h-96 bg-blue-50/10 blur-3xl rounded-full -translate-y-1/2 translate-x-1/2" />
            <h2 className="text-4xl md:text-6xl font-serif mb-8 tracking-tighter leading-tight relative z-10 uppercase font-bold text-white text-center">
              Find Your <br />Signature Scent
            </h2>
            <p className="text-xl text-blue-100 mb-12 max-w-3xl mx-auto font-light leading-relaxed relative z-10 text-center">
              Explore our full collection of premium aroma oils and professional diffusers.
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