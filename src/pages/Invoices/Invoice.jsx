/*
 * Author  hailie.pan
 * Date  2023-10-12 15:59:28
 * LastEditors  hailie.pan
 * LastEditTime  2023-10-13 15:36:03
 * Description  file content
 */
import React from "react";
import { Button } from "antd";
import { useSearchParams, useParams } from "react-router-dom";

export default function Invoice() {
  const [searchParams, setSearchParams] = useSearchParams(); //获取路径上?以后的参数,也可以改变参数来改变路由
  let params = useParams(); //获取动态路由的参数
  console.log("params", params);

  console.log("searchParams", searchParams.get("a"));
  console.log("searchParams", searchParams.get("b"));

  return (
    <div>
      发票{params.id}详情页面哈哈哈
      <Button type="link" onClick={() => setSearchParams({ a: "a1" })}>
        修改页面路径参数
      </Button>
    </div>
  );
}
