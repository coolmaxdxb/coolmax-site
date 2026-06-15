import React from "react";
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
import Blog13 from "../asset/blogimg/blog13.webp"; 
import Blog16 from "../asset/blogimg/blog16.webp"; 
import Blog17 from "../asset/blogimg/blog17.webp";
import Blog15 from "../asset/blogimg/blog15.webp";
import Blog18 from "../asset/blogimg/blog18.webp";
import Blog19 from "../asset/blogimg/blog19.webp";
import Blog20 from "../asset/blogimg/blog20.webp";
import Blog21 from "../asset/blogimg/blog21.webp";
import Blog22 from "../asset/blogimg/blog22.webp";
import Blog23 from "../asset/blogimg/blog23.webp";
import Blog24 from "../asset/blogimg/blog24.webp";
import Blog27 from "../asset/blogimg/blog27.webp";
import Blog28 from "../asset/blogimg/blog28.webp";
import Blog29 from "../asset/blogimg/blog29.webp";
import Blog30 from "../asset/blogimg/blog30.webp";
import Blog31 from "../asset/blogimg/blog31.webp";
import Blog32 from "../asset/blogimg/blog32.webp";


const blogPosts = [
  {
    id: 1,
    title: "Scent Marketing for Hotels: Improve Guest Experience & Loyalty",
    excerpt: "Discover how hotels in UAE use scent marketing solutions to improve guest experience, brand recall, and loyalty with professional aroma diffusers.",
   
    readTime: "6 min read",
    path: "/blog/scent-marketing-hotels-uae/",
    image: Blog1,
  },
  {
    id: 2,
    title: "What to Consider When Choosing a Commercial Aroma Diffuser",
    excerpt: "Learn what large companies actually consider when selecting professional scent systems—from HVAC compatibility to micro-atomization technology.",
    
    readTime: "7 min read",
    path: "/blog/choose-commercial-aroma-diffuser-uae/",
    image: Blog2,
  },
  {
    id: 3,
    title: "Scent Marketing 101 Solutions in UAE | Cool Max Scent",
    excerpt: "Scent Marketing 101: How Dubai Businesses Use olfactory branding to dominate the market.",
    
    readTime: "5 min read",
    path: "/blog/scent-marketing-101-uae/",
    image: Blog3,
  },
  {
    id: 4,
    title: "Why 5-Star Hotels in Dubai Use Scent Diffusers - The Power of Scent Marketing in Luxury Hospitality",
    excerpt: "Discover why leading 5-star hotels in Dubai invest in hotel scent diffuser systems.",
   
    readTime: "6 min read",
    path: "/blog/why-5-star-hotels-dubai-use-scent-diffusers/",
    image: Blog4,
  },
  {
    id: 5,
    title: "First Impressions Matter: Scent Solutions for Corporate Reception Area",
    excerpt: "How Commercial Scent Diffuser Machines Transform Business Environments and brand perception.",
    
    readTime: "4 min read",
    path: "/blog/scent-solutions-corporate-reception-areas/",
    image: Blog5,
  },
  {
    id: 6,
    title: "How Large Area & HVAC Aroma Diffusers Transform Commercial Spaces | Cool Max",
    excerpt: "Discover how industrial HVAC scenting creates seamless fragrance coverage for malls and towers.",
  
    readTime: "5 min read",
    path: "/blog/large-area-hvac-aroma-diffusers-commercial-spaces/",
    image: Blog6,
  },
  {
    id: 7,
    title: "Best Aroma Diffuser in Dubai – How to Choose Scents for Every Season",
    excerpt: "A complete seasonal scenting guide for facility managers. Learn what to diffuse from spring florals to winter woods.",
   
    readTime: "8 min read",
    path: "/blog/seasonal-scenting-with-aroma-diffusers/",
    image: Blog7,
  },
  {
    id: 8,
    title: "Why Modern Offices Use Scent Systems - The Strategic Advantage",
    excerpt: "Discover the measurable ROI of office scenting, from 20% increased focus to employee retention in the UAE.",
   
    readTime: "7 min read",
    path: "/blog/why-modern-offices-use-scent-systems/",
    image: Blog8,
  },
  {
    id: 9,
    title: "Commercial Scent Diffuser vs Air Freshener | Cool max",
    excerpt: "Compare commercial scent diffuser vs air freshener and find what works best for your business. Improve customer experience with the right scent solution.",
  
    readTime: "8 min read",
    path: "/blog/commercial-scent-diffuser-vs-air-freshener",
    image: Blog9,
  },
  {
    id: 10,
    title: "Best Scent Diffuser Machine Guide | Cool Max Scent UAE & QATAR",
    excerpt: "Learn how to choose the best scent diffuser machine for homes, offices, and commercial spaces. Discover advanced scent solutions by Cool Max Scent in UAE & Qatar.",
   
    readTime: "8 min read",
    path: "/blog/how-to-choose-best-scent-diffuser-machine/",
    image: Blog10,
  },
  {
    id: 11,
    title: "5 Simple Steps to Clean and Maintain Your Diffuser for Long-Lasting Performance",
    excerpt: "A good scent diffuser helps spread a pleasant fragrance evenly and makes any space feel more inviting—whether it’s your home, hotel, office, or shop.",
  
    readTime: "8 min read",
    path: "/blog/clean-and-maintain-your-diffuser-for-long-lasting-performance/",
    image: Blog11,
  },
  {
    id: 12,
    title: "Aroma Diffuser Machine UAE | Fragrance Solutions in UAE",
    excerpt: "Discover the best aroma diffuser machine UAE solutions for homes, offices, hotels, and retail spaces. Explore professional fragrance solutions in UAE.",
    
    readTime: "8 min read",
    path: "/blog/aroma-diffuser-machine-uae-fragrance-solutions-in-uae/",
    image: Blog12,
  },
  {
    id: 13,
    title: "HVAC Scent Diffuser System UAE for Better Business Experience",
    excerpt: "Discover how HVAC scent diffuser system UAE helps hotels, malls, and offices improve customer experience with consistent fragrance solutions.",
    
    readTime: "8 min read",
    path: "/blog/hvac-scent-diffuser-system-uae/",
    image: Blog13,
  },
  {
    id: 14,
    title: "Best Aroma Oil Scent Diffuser Guide for Every Room | Cool Max",
    excerpt: "Find the perfect aroma oil diffuser for your space. Explore premium aroma oils like oud, lavender, white tea, and more to create a relaxing atmosphere. Contact Us Today!",
    
    readTime: "8 min read",
    path: "/blog/best-essential-aroma-oil-diffuser-for-any-room/",
    image: Blog1,
  },
  {
    id: 15,
    title: "Stop Summer Odors Fast with Smart Scent Solutions I Cool Max Scent",
    excerpt: "Beat summer odors in homes, offices, and malls. Discover diffuser solutions for long-lasting freshness. Contact Cool Max Scent experts today.",
    
    readTime: "8 min read",
    path: "/blog/summer-odor-control-homes-offices-malls-with-cool-max-scent/",
    image: Blog15,
  },
  {
    id: 16,
    title: "Air Fragrance Diffusers in Dubai Hospitality Industry: How Hotels Create Premium Guest Experiences",
    excerpt: "Dubai is known for luxury, innovation, and world-class hospitality. From premium hotels and resorts to boutique stays and serviced apartments, every hospitality brand in the city competes to deliver memorable guest experiences.",
   
    readTime: "8 min read",
    path: "/blog/Air-Fragrance-Diffusers-in-Dubai/",
    image: Blog16,
  },
  {
    id: 17,
    title: " Why Floor standing diffusers are ideal for commercial spaces",
    excerpt: " Discover why Floor-Standing Aroma Diffusers in UAE are ideal for luxury hotels, offices, showrooms, and large commercial spaces with premium scent coverage.",
   
    readTime: "8 min read",
    path: "/blog/why-floor-standing-diffusers-are-ideal-for-commercial-space/",
    image: Blog17,
  },
  {
    id: 18,
    title: "Aroma Oil Diffusers in Dubai for Better Mood & Comfort",
    excerpt: " Discover how Aroma Oil Diffusers in Dubai improve mood, comfort, and indoor atmosphere in homes, offices, hotels, and commercial spaces across UAE.",
   
    readTime: "8 min read",
    path: "/blog/aroma-oil-diffusers-dubai-for-better-mode-and-comfort/",
    image: Blog18,
  },
  {
    id: 19,
    title: " Air Diffuser Machine in Dubai for Retail & Hospitality Spaces",
    excerpt: " Discover how an Air Diffuser Machine in Dubai improves customer experience, brand perception, and atmosphere in retail and hospitality spaces.",
  
    readTime: "8 min read",
    path: "/blog/air-diffuser-machine-in-dubai-retail-and-hospitality-spaces/",
    image: Blog19,
  },
    {
    id: 20,
    title: " Aroma Diffuser Solutions in Dubai for Shopping Malls",
    excerpt: " Discover how aroma diffuser solutions in Dubai can enhance the shopping experience and create a welcoming atmosphere in retail spaces.",
    
    readTime: "8 min read",
    path: "/blog/aroma-diffuser-solutions-in-dubai-for-shopping-malls/",
    image: Blog20,
  },
   {
    id: 21,
    title: " Aroma Diffuser Solutions in Dubai for Modern Office Workspaces",
    excerpt: "Discover how modern offices in Dubai use aroma diffuser solutions, HVAC scent systems, & commercial aroma diffusers to improve workplace atmosphere & employee experience.",
    
    readTime: "8 min read",
    path: "/blog/aroma-diffuser-solutions-in-dubai-for-offices/",
    image: Blog21,
  },
   {
    id: 22,
    title: " Small Space Scent Diffuser Guide | Choose the Best One for Your Home or Office",
    excerpt: "Discover how to choose the best scent diffuser for small spaces. Learn tips on selecting the right scent diffuser machine and aroma diffuser machine UAE.",
    
    readTime: "8 min read",
    path: "/blog/small-space-scent-diffuser-guide/",
    image: Blog22,
  },
    {
    id: 23,
    title: " Gym Scent Diffusers in Dubai | Improve Gym Ambience ",
    excerpt: "Improve gym ambience and customer satisfaction with professional scent diffusers and air freshener machines for gyms in Dubai.",
    
    readTime: "8 min read",
    path: "/blog/improve-gym-ambience-scent-diffusers-dubai/",
    image: Blog23,
  },
    {
    id: 24,
    title: "Aerosol Spray Dispenser vs Automatic Scent Diffuser | UAE & Qatar",
    excerpt: "Compare aerosol spray dispensers vs automatic scent diffusers to find the best long-lasting fragrance solution for homes, offices, hotels, and commercial spaces across UAE and Qatar. ",
    
    readTime: "8 min read",
    path: "/blog/uae-qatar-aerosol-spray-dispenser-vs-automatic-scent-diffuser/",
    image: Blog24,
  },
   {
    id: 25,
    title: "Dubai Hotel Scent Secrets | Luxury Home Fragrance UAE",
    excerpt: "Learn how UAE hotels create unforgettable scent experiences and transform your home or business with premium fragrance solutions from Cool Max Scent.  ",
    
    readTime: "8 min read",
    path: "/blog/dubai-hotel-scent-marketing-home-fragrance-uae/",
    image: Blog21,
  },
   {
    id: 26,
    title: "Cool Max Scent Diffusers for Dubai Supermarket Stores ",
    excerpt: " Transform your supermarket atmosphere with premium scent diffusers in Dubai that improve customer experience, boost engagement, and create fresh shopping environments. Contact Us Today!",
    
    readTime: "8 min read",
    path: "/blog/supermarkets-dubai-scent-diffusers-shopping-experience/",
    image: Blog10,
  },
   {
    id: 27,
    title: "How to Use Aroma Diffusers Effectively | coolmax",
    excerpt: "Learn how to use aroma diffuser machines in UAE effectively for homes, offices, hotels, & commercial spaces. Discover expert tips for better fragrance coverage.",
    
    readTime: "8 min read",
    path: "/blog/how-to-use-aroma-diffusers-effectively/",
    image: Blog27,

  },
    {
    id: 28,
    title: "Top 10 Aroma Diffusers in UAE for Commercial Spaces",
    excerpt: "Discover the best Aroma Diffuser Machines in UAE for hotels, offices, malls, and retail spaces. Explore premium scenting solutions from CoolMaxScent.",
    
    readTime: "8 min read",
    path: "/blog/10-best-aroma-diffuser-machines-in-uae/",
    image: Blog28,

  },
 
   {
    id: 29,
    title: "10 Best Summer Fragrance Oils for Dubai Diffusers | CoolMax",
    excerpt: "Looking for the perfect summer scent? Discover the 10 best fragrance oils for diffusers in Dubai, with fresh, long-lasting options for UAE spaces. Contact Us Today!",
    
    readTime: "8 min read",
    path: "/blog/best-summer-fragrance-oils-for-diffusers-dubai/",
    image: Blog29,
  },
   {
    id: 30,
    title: "Scent Aroma Oil Diffusers for Clinics & Wellness Centers | CoolMax",
    excerpt: "Learn how aroma oil diffusers help clinics and wellness centers create calming environments, improve patient comfort, and enhance visitor experiences. Contact Us Today!",
    
    readTime: "8 min read",
    path: "/blog/aroma-oil-diffusers-for-clinics-and-wellness-centers/",
    image: Blog30,
  },
     {
    id: 31,
    title: "Create a Luxurious Home with Professional Aroma Diffusers | CoolMax",
    excerpt: "Discover how essential oil diffusers and premium fragrance oils create a luxurious, welcoming, and relaxing atmosphere throughout your home.",
    
    readTime: "8 min read",
    path: "/blog/luxury-home-fragrance-with-essential-oil-diffusers/",
    image: Blog31,
  },
  {
    id: 32,
    title: "Maximize Your Workouts with Cool Max Scent Solutions for Gyms",
    excerpt: "Boost member experience with Cool Max Scent Solutions, delivering consistent fragrance and a clean, welcoming gym environment every day.",
    
    readTime: "7 min read",
    path: "/blog/cool-max-scent-solutions-for-gyms/",
    image: Blog32,
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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 justify-items-center">
            {blogPosts.map((post) => (
              <article 
                key={post.id} 
                className="group relative flex flex-col h-full bg-white border border-slate-100 rounded-none overflow-hidden hover:border-blue-200 hover:shadow-[0_40px_100px_-20px_rgba(0,0,0,0.05)] transition-all duration-500 max-w-md w-full"
              >
                {/* Image Container - Adjusted to aspect-video and changed from contain to cover to eliminate black bars */}
                <Link to={post.path} className="relative aspect-video w-full overflow-hidden block rounded-none">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover object-center transition-transform duration-1000"
                  />
                  <div className="absolute inset-0 bg-slate-900/10 group-hover:bg-transparent transition-colors duration-500" />
                </Link>

                {/* Content Body */}
                <div className="flex-1 flex flex-col p-8 pt-8 text-left">
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
              </article>
            ))}
          </div>
        </section>

        {/* ================= FOOTER CTA ================= */}
        <section className="py-32 text-center bg-slate-50 rounded-none mb-20 border border-slate-200 shadow-sm">
          <div className="max-w-4xl mx-auto px-6">
            <h2 className="text-5xl md:text-7xl font-serif text-slate-900 mb-8 tracking-tighter leading-none text-center">
              Stay Informed on <br /> <span className="italic text-blue-600 font-light">Scent Excellence.</span>
            </h2>
            <p className="text-xl text-slate-500 mb-12 leading-relaxed font-light max-w-2xl mx-auto text-center">
              Whether you are looking for a scent machine for home or a full-scale machine for business, our blog provides the knowledge you need.
            </p>
          </div>
        </section>

      </div>
    </div>
  );
}