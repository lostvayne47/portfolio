import React from "react";
import placeholder from "../assets/400x200.png";
export default function ProjectItem() {
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
          Card title
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
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur,
          provident officia fugit repudiandae delectus eaque iusto, vel
          necessitatibus dolore ad possimus excepturi voluptates doloremque
          officiis amet, rem consequuntur odit? Cum, facere ipsa molestias eius
          neque officia, sapiente modi eaque magni quibusdam ratione, totam ex.
          Totam doloremque cupiditate in nemo sunt.
        </p>
        <a href="#" className="btn btn-primary">
          Open Project
        </a>
      </div>
    </div>
  );
}
