/*
 * Author  hailie.pan
 * Date  2023-10-07 17:17:04
 * LastEditors  hailie.pan
 * LastEditTime  2023-10-08 15:25:24
 * Description  file content
 */
import React from "react";
import styles from "./home.less";

import coff from "@/assets/images/zz.png";
import coffee from "@/assets/images/coffee.jpg";

const Home = () => {
  return (
    <div className={styles?.wrapper}>
      <div className={styles.box}>
        <div className={styles.item}></div>
        <div className={styles.item}></div>
        <div className={styles.item}></div>
        <div className={styles.item}></div>
      </div>
      <img src={coff} alt="" />
      <img src={coffee} alt="" />
    </div>
  );
};

export default Home;
