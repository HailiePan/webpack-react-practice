/*
 * @Author: Hailie.Pan
 * @Date: 2024-01-16 22:18:53
 * @LastEditors: Hailie.Pan
 * @LastEditTime: 2024-01-24 15:36:54
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

    tl.to([jiantou.current], {
      duration: 8,
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
        <path fill="none" stroke="#000" d="m0,151h231.97V1h135.69v150h232.35" />
        {/* <path
          id="xianlu"
          fill="none"
          stroke="rgba(0,0,0,0)"
          d="m0,151h223.65c4.6,0,8.32-3.73,8.32-8.32V9.52c0-4.7,3.81-8.52,8.52-8.52h119.02c4.5,0,8.15,3.65,8.15,8.15v133.68c0,4.51,3.66,8.17,8.17,8.17h224.18"
        /> */}
        {/* <path
          id="xianlu"
          fill="none"
          stroke="rgba(0,0,0,0)"
          d="m0,151h215.39c9.15,0,16.58-7.42,16.58-16.58V17.77c0-9.26,7.51-16.77,16.77-16.77h102.51c9.06,0,16.41,7.35,16.41,16.41v117.17c0,9.07,7.35,16.42,16.42,16.42h215.93"
        /> */}
        <path
          id="xianlu"
          fill="none"
          stroke="rgba(0,0,0,0)"
          d="m0,151h209.78c12.26,0,22.19-9.94,22.19-22.19V23.39c0-12.37,10.02-22.39,22.39-22.39h91.28c12.16,0,22.02,9.86,22.02,22.02v105.94c0,12.17,9.87,22.04,22.04,22.04h210.31"
        />
      </svg>

      <div className={styles.jiantou} ref={jiantou}></div>
      <div className={styles.jiantou} ref={jiantou2}></div>
    </div>
  );
}
