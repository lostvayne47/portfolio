import React from "react";
import "./css/Home.css";
import profilePhoto from "../assets/profile-photo.jpeg";
import { ABOUT_ME_TITLE, ABOUT_ME_DATA } from "../Constants";
import ParticleCanvas from "./ParticleCanvas.js";
export default function Home() {
  return (
    <>
      <ParticleCanvas />
      <div className="container d-flex justify-content-center align-items-center">
        <section className="landing-section glass-effect">
          {/* Left Side: Text Content */}
          <div className="text-box">
            <h1 className="my-4">{ABOUT_ME_TITLE}</h1>
          </div>
          {/* Right Side: Image */}
          <div className="image-box" loading="lazy">
            <img src={profilePhoto} alt="Landing Background" />
          </div>
          <div className="text-box">
            <p className="my-4">{ABOUT_ME_DATA}</p>
          </div>
        </section>
      </div>
    </>
  );
}
