/*
 * Author  hailie.pan
 * Date  2023-10-08 15:13:23
 * LastEditors  hailie.pan
 * LastEditTime  2023-10-13 18:15:23
 * Description  全局页面_去掉了
 */
import React from "react";
import {
  Routes,
  Route,
  Link,
  NavLink,
  useRoutes,
  Navigate,
} from "react-router-dom";
import { Button } from "antd";

import Home from "@/pages/Home";
import Invoices from "@/pages/Invoices";
import Invoice from "@/pages/Invoices/Invoice";
import Pending from "@/pages/Invoices/Pending";
import Complete from "@/pages/Invoices/Complete";

import About from "@/pages/About";

export default function App() {
  const routes = useRoutes([
    { path: "/", element: <Home /> },
    {
      path: "/invoices",
      element: <Invoices />,
    },
    { path: "/invoicesDetail/:id", element: <Invoice /> },
    { path: "/pending", element: <Pending /> },
    { path: "/complete", element: <Complete /> },
    {
      path: "/about",
      element: <About />,
    },
  ]);

  return (
    <div>
      <header>
        <h1>数字孪生系统</h1>
      </header>
      <nav
        style={{
          background: "#eee",
          padding: "4px 10px",
          marginBottom: "10px",
        }}
      >
        <Link to="" state={"From App"}>
          首页
        </Link>
        <NavLink to="invoices" style={{ margin: "0 20px" }}>
          发票信息
        </NavLink>
        <NavLink to="about">关于</NavLink>
      </nav>
      {routes}
    </div>
  );
}

// 页面跳转的方法
// 传递参数的和获取参数的方法
// 路由重定向
