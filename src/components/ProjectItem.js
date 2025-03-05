import React from "react";
import placeholder from "../assets/400x200.png";
import { Github, Globe } from "lucide-react";
export default function ProjectItem({ data }) {
  return (
    <div className="card" style={{ width: "18rem", padding: "15px" }}>
      <img
        src={placeholder}
        className="card-img-top"
        alt="..."
        style={{ width: "100%", height: "30%" }}
      />
      <div className="card-body">
        <h5
          className="card-title"
          style={{ overflow: "hidden", height: "3rem" }}
        >
          {data?.name?.split("-").join(" ")}
        </h5>
        <p
          className="card-text"
          style={{
            overflow: "hidden",
            height: "7rem",
            textAlign: "justify",
            fontSize: "15px",
          }}
        >
          {data?.description}
        </p>
        <a href={data.url} className="btn btn-primary">
          <Github size={20} />
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
      <div className="card-footer">
        <small className="text-body-secondary">{data?.langauges}</small>
      </div>
    </div>
  );
}
