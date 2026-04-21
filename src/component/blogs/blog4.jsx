import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";


import { 
  SparklesIcon, 
  ChatBubbleLeftRightIcon, 
  ArrowRightIcon,
  CheckCircleIcon,
} from "@heroicons/react/24/outline";

// --- ASSET IMPORTS ---
import BlogHeroImg from "../../asset/hero/hero3.gif"; 


export default function ScentMarketingBlog() {
  const whatsappNumber = "971509282702";

  // --- SEO Implementation & Scroll Fix ---
  useEffect(() => {
    window.scrollTo(0, 0);

    document.title = "Why 5-Star Hotels in Dubai Use Scent Diffusers | Cool Max Scent";
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute("content", "Discover why leading 5-star hotels in Dubai invest in hotel scent diffuser systems and how scent marketing elevates the luxury hospitality experience.");
    }
    
    // Canonical link handling
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', 'https://www.coolmaxscent.com/blog/why-5-star-hotels-dubai-use-scent-diffusers');
  }, []);

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
              <span className="text-blue-700 text-[10px] font-black uppercase tracking-[0.3em]">Hospitality Excellence</span>
            </div>
            
            <h1 className="text-4xl md:text-7xl font-serif text-slate-900 tracking-tighter leading-[1.1] mb-8 text-left">
              Why 5-Star Hotels in Dubai Use Scent Diffusers - <br />
              <span className="italic text-slate-400 font-light text-left">The Power of Scent Marketing in Luxury Hospitality</span>
            </h1>

            <p className="text-xl md:text-2xl text-slate-600 font-light leading-relaxed mb-10 text-left">
              Walk into any 5-star hotel in Dubai, and you'll immediately notice something beyond the stunning architecture and marble interiors—a signature scent that wraps around you like a warm welcome.
            </p>
          </motion.div>
        </section>

        {/* ================= MAIN CONTENT ================= */}
        <section className="pb-24 px-6 lg:px-16 max-w-[1400px] mx-auto text-left">
          <div className="grid lg:grid-cols-12 gap-16 text-left">
            <div className="lg:col-span-8 space-y-8 text-lg text-slate-600 font-light leading-relaxed text-left">
              
              <div className="space-y-6 text-left">
                <p className="text-justify text-left">
                  This isn't accidental. It's a carefully crafted sensory experience designed by hospitality experts who understand that scent marketing solutions in UAE have become as essential as exceptional service.
                </p>
                <p className="text-justify text-left">
                  Dubai's luxury hotel scene is among the most competitive in the world. With over 700 hotels and 140,000 rooms, standing out requires more than just beautiful decor. It requires creating memories. And nothing triggers memory quite like fragrance.
                </p>
                <p className="text-justify text-left">
                  In this blog, we'll explore why Dubai's most prestigious hotels invest in professional scenting, how commercial aroma diffusers in UAE transform guest experiences, and why <Link to="/floor-standing-aroma-diffusers/" className="text-blue-600 font-medium underline hover:text-blue-800 transition-colors">floor-standing aroma diffusers</Link> in UAE have become the preferred choice for luxury lobbies.
                </p>  
              </div>
              
              

              {/* THE SCIENCE BEHIND (H2) */}
              <div className="py-10 text-left text-left">
                <h2 className="text-3xl md:text-4xl font-serif mb-6 tracking-tight text-slate-900 text-left">The Science Behind Hotel Scenting</h2>
                <p className="mb-6 text-justify text-left text-left">
                  Before understanding the "why," we must understand the "how." The human brain processes scent 10,000 times faster than visual or auditory cues. Within milliseconds of inhaling a fragrance, it triggers emotional and memory responses.
                </p>
                <p className="mb-6 text-left">For luxury hotels, this science translates into opportunity. A carefully chosen signature scent can:</p>
                <div className="grid md:grid-cols-1 gap-4 mb-8 text-left">
                  {[
                    "Reduce perceived wait times in lobbies",
                    "Increase guest dwell time in commercial areas",
                    "Create positive brand association",
                    "Encourage repeat visits",
                    "Enhance overall guest satisfaction scores"
                  ].map((item, i) => (
                    <div key={i} className="flex gap-3 items-start text-base text-slate-700 bg-slate-50 p-4 rounded-xl text-left">
                      <CheckCircleIcon className="w-5 h-5 text-blue-600 shrink-0" /> {item}
                    </div>
                  ))}
                </div>
                <div className="p-8 bg-blue-50 border-l-4 border-blue-400 rounded-r-2xl text-left text-left">
                   <p className="text-blue-900 font-bold mb-2 text-left">Key Research Insight:</p>
                   <p className="text-blue-800 text-base text-left">According to research, scented environments lead to 40% better mood elevation and 30% increased willingness to return. For 5-star hotels where every detail matters, these numbers are impossible to ignore.</p>
                </div>
              </div>

              {/* WHY DUBAI HOTELS LEAD (H2) */}
              <div className="py-10 text-left text-left">
                <h2 className="text-3xl md:text-4xl font-serif mb-6 tracking-tight text-slate-900 text-left text-left">Why Dubai Hotels Lead the Scent Marketing Movement</h2>
                <p className="mb-6 text-justify text-left">
                  Dubai's hospitality sector operates at global standards—often exceeding them. When it comes to guest experience, nothing is left to chance. The city's extreme climate also plays a role. Guests move from air-conditioned cars to air-conditioned lobbies, making indoor air quality and ambiance critical.
                </p>
                <p className="mb-6 text-left">This is where commercial scent diffusers in UAE come into play. Unlike residential diffusers, commercial systems are designed for:</p>
                <ul className="space-y-4 mb-8 text-left">
                    <li className="flex items-center gap-3 bg-slate-50 p-4 rounded-xl text-base text-left"><CheckCircleIcon className="w-5 h-5 text-blue-600"/> Large, open spaces with high ceilings</li>
                    <li className="flex items-center gap-3 bg-slate-50 p-4 rounded-xl text-base text-left"><CheckCircleIcon className="w-5 h-5 text-blue-600"/> Continuous 24/7 operation</li>
                    <li className="flex items-center gap-3 bg-slate-50 p-4 rounded-xl text-base text-left"><CheckCircleIcon className="w-5 h-5 text-blue-600"/> Consistent fragrance output regardless of HVAC cycles</li>
                    <li className="flex items-center gap-3 bg-slate-50 p-4 rounded-xl text-base text-left"><CheckCircleIcon className="w-5 h-5 text-blue-600"/> Low maintenance requirements</li>
                    <li className="flex items-center gap-3 bg-slate-50 p-4 rounded-xl text-base text-left"><CheckCircleIcon className="w-5 h-5 text-blue-600"/> Professional-grade reliability</li>
                </ul>
                <p className="text-justify font-light italic text-left">
                  Hotels like Burj Al Arab, Atlantis The Palm, and Emirates Palace didn't become iconic by accident. Their signature scents are part of their brand identity—as recognizable as their logos.
                </p>
              </div>

              {/* TYPES OF DIFFUSERS (H2) */}
              <div className="py-10 text-left border-t border-slate-100 text-left">
                <h2 className="text-3xl md:text-4xl font-serif mb-8 tracking-tight text-slate-900 text-left uppercase font-bold text-left">Types of Scent Diffusers Used in Luxury Hotels</h2>
                
                {/* H3 Section 1 */}
                <div className="mb-12 text-left">
                    <h3 className="text-2xl font-serif mb-4 text-blue-600 text-left">1. Floor-Standing Aroma Diffusers in UAE</h3>
                    <p className="mb-6 text-justify text-left">The most visible and elegant option for hotel lobbies is the floor-standing aroma diffuser in UAE. These units serve dual purposes:</p>
                    <div className="space-y-4 ml-4 text-left">
                        <p className="text-base text-left"><strong className="text-slate-900">Aesthetic Appeal:</strong> Designed to complement luxury interiors, floor-standing diffusers look like pieces of art. Available in various finishes—chrome, gold, matte black, wood—they blend seamlessly with hotel decor.</p>
                        <p className="text-base text-left"><strong className="text-slate-900">Powerful Performance:</strong> Unlike small tabletop units, floor-standing models can fragrance areas up to 500 square meters. They're ideal for:</p>
                        <ul className="grid grid-cols-2 gap-2 text-sm ml-6 list-disc text-slate-500 text-left">
                            <li>Hotel lobbies and reception areas</li>
                            <li>Grand ballrooms and event spaces</li>
                            <li>Spa entrances and relaxation zones</li>
                            <li>Fine dining restaurant entrances</li>
                        </ul>
                        <p className="text-base text-left"><strong className="text-slate-900">Mobility:</strong> Many floor-standing units are portable, allowing hotels to reposition them for special events, weddings, or seasonal promotions.</p>
                    </div>
                </div>

                {/* H3 Section 2 */}
                <div className="mb-12 text-left">
                    <h3 className="text-2xl font-serif mb-4 text-blue-600 text-left">2. HVAC Scent Diffuser Systems</h3>
                    <p className="mb-6 text-justify text-left">For hotels seeking whole-building fragrance coverage, <Link to="/hvac-scenting-solutions/" className="text-blue-600 font-medium underline hover:text-blue-800 transition-colors">HVAC scent diffuser systems</Link> technology is the answer. These systems integrate directly with existing heating, ventilation, and air conditioning infrastructure.</p>
                    <p className="mb-4 font-bold text-slate-900 text-base text-left">Benefits of HVAC-integrated scenting:</p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6 text-left">
                        {[
                            "Uniform fragrance distribution across all connected spaces",
                            "No visible equipment in guest areas",
                            "Centralized control and monitoring",
                            "Ability to scent corridors, meeting rooms, and back-of-house areas",
                            "Integration with building management systems"
                        ].map((benefit, i) => (
                            <div key={i} className="flex gap-2 items-center text-sm bg-slate-50 p-3 rounded-lg border border-slate-100 text-left">
                                <CheckCircleIcon className="w-4 h-4 text-blue-500" /> {benefit}
                            </div>
                        ))}
                    </div>
                    <p className="text-sm italic text-left text-justify">Many 5-star hotels in Dubai use hybrid approaches—HVAC diffusers for overall coverage and floor-standing units for accent areas.</p>
                </div>

                {/* H3 Section 3 & Table */}
                <div className="mb-12 text-left">
                    <h3 className="text-2xl font-serif mb-4 text-blue-600 text-left">3. Hotel Scent Diffuser System for Specific Zones</h3>
                    <p className="mb-6 text-justify text-left">A complete hotel scent diffuser system isn't one-size-fits-all. Luxury properties typically use multiple units for different zones:</p>
                    
                    <div className="overflow-x-auto rounded-2xl border border-slate-200 shadow-sm text-left">
                        <table className="w-full text-left text-sm text-left">
                            <thead className="bg-slate-900 text-white uppercase text-[10px] tracking-widest text-left">
                                <tr>
                                    <th className="px-6 py-4 text-left">Hotel Zone</th>
                                    <th className="px-6 py-4 text-left">Recommended Diffuser Type</th>
                                    <th className="px-6 py-4 text-left">Fragrance Profile</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-slate-100 text-left">
                                {[
                                    { zone: "Main Lobby", type: "Floor-standing or HVAC", fragrance: "Warm, welcoming, signature scent" },
                                    { zone: "Spa & Wellness", type: "Wall-mounted", fragrance: "Calming lavender, eucalyptus" },
                                    { zone: "Fine Dining", type: "Discreet HVAC", fragrance: "Subtle, appetite-enhancing" },
                                    { zone: "Meeting Rooms", type: "HVAC", fragrance: "Fresh, focus-enhancing citrus" },
                                    { zone: "Corridors", type: "HVAC or ceiling-mounted", fragrance: "Light, clean cotton or linen" },
                                    { zone: "Pool & Beach", type: "Weather-resistant floor units", fragrance: "Tropical, refreshing" }
                                ].map((row, i) => (
                                    <tr key={i} className="hover:bg-blue-50/30 transition-colors text-left">
                                        <td className="px-6 py-4 font-bold text-slate-900 text-left">{row.zone}</td>
                                        <td className="px-6 py-4 text-left">{row.type}</td>
                                        <td className="px-6 py-4 italic text-slate-500 text-left">{row.fragrance}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
              </div>

              {/* COMMERCIAL IMPACT (H2) */}
              <div className="py-10 text-left bg-slate-50 rounded-[3rem] p-10 md:p-16 text-left text-left">
                <h2 className="text-3xl md:text-4xl font-serif mb-8 tracking-tight text-slate-900 text-left text-left">The Commercial Impact of Scent Marketing</h2>
                <p className="mb-8 text-left">Beyond guest experience, commercial aroma diffusers in UAE deliver measurable business results.</p>
                
                <div className="space-y-10 text-left text-left">
                    <div className="text-left">
                        <h3 className="text-xl font-bold text-slate-900 mb-2 text-left">Increased Revenue Per Available Room (RevPAR)</h3>
                        <p className="text-base text-justify text-left">Hotels with signature scents report higher guest satisfaction scores, leading to better online reviews and increased direct bookings. A single percentage point increase in occupancy can translate to millions in annual revenue.</p>
                    </div>
                    <div className="text-left">
                        <h3 className="text-xl font-bold text-slate-900 mb-2 text-left">Extended Lobby Dwell Time</h3>
                        <p className="text-base text-justify text-left">When guests enjoy the ambiance, they linger. Longer lobby stays mean more opportunities for impulse purchases at gift shops, café and restaurant visits, spa treatment bookings, and concierge inquiries.</p>
                    </div>
                    <div className="text-left">
                        <h3 className="text-xl font-bold text-slate-900 mb-2 text-left">Brand Differentiation</h3>
                        <p className="text-base text-justify text-left">Dubai has over 100 five-star hotels. When guests can't remember which property they stayed at, the hotel loses future business. A signature scent creates instant recognition. Guests walk into another property, smell "their" scent, and feel at home.</p>
                    </div>
                </div>
              </div>

              {/* CHOOSING PARTNER (H2) */}
              <div className="py-16 text-left border-b border-slate-100 text-left">
                <h2 className="text-3xl md:text-4xl font-serif mb-6 tracking-tight text-slate-900 text-left uppercase text-left">Choosing the Right Scent Partner</h2>
                <p className="mb-8 text-justify text-left">Not all scent companies are equal. When selecting scent marketing solutions in UAE, hotels should consider:</p>
                <div className="grid md:grid-cols-2 gap-6 text-left">
                    {[
                        { t: "Experience and Expertise", d: "How long has the company operated in the UAE? Do they understand local preferences and climate challenges?" },
                        { t: "Equipment Quality", d: "Are the diffusers commercial-grade? Can they operate 24/7 without failure? What maintenance is required?" },
                        { t: "Fragrance Quality", d: "Are fragrances formulated specifically for commercial diffusion? Do they use high-quality essential oils or synthetics? Are they safe for continuous inhalation?" },
                        { t: "Support and Maintenance", d: "What happens when a unit needs refilling or servicing? Is technical support available 24/7?" },
                        { t: "Customization Ability", d: "Can the company create a custom signature scent exclusively for your brand?" }
                    ].map((card, i) => (
                        <div key={i} className="p-6 bg-white rounded-2xl shadow-sm border border-slate-100 flex flex-col gap-2 text-left text-left">
                            <span className="text-blue-500 font-black text-xs uppercase tracking-tighter text-left">Criteria {i+1}</span>
                            <h4 className="font-bold text-slate-900 text-left">{card.t}</h4>
                            <p className="text-sm leading-relaxed text-slate-500 text-left text-justify">{card.d}</p>
                        </div>
                    ))}
                </div>
              </div>

              {/* COOL MAX (H2) */}
              <div className="py-16 text-left bg-blue-600 rounded-[3rem] p-10 md:p-16 text-white text-left text-left">
                <h2 className="text-3xl md:text-4xl font-serif mb-8 tracking-tight text-white text-left uppercase font-bold text-left">Cool Max: Trusted by Dubai's Finest Hotels</h2>
                <p className="mb-10 text-blue-100 text-left">Since 2020, <Link to="/" className="text-white font-bold underline decoration-blue-300 underline-offset-4">Cool Max Scent</Link> has provided commercial scent diffusers in UAE to some of the region's most prestigious properties. Our approach is simple—understand the space, understand the brand, and recommend the right solution.</p>
                <p className="mb-6 font-bold uppercase tracking-widest text-xs text-blue-200 text-left">We offer:</p>
                <div className="grid md:grid-cols-2 gap-4 text-sm text-left">
                    <ul className="space-y-3 text-left">
                        <li className="flex items-center gap-2 text-left">• Floor-standing aroma diffusers with elegant designs</li>
                        <li className="flex items-center gap-2 text-left">• HVAC scent diffuser systems for whole-building coverage</li>
                        <li className="flex items-center gap-2 text-left">• Hotel scent diffuser system packages</li>
                    </ul>
                    <ul className="space-y-3 text-left">
                        <li className="flex items-center gap-2 text-left">• Professional installation and maintenance</li>
                        <li className="flex items-center gap-2 text-left">• Custom fragrance development</li>
                        <li className="flex items-center gap-2 text-left">• 24/7 technical support</li>
                    </ul>
                </div>
                <p className="mt-10 text-xs text-blue-200 italic text-left">Our clients include public and private hospitals, corporate offices, retail chains, and leading hotels across Dubai, Abu Dhabi, and the wider UAE.</p>
              </div>

              {/* FINAL THOUGHT (H2) */}
              <div className="py-16 text-left text-left">
                 <h2 className="text-3xl md:text-4xl font-serif mb-6 tracking-tight text-slate-900 text-left uppercase text-left">Final Thoughts</h2>
                 <p className="text-xl font-serif italic text-slate-400 mb-6 text-justify leading-relaxed text-left">
                    Why do 5-star hotels in Dubai use scent diffusers? Because in luxury hospitality, every detail matters. Because guests remember how you made them feel. Because in a city of architectural wonders, the invisible details create the most lasting impressions.
                 </p>
                 <p className="text-justify mb-4 text-left">
                    Commercial aroma diffusers in UAE have evolved from luxury additions to essential investments. Whether through elegant floor-standing units or integrated HVAC systems, professional scenting delivers measurable returns—in guest satisfaction, brand loyalty, and revenue.
                 </p>
                 <p className="text-justify text-left">
                    At Cool Max, we're proud to partner with hotels that refuse to compromise on guest experience. Our scent marketing solutions in UAE combine cutting-edge technology with personalized service, ensuring every property we serve creates unforgettable first impressions.
                 </p>
              </div>

            </div>

            {/* SIDEBAR WIDGETS */}
            <aside className="lg:col-span-4 lg:sticky lg:top-32 h-fit text-left">
              <div className="bg-slate-950 rounded-[2.5rem] p-8 text-white shadow-xl text-left overflow-hidden relative text-left">
                <div className="absolute top-0 right-0 w-32 h-32 bg-blue-600/20 blur-2xl rounded-full text-left" />
                <h4 className="font-bold mb-6 uppercase text-xs tracking-widest text-left text-blue-400 relative z-10 text-left">Luxury Scenting</h4>
                <p className="text-slate-400 text-sm leading-relaxed mb-8 text-justify relative z-10 text-left">
                  Join Dubai's leading hotels. Let our specialists design a custom signature scent strategy for your 5-star property.
                </p>
                <div className="space-y-4 relative z-10 text-left">
                  <a href={`https://wa.me/${whatsappNumber}`} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-3 bg-[#25D366] text-white w-full py-4 rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-white hover:text-slate-900 transition-all text-center">
                    <ChatBubbleLeftRightIcon className="w-5 h-5" /> WhatsApp Experts
                  </a>
                  <Link to="/contact/" className="flex items-center justify-center gap-3 bg-white text-slate-900 w-full py-4 rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-blue-600 hover:text-white transition-all text-center">
                    Get Free Quote
                  </Link>
                </div>
              </div>

              <div className="mt-8 bg-white border border-slate-100 rounded-[2.5rem] p-8 shadow-sm text-left">
                 <h4 className="font-bold mb-6 uppercase text-xs tracking-widest text-slate-400 text-left">Preferred Lobby System</h4>
                 <div className="h-40 bg-slate-50 rounded-2xl mb-4 flex items-center justify-center p-6 text-center">
                    <img src={BlogHeroImg} alt="Floor-standing Diffuser" className="h-full object-contain mx-auto" />
                 </div>
                 <h5 className="font-serif text-lg mb-2 text-left">Cool Max Floor-Standing Units</h5>
                 <p className="text-slate-500 text-xs font-light mb-6 text-left">Designed to fragrance up to 500sqm while complementing luxury interiors.</p>
                 <Link to="/floor-standing-aroma-diffusers/" className="text-[10px] font-black uppercase text-blue-600 flex items-center gap-2 hover:gap-3 transition-all text-left">
                    View Diffusers <ArrowRightIcon className="w-3 h-3" />
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
              Unforgettable <br />First Impressions
            </h2>
            <p className="text-xl text-slate-400 mb-12 max-w-3xl mx-auto font-light leading-relaxed relative z-10 text-center font-sans text-center">
              Deploy professional hotel scent diffuser systems and create signature experiences that your guests will associate with your brand forever.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 relative z-10 w-full max-w-2xl mx-auto text-center text-left">
              <a 
                href={`https://wa.me/${whatsappNumber}`} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex-1 w-full px-12 py-6 bg-[#25D366] text-white rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-white hover:text-slate-900 transition-all shadow-xl flex items-center justify-center gap-3 border border-transparent text-center"
              >
                <ChatBubbleLeftRightIcon className="w-5 h-5 text-left" /> 
                <span className="whitespace-nowrap">WhatsApp Specialist</span>
              </a>

              <Link 
                to="/contact/" 
                className="flex-1 w-full px-12 py-6 bg-white text-slate-900 border border-white rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-blue-600 hover:text-white transition-all flex items-center justify-center gap-3 shadow-xl text-center"
              >
                <span className="whitespace-nowrap">Get a Custom Proposal</span>
                <ArrowRightIcon className="w-4 h-4 text-left" />
              </Link>
            </div>
          </motion.div>
        </section>

      </div>
    </div>
  );
}