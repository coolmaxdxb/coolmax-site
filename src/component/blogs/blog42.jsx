import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  ArrowRightIcon,
  BuildingStorefrontIcon,
  ChatBubbleLeftRightIcon,
  CheckCircleIcon,
  SparklesIcon,
} from "@heroicons/react/24/outline";

import BlogHeroImg from "../../asset/blogimg/blog41.webp";

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 },
};

export default function ShoppingMallsScentBlog() {
  const whatsappNumber = "971509282702";

  useEffect(() => {
    window.scrollTo(0, 0);

    document.title = "Best Aroma Diffuser for Shopping Malls in Dubai | Cool Max Scent";

    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute(
        "content",
        "Busy shopping malls need more than clean spaces. An aroma diffuser for shopping malls in Dubai helps create a welcoming environment."
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
      "aroma diffuser for shopping malls in Dubai, commercial aroma diffuser Dubai, scenting solutions for malls"
    );

    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.setAttribute("rel", "canonical");
      document.head.appendChild(canonical);
    }

    canonical.setAttribute(
      "href",
      "https://www.coolmaxscent.com/aroma-diffuser-shopping-malls-dubai/"
    );
  }, []);

  const sectionLinks = [
    { label: "Running a shopping mall means managing more than retail stores", href: "#running-a-shopping-mall-means-managing-more-than-retail-stores" },
    { label: "Common environmental challenges inside shopping malls", href: "#common-environmental-challenges-inside-shopping-malls" },
    { label: "Why commercial scenting is becoming essential", href: "#why-commercial-scenting-is-becoming-essential-for-modern-shopping-malls" },
    { label: "Selecting the right aroma diffuser", href: "#selecting-the-right-aroma-diffuser-for-shopping-malls-in-dubai" },
    { label: "Key factors mall management should consider", href: "#key-factors-mall-management-should-consider-before-investing" },
    { label: "Partnering with the right commercial scenting expert", href: "#partnering-with-the-right-commercial-scenting-expert" },
    { label: "Creating shopping experiences visitors remember", href: "#creating-shopping-experiences-visitors-remember" },
  ];

  const diffuserOptions = [
    {
      title: "AirPulse 150 Large Area Aroma Diffuser",
      intro:
        "The AirPulse 150 Large Area Aroma Diffuser is designed for shopping malls that require fragrance coverage across expansive public areas.",
      items: [
        "Large shopping malls",
        "Central atriums",
        "Food courts",
        "Entertainment zones",
        "Multi-level retail spaces",
      ],
    },
    {
      title: "MistBox X Mid-Size Commercial Diffuser",
      intro:
        "The MistBox X Mid-Size Commercial Diffuser is an excellent choice for medium-sized shopping areas that require reliable fragrance coverage without serving the entire property.",
      items: [
        "Retail corridors",
        "Boutique shopping centres",
        "Lifestyle malls",
        "Indoor walkways",
        "Mid-sized commercial areas",
      ],
    },
    {
      title: "NanoPillar Diffuser",
      intro:
        "The NanoPillar Diffuser is ideal for premium locations where aesthetics are equally important.",
      items: [
        "Luxury retail entrances",
        "VIP lounges",
        "Premium shopping zones",
        "Concierge areas",
      ],
    },
    {
      title: "AeroPillar Diffuser",
      intro:
        "The AeroPillar Diffuser combines elegant design with efficient fragrance distribution, making it suitable for customer-facing areas that require both visual appeal and consistent scent coverage.",
      items: [
        "Mall entrances",
        "Information desks",
        "Customer service areas",
        "Promotional event spaces",
      ],
    },
  ];

  return (
    <div className="relative min-h-screen overflow-x-hidden bg-[radial-gradient(circle_at_top_left,_rgba(59,130,246,0.12),_transparent_35%),linear-gradient(135deg,_#f8fbff_0%,_#ffffff_45%,_#f6faff_100%)] pt-16 font-sans text-slate-900 selection:bg-blue-100">
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-0 right-0 h-[1000px] w-[1000px] rounded-full bg-blue-50/80 blur-[150px]" />
        <div className="absolute bottom-0 left-0 h-[800px] w-[800px] rounded-full bg-sky-50/70 blur-[120px]" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.06)_1px,transparent_1px)] bg-[size:80px_80px]" />
      </div>

      <div className="relative z-10">
        <section className="mx-auto max-w-[1400px] px-6 pb-16 pt-20 lg:px-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="relative overflow-hidden rounded-[2.5rem] border border-blue-100 bg-white/80 p-8 shadow-[0_35px_100px_-35px_rgba(59,130,246,0.35)] backdrop-blur-sm md:p-12"
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(59,130,246,0.18),_transparent_36%)]" />
            <div className="relative max-w-5xl">
              <div className="mb-8 inline-flex items-center gap-3 rounded-full border border-blue-100 bg-blue-50 px-4 py-2">
                <SparklesIcon className="h-4 w-4 text-blue-600" />
                <span className="text-[10px] font-black uppercase tracking-[0.3em] text-blue-700">Retail Scenting</span>
              </div>

              <h1 className="mb-8 text-4xl font-serif leading-[1.1] tracking-tighter text-slate-900 md:text-6xl">
                Creating Better Retail Environments with Aroma Diffusers for Shopping Malls in Dubai
              </h1>

              <p className="mb-6 text-lg leading-relaxed text-slate-600 md:text-xl">
                Shopping malls in Dubai are no longer just places to shop. They have evolved into lifestyle destinations where people spend time dining, relaxing, entertaining their families, and exploring premium brands. As customer expectations continue to rise, mall management teams must focus on creating an environment that encourages visitors to stay longer and return more often.
              </p>

              <p className="text-lg leading-relaxed text-slate-600 md:text-xl">
                While lighting, architecture, and visual merchandising all contribute to the customer experience, fragrance is often an overlooked element. A professionally installed<span className="text-slate-900 font-bold"> aroma diffuser for Shopping Malls in Dubai </span>helps create a welcoming atmosphere, enhances the overall ambience, and supports a positive retail experience across different areas of the mall.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                {sectionLinks.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    className="inline-flex items-center rounded-full border border-blue-200 bg-blue-50/80 px-4 py-2 text-sm font-semibold text-blue-700 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-blue-400 hover:bg-blue-600 hover:text-white"
                  >
                    {item.label}
                  </a>
                ))}
              </div>
            </div>
          </motion.div>
        </section>

        <section className="mx-auto max-w-[1400px] px-6 pb-24 lg:px-16">
          <div className="grid gap-16 lg:grid-cols-12">
            <div className="space-y-8 text-lg font-light leading-relaxed text-slate-600 lg:col-span-8">
              <motion.div {...fadeInUp} id="running-a-shopping-mall-means-managing-more-than-retail-stores" className="scroll-mt-24 border-t border-slate-100 py-10">
                <h2 className="mb-6 text-3xl font-serif tracking-tight text-slate-900 md:text-4xl">Running a Shopping Mall Means Managing More Than Retail Stores</h2>
                <p className="mb-6 text-justify">
                  Managing a shopping mall involves far more than leasing retail spaces. Every day, mall operators are responsible for creating a comfortable, safe, and enjoyable environment for thousands of visitors while ensuring every part of the property reflects a premium shopping experience.
                </p>
                <p className="mb-6 text-justify">
                  From entrances and walkways to food courts, entertainment zones, and retail outlets, each area influences how visitors perceive the mall. Even when individual stores maintain high standards, the shared spaces ultimately shape a shopper's overall impression.
                </p>
                <p className="text-justify">
                  Creating a pleasant indoor atmosphere encourages visitors to spend more time browsing stores, dining, and enjoying entertainment facilities. This is one reason many mall operators are investing in an <span className="text-slate-900 font-bold">aroma diffuser for Shopping Malls in Dubai</span> as part of their customer experience strategy.
                </p>
                <p className="mt-6 text-justify">
                  Unlike conventional air fresheners, professional scenting systems distribute fragrance evenly across large spaces, helping maintain a fresh and welcoming environment without becoming overpowering. A well-planned fragrance strategy also strengthens the mall's identity, improves visitor comfort, and creates a more memorable shopping experience.
                </p>
              </motion.div>

              <motion.div {...fadeInUp} id="common-environmental-challenges-inside-shopping-malls" className="scroll-mt-24 border-t border-slate-100 py-12">
                <h2 className="mb-6 text-3xl font-serif tracking-tight text-slate-900 md:text-4xl">Common Environmental Challenges Inside Shopping Malls</h2>
                <p className="mb-6 text-justify">
                  Large shopping malls present unique environmental challenges that directly affect visitor comfort and overall perception.
                </p>
                <p className="mb-6 text-justify">
                  One of the biggest concerns is maintaining consistent air quality across <span className="text-slate-900 font-bold">large spaces</span>. Shopping malls include retail corridors, food courts, cinemas, children's play zones, and event spaces, each generating different odours throughout the day.
                </p>
                <p className="mb-6 text-justify">
                  Food courts often produce strong cooking aromas that spread into surrounding retail areas. During weekends, holidays, and promotional events, increased visitor traffic can make indoor environments feel less fresh.
                </p>
                <p className="mb-6 text-justify">
                  Another challenge is maintaining consistency across multiple <span className="text-slate-900 font-bold">commercial spaces</span> . Visitors should experience the same welcoming atmosphere whether they enter through the main entrance, move between shopping zones, or relax in common seating areas.
                </p>
                <p className="text-justify">
                  These operational challenges explain why many facility managers are adopting Commercial Aroma Diffusers in Dubai instead of relying on conventional fragrance products. Professional scenting solutions help create a balanced environment while supporting the premium image of the shopping mall.
                </p>
              </motion.div>

              <motion.div {...fadeInUp} id="why-commercial-scenting-is-becoming-essential-for-modern-shopping-malls" className="scroll-mt-24 border-t border-slate-100 py-12">
                <h2 className="mb-6 text-3xl font-serif tracking-tight text-slate-900 md:text-4xl">Why Commercial Scenting Is Becoming Essential for Modern Shopping Malls</h2>
                <p className="mb-6 text-justify">
                  Today's consumers expect more than convenient shopping. They expect experiences that feel comfortable, enjoyable, and memorable.
                </p>
                <p className="mb-6 text-justify">
                  Professional scenting helps shopping malls achieve this by creating a consistent fragrance experience throughout the property.
                </p>
                <p className="mb-6 text-justify">
                  A commercial aroma diffuser does far more than simply add fragrance. It helps reduce the impact of unwanted odours, improves visitors' perception of cleanliness, and creates a welcoming environment from the moment they enter the mall.
                </p>
                <p className="mb-6 text-justify">
                  For premium retail destinations, fragrance also becomes part of the brand experience. Just as lighting and music influence customer behaviour, carefully selected scents help create positive emotional connections that encourage visitors to spend more time inside the mall.
                </p>
                <p className="mb-6 text-justify">
                  Modern Fragrance Machines in Dubai's Shopping Malls are specifically designed for continuous operation across large area environments. Unlike household products, these professional systems deliver consistent fragrance performance suitable for demanding commercial spaces.
                </p>
                <p className="text-justify">
                  As a result, more property owners are choosing Scent Diffuser Machines in Dubai to improve customer experience while supporting the overall ambience of their retail destinations.
                </p>
              </motion.div>

              <motion.div {...fadeInUp} id="selecting-the-right-aroma-diffuser-for-shopping-malls-in-dubai" className="scroll-mt-24 border-t border-slate-100 py-12">
                <h2 className="mb-6 text-3xl font-serif tracking-tight text-slate-900 md:text-4xl">Selecting the Right Aroma Diffuser for Shopping Malls in Dubai</h2>
                <p className="mb-8 text-justify">
                  Every shopping mall has different operational requirements. Selecting the right Fragrance diffuser for Shopping Malls in Dubai depends on the size of the property, visitor traffic, layout, and the areas requiring fragrance coverage.
                </p>

                <div className="grid gap-6">
                  {diffuserOptions.map((item, index) => (
                    <div key={index} className="rounded-[1.75rem] border border-blue-100 bg-gradient-to-br from-white to-blue-50/60 p-6 shadow-sm">
                      <h3 className="mb-3 font-serif text-2xl text-slate-900">{item.title}</h3>
                      <p className="mb-4 text-justify text-slate-600">{item.intro}</p>
                      <p className="mb-2 text-sm font-semibold uppercase tracking-[0.25em] text-slate-500">Best suited for</p>
                      <ul className="space-y-2 text-slate-600">
                        {item.items.map((entry) => (
                          <li key={entry} className="flex items-start gap-3">
                            <span className="mt-2 h-2.5 w-2.5 rounded-full bg-blue-500" />
                            <span>{entry}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>

                <p className="mt-8 text-justify">
                  Choosing the right solution ensures fragrance coverage matches the operational needs of each area instead of relying on a one-size-fits-all approach.
                </p>
              </motion.div>

              <motion.div {...fadeInUp} id="key-factors-mall-management-should-consider-before-investing" className="scroll-mt-24 border-t border-slate-100 py-12">
                <h2 className="mb-6 text-3xl font-serif tracking-tight text-slate-900 md:text-4xl">Key Factors Mall Management Should Consider Before Investing</h2>
                <p className="mb-6 text-justify">
                  Investing in a commercial scenting solution is a long-term decision that should support your mall's operations, visitor experience, and brand image. Rather than choosing a system based solely on fragrance coverage, mall management should evaluate solutions that align with the property's size, layout, and daily footfall.
                </p>
                <p className="mb-6 text-justify font-bold">
                  Evaluate the Mall's Size and Layout
                </p>
                <p className="mb-6 text-justify">
                  Every shopping mall has a different layout. Some feature multiple floors, open atriums, food courts, entertainment zones, and retail corridors, while others have more compact designs. Choosing an aroma diffuser for Shopping Malls in Dubai that matches these requirements helps ensure consistent fragrance coverage across all visitor areas.
                </p>
                <p className="mb-6 text-justify font-bold">
                  Consider Visitor Traffic
                </p>
                <p className="mb-6 text-justify">
                  Shopping malls experience varying levels of foot traffic throughout the day, especially during weekends, holidays, and seasonal events. A professional fragrance diffuser should deliver consistent performance regardless of visitor volume.
                </p>
                <p className="mb-6 text-justify font-bold">
                  Plan for Large Coverage Areas
                </p>
                <p className="mb-6 text-justify">
                  Large retail destinations require fragrance solutions capable of covering large spaces without creating uneven scent distribution. This is where Large Area and HVAC Aroma Diffusers in Dubai become an effective choice for maintaining a consistent environment throughout the property.
                </p>
                <p className="mb-6 text-justify font-bold">
                  Choose Commercial Grade Technology
                </p>
                <p className="mb-6 text-justify">
                  Unlike residential products, Commercial Aroma Diffusers in Dubai are specifically designed for continuous operation in busy commercial spaces. They provide reliable fragrance delivery while requiring minimal day-to-day maintenance.
                </p>
                <p className="mb-6 text-justify font-bold">
                  Select Premium Fragrances
                </p>
                <p className="text-justify">
                  The fragrance should complement the shopping experience rather than overpower it. A carefully selected scent creates a welcoming atmosphere while reinforcing the mall's identity and improving visitor comfort.
                </p>
                <p className="mt-6 text-justify">
                  By considering these factors before investing, shopping mall operators can choose a scenting solution that supports both operational efficiency and an exceptional customer experience.
                </p>
              </motion.div>

              <motion.div {...fadeInUp} id="partnering-with-the-right-commercial-scenting-expert" className="scroll-mt-24 border-t border-slate-100 py-12">
                <h2 className="mb-6 text-3xl font-serif tracking-tight text-slate-900 md:text-4xl">Partnering with the Right Commercial Scenting Expert</h2>
                <p className="mb-6 text-justify">
                  Choosing the right scenting partner is just as important as selecting the right fragrance system. An experienced provider understands that every shopping mall has unique operational requirements and requires a tailored approach rather than a standard solution.
                </p>
                <p className="mb-6 text-justify">
                  At Cool Max Scent, we work closely with shopping mall owners, property managers, and facility management teams to understand their environment before recommending the most suitable scenting strategy. Whether the goal is improving visitor comfort, creating a premium retail atmosphere, or maintaining a consistent fragrance across multiple commercial spaces, our approach is based on practical requirements rather than assumptions.
                </p>
                <p className="text-justify">
                  With professional guidance, premium fragrance collections, and reliable Commercial Aroma Diffusers in Dubai, Cool Max Scent helps shopping malls create welcoming environments that enhance the overall retail experience while supporting their brand image.
                </p>
              </motion.div>

              <motion.div {...fadeInUp} id="creating-shopping-experiences-visitors-remember" className="scroll-mt-24 border-t border-slate-100 py-16">
                <h2 className="mb-6 text-3xl font-serif tracking-tight text-slate-900 md:text-4xl">Creating Shopping Experiences Visitors Remember</h2>
                <p className="mb-6 text-justify">
                  The success of a shopping mall is no longer measured only by the number of stores it houses. It is also defined by the experience visitors enjoy from the moment they enter until they leave. A clean, comfortable, and welcoming environment encourages shoppers to spend more time exploring retail outlets, dining, and returning for future visits.
                </p>
                <p className="mb-6 text-justify">
                  A professionally selected aroma diffuser for Shopping Malls in Dubai helps improve ambience, supports a pleasant indoor environment, and creates a memorable sensory experience throughout large spaces.
                </p>
                <p className="mb-6 text-justify">
                  Whether you are planning to upgrade your existing scenting strategy or introduce a Fragrance Machine in Dubai for a new retail development, choosing the right solution can significantly enhance visitor comfort and strengthen your mall's overall brand experience.
                </p>
                <div className="rounded-[2rem] border border-blue-200 bg-gradient-to-r from-blue-600 to-sky-600 p-8 text-white shadow-lg">
                  <div className="mb-4 flex items-center gap-3">
                    <BuildingStorefrontIcon className="h-6 w-6" />
                    <span className="text-sm font-black uppercase tracking-[0.3em] text-blue-100">Professional retail scenting</span>
                  </div>
                  <p className="mb-6 text-lg leading-relaxed text-blue-50">
                    If you're looking for professional scenting solutions, <a href="https://www.coolmaxscent.com/" target="_blank" rel="noopener noreferrer" className="font-semibold text-white underline decoration-white/70 underline-offset-4 transition hover:decoration-2">Cool Max Scent</a> provides reliable fragrance systems and expert guidance to help shopping malls across Dubai create inviting environments that leave a lasting impression on every visitor.
                  </p>
                  <Link to="/contact/" className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-black uppercase tracking-[0.25em] text-blue-700 transition hover:bg-blue-50">
                    Contact our team <ArrowRightIcon className="h-4 w-4" />
                  </Link>
                </div>
              </motion.div>
            </div>

            <aside className="space-y-8 lg:col-span-4 lg:sticky lg:top-32 lg:h-fit">
              <div className="rounded-[2rem] border border-blue-100 bg-gradient-to-br from-blue-50 via-white to-sky-50 p-8 shadow-sm">
                <h3 className="mb-4 text-2xl font-semibold text-slate-900">Blog at a glance</h3>
                <ul className="space-y-3 text-sm text-slate-700">
                  {sectionLinks.map((item, index) => (
                    <li key={index}>
                      <a
                        href={item.href}
                        className="flex items-start gap-3 rounded-2xl border border-transparent bg-white/70 px-3 py-2.5 font-medium text-slate-700 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-blue-200 hover:bg-blue-600 hover:text-white"
                      >
                        <span className="mt-1 h-2 w-2 rounded-full bg-blue-600" />
                        <span>{item.label}</span>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="rounded-[2rem] border border-sky-100 bg-white/90 p-8 shadow-sm">
                <h3 className="mb-4 text-2xl font-semibold text-slate-900">Why it matters</h3>
                <p className="text-sm leading-relaxed text-slate-700">
                  A refined fragrance strategy helps shopping malls create a welcoming atmosphere, support visitor comfort, and strengthen their premium brand image.
                </p>
              </div>

              <div className="relative overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-slate-950 via-slate-900 to-blue-950 p-8 text-white shadow-xl">
                <div className="absolute right-0 top-0 h-32 w-32 rounded-full bg-blue-500/20 blur-2xl" />
                <h4 className="relative z-10 mb-6 text-xs font-black uppercase tracking-[0.3em] text-blue-400">Retail support</h4>
                <p className="relative z-10 mb-8 text-sm leading-relaxed text-slate-400">
                  Need help choosing the right fragrance solution for your mall? Our team can guide you to a setup that fits your space, audience, and brand.
                </p>
                <div className="relative z-10 space-y-4">
                  <a href={`https://wa.me/${whatsappNumber}`} target="_blank" rel="noopener noreferrer" className="flex w-full items-center justify-center gap-3 rounded-2xl border border-transparent bg-[#25D366] py-4 text-xs font-black uppercase tracking-[0.3em] text-white transition-all hover:bg-white hover:text-slate-900">
                    <ChatBubbleLeftRightIcon className="h-5 w-5" />
                    WhatsApp Support
                  </a>
                  <Link to="/contact/" className="flex w-full items-center justify-center gap-3 rounded-2xl border border-slate-700 py-4 text-xs font-black uppercase tracking-[0.3em] text-slate-200 transition-all hover:border-blue-500 hover:text-white">
                    Contact Our Team <ArrowRightIcon className="h-4 w-4" />
                  </Link>
                </div>
              </div>

              <div className="rounded-[2.5rem] border border-blue-100 bg-gradient-to-br from-white to-blue-50 p-8 shadow-sm">
                <h4 className="mb-6 text-xs font-black uppercase tracking-[0.3em] text-slate-400">Featured solution</h4>
                <div className="mb-4 flex h-40 items-center justify-center overflow-hidden rounded-2xl bg-[radial-gradient(circle_at_top,_rgba(59,130,246,0.25),_transparent_70%)]">
                  <img src={BlogHeroImg} alt="Commercial aroma diffuser for shopping malls" className="h-full w-full object-cover" />
                </div>
                <h5 className="mb-2 font-serif text-lg text-slate-900">Premium Commercial Scenting</h5>
                <p className="mb-6 text-sm font-light text-slate-500">A professional fragrance system for malls and retail destinations that helps create a fresher, more welcoming environment.</p>
                <Link to="/products/" className="flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.3em] text-blue-600 transition-all hover:gap-3">
                  Explore Diffusers <ArrowRightIcon className="h-3 w-3" />
                </Link>
              </div>
            </aside>
          </div>
        </section>

        <section className="px-6 pb-32">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative mx-auto max-w-[1200px] overflow-hidden rounded-[4rem] bg-gradient-to-br from-slate-900 via-slate-800 to-blue-950 p-16 text-center text-white shadow-2xl md:p-24"
          >
            <div className="absolute right-0 top-0 h-96 w-96 -translate-y-1/2 translate-x-1/2 rounded-full bg-blue-500/10 blur-3xl" />

            <h2 className="relative z-10 mb-8 font-serif text-4xl font-bold uppercase leading-tight tracking-tighter md:text-6xl">
              Transform Your Mall with Aroma Diffusers
            </h2>
            <p className="relative z-10 mx-auto mb-12 max-w-3xl text-xl font-light leading-relaxed text-slate-400">
              Create a welcoming retail environment with premium scenting systems from Cool Max Scent.
            </p>

            <div className="relative z-10 mx-auto flex w-full max-w-2xl flex-col items-center justify-center gap-6 sm:flex-row">
              <a href={`https://wa.me/${whatsappNumber}`} target="_blank" rel="noopener noreferrer" className="flex w-full flex-1 items-center justify-center gap-3 rounded-2xl border border-transparent bg-[#25D366] px-12 py-6 text-xs font-black uppercase tracking-[0.3em] text-white shadow-xl transition-all hover:bg-white hover:text-slate-900 sm:w-auto">
                <CheckCircleIcon className="h-5 w-5" />
                <span className="whitespace-nowrap">WhatsApp Specialist</span>
              </a>

              <Link to="/contact/" className="flex w-full flex-1 items-center justify-center gap-3 rounded-2xl border border-white bg-white px-12 py-6 text-xs font-black uppercase tracking-[0.3em] text-slate-900 shadow-xl transition-all hover:bg-blue-600 hover:text-white sm:w-auto">
                <span className="whitespace-nowrap">Contact Us Today</span>
                <ArrowRightIcon className="h-4 w-4" />
              </Link>
            </div>
          </motion.div>
        </section>
      </div>
    </div>
  );
}
