import React from "react";
import { motion } from "framer-motion";
import { 
  SparklesIcon, 
  BeakerIcon, 
  CheckBadgeIcon, 
  ArrowRightIcon, 
  BuildingOffice2Icon,
  HomeIcon,
  ShoppingBagIcon,
  ChatBubbleLeftRightIcon
} from "@heroicons/react/24/outline";

const OrientalAromaOilsPage = () => {
  // Redirection Links
  const whatsappNumber = "971522286401";
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=Hello%20Cool%20Max%20Scent,%20I%20am%20interested%20in%20your%20Oriental%20Aroma%20Oils%20Collection.`;
  const contactPath = "/contact";

  const oils = [
    {
      name: "Address Aroma Oil",
      code: "CM-0101-OR",
      strength: "Medium",
      top: "Mango, Myrrh, Saffron, Rose",
      middle: "Agarwood (Oud), Patchouli, Amber, Musk",
      base: "Passionfruit, Lemon, Cardamom",
    },
    {
      name: "Arabian Peninsula Aroma Oil",
      code: "CM-0102-OR",
      strength: "Strong",
      top: "Saffron, Oudh, Spiced Rose",
      middle: "Amber, Frankincense, Sandalwood",
      base: "Musk, Leather, Myrrh, Patchouli",
    },
    {
      name: "Arabian Bakhour Aroma Oil",
      code: "CM-0103-OR",
      strength: "Strong",
      top: "Jasmine, Rose",
      middle: "Saffron, Clove",
      base: "Vanilla, Pineapple",
    },
    {
      name: "Emaar Aroma Oil",
      code: "CM-0104-OR",
      strength: "Medium",
      top: "Rose, Floral",
      middle: "Cedarwood, Saffron",
      base: "Musk, Patchouli",
    }
  ];

  const fadeUp = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  return (
    <div className="bg-white text-slate-900 font-sans selection:bg-amber-100 overflow-hidden">
      
      {/* ================= HERO SECTION (OPTIMIZED) ================= */}
      <section className="relative pt-24 pb-12 px-6 lg:px-12 max-w-[1600px] mx-auto text-center">
        <motion.div {...fadeUp}>
          <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-amber-50 border border-amber-200 text-amber-700 text-[10px] font-black uppercase tracking-[0.2em] mb-6">
            <SparklesIcon className="w-4 h-4" /> Luxury Commercial Series
          </div>
          <h1 className="text-4xl md:text-6xl font-serif mb-4 leading-tight text-slate-900">
            ORIENTAL AROMA OILS
          </h1>
          <p className="text-lg text-amber-600 font-medium mb-6">
            Premium Oriental Fragrances for Luxury & Commercial Spaces
          </p>
          <p className="text-sm text-slate-500 max-w-3xl mx-auto leading-relaxed font-light mb-8">
            Oriental aroma oils are known for their rich, warm, and long-lasting fragrance profiles. These scents are ideal for spaces that want to create a premium, elegant, and memorable atmosphere.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="px-8 py-3 bg-slate-900 text-white rounded-xl font-bold text-[10px] uppercase tracking-widest hover:bg-amber-600 transition-all flex items-center gap-2 shadow-lg">
              <ChatBubbleLeftRightIcon className="w-4 h-4" /> Order via WhatsApp
            </a>
            <a href={contactPath} className="px-8 py-3 border border-slate-200 text-slate-900 rounded-xl font-bold text-[10px] uppercase tracking-widest hover:bg-slate-50 transition-all">
              Request Samples
            </a>
          </div>
        </motion.div>
      </section>

      {/* ================= SECTION 1: COLLECTION GRID ================= */}
      <section className="py-16 bg-slate-50 px-6 lg:px-12">
        <div className="max-w-[1400px] mx-auto">
          <h2 className="text-2xl md:text-4xl font-serif mb-12 text-center tracking-tight text-slate-900">
            Oriental Aroma Oil Collection
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {oils.map((oil, idx) => (
              <motion.div 
                key={idx} 
                {...fadeUp}
                className="bg-white p-6 rounded-[2rem] border border-slate-100 shadow-sm hover:shadow-xl hover:border-amber-200 transition-all group"
              >
                <div className="aspect-square bg-slate-50 rounded-2xl mb-6 flex items-center justify-center relative overflow-hidden">
                   <BeakerIcon className="w-16 h-16 text-slate-200 group-hover:text-amber-200 transition-colors" />
                   <div className="absolute top-4 right-4 px-3 py-1 bg-white/80 backdrop-blur-sm rounded-full border border-slate-100 text-[8px] font-black uppercase text-slate-500">
                     {oil.strength} Strength
                   </div>
                </div>
                
                <h3 className="text-lg font-serif text-slate-900 mb-1">{oil.name}</h3>
                <p className="text-[10px] font-bold text-amber-600 uppercase tracking-widest mb-4">Code: {oil.code}</p>
                
                <div className="space-y-3 mb-8">
                   <div className="pb-2 border-b border-slate-50">
                     <p className="text-[9px] font-black uppercase text-slate-400 mb-1">Top Notes</p>
                     <p className="text-[11px] text-slate-600 leading-tight">{oil.top}</p>
                   </div>
                   <div className="pb-2 border-b border-slate-50">
                     <p className="text-[9px] font-black uppercase text-slate-400 mb-1">Middle Notes</p>
                     <p className="text-[11px] text-slate-600 leading-tight">{oil.middle}</p>
                   </div>
                   <div>
                     <p className="text-[9px] font-black uppercase text-slate-400 mb-1">Base Notes</p>
                     <p className="text-[11px] text-slate-600 leading-tight">{oil.base}</p>
                   </div>
                </div>

                <a 
                  href={whatsappLink} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="w-full py-3 bg-slate-50 text-slate-900 rounded-xl font-bold text-[9px] uppercase tracking-widest group-hover:bg-amber-600 group-hover:text-white transition-all flex items-center justify-center gap-2"
                >
                  View Product Details <ArrowRightIcon className="w-3 h-3" />
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= SECTION 2: ABOUT OILS ================= */}
      <section className="py-16 bg-white px-6">
        <div className="max-w-[1000px] mx-auto text-center">
          <motion.div {...fadeUp}>
            <h2 className="text-2xl md:text-4xl font-serif mb-6 tracking-tight text-slate-900">About Our Oriental Aroma Oils</h2>
            <p className="text-base text-slate-600 leading-relaxed font-light mb-6">
              Our oriental aroma oils are professional-grade fragrances designed for use with advanced scent diffuser systems. Each fragrance is carefully selected to deliver consistent diffusion, balanced intensity, and long-lasting performance across different space sizes.
            </p>
            <p className="text-base text-slate-600 leading-relaxed font-light">
              These fragrances are commonly used in hotels, premium offices, showrooms, and high-end commercial environments where scent plays a key role in customer experience and brand perception.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ================= SECTION 3: BEST USED FOR ================= */}
      <section className="py-16 bg-slate-900 text-white px-6">
        <div className="max-w-[1200px] mx-auto text-center">
          <h2 className="text-2xl md:text-4xl font-serif mb-12 tracking-tight text-amber-400">Best Used For</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { icon: BuildingOffice2Icon, label: "Hotels & Resorts" },
              { icon: ShoppingBagIcon, label: "Luxury Showrooms" },
              { icon: BuildingOffice2Icon, label: "Premium Offices" },
              { icon: HomeIcon, label: "High-end Residential" }
            ].map((item, i) => (
              <div key={i} className="p-8 rounded-[2rem] bg-white/5 border border-white/10 flex flex-col items-center gap-4">
                 <item.icon className="w-10 h-10 text-amber-500" />
                 <span className="text-xs font-bold uppercase tracking-widest text-slate-200">{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= MAINTENANCE & CERTIFICATION ================= */}
      <section className="py-16 bg-slate-50 px-6">
        <div className="max-w-[1000px] mx-auto grid lg:grid-cols-2 gap-6 text-left">
          <div className="p-8 bg-white rounded-3xl shadow-sm border border-slate-100">
            <h4 className="text-lg font-bold mb-4 flex items-center gap-2 text-slate-900">
              <CheckBadgeIcon className="w-5 h-5 text-amber-600" /> IFRA Certified
            </h4>
            <p className="text-xs text-slate-500 font-light leading-relaxed">
              All our Oriental aroma oils meet international safety standards, ensuring they are safe for high-traffic public areas and residential use.
            </p>
          </div>
          <div className="p-8 bg-amber-600 text-white rounded-3xl shadow-xl">
            <h4 className="text-lg font-bold mb-4 flex items-center gap-2">
              <SparklesIcon className="w-5 h-5" /> Signature Blends
            </h4>
            <p className="text-xs text-amber-50 font-light leading-relaxed">
              Tailored for UAE's climate, these oils maintain their aromatic profile even in large, air-conditioned environments.
            </p>
          </div>
        </div>
      </section>

      {/* ================= CTA (MASTER REDIRECT) ================= */}
      <section className="py-20 px-6">
        <div className="max-w-[1200px] mx-auto bg-[#0c101b] rounded-[3rem] p-10 md:p-16 text-center text-white relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-amber-600/10 blur-[100px] rounded-full" />
          <h2 className="text-3xl md:text-5xl font-serif mb-6 relative z-10 tracking-tight leading-tight">Create a Memorable Atmosphere</h2>
          <p className="text-slate-400 text-lg mb-10 relative z-10 max-w-2xl mx-auto leading-relaxed font-light">
            Ready to elevate your space with our premium Oriental oils? Our scent experts are ready to assist you.
          </p>
          <div className="flex flex-wrap justify-center gap-4 relative z-10">
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="px-10 py-4 bg-white text-slate-900 rounded-xl font-black uppercase tracking-widest text-[10px] hover:bg-amber-600 hover:text-white transition-all shadow-xl flex items-center gap-2">
               <ChatBubbleLeftRightIcon className="w-5 h-5" /> WhatsApp Scent Expert
            </a>
            <a href={contactPath} className="px-10 py-4 bg-white/5 text-white rounded-xl font-black uppercase tracking-widest text-[10px] hover:bg-white/10 border border-white/10 transition-all flex items-center gap-2">
              Contact Cool Max <ArrowRightIcon className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

    </div>
  );
};

export default OrientalAromaOilsPage;