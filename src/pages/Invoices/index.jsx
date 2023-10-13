/*
 * Author  hailie.pan
 * Date  2023-10-12 16:00:14
 * LastEditors  hailie.pan
 * LastEditTime  2023-10-13 16:10:04
 * Description  file content
 */
import React from "react";
import { Button } from "antd";
import { NavLink, Outlet } from "react-router-dom";

export default function Invoices() {
  return (
    <div>
      <p>这是发票总页面</p>
      <NavLink to="/invoicesDetail/1" style={{ marginRight: "20px" }}>
        发票1详情页
      </NavLink>
      <NavLink to="/pending" style={{ marginRight: "20px" }}>
        pending页
      </NavLink>
      <NavLink to="/complete">complete页</NavLink>
    </div>
  );
}
