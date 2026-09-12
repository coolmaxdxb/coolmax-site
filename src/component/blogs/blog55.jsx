import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowRightIcon, CheckCircleIcon, SparklesIcon } from "@heroicons/react/24/outline";
import BlogHeroImg from "../../asset/blogimg/blog55.webp";

const sections = [
  {
    title: "Why Fragrance Matters in a Car Showroom",
    paragraphs: [
      "Our sense of smell is closely connected to emotions and memories. A pleasant and carefully selected fragrance can make a space feel more welcoming, sophisticated, and comfortable.",
      "A car showroom may have beautiful interiors and high-end vehicles, but an unpleasant or completely neutral atmosphere can affect the overall experience. Professional scenting helps create a consistent environment from the moment customers enter until they leave.",
      "For luxury dealerships, this is particularly important because customers are not simply evaluating a vehicle. They are also experiencing the brand lifestyle associated with it.",
    ],
  },
  {
    title: "Creating a Premium First Impression",
    paragraphs: [
      "First impressions are important in automotive sales. Customers may immediately notice the showroom's architecture, vehicles, lighting, and staff. Fragrance can work alongside these visual elements to complete the atmosphere.",
      "A sophisticated scent can help create a feeling of elegance and cleanliness without overpowering the showroom. Fresh, woody, citrus, floral, or premium-inspired fragrance profiles can be selected according to the dealership's brand image and target customers.",
      "The goal is not simply to make the showroom smell good. It is to create an atmosphere that feels intentional and aligned with the brand.",
    ],
  },
  {
    title: "Building a Memorable Brand Experience",
    paragraphs: [
      "A signature fragrance can also become part of a dealership's identity. When customers repeatedly experience the same distinctive scent during showroom visits, the fragrance can become associated with the brand and its environment.",
      "This can be particularly useful for automotive businesses that want to differentiate themselves from competing dealerships. Instead of relying only on logos, colors, and advertising, businesses can introduce another sensory element into their branding strategy.",
    ],
  },
  {
    title: "Choosing the Right Scent for Automotive Spaces",
    paragraphs: [
      "Not every fragrance is suitable for a car showroom. The scent should complement the size of the space, interior design, vehicle positioning, and overall brand personality.",
      "For example, a luxury dealership may prefer sophisticated woody or musky notes, while another showroom might choose a fresh and modern citrus-based fragrance. The intensity should also be carefully controlled so that the fragrance enhances the environment without becoming distracting.",
      "Professional aroma diffusion systems can help distribute fragrance consistently throughout the showroom and maintain a balanced atmosphere.",
    ],
  },
  {
    title: "Enhancing Customer Comfort",
    paragraphs: [
      "Car-buying decisions can take time. Customers may browse several vehicles, speak with sales consultants, compare models, and discuss financing or specifications.",
      "A pleasant showroom atmosphere can make this process feel more comfortable and welcoming. When fragrance is combined with good lighting, comfortable seating, clean interiors, and attentive customer service, it contributes to a more complete customer experience.",
    ],
  },
];

const sectionId = (title) => title.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");

export default function LuxuryCarShowroomScentMarketingBlog() {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Luxury Car Showroom Scent Marketing Dubai | Cool Max Scent";

    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute(
        "content",
        "Discover how fragrance can elevate luxury car showrooms in Dubai, create memorable customer experiences, and strengthen premium brand perception with scent marketing."
      );
    }

    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.setAttribute("rel", "canonical");
      document.head.appendChild(canonical);
    }
    canonical.setAttribute("href", "https://www.coolmaxscent.com/blog/luxury-car-showroom-scent-marketing-dubai/");
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
                <span className="text-[10px] font-black uppercase tracking-[0.3em] text-blue-700">Luxury Automotive Scenting</span>
              </div>
              <h1 className="mb-8 text-4xl font-serif leading-[1.08] tracking-tighter text-slate-950 md:text-7xl">
                Creating a Luxury Showroom Experience: <span className="italic font-light text-slate-400">The Role of Fragrance in Dubai Car Dealerships</span>
              </h1>
              <p className="max-w-3xl text-xl font-light leading-relaxed text-slate-500">
                When customers walk into a luxury car showroom, they expect more than a collection of impressive vehicles. They expect an experience. From the lighting and interior design to the music and customer service, every detail can influence how they perceive the brand. One often-overlooked element that can make this experience more memorable is fragrance.
              </p>
              <p className="mt-6 max-w-3xl text-xl font-light leading-relaxed text-slate-500">
                Scent marketing is becoming an increasingly interesting way for businesses to create a distinctive atmosphere. For car dealerships in Dubai, where premium vehicles and luxury experiences are highly competitive, the right fragrance can complement the showroom environment and leave a lasting impression.
              </p>
            </div>
            <div className="relative lg:col-span-5">
              <div className="rounded-[4rem] bg-slate-100 p-6 shadow-inner md:p-10">
                <img src={BlogHeroImg} alt="Luxury car showroom scent marketing in Dubai" className=" w-full rounded-[2rem] object-contain shadow-2xl" />
              </div>
            </div>
          </motion.div>
        </section>

        <section className="mx-auto max-w-[1400px] px-6 pb-20 lg:px-16">
          <div className="mb-12 flex flex-wrap gap-3 border-y border-slate-200 py-5">
            {sections.map((section, index) => <a key={section.title} href={`#${sectionId(section.title)}`} className="border border-slate-200 bg-white px-4 py-2 text-xs font-bold uppercase tracking-wider text-slate-600 transition hover:border-blue-300 hover:text-blue-600">0{index + 1} {section.title}</a>)}
          </div>

          <div className="grid gap-16 lg:grid-cols-12">
            <div className="space-y-8 lg:col-span-8">
              {sections.map((section, index) => (
                <motion.section key={section.title} id={sectionId(section.title)} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="scroll-mt-28 border-t border-slate-200 py-10">
                  <div className="mb-6 flex items-start gap-5">
                    <span className="font-serif text-5xl leading-none text-blue-500/60">0{index + 1}</span>
                    <h2 className="font-serif text-3xl leading-tight tracking-tight text-slate-950 md:text-4xl">{section.title}</h2>
                  </div>
                  <div className="space-y-5 text-lg font-light leading-8 text-slate-600">
                    {section.paragraphs.map((paragraph) => <p key={paragraph} className="text-justify">{paragraph}</p>)}
                  </div>
                </motion.section>
              ))}

              <section className="border-t border-slate-200 py-10">
                <div className="mb-6 flex items-start gap-5">
                  <span className="font-serif text-5xl leading-none text-blue-500/60">06</span>
                  <h2 className="font-serif text-3xl leading-tight tracking-tight text-slate-950 md:text-4xl">Make Your Showroom More Memorable with Scent</h2>
                </div>
                <div className="space-y-5 text-lg font-light leading-8 text-slate-600">
                  <p className="text-justify">In Dubai's competitive automotive market, creating a premium customer experience can help dealerships stand apart. Scent marketing offers an additional way to transform an ordinary showroom into a more distinctive and memorable environment.</p>
                  <p className="text-justify">With the right fragrance and professional scent diffusion solution, automotive businesses can create an atmosphere that reflects their brand, welcomes customers, and complements the luxury of the vehicles on display.</p>
                  <p className="text-justify"><a href="https://www.coolmaxscent.com/" className="font-medium text-blue-600 underline decoration-blue-500/40 underline-offset-4">Cool Max Scent</a> provides professional scent solutions designed for commercial environments. Whether you operate a luxury car showroom, dealership, or automotive facility in Dubai, the right fragrance strategy can help create an experience customers remember.</p>
                </div>
              </section>
            </div>

            <aside className="h-fit space-y-8 lg:sticky lg:top-32 lg:col-span-4">
              <div className="rounded-[2.5rem] bg-slate-950 p-8 text-white shadow-xl">
                <p className="mb-5 text-xs font-black uppercase tracking-[0.25em] text-blue-400">Showroom scent strategy</p>
                <h3 className="mb-5 font-serif text-3xl leading-tight">A premium atmosphere for every customer touchpoint.</h3>
                <ul className="space-y-4 text-sm leading-relaxed text-slate-300">
                  {["Sophisticated first impressions", "Distinctive brand atmosphere", "Balanced fragrance across the showroom", "More comfortable customer journeys"].map((item) => <li key={item} className="flex gap-3"><CheckCircleIcon className="h-5 w-5 shrink-0 text-blue-400" />{item}</li>)}
                </ul>
              </div>
            </aside>
          </div>
        </section>

        <section className="px-6 pb-32 lg:px-16">
          <motion.div initial={{ opacity: 0, scale: 0.97 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} className="mx-auto max-w-[1200px] rounded-[3rem] bg-blue-600 p-10 text-center text-white shadow-2xl md:p-20">
            <h2 className="mb-8 text-4xl font-serif leading-tight tracking-tighter md:text-6xl">Elevate Your Automotive Showroom with Signature Scent</h2>
            <p className="mx-auto mb-10 max-w-3xl text-xl font-light leading-relaxed text-blue-100">Create a premium, memorable atmosphere that complements your vehicles and strengthens your brand experience. Discover professional scent marketing solutions for car dealerships in Dubai.</p>
            <a href="/contact/" className="inline-flex items-center gap-3 rounded-2xl bg-white px-8 py-4 text-xs font-black uppercase tracking-widest text-blue-700 transition hover:bg-slate-950 hover:text-white">Get a Free Consultation <ArrowRightIcon className="h-4 w-4" /></a>
          </motion.div>
        </section>
      </div>
    </main>
  );
}
