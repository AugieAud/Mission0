import React from "react";
import styles from "./HeroSection.module.css";

function HeroSection() {
  return (
    <div className={styles.heroBanner}>
      <h1>
        Leading the Way in Marketing
        <br />
        Strategy and Innovation
      </h1>
      <div className={styles.searchBar}>
        <div className={styles.searchBarContainer}>
          <input type="text"></input>
          <button>Search</button>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
