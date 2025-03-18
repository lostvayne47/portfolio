import React, { useContext } from "react";
import "./css/Home.css";
import profilePhotoLight from "../assets/home-assets-light.png";
import profilePhotoDark from "../assets/home-assets-dark.png";

import { ABOUT_ME_TITLE, ABOUT_ME_DATA } from "../Constants";
import ParticleCanvas from "./ParticleCanvas.js";
import portfolioContext from "../context/Context.js";

export default function Home() {
  const theme = useContext(portfolioContext);
  return (
    <>
      <ParticleCanvas />
      <div className="container d-flex justify-content-center align-items-center">
        <section className="landing-section glass-effect">
          {/* Left Side: Text Content */}
          <div className="text-box">
            <div className="my-4">
              <h1 style={{ display: "inline" }}>Hi, I’m </h1>
              <h1 style={{ display: "inline", color: "var(--name-colour)" }}>
                {ABOUT_ME_TITLE}
              </h1>
            </div>

            <p className="my-4">{ABOUT_ME_DATA}</p>
            <br />
          </div>
          {/* Right Side: Image */}
          <div className="image-box" loading="lazy">
            <img
              src={theme === "dark" ? profilePhotoDark : profilePhotoLight}
              alt="Landing Background"
            />
          </div>
        </section>
      </div>
    </>
  );
}
