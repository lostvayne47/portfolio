import React from "react";
import placeholder from "../assets/400x200.png";
export default function ProjectItem() {
  return (
    <div className="card" style={{ width: "18rem", padding: "15px" }}>
      <img src={placeholder} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <p className="card-text">
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </p>
        <a href="#" className="btn btn-primary">
          Go somewhere
        </a>
      </div>
    </div>
  );
}
