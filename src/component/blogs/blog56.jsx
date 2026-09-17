import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowRightIcon, CheckCircleIcon, SparklesIcon } from "@heroicons/react/24/outline";
import BlogHeroImg from "../../asset/blogimg/blog56.webp";

const sections = [
  {
    title: "Why Fragrance Matters in Customer Experience",
    paragraphs: [
      "Our sense of smell is closely connected to memory and emotion. A familiar or pleasant fragrance can instantly remind people of a particular place or experience. For businesses, this creates an opportunity to make their environment more recognizable and inviting.",
      "For example, a luxury hotel may use an elegant signature fragrance to complement its premium atmosphere, while a café may choose a warm and refreshing aroma that matches its food and beverage experience.",
      "The goal is not simply to make a space smell good. The right fragrance should complement the identity, purpose, and atmosphere of the business.",
    ],
  },
  {
    title: "Creating a Strong First Impression",
    paragraphs: [
      "First impressions can influence how customers perceive a business. When someone walks into a clean, fresh, and pleasantly scented environment, the overall experience can feel more comfortable and welcoming.",
      "Fragrance can become part of this first impression. Whether customers are entering a reception area, restaurant, showroom, salon, or retail store, a consistent aroma can add another sensory layer to the environment.",
      "With professional scent diffusion, businesses can maintain a more controlled and consistent fragrance experience across their customer-facing spaces.",
    ],
  },
  {
    title: "Fragrance Can Support Brand Identity",
    paragraphs: [
      "Businesses spend considerable time developing their visual identity through logos, colors, interiors, packaging, and advertising. Fragrance can provide another way to express that identity.",
      "A distinctive scent can become part of a brand's overall sensory experience. When customers repeatedly encounter the same fragrance in a particular business environment, it can contribute to creating a recognizable association with that brand.",
      "This concept is often referred to as scent marketing or olfactory branding.",
    ],
  },
  {
    title: "Enhancing Different Business Environments",
    paragraphs: [
      "Different commercial spaces require different approaches to fragrance.",
      "Hotels and Hospitality: A refined fragrance can complement guest areas, reception spaces, corridors, and lounges.",
      "Restaurants and Cafés: Fresh, carefully selected aromas can contribute to a pleasant dining environment without overpowering the food experience.",
      "Retail Stores: A suitable fragrance can complement the store atmosphere and make shopping environments feel more inviting.",
      "Offices: A fresh and subtle environment can help create a comfortable experience for employees, visitors, and clients.",
      "Salons, Spas, and Gyms: Relaxing or refreshing aromas can complement the purpose of wellness and fitness environments.",
      "Showrooms: Fragrance can help create a polished atmosphere that supports the overall presentation of products and interiors.",
    ],
  },
  {
    title: "The Importance of Professional Scent Diffusion",
    paragraphs: [
      "Simply using an air freshener may not provide consistent fragrance coverage in a commercial environment. Professional scent diffuser machines are designed to distribute fragrance more evenly across suitable areas.",
      "Factors such as room size, ceiling height, ventilation, foot traffic, and desired fragrance intensity can influence the choice of diffuser and scenting strategy.",
      "A professional solution allows businesses to develop a fragrance experience that is appropriate for their space rather than relying on inconsistent manual air freshening.",
    ],
  },
  {
    title: "Build a More Memorable Environment with Cool Max Scent",
    paragraphs: [
      <>At <a href="https://www.coolmaxscent.com/" className="font-medium text-blue-600 underline decoration-blue-500/40 underline-offset-4 hover:text-blue-800">Cool Max Scent</a>, we provide professional scent marketing and aroma solutions designed for different commercial environments. Our solutions can help businesses create fresh, welcoming, and memorable spaces through carefully selected fragrances and professional scent diffusion systems.</>,
      "From hospitality and restaurants to offices, retail stores, salons, and luxury spaces, the right fragrance can become an important part of the overall customer experience.",
      "A space should not only look good—it should feel right and create an experience customers remember.",
      <>Explore professional scent marketing solutions with <a href="https://www.coolmaxscent.com/" className="font-medium text-blue-600 underline decoration-blue-500/40 underline-offset-4 hover:text-blue-800">Cool Max Scent</a> and discover the right aroma solution for your business.</>,
    ],
  },
];

const sectionId = (title) => title.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");

export default function HowFragranceInfluencesCustomerExperienceBlog() {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "How Fragrance Influences Customer Experience | Cool Max Scent";

    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute(
        "content",
        "Discover how fragrance influences customer experience, first impressions, and brand identity in hotels, restaurants, offices, retail stores, and commercial spaces. Contact Us!"
      );
    }

    const metaKeywords = document.querySelector('meta[name="keywords"]');
    if (metaKeywords) {
      metaKeywords.setAttribute(
        "content",
        "scent marketing solutions, commercial scent solutions, aroma diffuser for business, professional scent diffuser, fragrance marketing, business scent solutions, scent branding, aroma solutions UAE, scent diffuser Dubai, commercial fragrance solutions"
      );
    } else {
      const keywordsTag = document.createElement("meta");
      keywordsTag.setAttribute("name", "keywords");
      keywordsTag.setAttribute(
        "content",
        "scent marketing solutions, commercial scent solutions, aroma diffuser for business, professional scent diffuser, fragrance marketing, business scent solutions, scent branding, aroma solutions UAE, scent diffuser Dubai, commercial fragrance solutions"
      );
      document.head.appendChild(keywordsTag);
    }

    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.setAttribute("rel", "canonical");
      document.head.appendChild(canonical);
    }
    canonical.setAttribute("href", "https://www.coolmaxscent.com/blog/how-fragrance-influences-customer-experience/");
  }, []);

  return (
    <main className="relative min-h-screen overflow-x-hidden bg-white pt-16 font-sans text-slate-900 selection:bg-blue-100">
      <div className="pointer-events-none fixed inset-0 z-0">
        <div className="absolute right-0 top-0 h-[1000px] w-[1000px] rounded-full bg-slate-50 blur-[150px]" />
        <div className="absolute bottom-0 left-0 h-[800px] w-[800px] rounded-full bg-blue-50/30 blur-[120px]" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(15,23,42,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(15,23,42,0.02)_1px,transparent_1px)] bg-[size:84px_84px]" />
      </div>

      <div className="relative z-10">
        <section className="mx-auto max-w-[1400px] px-6 pb-16 pt-20 lg:px-16">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="grid gap-12 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-7">
              <div className="mb-8 inline-flex items-center gap-3 rounded-full border border-blue-100 bg-blue-50 px-4 py-2">
                <SparklesIcon className="h-4 w-4 text-blue-600" />
                <span className="text-[10px] font-black uppercase tracking-[0.3em] text-blue-700">Commercial Scenting</span>
              </div>

              <h1 className="mb-8 text-4xl font-serif leading-[1.08] tracking-tighter text-slate-950 md:text-7xl">
                How Fragrance Influences Customer Experience in <span className="italic font-light text-slate-400">Commercial Spaces</span>
              </h1>

              <p className="max-w-3xl text-xl font-light leading-relaxed text-slate-500">
                When customers enter a hotel, restaurant, café, retail store, salon, office, or showroom, they experience more than what they see. Lighting, interior design, music, temperature, and even the air around them can influence how they perceive a space.
              </p>
              <p className="mt-6 max-w-3xl text-xl font-light leading-relaxed text-slate-500">
                Among these elements, fragrance is often overlooked, yet it can play an important role in creating a welcoming and memorable environment. A carefully selected scent can help businesses create a distinctive atmosphere while supporting a consistent customer experience.
              </p>
            </div>

            <div className="relative lg:col-span-5">
              <div className="rounded-[4rem] bg-slate-100 p-6 shadow-inner md:p-10">
                <img src={BlogHeroImg} alt="How fragrance influences customer experience in commercial spaces" className="w-full rounded-[2rem] object-cover shadow-2xl" />
              </div>
            </div>
          </motion.div>
        </section>

        <section className="mx-auto max-w-[1400px] px-6 pb-20 lg:px-16">
          <div className="mb-12 flex flex-wrap gap-3 border-y border-slate-200 py-5">
            {sections.map((section, index) => (
              <a
                key={section.title}
                href={`#${sectionId(section.title)}`}
                className="border border-slate-200 bg-white px-4 py-2 text-xs font-bold uppercase tracking-wider text-slate-600 transition hover:border-blue-300 hover:text-blue-600"
              >
                0{index + 1} {section.title}
              </a>
            ))}
          </div>

          <div className="grid gap-16 lg:grid-cols-12">
            <div className="space-y-8 lg:col-span-8">
              {sections.map((section, index) => (
                <motion.section
                  key={section.title}
                  id={sectionId(section.title)}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="scroll-mt-28 border-t border-slate-200 py-10"
                >
                  <div className="mb-6 flex items-start gap-5">
                    <span className="font-serif text-5xl leading-none text-blue-500/60">0{index + 1}</span>
                    <h2 className="font-serif text-3xl leading-tight tracking-tight text-slate-950 md:text-4xl">{section.title}</h2>
                  </div>

                  <div className="space-y-5 text-lg font-light leading-8 text-slate-600">
                    {section.paragraphs.map((paragraph, paragraphIndex) => (
                      <p key={`${section.title}-${paragraphIndex}`} className="text-justify">
                        {paragraph}
                      </p>
                    ))}
                  </div>
                </motion.section>
              ))}
            </div>

            <aside className="h-fit space-y-8 lg:sticky lg:top-32 lg:col-span-4">
              <div className="rounded-[2.5rem] bg-slate-950 p-8 text-white shadow-xl">
                <p className="mb-5 text-xs font-black uppercase tracking-[0.25em] text-blue-400">Business scent strategy</p>
                <h3 className="mb-5 font-serif text-3xl leading-tight">Create a more memorable customer experience with fragrance.</h3>
                <ul className="space-y-4 text-sm leading-relaxed text-slate-300">
                  {[
                    "Stronger first impressions",
                    "More recognizable brand identity",
                    "Consistent atmosphere across spaces",
                    "Improved customer comfort and perception",
                  ].map((item) => (
                    <li key={item} className="flex gap-3">
                      <CheckCircleIcon className="h-5 w-5 shrink-0 text-blue-400" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </aside>
          </div>
        </section>

        <section className="px-6 pb-32 lg:px-16">
          <motion.div initial={{ opacity: 0, scale: 0.97 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} className="mx-auto max-w-[1200px] rounded-[3rem] bg-blue-600 p-10 text-center text-white shadow-2xl md:p-20">
            <h2 className="mb-8 text-4xl font-serif leading-tight tracking-tighter md:text-6xl">Enhance your business environment with professional scent marketing and aroma solutions from Cool Max Scent.</h2>
            <p className="mx-auto mb-10 max-w-3xl text-xl font-light leading-relaxed text-blue-100">Create Fresh. Create Memorable. Create an Experience.</p>
            <a href="/contact/" className="inline-flex items-center gap-3 rounded-2xl bg-white px-8 py-4 text-xs font-black uppercase tracking-widest text-blue-700 transition hover:bg-slate-950 hover:text-white">
              Explore Our Scent Solutions <ArrowRightIcon className="h-4 w-4" />
            </a>
          </motion.div>
        </section>
      </div>
    </main>
  );
}
