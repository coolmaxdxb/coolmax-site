import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {  
  ChatBubbleLeftRightIcon, 
  ArrowRightIcon,
  WrenchScrewdriverIcon,
  } from "@heroicons/react/24/outline";

// --- ASSET IMPORTS ---
import BlogHeroImg from "../../asset/blogimg/blog32.webp";

export default function GymScentSolutionsBlog() {
  const whatsappNumber = "971509282702";

  // --- SEO Implementation & Scroll Fix ---
  useEffect(() => {
    window.scrollTo(0, 0);

    document.title = "Cool Max Scent Solutions for Gyms | Boost Workout Experience";
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute("content", "Boost member experience with Cool Max Scent Solutions, delivering consistent fragrance and a clean, welcoming gym environment every day.");
    }
    
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', 'https://www.coolmaxscent.com/blog/cool-max-scent-solutions-for-gyms/');
  }, []);

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  return (
    <div className="relative min-h-screen bg-white text-slate-900 font-sans selection:bg-blue-100 overflow-x-hidden pt-16">
      
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-0 right-0 w-[1000px] h-[1000px] bg-slate-50 rounded-full blur-[150px]" />
        <div className="absolute bottom-0 left-0 w-[800px] h-[800px] bg-blue-50/30 rounded-full blur-[120px]" />
      </div>

      <div className="relative z-10">
        
        <section className="pt-20 pb-16 px-6 lg:px-16 max-w-[1400px] mx-auto text-left">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="max-w-5xl">
            <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-blue-50 border border-blue-100 mb-8">
              <WrenchScrewdriverIcon className="w-4 h-4 text-blue-600" />
              <span className="text-blue-700 text-[10px] font-black uppercase tracking-[0.3em]">Gym Fragrance Strategy</span>
            </div>
            
            <h1 className="text-4xl md:text-7xl font-serif text-slate-900 tracking-tighter leading-[1.1] mb-8 text-balance">
              Maximize Your Workouts with <span className="italic text-slate-400 font-light">Cool Max Scent Solutions for Gyms</span> 
            </h1>

            <p className="text-xl md:text-2xl text-slate-600 font-light leading-relaxed mb-10">
              Creating a successful gym goes beyond offering state-of-the-art equipment and professional trainers. The environment plays a major role in motivating members, improving comfort, and encouraging repeat visits.
            </p>

            <p className="text-xl md:text-2xl text-slate-600 font-light leading-relaxed mb-10">
              One often-overlooked factor that can significantly enhance the fitness experience is fragrance. With Cool Max Scent Solutions for Gyms, fitness centers can create a fresh, energizing atmosphere that helps members stay focused and motivated throughout their workouts.
            </p>
          </motion.div>
        </section>

        <section className="pb-24 px-6 lg:px-16 max-w-[1400px] mx-auto">
          <div className="grid lg:grid-cols-12 gap-16">
            <div className="lg:col-span-8 space-y-8 text-lg text-slate-600 font-light leading-relaxed">
              
              <div className="space-y-6">
                <p className="text-justify">
                  Unpleasant odors are common in gyms due to intense physical activity and high foot traffic. While proper cleaning is essential, maintaining a consistently fresh environment requires more than routine sanitation. Professional scent diffusion systems use premium fragrance diffuser oil to distribute pleasant aromas throughout the facility, helping create a cleaner and more welcoming space.
                </p>
              </div>

              <motion.div {...fadeInUp} className="py-10 border-t border-slate-100">
                <h2 className="text-3xl md:text-4xl font-serif mb-10 tracking-tight text-slate-900">The Impact of Fragrance on Workout Performance</h2>
                
                <p className="text-justify mb-8">
                  The human sense of smell is closely connected to emotions, energy levels, and overall mood. Certain scents can influence motivation, concentration, and mental clarity, making fragrance an effective tool for fitness environments.
                </p>

                <p className="text-justify mb-8">
                  Many gyms utilize carefully selected essential oil blends to create an invigorating atmosphere. Fresh citrus notes, mint, eucalyptus, and herbal fragrances are popular choices because they promote alertness and help members feel energized during exercise.
                </p>

                <p className="text-justify">
                  A pleasant-smelling fitness center also contributes to member confidence. People are more likely to enjoy their workouts and spend additional time at a facility that feels clean, comfortable, and professionally maintained.
                </p>
              </motion.div>

              <motion.div {...fadeInUp} className="py-12 border-t border-slate-100">
                <h2 className="text-3xl md:text-4xl font-serif mb-10 tracking-tight text-slate-900">Why Professional Scent Diffusion Matters</h2>

                <p className="text-justify mb-8">
                  Traditional air fresheners often provide inconsistent fragrance coverage and may only mask odors temporarily. Professional scenting systems offer a more effective solution by evenly dispersing essential diffuser oil throughout the facility.
                </p>

                <p className="text-justify mb-8">
                  These advanced systems ensure that fragrance reaches every area of the gym, including reception spaces, cardio zones, strength-training areas, locker rooms, and group fitness studios. Consistent scent delivery helps maintain a fresh atmosphere throughout operating hours without becoming overpowering.
                </p>

                <p className="text-justify">
                  Professional scent diffusion also allows gym operators to customize fragrance intensity based on facility size and member preferences. This creates a balanced environment that enhances comfort while maintaining a professional image.
                </p>
              </motion.div>

              <motion.div {...fadeInUp} className="py-12 border-t border-slate-100">
                <h2 className="text-3xl md:text-4xl font-serif mb-10 tracking-tight text-slate-900">Benefits of Cool Max Scent Solutions for Gyms</h2>

                <p className="text-justify mb-8">
                  One of the biggest advantages of using premium scent fragrance oil is the ability to improve the overall member experience. A refreshing fragrance can help reduce the perception of unpleasant odors while creating a more inviting environment.
                </p>

                <p className="text-justify mb-8">
                  Additionally, scenting can strengthen a gym's brand identity. Just as luxury hotels use signature fragrances to create memorable experiences, fitness centers can establish a unique atmosphere that members associate with motivation, cleanliness, and wellness.
                </p>

                <p className="text-justify">
                  A fresh and energizing environment can also contribute to member retention. When visitors consistently enjoy their experience, they are more likely to renew memberships, recommend the facility to others, and become long-term clients.
                </p>
              </motion.div>

              <motion.div {...fadeInUp} className="py-16 border-t border-slate-100">
                <h2 className="text-3xl md:text-4xl font-serif mb-6 tracking-tight text-slate-900 uppercase">Conclusion</h2>
                <p className="text-justify mb-4">
                  The fitness experience extends beyond exercise equipment and workout programs. Environment plays a critical role in how members feel before, during, and after their workouts.
                </p>

                <p className="text-justify mb-4">
                  <a href="https://www.coolmaxscent.com/" className="text-blue-600 hover:underline font-bold">Cool Max Scent Solutions for Gyms</a> help create a fresh, motivating atmosphere that enhances comfort and supports member satisfaction.
                </p>

                <p className="text-justify">
                  By using premium essential oil, essential diffuser oil, scent fragrance oil, and fragrance diffuser oil, gyms can maintain a welcoming environment that promotes energy, focus, and overall wellness. Investing in professional scent diffusion is a simple yet powerful way to elevate the member experience and help every workout feel more enjoyable and productive.
                </p>
              </motion.div>

            </div>

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
                  <img src={BlogHeroImg} alt="Gym fragrance diffusion" className="w-full h-full object-cover" />
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

        <section className="pb-32 px-6">
          <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} className="max-w-[1200px] mx-auto bg-slate-900 rounded-[4rem] p-16 md:p-24 text-center text-white relative shadow-2xl overflow-hidden">
            <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/10 blur-3xl rounded-full -translate-y-1/2 translate-x-1/2" />
            
            <h2 className="text-4xl md:text-6xl font-serif mb-8 tracking-tighter leading-tight relative z-10 uppercase font-bold">
              Transform Your Gym with Energizing Fragrance Solutions That Inspire Results
            </h2>
            <p className="text-xl text-slate-400 mb-12 max-w-3xl mx-auto font-light leading-relaxed relative z-10">
              Create a fresh, motivating fitness environment with premium scent diffusion systems designed to enhance member comfort and retention.
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
