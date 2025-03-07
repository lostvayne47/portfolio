import React, { useContext } from "react";
import portfolioContext from "../context/Context";

export default function SkillCard({ title }) {
  // Dynamically import all images from the assets folder
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
    <div>
      <div
        className={`card glass-effect enlarge text-${
          theme === "dark" ? "light" : "dark"
        }`}
        style={{
          height: "220px", // Reduced height
          width: "220px", // Reduced width
          overflow: "hidden", // Avoid unnecessary scrollbars
        }}
      >
        <div
          className="border-bottom text-center"
          style={{ fontSize: "14px", padding: "5px" }}
        >
          <b>{title}</b>
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
                padding: "30px",
              }}
            />
          ) : (
            <p style={{ fontSize: "12px" }}>Image not found</p>
          )}
        </div>
      </div>
    </div>
  );
}
