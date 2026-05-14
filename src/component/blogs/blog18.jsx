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
  BuildingOffice2Icon,
  CloudIcon,
  HeartIcon,
  UserGroupIcon
} from "@heroicons/react/24/outline";

// --- ASSET IMPORTS ---
import BlogHeroImg from "../../asset/productimg/CMwebpimg/AeroBlack Med diffuser/1.webp"; 

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 }
};

export default function AromaMoodComfortBlog() {
  const whatsappNumber = "971509282702";

  // --- SEO Implementation & Scroll Fix ---
  useEffect(() => {
    window.scrollTo(0, 0);

    document.title = "Aroma Oil Diffusers in Dubai for Better Mood & Comfort";
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute("content", "Discover how Aroma Oil Diffusers in Dubai improve mood, comfort, and indoor atmosphere in homes, offices, hotels, and commercial spaces across UAE.");
    }
    
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', 'https://www.coolmaxscent.com/blog/aroma-oil-diffusers-dubai-for-better-mode-and-comfort');
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
              <HeartIcon className="w-4 h-4 text-blue-600" />
              <span className="text-blue-700 text-[10px] font-black uppercase tracking-[0.3em]">Wellness & Atmosphere</span>
            </div>
            
            <h1 className="text-4xl md:text-7xl font-serif text-slate-900 tracking-tighter leading-[1.1] mb-8 text-left">
              How <span className="text-blue-600">Aroma Oil Diffusers in Dubai</span> Improve Mood, Comfort & Indoor Atmosphere
            </h1>

            <p className="text-xl md:text-2xl text-slate-500 font-light leading-relaxed mb-10 text-left">
              Dubai is a fast-moving city. From busy offices and luxury hotels to modern apartments and retail spaces, people are constantly surrounded by activity, stress, and long working hours. Because of this, creating a calm and comfortable indoor environment has become more important than ever.
            </p>
          </motion.div>
        </section>

        {/* ================= INTRODUCTION SECTION ================= */}
        <section className="pb-24 px-6 lg:px-16 max-w-[1400px] mx-auto text-left">
          <div className="grid lg:grid-cols-12 gap-16">
            <div className="lg:col-span-8 space-y-8 text-lg text-slate-600 font-light leading-relaxed">
              <p className="text-justify">
                This is one of the main reasons why <strong>Aroma Oil Diffusers in Dubai</strong> are becoming increasingly popular across homes, offices, hotels, clinics, and commercial spaces. More than just fragrance devices, aroma diffusers help create better experiences by improving mood, comfort, and the overall atmosphere of a space. Today, businesses and homeowners are investing in professional scent solutions to make indoor environments feel more welcoming, relaxing, and memorable.
              </p>

              {/* EMOTIONS (H2) */}
              <motion.div {...fadeInUp} className="py-12 border-t border-slate-100">
                <h2 className="text-3xl md:text-4xl font-serif text-slate-900 mb-6 text-left">Why Fragrance Has a Strong Impact on Human Emotions</h2>
                <p className="mb-8 text-justify">
                  Among all human senses, smell has one of the strongest connections to emotion and memory. Certain fragrances can instantly change how people feel within seconds. A calming scent can reduce stress after a long day. A refreshing fragrance can improve focus and energy levels. This is why scent plays such an important role in modern indoor environments.
                </p>
                <p className="mb-6 text-left font-bold text-slate-800">Research shows that fragrance directly influences:</p>
                <div className="grid md:grid-cols-2 gap-4">
                   {[
                     "Mood and emotional comfort",
                     "Stress levels and mental relaxation",
                     "Focus and productivity",
                     "Customer perception"
                   ].map((item, i) => (
                     <div key={i} className="flex gap-3 items-center p-4 bg-slate-50 rounded-xl border border-slate-100">
                        <CheckCircleIcon className="w-5 h-5 text-blue-600" />
                        <span className="text-sm font-medium text-slate-700">{item}</span>
                     </div>
                   ))}
                </div>
                <p className="mt-8 text-justify">
                  This is why many businesses in Dubai now use <Link to="/" className="text-blue-600 font-medium underline">Essential Oil Diffusers in Dubai</Link> to create pleasant environments that positively influence visitors, guests, and employees.
                </p>
              </motion.div>

              {/* HOW IT WORKS (H2) */}
              <motion.div {...fadeInUp} className="py-12 border-t border-slate-100">
                <h2 className="text-3xl md:text-4xl font-serif text-slate-900 mb-6 text-left">How Aroma Oil Diffusers Work</h2>
                <p className="text-justify">
                  Modern aroma diffusers use advanced diffusion technology to convert fragrance oils into ultra-fine particles that spread evenly through the air. Unlike traditional air fresheners, professional diffusers provide consistent fragrance coverage, controlled scent intensity, long-lasting performance, quiet operation, and a better indoor atmosphere. This technology allows fragrance to remain balanced without becoming overpowering. Today, businesses across the UAE are increasingly using <Link to="/" className="text-blue-600 font-medium underline">Aroma Diffusers and Fragrance Oil in UAE</Link> to create professional and comfortable indoor spaces.
                </p>
              </motion.div>

              {/* MOOD PROFILES (H2) */}
              <motion.div {...fadeInUp} className="py-12 border-t border-slate-100">
                <h2 className="text-3xl md:text-4xl font-serif text-slate-900 mb-6 text-left">How Aroma Oil Diffusers Improve Mood</h2>
                <p className="mb-6 text-justify">
                  Fragrance has a direct psychological effect on people. Different aroma oils help create different emotional responses. A well-selected fragrance can completely transform how people feel inside a space.
                </p>
                <div className="space-y-6">
                  <div className="p-6 bg-white border border-slate-100 rounded-3xl shadow-sm">
                    <h4 className="font-bold text-blue-600 mb-2">Lavender & Chamomile</h4>
                    <p className="text-sm text-slate-500">These fragrances are commonly associated with relaxation and stress relief. They are often used in bedrooms, wellness centers, spas, and hotel rooms.</p>
                  </div>
                  <div className="p-6 bg-white border border-slate-100 rounded-3xl shadow-sm">
                    <h4 className="font-bold text-blue-600 mb-2">Citrus Fragrances</h4>
                    <p className="text-sm text-slate-500">Fresh citrus scents help create an energetic and refreshing environment. They are ideal for offices, reception areas, and retail stores.</p>
                  </div>
                  <div className="p-6 bg-white border border-slate-100 rounded-3xl shadow-sm">
                    <h4 className="font-bold text-blue-600 mb-2">Peppermint & Eucalyptus</h4>
                    <p className="text-sm text-slate-500">These scents are often used to improve mental clarity and focus, especially in workplaces and meeting spaces.</p>
                  </div>
                  <div className="p-6 bg-white border border-slate-100 rounded-3xl shadow-sm">
                    <h4 className="font-bold text-blue-600 mb-2">Sandalwood & Woody Notes</h4>
                    <p className="text-sm text-slate-500">Warm fragrances create a premium and comforting atmosphere suitable for luxury hotels, showrooms, and executive offices.</p>
                  </div>
                </div>
              </motion.div>

              {/* COMFORTABLE INDOOR ENVIRONMENTS (H2) */}
              <motion.div {...fadeInUp} className="py-12 border-t border-slate-100">
                <h2 className="text-3xl md:text-4xl font-serif text-slate-900 mb-6 text-left">Creating Comfortable Indoor Environments</h2>
                <p className="text-justify">
                  Comfort is not only about furniture, lighting, or air conditioning. Fragrance also plays a major role in how a space feels. A room may look visually beautiful, but if the environment feels dull or unpleasant, the experience becomes incomplete. A professional <Link to="/" className="text-blue-600 font-medium underline">Scent Diffuser and Aroma Oil in Dubai</Link> helps create a fresher atmosphere, a more welcoming environment, better emotional comfort, and a premium indoor experience. This is why fragrance has become an important part of modern interior environments.
                </p>
              </motion.div>

              {/* BUSINESS USE (H2) */}
              <motion.div {...fadeInUp} className="py-12 border-t border-slate-100">
                <h2 className="text-3xl md:text-4xl font-serif text-slate-900 mb-6 text-left">Why Businesses in Dubai Use Aroma Diffusers</h2>
                <p className="mb-6 text-justify">
                  Businesses today focus heavily on customer experience and atmosphere. Many commercial spaces now use scent solutions as part of their branding strategy across different industries.
                </p>
                <div className="space-y-4 text-base">
                  <p><strong>Hotels & Hospitality:</strong> Luxury hotels use signature fragrances to create memorable guest experiences.</p>
                  <p><strong>Offices:</strong> Fresh and clean fragrances help create a comfortable and productive workplace.</p>
                  <p><strong>Retail Stores & Showrooms:</strong> A pleasant scent encourages customers to stay longer and improves overall brand perception.</p>
                  <p><strong>Clinics & Wellness Centers:</strong> Calming fragrances help reduce stress and create a more relaxing environment for visitors.</p>
                </div>
              </motion.div>

              {/* SELECTION FACTORS (H2) */}
              <motion.div {...fadeInUp} className="py-12 border-t border-slate-100">
                <h2 className="text-3xl md:text-4xl font-serif text-slate-900 mb-6 text-left">Choosing the Right Aroma Oil Diffuser in Dubai</h2>
                <p className="mb-6 text-justify">
                  Selecting the right diffuser depends on several structural and branding factors:
                </p>
                <div className="space-y-4 text-base font-light">
                  <p>• <strong>Space Size:</strong> Large commercial spaces may require HVAC-integrated systems, while homes and offices may use standalone diffusers.</p>
                  <p>• <strong>Fragrance Preference:</strong> Different spaces require different scent profiles based on mood and purpose.</p>
                  <p>• <strong>Noise Level:</strong> Quiet operation is important for bedrooms, spas, clinics, and offices.</p>
                  <p>• <strong>Maintenance & Design:</strong> Low-maintenance systems and elegant layouts are better for modern commercial interiors.</p>
                </div>
              </motion.div>

              {/* POPULARITY RISE (H2) */}
              <motion.div {...fadeInUp} className="py-12 border-t border-slate-100">
                <h2 className="text-3xl md:text-4xl font-serif text-slate-900 mb-6 text-left">Why Aroma Diffusers Are Growing in Popularity in Dubai</h2>
                <p className="text-justify">
                  Dubai is known for premium lifestyle experiences. Businesses and homeowners are now paying more attention to how spaces feel, not just how they look. This growing focus on customer comfort, luxury experiences, and indoor atmosphere has increased the demand for <Link to="/" className="text-blue-600 font-medium underline">Essential Oil Diffusers in Dubai</Link>, commercial scent systems, office fragrance architecture, and premium aroma oils.
                </p>
              </motion.div>

            </div>

            {/* SIDEBAR */}
            <aside className="lg:col-span-4 lg:sticky lg:top-32 h-fit">
              <div className="bg-slate-900 rounded-[2.5rem] p-8 text-white shadow-xl">
                <h4 className="font-bold mb-6 uppercase text-xs tracking-widest text-blue-400">Atmosphere Guide</h4>
                <p className="text-sm text-slate-300 mb-8 text-left">
                  Transform your indoor setup into an experience-driven environment with tailored systems.
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

        {/* ================= BENEFITS SECTION ================= */}
        <section className="py-24 bg-slate-50 px-6 lg:px-16 text-left">
          <div className="max-w-[1400px] mx-auto">
            <h2 className="text-3xl md:text-5xl font-serif text-slate-900 mb-16 tracking-tighter text-left">Benefits of Using <br/><span className="text-blue-600 italic font-light">Aroma Oil Diffusers</span></h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[
                  { t: "Better Mood & Relaxation", d: "Pleasant fragrances help create calm and emotional comfort.", i: <FaceSmileIcon /> },
                  { t: "Improved Indoor Atmosphere", d: "Diffusers make spaces feel fresher and more welcoming.", i: <CloudIcon /> },
                  { t: "Professional Environment", d: "Consistent fragrance improves the perception of commercial spaces.", i: <BuildingOffice2Icon /> },
                  { t: "Long-Lasting Fragrance", d: "Modern diffusers provide steady scent distribution throughout the day.", i: <AdjustmentsHorizontalIcon /> },
                  { t: "Better Customer Experience", d: "A pleasant atmosphere helps create positive impressions and memorable experiences.", i: <UserGroupIcon /> },
                  { t: "Signature Branding", d: "Luxury hotels use signature fragrances to create memorable guest experiences.", i: <SparklesIcon /> }
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

        {/* ================= CONCLUSION (H2) ================= */}
        <section className="py-24 px-6 lg:px-16 border-t border-slate-100 text-left">
           <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-serif text-slate-900 mb-6 uppercase text-left">Conclusion</h2>
              <p className="text-lg text-slate-600 font-light leading-relaxed mb-8 text-justify">
                Aroma oil diffusers are no longer just fragrance devices. They have become an important part of creating comfortable, welcoming, and emotionally engaging environments. Whether in homes, offices, hotels, clinics, or retail spaces, the right fragrance can improve mood, increase comfort, and create memorable indoor experiences. As more businesses and homeowners invest in professional scent solutions, Aroma Oil Diffusers in Dubai continue to play a major role in shaping modern indoor atmospheres. Sometimes, the feeling people remember most about a space starts with the fragrance in the air.
              </p>
              <div className="relative">
                <div className="bg-slate-100 rounded-[4rem] p-12 overflow-hidden shadow-inner text-center">
                  <img src={BlogHeroImg} alt="Aroma Mood Dubai" className="w-full h-auto rounded-[2rem] shadow-2xl mx-auto max-w-2xl" />
                </div>
              </div>
           </div>
        </section>

        {/* ================= FINAL CTA ================= */}
        <section className="pb-32 px-6">
          <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} className="max-w-[1200px] mx-auto bg-blue-600 rounded-[4rem] p-16 md:p-24 text-center text-white relative shadow-2xl overflow-hidden">
            <div className="absolute top-0 right-0 w-96 h-96 bg-blue-50/10 blur-3xl rounded-full -translate-y-1/2 translate-x-1/2" />
            <h2 className="text-4xl md:text-6xl font-serif mb-8 tracking-tighter leading-tight relative z-10 uppercase font-bold text-white text-center">
              Improve Your <br />Indoor Atmosphere
            </h2>
            <p className="text-xl text-blue-100 mb-12 max-w-3xl mx-auto font-light leading-relaxed relative z-10 text-center">
              Transform your space into a relaxing and premium environment with Cool Max Scent.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 relative z-10">
              <a href={`https://wa.me/${whatsappNumber}`} target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto px-12 py-6 bg-white text-blue-600 rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-slate-900 hover:text-white transition-all shadow-xl flex items-center justify-center gap-3">
                <ChatBubbleLeftRightIcon className="w-5 h-5" /> Consult an Expert
              </a>
              <Link to="/contact/" className="w-full sm:w-auto px-12 py-6 bg-blue-800 text-white border border-blue-500 rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-white hover:text-blue-600 transition-all flex items-center justify-center gap-3">
                View Solutions <ArrowRightIcon className="w-4 h-4" />
              </Link>
            </div>
          </motion.div>
        </section>

      </div>
    </div>
  );
}