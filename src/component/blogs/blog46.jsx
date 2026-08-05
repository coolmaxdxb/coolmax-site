import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ArrowRightIcon,
  AcademicCapIcon,
  BuildingLibraryIcon,
  ChatBubbleLeftRightIcon,
  CheckCircleIcon,
  HeartIcon,
  ShieldCheckIcon,
  SparklesIcon,
  UserGroupIcon,
  HomeModernIcon,
  BeakerIcon,
  ComputerDesktopIcon,
  CakeIcon,
  PresentationChartBarIcon,
  TrophyIcon,
} from "@heroicons/react/24/outline";

import BlogHeroImg from "../../asset/blogimg/blog46.webp";

// --- Animation Variants ---
const fadeInUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-50px" },
  transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] },
};

const fadeInLeft = {
  initial: { opacity: 0, x: -50 },
  whileInView: { opacity: 1, x: 0 },
  viewport: { once: true, margin: "-50px" },
  transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] },
};

const fadeInRight = {
  initial: { opacity: 0, x: 50 },
  whileInView: { opacity: 1, x: 0 },
  viewport: { once: true, margin: "-50px" },
  transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] },
};

const scaleIn = {
  initial: { opacity: 0, scale: 0.9 },
  whileInView: { opacity: 1, scale: 1 },
  viewport: { once: true, margin: "-50px" },
  transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] },
};

const staggerContainer = {
  initial: { opacity: 0 },
  whileInView: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
  viewport: { once: true, margin: "-50px" },
};

const cardHover = "transition-all duration-500 hover:shadow-[0_30px_80px_-20px_rgba(59,130,246,0.25)] hover:-translate-y-1";

const textLinkClass =
  "font-semibold text-blue-600 underline decoration-blue-200 underline-offset-4 transition hover:text-blue-800 hover:decoration-blue-500";
const darkTextLinkClass =
  "font-semibold text-blue-300 underline decoration-blue-500/50 underline-offset-4 transition hover:text-blue-200";

export default function SchoolsAromaSolutionsBlog() {
  const whatsappNumber = "971509282702";

  useEffect(() => {
    window.scrollTo(0, 0);

    document.title = "Aroma Diffuser for Schools in Dubai | Better Learning Environments | CoolMax Scent";

    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute(
        "content",
        "Discover why schools need professional aroma solutions. An Aroma Diffuser for Schools in Dubai helps create better learning environments across the UAE."
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
      "aroma diffuser for schools in Dubai, school aroma diffuser UAE, aroma diffusers for schools and educational spaces, educational scent solutions Dubai, institution fragrance systems, classroom aroma diffuser"
    );

    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.setAttribute("rel", "canonical");
      document.head.appendChild(canonical);
    }

    canonical.setAttribute(
      "href",
      "https://www.coolmaxscent.com/blog/aroma-diffuser-for-schools-in-dubai/"
    );
  }, []);

  const sectionLinks = [
    { label: "Positive Learning Environment", href: "#importance-of-positive-learning-environment" },
    { label: "Traditional Air Fresheners", href: "#why-traditional-air-fresheners-are-not-enough" },
    { label: "Comfortable Classrooms", href: "#creating-comfortable-classrooms" },
    { label: "First Impressions", href: "#building-positive-first-impressions" },
    { label: "Every Campus Area", href: "#supporting-every-area-of-the-campus" },
    { label: "AeroBlack Med", href: "#professional-solution-for-schools-and-medium-sized-educational-spaces" },
    { label: "AirPulse 150", href: "#professional-solution-for-large-educational-campuses" },
    { label: "Student Well-Being", href: "#supporting-student-well-being-through-better-environments" },
    { label: "CoolMaxScent", href: "#create-better-learning-environments-with-coolmaxscent" },
  ];

  return (
    <div className="relative min-h-screen overflow-x-hidden bg-[radial-gradient(circle_at_top_left,_rgba(59,130,246,0.12),_transparent_32%),linear-gradient(135deg,_#f8fbff_0%,_#ffffff_42%,_#f4f9ff_100%)] pt-16 font-sans text-slate-900 selection:bg-blue-100">
      {/* Background Decorations */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute right-0 top-0 h-[900px] w-[900px] rounded-full bg-blue-100/80 blur-[140px]" />
        <div className="absolute bottom-0 left-0 h-[800px] w-[800px] rounded-full bg-sky-50/70 blur-[120px]" />
        <div className="absolute top-1/3 left-1/4 h-[400px] w-[400px] rounded-full bg-purple-50/40 blur-[100px]" />
      </div>

      <div className="relative z-10">
        {/* ========== HERO SECTION ========== */}
        <section className="mx-auto max-w-[1400px] px-6 pb-12 pt-20 lg:px-16">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="overflow-hidden rounded-[2.5rem] border border-blue-100/60 bg-white/80 p-8 shadow-[0_35px_100px_-35px_rgba(59,130,246,0.35)] backdrop-blur-sm md:p-12"
          >
            <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50/80 px-4 py-2 text-[11px] font-black uppercase tracking-[0.25em] text-blue-700"
                >
                  <SparklesIcon className="h-4 w-4" />
                  Educational Scenting & Learning Environments
                </motion.div>

                <h1 className="mt-6 text-3xl font-serif tracking-tight text-slate-900 sm:text-5xl lg:leading-[1.15]">
                  Why Schools Need Professional Aroma Solutions: Creating Better{" "}
                  <span className="italic text-blue-600">Learning Environments</span> in Dubai
                </h1>

                <div className="mt-8 space-y-4 text-lg leading-8 text-slate-600 font-light">
                  <h2 className="text-xl font-semibold text-slate-800 font-sans">The Atmosphere Behind Every Great Education</h2>
                  <p>
                    Educational institutions are constantly evolving to provide students with the best possible learning experience. Modern schools invest in advanced technology, smart classrooms, comfortable furniture, better ventilation, and innovative teaching methods. While these improvements play an essential role in education, one factor that is often overlooked is the quality of the indoor environment.
                  </p>
                  <p>
                    Students, teachers, parents, and visitors spend several hours each day inside school buildings. Creating spaces that feel fresh, clean, and welcoming contributes to a more pleasant campus experience for everyone. This is why many institutions are now investing in an{" "}
                    <a
                      href="https://www.coolmaxscent.com/commercial-aroma-diffusers/"
                      target="_blank"
                      rel="noreferrer"
                      className={textLinkClass}
                    >
                      Aroma Diffuser for Schools in Dubai
                    </a>{" "}
                    as part of their facility management strategy.
                  </p>
                  <p>
                    Unlike ordinary air fresheners, professional fragrance systems are designed to provide consistent and controlled scent distribution across educational spaces. As demand for modern learning environments continues to grow,{" "}
                    <a
                      href="https://www.coolmaxscent.com/commercial-aroma-diffusers/"
                      target="_blank"
                      rel="noreferrer"
                      className={textLinkClass}
                    >
                      Aroma Diffusers for Schools & Educational Spaces
                    </a>{" "}
                    are becoming an important addition to schools, colleges, universities, and training institutions across the UAE.
                  </p>
                </div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                  className="mt-8 flex flex-wrap gap-4"
                >
                  <a
                    href="#importance-of-positive-learning-environment"
                    className="inline-flex items-center gap-2 rounded-full bg-slate-900 px-6 py-3.5 text-xs font-black uppercase tracking-[0.2em] text-white shadow-lg shadow-slate-900/10 transition-all duration-300 hover:bg-blue-600 hover:shadow-blue-600/20 hover:-translate-y-0.5"
                  >
                    Explore Article
                    <ArrowRightIcon className="h-4 w-4" />
                  </a>
                  <a
                    href={`https://wa.me/${whatsappNumber.replace("+", "")}`}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-6 py-3.5 text-xs font-black uppercase tracking-[0.2em] text-slate-700 transition-all duration-300 hover:border-blue-500 hover:text-blue-600 hover:shadow-lg hover:-translate-y-0.5"
                  >
                    <ChatBubbleLeftRightIcon className="h-4 w-4" />
                    Talk to Expert
                  </a>
                </motion.div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30, scale: 0.95 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="relative"
              >
                <div className="absolute -inset-4 bg-gradient-to-br from-blue-400/20 via-transparent to-blue-600/20 rounded-[2.5rem] blur-xl opacity-60" />
                <div className="relative overflow-hidden rounded-3xl border border-slate-200/80 bg-slate-100 shadow-2xl">
                  <img
                    src={BlogHeroImg}
                    alt="Modern school campus in Dubai with professional aroma diffuser for better learning environments"
                    className="h-full w-full object-cover object-center transition-transform duration-1000 hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/30 via-transparent to-transparent" />
                </div>
              </motion.div>
            </div>
          </motion.div>
        </section>

        {/* ========== QUICK NAVIGATION / TOC ========== */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mx-auto max-w-[1400px] px-6 pb-12 lg:px-16"
        >
          <div className="rounded-3xl border border-slate-200/80 bg-white/90 p-6 shadow-sm backdrop-blur-sm">
            <p className="mb-4 text-xs font-black uppercase tracking-[0.25em] text-blue-600">Quick Navigation</p>
            <div className="flex flex-wrap gap-2">
              {sectionLinks.map((item, i) => (
                <motion.a
                  key={item.href}
                  href={item.href}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: i * 0.05 }}
                  className="rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-xs font-medium text-slate-700 transition-all duration-300 hover:border-blue-300 hover:bg-blue-50 hover:text-blue-700 hover:shadow-sm"
                >
                  {item.label}
                </motion.a>
              ))}
            </div>
          </div>
        </motion.section>

        {/* ========== SECTION 2: The Importance of a Positive Learning Environment ========== */}
        <section id="importance-of-positive-learning-environment" className="mx-auto max-w-[1400px] px-6 pb-12 lg:px-16">
          <motion.div
            variants={fadeInUp}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true, margin: "-50px" }}
            className={`rounded-[2.5rem] border border-slate-200/80 bg-white p-8 shadow-sm md:p-12 ${cardHover}`}
          >
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: "60px" }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="h-1 bg-blue-500 rounded-full mb-6"
            />
            <p className="text-xs font-black uppercase tracking-[0.25em] text-blue-600">The Foundation of Student Success</p>
            <h2 className="mt-2 text-3xl font-serif tracking-tight text-slate-900 sm:text-4xl">
              The Importance of a Positive Learning Environment
            </h2>
            <div className="mt-6 space-y-4 text-lg leading-8 text-slate-600 font-light">
              <p>
                The atmosphere inside a school influences the daily experience of everyone who enters the campus.
              </p>
              <p>
                Students spend six to eight hours every day attending classes, participating in activities, studying in libraries, and interacting with teachers. Staff members work throughout the day in administrative offices, meeting rooms, and faculty spaces, while parents and visitors regularly enter reception areas and common facilities.
              </p>
              <p>
                Creating a welcoming atmosphere helps educational institutions reflect professionalism and care.
              </p>
              <p>
                Schools today focus on several factors to improve campus environments, including:
              </p>
            </div>

            <motion.div
              variants={staggerContainer}
              initial="initial"
              whileInView="whileInView"
              viewport={{ once: true, margin: "-50px" }}
              className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
            >
              {[
                { icon: <HomeModernIcon className="h-5 w-5" />, label: "Clean Classrooms" },
                { icon: <SparklesIcon className="h-5 w-5" />, label: "Good Ventilation" },
                { icon: <UserGroupIcon className="h-5 w-5" />, label: "Comfortable Seating" },
                { icon: <AcademicCapIcon className="h-5 w-5" />, label: "Natural Lighting" },
                { icon: <BuildingLibraryIcon className="h-5 w-5" />, label: "Organized Learning Spaces" },
                { icon: <CheckCircleIcon className="h-5 w-5" />, label: "Indoor Cleanliness" },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  variants={{
                    initial: { opacity: 0, y: 20 },
                    whileInView: { opacity: 1, y: 0 }
                  }}
                  className="flex items-center gap-3 rounded-2xl border border-slate-100 bg-slate-50/80 p-4 transition-all duration-500 hover:border-blue-200 hover:bg-blue-50/30 hover:shadow-md"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.2 + i * 0.1 }}
                    className="inline-flex rounded-xl bg-blue-50 p-2.5 text-blue-600"
                  >
                    {item.icon}
                  </motion.div>
                  <span className="font-medium text-slate-700">{item.label}</span>
                </motion.div>
              ))}
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-8 text-lg leading-8 text-slate-600 font-light border-t border-slate-100 pt-6"
            >
              Adding a professional{" "}
              <a
                href="https://www.coolmaxscent.com/commercial-aroma-diffusers/"
                target="_blank"
                rel="noreferrer"
                className={textLinkClass}
              >
                school aroma diffuser UAE
              </a>{" "}
              solution complements these efforts by maintaining a consistently fresh atmosphere throughout the campus.
            </motion.p>
          </motion.div>
        </section>

        {/* ========== SECTION 3: Why Traditional Air Fresheners Are Not Enough ========== */}
        <section id="why-traditional-air-fresheners-are-not-enough" className="mx-auto max-w-[1400px] px-6 pb-12 lg:px-16">
          <motion.div
            variants={scaleIn}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true, margin: "-50px" }}
            className={`rounded-[2.5rem] border border-blue-100 bg-gradient-to-br from-white via-sky-50/30 to-blue-50/50 p-8 shadow-sm md:p-12 ${cardHover}`}
          >
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: "60px" }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="h-1 bg-blue-500 rounded-full mb-6"
            />
            <p className="text-xs font-black uppercase tracking-[0.25em] text-blue-600">The Limitations of Conventional Solutions</p>
            <h2 className="mt-2 text-3xl font-serif tracking-tight text-slate-900 sm:text-4xl">
              Why Traditional Air Fresheners Are Not Enough
            </h2>
            <div className="mt-6 space-y-4 text-lg leading-8 text-slate-600 font-light">
              <p>
                Many schools still rely on conventional air fresheners or aerosol sprays to freshen indoor spaces.
              </p>
              <p>
                While these products may provide temporary results, they are not designed for educational facilities with continuous occupancy and large indoor areas.
              </p>
              <p>
                Traditional air fresheners often:
              </p>
            </div>

            <motion.div
              variants={staggerContainer}
              initial="initial"
              whileInView="whileInView"
              viewport={{ once: true, margin: "-50px" }}
              className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
            >
              {[
                { icon: <CheckCircleIcon className="h-5 w-5" />, label: "Provide uneven fragrance coverage" },
                { icon: <CheckCircleIcon className="h-5 w-5" />, label: "Require frequent replacement" },
                { icon: <CheckCircleIcon className="h-5 w-5" />, label: "Produce inconsistent scent intensity" },
                { icon: <CheckCircleIcon className="h-5 w-5" />, label: "Cover only small areas" },
                { icon: <CheckCircleIcon className="h-5 w-5" />, label: "Are unsuitable for large educational campuses" },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  variants={{
                    initial: { opacity: 0, y: 20 },
                    whileInView: { opacity: 1, y: 0 }
                  }}
                  className="flex items-center gap-3 rounded-2xl border border-slate-100 bg-white p-4 transition-all duration-500 hover:border-blue-200 hover:bg-blue-50/30 hover:shadow-md"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.2 + i * 0.1 }}
                    className="inline-flex rounded-xl bg-blue-50 p-2.5 text-blue-500"
                  >
                    {item.icon}
                  </motion.div>
                  <span className="font-medium text-slate-700">{item.label}</span>
                </motion.div>
              ))}
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-8 text-lg leading-8 text-slate-600 font-light border-t border-slate-100 pt-6"
            >
              Professional fragrance systems, on the other hand, are designed specifically for commercial environments where consistency and reliability are essential. This makes them a smarter long-term solution for schools and institutions.
            </motion.p>
          </motion.div>
        </section>

        {/* ========== SECTION 4: Creating Comfortable Classrooms ========== */}
        <section id="creating-comfortable-classrooms" className="mx-auto max-w-[1400px] px-6 pb-12 lg:px-16">
          <motion.div
            variants={fadeInUp}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true, margin: "-50px" }}
            className={`rounded-[2.5rem] border border-slate-200/80 bg-white p-8 shadow-sm md:p-12 ${cardHover}`}
          >
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: "60px" }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="h-1 bg-blue-500 rounded-full mb-6"
            />
            <p className="text-xs font-black uppercase tracking-[0.25em] text-blue-600">Where Learning Happens Every Day</p>
            <h2 className="mt-2 text-3xl font-serif tracking-tight text-slate-900 sm:text-4xl">
              Creating Comfortable Classrooms
            </h2>
            <div className="mt-6 space-y-4 text-lg leading-8 text-slate-600 font-light">
              <p>
                Classrooms are among the busiest spaces inside any educational institution.
              </p>
              <p>
                Throughout the day, students move between lessons while classrooms remain occupied for extended periods.
              </p>
              <p>
                Maintaining a pleasant indoor atmosphere contributes to a more comfortable learning experience for both students and teachers.
              </p>
              <p>
                A professionally installed{" "}
                <a
                  href="https://www.coolmaxscent.com/commercial-aroma-diffusers/aeroblack-med-diffuser/"
                  target="_blank"
                  rel="noreferrer"
                  className={textLinkClass}
                >
                  classroom aroma diffuser
                </a>{" "}
                delivers subtle fragrance distribution without overwhelming the space.
              </p>
              <p>
                The objective is not to create a strong scent but to maintain a fresh and balanced environment that feels clean and inviting throughout the school day.
              </p>
            </div>
          </motion.div>
        </section>

        {/* ========== SECTION 5: Building Positive First Impressions ========== */}
        <section id="building-positive-first-impressions" className="mx-auto max-w-[1400px] px-6 pb-12 lg:px-16">
          <motion.div
            variants={fadeInRight}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true, margin: "-50px" }}
            className={`rounded-[2.5rem] border border-slate-200/80 bg-white p-8 shadow-sm md:p-12 ${cardHover}`}
          >
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: "60px" }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="h-1 bg-blue-500 rounded-full mb-6"
            />
            <p className="text-xs font-black uppercase tracking-[0.25em] text-blue-600">The Power of First Impressions</p>
            <h2 className="mt-2 text-3xl font-serif tracking-tight text-slate-900 sm:text-4xl">
              Building Positive First Impressions
            </h2>
            <div className="mt-6 space-y-4 text-lg leading-8 text-slate-600 font-light">
              <p>
                A school's reputation begins before students even enter the classroom.
              </p>
              <p>
                Parents visiting the campus immediately notice:
              </p>
            </div>

            <motion.div
              variants={staggerContainer}
              initial="initial"
              whileInView="whileInView"
              viewport={{ once: true, margin: "-50px" }}
              className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
            >
              {[
                { icon: <BuildingLibraryIcon className="h-5 w-5" />, label: "Reception areas" },
                { icon: <HomeModernIcon className="h-5 w-5" />, label: "Hallways" },
                { icon: <UserGroupIcon className="h-5 w-5" />, label: "Administrative offices" },
                { icon: <HeartIcon className="h-5 w-5" />, label: "Waiting lounges" },
                { icon: <AcademicCapIcon className="h-5 w-5" />, label: "Libraries" },
                { icon: <CheckCircleIcon className="h-5 w-5" />, label: "Indoor facilities" },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  variants={{
                    initial: { opacity: 0, y: 20 },
                    whileInView: { opacity: 1, y: 0 }
                  }}
                  className="flex items-center gap-3 rounded-2xl border border-slate-100 bg-slate-50/80 p-4 transition-all duration-500 hover:border-blue-200 hover:bg-blue-50/30 hover:shadow-md"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.2 + i * 0.1 }}
                    className="inline-flex rounded-xl bg-blue-50 p-2.5 text-blue-600"
                  >
                    {item.icon}
                  </motion.div>
                  <span className="font-medium text-slate-700">{item.label}</span>
                </motion.div>
              ))}
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-8 text-lg leading-8 text-slate-600 font-light border-t border-slate-100 pt-6"
            >
              A fresh and professionally maintained environment reflects the school's commitment to quality, cleanliness, and student well-being.
            </motion.p>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="mt-4 text-lg leading-8 text-slate-600 font-light"
            >
              This is why many institutions are adopting{" "}
              <a
                href="https://www.coolmaxscent.com/scent-marketing-solutions/"
                target="_blank"
                rel="noreferrer"
                className={textLinkClass}
              >
                educational scent solutions Dubai
              </a>{" "}
              as part of creating a positive and memorable campus experience.
            </motion.p>
          </motion.div>
        </section>

        {/* ========== SECTION 6: Supporting Every Area of the Campus ========== */}
        <section id="supporting-every-area-of-the-campus" className="mx-auto max-w-[1400px] px-6 pb-12 lg:px-16">
          <motion.div
            variants={fadeInUp}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true, margin: "-50px" }}
            className={`rounded-[2.5rem] border border-slate-200/80 bg-white p-8 shadow-sm md:p-12 ${cardHover}`}
          >
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: "60px" }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="h-1 bg-blue-500 rounded-full mb-6"
            />
            <p className="text-xs font-black uppercase tracking-[0.25em] text-blue-600">Beyond the Classroom</p>
            <h2 className="mt-2 text-3xl font-serif tracking-tight text-slate-900 sm:text-4xl">
              Supporting Every Area of the Campus
            </h2>
            <p className="mt-4 text-lg leading-8 text-slate-600 font-light">
              Educational facilities include much more than classrooms. Students and staff use a wide variety of indoor spaces every day, including:
            </p>

            <motion.div
              variants={staggerContainer}
              initial="initial"
              whileInView="whileInView"
              viewport={{ once: true, margin: "-50px" }}
              className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
            >
              {[
                { icon: <BuildingLibraryIcon className="h-5 w-5" />, label: "Libraries" },
                { icon: <BeakerIcon className="h-5 w-5" />, label: "Laboratories" },
                { icon: <ComputerDesktopIcon className="h-5 w-5" />, label: "Computer rooms" },
                { icon: <UserGroupIcon className="h-5 w-5" />, label: "Faculty offices" },
                { icon: <HomeModernIcon className="h-5 w-5" />, label: "Staff rooms" },
                { icon: <CakeIcon className="h-5 w-5" />, label: "Cafeterias" },
                { icon: <PresentationChartBarIcon className="h-5 w-5" />, label: "Auditoriums" },
                { icon: <TrophyIcon className="h-5 w-5" />, label: "Indoor sports halls" },
                { icon: <UserGroupIcon className="h-5 w-5" />, label: "Meeting rooms" },
                { icon: <HeartIcon className="h-5 w-5" />, label: "Student counselling centres" },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  variants={{
                    initial: { opacity: 0, y: 20 },
                    whileInView: { opacity: 1, y: 0 }
                  }}
                  className="flex items-center gap-3 rounded-2xl border border-slate-100 bg-slate-50/80 p-4 transition-all duration-500 hover:border-blue-200 hover:bg-blue-50/30 hover:shadow-md"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.2 + i * 0.1 }}
                    className="inline-flex rounded-xl bg-blue-50 p-2.5 text-blue-600"
                  >
                    {item.icon}
                  </motion.div>
                  <span className="font-medium text-slate-700">{item.label}</span>
                </motion.div>
              ))}
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-8 text-lg leading-8 text-slate-600 font-light border-t border-slate-100 pt-6"
            >
              Providing a consistent atmosphere across these spaces helps create a unified campus experience. Professional{" "}
              <a
                href="https://www.coolmaxscent.com/commercial-aroma-diffusers/"
                target="_blank"
                rel="noreferrer"
                className={textLinkClass}
              >
                institution fragrance systems
              </a>{" "}
              ensure that every area maintains the same welcoming environment while supporting the school's overall image.
            </motion.p>
          </motion.div>
        </section>

        {/* ========== SECTION 7: Professional Solution for Schools and Medium-Sized Educational Spaces ========== */}
        <section id="professional-solution-for-schools-and-medium-sized-educational-spaces" className="mx-auto max-w-[1400px] px-6 pb-12 lg:px-16">
          <motion.div
            variants={fadeInUp}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true, margin: "-50px" }}
            className="rounded-[2.5rem] border border-slate-900 bg-slate-900 p-8 text-white shadow-2xl md:p-12"
          >
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: "60px" }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="h-1 bg-blue-400 rounded-full mb-6"
            />
            <p className="text-xs font-black uppercase tracking-[0.25em] text-blue-400">Recommended Solution for Medium-Sized Schools</p>
            <h2 className="mt-2 text-3xl font-serif tracking-tight text-white sm:text-4xl">
              Professional Solution for Schools and Medium-Sized Educational Spaces
            </h2>
            <div className="mt-6 space-y-4 text-lg leading-8 text-slate-300 font-light">
              <p>
                Schools require fragrance systems that operate quietly, efficiently, and consistently throughout the day.
              </p>
              <h3 className="text-2xl font-bold text-white mt-6">Recommended Solution – AeroBlack Med Diffuser</h3>
              <p>
                The{" "}
                <a
                  href="https://www.coolmaxscent.com/commercial-aroma-diffusers/aeroblack-med-diffuser/"
                  target="_blank"
                  rel="noreferrer"
                  className={darkTextLinkClass}
                >
                  AeroBlack Med Diffuser
                </a>{" "}
                is an excellent choice for medium-sized educational environments that require reliable fragrance coverage without disrupting classroom activities.
              </p>
              <p>It is ideal for:</p>
            </div>

            <motion.div
              variants={staggerContainer}
              initial="initial"
              whileInView="whileInView"
              viewport={{ once: true, margin: "-50px" }}
              className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
            >
              {[
                "School reception areas",
                "Administrative offices",
                "Libraries",
                "Staff rooms",
                "Student counselling rooms",
                "Medium-sized classrooms",
                "Indoor learning spaces",
              ].map((item, i) => (
                <motion.div
                  key={i}
                  variants={{
                    initial: { opacity: 0, y: 20 },
                    whileInView: { opacity: 1, y: 0 }
                  }}
                  className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-xs transition-all duration-500 hover:border-blue-400 hover:bg-white/10 hover:-translate-y-1"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.2 + i * 0.1 }}
                    className="inline-flex rounded-xl bg-blue-500/20 p-2.5 text-blue-300"
                  >
                    <CheckCircleIcon className="h-5 w-5" />
                  </motion.div>
                  <span className="font-medium text-slate-200">{item}</span>
                </motion.div>
              ))}
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-8 text-lg leading-8 text-slate-300 font-light border-t border-white/10 pt-6"
            >
              Its advanced atomization technology provides consistent fragrance distribution while maintaining a subtle atmosphere suitable for educational environments.
            </motion.p>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="mt-4 text-lg leading-8 text-slate-300 font-light"
            >
              For schools seeking dependable{" "}
              <a
                href="https://www.coolmaxscent.com/commercial-aroma-diffusers/"
                target="_blank"
                rel="noreferrer"
                className={darkTextLinkClass}
              >
                school aroma diffuser UAE
              </a>{" "}
              solutions, the AeroBlack Med offers an effective way to enhance indoor comfort while maintaining a professional campus environment.
            </motion.p>
          </motion.div>
        </section>

        {/* ========== SECTION 8: Professional Solution for Large Educational Campuses ========== */}
        <section id="professional-solution-for-large-educational-campuses" className="mx-auto max-w-[1400px] px-6 pb-12 lg:px-16">
          <motion.div
            variants={fadeInUp}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true, margin: "-50px" }}
            className={`rounded-[2.5rem] border border-slate-200/80 bg-white p-8 shadow-sm md:p-12 ${cardHover}`}
          >
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: "60px" }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="h-1 bg-blue-500 rounded-full mb-6"
            />
            <p className="text-xs font-black uppercase tracking-[0.25em] text-blue-600">Recommended Solution for Large Campuses</p>
            <h2 className="mt-2 text-3xl font-serif tracking-tight text-slate-900 sm:text-4xl">
              Professional Solution for Large Educational Campuses
            </h2>
            <div className="mt-6 space-y-4 text-lg leading-8 text-slate-600 font-light">
              <p>
                Large schools, colleges, and universities often consist of multiple interconnected buildings and spacious indoor facilities.
              </p>
              <p>
                Maintaining consistent fragrance across these areas requires a commercial solution capable of covering extensive spaces.
              </p>
              <h3 className="text-2xl font-bold text-slate-900 mt-6">Recommended Solution – AirPulse 150 Diffuser</h3>
              <p>
                The{" "}
                <a
                  href="https://www.coolmaxscent.com/large-area-and-hvac-aroma-diffusers/air-pulse-150-diffuser/"
                  target="_blank"
                  rel="noreferrer"
                  className={textLinkClass}
                >
                  AirPulse 150 Diffuser
                </a>{" "}
                is specifically designed for large-area fragrance distribution and HVAC integration.
              </p>
              <p>It is ideally suited for:</p>
            </div>

            <motion.div
              variants={staggerContainer}
              initial="initial"
              whileInView="whileInView"
              viewport={{ once: true, margin: "-50px" }}
              className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
            >
              {[
                "Universities",
                "Colleges",
                "International schools",
                "Large educational campuses",
                "Auditoriums",
                "Indoor sports complexes",
                "Multi-purpose halls",
                "Conference facilities",
                "Libraries",
                "Large administrative buildings",
              ].map((item, i) => (
                <motion.div
                  key={i}
                  variants={{
                    initial: { opacity: 0, y: 20 },
                    whileInView: { opacity: 1, y: 0 }
                  }}
                  className="flex items-center gap-3 rounded-2xl border border-slate-100 bg-slate-50/80 p-4 transition-all duration-500 hover:border-blue-200 hover:bg-blue-50/30 hover:shadow-md"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.2 + i * 0.1 }}
                    className="inline-flex rounded-xl bg-blue-50 p-2.5 text-blue-600"
                  >
                    <CheckCircleIcon className="h-5 w-5" />
                  </motion.div>
                  <span className="font-medium text-slate-700">{item}</span>
                </motion.div>
              ))}
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-8 text-lg leading-8 text-slate-600 font-light border-t border-slate-100 pt-6"
            >
              As one of the leading{" "}
              <a
                href="https://www.coolmaxscent.com/commercial-aroma-diffusers/"
                target="_blank"
                rel="noreferrer"
                className={textLinkClass}
              >
                institution fragrance systems
              </a>
              , the AirPulse 150 ensures uniform fragrance distribution across connected indoor environments while helping schools maintain a premium atmosphere throughout the campus.
            </motion.p>
          </motion.div>
        </section>

        {/* ========== SECTION 9: Why More Educational Institutions Are Choosing Professional Fragrance Systems ========== */}
        <section id="why-more-educational-institutions-are-choosing-professional-fragrance-systems" className="mx-auto max-w-[1400px] px-6 pb-12 lg:px-16">
          <motion.div
            variants={fadeInUp}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true, margin: "-50px" }}
            className={`rounded-[2.5rem] border border-slate-200/80 bg-white p-8 shadow-sm md:p-12 ${cardHover}`}
          >
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: "60px" }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="h-1 bg-blue-500 rounded-full mb-6"
            />
            <p className="text-xs font-black uppercase tracking-[0.25em] text-blue-600">The Growing Adoption of Scent Solutions</p>
            <h2 className="mt-2 text-3xl font-serif tracking-tight text-slate-900 sm:text-4xl">
              Why More Educational Institutions Are Choosing Professional Fragrance Systems
            </h2>
            <div className="mt-6 space-y-4 text-lg leading-8 text-slate-600 font-light">
              <p>
                Educational institutions are increasingly focusing on creating environments that support student well-being and improve the overall campus experience.
              </p>
              <p>
                Professional fragrance systems provide several benefits, including:
              </p>
            </div>

            <motion.div
              variants={staggerContainer}
              initial="initial"
              whileInView="whileInView"
              viewport={{ once: true, margin: "-50px" }}
              className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
            >
              {[
                "Consistent fragrance throughout the day",
                "Coverage for multiple indoor areas",
                "Quiet and efficient operation",
                "Adjustable fragrance intensity",
                "Commercial-grade performance",
                "Seamless integration with HVAC systems",
                "Professional presentation for visitors and parents",
              ].map((item, i) => (
                <motion.div
                  key={i}
                  variants={{
                    initial: { opacity: 0, y: 20 },
                    whileInView: { opacity: 1, y: 0 }
                  }}
                  className="flex items-center gap-3 rounded-2xl border border-slate-100 bg-slate-50/80 p-4 transition-all duration-500 hover:border-blue-200 hover:bg-blue-50/30 hover:shadow-md"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.2 + i * 0.1 }}
                    className="inline-flex rounded-xl bg-blue-50 p-2.5 text-blue-600"
                  >
                    <CheckCircleIcon className="h-5 w-5" />
                  </motion.div>
                  <span className="font-medium text-slate-700">{item}</span>
                </motion.div>
              ))}
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-8 text-lg leading-8 text-slate-600 font-light border-t border-slate-100 pt-6"
            >
              These advantages make professional fragrance systems a valuable investment for modern educational facilities.
            </motion.p>
          </motion.div>
        </section>

        {/* ========== SECTION 10: Supporting Student Well-Being Through Better Environments ========== */}
        <section id="supporting-student-well-being-through-better-environments" className="mx-auto max-w-[1400px] px-6 pb-12 lg:px-16">
          <motion.div
            variants={fadeInUp}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true, margin: "-50px" }}
            className={`rounded-[2.5rem] border border-slate-200/80 bg-white p-8 shadow-sm md:p-12 ${cardHover}`}
          >
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: "60px" }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="h-1 bg-blue-500 rounded-full mb-6"
            />
            <p className="text-xs font-black uppercase tracking-[0.25em] text-blue-600">Student Well-Being & Campus Experience</p>
            <h2 className="mt-2 text-3xl font-serif tracking-tight text-slate-900 sm:text-4xl">
              Supporting Student Well-Being Through Better Environments
            </h2>
            <div className="mt-6 space-y-4 text-lg leading-8 text-slate-600 font-light">
              <p>
                Today's schools understand that learning extends beyond textbooks and technology.
              </p>
              <p>
                Students perform best in environments where they feel comfortable, welcomed, and inspired.
              </p>
              <p>
                While professional fragrance solutions are not intended to replace proper ventilation or cleaning practices, they contribute to an overall atmosphere that feels fresh, organized, and professionally maintained.
              </p>
              <p>
                Teachers also benefit from pleasant workspaces that remain comfortable throughout the day, while parents appreciate campuses that reflect attention to detail and student care.
              </p>
              <p>
                By integrating{" "}
                <a
                  href="https://www.coolmaxscent.com/commercial-aroma-diffusers/"
                  target="_blank"
                  rel="noreferrer"
                  className={textLinkClass}
                >
                  Aroma Diffusers for Schools & Educational Spaces
                </a>
                , institutions create learning environments that align with modern educational standards and expectations.
              </p>
            </div>
          </motion.div>
        </section>

        {/* ========== SECTION 11: The Future of Educational Spaces ========== */}
        <section id="the-future-of-educational-spaces" className="mx-auto max-w-[1400px] px-6 pb-12 lg:px-16">
          <motion.div
            variants={fadeInUp}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true, margin: "-50px" }}
            className={`rounded-[2.5rem] border border-slate-200/80 bg-white p-8 shadow-sm md:p-12 ${cardHover}`}
          >
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: "60px" }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="h-1 bg-blue-500 rounded-full mb-6"
            />
            <p className="text-xs font-black uppercase tracking-[0.25em] text-blue-600">Looking Ahead</p>
            <h2 className="mt-2 text-3xl font-serif tracking-tight text-slate-900 sm:text-4xl">
              The Future of Educational Spaces
            </h2>
            <div className="mt-6 space-y-4 text-lg leading-8 text-slate-600 font-light">
              <p>
                Schools are no longer judged solely by academic performance. Parents also consider campus facilities, student comfort, cleanliness, and the overall learning environment when choosing an educational institution.
              </p>
              <p>
                Creating a positive atmosphere has become an important part of building trust and enhancing the school's reputation.
              </p>
              <p>
                As educational campuses continue to modernize, professional fragrance systems are becoming an integral part of creating welcoming spaces that support students, teachers, and visitors alike.
              </p>
            </div>
          </motion.div>
        </section>

        {/* ========== SECTION 12: Create Better Learning Environments with Coolmaxscent ========== */}
        <section id="create-better-learning-environments-with-coolmaxscent" className="mx-auto max-w-[1400px] px-6 pb-16 lg:px-16">
          <motion.div
            variants={fadeInUp}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true, margin: "-50px" }}
            className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr]"
          >
            <motion.div
              variants={fadeInLeft}
              className={`rounded-[2.5rem] border border-slate-200/80 bg-white p-8 shadow-sm md:p-12 ${cardHover}`}
            >
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: "60px" }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="h-1 bg-blue-500 rounded-full mb-6"
              />
              <p className="text-xs font-black uppercase tracking-[0.25em] text-blue-600">The CoolMaxScent Commitment</p>
              <h2 className="mt-2 text-3xl font-serif tracking-tight text-slate-900 sm:text-4xl">
                Create Better Learning Environments with Coolmaxscent
              </h2>
              <div className="mt-6 space-y-4 text-slate-600 leading-relaxed font-light">
                <p>
                  Every successful educational institution is built on a commitment to excellence, not only in teaching but also in creating spaces where students can thrive. A fresh, welcoming campus enhances the daily experience for students, educators, parents, and visitors while reflecting the institution's dedication to quality.
                </p>
                <p>
                  At{" "}
                  <a
                    href="https://www.coolmaxscent.com/"
                    target="_blank"
                    rel="noreferrer"
                    className={textLinkClass}
                  >
                    Coolmaxscent
                  </a>
                  , we provide advanced{" "}
                  <a
                    href="https://www.coolmaxscent.com/commercial-aroma-diffusers/"
                    target="_blank"
                    rel="noreferrer"
                    className={textLinkClass}
                  >
                    Aroma Diffusers for Schools & Educational Spaces
                  </a>{" "}
                  designed for educational environments of every size. Whether you need the{" "}
                  <a
                    href="https://www.coolmaxscent.com/commercial-aroma-diffusers/aeroblack-med-diffuser/"
                    target="_blank"
                    rel="noreferrer"
                    className={textLinkClass}
                  >
                    AeroBlack Med Diffuser
                  </a>{" "}
                  for classrooms, libraries, and administrative offices or the{" "}
                  <a
                    href="https://www.coolmaxscent.com/large-area-and-hvac-aroma-diffusers/air-pulse-150-diffuser/"
                    target="_blank"
                    rel="noreferrer"
                    className={textLinkClass}
                  >
                    AirPulse 150 Diffuser
                  </a>{" "}
                  for large campuses and HVAC-integrated spaces, our solutions deliver reliable, consistent fragrance distribution tailored to the needs of modern schools.
                </p>
                <p>
                  If you're looking for a professional{" "}
                  <a
                    href="https://www.coolmaxscent.com/commercial-aroma-diffusers/"
                    target="_blank"
                    rel="noreferrer"
                    className={textLinkClass}
                  >
                    Aroma Diffuser for Schools in Dubai
                  </a>
                  , Coolmaxscent offers innovative fragrance solutions that help educational institutions create cleaner, more welcoming, and memorable learning environments across the UAE.
                </p>
              </div>
            </motion.div>

            <motion.div
              variants={fadeInRight}
              className="rounded-[2.5rem] border border-blue-100 bg-[linear-gradient(135deg,_#eff6ff_0%,_#f8fbff_60%,_#eef7ff_100%)] p-8 shadow-[0_25px_65px_-30px_rgba(59,130,246,0.28)] md:p-12 flex flex-col justify-between transition-all duration-500 hover:shadow-[0_35px_80px_-25px_rgba(59,130,246,0.35)]"
            >
              <div>
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-200 bg-white px-4 py-2 text-[10px] font-black uppercase tracking-[0.3em] text-blue-700"
                >
                  <ShieldCheckIcon className="h-4 w-4" />
                  CoolMax Scent Solutions
                </motion.div>
                <h3 className="text-3xl font-serif tracking-tight text-slate-900 sm:text-4xl">
                  Elevate Your School's Learning Environment
                </h3>
                <div className="mt-5 space-y-4 text-slate-600 leading-relaxed font-light text-base">
                  <p>
                    For schools, colleges, and universities looking to enhance their campus atmosphere through professional fragrance solutions,{" "}
                    <a
                      href="https://www.coolmaxscent.com/"
                      target="_blank"
                      rel="noreferrer"
                      className={textLinkClass}
                    >
                      CoolMaxScent
                    </a>{" "}
                    provides expertly designed commercial scenting systems that help educational institutions across the UAE create welcoming environments where students can thrive.
                  </p>
                  <p>
                    From medium-sized classrooms to large university campuses, our commercial-grade{" "}
                    <a
                      href="https://www.coolmaxscent.com/commercial-aroma-diffusers/"
                      target="_blank"
                      rel="noreferrer"
                      className={textLinkClass}
                    >
                      Aroma Diffuser for Schools in Dubai
                    </a>{" "}
                    solutions help educational institutions craft the perfect sensory experience that supports learning and well-being.
                  </p>
                </div>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="mt-8 flex flex-col gap-3 sm:flex-row"
              >
                <Link
                  to="/contact/"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-slate-900 px-6 py-3.5 text-xs font-black uppercase tracking-[0.25em] text-white transition-all duration-300 hover:bg-blue-600 hover:shadow-lg hover:-translate-y-0.5 shadow-md"
                >
                  Contact Our Team
                  <ArrowRightIcon className="h-4 w-4" />
                </Link>
                <a
                  href={`https://wa.me/${whatsappNumber.replace("+", "")}`}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-slate-300 bg-white px-6 py-3.5 text-xs font-black uppercase tracking-[0.25em] text-slate-700 transition-all duration-300 hover:border-blue-500 hover:text-blue-600 hover:shadow-lg hover:-translate-y-0.5 shadow-xs"
                >
                  <ChatBubbleLeftRightIcon className="h-4 w-4" />
                  Get a Free Quote
                </a>
              </motion.div>
            </motion.div>
          </motion.div>
        </section>
      </div>
    </div>
  );
}