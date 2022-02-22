import React from "react";
import PropTypes from "prop-types";

import styles from "../styles/AboutMe.module.css";
import myPic from "../assets/me2020.jpeg";

export default function AboutMe({
  name = "your name",
  food = "your food",
  number = 1,
}) {
  return (
    <div className={styles.box}>
      <img className={styles.box__image} src={myPic} alt="Me" />
      <h4>Name: {name}</h4>
      <h4>Loves: {food}</h4>
      <h4>Favorite Number: {number}</h4>
    </div>
  );
}

AboutMe.propTypes = {
  name: PropTypes.string,
  food: PropTypes.string,
  number: PropTypes.number,
};
