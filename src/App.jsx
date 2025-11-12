// import SkipLink from "./components/SkipLink";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Skills from "./sections/Skills";
import Education from "./sections/Education";
import Certifications from "./sections/Certifications";
import Internships from "./sections/Internships";
import Projects from "./sections/Projects";
import Contact from "./sections/Contact";
// import Experience from "./sections/Experience";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

export default function App(){
  return (
    <>
      {/* <SkipLink /> */}
      <a id="main" className="sr-only" href="#"></a>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Internships />
        <Education />
        {/* <Experience/> */}
        <Certifications />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
