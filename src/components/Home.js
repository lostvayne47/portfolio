import React, { useContext } from "react";
import { Link } from "react-router-dom";
import "./css/Home.css";
import profilePhotoLight from "../assets/home-assets-light.png";
import profilePhotoDark from "../assets/home-assets-dark.png";

import { ABOUT_ME_TITLE, ABOUT_ME_DATA } from "../Constants";
import portfolioContext from "../context/Context.js";
import TextPulse from "./TextPulse.js";

export default function Home() {
  const { theme } = useContext(portfolioContext);
  const profilePhoto = theme === "dark" ? profilePhotoDark : profilePhotoLight;

  return (
    <main className="home-shell">
      <section className="landing-section">
        <div className="hero-copy">
          <p className="hero-kicker">Software Engineer / Full Stack Builder</p>
          <h1>
            Hi, I'm <TextPulse displayedText={ABOUT_ME_TITLE} />
          </h1>
          <p className="hero-summary">{ABOUT_ME_DATA}</p>

          <div className="hero-actions" aria-label="Portfolio shortcuts">
            <Link className="hero-button primary" to="/projects">
              View Work
            </Link>
            <Link className="hero-button secondary" to="/experience">
              Experience
            </Link>
          </div>

          <div className="hero-stack" aria-label="Core strengths">
            <span>React</span>
            <span>Java</span>
            <span>Spring Boot</span>
            <span>Cloud</span>
          </div>
        </div>

        <div className="hero-visual" aria-hidden="true">
          <div className="portrait-frame">
            <img src={profilePhoto} alt="" loading="eager" />
          </div>
        </div>
      </section>
    </main>
  );
}
