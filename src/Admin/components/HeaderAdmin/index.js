/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "./index.css";
import { Dropdown, Layout, Menu } from "antd";
import {
  ContainerOutlined,
  DownOutlined,
  LogoutOutlined,
} from "@ant-design/icons";
import { Link } from "react-router-dom";

const { Header } = Layout;

const menu = (
  <Menu>
    <Menu.Item key="0">
      <Link to="/admin/users/1">
        <ContainerOutlined />
        Thông tin người dùng
      </Link>
    </Menu.Item>
    <Menu.Item key="1">
      <LogoutOutlined />
      Đăng xuất
    </Menu.Item>
  </Menu>
);

export default function HeaderAdmin() {
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
