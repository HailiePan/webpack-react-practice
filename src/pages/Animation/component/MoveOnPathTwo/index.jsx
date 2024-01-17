/*
 * @Author: Hailie.Pan
 * @Date: 2024-01-16 22:18:53
 * @LastEditors: Hailie.Pan
 * @LastEditTime: 2024-01-17 10:13:09
 * @Description: 
 */
import React, { useEffect, useRef } from 'react'
import { gsap } from "gsap";
import { MotionPathPlugin} from 'gsap/all'
import styles from './index.module.less';
export default function MoveOnPathTwo() {
    const boxRed = useRef()
    const boxRed2 = useRef()

    
    useEffect(()=>{
        // 注册插件
        gsap.registerPlugin(MotionPathPlugin);

        const tl = gsap.timeline()
        
        gsap.set([boxRed.current, boxRed2.current], {scale: 0.5, autoAlpha: 1});

       

          tl.to([boxRed.current, boxRed2.current], {
            duration: 5, 
            ease: "none",
            immediateRender: true,
            repeat: -1,
            // repeatDelay: 1,
            stagger: 2, // 间隔
            // yoyo: true,
            motionPath: {
              path: '#dianliulujing',
              align: '#dianliulujing',
              alignOrigin: [0.5, 0.5], //  //对齐原点
              autoRotate: 90 // 沿路径方向旋转角度
            }
          },
          );

        // tl.to(boxRed2.current, {
        //     duration: 5, 
        //     ease: "none",
        //     immediateRender: true,
        //     repeat: -1,
        //     repeatDelay: 1,
        //     // yoyo: true,
        //     motionPath: {
        //       path: '#dianliulujing',
        //       align: '#dianliulujing',
        //       alignOrigin: [0.5, 0.5], //  //对齐原点
        //       autoRotate: 90 // 沿路径方向旋转角度
        //     }
        //   }, '<2');

    },[])

  return (
        <div>
            <h1>电流</h1>
            <svg class={styles.motionPath}  viewBox="0 0 600 152">
                <path id="dianliulujing" fill="none" stroke='#000'  d="m0,151h231.97V1h135.69v150h232.35"/>
            </svg>

            <div className={styles.jiantou}  ref={boxRed}></div>
            <div className={styles.jiantou}  ref={boxRed2}></div>

        </div>
  )
}

