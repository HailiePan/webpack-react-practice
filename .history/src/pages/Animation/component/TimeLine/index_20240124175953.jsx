/*
 * @Author: Hailie.Pan
 * @Date: 2024-01-12 17:31:10
 * @LastEditors: Hailie.Pan
 * @LastEditTime: 2024-01-24 17:59:53
 * @Description:
 */
import React, { useEffect, useRef, useState } from 'react';
import styles from './index.module.less';
import { gsap } from 'gsap';
import { Button } from 'antd';

export default function TimeLine() {
  const boxRef = useRef();
  const boxRef2 = useRef();
  const boxRef3 = useRef();

  const text1 = useRef();
  const text2 = useRef();
  const text3 = useRef();
  const text4 = useRef();
  let tl = gsap.timeline({ paused: true, defaults: { duration: 1 } });
  let tl2 = gsap.timeline({ defaults: { duration: 1 } });

  useEffect(() => {
    tl.to(boxRef.current, { x: 300, opacity: 0.5 });
    tl.to(boxRef.current, { rotation: 360 });
    tl.to(boxRef2.current, { x: 300, opacity: 0.5 });
    tl.to(boxRef2.current, { rotation: 360 });
    tl.to(boxRef3.current, { x: 300, opacity: 0.5 });
    tl.to(boxRef3.current, { rotation: 360 });
  }, []);

  const handleClickMove = () => {
    tl.play();
  };

  const handleClickSuspend = () => tl.pause();

  const handleClickPlayback = () => tl.reverse();

  return (
    <div>
      <h1 style={{ marginBottom: '20px' }}>时间线动画</h1>
      <div style={{ marginBottom: '10px' }}>
        <Button onClick={() => handleClickMove()}>播放</Button>
        <Button onClick={() => handleClickSuspend()} style={{ margin: '0 6px' }}>
          暂停
        </Button>
        <Button onClick={() => handleClickPlayback()}>回放</Button>
      </div>

      <div>
        <div className={styles.box} ref={boxRef}></div>
        <div className={styles.box} ref={boxRef2}></div>
        <div className={styles.box} ref={boxRef3}></div>
      </div>
    </div>
  );
}
