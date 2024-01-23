/*
 * @Author: Hailie.Pan
 * @Date: 2024-01-14 13:41:04
 * @LastEditors: Hailie.Pan
 * @LastEditTime: 2024-01-23 18:59:08
 * @Description: 滚动动画
 */
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import styles from './index.module.less';

export default function ScrollAnimation() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: '#comparisonSection', // 元素进入视口时触发
        scroller: document.querySelector('#jhhlkl'), // 关联的滚动元素。默认是window
        start: 'center 120px', // 动画开始的位置
        end: 'bottom 300px', // 结束位置
        // markers: true,
        // end: () => "+=" + document.querySelector('#comparisonSection').offsetWidth,
        scrub: true, // 将动画的进度直接链接到滚动条
        pin: true // 钉住目标至窗口运动轨迹位置
      },
      defaults: { ease: 'none' }
    });

    tl.fromTo(document.querySelector('#afterImage'), { xPercent: 100, x: 0 }, { xPercent: 0 });
    tl.fromTo(
      document.querySelector('#afterImage img'),
      { xPercent: -100, x: 0 },
      { xPercent: 0 },
      0
    );
  }, []);

  return (
    <div className={styles.wrap} id="jhhlkl">
      <h1 className={styles.headerSection}>Scroll to see the before/after</h1>

      <section className={styles.comparisonSection} id="comparisonSection">
        <div className={`${styles.comparisonImage} ${styles.beforeImage}`}>
          <img src="https://assets.codepen.io/16327/before.jpg" alt="before" />
        </div>
        <div className={`${styles.comparisonImage} ${styles.afterImage}`} id="afterImage">
          <img src="https://assets.codepen.io/16327/after.jpg" alt="after" />
        </div>
      </section>

      <h1 className={styles.headerSection}>What did you think?</h1>
    </div>
  );
}
