/*
 * Author  hailie.pan
 * Date  2023-10-12 16:01:43
 * LastEditors  hailie.pan
 * LastEditTime  2023-11-16 14:59:06
 * Description  file content
 */
import React from "react";
import { useLocation } from "react-router-dom";

export default function Complete() {
  let location = useLocation();
  return (
    <div>
      <p> 发票3详情页 </p>
      <p>页面跳转时获取state里的参数：{location.state}</p>
    </div>
  );
}
