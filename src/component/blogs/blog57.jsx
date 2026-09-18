import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowRightIcon, CheckCircleIcon, SparklesIcon } from "@heroicons/react/24/outline";
import BlogHeroImg from "../../asset/blogimg/blog57.webp";

const textLinkClass = "font-semibold text-blue-700 underline decoration-blue-200 underline-offset-4 transition hover:text-blue-900 hover:decoration-blue-500";

const sections = [
  {
    id: "why-a-fresh-environment-matters-during-back-to-school-season",
    title: "Why a Fresh Environment Matters During Back-to-School Season",
    paragraphs: [
      "After a long school holiday, families often return to structured daily routines. Children spend more time in bedrooms, study areas, classrooms, and activity spaces. These environments should feel clean, comfortable, and inviting.",
      "A pleasant fragrance can add another sensory element to a space. Rather than simply masking unwanted odours, a professionally selected scent can complement the overall environment and create a consistent atmosphere.",
      "For families and businesses, this can be particularly useful when multiple people use the same space throughout the day.",
    ],
  },
  {
    id: "refreshing-study-spaces-at-home",
    title: "Refreshing Study Spaces at Home",
    paragraphs: [
      "A dedicated study area can help create a clear separation between relaxation and schoolwork. Keeping the space organized, well-ventilated, and fresh can make it more comfortable for reading, writing, and completing assignments.",
      <>A subtle fragrance can complement the study environment without becoming overpowering. Fresh, clean, or lightly floral aromas may work well depending on personal preference and the type of space. Explore suitable <a href="https://www.coolmaxscent.com/desktop-and-small-space-aroma-diffusers/" className={textLinkClass}>study room fragrance</a> options for compact spaces.</>,
      "Using a controlled aroma diffuser can also provide a more consistent fragrance experience than frequently using manual air fresheners.",
    ],
  },
  {
    id: "creating-welcoming-classrooms",
    title: "Creating Welcoming Classrooms",
    paragraphs: [
      "Schools and educational facilities have many shared spaces, including classrooms, libraries, reception areas, activity rooms, and staff areas. Maintaining a pleasant environment is an important part of creating welcoming spaces for students, teachers, and visitors.",
      <>Professional <a href="https://www.coolmaxscent.com/commercial-aroma-diffusers/" className={textLinkClass}>school fragrance solutions</a> can be selected according to the size and purpose of the area. The fragrance intensity should remain comfortable and appropriate for a shared environment.</>,
      "The objective is to create a fresh atmosphere that supports the overall environment rather than becoming the main focus of the room.",
    ],
  },
  {
    id: "making-bedrooms-feel-fresh-again",
    title: "Making Bedrooms Feel Fresh Again",
    paragraphs: [
      "Bedrooms often become multipurpose spaces during the school year. Children may use them for sleeping, relaxing, reading, and preparing for the next school day.",
      "A suitable home fragrance can help create a pleasant atmosphere, particularly after cleaning and organizing the room for the new school routine. Fresh and calming fragrance profiles can be considered based on the preferences of the household.",
    ],
  },
  {
    id: "fragrance-for-busy-family-spaces",
    title: "Fragrance for Busy Family Spaces",
    paragraphs: [
      "Back-to-school routines involve more than study areas. Kitchens, living rooms, entrances, hallways, and family rooms can experience increased activity throughout the day.",
      "Keeping these spaces fresh can contribute to a more welcoming home environment. A professionally designed scenting solution can help distribute fragrance consistently across suitable areas while complementing the home's existing interior and décor.",
    ],
  },
  {
    id: "choosing-the-right-aroma-solution",
    title: "Choosing the Right Aroma Solution",
    paragraphs: [
      "Every space has different requirements. Room size, ventilation, foot traffic, ceiling height, and the desired fragrance intensity can influence the type of diffuser and fragrance solution required.",
      "For smaller spaces, compact aroma diffusers may be suitable. Larger areas may benefit from professional scent diffusion systems designed to provide broader coverage.",
      "The fragrance itself should also match the character of the environment. Fresh, elegant, relaxing, or uplifting scent profiles can be selected according to the purpose of the space.",
    ],
  },
];

export default function BackToSchoolFreshAtmosphereBlog() {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Back to School Fresh Atmosphere In UAE | Cool Max Scent";

    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute(
        "content",
        "Discover how fragrance can refresh homes, classrooms, and study spaces for back-to-school season with aroma solutions from Cool Max Scent. Contact Us!"
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
      "back to school fresh atmosphere, school fragrance solutions, study room fragrance, classroom fragrance, fragrance solutions UAE"
    );

    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.setAttribute("rel", "canonical");
      document.head.appendChild(canonical);
    }
    canonical.setAttribute("href", "https://www.coolmaxscent.com/blog/back-to-school-fresh-atmosphere-fragrance-in-uae/");
  }, []);

  return (
    <main className="relative min-h-screen overflow-x-hidden bg-[#f8fbff] pt-16 font-sans text-slate-900 selection:bg-blue-100">
      <div className="pointer-events-none fixed inset-0 z-0">
        <div className="absolute right-0 top-0 h-[900px] w-[900px] rounded-full bg-sky-100/70 blur-[150px]" />
        <div className="absolute bottom-0 left-0 h-[700px] w-[700px] rounded-full bg-emerald-50/70 blur-[130px]" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(15,23,42,0.025)_1px,transparent_1px),linear-gradient(90deg,rgba(15,23,42,0.025)_1px,transparent_1px)] bg-[size:72px_72px]" />
      </div>

      <div className="relative z-10">
        <section className="mx-auto max-w-[1400px] px-6 pb-16 pt-20 lg:px-16">
          <motion.div initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="grid gap-12 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-7">
              <div className="mb-8 inline-flex items-center gap-3 rounded-full border border-blue-100 bg-white/80 px-4 py-2 shadow-sm">
                <SparklesIcon className="h-4 w-4 text-blue-600" />
                <span className="text-[10px] font-black uppercase tracking-[0.3em] text-blue-700">Back-to-School Scenting</span>
              </div>
              <h1 className="mb-8 max-w-4xl text-4xl font-serif leading-[1.08] tracking-tight text-slate-950 md:text-7xl">
                Back to School, <span className="italic font-light text-blue-600">Fresh Atmosphere</span>
              </h1>
              <p className="max-w-3xl text-xl font-light leading-relaxed text-slate-600">
                Refreshing Homes, Classrooms &amp; Study Spaces with Fragrance
              </p>
              <p className="mt-6 max-w-3xl text-lg font-light leading-8 text-slate-500">
                The back-to-school season brings a fresh routine for the entire family. Early mornings, school preparations, homework, study sessions, and busy evenings quickly become part of everyday life. While organizing school supplies and preparing schedules are important, creating a fresh and comfortable environment at home and in learning spaces can also make the transition more enjoyable.
              </p>
              <p className="mt-5 max-w-3xl text-lg font-light leading-8 text-slate-500">
                Fragrance is one simple way to enhance the atmosphere of homes, classrooms, and study areas. With the right aroma solution, spaces can feel more welcoming, comfortable, and refreshed throughout the day.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <a href="#why-a-fresh-environment-matters-during-back-to-school-season" className="inline-flex items-center gap-2 rounded-full bg-slate-950 px-6 py-3.5 text-xs font-black uppercase tracking-[0.2em] text-white transition hover:bg-blue-600">
                  Explore Article <ArrowRightIcon className="h-4 w-4" />
                </a>
                <a href="/contact/" className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-6 py-3.5 text-xs font-black uppercase tracking-[0.2em] text-slate-700 transition hover:border-blue-500 hover:text-blue-600">
                  Contact Us <ArrowRightIcon className="h-4 w-4" />
                </a>
              </div>
            </div>
            <div className="relative lg:col-span-5">
              <div className="rounded-[3rem] border border-white bg-white/70 p-5 shadow-[0_30px_80px_-25px_rgba(37,99,235,0.35)] backdrop-blur-sm md:p-8">
                <img src={BlogHeroImg} alt="Fresh fragrance atmosphere for homes, classrooms, and study spaces" className=" w-full rounded-[2rem] object-cover shadow-2xl" />
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
                  {section.paragraphs.map((paragraph, paragraphIndex) => (
                    <p key={`${section.id}-${paragraphIndex}`}>{paragraph}</p>
                  ))}
                </div>
              </motion.section>
            ))}

            <motion.section id="create-a-fresh-back-to-school-atmosphere-with-cool-max-scent" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-60px" }} className="scroll-mt-28 border-t border-slate-200 py-10">
              <div className="mb-6 flex items-start gap-5">
                <span className="font-serif text-5xl leading-none text-blue-500/60">07</span>
                <h2 className="font-serif text-3xl leading-tight tracking-tight text-slate-950 md:text-4xl">Create a Fresh Back-to-School Atmosphere with Cool Max Scent</h2>
              </div>
              <div className="space-y-5 text-lg font-light leading-8 text-slate-600">
                <p>At <a href="https://www.coolmaxscent.com/" className={textLinkClass}>Cool Max Scent</a>, we provide professional scent marketing and aroma solutions designed for homes, businesses, and different commercial environments. Our range of aroma diffusers and fragrance solutions can help create fresh, welcoming, and memorable spaces.</p>
                <p>As families and educational environments prepare for another school year, fragrance can be a simple way to add a fresh sensory experience to everyday spaces.</p>
                <p>From the home study area to classrooms and shared spaces, the right aroma can help create an environment that feels ready for a new beginning.</p>
                <p>Make this back-to-school season feel fresh from the moment the day begins with Cool Max Scent.</p>
              </div>
            </motion.section>
          </div>

          <aside className="h-fit lg:sticky lg:top-32 lg:col-span-4">
            <div className="rounded-[2.5rem] bg-slate-950 p-8 text-white shadow-xl">
              <p className="mb-5 text-xs font-black uppercase tracking-[0.25em] text-blue-400">Fresh spaces, ready for a new routine</p>
              <h3 className="mb-6 font-serif text-3xl leading-tight">A considered aroma can make shared spaces feel more welcoming.</h3>
              <ul className="space-y-4 text-sm leading-relaxed text-slate-300">
                {["Fresh study spaces at home", "Comfortable classrooms and libraries", "Consistent fragrance for busy family areas", "Professional solutions for every room size"].map((item) => (
                  <li key={item} className="flex gap-3"><CheckCircleIcon className="h-5 w-5 shrink-0 text-blue-400" />{item}</li>
                ))}
              </ul>
            </div>
          </aside>
        </section>

        <section className="px-6 pb-32 lg:px-16">
          <motion.div initial={{ opacity: 0, scale: 0.97 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} className="mx-auto max-w-[1200px] rounded-[3rem] bg-blue-600 p-10 text-center text-white shadow-2xl md:p-20">
            <p className="mb-5 text-xs font-black uppercase tracking-[0.3em] text-blue-100">Cool Max Scent</p>
            <h2 className="mb-8 text-4xl font-serif leading-tight tracking-tight md:text-6xl">MAKE BACK-TO-SCHOOL FEEL FRESH</h2>
            <p className="mx-auto mb-5 max-w-3xl text-xl font-light leading-relaxed text-blue-50">Refresh your home, study spaces, and everyday environments with professional fragrance solutions from Cool Max Scent.</p>
            <p className="mx-auto mb-10 max-w-3xl text-sm font-black uppercase tracking-[0.2em] text-blue-100">Fresh Spaces. Welcoming Atmosphere. Better Everyday Experience.</p>
            <a href="https://www.coolmaxscent.com/" className="inline-flex items-center gap-3 rounded-2xl bg-white px-8 py-4 text-xs font-black uppercase tracking-widest text-blue-700 transition hover:bg-slate-950 hover:text-white">
              Explore Cool Max Scent <ArrowRightIcon className="h-4 w-4" />
            </a>
          </motion.div>
        </section>
      </div>
    </main>
  );
}