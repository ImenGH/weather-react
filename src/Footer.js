import React from "react";
export default function Footer() {
  return (
    <div>
      <small className="footer">
        Created by
        <a href="https://www.linkedin.com/in/imen-grab-0b2562127/" id="name">
          Imen Grab
        </a>
        <br />
        <a
          href="https://github.com/ImenGH/Awsome-weather-app"
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
