import React from "react";
import { 
  BuildingOffice2Icon, 
  SparklesIcon, 
  ShoppingBagIcon, 
  HeartIcon,
  TrophyIcon,
  HomeIcon,
  TruckIcon,
  ArrowRightIcon,
  MapPinIcon,
  SwatchIcon,
  ShieldCheckIcon,
  HandThumbUpIcon,
  UserGroupIcon,
  CheckBadgeIcon
} from "@heroicons/react/24/outline";

export default function IndustriesSection() {
  const industries = [
    {
      name: "Offices & Corporate Spaces",
      desc: "Improve focus, comfort, and professionalism with consistent fragrance diffusion.",
      icon: <BuildingOffice2Icon className="w-6 h-6" />,
    },
    {
      name: "Hotels & Hospitality",
      desc: "Enhance guest experience with premium hotel scent machines and hotel air freshener systems.",
      icon: <SparklesIcon className="w-6 h-6" />,
    },
    {
      name: "Retail Stores & Shopping Malls",
      desc: "Increase customer dwell time and improve shopping experience with ambient scenting.",
      icon: <ShoppingBagIcon className="w-6 h-6" />,
    },
    {
      name: "Hospitals & Clinics",
      desc: "Create a clean, calm environment that supports patient comfort.",
      icon: <HeartIcon className="w-6 h-6" />,
    },
    {
      name: "Gyms, Spas & Wellness Centers",
      desc: "Promote relaxation and freshness with balanced aroma diffusion.",
      icon: <TrophyIcon className="w-6 h-6" />,
    },
    {
      name: "Homes & Apartments",
      desc: "Upgrade everyday living with a reliable home scent system.",
      icon: <HomeIcon className="w-6 h-6" />,
    },
    {
      name: "Cars & Personal Spaces",
      desc: "Compact air scent machines for vehicles and small enclosed areas.",
      icon: <TruckIcon className="w-6 h-6" />,
    }
  ];

  const features = [
    {
        id: "01",
        title: "Deep UAE Market Understanding",
        desc: "We understand local commercial needs and environmental conditions.",
        icon: <MapPinIcon className="w-6 h-6" />,
    },
    {
        id: "02",
        title: "Wide Product Range",
        desc: "From scent machines for home to large commercial scent diffuser systems.",
        icon: <SwatchIcon className="w-6 h-6" />,
    },
    {
        id: "03",
        title: "Reliable Service & Support",
        desc: "Monthly refill plans, maintenance, and technical assistance.",
        icon: <UserGroupIcon className="w-6 h-6" />,
    },
    {
        id: "04",
        title: "Safe & Certified Products",
        desc: "Low-noise, efficient oil consumption, and commercial-grade reliability.",
        icon: <ShieldCheckIcon className="w-6 h-6" />,
    },
    {
        id: "05",
        title: "Practical, Not Complicated",
        desc: "Easy-to-use systems designed for real-world usage.",
        icon: <HandThumbUpIcon className="w-6 h-6" />,
    }
  ];

  return (
    <div className="font-sans">
      
      {/* ================= PART 1: INDUSTRIES (Light Mode) ================= */}
      <section className="relative py-24 bg-white overflow-hidden text-slate-600">
         {/* Background Decoration */}
         <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent" />
         <div className="absolute right-0 top-0 w-[400px] h-[400px]  opacity-60 pointer-events-none" />

         <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-12">
            
            <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
                <div className="max-w-2xl">
                    <span className="text-blue-600 font-bold tracking-widest uppercase text-xs mb-4 block">
                        Applications
                    </span>
                    <h2 className="text-4xl md:text-6xl font-serif text-slate-900 leading-none">
                        Tailored for <br/>
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">Real-World Environments</span>
                    </h2>
                </div>
                <div className="max-w-xs text-right hidden md:block">
                     <p className="text-slate-500 font-medium">
                        Trusted solutions for every sector in the UAE.
                     </p>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {industries.map((item, idx) => (
                    <div 
                        key={idx}
                        className={`group relative p-8 bg-slate-50 rounded-2xl overflow-hidden hover:bg-white transition-all duration-300 hover:shadow-2xl hover:shadow-blue-900/10 border border-slate-100 ${idx === 0 ? "lg:col-span-2 bg-blue-50/50 border-blue-100" : ""}`}
                    >
                        {/* Hover Gradient Border Effect */}
                        <div className="absolute inset-0 border-2 border-transparent group-hover:border-blue-500/10 rounded-2xl transition-all duration-300" />
                        
                        <div className="relative z-10">
                            <div className="flex justify-between items-start mb-6">
                                <div className={`w-12 h-12 rounded-xl flex items-center justify-center transition-colors duration-300 ${idx === 0 ? "bg-blue-600 text-white shadow-lg shadow-blue-500/30" : "bg-white text-slate-400 group-hover:text-blue-600 group-hover:bg-blue-50 shadow-sm"}`}>
                                    {item.icon}
                                </div>
                                <ArrowRightIcon className="w-5 h-5 text-slate-300 group-hover:text-blue-500 -translate-x-2 group-hover:translate-x-0 opacity-0 group-hover:opacity-100 transition-all duration-300" />
                            </div>

                            <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-blue-700 transition-colors">
                                {item.name}
                            </h3>
                            <p className="text-sm text-slate-500 leading-relaxed">
                                {item.desc}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
         </div>
      </section>


      {/* ================= PART 2: WHY CHOOSE US (Dark Mode Feature Block) ================= */}
      <section className="relative py-24 bg-[#0B1120] text-white overflow-hidden">
        
        {/* Glow Effects */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[1px] bg-gradient-to-r from-transparent via-blue-500/50 to-transparent" />
        <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none" />

        <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-12">
            
            <div className="text-center max-w-4xl mx-auto mb-20">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-blue-500/30 bg-blue-500/10 backdrop-blur-md mb-8">
                     <CheckBadgeIcon className="w-4 h-4 text-blue-400" />
                     <span className="text-blue-200 text-xs font-bold tracking-widest uppercase">
                        Why Choose Cool Max
                     </span>
                </div>
                <h2 className="text-4xl md:text-5xl font-serif text-white mb-6 leading-tight">
                    Trusted Scent Diffuser <br/>
                    <span className="italic text-blue-400">Supplier in UAE</span>
                </h2>
                <p className="text-slate-400 text-lg font-light leading-relaxed max-w-2xl mx-auto">
                    Businesses and homeowners across the UAE choose Cool Max because we focus on performance, reliability, and service.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {features.map((item, idx) => (
                    <div 
                        key={idx} 
                        className={`relative p-8 rounded-3xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.05] transition-all duration-300 group ${idx === 0 ? "md:col-span-2 lg:col-span-1 bg-gradient-to-br from-blue-900/40 to-transparent border-blue-500/30" : ""}`}
                    >
                        {/* Number Watermark */}
                        <span className="absolute top-4 right-6 text-5xl font-serif font-bold text-white/[0.03] group-hover:text-white/[0.1] transition-colors">
                            {item.id}
                        </span>

                        <div className={`w-14 h-14 rounded-full flex items-center justify-center mb-6 border border-white/10 ${idx === 0 ? "bg-blue-600 text-white shadow-[0_0_30px_-10px_rgba(37,99,235,0.5)]" : "bg-slate-800 text-blue-400 group-hover:bg-blue-600 group-hover:text-white transition-all duration-500"}`}>
                            {item.icon}
                        </div>

                        <h3 className="text-xl font-bold text-white mb-3 tracking-wide">
                            {item.title}
                        </h3>
                        
                        <p className="text-slate-400 text-sm leading-relaxed group-hover:text-slate-300 transition-colors">
                            {item.desc}
                        </p>
                    </div>
                ))}
            </div>

            {/* Bottom Quote */}
            <div className="mt-20 border-t border-white/5 pt-12 text-center">
                 <p className="text-xl md:text-2xl font-serif italic text-slate-300">
                    "Our goal is to be a dependable <span className="text-blue-400 not-italic font-bold">long-term partner</span>—not just another supplier."
                 </p>
            </div>

        </div>
      </section>

    </div>
  );
}