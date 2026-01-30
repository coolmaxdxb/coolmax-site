import React from "react";
import { StarIcon } from "@heroicons/react/24/solid";
import { UserCircleIcon } from "@heroicons/react/24/outline";

/* ================= REVIEWS DATA ================= */

const reviews = [
  {
    name: "Ahmed Al Mansoori",
    title: "Facility Manager, Luxury Hotel",
    feedback:
      "The CoolMax lobby scent diffuser elevated our guest experience with subtle, consistent fragrance distribution.",
    image: "/images/reviews/client1.jpg",
    rating: 5,
    product: "Lobby Scent Diffuser (CM-102)",
  },
  {
    name: "Ritika Sharma",
    title: "Operations Head, Retail Chain",
    feedback:
      "CoolMax HVAC scent systems are reliable, easy to maintain, and perfect for multi-location deployment.",
    image: "/images/reviews/client2.jpg",
    rating: 5,
    product: "HVAC Scent Diffuser (CM-104)",
  },
  {
    name: "Mohammed Faisal",
    title: "Office Administrator",
    feedback:
      "The room atmosphere diffuser created a pleasant workspace without overpowering the senses.",
    image: "/images/reviews/client3.jpg",
    rating: 4,
    product: "Room Atmosphere Diffuser (CM-105)",
  },
  {
    name: "Neha Verma",
    title: "Showroom Manager",
    feedback:
      "Our customers instantly noticed the premium fragrance. It improved dwell time significantly.",
    image: "/images/reviews/client4.jpg",
    rating: 5,
    product: "Wall Mount Diffuser (CM-103)",
  },
];

/* ================= CARD ================= */

function ReviewCard({ review }) {
  return (
    <div className="mx-6 w-[400px] shrink-0 rounded-2xl bg-white border border-slate-200 shadow-lg hover:shadow-2xl hover:shadow-blue-900/10 hover:-translate-y-1 transition-all duration-300 p-8 flex flex-col justify-between h-full">
      
      <div>
        {/* Header: User Info */}
        <div className="flex items-start gap-4 mb-6">
           <div className="relative">
             {/* Fallback to icon if image fails (or you can keep img tag) */}
             <div className="w-12 h-12 rounded-full bg-slate-100 flex items-center justify-center text-slate-400 border border-slate-200">
                <UserCircleIcon className="w-8 h-8" />
             </div>
             {/* Optional: Add Image Tag back if you have real images */}
             {/* <img src={review.image} alt={review.name} className="absolute inset-0 w-12 h-12 rounded-full object-cover border border-slate-200" /> */}
             <div className="absolute -bottom-1 -right-1 bg-blue-600 rounded-full p-1 border-2 border-white">
                <StarIcon className="w-3 h-3 text-white" />
             </div>
           </div>
           
           <div>
              <h4 className="font-bold text-slate-900 text-lg leading-tight">{review.name}</h4>
              <p className="text-xs font-mono text-slate-500 uppercase tracking-wide mt-1">{review.title}</p>
           </div>
        </div>

        {/* Feedback Quote */}
        <div className="relative mb-6">
            <span className="absolute -top-2 -left-2 text-6xl text-slate-100 font-serif leading-none -z-10">“</span>
            <p className="text-slate-600 leading-relaxed font-medium">
                {review.feedback}
            </p>
        </div>
      </div>

      {/* Footer: Product & Rating */}
      <div className="pt-6 border-t border-slate-100">
          <p className="text-xs font-bold text-blue-600 uppercase tracking-widest mb-3 flex items-center gap-2">
             <span className="w-2 h-2 rounded-full bg-blue-600"></span>
             {review.product}
          </p>
          <div className="flex gap-1">
            {[...Array(5)].map((_, i) => (
              <StarIcon 
                key={i} 
                className={`w-4 h-4 ${i < review.rating ? "text-yellow-400" : "text-slate-200"}`} 
              />
            ))}
          </div>
      </div>

    </div>
  );
}

/* ================= COMPONENT ================= */

export default function ProductReviewsMarquee() {
  const loopReviews = [...reviews, ...reviews]; // Duplicate for smooth loop

  return (
    <section id="reviews" className="relative py-28 overflow-hidden bg-[#F8FAFC] font-sans text-slate-600">
      
      {/* Background Texture */}
      <div className="absolute inset-0 opacity-[0.4]" 
           style={{ backgroundImage: 'radial-gradient(#cbd5e1 1px, transparent 1px)', backgroundSize: '32px 32px' }}>
      </div>

      {/* Styles for Marquee Animation */}
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
        .marquee {
          animation: marquee 40s linear infinite;
        }
        .marquee-reverse {
          animation-direction: reverse;
        }
        /* Pause on hover for better UX */
        .marquee-container:hover .marquee {
            animation-play-state: paused;
        }
      `}</style>

      {/* --- Header Section --- */}
      <div className="relative z-10 max-w-4xl mx-auto text-center mb-20 px-6">
        <div className="inline-flex items-center gap-2 mb-4">
             <span className="w-8 h-px bg-blue-600"></span>
             <span className="text-blue-600 font-mono font-bold tracking-widest uppercase text-xs">
                Client Testimonials
             </span>
             <span className="w-8 h-px bg-blue-600"></span>
        </div>
        <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 tracking-tight">
           What Our Clients Say
        </h2>
        <p className="text-lg text-slate-500 font-medium">
           Trusted by hotels, offices, and commercial spaces across the UAE.
        </p>
      </div>

      {/* ================= MARQUEE ROW 1 (Left) ================= */}
      <div className="relative w-full overflow-hidden marquee-container mb-12">
         {/* Fade Gradients */}
         <div className="absolute left-0 top-0 h-full w-32 bg-gradient-to-r from-[#F8FAFC] to-transparent z-10 pointer-events-none" />
         <div className="absolute right-0 top-0 h-full w-32 bg-gradient-to-l from-[#F8FAFC] to-transparent z-10 pointer-events-none" />

         <div className="flex w-max marquee">
            {loopReviews.map((review, i) => (
               <ReviewCard key={`top-${i}`} review={review} />
            ))}
         </div>
      </div>

      {/* ================= MARQUEE ROW 2 (Right) ================= */}
      <div className="relative w-full overflow-hidden marquee-container">
         {/* Fade Gradients */}
         <div className="absolute left-0 top-0 h-full w-32 bg-gradient-to-r from-[#F8FAFC] to-transparent z-10 pointer-events-none" />
         <div className="absolute right-0 top-0 h-full w-32 bg-gradient-to-l from-[#F8FAFC] to-transparent z-10 pointer-events-none" />

         <div className="flex w-max marquee marquee-reverse">
            {loopReviews.map((review, i) => (
               <ReviewCard key={`bottom-${i}`} review={review} />
            ))}
         </div>
      </div>

    </section>
  );
}