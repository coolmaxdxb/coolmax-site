import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowRightIcon, CheckCircleIcon, SparklesIcon } from "@heroicons/react/24/outline";
import BlogHeroImg from "../../asset/blogimg/blog58.webp";

const textLinkClass = "font-semibold text-blue-700 underline decoration-blue-200 underline-offset-4 transition hover:text-blue-900 hover:decoration-blue-500";

const sections = [
  {
    id: "understand-your-brand-identity",
    title: "1. Understand Your Brand Identity",
    content: [
      "The first step is to understand what your brand represents. Your fragrance should complement your visual identity, interior design, products, and customer experience.",
      "For example, a luxury hotel may prefer sophisticated woody or oriental fragrances, while a wellness centre may choose calming floral or herbal notes. A modern retail store may benefit from a clean, fresh, and contemporary aroma.",
      "Think about the feeling you want customers to associate with your business:",
    ],
    list: [
      "Luxury and elegance",
      "Freshness and cleanliness",
      "Comfort and relaxation",
      "Energy and creativity",
      "Warmth and hospitality",
      "Nature and wellness",
    ],
  },
  {
    id: "consider-your-business-type",
    title: "2. Consider Your Business Type",
    content: [
      "Different businesses have different fragrance requirements.",
      "Hotels and hospitality: Elegant and welcoming fragrances can complement guest areas, lobbies, corridors, and other common spaces.",
      "Restaurants and cafés: Fresh and subtle aromas can help create a pleasant environment without overpowering food aromas.",
      "Retail stores: A carefully selected fragrance can complement the shopping experience and contribute to a distinctive store atmosphere.",
      "Offices: Clean, subtle fragrances may help create a comfortable environment for employees, clients, and visitors.",
      "Salons and spas: Floral, fresh, herbal, or relaxing fragrance profiles can support a calm and refreshing atmosphere.",
      "Choosing a fragrance based on your industry helps ensure that the scent fits naturally into the customer experience.",
    ],
  },
  {
    id: "think-about-your-target-audience",
    title: "3. Think About Your Target Audience",
    content: [
      "Your customers should also influence your fragrance selection. Consider their preferences, age group, lifestyle, and expectations.",
      "A fragrance that works well in a luxury retail environment may not necessarily be suitable for a family-oriented business or professional office.",
      "Testing several fragrance profiles with your team before making a final decision can help you identify an aroma that matches your audience and environment.",
    ],
  },
  {
    id: "match-the-fragrance-to-your-space",
    title: "4. Match the Fragrance to Your Space",
    content: [
      "The size and layout of your business space are important factors when selecting a fragrance.",
      "A small boutique may require a different scent intensity compared with a large hotel lobby or commercial building. Open spaces, enclosed rooms, corridors, reception areas, and HVAC-connected environments can also require different scenting approaches.",
      <>Professional <a href="https://www.coolmaxscent.com/commercial-aroma-diffusers/" className={textLinkClass}>commercial fragrance solutions in Dubai</a> can help businesses select suitable fragrance delivery systems based on their space and requirements.</>,
    ],
  },
  {
    id: "choose-the-right-fragrance-profile",
    title: "5. Choose the Right Fragrance Profile",
    content: [
      "Fragrances can generally be grouped into different profiles, such as:",
    ],
    list: [
      "Floral",
      "Fresh",
      "Citrus",
      "Woody",
      "Oriental",
      "Fruity",
      "Herbal",
      "Amber",
      "Musky",
    ],
    closing: "You can select one profile or combine different notes to create a distinctive atmosphere. The key is to choose a fragrance that is pleasant, balanced, and appropriate for the environment.",
  },
  {
    id: "maintain-a-consistent-brand-experience",
    title: "6. Maintain a Consistent Brand Experience",
    content: [
      "Once you select a fragrance, consistency is important. Using the same signature scent across different customer touchpoints can help create a recognizable atmosphere.",
      "Businesses with multiple branches can use consistent fragrance solutions to maintain a similar customer experience across locations. This can be especially useful for hotels, retail brands, restaurants, offices, and other businesses operating in multiple locations.",
    ],
  },
  {
    id: "create-the-right-atmosphere-with-cool-max-scent",
    title: "Create the Right Atmosphere With Cool Max Scent",
    content: [
      "Choosing the right business fragrance involves more than simply selecting a pleasant smell. It requires consideration of your brand identity, business type, target audience, space, fragrance profile, and scent delivery requirements.",
      <>
        With professional <a href="https://www.coolmaxscent.com/" className={textLinkClass}>business fragrance solutions in the UAE</a>, companies can create welcoming and memorable environments that complement their brand and customer experience.
      </>,
      "Cool Max Scent provides professional aroma and scent solutions for businesses, including fragrance oils, aroma diffusers, and commercial scenting systems. Whether you operate a hotel, restaurant, office, retail store, salon, spa, or other commercial space, selecting the right fragrance can help create an atmosphere that reflects your brand.",
    ],
  },
];

export default function HowToChooseRightFragranceForYourBusinessBlog() {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "How to Choose the Right Fragrance for Your Business | Cool Max Scent";

    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute(
        "content",
        "Learn how to choose the right fragrance for your business based on your space, audience and brand identity. Discover professional scent solutions from Cool Max Scent."
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
      "Business fragrance solutions UAE, Commercial fragrance UAE, Business scent marketing, Fragrance for businesses, Commercial scent solutions Dubai, Scent marketing Dubai, Aroma fragrance for business, Office fragrance solutions, Hotel fragrance solutions"
    );

    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.setAttribute("rel", "canonical");
      document.head.appendChild(canonical);
    }
    canonical.setAttribute("href", "https://coolmaxscent.com/blog/how-to-choose-right-fragrance-for-your-business/");
  }, []);

  return (
    <main className="relative min-h-screen overflow-x-hidden bg-[#f8fbff] pt-16 font-sans text-slate-900 selection:bg-blue-100">
      <div className="pointer-events-none fixed inset-0 z-0">
        <div className="absolute right-0 top-0 h-[900px] w-[900px] rounded-full bg-sky-100/70 blur-[150px]" />
        <div className="absolute bottom-0 left-0 h-[700px] w-[700px] rounded-full bg-indigo-50/70 blur-[130px]" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(15,23,42,0.025)_1px,transparent_1px),linear-gradient(90deg,rgba(15,23,42,0.025)_1px,transparent_1px)] bg-[size:72px_72px]" />
      </div>

      <div className="relative z-10">
        <section className="mx-auto max-w-[1400px] px-6 pb-16 pt-20 lg:px-16">
          <motion.div initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="grid gap-12 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-7">
              <div className="mb-8 inline-flex items-center gap-3 rounded-full border border-blue-100 bg-white/80 px-4 py-2 shadow-sm">
                <SparklesIcon className="h-4 w-4 text-blue-600" />
                <span className="text-[10px] font-black uppercase tracking-[0.3em] text-blue-700">Business Fragrance Guide</span>
              </div>
              <h1 className="mb-8 max-w-4xl text-4xl font-serif leading-[1.08] tracking-tight text-slate-950 md:text-6xl">
                How to Choose <span className="italic font-light text-blue-600">the Right Fragrance</span> for Your Business
              </h1>
              <p className="max-w-3xl text-xl font-light leading-relaxed text-slate-600">
                A Complete Scent Selection Guide for Commercial Spaces in the UAE
              </p>
              <p className="mt-6 max-w-3xl text-lg font-light leading-8 text-slate-500">
                Fragrance can play an important role in creating a welcoming and memorable environment for customers, visitors, and employees. From hotels and restaurants to retail stores, offices, salons, and spas, the right scent can complement the atmosphere and support the overall identity of a business.
              </p>
              <p className="mt-5 max-w-3xl text-lg font-light leading-8 text-slate-500">
                However, choosing a fragrance for a commercial space is different from selecting a personal perfume. The fragrance should suit the environment, customer profile, brand image, and size of the space. With the right <a href="https://www.coolmaxscent.com/" className={textLinkClass}>business fragrance solutions in the UAE</a>, companies can create a consistent and pleasant atmosphere across their locations.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <a href="#understand-your-brand-identity" className="inline-flex items-center gap-2 rounded-full bg-slate-950 px-6 py-3.5 text-xs font-black uppercase tracking-[0.2em] text-white transition hover:bg-blue-600">
                  Explore Article <ArrowRightIcon className="h-4 w-4" />
                </a>
                <a href="/contact/" className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-6 py-3.5 text-xs font-black uppercase tracking-[0.2em] text-slate-700 transition hover:border-blue-500 hover:text-blue-600">
                  Get a Free Consultation <ArrowRightIcon className="h-4 w-4" />
                </a>
              </div>
            </div>
            <div className="relative lg:col-span-5">
              <div className="rounded-[3rem] border border-white bg-white/70 p-5 shadow-[0_30px_80px_-25px_rgba(37,99,235,0.35)] backdrop-blur-sm md:p-8">
                <img src={BlogHeroImg} alt="How to choose the right fragrance for your business" className="w-full rounded-[2rem] object-cover shadow-2xl" />
              </div>
            </div>
          </motion.div>
        </section>

        <section className="mx-auto max-w-[1400px] px-6 pb-16 lg:px-16">
          <div className="rounded-[2rem] border border-slate-200 bg-white/85 p-6 shadow-sm backdrop-blur-sm">
            <p className="mb-4 text-xs font-black uppercase tracking-[0.25em] text-blue-600">Article Guide</p>
            <div className="flex flex-wrap gap-2">
              {sections.map((section, index) => (
                <a key={section.id} href={`#${section.id}`} className="rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-xs font-semibold text-slate-700 transition hover:border-blue-300 hover:bg-blue-50 hover:text-blue-700">
                  0{index + 1} {section.title}
                </a>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto grid max-w-[1400px] gap-14 px-6 pb-24 lg:grid-cols-12 lg:px-16">
          <div className="space-y-6 lg:col-span-8">
            {sections.map((section, index) => (
              <motion.section key={section.id} id={section.id} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-60px" }} className="scroll-mt-28 border-t border-slate-200 py-10">
                <div className="mb-6 flex items-start gap-5">
                  <span className="font-serif text-5xl leading-none text-blue-500/60">0{index + 1}</span>
                  <h2 className="font-serif text-3xl leading-tight tracking-tight text-slate-950 md:text-4xl">{section.title}</h2>
                </div>
                <div className="space-y-5 text-lg font-light leading-8 text-slate-600">
                  {section.content.map((paragraph, paragraphIndex) => (
                    <p key={`${section.id}-${paragraphIndex}`}>{paragraph}</p>
                  ))}
                  {section.list && (
                    <ul className="list-disc space-y-2 pl-6 text-slate-700">
                      {section.list.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  )}
                  {section.closing && <p>{section.closing}</p>}
                </div>
              </motion.section>
            ))}

            <motion.section id="create-the-right-atmosphere-with-cool-max-scent" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-60px" }} className="scroll-mt-28 border-t border-slate-200 py-10">
              <div className="mb-6 flex items-start gap-5">
                <span className="font-serif text-5xl leading-none text-blue-500/60">07</span>
                <h2 className="font-serif text-3xl leading-tight tracking-tight text-slate-950 md:text-4xl">Create the Right Atmosphere With Cool Max Scent</h2>
              </div>
              <div className="space-y-5 text-lg font-light leading-8 text-slate-600">
                <p>Choosing the right business fragrance involves more than simply selecting a pleasant smell. It requires consideration of your brand identity, business type, target audience, space, fragrance profile, and scent delivery requirements.</p>
                <p>With professional <a href="https://www.coolmaxscent.com/" className={textLinkClass}>business fragrance solutions in the UAE</a>, companies can create welcoming and memorable environments that complement their brand and customer experience.</p>
                <p>Cool Max Scent provides professional aroma and scent solutions for businesses, including fragrance oils, aroma diffusers, and commercial scenting systems. Whether you operate a hotel, restaurant, office, retail store, salon, spa, or other commercial space, selecting the right fragrance can help create an atmosphere that reflects your brand.</p>
              </div>
            </motion.section>
          </div>

          <aside className="h-fit lg:sticky lg:top-32 lg:col-span-4">
            <div className="rounded-[2.5rem] bg-slate-950 p-8 text-white shadow-xl">
              <p className="mb-5 text-xs font-black uppercase tracking-[0.25em] text-blue-400">Business scenting insights</p>
              <h3 className="mb-6 font-serif text-3xl leading-tight">The right fragrance helps your business feel more premium, consistent, and memorable.</h3>
              <ul className="space-y-4 text-sm leading-relaxed text-slate-300">
                {[
                  "Align your scent with your brand identity",
                  "Match fragrance strength to room size and purpose",
                  "Choose aroma profiles for your target audience",
                  "Create consistent brand experiences across locations",
                ].map((item) => (
                  <li key={item} className="flex gap-3"><CheckCircleIcon className="h-5 w-5 shrink-0 text-blue-400" />{item}</li>
                ))}
              </ul>
            </div>
          </aside>
        </section>

        <section className="px-6 pb-32 lg:px-16">
          <motion.div initial={{ opacity: 0, scale: 0.97 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} className="mx-auto max-w-[1200px] rounded-[3rem] bg-blue-600 p-10 text-center text-white shadow-2xl md:p-20">
            <p className="mb-5 text-xs font-black uppercase tracking-[0.3em] text-blue-100">Find the Perfect Fragrance for Your Business</p>
            <h2 className="mb-8 text-4xl font-serif leading-tight tracking-tight md:text-6xl">Create a welcoming and memorable atmosphere with professional scent solutions from Cool Max Scent.</h2>
            <a href="/contact/" className="inline-flex items-center gap-3 rounded-2xl bg-white px-8 py-4 text-xs font-black uppercase tracking-widest text-blue-700 transition hover:bg-slate-950 hover:text-white">
              Get a Free Consultation <ArrowRightIcon className="h-4 w-4" />
            </a>
          </motion.div>
        </section>
      </div>
    </main>
  );
}
