/*
 * @Author: Hailie.Pan
 * @Date: 2024-01-16 22:18:53
 * @LastEditors: Hailie.Pan
 * @LastEditTime: 2024-01-16 23:17:42
 * @Description: 
 */
import React, { useEffect, useRef } from 'react'
import { gsap } from "gsap";
import { MotionPathPlugin} from 'gsap/all'
import styles from './index.module.less';
export default function MoveOnPathTwo() {
    const boxRed = useRef()
    useEffect(()=>{
        // 注册插件
        gsap.registerPlugin(MotionPathPlugin);

        // gsap.set(boxRed.current, {scale: 0.5, autoAlpha: 1});

        gsap.to(boxRed.current, {
            duration: 5, 
            // ease: "power1.inOut",
            immediateRender: true,
            repeat: -1,
            repeatDelay: 1,
            // yoyo: true,
            motionPath: {
              path: '#dianliulujing',
              align: '#dianliulujing',
              alignOrigin: [0.5, 0.5], //  //对齐原点
              autoRotate: true // 沿路径方向旋转角度
            }
          });

    },[])

  return (
        <div>
            <h1>电流</h1>
{/*  */}
            <svg class={styles.motionPath}  viewBox="0 0 600 152">
                <path id="dianliulujing" fill="none" stroke='#000'  d="m0,151h231.97V1h135.69v150h232.35"/>
            </svg>

            <div style={{width:'50px', height:'20px', background:'red'}} ref={boxRed}></div>
        </div>
  )
}

