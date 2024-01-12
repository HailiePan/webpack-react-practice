import React ,{useRef, useEffect, useState}from 'react'
import { gsap } from "gsap";
import MoveOnPath from './component/MoveOnPath'
import CanvasDraw from './component/CanvasDraw'
import TimeLine from './component/TimeLine'
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
            onUpdate: () => {console.log('onUpdate', obj.myNum, obj.myColor)},
            onComplete:() =>console.log('onComplete', obj.myNum, obj.myColor),
        });

      },[]);

  return (
    <div className={styles.wrap}>
     



       {/* 在canvas中驱动元素绘制 */}
        {/* <CanvasDraw /> */}

        {/* 时间线动画 */}
        <TimeLine />

        {/* 元素沿SVG路径移动 */}
        {/* <MoveOnPath /> */}
    </div>
  )
}
