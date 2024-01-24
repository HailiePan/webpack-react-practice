/*
 * @Author: Hailie.Pan
 * @Date: 2024-01-16 22:18:53
 * @LastEditors: Hailie.Pan
 * @LastEditTime: 2024-01-24 15:27:40
 * @Description:
 */
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { MotionPathPlugin, MotionPathHelper } from 'gsap/all';
import styles from './index.module.less';

export default function ImitateElectricity() {
  const jiantou = useRef();
  const jiantou2 = useRef();

  useEffect(() => {
    // 注册插件
    gsap.registerPlugin(MotionPathPlugin);

    const tl = gsap.timeline();

    gsap.set([jiantou.current, jiantou2.current], { scale: 0.5, autoAlpha: 1 });

    tl.to([jiantou.current, jiantou2.current], {
      duration: 5,
      ease: 'none',
      immediateRender: true,
      repeat: -1, // 重复
      stagger: 2, // 间隔时间
      motionPath: {
        path: '#xianlu', // 路径
        align: '#xianlu', // 对齐到路径
        alignOrigin: [0.5, 0.5], // 对齐原点
        autoRotate: 90 // 沿路径方向旋转角度
        // offsetX: -20,
        // offsetY: 0,
      }
    });
    // gsap.registerPlugin(MotionPathPlugin, MotionPathHelper)
  }, []);

  return (
    <div>
      <h1>基于gsap实现电流效果</h1>
      {/* svg路径必须是path */}
      <svg class={styles.motionPath} viewBox="0 0 600 152">
        <path id="xianlu" fill="none" stroke="#000" d="m0,151h231.97V1h135.69v150h232.35" />
      </svg>

      <div className={styles.jiantou} ref={jiantou}></div>
      <div className={styles.jiantou} ref={jiantou2}></div>
    </div>
  );
}
