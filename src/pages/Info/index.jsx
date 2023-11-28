/*
 * Author  hailie.pan
 * Date  2023-11-28 10:14:47
 * LastEditors  hailie.pan
 * LastEditTime  2023-11-28 10:43:57
 * Description  file content
 */
import React, { useContext } from "react";
import InfoItem from "./components/InfoItem";
import StateContext from "@/BaseLayout/data.js";
import { Button } from "antd";

export default function Info() {
  const { state, setState } = useContext(StateContext);
  return (
    <div>
      <ul style={{ marginBottom: "20px" }}>
        解决的问题：
        <li>createContext()和useContext()的使用；</li>
        <li>createContext()创建上下文</li>
        <li>和useContext()读取上下文</li>
        <li>
          可以提供动态变化的值，无论层级多深都会看到传入的上下文的值，如果该值发生变化，Peact也会重新渲染读取该值的组件
        </li>
      </ul>

      <p>这是信息页面,获取状态{state}</p>
      <Button onClick={() => setState("mute")}>修改state为mute</Button>
      <Button onClick={() => setState("playing")}>修改state为playing</Button>
      <InfoItem />
    </div>
  );
}
