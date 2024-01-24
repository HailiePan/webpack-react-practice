/*
 * @Author: Hailie.Pan
 * @Date: 2024-01-16 22:18:53
 * @LastEditors: Hailie.Pan
 * @LastEditTime: 2024-01-24 17:17:50
 * @Description:
 */
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { MotionPathPlugin, MotionPathHelper } from 'gsap/all';
import { Button } from 'antd';
import styles from './index.module.less';

export default function ImitateElectricity() {
  const jiantou = useRef();
  const jiantou2 = useRef();
  const jiantou3 = useRef();
  const jiantou4 = useRef();
  const jiantou5 = useRef();

  // 注册插件
  gsap.registerPlugin(MotionPathPlugin);

  useEffect(() => {
    const tl = gsap.timeline({ repeat: -1 });
    gsap.set(
      [jiantou.current, jiantou2.current, jiantou3.current, jiantou4.current, jiantou5.current],
      { scale: 0.5, opacity: 0 }
    );

    tl.to([jiantou.current], {
      duration: 0.1,
      opacity: 1
    });

    tl.to([jiantou.current], {
      duration: 2,
      ease: 'none',
      immediateRender: true,
      motionPath: {
        path: '#xianlu', // 路径
        align: '#xianlu', // 对齐到路径
        alignOrigin: [0.5, 0.5], // 对齐原点
        autoRotate: 90, // 沿路径方向旋转角度
        end: 0.24
      }
    });
    tl.to([jiantou.current], {
      duration: 0.2,
      opacity: 0
    });

    tl.to(
      [jiantou2.current],
      {
        duration: 0.2,
        opacity: 1
      }
      // '<'
    );

    tl.to(
      [jiantou2.current],
      {
        duration: 1,
        ease: 'none',
        immediateRender: true,
        // stagger: 2, // 间隔时间
        motionPath: {
          path: '#xianlu', // 路径
          align: '#xianlu', // 对齐到路径
          alignOrigin: [0.5, 0.5], // 对齐原点
          autoRotate: 90, // 沿路径方向旋转角度
          start: 0.28,
          end: 0.41
        }
      },
      '<'
    );
    tl.to([jiantou2.current], {
      duration: 0.2,
      opacity: 0
    });

    return;
    tl.to(
      [jiantou3.current],
      {
        duration: 0.2,
        opacity: 1
      },
      '<0.2'
    );

    tl.to([jiantou3.current], {
      duration: 1,
      ease: 'none',
      immediateRender: true,
      // stagger: 2, // 间隔时间
      motionPath: {
        path: '#xianlu', // 路径
        align: '#xianlu', // 对齐到路径
        alignOrigin: [0.5, 0.5], // 对齐原点
        autoRotate: 90, // 沿路径方向旋转角度
        start: 0.44,
        end: 0.57
      }
    });

    tl.to([jiantou3.current], {
      duration: 0.2,
      opacity: 0
    });

    tl.to(
      [jiantou4.current],
      {
        duration: 0.2,
        opacity: 1
      },
      '<0.2'
    );

    tl.to([jiantou4.current], {
      duration: 1,
      ease: 'none',
      immediateRender: true,
      // stagger: 2, // 间隔时间
      motionPath: {
        path: '#xianlu', // 路径
        align: '#xianlu', // 对齐到路径
        alignOrigin: [0.5, 0.5], // 对齐原点
        autoRotate: 90, // 沿路径方向旋转角度
        start: 0.58,
        end: 0.73
      }
    });
    tl.to([jiantou4.current], {
      duration: 0.2,
      opacity: 0
    });

    tl.to(
      [jiantou5.current],
      {
        duration: 0.2,
        opacity: 1
      },
      '<0.2'
    );

    tl.to([jiantou5.current], {
      duration: 1,
      ease: 'none',
      immediateRender: true,
      // stagger: 2, // 间隔时间
      motionPath: {
        path: '#xianlu', // 路径
        align: '#xianlu', // 对齐到路径
        alignOrigin: [0.5, 0.5], // 对齐原点
        autoRotate: 90, // 沿路径方向旋转角度
        start: 0.75
        // end: 0.73
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
        <path
          id="xianlu"
          fill="none"
          stroke="none"
          d="m0,151h225.12c3.78,0,6.85-3.06,6.85-6.85V8.04c0-3.89,3.15-7.04,7.04-7.04h121.97c3.69,0,6.68,2.99,6.68,6.68v136.63c0,3.69,3,6.69,6.69,6.69h225.66"
        />
      </svg>

      <div className={styles.jiantou} ref={jiantou}></div>
      <div className={styles.jiantou} ref={jiantou2}></div>
      <div className={styles.jiantou} ref={jiantou3}></div>
      <div className={styles.jiantou} ref={jiantou4}></div>
      <div className={styles.jiantou} ref={jiantou5}></div>
    </div>
  );
}
