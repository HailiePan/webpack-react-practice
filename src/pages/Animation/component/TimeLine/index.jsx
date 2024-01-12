/*
 * @Author: Hailie.Pan
 * @Date: 2024-01-12 17:31:10
 * @LastEditors: Hailie.Pan
 * @LastEditTime: 2024-01-12 18:31:33
 * @Description: 
 */
import React ,{useEffect, useRef, useState}from 'react'
import styles from './index.module.less'
import { gsap } from "gsap";
import { Button } from 'antd';
import { useGSAP } from "@gsap/react";

export default function TimeLine() {
    const boxRef = useRef();
    const boxRef2 = useRef();
    const boxRef3 = useRef();
    const { contextSafe } = useGSAP();
    const [isMove, SetIsMove] = useState(false)


    const tl = gsap.timeline({defaults:{rotation: 360}});
   const a =  tl.to(boxRef.current, { duration: 2 });
   const b =  tl.to(boxRef2.current, { duration: 2 },1);
   const c =  tl.to(boxRef3.current, { duration: 2 },);

   const timeScaleTween = gsap.to(tl, {
    duration: 0.75,   
    // timeScale: 0.1,
    paused: true
  });

    const handleClickMove = ()=> timeScaleTween.play()
    const handleClickSuspend = ()=>{
        tl.pause()
    }

        
  return (
    <div>
        <h1>时间线动画</h1>
        <div style={{marginBottom:'10px'}}>
            <Button onClick={()=>handleClickMove()}>运动</Button>
            <Button onClick={()=>handleClickSuspend()}>暂停</Button>
            </div>
         <div style={{display:'flex'}}>
            <div className={styles.box} ref={boxRef}></div>
            <div className={styles.box} ref={boxRef2}></div>
            <div className={styles.box} ref={boxRef3}></div>
        </div>
    </div>
  )
}
