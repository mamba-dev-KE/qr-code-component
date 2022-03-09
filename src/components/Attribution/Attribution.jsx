import React from "react";
import "./Attribution.scss";
import { motion } from "framer-motion";

const Attribution = ({ isDark }) => {
  const techVariants = {
    hidden: {
      y: -300,
      opacity: 0.2,
      rotate: 0,
    },
    visible: {
      y: 0,
      opacity: 1,
    },
  };

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
          <motion.span
            variants={techVariants}
            initial="hidden"
            animate="visible"
            whileHover="hover"
            role="img"
            aria-label="tech"
            className="tech"
          >
            💻 🖥
          </motion.span>
        </a>
      </p>
    </div>
  );
};

export default Attribution;
