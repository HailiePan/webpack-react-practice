/*
 * Author  hailie.pan
 * Date  2023-10-07 17:17:04
 * LastEditors  hailie.pan
 * LastEditTime  2023-10-13 18:15:32
 * Description  file content
 */
import React from "react";
import { useLocation, useSearchParams } from "react-router-dom";
import styles from "./home.less";

import coff from "@/assets/images/zz.png";
import coffee from "@/assets/images/coffee.jpg";

const Home = () => {
  let location = useLocation();
  const [searchParams, setSearchParams] = useSearchParams();

  return (
    <div className={styles?.wrapper}>
      <p>welcome to the homepage</p>
      <p>页面跳转时获取state里的参数{location.state}</p>
      <p>页面跳转时获取?号后面的参数{searchParams.get("fromPage")}</p>

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
