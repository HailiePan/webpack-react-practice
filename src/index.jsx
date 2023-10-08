/*
 * Author  hailie.pan
 * Date  2023-10-07 17:16:58
 * LastEditors  hailie.pan
 * LastEditTime  2023-10-08 15:58:50
 * Description  file content
 */
import React, { StrictMode } from "react";
import * as ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("app"));
// v18 的新方法
root.render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
);
