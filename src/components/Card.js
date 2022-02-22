import React from "react";
import PropTypes from "prop-types";

import styles from "../styles/Card.module.css";
import AboutMe from "./AboutMe";
import QuoteBox from "./QuoteBox";

export default function Card({ ronism, getQuote }) {
  return (
    <div className={styles.card}>
      <AboutMe name="Dwayne Belcon" food="Burgers" number="2" />
      <QuoteBox ronism={ronism} getQuote={getQuote} />
    </div>
  );
}

Card.propTypes = {
  ronism: PropTypes.string,
  getQuote: PropTypes.func.isRequired,
};
