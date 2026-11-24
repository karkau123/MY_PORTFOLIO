import Navbar from "./sections/Navbar";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Projects from "./sections/Projects";
import Experiences from "./sections/Experiences";
import Testimonial from "./sections/Testimonial";
import Blogs from "./sections/Blogs";
import Contact from "./sections/Contact";
import Footer from "./sections/Footer";
import PortfolioGuide from "./components/PortfolioGuide";

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <div className="container mx-auto max-w-7xl">
          <About />
          <Projects />
          <Experiences />
          <Testimonial />
          <Blogs />
          <Contact />
        </div>
      </main>
      <div className="container mx-auto max-w-7xl">
        <Footer />
      </div>
      <PortfolioGuide />
    </>
  );
}
