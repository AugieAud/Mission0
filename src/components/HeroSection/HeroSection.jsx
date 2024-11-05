import React from "react";
import styles from "./HeroSection.module.css";

function HeroSection() {
  return (
    <div className={styles.heroBanner}>
      <h1>Marketing made easy</h1>
      <div className={styles.searchBar}>
        <input type="text" placeholder="Search..."></input>
        <button>Search</button>
      </div>
    </div>
  );
}

export default HeroSection;
