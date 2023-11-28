/*
 * Author  hailie.pan
 * Date  2023-11-28 10:19:55
 * LastEditors  hailie.pan
 * LastEditTime  2023-11-28 10:38:22
 * Description  file content
 */
import React, { useContext } from "react";
import StateContext from "@/BaseLayout/data.js";

export default function Pro() {
  const { state, setState } = useContext(StateContext);
  return (
    <div
      style={{ border: "1px solid #ddd", padding: "10px", margin: "10px 0" }}
    >
      这是信息ItemPro页面,获取状态为{state}
    </div>
  );
}
