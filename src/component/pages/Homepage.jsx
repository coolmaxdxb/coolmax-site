import React, { lazy, Suspense } from "react";
import HeroSection from "../hero";
import Product1 from "../../component/pages/Product1";

// Lazy load below-the-fold sections
const Clientsscroll = lazy(() => import("../clientsscroll"));
const About1 = lazy(() => import("../pages/About1"));
const Solution1 = lazy(() => import("../pages/Solution1"));
const Industries1 = lazy(() => import("../../component/pages/industries1"));
const Blog1 = lazy(() => import("../pages/Blog1"));
const Clear1 = lazy(() => import("../pages/clear1"));
const Testimonials = lazy(() => import("../Testimonials"));
const Contact1 = lazy(() => import("../../component/pages/contact1"));

export default function Homepage() {
  return (
    <main>
      {/* Above the fold: render immediately */}
      <HeroSection />
      <Product1 />

      {/* Below the fold: defer rendering */}
      <Suspense fallback={null}>
        <Clientsscroll />
        <About1 />
        <Solution1 />
        <Industries1 />
        <Blog1 />
        <Clear1 />
        <Testimonials />
        <Contact1 />
      </Suspense>
    </main>
  );
}