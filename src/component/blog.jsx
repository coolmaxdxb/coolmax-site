import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom"; 
import { ArrowRightIcon, CalendarDaysIcon, ClockIcon} from "@heroicons/react/24/outline";

// --- ASSET IMPORTS ---
import Blog1 from "../asset/blogimg/blog1.webp";
import Blog2 from "../asset/blogimg/blog2.webp";
import Blog3 from "../asset/blogimg/blog3.webp";
import Blog4 from "../asset/blogimg/blog4.webp";
import Blog5 from "../asset/blogimg/blog5.webp";
import Blog6 from "../asset/blogimg/blog6.webp";
import Blog7 from "../asset/blogimg/blog7.webp";
import Blog8 from "../asset/blogimg/blog8.webp";
import Blog9 from "../asset/blogimg/blog9.webp";
import Blog10 from "../asset/blogimg/blog10.webp";
import Blog11 from "../asset/blogimg/blog11.webp";
import Blog12 from "../asset/blogimg/blog12.webp";
// Reusing blog12 for the 13th post or you can import blog13 if available
import Blog13 from "../asset/blogimg/blog1.webp"; 

const blogPosts = [
  {
    id: 1,
    title: "Scent Marketing for Hotels: Improve Guest Experience & Loyalty",
    excerpt: "Discover how hotels in UAE use scent marketing solutions to improve guest experience, brand recall, and loyalty with professional aroma diffusers.",
    category: "Hospitality",
    date: "Feb 20, 2026",
    readTime: "6 min read",
    path: "/blog/scent-marketing-hotels-uae/",
    image: Blog1,
  },
  {
    id: 2,
    title: "What to Consider When Choosing a Commercial Aroma Diffuser",
    excerpt: "Learn what large companies actually consider when selecting professional scent systems—from HVAC compatibility to micro-atomization technology.",
    category: "Business Guide",
    date: "Feb 18, 2026",
    readTime: "7 min read",
    path: "/blog/choose-commercial-aroma-diffuser-uae/",
    image: Blog2,
  },
  {
    id: 3,
    title: "Scent Marketing 101 Solutions in UAE | Cool Max Scent",
    excerpt: "Scent Marketing 101: How Dubai Businesses Use olfactory branding to dominate the market.",
    category: "Marketing Mastery",
    date: "Mar 15, 2025",
    readTime: "5 min read",
    path: "/blog/scent-marketing-101-uae/",
    image: Blog3,
  },
  {
    id: 4,
    title: "Why 5-Star Hotels in Dubai Use Scent Diffusers - The Power of Scent Marketing in Luxury Hospitality",
    excerpt: "Discover why leading 5-star hotels in Dubai invest in hotel scent diffuser systems.",
    category: "Science",
    date: "Feb 15, 2025",
    readTime: "6 min read",
    path: "/blog/why-5-star-hotels-dubai-use-scent-diffusers/",
    image: Blog4,
  },
  {
    id: 5,
    title: "First Impressions Matter: Scent Solutions for Corporate Reception Area",
    excerpt: "How Commercial Scent Diffuser Machines Transform Business Environments and brand perception.",
    category: "scent diffuser machines",
    date: "Feb 10, 2025",
    readTime: "4 min read",
    path: "/blog/scent-solutions-corporate-reception-areas/",
    image: Blog5,
  },
  {
    id: 6,
    title: "How Large Area & HVAC Aroma Diffusers Transform Commercial Spaces | Cool Max",
    excerpt: "Discover how industrial HVAC scenting creates seamless fragrance coverage for malls and towers.",
    category: "Lifestyle",
    date: "Jan 25, 2025",
    readTime: "5 min read",
    path: "/blog/large-area-hvac-aroma-diffusers-commercial-spaces/",
    image: Blog6,
  },
  {
    id: 7,
    title: "Best Aroma Diffuser in Dubai – How to Choose Scents for Every Season",
    excerpt: "A complete seasonal scenting guide for facility managers. Learn what to diffuse from spring florals to winter woods.",
    category: "Strategy",
    date: "Mar 10, 2026",
    readTime: "8 min read",
    path: "/blog/seasonal-scenting-with-aroma-diffusers/",
    image: Blog7,
  },
  {
    id: 8,
    title: "Why Modern Offices Use Scent Systems - The Strategic Advantage",
    excerpt: "Discover the measurable ROI of office scenting, from 20% increased focus to improved employee retention in the UAE.",
    category: "Corporate",
    date: "Mar 12, 2026",
    readTime: "7 min read",
    path: "/blog/why-modern-offices-use-scent-systems/",
    image: Blog8,
  },
  {
    id: 9,
    title: "Commercial Scent Diffuser vs Air Freshener | Cool max",
    excerpt: "Compare commercial scent diffuser vs air freshener and find what works best for your business. Improve customer experience with the right scent solution.",
    category: "Strategy",
    date: "Mar 10, 2026",
    readTime: "8 min read",
    path: "/blog/commercial-scent-diffuser-vs-air-freshener",
    image: Blog9,
  },
  {
    id: 10,
    title: "Best Scent Diffuser Machine Guide | Cool Max Scent UAE & QATAR",
    excerpt: "Learn how to choose the best scent diffuser machine for homes, offices, and commercial spaces. Discover advanced scent solutions by Cool Max Scent in UAE & Qatar.",
    category: "Strategy",
    date: "April 14, 2026",
    readTime: "8 min read",
    path: "/blog/how-to-choose-best-scent-diffuser-machine/",
    image: Blog10,
  },
  {
    id: 11,
    title: "5 Simple Steps to Clean and Maintain Your Diffuser for Long-Lasting Performance",
    excerpt: "A good scent diffuser helps spread a pleasant fragrance evenly and makes any space feel more inviting—whether it’s your home, hotel, office, or shop.",
    category: "Strategy",
    date: "April 18, 2026",
    readTime: "8 min read",
    path: "/blog/clean-and-maintain-your-diffuser-for-long-lasting-performance/",
    image: Blog11,
  },
  {
    id: 12,
    title: "Aroma Diffuser Machine UAE | Fragrance Solutions in UAE",
    excerpt: "Discover the best aroma diffuser machine UAE solutions for homes, offices, hotels, and retail spaces. Explore professional fragrance solutions in UAE.",
    category: "Strategy",
    date: "April 21, 2026",
    readTime: "8 min read",
    path: "/blog/aroma-diffuser-machine-uae-fragrance-solutions-in-uae/",
    image: Blog12,
  },
  {
    id: 13,
    title: "HVAC Scent Diffuser System UAE for Better Business Experience",
    excerpt: "Discover how HVAC scent diffuser system UAE helps hotels, malls, and offices improve customer experience with consistent fragrance solutions.",
    category: "Strategy",
    date: "April 22, 2026",
    readTime: "8 min read",
    path: "/blog/hvac-scent-diffuser-system-uae/",
    image: Blog13,
  },
    {
    id: 14,
    title: "Best Aroma Oil Scent Diffuser Guide for Every Room | Cool Max",
    excerpt: "Find the perfect aroma oil diffuser for your space. Explore premium aroma oils like oud, lavender, white tea, and more to create a relaxing atmosphere. Contact Us Today!",
    category: "Strategy",
    date: "April 27, 2026",
    readTime: "8 min read",
    path: "/blog/best-essential-aroma-oil-diffuser-for-any-room/",
    image: Blog1,
  },
    {
    id: 15,
    title: "Stop Summer Odors Fast with Smart Scent Solutions I Cool Max Scent",
    excerpt: "Beat summer odors in homes, offices, and malls. Discover diffuser solutions for long-lasting freshness. Contact Cool Max Scent experts today.",
    category: "Strategy",
    date: "April 28, 2026",
    readTime: "8 min read",
    path: "/blog/summer-odor-control-homes-offices-malls-with-cool-max-scent/",
    image: Blog2,
  },
];

export default function BlogSection() {
  return (
    <div className="relative min-h-screen bg-white text-slate-900 font-sans selection:bg-blue-100 overflow-hidden text-left">
      
      {/* ================= GLOBAL BACKGROUND ================= */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-0 right-0 w-[1000px] h-[1000px] bg-slate-100/50 rounded-full blur-[150px]" />
        <div className="absolute bottom-0 left-0 w-[800px] h-[800px] bg-blue-50/50 rounded-full blur-[120px]" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.01)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.01)_1px,transparent_1px)] bg-[size:100px_100px]" />
      </div>

      <div className="relative z-10 max-w-[1600px] mx-auto px-6 md:px-16 mt-16">

        {/* ================= ARTICLES GRID SECTION ================= */}
        <section id="articles" className="py-24 border-t border-slate-100">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {blogPosts.map((post, index) => (
              <motion.article 
                key={post.id} 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group relative flex flex-col h-full bg-white border border-slate-100 rounded-[3rem] overflow-hidden hover:border-blue-200 hover:shadow-[0_40px_100px_-20px_rgba(0,0,0,0.05)] transition-all duration-500"
              >
                {/* Image Container */}
                <Link to={post.path} className="relative h-72 overflow-hidden m-4 rounded-[2.5rem] block">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-slate-900/10 group-hover:bg-transparent transition-colors duration-500" />
                  
                  <div className="absolute top-6 left-6">
                    <span className="text-[9px] font-black text-slate-900 uppercase tracking-widest bg-white/90 backdrop-blur-md px-4 py-2 rounded-full shadow-sm">
                      {post.category}
                    </span>
                  </div>
                </Link>

                {/* Content Body */}
                <div className="flex-1 flex flex-col p-10 pt-4 text-left">
                  <div className="flex items-center gap-4 text-[10px] text-slate-400 font-black uppercase tracking-widest mb-6">
                    <div className="flex items-center gap-1.5">
                      <CalendarDaysIcon className="w-3.5 h-3.5 text-blue-500" />
                      <span>{post.date}</span>
                    </div>
                    <div className="w-1 h-1 rounded-full bg-slate-200"></div>
                    <div className="flex items-center gap-1.5">
                      <ClockIcon className="w-3.5 h-3.5 text-blue-500" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>

                  <Link to={post.path}>
                    <h3 className="text-2xl font-serif text-slate-900 mb-6 leading-tight group-hover:text-blue-600 transition-colors duration-300 text-left">
                      {post.title}
                    </h3>
                  </Link>

                  <p className="text-slate-500 text-base leading-relaxed mb-8 line-clamp-3 font-light text-left">
                    {post.excerpt}
                  </p>

                  <div className="mt-auto pt-8 border-t border-slate-50 text-left">
                    <Link 
                      to={post.path}
                      className="inline-flex items-center gap-2 text-[10px] font-black text-slate-900 group-hover:text-blue-600 transition-colors uppercase tracking-[0.2em]"
                    >
                      Read Article <ArrowRightIcon className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
                    </Link>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </section>

        {/* ================= FOOTER CTA ================= */}
        <section className="py-32 text-center bg-slate-50 rounded-[5rem] mb-20 border border-slate-200 shadow-sm">
          <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} className="max-w-4xl mx-auto px-6">
            <h2 className="text-5xl md:text-7xl font-serif text-slate-900 mb-8 tracking-tighter leading-none text-center">
              Stay Informed on <br /> <span className="italic text-blue-600 font-light">Scent Excellence.</span>
            </h2>
            <p className="text-xl text-slate-500 mb-12 leading-relaxed font-light max-w-2xl mx-auto text-center">
              Whether you are looking for a scent machine for home or a full-scale machine for business, our blog provides the knowledge you need.
            </p>
          </motion.div>
        </section>

      </div>
    </div>
  );
}