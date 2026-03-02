import React from "react";
import { Helmet } from "react-helmet-async";
import HeroSection from "../hero"; 
import Clientsscroll from "../clientsscroll";
import About1 from "../pages/About1";
import Solution1 from "../pages/Solution1";
import Product1 from "../../component/pages/Product1";
// import AromaOils1 from "../pages/AromaOils1";
import Industries1 from "../../component/pages/industries1";
import Blog1 from "../pages/Blog1";
import Testimonials from "../Testimonials"; 
import Contact1 from "../../component/pages/contact1"; 
import Clear1 from "../pages/clear1";


export default function Homepage() {
  return (
    <div>
      {/* ================= SEO METADATA ================= */}
      <Helmet>
        <title>Cool Max | Premium Scenting Solutions for Homes & Businesses</title>
        <meta name="description" content="Cool Max provides premium scent diffusers and fragrance solutions for homes, hotels, offices, retail spaces, and HVAC systems across UAE & Qatar." />
        <link rel="canonical" href="https://www.coolmaxscent.com/" />
      </Helmet>

      {/* Note: You usually don't need Nav/Footer here if they are already in App.js */}
      <HeroSection />
      <Product1 />
      <Clientsscroll />
      <About1 />
      <Solution1/>
      {/* <AromaOils1 /> */}
      <Industries1/>
      <Blog1 />
      <Clear1 />
      <Testimonials />
      <Contact1 />
    </div>
  );
}