/*
 * Author  hailie.pan
 * Date  2023-10-07 17:17:04
 * LastEditors  hailie.pan
 * LastEditTime  2023-10-13 15:26:34
 * Description  file content
 */
import React from "react";
import { useLocation } from "react-router-dom";
import styles from "./home.less";

import coff from "@/assets/images/zz.png";
import coffee from "@/assets/images/coffee.jpg";
console.log("styles", styles);
const Home = () => {
  let location = useLocation();
  return (
    <div className={styles?.wrapper}>
      <p>welcome to the homepage</p>
      <p>这是来自{location.state}</p>
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
