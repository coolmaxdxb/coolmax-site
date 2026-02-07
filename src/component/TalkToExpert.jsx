import React from "react";
import {
  PhoneIcon,
  EnvelopeIcon,
  MapPinIcon,
  ArrowLongRightIcon,
  BeakerIcon,
  ClockIcon,
  ShieldCheckIcon,
  GlobeAltIcon,
  SparklesIcon,
  LightBulbIcon,
  Square3Stack3DIcon
} from "@heroicons/react/24/outline";

export default function TalkToExpert() {
  return (
    <section id="contact" className="relative bg-white py-24 lg:py-32 overflow-hidden selection:bg-blue-100 selection:text-blue-900">
      
      {/* ================= BACKGROUND ATMOSPHERE (WHITE & GREY GRADIENT) ================= */}
      <div className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-0 bg-gradient-to-b from-gray-50 via-white to-gray-100" />
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-500/5 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-600/5 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2" />
          <div className="absolute inset-0 opacity-[0.05]" style={{ backgroundImage: `url("https://www.transparenttextures.com/patterns/stardust.png")` }}></div>
      </div>

      <div className="relative max-w-[1400px] mx-auto px-6 md:px-12">
        
        {/* ================= HERO CONTACT SECTION ================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 mb-32">
          
          {/* LEFT: INFO */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <span className="inline-block py-1 px-3 rounded-full border border-blue-200 bg-blue-50 text-blue-600 text-xs font-bold tracking-widest uppercase mb-6 mt-16 shadow-sm">
                Get in Touch
              </span>
              <h2 className="text-5xl md:text-6xl font-serif text-slate-900 mb-6 leading-tight">
                Let's Scent Your <br/> <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-400">Brand Identity.</span>
              </h2>
              <p className="text-slate-500 text-lg font-light leading-relaxed mb-12">
                Ready to transform your environment? Our scent architects in Dubai and Doha are ready to design your signature atmosphere.
              </p>
            </div>

            <div className="space-y-6">
              <div className="group p-6 rounded-2xl bg-white border border-slate-200 hover:border-blue-500/50 hover:shadow-xl hover:shadow-blue-500/5 transition-all duration-300">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-serif text-slate-900">United Arab Emirates</h3>
                  <img src="https://flagcdn.com/w40/ae.png" alt="UAE" className="h-5 grayscale group-hover:grayscale-0 transition-all" />
                </div>
                <div className="space-y-3 text-sm text-slate-500">
                   <div className="flex gap-3 items-start">
                      <MapPinIcon className="w-5 h-5 text-blue-600 shrink-0" />
                      <span>Waha Al Reem Office, Muweilah – Sharjah</span>
                   </div>
                   <div className="flex gap-3 items-center">
                      <PhoneIcon className="w-5 h-5 text-blue-600 shrink-0" />
                      <span className="group-hover:text-slate-900 transition-colors font-medium">+971 52 228 6401</span>
                   </div>
                   <div className="flex gap-3 items-center">
                      <EnvelopeIcon className="w-5 h-5 text-blue-600 shrink-0" />
                      <span className="group-hover:text-slate-900 transition-colors font-medium">secretary@coolmaxscent.com</span>
                   </div>
                </div>
              </div>

              <div className="group p-6 rounded-2xl bg-white border border-slate-200 hover:border-blue-500/50 hover:shadow-xl hover:shadow-blue-500/5 transition-all duration-300">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-serif text-slate-900">Qatar</h3>
                  <img src="https://flagcdn.com/w40/qa.png" alt="Qatar" className="h-5 grayscale group-hover:grayscale-0 transition-all" />
                </div>
                <div className="space-y-3 text-sm text-slate-500">
                   <div className="flex gap-3 items-start">
                      <MapPinIcon className="w-5 h-5 text-blue-600 shrink-0" />
                      <span>Doha, Qatar</span>
                   </div>
                   <div className="flex gap-3 items-center">
                      <PhoneIcon className="w-5 h-5 text-blue-600 shrink-0" />
                      <span className="group-hover:text-slate-900 transition-colors font-medium">+974 66 043 446</span>
                   </div>
                   <div className="flex gap-3 items-center">
                      <EnvelopeIcon className="w-5 h-5 text-blue-600 shrink-0" />
                      <span className="group-hover:text-slate-900 transition-colors font-medium">salesqatar@coolmaxscent.com</span>
                   </div>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT: FORM */}
          <div className="lg:col-span-7 bg-white p-8 md:p-12 rounded-[2rem] border border-slate-200 shadow-2xl shadow-slate-200/50 relative">
            <div className="absolute top-0 left-12 w-20 h-1 bg-blue-600 rounded-b-full"></div>
            <h3 className="text-3xl font-serif text-slate-900 mb-8">Send an Enquiry</h3>
            <form className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="group">
                  <label className="text-xs uppercase tracking-widest text-slate-400 mb-2 block group-focus-within:text-blue-600 transition-colors font-bold">Full Name</label>
                  <input type="text" className="w-full bg-transparent border-b border-slate-200 py-3 text-slate-900 focus:outline-none focus:border-blue-600 transition-colors placeholder:text-slate-300" placeholder="John Doe" />
                </div>
                <div className="group">
                  <label className="text-xs uppercase tracking-widest text-slate-400 mb-2 block group-focus-within:text-blue-600 transition-colors font-bold">Phone Number</label>
                  <input type="tel" className="w-full bg-transparent border-b border-slate-200 py-3 text-slate-900 focus:outline-none focus:border-blue-600 transition-colors placeholder:text-slate-300" placeholder="+971 50 000 0000" />
                </div>
              </div>
              <div className="group">
                <label className="text-xs uppercase tracking-widest text-slate-400 mb-2 block group-focus-within:text-blue-600 transition-colors font-bold">Email Address</label>
                <input type="email" className="w-full bg-transparent border-b border-slate-200 py-3 text-slate-900 focus:outline-none focus:border-blue-600 transition-colors placeholder:text-slate-300" placeholder="john@company.com" />
              </div>
              <div className="group">
                <label className="text-xs uppercase tracking-widest text-slate-400 mb-2 block group-focus-within:text-blue-600 transition-colors font-bold">Message</label>
                <textarea rows="4" className="w-full bg-transparent border-b border-slate-200 py-3 text-slate-900 focus:outline-none focus:border-blue-600 transition-colors resize-none placeholder:text-slate-300" placeholder="Tell us about your space..." />
              </div>
              <div className="pt-4">
                <button type="submit" className="w-full md:w-auto px-10 py-4 bg-blue-600 hover:bg-slate-900 text-white font-bold uppercase tracking-widest transition-all duration-300 rounded-sm flex items-center justify-center gap-4 group shadow-lg shadow-blue-600/20">
                  Submit Request <ArrowLongRightIcon className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* ================= SECTION 2: GLOBAL EXPERTISE STATS ================= */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-32 border-y border-slate-200 py-16">
            {[
                { label: "Regional Presence", val: "GCC Wide", icon: GlobeAltIcon },
                { label: "Scent Collections", val: "500+", icon: BeakerIcon },
                { label: "Installation Time", val: "24 Hours", icon: ClockIcon },
                { label: "Industry Standard", val: "IFRA Certified", icon: ShieldCheckIcon },
            ].map((stat, i) => (
                <div key={i} className="text-center group">
                    <stat.icon className="w-8 h-8 text-blue-600 mx-auto mb-4 opacity-40 group-hover:opacity-100 transition-opacity" />
                    <h4 className="text-2xl md:text-3xl font-serif text-slate-900 mb-1">{stat.val}</h4>
                    <p className="text-[10px] uppercase tracking-widest text-slate-400 font-bold">{stat.label}</p>
                </div>
            ))}
        </div>

        {/* ================= SECTION 3: THE SCENTING PROCESS ================= */}
        <div className="mb-32">
            <div className="text-center mb-16">
                <h3 className="text-4xl font-serif text-slate-900 mb-4">Our Methodology</h3>
                <p className="text-slate-400 uppercase tracking-widest text-xs font-black">Architecture of Atmosphere</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[
                    { step: "01", title: "Consultation", desc: "We analyze your floor plan and air circulation to determine optimal placement.", icon: LightBulbIcon },
                    { step: "02", title: "Curation", desc: "Select or develop a custom fragrance that mirrors your brand values.", icon: SparklesIcon },
                    { step: "03", title: "Diffusion", desc: "Cold-air atomization technology ensures a consistent, pure aromatic experience.", icon: Square3Stack3DIcon },
                ].map((item, i) => (
                    <div key={i} className="relative p-10 rounded-[2rem] bg-white border border-slate-100 shadow-sm hover:shadow-md hover:border-blue-200 transition-all">
                        <span className="text-6xl font-black text-slate-50 absolute top-6 right-8 -z-0">{item.step}</span>
                        <item.icon className="w-12 h-12 text-blue-600 mb-6 relative z-10" />
                        <h4 className="text-2xl font-serif text-slate-900 mb-4 relative z-10">{item.title}</h4>
                        <p className="text-slate-500 font-light leading-relaxed relative z-10">{item.desc}</p>
                    </div>
                ))}
            </div>
        </div>

        {/* ================= SECTION 4: QUICK HELP / FAQ ================= */}
        <div className="max-w-4xl mx-auto">
            <div className="bg-slate-50 p-12 rounded-[3rem] border border-slate-200 text-center">
                <h3 className="text-3xl font-serif text-slate-900 mb-12">Common Enquiries</h3>
                <div className="grid gap-6 text-left">
                    {[
                        { q: "What is cold-air atomization?", a: "A dry-mist technology that uses filtered room air to diffuse oils without heat, preserving scent purity." },
                        { q: "Do you offer refill services?", a: "Yes, our team manages monthly refills and maintenance in Sharjah, Doha, and across the GCC." },
                        { q: "Are the fragrances safe?", a: "Every CoolMax scent is IFRA compliant and hypoallergenic for high-traffic commercial spaces." }
                    ].map((faq, i) => (
                        <div key={i} className="group border-b border-slate-200 pb-6">
                            <h5 className="text-blue-600 font-bold text-sm uppercase tracking-wide mb-2 flex items-center gap-2">
                                <ArrowLongRightIcon className="w-4 h-4 opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all" />
                                {faq.q}
                            </h5>
                            <p className="text-slate-500 font-light text-base pl-6">{faq.a}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>

      </div>
    </section>
  );
}