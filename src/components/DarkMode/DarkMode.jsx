import React from "react";
import "./DarkMode.scss";
import { FaMoon, FaSun } from "react-icons/fa";
import { motion } from "framer-motion";

const DarkMode = ({ isDark, toggleDarkMode }) => {
  //animate dark mode icons
  const darkModeVariant = {
    hidden: {
      scale: 1,
      y: -200,
      opacity: 0.3,
      rotate: 0
    },
    visible: {
      y: 0,
      opacity: 1,
      rotate: -10,
      transition: {
        delay: 3
      }
    },
    hover: {
      scale: 1.5,
      rotate: -20,
      transition: {
        duration: 0.5,
        ease: "easeInOut"
      }
    }
  };
  return (
    <motion.div
      variants={darkModeVariant}
      initial="hidden"
      animate="visible"
      whileHover="hover"
      className="dark-mode"
      onClick={toggleDarkMode}
    >
      {!isDark ? (
        <FaMoon className="dark-mode__icon" />
      ) : (
        <FaSun className="dark-mode__icon" />
      )}
    </motion.div>
  );
};

export default DarkMode;
