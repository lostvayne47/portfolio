import React, { useContext } from "react";
import { Globe } from "lucide-react";
import { FaGithub } from "react-icons/fa6";
import portfolioContext from "../context/Context";
export default function ProjectItem({ data }) {
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
  function capitalizeWords(str) {
    return str
      .split(" ")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  }

  const imgName = data.name.toLowerCase();
  const projectName = capitalizeWords(data?.name?.split("-").join(" "));

  const { theme } = useContext(portfolioContext);
  return (
    <div
      className={`card glass-effect text-${
        theme === "dark" ? "light" : "dark"
      }`}
      style={{ width: "20rem", padding: "15px" }}
    >
      <img
        src={images[imgName] || images["techPlaceholder"]}
        className="card-img-top"
        alt="..."
        style={{
          width: "100%", // Ensures it fits within its container
          height: "40%",
          maxWidth: "100%", // Prevents overflow
          objectFit: "cover", // Ensures it fills the space without distortion
        }}
        loading="lazy"
      />
      <div className="card-body">
        <h5
          className="card-title"
          style={{ overflow: "hidden", height: "3rem" }}
        >
          {projectName}
        </h5>
        <p
          className="card-text"
          title={data?.description} // Tooltip on hover
          style={{
            overflow: "hidden",
            height: "10rem",
            textOverflow: "ellipsis",
            display: "-webkit-box",
            WebkitBoxOrient: "vertical",
            WebkitLineClamp: 4, // Adjust based on need
            textAlign: "justify",
            fontSize: "15px",
          }}
        >
          {data?.description}
        </p>

        <a
          href={data.url}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-primary"
        >
          <FaGithub size={20} />
        </a>
        {data?.homepage ? (
          // eslint-disable-next-line
          <a
            href={data?.homepage}
            target="_blank"
            className=" mx-3 btn btn-success"
          >
            <Globe size={20} />
          </a>
        ) : null}
      </div>
      <div className="border-top">
        <small className="dt">{data?.languages || "Languages"}</small>
      </div>
    </div>
  );
}
