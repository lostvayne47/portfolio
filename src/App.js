import { useEffect } from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import About from "./components/About";
import Contact from "./components/Contact";
import useEntranceMotion from "./components/useEntranceMotion";
function App() {
  useEntranceMotion();
  useEffect(() => {
    const legacy = {
      "/projects": "projects",
      "/experience": "experience",
      "/skills": "skills",
      "/certifications": "certifications",
    };
    const target = legacy[window.location.pathname.replace(/\/$/, "")];
    if (target) {
      window.history.replaceState(null, "", "/#" + target);
      document.getElementById(target)?.scrollIntoView({ behavior: "instant" });
    }
  }, []);
  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <Navbar />
      <main id="main">
        <Home />
        <Projects />
        <Experience />
        <Skills />
        <About />
      </main>
      <Contact />
    </>
  );
}
export default App;
