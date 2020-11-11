import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <div>
      <small className="footer">
        <div className="name">
          Created by{" "}
          <a href="https://www.linkedin.com/in/imen-grab-0b2562127/">
            Imen Grab
          </a>
        </div>
        <div>
          <a href="https://github.com/ImenGH/weather-react">
            <i className="fab fa-github source"> Source Code</i>
          </a>
        </div>
      </small>
    </div>
  );
}
