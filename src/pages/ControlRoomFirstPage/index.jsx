/*
 * Author  hailie.pan
 * Date  2023-10-13 17:38:27
 * LastEditors  hailie.pan
 * LastEditTime  2023-10-13 17:56:49
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
      驾驶舱页面
      <Button
        type="link"
        onClick={() => navigate("/home?fromPage=from the ControlRoomFirstPage")}
      >
        首页
      </Button>
    </div>
  );
}
