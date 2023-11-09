/*
 * Author  hailie.pan
 * Date  2023-10-12 15:59:28
 * LastEditors  hailie.pan
 * LastEditTime  2023-11-08 10:27:37
 * Description  file content
 */
import React, { useEffect, useState } from "react";
import { Button } from "antd";
import { useSearchParams, useParams } from "react-router-dom";

export default function Invoice() {
  const [searchParams, setSearchParams] = useSearchParams(); //获取路径上?后的参数,也可以改变参数来改变路由
  let params = useParams(); //获取动态路由的参数
  const [info, setInfo] = useState({});
  console.log("params", params);

  console.log("searchParams-a", searchParams.get("a"));
  console.log("searchParams-b", searchParams.get("b"));

  useEffect(() => {
    console.log("页面加载");
    setInfo({ name: "zhangsan" });
  }, []);

  return (
    <div>
      <p>名字：{info.name}</p>
      <p> 发票{params.id}详情页面，获取动态路由参数</p>
      <p>
        获取路径?号后的参数a等于{searchParams.get("a")}，b等于
        {searchParams.get("b")}
      </p>
      <Button type="link" onClick={() => setSearchParams({ a: "a1", b: "b1" })}>
        修改页面路径参数
      </Button>
    </div>
  );
}
