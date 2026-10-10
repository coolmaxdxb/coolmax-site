import React, { useEffect } from "react";
import { motion } from "framer-motion";
import {
  ArrowRightIcon,
  BuildingStorefrontIcon,
  CheckCircleIcon,
  ClockIcon,
  SparklesIcon,
  UserGroupIcon,
} from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";
import BlogHeroImg from "../../asset/blogimg/blog67.webp";

const articleSections = [
  { id: "why-fragrance", label: "Why fragrance matters" },
  { id: "relaxation-atmosphere", label: "Relaxation-focused atmosphere" },
  { id: "fragrance-areas", label: "Where to use fragrance" },
  { id: "choosing-diffuser", label: "Choosing a diffuser" },
  { id: "aeroblack-med", label: "AeroBlack Med" },
  { id: "mistbox-x", label: "MistBox X" },
  { id: "wellness-fragrance", label: "Selecting a fragrance" },
  { id: "professional-scenting", label: "Professional scenting" },
  { id: "cleanliness", label: "Fragrance and cleanliness" },
  { id: "wellness-faq", label: "Frequently asked questions" },
  { id: "coolmaxscent", label: "Coolmaxscent" },
];

const commercialDiffusersUrl = "/commercial-aroma-diffusers/";
const internalLinkClass =
  "font-semibold text-cyan-700 underline decoration-cyan-200 underline-offset-4 transition hover:text-cyan-950 hover:decoration-cyan-500";

export default function WellnessEnvironmentBlog() {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Aroma Diffuser for Wellness Centres | Coolmaxscent";

    const description =
      "Discover how an aroma diffuser for wellness centres can create a calming atmosphere. Explore professional spa scenting solutions with AeroBlack Med and MistBox X.";
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement("meta");
      metaDescription.setAttribute("name", "description");
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute("content", description);

    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.setAttribute("rel", "canonical");
      document.head.appendChild(canonical);
    }
    canonical.setAttribute(
      "href",
      "https://www.coolmaxscent.com/blog/fragrance-creates-a-calming-wellness-environment/"
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
                <SparklesIcon className="h-4 w-4 text-cyan-600" />
                Professional spa scenting
              </div>
              <h1 className="max-w-4xl font-serif text-5xl leading-[1.02] tracking-tight text-slate-950 md:text-7xl">
                How Professional Fragrance Creates a Calming Wellness Environment
              </h1>
              <div className="mt-8 max-w-3xl space-y-5 text-lg leading-8 text-slate-600">
                <p>A wellness centre is designed to help people slow down.</p>
              </div>
              <div className="mt-7 flex items-center gap-3 text-xs font-bold uppercase tracking-[0.2em] text-slate-500">
                <ClockIcon className="h-4 w-4 text-cyan-600" /> 7 min read
                <span className="h-1 w-1 rounded-full bg-cyan-500" />
                Wellness centre scenting
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
                      alt="Professional aroma diffuser for a wellness centre"
                      className="h-full w-full object-contain transition duration-700 hover:scale-[1.02]"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/75 via-transparent to-transparent" />
                  <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between gap-4 text-white">
                    <div>
                      <p className="text-[10px] font-black uppercase tracking-[0.24em] text-cyan-200">
                        Professional spa scenting
                      </p>
                      <p className="mt-1 text-xl font-serif">
                        Create a calming atmosphere
                      </p>
                    </div>
                    <span className="shrink-0 rounded-full border border-white/30 bg-white/15 px-3 py-1.5 text-[9px] font-black uppercase tracking-[0.18em] backdrop-blur">
                      CMWB-003
                    </span>
                  </div>
                </div>
                <div className="flex items-center justify-between px-2 pb-1 pt-4 text-[10px] font-black uppercase tracking-[0.22em] text-slate-500">
                  <span>Wellness environments</span>
                  <span className="text-cyan-700">UAE · Commercial</span>
                </div>
              </div>
            </div>
          </motion.div>
        </section>

        <section className="mx-auto max-w-[1440px] px-6 pb-14 lg:px-16">
          <div className="grid gap-8 border-y border-slate-200 py-10 md:grid-cols-3">
            <div>
              <p className="text-3xl font-serif text-slate-950">Subtlety</p>
              <p className="mt-2 text-sm leading-6 text-slate-500">
                Choose a fragrance that supports the experience without becoming distracting.
              </p>
            </div>
            <div>
              <p className="text-3xl font-serif text-slate-950">Consistency</p>
              <p className="mt-2 text-sm leading-6 text-slate-500">
                Plan the diffuser, fragrance intensity, and placement around your space.
              </p>
            </div>
            <div>
              <p className="text-3xl font-serif text-slate-950">Comfort</p>
              <p className="mt-2 text-sm leading-6 text-slate-500">
                Let fragrance complement cleanliness and the other details of a wellness visit.
              </p>
            </div>
          </div>
        </section>

        <section className="mx-auto grid max-w-[1440px] gap-14 px-6 pb-24 lg:grid-cols-12 lg:px-16">
          <aside className="h-fit lg:sticky lg:top-28 lg:col-span-3">
            <div className="border border-slate-200 bg-white/80 p-6 backdrop-blur-sm">
              <p className="mb-5 text-[10px] font-black uppercase tracking-[0.25em] text-cyan-700">
                Inside this guide
              </p>
              <nav aria-label="Article sections" className="space-y-1">
                {articleSections.map((section, index) => (
                  <a
                    key={section.id}
                    href={`#${section.id}`}
                    className="flex gap-3 border-l-2 border-transparent px-3 py-2 text-sm leading-5 text-slate-500 transition hover:border-cyan-500 hover:text-cyan-800"
                  >
                    <span className="font-bold text-cyan-600">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    {section.label}
                  </a>
                ))}
              </nav>
            </div>
          </aside>

          <article className="max-w-3xl space-y-14 lg:col-span-7">
            <section className="border-t border-slate-200 pt-10">
              <div className="mb-4 flex items-center gap-3 text-cyan-700">
                <SparklesIcon className="h-6 w-6" />
                <span className="text-[10px] font-black uppercase tracking-[0.25em]">
                  Set the right tone
                </span>
              </div>
              <div className="space-y-5 text-lg leading-8 text-slate-600">
                <p>
                  From the moment a visitor walks through the door, everything matters, the lighting, music, temperature, interiors, cleanliness, and the overall atmosphere. Unlike a busy retail or commercial environment, a wellness space should encourage people to feel comfortable and relaxed.
                </p>
                <p>One detail that can quietly contribute to this experience is fragrance.</p>
                <p>
                  With the right scent and a professional diffusion system, wellness centres can create a more consistent and welcoming atmosphere. This is why businesses are exploring an{" "}
                  <Link to={commercialDiffusersUrl} className={internalLinkClass}>
                    aroma diffuser for wellness centres
                  </Link>{" "}
                  as part of their overall ambience strategy.
                </p>
              </div>
            </section>

            <section id="why-fragrance" className="scroll-mt-28 border-t border-slate-200 pt-10">
              <div className="mb-4 flex items-center gap-3 text-cyan-700">
                <UserGroupIcon className="h-6 w-6" />
                <span className="text-[10px] font-black uppercase tracking-[0.25em]">
                  Support the visitor experience
                </span>
              </div>
              <h2 className="font-serif text-4xl leading-tight text-slate-950">
                Why Fragrance Matters in Wellness Spaces
              </h2>
              <div className="mt-6 space-y-5 text-lg leading-8 text-slate-600">
                <p>People visit wellness centres for different reasons.</p>
                <p>
                  They may be attending a spa treatment, massage, yoga session, beauty treatment, meditation class, or simply looking for a break from a busy routine.
                </p>
                <p>The environment plays an important role in setting the mood.</p>
                <p>
                  A cluttered, stuffy, or strongly scented space can work against the calming atmosphere a wellness centre is trying to create.
                </p>
                <p>
                  On the other hand, a subtle and carefully selected fragrance can complement the surroundings and make the space feel fresher and more inviting.
                </p>
                <p>The purpose isn't to make the fragrance the centre of attention.</p>
                <p>It should quietly support the experience.</p>
              </div>
            </section>

            <section id="relaxation-atmosphere" className="scroll-mt-28 border-t border-slate-200 pt-10">
              <div className="mb-4 flex items-center gap-3 text-cyan-700">
                <SparklesIcon className="h-6 w-6" />
                <span className="text-[10px] font-black uppercase tracking-[0.25em]">
                  Design for relaxation
                </span>
              </div>
              <h2 className="font-serif text-4xl leading-tight text-slate-950">
                Creating a Relaxation-Focused Atmosphere
              </h2>
              <div className="mt-6 space-y-5 text-lg leading-8 text-slate-600">
                <p>A wellness centre is different from a typical commercial space.</p>
                <p>Customers often expect a sense of calm as soon as they enter.</p>
                <p>
                  This makes Relaxation Ambience an important consideration when designing the environment.
                </p>
                <p>
                  Soft lighting, natural materials, comfortable furniture, calming music, and carefully chosen fragrances can work together to create a more cohesive atmosphere.
                </p>
                <p>Fragrance is particularly interesting because it works in the background.</p>
                <p>
                  Visitors may not consciously think about the scent, but it can still become part of how they experience the space.
                </p>
              </div>
            </section>

            <section id="fragrance-areas" className="scroll-mt-28 border-t border-slate-200 pt-10">
              <div className="mb-4 flex items-center gap-3 text-cyan-700">
                <BuildingStorefrontIcon className="h-6 w-6" />
                <span className="text-[10px] font-black uppercase tracking-[0.25em]">
                  Plan by area
                </span>
              </div>
              <h2 className="font-serif text-4xl leading-tight text-slate-950">
                Where Can Wellness Centres Use Fragrance?
              </h2>
              <div className="mt-6 space-y-5 text-lg leading-8 text-slate-600">
                <p>
                  A professional scenting system can be used in several areas depending on the centre's layout and requirements.
                </p>
                <h3 className="font-semibold text-slate-900">Reception Areas</h3>
                <p>
                  The reception is the first point of contact for many visitors. A subtle fragrance can complement the interior and create a welcoming first impression.
                </p>
                <h3 className="font-semibold text-slate-900">Waiting Areas</h3>
                <p>
                  Visitors may spend several minutes waiting for their appointment or treatment. A balanced fragrance can complement comfortable seating and calming interiors.
                </p>
                <h3 className="font-semibold text-slate-900">Spa Treatment Areas</h3>
                <p>
                  Spa environments are naturally associated with relaxation. A carefully selected scent can support the atmosphere without overpowering the treatment space.
                </p>
                <h3 className="font-semibold text-slate-900">Yoga and Meditation Spaces</h3>
                <p>
                  These areas require particular attention to fragrance intensity. A subtle scent may complement the environment, while strong fragrances could become distracting.
                </p>
                <h3 className="font-semibold text-slate-900">Corridors and Common Areas</h3>
                <p>
                  Consistent scenting across shared spaces can help create a more unified experience throughout the wellness centre.
                </p>
              </div>
            </section>

            <section id="choosing-diffuser" className="scroll-mt-28 border-t border-slate-200 pt-10">
              <div className="mb-4 flex items-center gap-3 text-cyan-700">
                <CheckCircleIcon className="h-6 w-6" />
                <span className="text-[10px] font-black uppercase tracking-[0.25em]">
                  Match the diffuser to your space
                </span>
              </div>
              <h2 className="font-serif text-4xl leading-tight text-slate-950">
                Choosing the Right Aroma Diffuser for Wellness Centres
              </h2>
              <div className="mt-6 space-y-5 text-lg leading-8 text-slate-600">
                <p>Choosing the right equipment is an important part of professional scenting.</p>
                <p>
                  Different wellness centres have different requirements. A compact treatment room doesn't have the same needs as a large spa with multiple rooms and common areas.
                </p>
                <p>
                  Before selecting an{" "}
                  <Link to={commercialDiffusersUrl} className={internalLinkClass}>
                    aroma diffuser for wellness centres
                  </Link>
                  , businesses should consider:
                </p>
                <ul className="list-disc space-y-2 pl-6">
                  <li>Size of the space</li>
                  <li>Layout and number of rooms</li>
                  <li>Air circulation</li>
                  <li>Visitor traffic</li>
                  <li>Desired fragrance intensity</li>
                  <li>Operating hours</li>
                  <li>Areas requiring fragrance coverage</li>
                </ul>
                <p>
                  A professional approach helps ensure that the fragrance remains balanced throughout the space.
                </p>
              </div>
            </section>

            <section id="aeroblack-med" className="scroll-mt-28 border-t border-slate-200 pt-10">
              <div className="mb-4 flex items-center gap-3 text-cyan-700">
                <CheckCircleIcon className="h-6 w-6" />
                <span className="text-[10px] font-black uppercase tracking-[0.25em]">
                  Product spotlight
                </span>
              </div>
              <h2 className="font-serif text-4xl leading-tight text-slate-950">
                AeroBlack Med for Wellness Environments
              </h2>
              <div className="mt-6 space-y-5 text-lg leading-8 text-slate-600">
                <p>
                  The{" "}
                  <Link
                    to="/commercial-aroma-diffusers/aeroblack-med-diffuser/"
                    className={internalLinkClass}
                  >
                    AeroBlack Med
                  </Link>{" "}
                  can be considered for commercial environments where controlled and professional fragrance distribution is required.
                </p>
                <p>
                  For suitable wellness spaces, it can form part of a scenting setup designed around the centre's layout and customer experience.
                </p>
                <p>The key is not simply choosing a diffuser and placing it in the room.</p>
                <p>
                  The fragrance, intensity, placement, and size of the area should all work together.
                </p>
                <p>
                  In a wellness environment, subtlety is especially important. Visitors should feel comfortable spending time in the space without the fragrance becoming distracting.
                </p>
              </div>
            </section>

            <section id="mistbox-x" className="scroll-mt-28 border-t border-slate-200 pt-10">
              <div className="mb-4 flex items-center gap-3 text-cyan-700">
                <CheckCircleIcon className="h-6 w-6" />
                <span className="text-[10px] font-black uppercase tracking-[0.25em]">
                  Product spotlight
                </span>
              </div>
              <h2 className="font-serif text-4xl leading-tight text-slate-950">
                MistBox X for Spa and Wellness Spaces
              </h2>
              <div className="mt-6 space-y-5 text-lg leading-8 text-slate-600">
                <p>
                  The{" "}
                  <Link
                    to="/commercial-aroma-diffusers/mistbox-x-diffuser/"
                    className={internalLinkClass}
                  >
                    MistBox X
                  </Link>{" "}
                  is another option for commercial scenting applications.
                </p>
                <p>
                  Wellness centres can consider it for suitable areas where maintaining a pleasant and consistent atmosphere is part of the customer experience.
                </p>
                <p>
                  Depending on the space, it can be incorporated into areas such as reception zones, common areas, treatment environments, or other appropriate commercial spaces.
                </p>
                <p>
                  As with any scenting solution, the ideal setup depends on the specific requirements of the wellness centre.
                </p>
              </div>
            </section>

            <section id="wellness-fragrance" className="scroll-mt-28 border-t border-slate-200 pt-10">
              <div className="mb-4 flex items-center gap-3 text-cyan-700">
                <SparklesIcon className="h-6 w-6" />
                <span className="text-[10px] font-black uppercase tracking-[0.25em]">
                  Find a comfortable scent
                </span>
              </div>
              <h2 className="font-serif text-4xl leading-tight text-slate-950">
                Selecting the Right Wellness Centre Fragrance
              </h2>
              <div className="mt-6 space-y-5 text-lg leading-8 text-slate-600">
                <p>The fragrance itself is just as important as the diffuser.</p>
                <p>
                  Wellness environments often benefit from fragrance profiles that feel fresh, natural, and calming.
                </p>
                <p>
                  Depending on the brand and atmosphere, businesses may explore botanical, floral, fresh, citrus, or subtle woody profiles.
                </p>
                <p>However, there is no single fragrance that is perfect for every wellness centre.</p>
                <p>
                  A luxury spa may prefer a sophisticated fragrance, while a yoga or holistic wellness centre may choose something lighter and more natural.
                </p>
                <p>The most important consideration is comfort.</p>
                <p>A fragrance should complement the environment rather than overpower it.</p>
              </div>
            </section>

            <section id="professional-scenting" className="scroll-mt-28 border-t border-slate-200 pt-10">
              <div className="mb-4 flex items-center gap-3 text-cyan-700">
                <SparklesIcon className="h-6 w-6" />
                <span className="text-[10px] font-black uppercase tracking-[0.25em]">
                  Scent with intention
                </span>
              </div>
              <h2 className="font-serif text-4xl leading-tight text-slate-950">
                Professional Scenting vs. Traditional Air Fresheners
              </h2>
              <div className="mt-6 space-y-5 text-lg leading-8 text-slate-600">
                <p>Traditional air fresheners are often designed to provide a quick burst of fragrance.</p>
                <p>
                  That approach may not be ideal for a wellness environment where consistency and subtlety are important.
                </p>
                <p>
                  Professional Spa Scenting allows businesses to take a more structured approach.
                </p>
                <p>
                  Instead of simply masking unwanted odours, the focus can be on creating a consistent ambience that complements the centre's overall environment.
                </p>
                <p>
                  Businesses can consider the size of the space, fragrance intensity, airflow, placement, and operating schedule when planning their scenting setup.
                </p>
                <p>This creates a more intentional approach to fragrance.</p>
              </div>
            </section>

            <section id="cleanliness" className="scroll-mt-28 border-t border-slate-200 pt-10">
              <div className="mb-4 flex items-center gap-3 text-cyan-700">
                <CheckCircleIcon className="h-6 w-6" />
                <span className="text-[10px] font-black uppercase tracking-[0.25em]">
                  Keep the environment clean
                </span>
              </div>
              <h2 className="font-serif text-4xl leading-tight text-slate-950">
                Fragrance Should Complement Cleanliness
              </h2>
              <div className="mt-6 space-y-5 text-lg leading-8 text-slate-600">
                <p>It is important to remember that fragrance is not a replacement for cleanliness.</p>
                <p>
                  Wellness centres should maintain proper cleaning, ventilation, hygiene, and facility management.
                </p>
                <p>A professional diffuser should complement these practices.</p>
                <p>
                  When the environment is already clean and well maintained, a carefully selected fragrance can add another layer to the overall customer experience.
                </p>
              </div>
            </section>

            <section id="wellness-faq" className="scroll-mt-28 border-t border-slate-200 pt-10">
              <div className="mb-4 flex items-center gap-3 text-cyan-700">
                <CheckCircleIcon className="h-6 w-6" />
                <span className="text-[10px] font-black uppercase tracking-[0.25em]">
                  Helpful answers
                </span>
              </div>
              <h2 className="font-serif text-4xl leading-tight text-slate-950">
                Frequently Asked Questions
              </h2>
              <div className="mt-6 space-y-5 text-lg leading-8 text-slate-600">
                <h3 className="font-semibold text-slate-900">
                  1. What is the best aroma diffuser for wellness centres?
                </h3>
                <p>
                  The right diffuser depends on the centre's size, layout, airflow, and fragrance coverage requirements. The AeroBlack Med and MistBox X can be considered for suitable commercial wellness and spa environments.
                </p>
                <h3 className="font-semibold text-slate-900">
                  2. What type of fragrance is suitable for a wellness centre?
                </h3>
                <p>
                  Fresh, botanical, floral, citrus, and subtle woody fragrance profiles can work well depending on the centre's identity and atmosphere. The fragrance should remain comfortable and not overpower the space.
                </p>
                <h3 className="font-semibold text-slate-900">
                  3. Can spa scenting improve relaxation ambience?
                </h3>
                <p>
                  Professional Spa Scenting can complement lighting, music, interiors, cleanliness, and other elements of a wellness environment. Fragrance should be viewed as one part of creating a comfortable Relaxation Ambience, rather than a standalone solution.
                </p>
              </div>
            </section>

            <section id="coolmaxscent" className="scroll-mt-28 border-t border-slate-200 pt-10">
              <div className="mb-4 flex items-center gap-3 text-cyan-700">
                <SparklesIcon className="h-6 w-6" />
                <span className="text-[10px] font-black uppercase tracking-[0.25em]">
                  Coolmaxscent
                </span>
              </div>
              <h2 className="font-serif text-4xl leading-tight text-slate-950">
                Creating a Calmer Wellness Experience with Coolmaxscent
              </h2>
              <div className="mt-6 space-y-5 text-lg leading-8 text-slate-600">
                <p>A wellness centre should feel different from an ordinary commercial environment.</p>
                <p>It should give visitors a chance to slow down, relax, and enjoy the moment.</p>
                <p>Every detail contributes to that experience, from the lighting and interiors to the music and fragrance.</p>
                <p>
                  With professional solutions such as the AeroBlack Med and MistBox X,{" "}
                  <Link to="/" className={internalLinkClass}>
                    Coolmaxscent
                  </Link>{" "}
                  helps businesses approach commercial scenting as part of a thoughtfully designed customer environment.
                </p>
                <p>
                  The right fragrance, the right intensity, and the right diffuser can help create a space that feels fresh, comfortable, and inviting.
                </p>
                <p>
                  Because in a wellness space, creating the right atmosphere is part of the experience itself.
                </p>
              </div>
            </section>
          </article>

          <aside className="h-fit lg:sticky lg:top-28 lg:col-span-2">
            <div className="bg-slate-950 p-6 text-white">
              <p className="mb-5 text-[10px] font-black uppercase tracking-[0.2em] text-cyan-300">
                Wellness scenting
              </p>
              <ul className="space-y-4 text-sm leading-6 text-slate-300">
                {[
                  "Keep fragrance subtle and comfortable",
                  "Consider each room's size and airflow",
                  "Choose a scent that suits your wellness brand",
                  "Complement existing cleanliness practices",
                ].map((item) => (
                  <li key={item} className="flex gap-2">
                    <CheckCircleIcon className="h-5 w-5 shrink-0 text-cyan-400" />
                    {item}
                  </li>
                ))}
              </ul>
              <Link
                to="/contact/"
                className="mt-8 inline-flex items-center gap-2 text-xs font-black uppercase tracking-[0.15em] text-white transition hover:text-cyan-300"
              >
                Talk to an expert <ArrowRightIcon className="h-4 w-4" />
              </Link>
            </div>
          </aside>
        </section>

        <section className="mx-auto max-w-[1440px] px-6 pb-28 lg:px-16">
          <div className="bg-cyan-700 px-8 py-14 text-white md:px-16">
            <p className="text-[10px] font-black uppercase tracking-[0.28em] text-cyan-100">
              Professional scenting for wellness centres
            </p>
            <h2 className="mt-4 max-w-3xl font-serif text-4xl leading-tight md:text-6xl">
              CREATE A CALMER WELLNESS EXPERIENCE
            </h2>
            <p className="mt-4 max-w-2xl text-lg leading-8 text-cyan-50">
              Explore professional aroma diffuser options for a fresh, comfortable, and inviting wellness space.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-5">
              <span className="text-sm font-semibold">
                Find a scenting solution for your space
              </span>
              <Link
                to="/contact/"
                className="inline-flex items-center gap-3 bg-slate-950 px-6 py-4 text-xs font-black uppercase tracking-[0.18em] transition hover:bg-white hover:text-slate-950"
              >
                Contact Cool Max Scent <ArrowRightIcon className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
