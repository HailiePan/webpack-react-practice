/*
 * @Author: Hailie.Pan
 * @Date: 2024-01-11 10:41:16
 * @LastEditors: Hailie.Pan
 * @LastEditTime: 2024-01-24 18:01:45
 * @Description:
 */
import React, { useRef, useEffect, useState } from 'react';
import { gsap } from 'gsap';
import { Tabs } from 'antd';
import { ScrollTrigger } from 'gsap/ScrollTrigger.js';
import MoveBox from './component/MoveBox';
import MoveOnPath from './component/MoveOnPath';
import CanvasDraw from './component/CanvasDraw';
import TimeLine from './component/TimeLine';
import ScrollAnimation from './component/ScrollAnimation';
import ScrollAnimation2 from './component/ScrollAnimation2';
import ImitateElectricity from './component/ImitateElectricity';
import DraggableCom from './component/DraggableCom';
import styles from './index.module.less';

export default function Animation() {
  let obj = { myNum: 10, myColor: 'red' };

  useEffect(() => {
    // stagger 依次执行动画
    // gsap.to([boxRef.current, boxRef2.current, boxRef3.current], {
    //   rotation: 360,
    //   stagger:1,
    //   duration:2
    // });

    gsap.to(obj, {
      myNum: 200,
      myColor: 'blue',
      onUpdate: () => {
        console.log('onUpdate', obj.myColor);
      },
      onComplete: () => console.log('onComplete', obj.myNum, obj.myColor)
    });
  }, []);

  return (
    <div className={styles.wrap}>
      <Tabs
        items={[
          {
            key: '1',
            label: '在canvas中驱动元素绘制',
            children: <CanvasDraw />
          },
          {
            key: 'stagger',
            label: 'stagger依次错开',
            children: <StaggerAnimation />
          },

          {
            key: '3',
            label: '时间线动画 stagger依次错开',
            children: <TimeLine />
          },
          {
            key: '4',
            label: '可拖拽',
            children: <DraggableCom />
          },
          {
            key: '5',
            label: '元素沿SVG路径移动——模拟电流效果',
            children: <ImitateElectricity />
          }
        ]}
      />
      {/* <MoveBox /> */}

      {/* 在canvas中驱动元素绘制 */}
      {/* <CanvasDraw /> */}

      {/* 时间线动画 stagger依次错开 */}
      {/* <TimeLine /> */}

      {/* 元素沿SVG路径移动 */}
      {/* <MoveOnPath /> */}

      {/* 把canvas的效果和gsap的效果放在一起对比 */}
      {/* 模拟电流效果 */}
      {/* <ImitateElectricity /> */}

      {/* 滚动动画 */}
      {/* <ScrollAnimation /> */}

      {/* 滚动动画 */}
      {/* <ScrollAnimation2 /> */}

      {/* 可拖拽 */}
      {/* <DraggableCom /> */}
    </div>
  );
}
