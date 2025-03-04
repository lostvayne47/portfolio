import React from "react";
import "./css/Home.css";
import profilePhoto from "../assets/profile-photo.jpeg";
import { ABOUT_ME_TITLE, ABOUT_ME_DATA } from "../Constants";
import ParticleCanvas from "./ParticleCanvas.js";
export default function Home() {
  return (
    <>
      <ParticleCanvas />
      <section className="landing-section">
        {/* Left Side: Text Content */}
        <div className="text-box">
          <h1>{ABOUT_ME_TITLE}</h1>
          <p>{ABOUT_ME_DATA}</p>
        </div>

        {/* Right Side: Image */}
        <div className="image-box" loading="lazy">
          <img src={profilePhoto} alt="Landing Background" />
        </div>
      </section>
    </>
  );
}
