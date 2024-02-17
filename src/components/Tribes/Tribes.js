import React from "react";
import styles from "./Tribes.module.css";
import FlipCard from "./flipCard/FlipCard";
import {cards} from'@/constants/constants';
function Tribes() {
  return (
    <div className={styles.container}>
      <div className={styles.leftContainer}>
        <h2></h2>
        <div className={styles.cardContainer} >
            
            
        </div>
      </div>
      <div className={styles.rightContainer}>
        <h2></h2>
        <div className={styles.spanContainer}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </div>
  );
}

export default Tibes;
