import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  BuildingOffice2Icon,
  CheckCircleIcon,
  ChatBubbleLeftRightIcon,
  ChevronDownIcon,
  ShieldCheckIcon,
  SparklesIcon,
  ExclamationTriangleIcon,
  FaceFrownIcon,
  AdjustmentsHorizontalIcon,
  MapPinIcon,
  HeartIcon,
  HomeModernIcon,
  WindowIcon,
  SunIcon,
  WifiIcon,
  StarIcon,
  RectangleGroupIcon,
  UserGroupIcon,
} from "@heroicons/react/24/outline";
import heroImage from "../asset/hero/hotelpage2.webp";
import heroImage2 from "../asset/hero/hotelpage.webp";

export default function HotelsHospitality() {
  const whatsappNumber = "+971509282702";
  const [openFaq, setOpenFaq] = useState(0);

  useEffect(() => {
    document.title = "Aroma Diffuser for Hotels in Dubai | CoolMaxScent";
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute(
        "content",
        "Enhance guest experiences with a professional Aroma Diffuser for Hotels in Dubai. Discover hotel scent machines, HVAC scenting & luxury fragrance solutions."
      );
    }
  }, []);

  const trustIndicators = [
    "Serving Hospitality Businesses Across the UAE Since 2020",
    "Commercial & HVAC Hotel Scenting Specialists",
    "Premium Fragrance Solutions",
    "Professional Installation & After-Sales Support",
  ];

  const challenges = [
    { icon: ExclamationTriangleIcon, title: "Unpleasant Lobby Odours", desc: "Reception and lobby areas can lose their freshness during busy hours, creating an unwelcoming atmosphere for arriving guests." },
    { icon: FaceFrownIcon, title: "Weak First Impressions", desc: "A hotel's ambience influences guest perception from the moment they arrive, and stale air can undermine even the most elegant interiors." },
    { icon: AdjustmentsHorizontalIcon, title: "Inconsistent Fragrance", desc: "Traditional hotel air fresheners often fail to provide even fragrance throughout the property, leading to uneven guest experiences." },
    { icon: MapPinIcon, title: "Large Hotel Spaces", desc: "Open lobbies, banquet halls, and guest corridors require wider fragrance coverage than standard air fresheners can provide." },
    { icon: HeartIcon, title: "Guest Comfort & Experience", desc: "A pleasant, consistent fragrance helps create a more enjoyable and memorable stay that encourages repeat visits and positive reviews." },
  ];

  const whyChoose = [
    { title: "Hospitality-Focused Solutions", desc: "From boutique hotels to luxury resorts, we recommend scenting systems based on your property's layout, guest flow, and operational requirements." },
    { title: "Premium Fragrance Collection", desc: "Choose from a wide range of fragrances designed to complement your hotel's ambience and create a lasting impression." },
    { title: "Commercial & HVAC Scenting Systems", desc: "Whether you need a standalone hotel scent machine or an HVAC-integrated solution, we provide reliable fragrance coverage for hospitality spaces of every size." },
    { title: "Professional Installation", desc: "Our experienced team ensures every diffuser is installed correctly for optimal performance and seamless operation." },
    { title: "Reliable Commercial Performance", desc: "Our commercial scenting systems deliver consistent fragrance throughout the day while requiring minimal maintenance." },
    { title: "UAE-Wide Support", desc: "Since 2020, we've helped hotels across Dubai and the UAE create welcoming environments with dependable scenting solutions." },
  ];

  const spaceSolutions = [
    { name: "Hotel Lobby", diffuser: "AeroBlack Pro", path: "/large-area-and-hvac-aroma-diffusers/aeroblack-pro-diffuser/", desc: "HVAC-integrated diffuser for large lobby spaces and continuous fragrance coverage." },
    { name: "Reception", diffuser: "AeroPillar Diffuser", path: "/floor-standing-aroma-diffusers/aeropillar-diffuser/", desc: "Elegant floor-standing diffuser that creates a welcoming first impression." },
    { name: "Guest Corridors", diffuser: "CeilAir Pro", path: "/wall-mounted-and-ceiling-aroma-diffusers/ceil-air-pro-diffuser/", desc: "Ceiling-mounted diffuser for discreet and consistent fragrance distribution." },
    { name: "Restaurants & Lounges", diffuser: "AirPulse 150", path: "/large-area-and-hvac-aroma-diffusers/air-pulse-150-diffuser/", desc: "Standalone diffuser designed for open hospitality spaces." },
    { name: "Banquet Halls", diffuser: "Titan Diffuser", path: "/floor-standing-aroma-diffusers/titan-diffuser/", desc: "High-performance diffuser for large event and function areas." },
    { name: "Premium Suites", diffuser: "NanoPillar Diffuser", path: "/floor-standing-aroma-diffusers/nano-pillar-diffuser/", desc: "Stylish diffuser that complements luxury interiors with subtle fragrance." },
  ];

  const whereWeWork = [
    { name: "Hotel Lobbies", icon: HomeModernIcon, desc: "Create a memorable first impression with a welcoming and luxurious fragrance that sets the tone from the moment guests step in." },
    { name: "Reception Areas", icon: BuildingOffice2Icon, desc: "Enhance the check-in experience with a fresh and inviting atmosphere that makes every guest feel welcome." },
    { name: "Guest Corridors", icon: WindowIcon, desc: "Maintain a consistent fragrance that complements your hotel's ambience from floor to floor and room to room." },
    { name: "Restaurants & Cafés", icon: SunIcon, desc: "Create a pleasant dining environment that enhances the overall guest experience and complements culinary offerings." },
    { name: "Banquet Halls", icon: UserGroupIcon, desc: "Deliver reliable fragrance coverage for weddings, conferences, and special events of every size and scale." },
    { name: "Conference & Meeting Rooms", icon: WifiIcon, desc: "Provide a comfortable atmosphere for business meetings and corporate events that supports focus and professionalism." },
    { name: "Spa & Wellness Centres", icon: SparklesIcon, desc: "Introduce calming fragrances that support relaxation and wellness experiences for rejuvenating guest stays." },
    { name: "Premium Suites", icon: StarIcon, desc: "Complete the luxury stay with a subtle, elegant fragrance that reflects your hotel's highest standards of quality." },
    { name: "Waiting Lounges", icon: RectangleGroupIcon, desc: "Welcome guests and visitors with a clean, comfortable, and refreshing environment that eases the wait." },
  ];

  const features = [
    { title: "Quiet Operation", desc: "Runs discreetly without disturbing guests or daily hotel operations." },
    { title: "Adjustable Fragrance Intensity", desc: "Easily customise fragrance levels for different areas of your property." },
    { title: "HVAC Compatible Options", desc: "Achieve consistent scent distribution across large hotels using existing HVAC systems." },
    { title: "Large Area Coverage", desc: "Ideal for hotel lobbies, restaurants, banquet halls, and other spacious hospitality environments." },
    { title: "Low Maintenance", desc: "Built for continuous commercial operation with minimal servicing requirements." },
    { title: "Smart Timer Controls", desc: "Schedule fragrance diffusion to match your hotel's operating hours and guest traffic." },
  ];

  const investReasons = [
    "Creates a Memorable First Impression",
    "Enhances the Guest Experience",
    "Strengthens Your Brand Identity",
    "Keeps Shared Spaces Fresh",
    "Delivers Consistent Fragrance",
    "Supports a Premium Hospitality Experience",
  ];

  const comparisonRows = [
    { left: "Temporary fragrance", right: "Continuous fragrance diffusion" },
    { left: "Uneven scent coverage", right: "Consistent fragrance throughout the property" },
    { left: "Frequent replacement", right: "Long-lasting commercial performance" },
    { left: "Limited coverage", right: "Suitable for small and large hotel spaces" },
    { left: "Basic odour masking", right: "Enhances guest experience and brand image" },
    { left: "Manual operation", right: "Smart controls with adjustable fragrance settings" },
  ];

  const howProcess = [
    { step: "1. Consultation", desc: "Share your hotel's scenting goals, guest areas, and fragrance preferences." },
    { step: "2. Site Assessment", desc: "We evaluate your property's layout, coverage requirements, and HVAC compatibility (if applicable)." },
    { step: "3. Product Recommendation", desc: "Based on your hotel's needs, we recommend the most suitable hotel scent machine and fragrance solution." },
    { step: "4. Installation & Support", desc: "Our team installs your system and provides ongoing support for reliable fragrance performance." },
  ];

  const faqs = [
    {
      question: "What is the best Aroma Diffuser for Hotels in Dubai?",
      answer: "The ideal solution depends on your hotel's size, guest areas, and fragrance requirements. Our experts recommend the most suitable diffuser after assessing your property.",
    },
    {
      question: "Which aroma diffuser is best for hotel lobbies?",
      answer: "For large hotel lobbies, HVAC-integrated systems like AeroBlack Pro provide consistent fragrance coverage, while standalone diffusers are suitable for smaller reception areas.",
    },
    {
      question: "Can one hotel scent machine cover multiple hotel areas?",
      answer: "Yes. HVAC-compatible systems can distribute fragrance across multiple connected spaces, while standalone units are ideal for individual zones.",
    },
    {
      question: "Can I create a signature fragrance for my hotel?",
      answer: "Yes. We offer premium fragrance options that help hotels create a unique ambience and strengthen their brand identity.",
    },
    {
      question: "Are hotel aroma diffusers safe for guests?",
      answer: "Yes. Our commercial scenting systems are designed to provide controlled fragrance diffusion, creating a pleasant environment without overwhelming guests.",
    },
    {
      question: "Do hotel scent machines require regular maintenance?",
      answer: "Our systems are designed for continuous commercial use and require only minimal routine maintenance for reliable performance.",
    },
    {
      question: "Can professional scenting systems be installed in existing hotels?",
      answer: "Absolutely. We provide solutions suitable for both newly built and operational hotels without disrupting daily operations.",
    },
    {
      question: "Do you provide hotel scenting solutions across the UAE?",
      answer: "Yes. CoolMaxScent supplies, installs, and supports professional hotel scenting systems for hospitality businesses throughout Dubai and the UAE.",
    },
  ];

  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans selection:bg-blue-100 overflow-x-hidden">
      <link rel="canonical" href="https://www.coolmaxscent.com/industries/aroma-diffuser-for-hotels-dubai/" />

      <div className="fixed inset-0 pointer-events-none -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(59,130,246,0.10),_transparent_35%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,_rgba(15,23,42,0.06),_transparent_35%)]" />
      </div>

      <main className="mx-auto max-w-7xl px-6 md:px-10 lg:px-16 pt-24 pb-20">
        {/* ================= HERO SECTION ================= */}
        <section className="relative grid items-center gap-14 rounded-[3rem] border border-slate-100 bg-[linear-gradient(135deg,#ffffff_0%,#f8fbff_55%,#eef7ff_100%)] p-6 shadow-[0_35px_90px_-35px_rgba(15,23,42,0.25)] sm:p-8 lg:grid-cols-[1.08fr_0.92fr] lg:py-24 lg:px-10">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-100 bg-blue-50 px-4 py-2 text-[11px] font-black uppercase tracking-[0.28em] text-blue-700">
              <SparklesIcon className="h-4 w-4" />
              Hotels & Hospitality
            </div>
            <h1 className="text-4xl font-serif leading-[0.95] tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
              <span className="text-blue-600">Aroma Diffuser</span> for Hotels in Dubai
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
              Create a welcoming and memorable guest experience with professional <span className="font-semibold text-slate-900">hotel scenting solutions</span>. From luxury hotel lobbies and reception areas to restaurants, guest corridors, and banquet halls, our commercial aroma diffusers deliver consistent fragrance that enhances every stay.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a href="#contact" className="rounded-full bg-slate-900 px-8 py-4 text-center text-sm font-black uppercase tracking-[0.3em] text-white transition hover:bg-blue-600">
                Request a Free Consultation
              </a>
              <a href={`https://wa.me/${whatsappNumber.replace('+', '')}`} target="_blank" rel="noreferrer" className="flex items-center justify-center gap-2 rounded-full border border-slate-300 px-8 py-4 text-center text-sm font-black uppercase tracking-[0.3em] text-slate-700 transition hover:border-blue-500 hover:text-blue-600">
                <ChatBubbleLeftRightIcon className="h-5 w-5" />
                Get a Free Quote
              </a>
            </div>
            <div className="mt-10 grid gap-3 sm:grid-cols-2">
              {trustIndicators.map((item) => (
                <div key={item} className="flex items-start gap-3 rounded-2xl border border-slate-100 bg-slate-50 px-4 py-3 text-sm text-slate-700 shadow-sm">
                  <ShieldCheckIcon className="mt-0.5 h-5 w-5 shrink-0 text-blue-600" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.7, delay: 0.1 }} className="relative">
            <div className="absolute inset-0 -rotate-3 rounded-[3rem] bg-blue-50" />
            <div className="relative overflow-hidden rounded-[3rem] border border-slate-100 bg-white p-4 shadow-[0_40px_80px_-30px_rgba(15,23,42,0.3)]">
              <img src={heroImage} alt="Hotel Aroma Diffuser in Dubai" className="h-full w-full rounded-[2rem] object-cover" />
            </div>
          </motion.div>
        </section>

        {/* ================= SUPPORTING HEADING ================= */}
        <section className="mt-8 rounded-[3rem] border border-slate-200/80 bg-gradient-to-br from-slate-900 via-slate-800 to-blue-900 p-8 text-white shadow-[0_30px_80px_-25px_rgba(15,23,42,0.45)] md:p-12">
          <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
            <div className="max-w-2xl">
              <p className="text-sm font-black uppercase tracking-[0.3em] text-blue-300">Create Hotel Experiences That Guests Remember</p>
              <h2 className="mt-4 text-3xl font-serif tracking-tight sm:text-xl">
                A welcoming hotel atmosphere shapes how guests feel, how they remember their stay, and how they perceive your brand.
              </h2>
              <p className="mt-6 text-lg leading-8 text-slate-300">
                At <span className="font-semibold text-white">CoolMaxScent</span>, we provide <span className="font-semibold text-blue-200">Aroma Diffusers for Hotels in Dubai</span> for hotel lobbies, reception areas, restaurants, guest corridors, and other hospitality spaces. Our professional scenting solutions deliver consistent fragrance that enhances the guest experience without overwhelming the environment.
              </p>
              <p className="mt-4 text-lg leading-8 text-slate-300">
                Since 2020, we've helped hotels and resorts across the UAE implement reliable hotel aroma diffuser UAE solutions, from standalone hotel scent machines to HVAC-integrated systems.
              </p>
            </div>
            <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-white/10 p-3 shadow-lg backdrop-blur-sm">
              <img src={heroImage2} alt="Hotel fragrance solution in Dubai" className="h-72 w-full rounded-[1.4rem] object-fill" />
            </div>
          </div>
        </section>

        {/* ================= CHALLENGES & WHY CHOOSE ================= */}
        <section className="grid gap-8 py-20 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="rounded-[2.5rem] border border-slate-100 bg-white p-8 shadow-sm">
            <p className="text-sm font-black uppercase tracking-[0.3em] text-blue-600">Common Hotel Scenting Challenges</p>
            <h2 className="mt-4 text-3xl font-serif tracking-tight text-slate-900 sm:text-4xl">
              Every hotel strives to create a welcoming experience, but maintaining a consistently fresh atmosphere can be challenging.
            </h2>
            <div className="mt-8 space-y-4">
              {challenges.map((item, index) => {
                const Icon = item.icon;
                return (
                  <div key={index} className="flex gap-4 rounded-2xl bg-gradient-to-r from-blue-50 to-orange-50 border border-blue-100 p-5 text-slate-700 transition duration-300 hover:shadow-md hover:border-blue-200">
                    <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-blue-100 flex items-center justify-center text-blue-600">
                      <Icon className="h-5 w-5" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-900 mb-1">{item.title}</h4>
                      <p className="text-sm leading-6 text-slate-600">{item.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="rounded-[2.5rem] border border-slate-100 bg-slate-900 p-8 text-white shadow-sm">
            <p className="text-sm font-black uppercase tracking-[0.3em] text-blue-400">Why Hotels Choose CoolMaxScent</p>
            <h2 className="mt-4 text-3xl font-serif tracking-tight sm:text-4xl">
              Choosing the right hotel scenting partner is just as important as selecting the right fragrance.
            </h2>
            <div className="mt-8 space-y-6">
              {whyChoose.map((item) => (
                <div key={item.title} className="rounded-2xl border border-white/10 bg-white/5 p-5">
                  <h3 className="text-xl font-semibold">{item.title}</h3>
                  <p className="mt-2 text-sm leading-7 text-slate-300">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ================= HOTEL SCENTING SOLUTIONS TABLE ================= */}
        <section className="py-8">
          <div className="rounded-[3rem] border border-slate-100 bg-white p-8 shadow-[0_25px_70px_-25px_rgba(15,23,42,0.18)] md:p-12">
            <div className="mb-10 max-w-3xl">
              <p className="text-sm font-black uppercase tracking-[0.3em] text-blue-600">Hotel Scenting Solutions for Every Space</p>
              <h2 className="mt-4 text-3xl font-serif tracking-tight text-slate-900 sm:text-4xl">
                Every area of your hotel creates a different impression on guests, so each space requires the right scenting solution.
              </h2>
              <p className="mt-4 text-lg leading-8 text-slate-600">
                At CoolMaxScent, we recommend professional aroma diffusers based on your property's layout, coverage requirements, and guest experience goals.
              </p>
            </div>
            <div className="overflow-hidden rounded-[2rem] border border-slate-200">
              <div className="grid grid-cols-3 bg-slate-900 px-6 py-4 text-sm font-black uppercase tracking-[0.25em] text-white">
                <span>Hotel Area</span>
                <span>Recommended Solution</span>
                <span className="hidden sm:block">Description</span>
              </div>
              {spaceSolutions.map((item) => (
                <div key={item.name} className="grid grid-cols-3 border-t border-slate-200 bg-white/70 text-sm text-slate-700 last:rounded-b-[2rem]">
                  <div className="border-r border-slate-200 px-6 py-4 font-semibold text-slate-900">{item.name}</div>
                  <div className="border-r border-slate-200 px-6 py-4 text-blue-600 font-semibold">
                    <Link to={item.path} className="hover:text-blue-800 hover:underline transition-colors">{item.diffuser}</Link>
                  </div>
                  <div className="hidden sm:block px-6 py-4 text-slate-600">{item.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ================= WHERE OUR HOTEL AROMA DIFFUSERS WORK ================= */}
        <section className="py-16">
          <div className="rounded-[3rem] border border-slate-100 bg-white p-8 shadow-[0_25px_70px_-25px_rgba(15,23,42,0.18)] md:p-12">
            <div className="mb-10 max-w-3xl">
              <p className="text-sm font-black uppercase tracking-[0.3em] text-blue-600">Where Our Hotel Aroma Diffusers Work</p>
              <h2 className="mt-4 text-3xl font-serif tracking-tight text-slate-900 sm:text-4xl">
                Designed to create a consistent fragrance experience throughout every guest-facing area.
              </h2>
            </div>
            <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
              {whereWeWork.map((item) => {
                const Icon = item.icon;
                return (
                  <div key={item.name} className="rounded-[1.75rem] border border-slate-200 bg-slate-50 p-6 transition duration-300 hover:-translate-y-1 hover:border-blue-200 hover:bg-white hover:shadow-[0_20px_45px_-25px_rgba(15,23,42,0.22)]">
                    <div className="mb-4 inline-flex rounded-2xl bg-blue-50 p-3 text-blue-600">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h3 className="text-lg font-semibold text-slate-900 mb-2">{item.name}</h3>
                    <p className="text-sm leading-6 text-slate-600">{item.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ================= HOW OUR PROCESS WORKS ================= */}
        <section className="py-8">
          <div className="mb-8 text-center">
            <p className="text-sm font-black uppercase tracking-[0.3em] text-blue-600">How Our Hotel Scenting Process Works</p>
            <h2 className="mt-3 text-3xl font-serif tracking-tight text-slate-900 sm:text-4xl">
              Creating a signature fragrance for your hotel is simple.
            </h2>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {howProcess.map((item) => (
              <div key={item.step} className="rounded-[2rem] border border-slate-100 bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-[0_25px_70px_-25px_rgba(2,132,199,0.28)]">
                <h3 className="text-xl font-semibold text-slate-900">{item.step}</h3>
                <p className="mt-3 text-slate-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ================= FEATURES ================= */}
        <section className="py-8">
          <div className="mb-8 text-center">
            <p className="text-sm font-black uppercase tracking-[0.3em] text-blue-600">Why Our Hotel Scenting Systems Stand Out</p>
            <h2 className="mt-3 text-3xl font-serif tracking-tight text-slate-900 sm:text-4xl">
              Designed for hospitality environments with performance, reliability, and ease of use.
            </h2>
          </div>
          <div className="grid gap-6 lg:grid-cols-2">
            {features.map((item) => (
              <div key={item.title} className="rounded-[2rem] border border-slate-100 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-[0_20px_50px_-25px_rgba(15,23,42,0.2)]">
                <div className="mb-3 inline-flex rounded-2xl bg-blue-50 p-2 text-blue-600">
                  <CheckCircleIcon className="h-5 w-5" />
                </div>
                <h3 className="text-lg font-semibold text-slate-900">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ================= WHY INVEST ================= */}
        <section className="py-16">
          <div className="rounded-[3rem] border border-slate-100 bg-slate-50 p-8 md:p-12">
            <h2 className="text-3xl font-serif tracking-tight text-slate-900 sm:text-4xl">
              Why Hotels Invest in <span className="text-blue-600">Professional Scenting</span>
            </h2>
            <div className="mt-8 grid gap-4 md:grid-cols-2">
              {investReasons.map((item) => (
                <div key={item} className="flex items-start gap-3 rounded-2xl border border-slate-100 bg-white p-4 shadow-sm transition duration-300 hover:border-blue-200 hover:shadow-[0_15px_40px_-20px_rgba(2,132,199,0.25)]">
                  <CheckCircleIcon className="mt-0.5 h-5 w-5 shrink-0 text-blue-600" />
                  <span className="text-slate-700">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ================= COMPARISON TABLE ================= */}
        <section className="py-8">
          <div className="rounded-[3rem] border border-slate-100 bg-white p-8 shadow-sm md:p-12">
            <h2 className="text-3xl font-serif tracking-tight text-slate-900 sm:text-4xl">
              Why Professional Hotel Scenting Is Better Than Traditional Air Fresheners
            </h2>
            <div className="mt-8 overflow-hidden rounded-[2rem] border border-slate-200">
              <div className="grid grid-cols-2 bg-slate-900 px-6 py-4 text-sm font-black uppercase tracking-[0.25em] text-white">
                <span>Traditional Hotel Air Fresheners</span>
                <span>CoolMaxScent Hotel Scenting Solutions</span>
              </div>
              {comparisonRows.map((row) => (
                <div key={row.left} className="grid grid-cols-2 border-t border-slate-200 bg-white/70 text-sm text-slate-700 last:rounded-b-[2rem]">
                  <div className="border-r border-slate-200 px-6 py-4">{row.left}</div>
                  <div className="px-6 py-4 text-slate-900">{row.right}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ================= FAQ ================= */}
        <section id="faq" className="py-16">
          <div className="mb-8 text-center">
            <p className="text-sm font-black uppercase tracking-[0.3em] text-blue-600">Frequently asked questions</p>
            <h2 className="mt-3 text-3xl font-serif tracking-tight text-slate-900 sm:text-4xl">
              Everything you need to know about hotel scenting solutions.
            </h2>
          </div>
          <div className="space-y-4">
            {faqs.map((item, index) => {
              const isOpen = openFaq === index;
              return (
                <div key={item.question} className="rounded-[2rem] border border-slate-100 bg-white p-6 shadow-sm transition duration-300 hover:border-blue-200 hover:shadow-[0_20px_50px_-25px_rgba(15,23,42,0.15)]">
                  <button
                    type="button"
                    className="flex w-full items-center justify-between gap-4 text-left"
                    onClick={() => setOpenFaq(isOpen ? -1 : index)}
                  >
                    <h3 className="text-lg font-semibold text-slate-900">{item.question}</h3>
                    <ChevronDownIcon className={`h-5 w-5 shrink-0 text-blue-600 transition-transform ${isOpen ? "rotate-180" : ""}`} />
                  </button>
                  {isOpen ? <p className="mt-4 text-md leading-7 text-slate-600">{item.answer}</p> : null}
                </div>
              );
            })}
          </div>
        </section>

        {/* ================= CTA / CONTACT ================= */}
        <section id="contact" className="py-8">
          <div className="rounded-[3rem] border border-blue-100 bg-[linear-gradient(135deg,#eff6ff_0%,#f8fbff_60%,#eef7ff_100%)] p-8 shadow-[0_25px_65px_-30px_rgba(59,130,246,0.28)] md:p-12">
            <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
              <div className="max-w-2xl">
                <p className="text-sm font-black uppercase tracking-[0.3em] text-blue-700">Elevate Every Guest Experience with Professional Hotel Scenting</p>
                <h2 className="mt-3 text-3xl font-serif tracking-tight text-slate-900 sm:text-4xl">
                  Create a welcoming atmosphere that guests remember long after check-out.
                </h2>
                <p className="mt-4 text-lg leading-8 text-slate-600">
                  Whether you manage a boutique hotel, luxury resort, or serviced apartment, CoolMaxScent provides reliable fragrance solutions tailored to your hospitality space.
                </p>
              </div>
              <div className="flex flex-col gap-3 sm:flex-row">
                <a href={`https://wa.me/${whatsappNumber.replace('+', '')}`} target="_blank" rel="noreferrer" className="rounded-full bg-slate-900 px-8 py-4 text-center text-sm font-black uppercase tracking-[0.3em] text-white transition hover:bg-blue-600">
                  Request a Free Consultation
                </a>
                <a href="/contact/" className="rounded-full border border-slate-300 bg-white px-8 py-4 text-center text-sm font-black uppercase tracking-[0.3em] text-slate-700 transition hover:border-blue-500 hover:text-blue-600">
                  Get a Free Quote
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}