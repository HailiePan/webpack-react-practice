/*
 * @Author: Hailie.Pan
 * @Date: 2024-01-24 17:59:01
 * @LastEditors: Hailie.Pan
 * @LastEditTime: 2024-01-24 18:00:15
 * @Description:
 */
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

export default function StaggerAnimation() {
  const text1 = useRef();
  const text2 = useRef();
  const text3 = useRef();
  const text4 = useRef();

  useEffect(() => {
    let tl = gsap.timeline({ defaults: { duration: 1 } });
    tl.fromTo(
      [text1.current, text2.current, text3.current, text4.current],
      { y: -50, opacity: 0 },
      { y: 0, opacity: 1, stagger: 0.5, delay: 0.1 }
    );
  }, []);
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
