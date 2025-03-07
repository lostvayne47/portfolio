import React, { useContext } from "react";
import certifications from "./certificates.json";
import { ExternalLink } from "lucide-react";
import portfolioContext from "../context/Context";

export default function Certifications() {
  const images = Object.fromEntries(
    require
      .context("../assets", false, /\.(png|jpe?g|svg)$/)
      .keys()
      .map((key) => {
        const fileName = key.replace(/^.\//, ""); // Remove './'
        const nameWithoutExt = fileName.slice(0, fileName.lastIndexOf(".")); // Remove extension safely
        return [
          nameWithoutExt,
          require.context("../assets", false, /\.(png|jpe?g|svg)$/)(key),
        ];
      })
  );
  const { theme } = useContext(portfolioContext);
  return (
    <div className="container">
      <div id="carouselExampleCaptions" className="carousel slide">
        <div className="carousel-indicators">
          {certifications.map((_, index) => (
            <button
              key={index}
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to={index}
              className={index === 0 ? "active" : ""}
              aria-current={index === 0 ? "true" : undefined}
              aria-label={`Slide ${index + 1}`}
            ></button>
          ))}
        </div>
        <div className="carousel-inner">
          {certifications.map((c, index) => (
            <div
              className={`carousel-item ${index === 0 ? "active" : ""}`}
              key={index}
            >
              <img
                src={images[c.imgName]}
                alt="..."
                style={{
                  width: "100%",
                  height: "auto",
                  maxHeight: "600px",
                  objectFit: "contain",
                }}
              />
              <div
                className="carousel-caption d-none d-md-block"
                style={{
                  color: "black",
                  textShadow: "none",
                }}
              >
                <h5>{c.name || "Certification"}</h5>
                <p style={{ display: "inline" }}>
                  {c.caption || "Some placeholder content for the slide."}
                </p>
                {c.link ? (
                  <a href={c.link} target="_blank" rel="noreferrer">
                    <ExternalLink />
                  </a>
                ) : null}
              </div>
            </div>
          ))}
        </div>

        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
}
