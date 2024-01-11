import React ,{useRef, useEffect, useState}from 'react'
import { gsap } from "gsap";
import styles from './index.module.less';

export default function Animation() {
    const boxRef = useRef();
    const boxRef2 = useRef();
    const boxRef3 = useRef();

    const canvasRef = useRef();
    let obj = { myNum: 10, myColor: "red" };

    // const canvas = document.getElementById("canvas");
    const [ctx, setCtx] = useState();
    // const ctx = canvas?.getContext("2d");

    
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


    useEffect(() => {
        // 然后我们就可以用gsap的方式来进行动画了
        gsap.to([boxRef.current, boxRef2.current, boxRef3.current], {
          x:200,
          stagger:1,
          duration:2
        });

        gsap.to(obj, {
            myNum: 200,
            myColor: "blue",
            onUpdate: () => {},
            onComplete:() =>console.log('44', obj.myNum, obj.myColor),
        });

      },[]);

  return (
    <div className={styles.wrap}>
      <div className={styles.box} ref={boxRef}></div>
      <div className={styles.box} ref={boxRef2}></div>
      <div className={styles.box} ref={boxRef3}></div>



      <canvas id="canvas" width="300" height="300" ref={canvasRef}></canvas>
    </div>
  )
}
