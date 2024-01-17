import React ,{useRef, useEffect, useState}from 'react'
import { gsap } from "gsap";
import { ScrollTrigger } from 'gsap/ScrollTrigger.js'
import MoveBox from './component/MoveBox'
import MoveOnPath from './component/MoveOnPath'
import CanvasDraw from './component/CanvasDraw'
import TimeLine from './component/TimeLine'
import ScrollAnimation from './component/ScrollAnimation'
import ScrollAnimation2 from './component/ScrollAnimation2'
import MoveOnPathTwo from './component/MoveOnPathTwo'
import styles from './index.module.less';

export default function Animation() {


    let obj = { myNum: 10, myColor: "red" };


    useEffect(() => {
        // stagger 依次执行动画
        // gsap.to([boxRef.current, boxRef2.current, boxRef3.current], {
        //   rotation: 360,
        //   stagger:1,
        //   duration:2
        // });

        gsap.to(obj, {
            myNum: 200,
            myColor: "blue",
            onUpdate: () => {
              // console.log('onUpdate', obj.myNum, obj.myColor)
            },
            onComplete:() =>console.log('onComplete', obj.myNum, obj.myColor),
        });

      },[]);

  
  return (
    <div className={styles.wrap}>
      <MoveBox />
     
       {/* 在canvas中驱动元素绘制 */}
        {/* <CanvasDraw /> */}

        {/* 时间线动画 */}
        {/* <TimeLine /> */}

        {/* 元素沿SVG路径移动 */}
        {/* <MoveOnPath /> */}

        {/* 模拟电流效果 */}
        {/* <MoveOnPathTwo /> */}

        {/* 滚动动画 */}
        {/* <ScrollAnimation /> */}

        {/* <ScrollAnimation2 /> */}



    </div>
  )
}
