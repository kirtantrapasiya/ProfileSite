// App.js
import "./App.css";
import Navbar from "./Home/Navbar";
import Info from "./Home/Info";
import Picture from "./Home/Picture";
import Skills from "./Skill&Technologies/Skills";
import Skilldata from "./Skill&Technologies/Skilldata";
import About from "./About/About";
import Education from "./About/Education";
import Projects from "./Project/projects";
import ProjectData from "./Project/projectdata";
import Contact from "./Contact/Contact";
import Footer from "./Footer/Footer";
import { useRef, useState } from "react";
import Image from "./Images/dbc1b1bc-a29b-474b-94db-da2813df12e6-removebg-preview__2_-removebg-preview-removebg-preview.png";
import Logo from "./Images/logo.png"; 

function App() {
  // eslint-disable-next-line 
  const [allSkills, setallSkills] = useState(Skilldata);
  // eslint-disable-next-line 
  const [allProjects, setallProjects] = useState(ProjectData);

  const scrollRef = useRef(null); // store animation frame ID

  const scrollToBottomSmooth = () => {
    const targetY = document.body.scrollHeight;
    const speed = 2;
    let isCanceled = false;

    const cancelScroll = () => {
      isCanceled = true;
      if (scrollRef.current) {
        cancelAnimationFrame(scrollRef.current);
        scrollRef.current = null;
      }
      window.removeEventListener("wheel", cancelScroll);
      window.removeEventListener("touchstart", cancelScroll);
      window.removeEventListener("mousedown", cancelScroll);
    };

    window.addEventListener("wheel", cancelScroll, { once: true });
    window.addEventListener("touchstart", cancelScroll, { once: true });
    window.addEventListener("mousedown", cancelScroll, { once: true });

    const scrollStep = () => {
      if (isCanceled) return;

      const currentY = window.scrollY;
      const step = (targetY - currentY) / speed;

      if (currentY < targetY - 2) {
        window.scrollBy(0, step);
        scrollRef.current = requestAnimationFrame(scrollStep);
      } else {
        cancelScroll();
      }
    };

    scrollStep();
  };

  return (
    <div className="min-h-screen font-sans">
      {/* Navbar */}
      <div>
        <Navbar Logo={Logo} />
      </div>

      {/* Hero Section (Info + Picture) */}
      <section id="home" className="max-w-7xl mx-auto px-4 py-12 pt-40">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-10">
          <Info onViewPortfolio={scrollToBottomSmooth} />
          <Picture Image={Image} />
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="max-w-7xl mx-auto px-4 py-12">
        <Skills skills={allSkills} />
      </section>

      {/* About & Education */}
      <section id="about" className="bg-[#2E402C] text-white w-full py-16">
        <div className="max-w-7xl mx-auto px-4 flex flex-col lg:flex-row items-start justify-between gap-8">
          <div className="w-full lg:w-1/2">
            <About />
          </div>
          <div className="w-full lg:w-1/2">
            <Education />
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="max-w-7xl mx-auto px-4 py-16">
        <Projects projects={allProjects} />
      </section>

      {/* Contact */}
      <section id="contact" className="bg-[#2E402C] py-16">
        <div className="max-w-7xl mx-auto px-4">
          <Contact />
        </div>
      </section>

      {/* Footer */}
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;