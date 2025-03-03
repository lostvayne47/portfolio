import React, { useContext } from "react";
import portfolioContext from "../context/Context.js";
import { useLocation, Link } from "react-router-dom";

export default function Navbar() {
  const { defaultState } = useContext(portfolioContext);
  console.log(defaultState);
  const location = useLocation();
  return (
    <nav
      className="navbar navbar-expand-lg bg-body-tertiary sticky-top"
      data-bs-theme="dark"
    >
      <div className="container-fluid">
        <Link
          className={`navbar-brand ${
            location.pathname === "/" ? "active" : ""
          }`}
          to="/"
        >
          Portfolio
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item ">
              <Link
                className={`nav-link ${
                  location.pathname === "/about" ? "active" : ""
                }`}
                to="/about"
              >
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className={`nav-link ${
                  location.pathname === "/experience" ? "active" : ""
                }`}
                to="/experience"
              >
                Experience
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className={`nav-link ${
                  location.pathname === "/projects" ? "active" : ""
                }`}
                to="/projects"
              >
                Projects
              </Link>
            </li>
            <li className="nav-item dropdown">
              <Link
                className={`nav-link dropdown-toggle${
                  location.pathname === "/technical" ? "active" : ""
                }`}
                to="/technical"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Technical
              </Link>
              <ul className="dropdown-menu">
                <li>
                  <Link
                    className={`dropdown-item ${
                      location.pathname === "/skills" ? "active" : ""
                    }`}
                    to="/skills"
                  >
                    Skills
                  </Link>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <Link
                    className={`dropdown-item ${
                      location.pathname === "/certifications" ? "active" : ""
                    }`}
                    to="/certifications"
                  >
                    Certifications
                  </Link>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <Link
                    className={`dropdown-item ${
                      location.pathname === "/achievements" ? "active" : ""
                    }`}
                    to="/achievements"
                  >
                    Achievements
                  </Link>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <Link
                className={`nav-link ${
                  location.pathname === "/contact" ? "active" : ""
                }`}
                to="/contact"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
