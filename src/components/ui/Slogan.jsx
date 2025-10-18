import React from "react";
import { motion } from "framer-motion";
import "../../assets/Slogan.css";

const text = `"Naqshband Hunarmandlari – Qadriyatdan Tug‘ilgan Betakror Go‘zallik!"`;

const Slogan = () => {
  return (
    <div className="slogan-container">
      <motion.div
        className="slogan-track"
        animate={{ x: ["0%", "-100%"] }}
        transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
      >
        <span>{text}</span>
        <span>{text}</span>
        <span>{text}</span>
        <span>{text}</span>
        <span>{text}</span>
      </motion.div>
    </div>
  );
};

export default Slogan;
