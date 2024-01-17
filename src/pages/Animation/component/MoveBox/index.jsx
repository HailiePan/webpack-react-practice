/*
 * @Author: Hailie.Pan
 * @Date: 2024-01-17 10:20:00
 * @LastEditors: Hailie.Pan
 * @LastEditTime: 2024-01-17 10:23:23
 * @Description: 
 */
import React ,{useEffect,useRef} from 'react'
import { gsap } from "gsap";
import styles from './index.module.less'

export default function MoveBox() {
    const moveBox = useRef()
    useEffect(()=>{
        gsap.to(moveBox.current, {
            x:200,
            rotation: 360,
            duration:1,
        });
    },[])
  return (
    <div>
      <div className={styles.box} ref={moveBox} />
    </div>
  )
}
