"use client";
import { useEffect } from "react";
import About from "./components/About";
import CompletedProjects from "./components/CompletedProjects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import HireMeNow from "./components/HireMeNow";
import MyRecentProjects from "./components/MyRecentProjects";
import Process from "./components/Process";
import Services from "./components/services";
import WhyChooseMe from "./components/WhyChooseMe";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Home() {
  useEffect(() => {
    AOS.init({
      duration: 1200,
      offset: 200,
      once: true,
    });
  }, []);
  return (
    <div>
      <Hero />
      <About />
      <Services />
      <WhyChooseMe />
      <Process />
      <MyRecentProjects />
      <CompletedProjects />
      <HireMeNow />
      <Contact />
      <Footer />
    </div>
  );
}
