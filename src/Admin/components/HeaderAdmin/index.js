/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "./index.css";
import { Dropdown, Layout, Menu } from "antd";
import {
  ContainerOutlined,
  DownOutlined,
  LogoutOutlined,
} from "@ant-design/icons";

const { Header } = Layout;

export default function HeaderAdmin() {
  const menu = (
    <Menu>
      <Menu.Item key="0">
        <ContainerOutlined />
        Thông tin người dùng
      </Menu.Item>
      <Menu.Item key="1">
        <LogoutOutlined />
        Đăng xuất
      </Menu.Item>
    </Menu>
  );

  return (
    <Header className="header-admin">
      <p className="header-admin__title">ELEARNING CRM</p>
      <Dropdown overlay={menu} trigger={["click"]}>
        <a className="ant-dropdown-link" onClick={(e) => e.preventDefault()}>
          Username <DownOutlined />
        </a>
      </Dropdown>
    </Header>
  );
}
