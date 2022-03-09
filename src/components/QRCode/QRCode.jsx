import React from "react";
import "./QRCode.scss";
import qr from "../../assets/qr-code.png";
import { motion } from "framer-motion";
import { Attribution } from "..";

const QRCode = ({ isDark }) => {
  // animate the whole qr article
  const qrVariant = {
    hidden: {
      opacity: 0,
      y: -400
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        staggerChildren: 1
      }
    },
    hover: {
      scale: 1.08
    }
  };

  // animate the children of qr
  const itemsVariant = {
    hidden: {
      opacity: 0,
      y: 10
    },
    visible: {
      opacity: 1,
      y: 0
    }
  };

  // animate the image
  const imageVariant = {
    hidden: {
      x: -1000
    },
    visible: {
      x: 0,
      transition: {
        type: "spring",
        stiffness: 70,
        duration: 0.75
      }
    }
  };

  return (
    <>
      <motion.article
        variants={qrVariant}
        initial="hidden"
        animate="visible"
        whileHover="hover"
        className={isDark ? "qr qr--dark container" : "qr container"}
        drag
        dragConstraints={{ top: 0, left: 0, right: 0, bottom: 0 }}
      >
        <motion.img
          variants={imageVariant}
          src={qr}
          alt="QR code"
          className="qr__image"
        />
        <motion.h1
          variants={itemsVariant}
          className={isDark ? "qr__title qr__title--dark" : "qr__title"}
        >
          Improve your front-end skills by building projects{" "}
        </motion.h1>
        <motion.p
          variants={itemsVariant}
          className={isDark ? "qr__text qr__text--dark" : "qr__text"}
        >
          Scan the QR code to visit Frontend Mentor and take your coding skills
          to the next level
        </motion.p>
      </motion.article>
      <Attribution isDark={isDark} />
    </>
  );
};

export default QRCode;
