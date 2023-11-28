/*
 * Author  hailie.pan
 * Date  2023-11-28 10:15:22
 * LastEditors  hailie.pan
 * LastEditTime  2023-11-28 10:35:17
 * Description  file content
 */
import React, { useContext } from "react";
import StateContext from "@/BaseLayout/data.js";
import Pro from "./Pro";

export default function InfoItem() {
  const { state, setState } = useContext(StateContext);
  return (
    <div
      style={{
        border: "1px solid #eee",
        height: "100px",
        margin: "20px 0",
        padding: "10px",
      }}
    >
      这是信息Item页面,获取状态为{state}
      <Pro />
    </div>
  );
}
