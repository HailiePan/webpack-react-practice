/*
 * Author  hailie.pan
 * Date  2023-10-13 17:38:27
 * LastEditors  hailie.pan
 * LastEditTime  2023-11-16 16:21:01
 * Description 单独的页面
 */
import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./index.less";
import { Button } from "antd";

// 命令式导航方法：useNavigate
// 通过路由传递状态

export default function ControlRoomFirstPage() {
  const navigate = useNavigate();
  return (
    <div className={styles.wrap}>
      <p>驾驶舱页面</p>

      <ul style={{ marginBottom: "20px" }}>
        解决的问题：
        <li>页面独立显示，不显示BaseLayout的公共组件</li>
      </ul>

      <Button
        type="link"
        onClick={() => navigate("/home?fromPage=from the ControlRoomFirstPage")}
      >
        首页
      </Button>
    </div>
  );
}
