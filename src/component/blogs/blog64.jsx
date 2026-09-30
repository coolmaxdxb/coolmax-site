import React, { useEffect } from "react";
import { motion } from "framer-motion";
import {
  ArrowRightIcon,
  BuildingStorefrontIcon,
  CheckCircleIcon,
  ClockIcon,
  SparklesIcon,
  SunIcon,
  MoonIcon,
  CloudIcon,
} from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";
import BlogHeroImg from "../../asset/blogimg/blog64.webp";

const articleSections = [
  { id: "summer", label: "Summer" },
  { id: "winter", label: "Winter" },
  { id: "transitional-weather", label: "Transitional weather" },
  { id: "choose-for-space", label: "Choose for your space" },
  { id: "match-the-season", label: "Match your aroma oil" },
];

export default function SeasonalAromaOilsBlog() {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "How to Choose Aroma Oils for UAE Seasons | Cool Max Scent";

    const setMetaContent = (name, content) => {
      let element = document.querySelector(`meta[name="${name}"]`);
      if (!element) {
        element = document.createElement("meta");
        element.setAttribute("name", name);
        document.head.appendChild(element);
      }
      element.setAttribute("content", content);
    };

    setMetaContent(
      "description",
      "Discover how to select the right aroma oils for UAE summer, winter and transitional weather. Explore fresh, floral, woody and oriental fragrance options. Contact Us!"
    );
    setMetaContent("keywords", "aroma oils in UAE, aroma oil Dubai, best aroma oils for home and office");

    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.setAttribute("rel", "canonical");
      document.head.appendChild(canonical);
    }
    canonical.setAttribute(
      "href",
      "https://www.coolmaxscent.com/blog/how-to-select-aroma-oils-for-different-seasons-in-uae/"
    );
  }, []);

  return (
    <main className="min-h-screen overflow-x-hidden bg-[#f4fbfa] pt-16 font-sans text-slate-900 selection:bg-cyan-100">
      <div className="pointer-events-none fixed inset-0 z-0 opacity-70">
        <div className="absolute -right-32 top-0 h-[620px] w-[620px] rounded-full bg-cyan-100/70 blur-[130px]" />
        <div className="absolute bottom-0 -left-32 h-[620px] w-[620px] rounded-full bg-amber-100/50 blur-[140px]" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(15,23,42,0.025)_1px,transparent_1px),linear-gradient(90deg,rgba(15,23,42,0.025)_1px,transparent_1px)] bg-[size:64px_64px]" />
      </div>
      <div className="relative z-10">
      <section className="mx-auto max-w-[1440px] px-6 pb-16 pt-20 lg:px-16 lg:pt-28">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="grid gap-12 lg:grid-cols-12 lg:items-center"
        >
          <div className="lg:col-span-7">
            <div className="mb-7 inline-flex items-center gap-3 border border-cyan-200 bg-white/80 px-4 py-2 text-[10px] font-black uppercase tracking-[0.28em] text-cyan-800 shadow-sm backdrop-blur">
              <SparklesIcon className="h-4 w-4 text-cyan-600" /> Aroma oils by season
            </div>
            <h1 className="max-w-4xl font-serif text-5xl leading-[1.02] tracking-tight text-slate-950 md:text-7xl">
              How to Select Aroma Oils for Different Seasons in the UAE: Summer, Winter and Transitional Weather
            </h1>
            <div className="mt-8 max-w-3xl space-y-5 text-lg leading-8 text-slate-600">
              <p>
                Choosing the right aroma oil can make a significant difference to the atmosphere of a home, office, hotel, restaurant or retail space. In the UAE, fragrance selection is particularly important because the climate changes significantly throughout the year. From hot and humid summer days to cooler winter evenings and transitional weather, the right scent can help create a comfortable and inviting environment.
              </p>
              <p>
                At Cool Max Scent, we offer a wide range of aroma oils designed for different spaces, preferences and scent experiences. Here is how to select the right aroma oil for each season in the UAE.
              </p>
            </div>
            <div className="mt-7 flex items-center gap-3 text-xs font-bold uppercase tracking-[0.2em] text-slate-500">
              <ClockIcon className="h-4 w-4 text-cyan-600" /> 7 min read
              <span className="h-1 w-1 rounded-full bg-cyan-500" /> Seasonal scent guide
            </div>
          </div>

          <div className="relative lg:col-span-5">
            <div className="absolute -bottom-8 -left-5 hidden h-40 w-40 rounded-[2rem] bg-amber-200/70 lg:block" />
            <div className="absolute -right-5 -top-5 hidden h-24 w-24 rounded-full border-[10px] border-cyan-300/70 lg:block" />
            <div className="relative overflow-hidden rounded-[2rem] border border-white/80 bg-white/70 p-3 shadow-[0_35px_90px_-28px_rgba(8,145,178,0.5)] backdrop-blur-sm md:p-4">
              <div className="relative overflow-hidden rounded-[1.45rem]">
                <div className="aspect-[16/10] w-full bg-slate-100">
                  <img
                    src={BlogHeroImg}
                    alt="Aroma oils for summer, winter and transitional seasons in the UAE"
                    className="h-full w-full object-contain transition duration-700 hover:scale-[1.02]"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/75 via-transparent to-transparent" />
                <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between gap-4 text-white">
                  <div>
                    <p className="text-[10px] font-black uppercase tracking-[0.24em] text-cyan-200">UAE seasonal scenting</p>
                    <p className="mt-1 text-xl font-serif">Fresh to warmly layered</p>
                  </div>
                  <span className="shrink-0 rounded-full border border-white/30 bg-white/15 px-3 py-1.5 text-[9px] font-black uppercase tracking-[0.18em] backdrop-blur">AROMA-064</span>
                </div>
              </div>
              <div className="flex items-center justify-between px-2 pb-1 pt-4 text-[10px] font-black uppercase tracking-[0.22em] text-slate-500">
                <span>Seasonal fragrance guide</span>
                <span className="text-cyan-700">UAE · All year</span>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      <section className="mx-auto max-w-[1440px] px-6 pb-14 lg:px-16">
        <div className="grid gap-8 border-y border-slate-200 py-10 md:grid-cols-3">
          <div>
            <p className="text-3xl font-serif text-slate-950">Refreshing</p>
            <p className="mt-2 text-sm leading-6 text-slate-500">Fresh citrus and light floral notes for hot UAE summer days.</p>
          </div>
          <div>
            <p className="text-3xl font-serif text-slate-950">Warming</p>
            <p className="mt-2 text-sm leading-6 text-slate-500">Oud, amber and woody profiles for cooler winter evenings.</p>
          </div>
          <div>
            <p className="text-3xl font-serif text-slate-950">Versatile</p>
            <p className="mt-2 text-sm leading-6 text-slate-500">Balanced scents that feel comfortable through changing weather.</p>
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-[1440px] gap-14 px-6 pb-24 lg:grid-cols-12 lg:px-16">
        <aside className="h-fit lg:sticky lg:top-28 lg:col-span-3">
          <div className="border border-slate-200 bg-white/80 p-6 backdrop-blur-sm">
            <p className="mb-5 text-[10px] font-black uppercase tracking-[0.25em] text-cyan-700">Inside this guide</p>
            <nav aria-label="Article sections" className="space-y-1">
              {articleSections.map((section, index) => (
                <a
                  key={section.id}
                  href={`#${section.id}`}
                  className="flex gap-3 border-l-2 border-transparent px-3 py-2 text-sm leading-5 text-slate-500 transition hover:border-cyan-500 hover:text-cyan-800"
                >
                  <span className="font-bold text-cyan-600">{String(index + 1).padStart(2, "0")}</span>
                  {section.label}
                </a>
              ))}
            </nav>
          </div>
        </aside>

        <article className="max-w-3xl space-y-14 lg:col-span-7">
          <section id="summer" className="scroll-mt-28 border-t border-slate-200 pt-10">
            <div className="mb-4 flex items-center gap-3 text-cyan-700">
              <SunIcon className="h-6 w-6" />
              <span className="text-[10px] font-black uppercase tracking-[0.25em]">Summer scenting</span>
            </div>
            <h2 className="font-serif text-4xl leading-tight text-slate-950">Summer: Choose Fresh and Refreshing Aroma Oils</h2>
            <div className="mt-6 space-y-5 text-lg leading-8 text-slate-600">
              <p>UAE summers are known for high temperatures, strong air conditioning and long, hot days. During this period, heavy or overly sweet fragrances may sometimes feel intense in enclosed spaces.</p>
              <p>Fresh, clean and citrus-inspired aroma oils are often suitable for summer. Notes such as lemon, lime, bergamot, orange, green apple and fresh floral accords can create a refreshing atmosphere.</p>
              <p>For offices, retail stores, salons and cafés, fresh fragrances can help maintain a clean and energetic ambience. Citrus and light floral profiles are also suitable for areas where you want the fragrance to feel noticeable without becoming overwhelming.</p>
              <p>When selecting a summer aroma oil, consider fragrances that provide a bright and refreshing character and work well with your existing air-conditioning environment. Explore <Link to="/fresh-aroma-oil/" className="font-semibold text-cyan-700 underline decoration-cyan-200 underline-offset-4 transition hover:text-cyan-950 hover:decoration-cyan-500">fresh aroma oils</Link> for lighter profiles.</p>
            </div>
          </section>

          <section id="winter" className="scroll-mt-28 border-t border-slate-200 pt-10">
            <div className="mb-4 flex items-center gap-3 text-cyan-700">
              <MoonIcon className="h-6 w-6" />
              <span className="text-[10px] font-black uppercase tracking-[0.25em]">Winter scenting</span>
            </div>
            <h2 className="font-serif text-4xl leading-tight text-slate-950">Winter: Go for Warm and Rich Fragrance Profiles</h2>
            <div className="mt-6 space-y-5 text-lg leading-8 text-slate-600">
              <p>UAE winters are considerably cooler, especially during evenings. This makes it an ideal season to introduce warmer, richer and more sophisticated fragrance profiles.</p>
              <p>Aroma oils featuring oud, amber, musk, sandalwood, vanilla, bakhour and woody notes can create a welcoming atmosphere during cooler months.</p>
              <p>These fragrance profiles can work particularly well in hotels, villas, luxury retail stores, restaurants and reception areas. Warm scents can add depth and create a more premium environment for customers and guests.</p>
              <p>For luxury spaces, oud and amber-based fragrances can provide an elegant character, while woody and musky notes can create a comfortable and sophisticated ambience. Browse <Link to="/oriental-aroma-oil/" className="font-semibold text-cyan-700 underline decoration-cyan-200 underline-offset-4 transition hover:text-cyan-950 hover:decoration-cyan-500">oriental aroma oils</Link> for rich, warm fragrance profiles.</p>
            </div>
          </section>

          <section id="transitional-weather" className="scroll-mt-28 border-t border-slate-200 pt-10">
            <div className="mb-4 flex items-center gap-3 text-cyan-700">
              <CloudIcon className="h-6 w-6" />
              <span className="text-[10px] font-black uppercase tracking-[0.25em]">Between seasons</span>
            </div>
            <h2 className="font-serif text-4xl leading-tight text-slate-950">Transitional Weather: Choose Balanced and Versatile Scents</h2>
            <div className="mt-6 space-y-5 text-lg leading-8 text-slate-600">
              <p>The UAE also experiences periods where temperatures can change throughout the day. Mornings and evenings may feel cooler while afternoons remain warm. During these transitional periods, versatile fragrances can be a practical choice.</p>
              <p>Consider balanced fragrance profiles combining fresh, floral, fruity and lightly woody notes. These scents can provide freshness without feeling too light and warmth without becoming too heavy.</p>
              <p>Floral and soft citrus aroma oils are suitable for offices, homes, salons and retail environments where the fragrance needs to work comfortably throughout changing temperatures.</p>
            </div>
          </section>

          <section id="choose-for-space" className="scroll-mt-28 border-t border-slate-200 pt-10">
            <div className="mb-4 flex items-center gap-3 text-cyan-700">
              <BuildingStorefrontIcon className="h-6 w-6" />
              <span className="text-[10px] font-black uppercase tracking-[0.25em]">Choose for your space</span>
            </div>
            <h2 className="font-serif text-4xl leading-tight text-slate-950">Consider the Space Before Choosing an Aroma Oil</h2>
            <div className="mt-6 space-y-5 text-lg leading-8 text-slate-600">
              <p>Season is only one factor when selecting an aroma oil. You should also consider the size and purpose of the space.</p>
              <p>For hotels and hospitality spaces, sophisticated floral, woody or oriental fragrances can create a memorable guest experience. For offices, fresh and clean fragrances can provide a professional ambience. For homes and villas, fragrance selection can depend on the room, personal preference and desired mood.</p>
              <p>Restaurants and cafés may benefit from subtle fragrances that complement the environment without competing with food aromas.</p>
              <p>Explore the <Link to="/aromas/" className="font-semibold text-cyan-700 underline decoration-cyan-200 underline-offset-4 transition hover:text-cyan-950 hover:decoration-cyan-500">full aroma oil collection</Link> to compare scent families for different spaces.</p>
            </div>
          </section>

          <section id="match-the-season" className="scroll-mt-28 border-t border-slate-200 pt-10">
            <div className="mb-4 flex items-center gap-3 text-cyan-700">
              <SparklesIcon className="h-6 w-6" />
              <span className="text-[10px] font-black uppercase tracking-[0.25em]">Cool Max Scent</span>
            </div>
            <h2 className="font-serif text-4xl leading-tight text-slate-950">Match Your Aroma Oil to the UAE Season</h2>
            <div className="mt-6 space-y-5 text-lg leading-8 text-slate-600">
              <p>There is no single aroma oil that works perfectly for every space or season. The best choice depends on the temperature, environment, fragrance intensity and purpose of the space.</p>
              <p>At <Link to="/" className="font-semibold text-cyan-700 underline decoration-cyan-200 underline-offset-4 transition hover:text-cyan-950 hover:decoration-cyan-500">Cool Max Scent</Link>, explore aroma oils designed for homes, offices, hotels, malls, restaurants and other commercial environments. From refreshing summer fragrances to warm winter profiles, choosing the right scent can help transform the atmosphere of your space throughout the year.</p>
              <p>Create the right atmosphere in every season with Cool Max Scent.</p>
            </div>
          </section>
        </article>

        <aside className="h-fit lg:sticky lg:top-28 lg:col-span-2">
          <div className="bg-slate-950 p-6 text-white">
            <p className="mb-5 text-[10px] font-black uppercase tracking-[0.2em] text-cyan-300">Seasonal scent notes</p>
            <ul className="space-y-4 text-sm leading-6 text-slate-300">
              {["Fresh citrus for summer", "Warm oud and amber for winter", "Balanced profiles for transitional weather", "Choose intensity to suit the space"].map((item) => (
                <li key={item} className="flex gap-2">
                  <CheckCircleIcon className="h-5 w-5 shrink-0 text-cyan-400" />
                  {item}
                </li>
              ))}
            </ul>
            <Link to="/contact/" className="mt-8 inline-flex items-center gap-2 text-xs font-black uppercase tracking-[0.15em] text-white transition hover:text-cyan-300">
              Talk to an expert <ArrowRightIcon className="h-4 w-4" />
            </Link>
          </div>
        </aside>
      </section>

      <section className="mx-auto max-w-[1440px] px-6 pb-28 lg:px-16">
        <div className="bg-cyan-700 px-8 py-14 text-white md:px-16">
          <p className="text-[10px] font-black uppercase tracking-[0.28em] text-cyan-100">Cool Max Scent · Feel of Nature</p>
          <h2 className="mt-4 max-w-3xl font-serif text-4xl leading-tight md:text-6xl">Find the Perfect Aroma Oil for Every UAE Season</h2>
          <p className="mt-4 max-w-2xl text-lg leading-8 text-cyan-50">Fresh summer scents, warm winter fragrances and versatile aromas for every space.</p>
          <div className="mt-8 flex flex-wrap items-center gap-5">
            <Link to="/aromas/" className="inline-flex items-center gap-3 bg-slate-950 px-6 py-4 text-xs font-black uppercase tracking-[0.18em] transition hover:bg-white hover:text-slate-950">
              Explore Aroma Oils <ArrowRightIcon className="h-4 w-4" />
            </Link>
            <Link to="/contact/" className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-[0.15em] text-white transition hover:text-cyan-100">
              Contact Us <ArrowRightIcon className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
      </div>
    </main>
  );
}