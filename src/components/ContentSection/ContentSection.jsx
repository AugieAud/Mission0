import React from "react";
import styles from "./ContentSection.module.css";
import colorful from "../../assets/colorfulfield.avif";
import coast from "../../assets/coast.jpg";
import flowers from "../../assets/flowers mountain.jpg";

function ContentSetion() {
  return (
    <section className={styles.content}>
      <div className={styles.card}>
        <img
          src={colorful}
          alt="guy and dog wilderness"
          className={styles.image}
        ></img>
        <h3>Lorem ipsum</h3>
        <p>Est Venenatis</p>
      </div>
      <div className={styles.card}>
        <img src={coast} alt="coast" className={styles.image}></img>
        <h3>Lorem ipsum</h3>
        <p>Est Venenatis</p>
      </div>
      <div className={styles.card}>
        <img
          src={flowers}
          alt="flowers and mountain"
          className={styles.image}
        ></img>
        <h3>Lorem ipsum</h3>
        <p>Est Venenatis</p>
      </div>
    </section>
  );
}

export default ContentSetion;
