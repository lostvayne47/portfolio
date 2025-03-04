import { BrowserRouter, Routes, Route } from "react-router-dom";
import States from "./context/States.js";
import Navbar from "./components/Navbar";
import Experience from "./components/Experience.js";
import Projects from "./components/Projects.js";
import Contact from "./components/Contact.js";
import Technical from "./components/Technical.js";
import Home from "./components/Home.js";
import Skills from "./components/Skills.js";
import Achievements from "./components/Achievements.js";
import Certifications from "./components/Certifications.js";

function App() {
  return (
    <>
      <States>
        <BrowserRouter>
          <Navbar />
          <div
            className="d-flex justify-content-center align-items-center"
            style={{ marginTop: "70px", height: "90vh" }}
          >
            <Routes>
              <Route path="/" element={<Home />}></Route>
              <Route path="/experience" element={<Experience />}></Route>
              <Route path="/projects" element={<Projects />}></Route>
              <Route path="/contact" element={<Contact />}></Route>
              <Route path="/technical" element={<Technical />}></Route>
              <Route path="/skills" element={<Skills />}></Route>
              <Route
                path="/certifications"
                element={<Certifications />}
              ></Route>
              <Route path="/achievements" element={<Achievements />}></Route>
            </Routes>
          </div>
        </BrowserRouter>
      </States>
    </>
  );
}

export default App;
