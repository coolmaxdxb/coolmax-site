import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom"; 
import AboutImg from "../../src/asset/about/about1.png"; 

// --- Animation Variants ---
const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

export default function AboutUs() {
  return (
    <section id="about" className="relative bg-slate-50 overflow-hidden font-sans selection:bg-blue-100 selection:text-blue-900">
      
      {/* ================= BACKGROUND DECORATION ================= */}
      <div className="absolute top-0 left-0 w-full h-[600px] bg-gradient-to-b from-white to-blue-50/30 z-0" />
      <div className="absolute top-[-20%] right-[-10%] w-[600px] h-[600px] bg-blue-100/60 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-[10%] left-[-10%] w-[500px] h-[500px] bg-cyan-100/40 rounded-full blur-[80px] pointer-events-none" />

      {/* --- MAX WIDTH CONTAINER --- */}
      <div className="relative max-w-[1600px] mx-auto px-6 md:px-12 py-24 z-10">

        {/* ================= 1. HEADER & INTRO ================= */}
        <motion.div 
          initial="hidden" 
          whileInView="visible" 
          viewport={{ once: true }} 
          variants={fadeUp}
          className="max-w-5xl mx-auto text-center mb-20"
        >
          <span className="inline-block py-1 px-4 rounded-full bg-blue-100 border border-blue-200 text-blue-700 text-xs font-bold tracking-widest uppercase mb-6 mt-10 shadow-sm">
            About Cool Max
          </span>
          
          {/* FONT CHANGE: Sans-Serif, Extra Bold, Tighter Tracking */}
          <h1 className="text-4xl md:text-7xl font-extrabold text-slate-900 mb-8 leading-tight tracking-tight">
            Your Trusted Partner for <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-cyan-500">
              Professional Scent Solutions in UAE
            </span>
          </h1>
          
          <p className="text-xl text-slate-600 font-medium leading-relaxed max-w-4xl mx-auto mb-8">
            Cool Max General Trading is a Dubai-based company providing professional scent diffuser machines and fragrance solutions for homes and commercial spaces across the UAE. Since 2020, we have been supporting businesses with reliable home fragrance systems, commercial scent machines, and HVAC scent diffuser solutions designed for consistent performance.
          </p>
          
          <p className="text-lg md:text-xl text-blue-900 font-semibold bg-blue-50/50 py-4 px-6 rounded-2xl inline-block border border-blue-100">
            Our focus is simple—helping clients create fresh, comfortable, and welcoming environments using practical, easy-to-maintain scenting solutions.
          </p>
        </motion.div>

        {/* ================= 2. WHO WE ARE (Split Layout) ================= */}
        <motion.div 
          initial="hidden" 
          whileInView="visible" 
          viewport={{ once: true }} 
          variants={fadeUp}
          className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center mb-28"
        >
          {/* Text Content */}
          <div className="lg:pr-10">
            {/* FONT CHANGE: Bold Sans */}
            <h2 className="text-4xl font-bold text-slate-900 mb-8 relative inline-block tracking-tight">
              Who We Are
              <span className="absolute -bottom-2 left-0 w-16 h-1.5 bg-gradient-to-r from-blue-600 to-cyan-400 rounded-full"></span>
            </h2>
            <div className="space-y-6 text-lg text-slate-600 font-medium leading-relaxed">
              <p>
                Cool Max is not just a product supplier—we are a solution-driven scent partner. We work closely with our clients to understand their space, usage patterns, and expectations before recommending the right aroma scent diffuser or air scent machine. Our team focuses on matching the correct diffuser technology with suitable fragrance solutions to ensure effective and controlled scent diffusion.
              </p>
              <p>
                We provide professional home scent systems, commercial scent diffusers, and hotel air freshener machines that are suitable for small rooms, large commercial areas, and everything in between. Our range includes battery-operated diffusers, wall-mounted systems, floor-standing scent machines, and HVAC-integrated solutions.
              </p>
              <p className="text-slate-800 border-l-4 border-blue-600 pl-6 py-2 bg-slate-50 rounded-r-lg font-semibold">
                By combining the right equipment with ongoing service support, Cool Max ensures that scenting remains consistent and reliable—not overpowering, not inconsistent, and not complicated.
              </p>
            </div>
          </div>

          {/* Image */}
          <div className="relative group">
            <div className="absolute inset-0 bg-blue-600 rounded-[2.5rem] transform rotate-3 opacity-10 scale-[1.02] group-hover:rotate-1 transition-transform duration-500"></div>
            <div className="absolute inset-0 bg-cyan-400 rounded-[2.5rem] transform -rotate-2 opacity-10 scale-[1.02] group-hover:-rotate-1 transition-transform duration-500"></div>
            <img
              src={AboutImg}
              alt="Cool Max Scent Machine"
              className="relative z-10 w-full rounded-[2rem] shadow-2xl border border-white bg-white object-cover max-h-[650px] hover:scale-[1.01] transition-transform duration-500"
            />
          </div>
        </motion.div>

        {/* ================= 3. OUR JOURNEY (Full Width Box) ================= */}
        <motion.div 
          initial="hidden" 
          whileInView="visible" 
          viewport={{ once: true }} 
          variants={fadeUp}
          className="bg-white rounded-[3rem] p-10 md:p-16 shadow-xl border border-blue-50 mb-28 relative overflow-hidden"
        >
          {/* Subtle Background Pattern */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-blue-50 rounded-full blur-3xl opacity-50 pointer-events-none -z-10" />

          {/* FONT CHANGE: Bold Sans */}
          <h2 className="text-4xl font-bold text-slate-900 mb-8 tracking-tight">Our Journey</h2>
          <div className="grid md:grid-cols-2 gap-12 text-lg text-slate-600 font-medium leading-relaxed">
            <p>
              Cool Max General Trading was founded in 2020 with a clear objective: to provide dependable and easy-to-manage scent and hygiene solutions tailored to the UAE market. We identified a growing demand for professional scent diffuser machines that could operate efficiently in commercial and institutional environments without requiring constant attention or complex maintenance.
            </p>
            <p>
              Starting with a focus on hygiene and washroom solutions, we gradually expanded our offerings to include home diffuser machines, commercial scent machines, and large-area HVAC scent diffuser systems. Over the years, we have built a diverse product portfolio that supports a wide range of applications—from residential homes to hotels, offices, hospitals, malls, and large facilities.
            </p>
          </div>
          
          <div className="mt-10 pt-10 border-t border-blue-50">
             <p className="text-xl text-slate-800 font-bold leading-relaxed">
               Today, Cool Max serves public and private hospitals, schools, corporate offices, retail spaces, listed companies, food chains, and facility management providers across the UAE. Our growth has been driven by consistent service, practical solutions, and long-term client relationships.
             </p>
          </div>
        </motion.div>

        {/* ================= 4. WHAT WE DO (Grid) ================= */}
        <div className="mb-28">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 tracking-tight">What We Do</h2>
            <p className="text-xl text-slate-500 font-medium mt-4 max-w-2xl mx-auto">
              At Cool Max, we provide end-to-end scenting solutions designed for simplicity and performance.
            </p>
          </div>

          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {[
              "Supplying professional scent diffuser machines for homes and businesses",
              "Designing home fragrance systems and commercial scenting plans",
              "Installing and configuring scent air machines based on space size",
              "Providing hotel scent diffusers and hotel air freshener machines",
              "Offering HVAC scent diffuser solutions for large areas",
              "Supporting clients with refills, maintenance, and technical assistance"
            ].map((item, idx) => (
              <motion.div 
                key={idx} 
                variants={fadeUp}
                className="bg-white p-8 rounded-2xl shadow-sm border border-blue-50 hover:border-blue-200 hover:shadow-lg hover:shadow-blue-100/50 transition-all flex items-start gap-5 group"
              >
                <div className="w-10 h-10 mt-1 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center shrink-0 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                   <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                     <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                   </svg>
                </div>
                <p className="text-lg text-slate-700 font-bold group-hover:text-slate-900">{item}</p>
              </motion.div>
            ))}
          </motion.div>
          
          <p className="text-center mt-12 text-xl text-blue-800 font-semibold italic max-w-4xl mx-auto">
            "From a single scent machine for home to large commercial scent diffuser installations, we ensure that each solution is tailored to the environment it serves."
          </p>
        </div>

        {/* ================= 5. HOW WE WORK (Dark Blue Section) ================= */}
        <div className="mb-28 bg-slate-900 rounded-[3rem] p-10 md:p-20 text-white relative overflow-hidden">
          {/* Decoration */}
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/20 rounded-full blur-[100px]"></div>
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-cyan-500/10 rounded-full blur-[100px]"></div>
          
          <div className="relative z-10">
            <h2 className="text-4xl font-bold mb-6 text-white tracking-tight">How We Work With Our Clients</h2>
            <p className="text-blue-200 text-lg font-medium mb-16 max-w-3xl leading-relaxed">
              Our approach is structured, transparent, and client-focused. We believe successful scenting begins with understanding, not assumptions.
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 relative">
              {/* Connecting Line (Desktop) */}
              <div className="absolute top-8 left-0 w-full h-px bg-white/10 hidden lg:block -z-10"></div>

              {[
                { step: "01", title: "Consultation", desc: "We evaluate the space, usage patterns, and expectations to understand the real requirement." },
                { step: "02", title: "Solution Design", desc: "Based on space size and purpose, we recommend the most suitable scent diffuser machine and fragrance options." },
                { step: "03", title: "Installation & Setup", desc: "Our team ensures correct placement, timing, and intensity for even fragrance distribution." },
                { step: "04", title: "Ongoing Support", desc: "We provide refill plans, maintenance support, and adjustments to ensure uninterrupted performance." }
              ].map((item, idx) => (
                <div key={idx} className="relative group">
                  {/* Number Circle */}
                  <div className="w-16 h-16 rounded-full bg-slate-800 border border-white/20 flex items-center justify-center text-xl font-bold text-white mb-6 group-hover:bg-blue-600 group-hover:border-blue-500 transition-colors shadow-lg shadow-black/20">
                    {item.step}
                  </div>
                  
                  <h3 className="text-2xl font-bold text-white mb-4 tracking-tight">{item.title}</h3>
                  <p className="text-slate-300 text-base font-medium leading-relaxed group-hover:text-white transition-colors">{item.desc}</p>
                </div>
              ))}
            </div>
            
            <p className="mt-16 text-lg text-blue-200 font-semibold text-center border-t border-white/10 pt-8">
               This process ensures our scent machines for business and home applications deliver consistent results over time.
            </p>
          </div>
        </div>

        {/* ================= 6. INDUSTRIES SERVED (Cards) ================= */}
        <div className="mb-28">
          <h2 className="text-4xl font-bold text-slate-900 text-center mb-16 tracking-tight">Industries We Serve</h2>
          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {[
              { title: "Offices & Corporate Spaces", desc: "Improve employee comfort and create a professional atmosphere with controlled fragrance diffusion." },
              { title: "Hotels & Hospitality", desc: "Enhance guest experience using premium hotel scent machines and hotel air freshener systems." },
              { title: "Retail Stores & Shopping Malls", desc: "Create a pleasant shopping environment that encourages longer customer visits." },
              { title: "Hospitals & Clinics", desc: "Support hygiene and comfort with subtle, calming fragrance solutions." },
              { title: "Schools & Institutions", desc: "Maintain clean, fresh indoor air in classrooms and common areas." },
              { title: "Residential Homes & Apartments", desc: "Upgrade everyday living with reliable home diffuser machines and best home fragrance systems." },
            ].map((industry, idx) => (
              <motion.div 
                key={idx}
                variants={fadeUp}
                className="group p-10 bg-white border border-slate-100 rounded-[2rem] hover:border-blue-300 hover:shadow-xl hover:shadow-blue-100/50 transition-all duration-300"
              >
                <div className="w-12 h-1 bg-gradient-to-r from-blue-500 to-cyan-400 mb-6 rounded-full"></div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4 group-hover:text-blue-700 transition-colors">
                  {industry.title}
                </h3>
                <p className="text-slate-600 text-base font-medium leading-relaxed">
                  {industry.desc}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* ================= 7. WHY CHOOSE COOL MAX (Layout) ================= */}
        <div className="grid lg:grid-cols-2 gap-20 mb-28 items-center">
          <div className="lg:py-8">
            <h2 className="text-4xl font-bold text-slate-900 mb-8 relative inline-block tracking-tight">
               Why Choose Cool Max
               <span className="absolute -bottom-2 left-0 w-24 h-1.5 bg-blue-600 rounded-full"></span>
            </h2>
            <p className="text-lg text-slate-600 font-medium mb-10 leading-relaxed">
              Businesses across the UAE choose Cool Max for our reliability, product range, and service quality. We aim to be a long-term scent partner, not just a one-time supplier.
            </p>
            <ul className="space-y-6">
              {[
                { title: "UAE Market Experience", desc: "Deep understanding of local conditions and commercial needs" },
                { title: "Wide Product Portfolio", desc: "From home scent diffusers to large commercial scent machines" },
                { title: "Scalable Solutions", desc: "Suitable for small rooms and large HVAC-connected spaces" },
                { title: "Low Maintenance Systems", desc: "Designed for continuous, hassle-free operation" },
                { title: "Ongoing Support", desc: "Refills, service, and technical assistance" },
                { title: "Safe & Certified Products", desc: "Suitable for commercial environments" }
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-4">
                  <div className="mt-1 p-1 bg-cyan-100 rounded-full text-cyan-700 shrink-0">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                  </div>
                  <div>
                     <span className="text-slate-900 font-bold text-lg block">{item.title}</span>
                     <span className="text-slate-500 font-medium text-base">{item.desc}</span>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Trust Box - Blue Gradient Background */}
          <div className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-[2.5rem] p-12 text-white shadow-2xl relative overflow-hidden h-full flex flex-col justify-center">
            {/* Decor Circles */}
            <div className="absolute top-[-50px] right-[-50px] w-60 h-60 border-[20px] border-white/10 rounded-full"></div>
            <div className="absolute bottom-[-20px] left-[-20px] w-40 h-40 bg-white/10 rounded-full blur-xl"></div>

            <h3 className="text-3xl font-bold text-white mb-6 relative z-10 tracking-tight">Trusted by Businesses Across UAE</h3>
            <p className="text-lg text-blue-100 font-medium mb-10 leading-relaxed relative z-10">
              Cool Max solutions are trusted by hospitals, schools, corporate offices, retail chains, food service brands, and facility management companies throughout the UAE. Our clients rely on us for practical solutions that work reliably in real-world environments.
            </p>
            <div className="relative z-10">
                <button className="w-full py-4 rounded-xl bg-white text-blue-900 font-extrabold hover:bg-blue-50 transition shadow-lg text-lg uppercase tracking-wide">
                  View Our Clients
                </button>
            </div>
          </div>
        </div>

        {/* ================= 8. VISION, MISSION & VALUES ================= */}
        <div className="mb-28">
          <div className="grid md:grid-cols-2 gap-10 mb-16">
            {/* Vision - White Card */}
            <div className="bg-white rounded-[2.5rem] p-12 border border-slate-100 shadow-xl hover:shadow-2xl transition hover:-translate-y-1">
              <div className="w-16 h-16 bg-blue-100 rounded-2xl mb-6 flex items-center justify-center text-blue-600 text-2xl">hey</div>
              <h3 className="text-3xl font-bold text-slate-900 mb-6 tracking-tight">Our Vision</h3>
              <p className="text-lg text-slate-600 font-medium leading-relaxed">
                To become a trusted provider of professional, cost-effective scent and hygiene solutions that support cleaner, healthier environments for future generations.
              </p>
            </div>
            {/* Mission - Dark Blue Card */}
            <div className="bg-slate-900 rounded-[2.5rem] p-12 text-white shadow-xl hover:shadow-2xl transition hover:-translate-y-1 relative overflow-hidden">
              <div className="w-16 h-16 bg-blue-100 rounded-2xl mb-6 flex items-center justify-center text-blue-300 text-2xl relative z-10">HEY</div>
              <h3 className="text-3xl font-bold mb-6 relative z-10 tracking-tight">Our Mission</h3>
              <p className="text-lg text-blue-100 font-medium leading-relaxed relative z-10">
                To deliver reliable, eco-conscious, and high-quality home scent systems, commercial scent diffusers, and fragrance solutions with a strong focus on customer satisfaction and consistent service.
              </p>
              {/* Decor */}
              <div className="absolute bottom-0 right-0 w-64 h-64 bg-blue-600/20 rounded-full blur-3xl"></div>
            </div>
          </div>

          <div className="text-center">
            <h3 className="text-3xl font-bold text-slate-900 mb-12 tracking-tight">Our Core Values</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { title: "Innovative Thinking", desc: "We continuously improve our products and solutions to meet evolving needs.", icon: "💡" },
                { title: "Strategic Partnerships", desc: "We work closely with suppliers and clients to deliver better outcomes.", icon: "🤝" },
                { title: "Dependable Delivery", desc: "We ensure consistent product quality and reliable service.", icon: "📦" },
                { title: "Environmental Responsibility", desc: "We promote efficient, low-consumption, and eco-friendly scenting solutions.", icon: "🌿" }
              ].map((val, i) => (
                <div key={i} className="px-8 py-10 bg-white border border-blue-50 rounded-[2rem] shadow-sm hover:shadow-xl hover:shadow-blue-100/50 hover:border-blue-200 transition-all duration-300">
                  <div className="text-4xl mb-4">{val.icon}</div>
                  <h4 className="text-xl font-bold text-slate-800 mb-3">{val.title}</h4>
                  <p className="text-sm text-slate-500 font-medium leading-relaxed">{val.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ================= 9. FINAL CTA ================= */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-blue-700 to-blue-900 rounded-[3rem] p-12 md:p-24 text-center text-white shadow-2xl relative overflow-hidden"
        >
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle, #ffffff 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
          
          <div className="relative z-10 max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-6xl font-extrabold mb-8 leading-tight tracking-tighter">
              Let’s Create Better Scent <br/> 
              <span className="italic text-cyan-300">Experiences Together</span>
            </h2>
            <p className="text-blue-100 text-xl font-medium mb-12 leading-relaxed max-w-3xl mx-auto">
              Whether you are looking for a scent machine for home, a hotel scent diffuser, or a scalable scent machine for business, Cool Max is here to help. Our team will guide you in choosing the right solution, setting it up correctly, and maintaining consistent performance.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Link to="/contact">
                <button className="px-12 py-5 bg-white text-blue-900 rounded-full font-extrabold hover:bg-cyan-50 transition shadow-lg text-lg uppercase tracking-wider transform hover:-translate-y-1">
                  Contact Cool Max Today
                </button>
              </Link>
              <Link to="/products">
                <button className="px-12 py-5 border border-white/30 bg-white/10 text-white rounded-full font-bold hover:bg-white/20 transition backdrop-blur-sm text-lg uppercase tracking-wider">
                  Browse Products
                </button>
              </Link>
            </div>
            
            <p className="mt-10 text-base text-blue-200 opacity-80 font-semibold tracking-wide">
              Looking for professional scent solutions in the UAE? Start creating fresher, more welcoming spaces.
            </p>
          </div>
        </motion.div>

      </div>
    </section>
  );
}