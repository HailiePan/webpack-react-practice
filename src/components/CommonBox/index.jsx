/*
 * Author  hailie.pan
 * Date  2023-10-26 11:29:47
 * LastEditors  hailie.pan
 * LastEditTime  2023-11-02 17:37:28
 * Description 封装统一使用的框
 */
import React from "react";
import styles from "./index.less";

export default function CommonBox(props) {
  const { style = {}, children } = props;
  return (
    <div className={`${styles.wrap} ${props.className}`} style={{ ...style }}>
      {/* 带圆点的线 */}
      <div className={styles.topLine} />
      <div className={styles.bottomLine} />
      <div className={styles.leftLine} />
      <div className={styles.rightLine} />

      {/* 不带圆点的线 */}
      <div className={styles.topLeftLine} />
      <div className={styles.topRightLine} />

      <div className={styles.bottomLeftLine} />
      <div className={styles.bottomRightLine} />
      {/* 左右 */}
      <div className={styles.leftTopLine} />
      <div className={styles.leftBottomLine} />

      <div className={styles.rightTopLine} />
      <div className={styles.rightBottomLine} />

      {/* 四个角 */}
      <div className={styles.leftTopJiao} />
      <div className={styles.leftBottomJiao} />
      <div className={styles.rightTopJiao} />
      <div className={styles.rightBottomJiao} />

      <div className={styles.content}>{children}</div>
    </div>
  );
}
