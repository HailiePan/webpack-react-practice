/*
 * @Author: Hailie.Pan
 * @Date: 2024-01-24 17:59:01
 * @LastEditors: Hailie.Pan
 * @LastEditTime: 2024-01-24 17:59:07
 * @Description:
 */
import React from 'react';

export default function StaggerAnimation() {
  return (
    <div>
      <div style={{ display: 'flex', marginTop: '50px' }}>
        <div className={styles.text} ref={text1}>
          G
        </div>
        <div className={styles.text} ref={text2}>
          S
        </div>
        <div className={styles.text} ref={text3}>
          A
        </div>
        <div className={styles.text} ref={text4}>
          P
        </div>
      </div>
    </div>
  );
}
