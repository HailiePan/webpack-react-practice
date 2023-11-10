/*
 * Author  hailie.pan
 * Date  2023-10-13 17:28:32
 * LastEditors  hailie.pan
 * LastEditTime  2023-11-10 17:10:56
 * Description  file content
 */

import React from "react";
import {
  LaptopOutlined,
  NotificationOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Breadcrumb, Layout, Menu, theme } from "antd";

import { Link, NavLink, useRoutes, Navigate, Outlet } from "react-router-dom";

import { routes } from "@/router";

import styles from "./index.less";
const { Header, Content, Sider } = Layout;

export default function BaseLayout() {
  const menuArr = [
    {
      key: 0,
      icon: React.createElement(UserOutlined),
      label: (
        <NavLink to="home" state={"From App"}>
          首页
        </NavLink>
      ),
    },

    {
      key: 1,
      icon: React.createElement(LaptopOutlined),
      label: <NavLink to="invoices">发票信息</NavLink>,
      children: [
        {
          key: "1-0",
          label: (
            <NavLink to="/invoices/invoicesDetail/1?a=a&b=b">
              发票1详情页
            </NavLink>
          ),
        },
        {
          key: "1-1",
          label: (
            <NavLink to="/invoices/pending?fromPage=菜单点击">
              发票2详情页
            </NavLink>
          ),
        },
        {
          key: "1-2",
          label: (
            <NavLink to="/invoices/complete" state={"左侧菜单点击"}>
              发票3详情页
            </NavLink>
          ),
        },
      ],
    },
    {
      key: 2,
      icon: React.createElement(NotificationOutlined),
      label: <NavLink to="about">关于</NavLink>,
    },
    {
      key: 3,
      icon: React.createElement(NotificationOutlined),
      label: <NavLink to="controlRoomFirstPage">驾驶舱页面</NavLink>,
    },
    {
      key: 4,
      icon: React.createElement(LaptopOutlined),
      label: <NavLink to="article">文章</NavLink>,
    },
  ];

  return (
    <Layout className={styles.layoutWrap}>
      <Header className={styles.header}>
        <div className={styles.logo} />

        <h1>数字孪生系统</h1>
      </Header>
      <Layout>
        <Sider className={styles.sider}>
          <Menu
            mode="inline"
            // defaultSelectedKeys={["0"]}
            // defaultOpenKeys={["sub1"]}
            style={{
              height: "100%",
              borderRight: 0,
            }}
            items={menuArr}
          />
        </Sider>

        <Layout className={styles.rightLayout}>
          <Breadcrumb
            style={{
              margin: "16px 0",
            }}
          >
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item>List</Breadcrumb.Item>
            <Breadcrumb.Item>App</Breadcrumb.Item>
          </Breadcrumb>
          <Content className={styles.content}>
            <Outlet />
          </Content>
        </Layout>
      </Layout>
    </Layout>
  );
}
