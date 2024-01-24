/*
 * @Author: Hailie.Pan
 * @Date: 2024-01-23 18:00:40
 * @LastEditors: Hailie.Pan
 * @LastEditTime: 2024-01-24 15:24:15
 * @Description:
 */
import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { Draggable } from 'gsap/all';
import styles from './index.module.less';

export default function DraggableCom() {
  const flair3 = useRef();
  const flair2 = useRef();
  const flair1 = useRef();
  const containerRef = useRef();
  useEffect(() => {
    gsap.registerPlugin(Draggable);

    Draggable.create(flair1.current, {
      type: 'x',
      bounds: containerRef.current
    });

    Draggable.create(flair2.current, {
      type: 'rotation'
    });
    Draggable.create(flair3.current, {
      type: 'x,y', // 拖动类型，| x,y | rotation | x | y |, 默认x,y
      bounds: containerRef.current, // 在另一个dom元素中可拖动
      onClick: function (e) {
        console.log('clicked', e);
      },
      onDragStart: function (e) {
        console.log('drag ended', e);
      },
      onDragEnd: function (e) {
        console.log('drag ended', e);
      }
    });
  }, []);
  return (
    <div className={styles.container} ref={containerRef}>
      <div className={styles.flair} ref={flair1}></div>

      <div className={styles.flair} ref={flair2}></div>

      <div className={styles.flair} ref={flair3}></div>
    </div>
  );
}
