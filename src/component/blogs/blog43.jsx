import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ArrowRightIcon,
  BuildingOffice2Icon,
  ChatBubbleLeftRightIcon,
  CheckCircleIcon,
  CubeTransparentIcon,
  ShieldCheckIcon,
  SparklesIcon,
  LightBulbIcon,
  WrenchScrewdriverIcon,
  HomeModernIcon,
  EyeDropperIcon,
  SpeakerWaveIcon,
  UserGroupIcon,
  BriefcaseIcon,
  ClockIcon,
  HeartIcon,
} from "@heroicons/react/24/outline";

import BlogHeroImg from "../../asset/blogimg/blog43.webp";

const fadeInUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 },
};

const textLinkClass =
  "font-semibold text-blue-600 underline decoration-blue-200 underline-offset-4 transition hover:text-blue-800 hover:decoration-blue-500";
const darkTextLinkClass =
  "font-semibold text-blue-300 underline decoration-blue-500/50 underline-offset-4 transition hover:text-blue-200";

const ambienceAdvantages = [
  {
    title: "Client Perception Starts Before the Conversation",
    icon: BriefcaseIcon,
    paragraphs: [
      "A client's first impression is formed long before presentations begin or contracts are discussed. The reception area, meeting rooms, and common spaces all communicate the company's standards and professionalism.",
      "An organised, clean, and comfortable office immediately creates confidence. When visitors enter a workspace that feels fresh and welcoming, they naturally associate those qualities with the business itself.",
    ],
    linkText: "Many organisations now include an Aroma Diffuser for Corporate Office in Dubai as part of their office ambience strategy because fragrance subtly enhances the environment without drawing attention to itself. Instead of relying on temporary air fresheners, professional scenting helps maintain a consistently pleasant atmosphere throughout the day.",
    linkHref: "/commercial-aroma-diffusers/",
    linkLabel: "Aroma Diffuser for Corporate Office in Dubai",
  },
  {
    title: "Employee Experience Shapes Workplace Success",
    icon: UserGroupIcon,
    paragraphs: [
      "Employees spend a significant part of their lives at work. A thoughtfully designed office contributes to comfort, focus, collaboration, and overall workplace satisfaction.",
      "Natural lighting, ergonomic furniture, comfortable temperatures, and good air quality all support employee wellbeing. Equally important is creating an atmosphere that feels calm and welcoming rather than sterile or uninspiring.",
    ],
    linkText: "Professional Office fragrance solutions Dubai are increasingly becoming part of employee experience initiatives because they help maintain a fresh environment that complements modern office design.",
    linkHref: "/commercial-aroma-diffusers/",
    linkLabel: "Office fragrance solutions Dubai",
  },
  {
    title: "Office Ambience Reflects Company Culture",
    icon: HeartIcon,
    paragraphs: [
      "A company's culture is often reflected in the environment it creates. Businesses that invest in comfortable workspaces demonstrate that they value both employees and visitors.",
      "Whether it's collaborative work zones, thoughtfully designed meeting rooms, or welcoming reception areas, every element contributes to the workplace experience.",
    ],
    linkText: "A subtle fragrance delivered through a Scent Diffuser for Corporate Office in Dubai becomes another detail that reinforces professionalism while creating a consistent atmosphere across the office.",
    linkHref: "/commercial-aroma-diffusers/",
    linkLabel: "Scent Diffuser for Corporate Office in Dubai",
  },
  {
    title: "First Impressions Create Lasting Memories",
    icon: ClockIcon,
    paragraphs: [
      "People may not remember every conversation they had during a meeting, but they often remember how the workplace made them feel.",
      "A pleasant office ambience creates positive associations with the business. Clean surroundings, balanced lighting, organised interiors, and a refined fragrance all contribute to an environment that leaves a lasting impression.",
    ],
    linkText: "This is why many organisations are investing in Corporate scenting solutions Dubai as part of a broader strategy to create memorable workplace experiences for both employees and visitors.",
    linkHref: "/scent-marketing-solutions/",
    linkLabel: "Corporate scenting solutions Dubai",
  },
];

const ambienceElements = [
  {
    title: "Lighting",
    icon: LightBulbIcon,
    text: "Lighting plays a significant role in shaping the atmosphere of any workplace. Offices with access to natural daylight often feel more energetic and inviting, while thoughtfully designed artificial lighting helps reduce eye strain and improves comfort throughout the day.",
  },
  {
    title: "Cleanliness",
    icon: SparklesIcon,
    text: "A clean workplace immediately communicates professionalism and attention to detail. Spotless meeting rooms, organised workstations, hygienic washrooms, and tidy common areas create confidence among employees and clients alike.",
  },
  {
    title: "Air Quality",
    icon: EyeDropperIcon,
    text: "Fresh indoor air is essential for creating a comfortable workplace, particularly in Dubai, where air-conditioned environments are common throughout the year. Good ventilation, proper maintenance of HVAC systems, and effective odour management all contribute to healthier indoor environments.",
  },
  {
    title: "Interior Design",
    icon: HomeModernIcon,
    text: "Interior design influences how people interact with the workplace every day. Open layouts, collaborative spaces, modern furnishings, greenery, and carefully selected colour schemes all contribute to an office that feels welcoming and productive.",
  },
  {
    title: "Noise Management",
    icon: SpeakerWaveIcon,
    text: "Office ambience isn't only visual; it is also shaped by sound. Excessive noise can affect concentration, productivity, and employee comfort. Creating quiet work zones, acoustic meeting rooms, and collaborative spaces with controlled noise levels helps employees remain focused.",
  },
  {
    title: "Fragrance",
    icon: EyeDropperIcon,
    text: "A professionally installed Fragrance Diffuser for Corporate Office in Dubai provides consistent scent distribution that complements workplace design. Rather than masking unwanted odours, it creates an environment that feels clean, refined, and welcoming.",
    isLink: true,
  },
];

const officeAreas = [
  {
    title: "Reception Areas",
    icon: BuildingOffice2Icon,
    text: "The reception area introduces visitors to the company's brand and workplace culture. A fresh, inviting atmosphere helps create a positive first impression from the moment someone enters the office. Professional scenting helps maintain that welcoming environment consistently throughout business hours.",
  },
  {
    title: "Meeting Rooms",
    icon: ChatBubbleLeftRightIcon,
    text: "Meeting rooms host presentations, interviews, client discussions, and important business decisions. These spaces should feel comfortable and distraction-free. A subtle fragrance contributes to a more pleasant meeting environment while complementing the room's overall ambience.",
  },
  {
    title: "Executive Cabins",
    icon: BriefcaseIcon,
    text: "Executive offices often represent leadership and professionalism. Premium interiors deserve an atmosphere that matches the space. A professional fragrance diffuser allows executive cabins to maintain a refined and consistent ambience that enhances client meetings and day-to-day work.",
  },
  {
    title: "Waiting Lounges",
    icon: ClockIcon,
    text: "Waiting areas influence how visitors perceive a business before conversations even begin. Comfortable seating, thoughtful design, and a pleasant fragrance help create a relaxed environment that leaves a lasting impression.",
  },
  {
    title: "Open Workspaces",
    icon: UserGroupIcon,
    text: "Open-plan offices require fragrance solutions that provide even coverage across larger areas without becoming too concentrated in one location. Professional commercial systems help maintain a balanced ambience so employees experience the same welcoming environment wherever they work.",
  },
];

const diffuserOptions = [
  {
    title: "Executive Offices",
    icon: BuildingOffice2Icon,
    product: "MistBox X – Mid-Size Commercial Diffuser",
    productLink: "/commercial-aroma-diffusers/mistbox-x-diffuser/",
    text: "Executive cabins, private consultation rooms, and boardrooms require a refined atmosphere. The MistBox X delivers controlled fragrance coverage that enhances the office ambience while maintaining a professional environment. Businesses looking for a Fragrance Diffuser for Corporate Office in Dubai for smaller enclosed spaces benefit from its consistent performance and elegant design.",
  },
  {
    title: "Open-Plan Offices",
    icon: UserGroupIcon,
    product: "AeroBlack Med – Commercial Aroma Diffuser",
    productLink: "/commercial-aroma-diffusers/aeroblack-med-diffuser/",
    text: "Open workspaces require fragrance to be distributed evenly across larger areas. The AeroBlack Med is designed for medium to large office environments, providing balanced fragrance across shared workstations, collaborative areas, and employee zones. It is an ideal Aroma Diffuser for Large Offices, helping organisations maintain a pleasant atmosphere without overwhelming employees.",
  },
  {
    title: "Business Centres",
    icon: BuildingOffice2Icon,
    product: "Office Aroma Diffuser Dubai",
    productLink: "/commercial-aroma-diffusers/",
    text: "Business centres accommodate multiple companies, visitors, and professionals throughout the day. A professional Office aroma diffuser Dubai solution ensures reception areas, shared meeting rooms, waiting lounges, and coworking spaces remain consistently welcoming.",
  },
  {
    title: "Corporate Headquarters",
    icon: BriefcaseIcon,
    product: "AirPulse 150 – Large Area Aroma Diffuser",
    productLink: "/large-area-and-hvac-aroma-diffusers/air-pulse-150-diffuser/",
    text: "Large corporate headquarters include multiple departments, conference rooms, lounges, cafeterias, and visitor areas spread across expansive floor plans. The AirPulse 150 is designed for commercial spaces that require reliable fragrance coverage across extensive office environments.",
  },
  {
    title: "Multi-Floor Office Buildings",
    icon: BuildingOffice2Icon,
    product: "AeroBlack Pro – HVAC-Integrated Scent Diffuser",
    productLink: "/large-area-and-hvac-aroma-diffusers/aeroblack-pro-diffuser/",
    text: "Maintaining the same ambience across several floors can be challenging with standalone units. The AeroBlack Pro delivers uniform fragrance through existing HVAC systems, making it one of the most effective Large Area & HVAC Aroma Diffusers in Dubai for corporate buildings.",
    isFullWidth: true,
    secondLink: "/large-area-and-hvac-aroma-diffusers/",
    secondLinkLabel: "Large Area & HVAC Aroma Diffusers in Dubai",
  },
];

const commonMistakes = [
  {
    title: "Relying on Aerosol Air Fresheners",
    icon: WrenchScrewdriverIcon,
    text: "Traditional air fresheners provide only temporary freshness and often release fragrance unevenly. They require constant manual use and rarely create a consistent workplace environment.",
  },
  {
    title: "Choosing Fragrances That Are Too Strong",
    icon: EyeDropperIcon,
    text: "A pleasant office ambience should feel natural. Strong fragrances can become distracting, especially in enclosed meeting rooms or shared workspaces. Professional scenting focuses on subtle fragrance that enhances the environment rather than overpowering it.",
  },
  {
    title: "Ignoring Reception and Common Areas",
    icon: BuildingOffice2Icon,
    text: "Many businesses focus only on employee workstations while overlooking reception areas, waiting lounges, corridors, and meeting rooms. These are often the first spaces visitors experience and should reflect the same professional ambience.",
  },
  {
    title: "Poor Air Quality",
    icon: EyeDropperIcon,
    text: "Poor ventilation, stale indoor air, and neglected HVAC systems can reduce employee comfort. Combining proper air quality management with professional fragrance solutions creates a healthier and more welcoming workplace.",
  },
  {
    title: "Inconsistent Fragrance Throughout the Office",
    icon: CubeTransparentIcon,
    text: "Using different air fresheners in different departments creates an inconsistent experience. Maintaining one carefully selected fragrance across the office helps reinforce brand identity while ensuring everyone enjoys the same welcoming environment.",
  },
];

export default function CorporateOfficeAromaDiffuserBlog() {
  const whatsappNumber = "971509282702";

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Aroma Diffuser for Corporate Office in Dubai | CoolMax Scent";

    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute(
        "content",
        "Explore why office ambience is essential for modern workplaces and how an Aroma Diffuser for Corporate Office in Dubai supports a welcoming office."
      );
    }

    let metaKeywords = document.querySelector('meta[name="keywords"]');
    if (!metaKeywords) {
      metaKeywords = document.createElement("meta");
      metaKeywords.setAttribute("name", "keywords");
      document.head.appendChild(metaKeywords);
    }
    metaKeywords.setAttribute(
      "content",
      "aroma diffuser for corporate office in Dubai, office fragrance solutions Dubai, corporate scenting solutions Dubai, office aroma diffuser Dubai, commercial aroma diffuser UAE"
    );

    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.setAttribute("rel", "canonical");
      document.head.appendChild(canonical);
    }
    canonical.setAttribute(
      "href",
      "https://www.coolmaxscent.com/blog/aroma-diffuser-for-corporate-office-in-dubai"
    );
  }, []);

  const sectionLinks = [
    { label: "Workplaces Are Evolving", href: "#workplaces-are-evolving" },
    { label: "Business Advantage", href: "#office-ambience-business-advantage" },
    { label: "Professional Ambience", href: "#professional-office-ambience" },
    { label: "Fragrance in Design", href: "#fragrance-modern-office-design" },
    { label: "Choosing a Diffuser", href: "#choosing-office-diffuser" },
    { label: "Common Mistakes", href: "#office-ambience-mistakes" },
    { label: "CoolMaxScent", href: "#building-better-ambience" },
  ];

  return (
    <div className="relative min-h-screen overflow-x-hidden bg-[radial-gradient(circle_at_top_left,_rgba(59,130,246,0.12),_transparent_32%),linear-gradient(135deg,_#f8fbff_0%,_#ffffff_42%,_#f4f9ff_100%)] pt-16 font-sans text-slate-900 selection:bg-blue-100">
      <div className="pointer-events-none fixed inset-0 z-0">
        <div className="absolute right-0 top-0 h-[900px] w-[900px] rounded-full bg-blue-100/80 blur-[140px]" />
        <div className="absolute bottom-0 left-0 h-[800px] w-[800px] rounded-full bg-sky-50/70 blur-[120px]" />
      </div>

      <main className="relative z-10">
        {/* HERO SECTION */}
        <section className="mx-auto max-w-[1400px] px-6 pb-12 pt-20 lg:px-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="overflow-hidden rounded-[2.5rem] border border-blue-100 bg-white/80 p-8 shadow-[0_35px_100px_-35px_rgba(59,130,246,0.35)] backdrop-blur-sm md:p-12"
          >
            <div className="grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
              <div>
                <div className="inline-flex items-center gap-2 rounded-full border border-blue-100 bg-blue-50 px-4 py-2 text-[10px] font-black uppercase tracking-[0.3em] text-blue-700">
                  <SparklesIcon className="h-4 w-4" /> Corporate Scenting Blog
                </div>

                <h1 className="mt-8 text-4xl font-serif leading-[1.08] tracking-tight text-slate-900 md:text-5xl lg:text-6xl">
                  Why Corporate Office Ambience and Aroma Diffusers Matter More Than Ever in Dubai
                </h1>

                <p className="mt-8 text-lg leading-8 text-slate-600">
                  Modern workplaces have transformed into environments that inspire collaboration, strengthen company culture, and support employee wellbeing. A professionally installed{" "}
                  <Link to="/commercial-aroma-diffusers/" className={textLinkClass}>
                    Aroma Diffuser for Corporate Office in Dubai
                  </Link>{" "}
                  completes that experience with a fresh, welcoming atmosphere that makes every visit memorable.
                </p>

                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  <a
                    href="#workplaces-are-evolving"
                    className="inline-flex items-center justify-center gap-2 rounded-full bg-slate-900 px-6 py-3.5 text-xs font-black uppercase tracking-[0.2em] text-white shadow-lg transition hover:bg-blue-600"
                  >
                    Explore Article
                    <ArrowRightIcon className="h-4 w-4" />
                  </a>
                  <a
                    href={`https://wa.me/${whatsappNumber}`}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-center gap-2 rounded-full border border-slate-200 bg-white px-6 py-3.5 text-xs font-black uppercase tracking-[0.2em] text-slate-700 transition hover:border-blue-500 hover:text-blue-600"
                  >
                    <ChatBubbleLeftRightIcon className="h-4 w-4" />
                    Talk to Expert
                  </a>
                </div>
              </div>

              <div className="overflow-hidden rounded-[2rem] border border-slate-100 bg-slate-50 p-3 shadow-lg">
                <img
                  src={BlogHeroImg}
                  alt="Aroma diffuser for a modern corporate office in Dubai"
                  className="h-full w-full rounded-[1.4rem] object-cover transition-transform duration-700 hover:scale-105"
                />
              </div>
            </div>
          </motion.div>
        </section>

        {/* QUICK NAVIGATION / TOC */}
        <section className="mx-auto max-w-[1400px] px-6 pb-12 lg:px-16">
          <div className="rounded-3xl border border-slate-200/80 bg-white/90 p-6 shadow-sm backdrop-blur-sm">
            <p className="mb-4 text-xs font-black uppercase tracking-[0.25em] text-blue-600">Quick Navigation</p>
            <div className="flex flex-wrap gap-2">
              {sectionLinks.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-xs font-medium text-slate-700 transition hover:border-blue-300 hover:bg-blue-50 hover:text-blue-700"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 1: Workplaces Are Evolving */}
        <section id="workplaces-are-evolving" className="mx-auto max-w-[1400px] scroll-mt-24 px-6 pb-12 lg:px-16">
          <motion.div
            {...fadeInUp}
            className="rounded-[2.5rem] border border-slate-900 bg-slate-900 p-8 text-white shadow-[0_30px_80px_-25px_rgba(15,23,42,0.45)] md:p-12"
          >
            <p className="text-sm font-black uppercase tracking-[0.3em] text-blue-300">Workplaces Are Evolving Across Dubai</p>
            <h2 className="mt-3 max-w-4xl text-3xl font-serif tracking-tight text-white sm:text-4xl">
              Office ambience is now a strategic investment, not simply an aesthetic upgrade
            </h2>
            <div className="mt-6 space-y-5 text-lg leading-8 text-slate-300">
              <p>
                The modern workplace has undergone a remarkable transformation. Offices are no longer viewed as spaces where employees simply complete their daily tasks. Today, they serve as environments that inspire collaboration, strengthen company culture, support employee wellbeing, and create meaningful experiences for clients and business partners.
              </p>
              <p>
                This shift is especially evident in Dubai, where businesses continuously invest in innovative workplaces that reflect professionalism and forward-thinking values. From multinational corporations and business centres to growing startups, companies understand that every detail within an office contributes to how the business is perceived.
              </p>
              <p>
                Office ambience has therefore become a strategic investment rather than an aesthetic upgrade. Lighting, interior design, cleanliness, air quality, acoustics, and even fragrance all work together to create an environment that employees enjoy and visitors remember.
              </p>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
                <p className="text-lg leading-8 text-slate-200">
                  Among these elements, fragrance has become an increasingly important part of workplace design. A professionally installed{" "}
                  <Link to="/commercial-aroma-diffusers/" className={darkTextLinkClass}>
                    Aroma Diffuser for Corporate Office in Dubai
                  </Link>{" "}
                  helps complete the office environment by creating a fresh, welcoming atmosphere that complements the overall ambience instead of overpowering it. Rather than simply adding fragrance, businesses are using scent as part of a broader workplace experience that reflects their brand and supports a positive working environment.
                </p>
              </div>
            </div>
          </motion.div>
        </section>

        {/* SECTION 2: Why Office Ambience Has Become a Business Advantage */}
        <section id="office-ambience-business-advantage" className="mx-auto max-w-[1400px] scroll-mt-24 px-6 pb-12 lg:px-16">
          <motion.div
            {...fadeInUp}
            className="rounded-[2.5rem] border border-slate-200/80 bg-white p-8 shadow-sm md:p-12"
          >
            <p className="text-xs font-black uppercase tracking-[0.25em] text-blue-600">Strategic Workplace Perception</p>
            <h2 className="mt-2 text-3xl font-serif tracking-tight text-slate-900 sm:text-4xl">
              Why Office Ambience Has Become a Business Advantage
            </h2>
            <p className="mt-4 text-lg leading-8 text-slate-600">
              Creating an attractive office is no longer just about appearance. The way an office feels can influence employee satisfaction, client confidence, and even how a company is remembered. As workplace expectations continue to evolve, office ambience has become a valuable business asset.
            </p>

            <div className="mt-8 grid gap-6 md:grid-cols-2">
              {ambienceAdvantages.map((item) => (
                <motion.div
                  key={item.title}
                  {...fadeInUp}
                  className="rounded-2xl border border-slate-100 bg-slate-50/80 p-6 transition hover:border-blue-200 hover:bg-blue-50/30"
                >
                  <div className="mb-4 inline-flex rounded-xl bg-blue-50 p-2.5 text-blue-600">
                    <item.icon className="h-5 w-5" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900">{item.title}</h3>
                  <div className="mt-3 space-y-3 text-slate-600 leading-relaxed font-light">
                    {item.paragraphs.map((p) => (
                      <p key={p}>{p}</p>
                    ))}
                    <p>
                      <Link to={item.linkHref} className={textLinkClass}>
                        {item.linkLabel}
                      </Link>{" "}
                      {item.linkText.replace(item.linkLabel, "")}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* SECTION 3: What Creates a Professional Office Ambience */}
        <section id="professional-office-ambience" className="mx-auto max-w-[1400px] scroll-mt-24 px-6 pb-12 lg:px-16">
          <motion.div
            {...fadeInUp}
            className="rounded-[2.5rem] border border-blue-100 bg-gradient-to-br from-white via-sky-50/30 to-blue-50/50 p-8 shadow-sm md:p-12"
          >
            <p className="text-xs font-black uppercase tracking-[0.25em] text-blue-600">The Elements of Excellence</p>
            <h2 className="mt-2 text-3xl font-serif tracking-tight text-slate-900 sm:text-4xl">
              What Creates a Professional Office Ambience?
            </h2>
            <p className="mt-4 text-lg leading-8 text-slate-600">
              Exceptional office ambience isn't created by one feature alone. It results from several elements working together to create a comfortable, productive, and welcoming environment.
            </p>

            <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {ambienceElements.map((item) => (
                <div
                  key={item.title}
                  className="rounded-2xl border border-slate-100 bg-white p-6 shadow-xs transition hover:border-blue-200 hover:shadow-sm"
                >
                  <div className="mb-3 inline-flex rounded-xl bg-blue-50/80 p-2.5 text-blue-600">
                    <item.icon className="h-5 w-5" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900">{item.title}</h3>
                  <p className="mt-2 text-slate-600 leading-relaxed font-light text-sm">{item.text}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* SECTION 4: Why Fragrance Has Become Part of Modern Office Design */}
        <section id="fragrance-modern-office-design" className="mx-auto max-w-[1400px] scroll-mt-24 px-6 pb-12 lg:px-16">
          <motion.div
            {...fadeInUp}
            className="rounded-[2.5rem] border border-slate-200/80 bg-white p-8 shadow-sm md:p-12"
          >
            <p className="text-xs font-black uppercase tracking-[0.25em] text-blue-600">Sensory Workplace Experience</p>
            <h2 className="mt-2 text-3xl font-serif tracking-tight text-slate-900 sm:text-4xl">
              Why Fragrance Has Become Part of Modern Office Design
            </h2>
            <div className="mt-6 space-y-4 text-lg leading-8 text-slate-600 font-light">
              <p>
                Fragrance is no longer considered an optional finishing touch. Today, it is increasingly integrated into workplace design because businesses recognise that office ambience is experienced through multiple senses — not just what employees and visitors see, but also what they feel and perceive as they move through the space.
              </p>
              <p>
                When used professionally, fragrance supports the overall atmosphere without becoming distracting. Instead of simply making an office smell pleasant, it helps reinforce the welcoming, polished environment that modern businesses aim to create.
              </p>
            </div>

            <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {officeAreas.map((item) => (
                <div
                  key={item.title}
                  className="rounded-2xl border border-slate-100 bg-slate-50/80 p-6 transition hover:border-blue-200 hover:bg-blue-50/30"
                >
                  <div className="mb-4 inline-flex rounded-xl bg-blue-50 p-2.5 text-blue-600">
                    <item.icon className="h-5 w-5" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900">{item.title}</h3>
                  <p className="mt-3 text-slate-600 leading-relaxed font-light">{item.text}</p>
                </div>
              ))}
            </div>

            <p className="mt-8 text-lg leading-8 text-slate-600 font-light border-t border-slate-100 pt-6">
              This is where professional{" "}
              <Link to="/commercial-aroma-diffusers/" className={textLinkClass}>
                Commercial aroma diffuser UAE
              </Link>{" "}
              systems and tailored{" "}
              <Link to="/scent-marketing-solutions/" className={textLinkClass}>
                Corporate scenting solutions Dubai
              </Link>{" "}
              play an important role. Designed for large spaces, they help maintain a balanced ambience throughout the workplace, ensuring employees experience the same welcoming environment wherever they work.
            </p>
          </motion.div>
        </section>

        {/* SECTION 5: Choosing the Right Aroma Diffuser */}
        <section id="choosing-office-diffuser" className="mx-auto max-w-[1400px] scroll-mt-24 px-6 pb-12 lg:px-16">
          <motion.div
            {...fadeInUp}
            className="rounded-[2.5rem] border border-slate-900 bg-slate-900 p-8 text-white shadow-2xl md:p-12"
          >
            <p className="text-xs font-black uppercase tracking-[0.25em] text-blue-400">Best Fit for Every Workplace</p>
            <h2 className="mt-2 text-3xl font-serif tracking-tight text-white sm:text-4xl">
              Choosing the Right Aroma Diffuser for Different Office Environments
            </h2>
            <p className="mt-4 text-lg leading-8 text-slate-300 font-light">
              Creating an inviting office ambience starts with understanding that every workplace has different requirements. The size of the office, employee strength, visitor traffic, floor layout, and ventilation all influence how fragrance should be distributed.
            </p>

            <div className="mt-8 grid gap-6 md:grid-cols-2">
              {diffuserOptions.map((item) => (
                <div
                  key={item.title}
                  className={`rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xs transition hover:border-blue-400 ${item.isFullWidth ? "md:col-span-2" : ""}`}
                >
                  <div className="mb-3 inline-flex rounded-xl bg-blue-500/20 p-2.5 text-blue-300">
                    <item.icon className="h-5 w-5" />
                  </div>
                  <h3 className="text-xl font-bold text-white">{item.title}</h3>
                  <p className="mt-3 text-slate-300 leading-relaxed font-light">
                    For these environments, the{" "}
                    <Link to={item.productLink} className={darkTextLinkClass}>
                      {item.product}
                    </Link>{" "}
                    {item.text}
                    {item.secondLink && (
                      <>
                        {" "}
                        <Link to={item.secondLink} className={darkTextLinkClass}>
                          {item.secondLinkLabel}
                        </Link>
                      </>
                    )}
                  </p>
                </div>
              ))}
            </div>

            <p className="mt-8 text-lg leading-8 text-slate-300 font-light border-t border-white/10 pt-6">
              Selecting the right{" "}
              <Link to="/commercial-aroma-diffusers/" className={darkTextLinkClass}>
                Aroma Diffuser for Corporate Office in Dubai
              </Link>{" "}
              is not simply about choosing a diffuser — it is about creating an office ambience that reflects your brand, supports employee wellbeing, and leaves clients with a memorable experience.
            </p>
          </motion.div>
        </section>

        {/* SECTION 6: Common Office Ambience Mistakes */}
        <section id="office-ambience-mistakes" className="mx-auto max-w-[1400px] scroll-mt-24 px-6 pb-12 lg:px-16">
          <motion.div
            {...fadeInUp}
            className="rounded-[2.5rem] border border-slate-200/80 bg-white p-8 shadow-sm md:p-12"
          >
            <p className="text-xs font-black uppercase tracking-[0.25em] text-blue-600">Avoid These Pitfalls</p>
            <h2 className="mt-2 text-3xl font-serif tracking-tight text-slate-900 sm:text-4xl">
              Common Office Ambience Mistakes Businesses Overlook
            </h2>
            <p className="mt-4 text-lg leading-8 text-slate-600 font-light">
              Many businesses invest heavily in office furniture, technology, and décor but unintentionally overlook the smaller details that influence how employees and visitors experience the workplace. Avoiding these common mistakes can significantly improve overall office ambience.
            </p>

            <div className="mt-8 space-y-4">
              {commonMistakes.map((item) => (
                <motion.div
                  key={item.title}
                  {...fadeInUp}
                  className="flex items-start gap-4 rounded-2xl border border-slate-100 bg-slate-50/80 p-5 transition hover:border-blue-200 hover:bg-blue-50/30"
                >
                  <div className="mt-0.5 inline-flex shrink-0 rounded-xl bg-blue-50 p-2.5 text-blue-500">
                    <item.icon className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-slate-900">{item.title}</h3>
                    <p className="mt-2 text-slate-600 leading-relaxed font-light">{item.text}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <p className="mt-8 text-lg leading-8 text-slate-600 font-light border-t border-slate-100 pt-6">
              Professional{" "}
              <Link to="/commercial-aroma-diffusers/" className={textLinkClass}>
                Scent Diffuser Machines in UAE
              </Link>{" "}
              are designed to provide balanced fragrance coverage that supports consistency across the entire workplace.
            </p>
          </motion.div>
        </section>

        {/* SECTION 7: Building Better Office Ambience with CoolMaxScent */}
        <section id="building-better-ambience" className="mx-auto max-w-[1400px] scroll-mt-24 px-6 pb-12 lg:px-16">
          <motion.div {...fadeInUp} className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr]">
            <div className="rounded-[2.5rem] border border-slate-200/80 bg-white p-8 shadow-sm md:p-12">
              <p className="text-xs font-black uppercase tracking-[0.25em] text-blue-600">The CoolMaxScent Approach</p>
              <h2 className="mt-2 text-3xl font-serif tracking-tight text-slate-900 sm:text-4xl">
                Building Better Office Ambience with CoolMaxScent
              </h2>
              <div className="mt-6 space-y-4 text-slate-600 leading-relaxed font-light">
                <p>
                  Creating exceptional office ambience requires more than attractive furniture or premium interiors. It involves bringing together every element that influences how people experience the workplace — from lighting and air quality to cleanliness, interior design, and fragrance.
                </p>
                <p>
                  At{" "}
                  <Link to="/" className={textLinkClass}>
                    CoolMaxScent
                  </Link>
                  , we help businesses create workplaces that feel as professional as they look. Rather than offering one-size-fits-all solutions, we assess each workspace based on its size, layout, occupancy, and operational requirements to recommend the most suitable scenting approach.
                </p>
                <div className="rounded-2xl border border-blue-100 bg-blue-50/50 p-5">
                  <p className="text-sm font-semibold text-slate-800 mb-2">Our Recommended Solutions</p>
                  <ul className="space-y-2 text-sm">
                    <li>• <Link to="/commercial-aroma-diffusers/mistbox-x-diffuser/" className={textLinkClass}>MistBox X</Link> — for executive cabins and private offices</li>
                    <li>• <Link to="/commercial-aroma-diffusers/aeroblack-med-diffuser/" className={textLinkClass}>AeroBlack Med</Link> — for open-plan and medium offices</li>
                    <li>• <Link to="/large-area-and-hvac-aroma-diffusers/air-pulse-150-diffuser/" className={textLinkClass}>AirPulse 150</Link> — for corporate headquarters and large floors</li>
                    <li>• <Link to="/large-area-and-hvac-aroma-diffusers/aeroblack-pro-diffuser/" className={textLinkClass}>AeroBlack Pro</Link> — for HVAC-integrated multi-floor scenting</li>
                  </ul>
                </div>
                <p>
                  From compact{" "}
                  <Link to="/commercial-aroma-diffusers/" className={textLinkClass}>
                    Fragrance Machine in Dubai
                  </Link>{" "}
                  solutions to advanced{" "}
                  <Link to="/large-area-and-hvac-aroma-diffusers/" className={textLinkClass}>
                    Commercial aroma diffuser UAE
                  </Link>{" "}
                  systems, we help organisations create environments where employees feel comfortable, clients feel welcomed, and brands leave lasting impressions.
                </p>
              </div>
            </div>

            <div className="rounded-[2.5rem] border border-blue-100 bg-[linear-gradient(135deg,_#eff6ff_0%,_#f8fbff_60%,_#eef7ff_100%)] p-8 shadow-[0_25px_65px_-30px_rgba(59,130,246,0.28)] md:p-12 flex flex-col justify-between">
              <div>
                <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-200 bg-white px-4 py-2 text-[10px] font-black uppercase tracking-[0.3em] text-blue-700">
                  <ShieldCheckIcon className="h-4 w-4" /> CoolMaxScent Advantage
                </div>
                <h3 className="text-3xl font-serif tracking-tight text-slate-900 sm:text-4xl">
                  Transform Your Office Experience
                </h3>
                <div className="mt-5 space-y-4 text-slate-600 leading-relaxed font-light">
                  <p>
                    Our tailored{" "}
                    <Link to="/scent-marketing-solutions/" className={textLinkClass}>
                      Corporate scenting solutions Dubai
                    </Link>{" "}
                    include expert guidance, professional installation, fragrance selection, and ongoing support to ensure businesses maintain a consistent workplace experience throughout the year.
                  </p>
                  <ul className="space-y-3">
                    {[
                      "Workspace assessment and expert guidance",
                      "Fragrance selection aligned with your brand",
                      "Professional diffuser installation",
                      "Reliable maintenance and ongoing support",
                    ].map((item) => (
                      <li key={item} className="flex items-start gap-3">
                        <CheckCircleIcon className="mt-0.5 h-5 w-5 shrink-0 text-blue-600" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link
                  to="/contact/"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-slate-900 px-6 py-3.5 text-xs font-black uppercase tracking-[0.25em] text-white transition hover:bg-blue-600 shadow-md"
                >
                  Contact Our Team
                  <ArrowRightIcon className="h-4 w-4" />
                </Link>
                <a
                  href={`https://wa.me/${whatsappNumber}`}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-slate-300 bg-white px-6 py-3.5 text-xs font-black uppercase tracking-[0.25em] text-slate-700 transition hover:border-blue-500 hover:text-blue-600"
                >
                  <ChatBubbleLeftRightIcon className="h-5 w-5" />
                  Get a Free Quote
                </a>
              </div>
            </div>
          </motion.div>
        </section>

        {/* SECTION 8: Creating Offices That People Want to Return To */}
        <section className="mx-auto max-w-[1400px] px-6 pb-20 lg:px-16">
          <motion.div
            {...fadeInUp}
            className="rounded-[2.5rem] border border-slate-900 bg-slate-900 p-8 text-white shadow-2xl md:p-12"
          >
            <p className="text-xs font-black uppercase tracking-[0.25em] text-blue-400">The Modern Standard</p>
            <h2 className="mt-2 text-3xl font-serif tracking-tight text-white sm:text-4xl">
              Creating Offices That People Want to Return To
            </h2>
            <div className="mt-6 space-y-5 text-lg leading-8 text-slate-300 font-light">
              <p>
                Today's workplace is more than a place where work gets done — it is an extension of a company's culture, values, and commitment to excellence. As businesses across Dubai continue to compete for top talent and stronger client relationships, office ambience has become a defining factor in creating positive workplace experiences.
              </p>
              <p>
                A thoughtfully designed office combines lighting, cleanliness, air quality, interior design, noise management, and fragrance to create an environment that feels professional from the moment someone walks through the door. Among these elements, a professionally selected{" "}
                <Link to="/commercial-aroma-diffusers/" className={darkTextLinkClass}>
                  Aroma Diffuser for Corporate Office in Dubai
                </Link>{" "}
                helps complete the experience by providing subtle, consistent fragrance that enhances the overall ambience without overwhelming the space.
              </p>
              <p>
                Whether you're creating a welcoming reception area, improving employee workspaces, or maintaining a consistent atmosphere across a multi-floor corporate headquarters, investing in professional{" "}
                <Link to="/commercial-aroma-diffusers/" className={darkTextLinkClass}>
                  Office aroma diffuser Dubai
                </Link>{" "}
                solutions is an investment in your workplace experience.
              </p>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
                <p className="text-lg leading-8 text-slate-200">
                  At CoolMaxScent, we believe every office should leave a positive impression on employees, visitors, and clients alike. With tailored scenting solutions, premium fragrance technology, and commercial-grade diffusers, we help businesses across Dubai create workplaces that people enjoy working in and remember long after they leave.
                </p>
              </div>
            </div>
          </motion.div>
        </section>
      </main>
    </div>
  );
}