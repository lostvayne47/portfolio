import React, { useContext } from "react";
import portfolioContext from "../context/Context.js";

export default function Navbar() {
  const { defaultState, setDefaultState } = useContext(portfolioContext);
  return (
    <nav
      className="navbar navbar-expand-lg bg-body-tertiary fixed-top"
      data-bs-theme="dark"
    >
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
          Portfolio
        </a>
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
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="/">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">
                About me
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">
                Experience
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">
                Projects
              </a>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="/"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Technical
              </a>
              <ul className="dropdown-menu">
                <li>
                  <a className="dropdown-item" href="/">
                    Skills
                  </a>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <a className="dropdown-item" href="/">
                    Certifications
                  </a>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <a className="dropdown-item" href="/">
                    Achievements
                  </a>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
