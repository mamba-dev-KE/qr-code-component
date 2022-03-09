import React from "react";
import "./Attribution.scss";

const Attribution = ({ isDark }) => {
  return (
    <div className="attribution">
      <p className="attribution__designer">
        <a
          href="https://www.frontendmentor.io?ref=challenge"
          target="_blank"
          rel="noreferrer"
          className={
            isDark
              ? "attribution__link attribution__link--dark"
              : "attribution__link"
          }
        >
          Designed By: Frontend Mentor
        </a>
      </p>
      <p className="attribution__programmer">
        <a
          href="https://github.com/mamba-dev-KE"
          target="_blank"
          rel="noreferrer"
          className={
            isDark
              ? "attribution__link attribution__link--dark"
              : "attribution__link"
          }
        >
          Coded By: Joseph Maramba Weyao
          <span role="img" aria-label="tech">
            💻 🖥
          </span>
        </a>
      </p>
    </div>
  );
};

export default Attribution;
