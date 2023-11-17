/*
 * Author  hailie.pan
 * Date  2023-10-12 15:59:28
 * LastEditors  hailie.pan
 * LastEditTime  2023-11-16 14:58:48
 * Description  file content
 */
import React, { useEffect, useState } from "react";
import { Button } from "antd";
import { useSearchParams, useParams, useNavigate } from "react-router-dom";

export default function Invoice() {
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams(); //获取路径上?后的参数,也可以改变参数来改变路由
  let params = useParams(); //获取动态路由的参数
  const [info, setInfo] = useState({});
  console.log("params", params);

  // console.log("searchParams-a", searchParams.get("a"));
  // console.log("searchParams-b", searchParams.get("b"));

  const a = searchParams.get("a") || null; // 路径上?后的参数
  const b = searchParams.get("b") || null; // 路径上?后的参数

  useEffect(() => {
    setInfo({ name: "张三" });
  }, []);

  return (
    <div>
      <p> 发票1详情页 </p>
      <Button
        type="link"
        onClick={() => {
          navigate("/invoices/pending?fromPage=来自发票1页面");
        }}
      >
        跳转发票2
      </Button>
      <p>名字：{info.name}</p>
      <p>发票{params.id}详情页面，获取动态路由参数</p>
      <p>
        获取路径?号后的参数a等于{a}，b等于{b}
      </p>
      <Button type="link" onClick={() => setSearchParams({ a: "a1", b: "b1" })}>
        修改页面路径参数
      </Button>
    </div>
  );
}
