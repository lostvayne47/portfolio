import React from "react";
import "./css/Home.css";
import backgroundImage from "../assets/background-image.jpeg";
export default function Home() {
  return (
    <section className="landing-section">
      {/* Left Side: Text Content */}
      <div className="text-box">
        <h1>Welcome to Our Platform</h1>
        <p>
          Experience a new way of interacting with technology. Our platform
          offers cutting-edge solutions to make your life easier and more
          efficient.
        </p>
      </div>

      {/* Right Side: Image */}
      <div className="image-box">
        <img src={backgroundImage} alt="Landing Background" />
      </div>
    </section>
  );
}
