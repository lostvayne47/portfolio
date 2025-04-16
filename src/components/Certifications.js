import React, { useContext } from "react";
import certifications from "./certificates.json";
import { FaExternalLinkAlt } from "react-icons/fa";
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
  function goToSlide(index) {
    const buttonId = `#carousel-button-${index}`;
    let carouselButton = document.querySelector(buttonId);
    carouselButton.click();
  }
  const { theme } = useContext(portfolioContext);
  return (
    <div className="container h-100 d-flex justify-content-evenly flex-wrap m-2">
      <div className="w-30 scroll-container" style={{ height: "100%" }}>
        <h2>Certificates</h2>
        <div
          style={{
            height: "100%",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <ul
            style={{
              height: "100%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-evenly",
              paddingLeft: "20px",
              cursor: "pointer",
            }}
          >
            {certifications.map((c, index) => (
              <li
                className="enlarge"
                key={index}
                onClick={() => goToSlide(index)}
              >
                {c.name}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="carousel-container container d-flex justify-content-center align-items-center">
        <div
          id="carouselExampleCaptions"
          className="carousel slide p-3"
          data-bs-theme="dark"
        >
          <div className="carousel-indicators">
            {certifications.map((_, index) => (
              <button
                id={`carousel-button-${index}`}
                key={index}
                type="button"
                data-bs-target="#carouselExampleCaptions"
                data-bs-slide-to={index}
                className={index === 0 ? "active" : ""}
                aria-current={index === 0 ? "true" : undefined}
                aria-label={`Slide ${index + 1}`}
                style={{ backgroundColor: "var(--primary-text)" }}
              ></button>
            ))}
          </div>
          <div className="carousel-inner">
            {certifications.map((c, index) => (
              <div
                className={`carousel-item ${index === 0 ? "active" : ""}`}
                key={index}
              >
                <div
                  className={`text-center my-1 text-${
                    theme === "dark" ? "light" : "dark"
                  }`}
                >
                  <h5>{c.name || "Certification"}</h5>
                  <p style={{ display: "inline", marginRight: "10px" }}>
                    {c.caption || "Some placeholder content for the slide."}
                  </p>
                  {c.link ? (
                    <a href={c.link} target="_blank" rel="noreferrer">
                      <FaExternalLinkAlt size={18} />
                    </a>
                  ) : null}
                </div>
                <img
                  src={images[c.imgName]}
                  alt="..."
                  style={{
                    width: "100%",
                    height: "auto",
                    maxHeight: "500px",
                    objectFit: "contain",
                  }}
                />
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
              className="carousel-control-prev-icon highlight"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next "
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon highlight"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </div>
  );
}
