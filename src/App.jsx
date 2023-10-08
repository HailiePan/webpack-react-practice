/*
 * Author  hailie.pan
 * Date  2023-10-08 15:13:23
 * LastEditors  hailie.pan
 * LastEditTime  2023-10-08 15:58:38
 * Description  file content
 */
import React from "react";
import { Routes, Route, NavLink } from "react-router-dom";
import { Button } from "antd";

import Home from "@/pages/Home";
import About from "@/pages/About";

export default function App() {
  return (
    <div>
      <header>
        <h1>Hello World</h1>
      </header>
      <nav>
        <Button>
          <NavLink to="">首页</NavLink>
        </Button>
        <Button>
          <NavLink to="about">关于</NavLink>{" "}
        </Button>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
}
