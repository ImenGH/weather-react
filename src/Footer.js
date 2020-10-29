import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <div>
      <small className="footer">
        <div className="name">
          Created by
          <a
            href="https://www.linkedin.com/in/imen-grab-0b2562127/"
            target="_blank"
          >
            Imen Grab
          </a>
        </div>
        <div className="github">
          <a href="https://github.com/ImenGH/weather-react" target="_blank">
            <i className="fab fa-github" className="source">
              {" "}
              Source Code
            </i>
          </a>
        </div>
      </small>
    </div>
  );
}
