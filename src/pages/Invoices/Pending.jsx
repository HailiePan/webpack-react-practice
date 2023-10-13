/*
 * Author  hailie.pan
 * Date  2023-10-12 16:00:50
 * LastEditors  hailie.pan
 * LastEditTime  2023-10-13 17:59:51
 * Description  file content
 */
import React from "react";
import { useSearchParams } from "react-router-dom";

export default function Pending() {
  const [searchParams, setSearchParams] = useSearchParams();
  return (
    <div>
      发票2详情页
      <p>页面跳转时获取?号后面的参数：{searchParams.get("fromPage")}</p>
    </div>
  );
}
