import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <div>
      <small className="footer">
        Created by
        <a
          href="https://www.linkedin.com/in/imen-grab-0b2562127/"
          target="_blank"
          id="name"
        >
          Imen Grab
        </a>
        <br />
        <a
          href="https://github.com/ImenGH/weather-react"
          target="_blank"
          className="github"
        >
          <i className="fab fa-github" id="source">
            {" "}
            Source Code
          </i>
        </a>
      </small>
    </div>
  );
}
