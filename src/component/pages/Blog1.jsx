import React from "react";
import { ArrowRightIcon, CalendarDaysIcon, EnvelopeIcon } from "@heroicons/react/24/outline";

const blogPosts = [
  {
    id: 1,
    title: "The Psychology of Scent in Retail",
    excerpt: "Discover how the right fragrance can increase customer dwell time, boost sales, and create lasting emotional connections with your brand.",
    category: "Featured",
    date: "Mar 15, 2025",
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1555529771-835f59fc5efe?q=80&w=900",
    isFeatured: true,
  },
  {
    id: 2,
    title: "HVAC Scenting: A Complete Guide",
    excerpt: "Integrating scent diffusion into central air systems for uniform coverage.",
    category: "Technology",
    date: "Mar 10, 2025",
    readTime: "8 min",
    image: "https://images.unsplash.com/photo-1504384308090-c54be3855463?q=80&w=900",
  },
  {
    id: 3,
    title: "Top 5 Fragrance Trends for Hotels",
    excerpt: "Explore the trending olfactory notes defining luxury hospitality.",
    category: "Hospitality",
    date: "Feb 28, 2025",
    readTime: "4 min",
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=900",
  },
  {
    id: 4,
    title: "The Science of Memory",
    excerpt: "Why specific scents trigger vivid memories and how brands leverage this.",
    category: "Science",
    date: "Feb 15, 2025",
    readTime: "6 min",
    image: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?q=80&w=900",
  },
];

export default function BlogSection() {
  return (
    <section id="blog" className="relative py-28 px-6 bg-[#F8FAFC] overflow-hidden font-sans text-slate-600">
      
      {/* Background Texture */}
      <div className="absolute inset-0 opacity-[0.4]" 
           style={{ backgroundImage: 'radial-gradient(#cbd5e1 1px, transparent 1px)', backgroundSize: '32px 32px' }}>
      </div>

      <div className="relative max-w-[1400px] mx-auto">
        
        {/* --- Section Header --- */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 border-b border-slate-200 pb-8">
          <div>
            <div className="flex items-center gap-3 mb-3">
                <div className="h-px w-8 bg-blue-600"></div>
                {/* Sans-Serif for the eyebrow tag for contrast */}
                <span className="text-blue-600 font-sans font-bold tracking-[0.2em] uppercase text-xs">
                    The Scent Journal
                </span>
            </div>
            {/* Serif Heading for Editorial Look */}
            <h2 className="text-4xl md:text-5xl font-serif font-medium text-slate-900 leading-tight">
              Latest <span className="italic text-blue-700">Insights</span>
            </h2>
          </div>
          <a href="/blog" className="hidden md:flex items-center gap-2 px-6 py-3 border border-slate-200 rounded-full text-sm font-semibold text-slate-900 hover:bg-slate-900 hover:text-white hover:border-slate-900 transition-all duration-300 group">
            View Archive <ArrowRightIcon className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>

        {/* --- Editorial Grid --- */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* FEATURED POST */}
          <div className="lg:col-span-7 h-full">
            <article className="group relative h-full min-h-[500px] rounded-[2rem] overflow-hidden shadow-2xl shadow-blue-900/10 cursor-pointer">
              {/* Background Image */}
              <img
                src={blogPosts[0].image}
                alt={blogPosts[0].title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
              />
              
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent opacity-90" />
              
              {/* Content Container */}
              <div className="absolute inset-0 p-8 md:p-12 flex flex-col justify-end">
                 
                 {/* Top Badge */}
                 <div className="absolute top-8 left-8">
                   <span className="px-4 py-2 bg-blue-600 text-white text-xs font-bold uppercase tracking-widest rounded-lg shadow-lg">
                     {blogPosts[0].category}
                   </span>
                 </div>

                 <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    {/* Meta Data */}
                    <div className="flex items-center gap-4 text-blue-100 text-xs font-medium mb-4 opacity-90 tracking-wide">
                        <span className="flex items-center gap-2"><CalendarDaysIcon className="w-4 h-4"/> {blogPosts[0].date}</span>
                        <span className="w-1 h-1 bg-blue-400 rounded-full"></span>
                        <span>{blogPosts[0].readTime}</span>
                    </div>

                    {/* Headline: Serif */}
                    <h3 className="text-3xl md:text-5xl font-serif font-medium text-white mb-6 leading-tight">
                        {blogPosts[0].title}
                    </h3>
                    
                    {/* Excerpt: Sans-Serif */}
                    <p className="text-slate-200 text-lg line-clamp-2 max-w-xl font-light leading-relaxed mb-8 opacity-90">
                        {blogPosts[0].excerpt}
                    </p>
                    
                    <span className="inline-flex items-center gap-3 text-white font-bold tracking-wide border-b border-blue-500 pb-1 hover:text-blue-400 transition-colors">
                        Read Full Story <ArrowRightIcon className="w-4 h-4" />
                    </span>
                 </div>
              </div>
            </article>
          </div>

          {/* SIDE LIST */}
          <div className="lg:col-span-5 flex flex-col justify-between h-full gap-8">
            
            {/* List Items */}
            <div className="flex flex-col gap-6">
                {blogPosts.slice(1).map((post) => (
                <article key={post.id} className="group flex gap-5 items-start cursor-pointer p-4 rounded-2xl hover:bg-white hover:shadow-lg transition-all duration-300 border border-transparent hover:border-slate-100">
                    
                    {/* Thumbnail */}
                    <div className="w-24 h-24 sm:w-32 sm:h-32 flex-shrink-0 rounded-xl overflow-hidden relative bg-slate-200">
                    <img 
                        src={post.image} 
                        alt={post.title} 
                        className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                    />
                    </div>

                    {/* Content */}
                    <div className="flex-1 py-1">
                        {/* Meta Data */}
                        <div className="flex items-center gap-2 text-[10px] font-bold text-blue-600 mb-2 uppercase tracking-wide">
                            <span>{post.category}</span>
                            <span className="text-slate-300">•</span>
                            <span className="text-slate-400">{post.date}</span>
                        </div>
                        
                        {/* Title: Serif */}
                        <h3 className="text-xl font-serif text-slate-900 mb-2 leading-tight group-hover:text-blue-700 transition-colors">
                            {post.title}
                        </h3>
                        
                        {/* Excerpt: Sans */}
                        <p className="text-xs text-slate-500 leading-relaxed line-clamp-2 mb-3 hidden sm:block font-normal">
                            {post.excerpt}
                        </p>

                        <div className="flex items-center gap-2 text-xs font-bold text-slate-900 group-hover:text-blue-600 transition-colors uppercase tracking-wider">
                            Read <ArrowRightIcon className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                        </div>
                    </div>
                </article>
                ))}
            </div>
            
            {/* Newsletter CTA Block */}
            <div className="relative bg-[#1e3a8a] rounded-2xl p-8 overflow-hidden text-white shadow-xl shadow-blue-900/20">
                <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/20 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />
                
                <div className="relative z-10">
                    <div className="flex items-center gap-3 mb-4">
                        <div className="p-2 bg-white/10 rounded-lg backdrop-blur-sm">
                            <EnvelopeIcon className="w-6 h-6 text-blue-200" />
                        </div>
                        <h4 className="font-serif font-medium text-xl">Subscribe to our journal</h4>
                    </div>
                    
                    <p className="text-blue-200 text-sm mb-6 font-light">Get the latest scent trends delivered.</p>
                    
                    <div className="flex shadow-lg rounded-lg overflow-hidden">
                        <input type="email" placeholder="Email address" className="bg-white text-slate-900 text-sm px-4 py-3 focus:outline-none w-full placeholder:text-slate-400 font-medium" />
                        <button className="bg-blue-500 text-white px-6 py-3 text-sm font-bold hover:bg-blue-400 transition-colors uppercase tracking-wider">
                            Join
                        </button>
                    </div>
                </div>
            </div>

          </div>

        </div>

        {/* Mobile View All Button */}
        <div className="mt-12 text-center md:hidden">
            <a href="/blog" className="inline-block px-8 py-3 bg-slate-900 text-white rounded-full font-bold text-sm shadow-lg hover:bg-blue-700 transition-colors w-full">
                View All Articles
            </a>
        </div>

      </div>
    </section>
  );
}