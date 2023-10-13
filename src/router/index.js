/*
 * Author  hailie.pan
 * Date  2023-10-13 17:13:27
 * LastEditors  hailie.pan
 * LastEditTime  2023-10-13 17:38:20
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
import ControlRoomFirstPage from "@/pages/ControlRoomFirstPage";

const routes = [
  {
    path: "/",
    element: <BaseLayout />,
    children: [
      { path: "/home", element: <Home /> },
      {
        path: "/invoices",
        element: <Invoices />,
      },
      { path: "/invoices/invoicesDetail/:id", element: <Invoice /> },
      { path: "/invoices/pending", element: <Pending /> },
      { path: "/invoices/complete", element: <Complete /> },
      {
        path: "/about",
        element: <About />,
      },
    ],
  },
  { path: "/controlRoomFirstPage", element: <ControlRoomFirstPage /> },
];

export { routes };
