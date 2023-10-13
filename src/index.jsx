/*
 * Author  hailie.pan
 * Date  2023-10-07 17:16:58
 * LastEditors  hailie.pan
 * LastEditTime  2023-10-13 18:11:18
 * Description  file content
 */
import React, { StrictMode } from "react";
import * as ReactDOM from "react-dom/client";
import { BrowserRouter, useRoutes } from "react-router-dom";
import { routes } from "@/router";
const App = () => {
  return useRoutes(routes);
};
const root = ReactDOM.createRoot(document.getElementById("app"));
// v18 的新方法
root.render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
);

// BrowserRouter下直接渲染useRoutes,routes里配置好路径对应的组件
// 然后就会显示路径对应的组件
// useRoutes(routes)必须在函数里写着
