import React, { useContext } from "react";
import portfolioContext from "../context/Context";

export default function SkillCard({ title, type }) {
  // Dynamically import all images from the assets folder
  const images = {};
  const context = require.context("../assets", false, /\.(png|jpe?g|svg)$/);
  context.keys().forEach((key) => {
    const imageName = key.replace("./", "").split(".")[0]; // Remove './' and extension
    images[imageName] = context(key);
  });
  const { theme } = useContext(portfolioContext);
  return (
    <div className="col">
      <div
        className={`card glass-effect text-${
          theme === "dark" ? "light" : "dark"
        }`}
        style={{
          height: "220px", // Reduced height
          width: "220px", // Reduced width
          overflow: "hidden", // Avoid unnecessary scrollbars
        }}
      >
        <div
          className="card-header text-center"
          style={{ fontSize: "14px", padding: "5px" }}
        >
          {title}
        </div>
        <div
          className="card-body d-flex justify-content-center align-items-center"
          style={{ height: "120px", padding: "5px" }}
        >
          {images[title] ? (
            <img
              src={images[title]}
              className="card-img-top"
              alt="..."
              style={{
                maxWidth: "100%",
                maxHeight: "100%",
                objectFit: "contain",
              }}
            />
          ) : (
            <p style={{ fontSize: "12px" }}>Image not found</p>
          )}
        </div>
        <div
          className="card-footer text-center"
          style={{ fontSize: "12px", padding: "5px" }}
        >
          {type}
        </div>
      </div>
    </div>
  );
}
