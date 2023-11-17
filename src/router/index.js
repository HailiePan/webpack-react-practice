/*
 * Author  hailie.pan
 * Date  2023-10-13 17:13:27
 * LastEditors  hailie.pan
 * LastEditTime  2023-11-16 15:30:57
 * Description  file content
 */
import React from "react";
import { useRoutes } from "react-router-dom";

import BaseLayout from "@/BaseLayout";

import Home from "@/pages/Home";
import Invoices from "@/pages/Invoices";
import Invoice from "@/pages/Invoices/Invoice";
import Pending from "@/pages/Invoices/Pending";
import Complete from "@/pages/Invoices/Complete";
import About from "@/pages/About";
import Article from "@/pages/Article";
import ControlRoomFirstPage from "@/pages/ControlRoomFirstPage";
import Chart from "@/pages/Chart";

const routes = [
  {
    path: "/",
    element: <BaseLayout />,
    name: "一级场景",
    children: [
      { path: "/home", element: <Home />, name: "首页" },
      { path: "/article", element: <Article />, name: "文章" },
      {
        // path: "/invoices",
        // element: <Invoices />,
        name: "发票信息",
        children: [
          {
            path: "/invoices/invoicesDetail/:id",
            element: <Invoice />,
            name: "发票1详情",
          },
          {
            path: "/invoices/pending",
            element: <Pending />,
            name: "发票2详情",
          },
          {
            path: "/invoices/complete",
            element: <Complete />,
            name: "发票3详情",
          },
        ],
      },

      {
        path: "/about",
        element: <About />,
        name: "关于",
      },
      {
        path: "/chart",
        element: <Chart />,
        name: "图表",
      },
    ],
  },
  {
    path: "/controlRoomFirstPage",
    element: <ControlRoomFirstPage />,
    name: "驾驶舱页面",
  },
];

export { routes };
