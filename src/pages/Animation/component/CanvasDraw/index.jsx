/*
 * @Author: Hailie.Pan
 * @Date: 2024-01-12 16:51:02
 * @LastEditors: Hailie.Pan
 * @LastEditTime: 2024-01-12 17:36:00
 * @Description: 
 */
import React,{useEffect, useRef, useState} from 'react'
import { gsap } from "gsap";
import styles from './index.module.less';

export default function CanvasDraw() {
    const canvasRef = useRef();
    const [ctx, setCtx] = useState();

    let position = { x: 0, y: 0 };

    function draw() {
        // 擦除canvas
        ctx.clearRect(0, 0, 300, 300);
        // 在新的位置重新绘制方块
        ctx.fillRect(position.x, position.y, 100, 100);
    }

    useEffect(() => {
        if(!canvasRef.current) return
        setCtx(canvasRef.current.getContext('2d'));
      }, [canvasRef]);

    useEffect(()=>{
        if(!ctx) return
        ctx.fillStyle = "#28a92b";
        //把position的x和y的值进行变化
        gsap.to(position, { 
        x: 200, 
        y: 200, 
        duration: 4,
        // canvas需要在每一帧进行重新绘制，才会有动画效果
        onUpdate: draw 
        });
    },[ctx])

  return (
    <div>
      <h1>驱动canvas绘图</h1>
        <canvas id="canvas" width="300" height="300" ref={canvasRef}></canvas>
    </div>
  )
}
