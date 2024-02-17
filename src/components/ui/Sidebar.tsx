"use client";
import { useState } from "react";
import { Layout, Menu, Row, Space, Spin } from "antd";

const { Sider } = Layout;

import { getUserInfo } from "@/services/auth.service";
import { sidebarItems } from "@/constants/SidebarItems";
import { useUserQuery } from "@/redux/api/userApi";

const Sidebar = () => {
  const [collapsed, setCollapsed] = useState(false);

  // const role = USER_ROLE.ADMIN;
  const { user_id } = getUserInfo() as any;
  const { data, isLoading } = useUserQuery(user_id);
  if (isLoading) {
    return (
      <Row
        justify="center"
        align="middle"
        style={{
          height: "100vh",
        }}
      >
        <Space>
          <Spin tip="Loading" size="large"></Spin>
        </Space>
      </Row>
    );
  }

  return (
    <Sider
      collapsible
      collapsed={collapsed}
      onCollapse={(value) => setCollapsed(value)}
      width={280}
      style={{
        overflow: "auto",
        height: "100vh",
        position: "sticky",
        left: 0,
        top: 0,
        bottom: 0,
      }}
    >
      <div className="demo-logo-vertical" />
      <div
        style={{
          color: "white",
          fontSize: "2rem",
          textAlign: "center",
          fontWeight: "bold",
          marginBottom: "1rem",
        }}
      >
        IS
      </div>
      <Menu
        theme="dark"
        defaultSelectedKeys={["1"]}
        mode="inline"
        items={sidebarItems(data?.role)}
      />
    </Sider>
  );
};

export default Sidebar;
