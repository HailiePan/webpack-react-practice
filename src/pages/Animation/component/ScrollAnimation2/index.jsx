/*
 * @Author: Hailie.Pan
 * @Date: 2024-01-14 14:25:52
 * @LastEditors: Hailie.Pan
 * @LastEditTime: 2024-01-23 19:00:46
 * @Description:
 */
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger.js';
import styles from './index.module.less';

export default function ScrollAnimation2() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    // 绿色方块
    gsap.to(document.getElementById('awdsed'), {
      rotation: 360,
      x: 300,
      duration: 1,
      scrollTrigger: {
        trigger: document.getElementById('awdsed'),
        scroller: document.getElementById('scrollWrap'),
        scrub: 2
        // markers: true,
      },
      onComplete: () => console.log('xxx'),
      onUpdate: () => console.log('ccc')
    });
  }, []);

  return (
    <div className={styles.wrap} id="scrollWrap">
      <div className={styles.green} id="awdsed"></div>
      <div style={{ height: '500px' }} />
    </div>
  );
}
