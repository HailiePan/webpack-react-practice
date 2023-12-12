/*
 * Author  hailie.pan
 * Date  2023-10-13 17:28:32
 * LastEditors  hailie.pan
 * LastEditTime  2023-12-04 10:37:50
 * Description  file content
 */

import React, { useCallback, useState, useMemo } from 'react';
import { LaptopOutlined, NotificationOutlined, UserOutlined } from '@ant-design/icons';
import { Breadcrumb, Layout, Menu, theme } from 'antd';

import { Link, NavLink, useRoutes, Navigate, Outlet } from 'react-router-dom';

import { routes } from '@/router';
import StateContext from './data.js';
import styles from './index.less';
const { Header, Content, Sider } = Layout;

export default function BaseLayout() {
  // console.log("routes", routes);
  const [selectedMenuKeys, setSelectedMenuKeys] = useState([]);

  // useMemo缓存菜单的计算方法，避免每次刷新时都计算一遍
  // 这个菜单的算法还是不太优美，不好维护
  let showMenu = useMemo(
    () =>
      routes
        .map((item, index) => {
          if (item.children) {
            const arr2 = item.children.map((c, cIndex) => {
              return {
                key: cIndex,
                icon: React.createElement(UserOutlined),
                name: c.name,
                label: (
                  <NavLink to={c.path} state={'From App'}>
                    {c.name}
                  </NavLink>
                ),
                children: c?.children?.map((t, tIndex) => ({
                  key: `${cIndex}-${tIndex}`,
                  icon: React.createElement(UserOutlined),
                  name: t.name,
                  label: <NavLink to={t.path}>{t.name}</NavLink>
                }))
              };
            });
            return arr2;
          } else {
            return {
              key: 'dandu' + index,
              icon: React.createElement(UserOutlined),
              name: item.name,
              label: (
                <NavLink to={item.path} state={'From App'}>
                  {item.name}
                </NavLink>
              )
            };
          }
        })
        .flat(), // arr2是个数组，放到showMenu数组里需要拉平
    []
  );
  showMenu.flat();
  // console.log("showMenu", showMenu);

  const menuArr = [
    {
      key: 0,
      icon: React.createElement(UserOutlined),
      label: (
        <NavLink to="/home" state={'From App'}>
          首页
        </NavLink>
      )
    },

    {
      key: 1,
      icon: React.createElement(LaptopOutlined),
      label: <NavLink to="invoices">发票信息</NavLink>,
      children: [
        {
          key: '1-0',
          label: <NavLink to="/invoices/invoicesDetail/1?a=a&b=b">发票1详情页</NavLink>
        },
        {
          key: '1-1',
          label: <NavLink to="/invoices/pending?fromPage=菜单点击">发票2详情页</NavLink>
        },
        {
          key: '1-2',
          label: (
            <NavLink to="/invoices/complete" state={'左侧菜单点击'}>
              发票3详情页
            </NavLink>
          )
        }
      ]
    },
    {
      key: 2,
      icon: React.createElement(NotificationOutlined),
      label: <NavLink to="about">关于</NavLink>
    },
    {
      key: 3,
      icon: React.createElement(NotificationOutlined),
      label: <NavLink to="controlRoomFirstPage">驾驶舱页面</NavLink>
    },
    {
      key: 4,
      icon: React.createElement(LaptopOutlined),
      label: <NavLink to="article">文章</NavLink>
    }
  ];

  const onSelectMenu = ({ item, key, keyPath, selectedKeys, domEvent }) => {
    setSelectedMenuKeys([key]);
  };

  const [state, setState] = useState('playing');

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
              height: '100%',
              borderRight: 0
            }}
            items={showMenu}
            selectedKeys={selectedMenuKeys}
            onSelect={onSelectMenu}
          />
        </Sider>

        <Layout className={styles.rightLayout}>
          <Breadcrumb
            style={{
              margin: '16px 0'
            }}
          >
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item>List</Breadcrumb.Item>
            <Breadcrumb.Item>App</Breadcrumb.Item>
          </Breadcrumb>

          <StateContext.Provider value={{ state, setState }}>
            <Content className={styles.content}>
              <Outlet />
            </Content>
          </StateContext.Provider>
        </Layout>
      </Layout>
    </Layout>
  );
}
