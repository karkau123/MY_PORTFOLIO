import { useEffect } from "react";
import Navbar from "./sections/Navbar";
import Hero from "./sections/Hero";
import Projects from "./sections/Projects";
import Experiences from "./sections/Experiences";
import Blogs from "./sections/Blogs";
import About from "./sections/About";
import Contact from "./sections/Contact";
import Footer from "./sections/Footer";

export default function App() {
  useEffect(() => {
    const target = document.getElementById(window.location.hash.slice(1));
    if (target?.tagName !== "DETAILS") target?.scrollIntoView();
  }, []);

  return (
    <>
      <a className="skip-link" href="#main-content">Skip to content</a>
      <Navbar />
      <main id="main-content" tabIndex={-1}>
        <Hero />
        <Projects />
        <Experiences />
        <Blogs />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
