/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import PropTypes from "prop-types";
import "./index.css";
import { Dropdown, Layout, Menu } from "antd";
import {
  ContainerOutlined,
  DownOutlined,
  LogoutOutlined,
} from "@ant-design/icons";
import { Link, useNavigate } from "react-router-dom";

HeaderAdmin.propTypes = {
  name: PropTypes.string,
};

HeaderAdmin.defaultProps = {
  name: "User name",
};

const { Header } = Layout;

export default function HeaderAdmin({ name }) {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("e-learning-crm");
    return navigate("/admin/login");
  };

  const menu = (
    <Menu>
      <Menu.Item key="0">
        <Link to="/admin/users/1">
          <ContainerOutlined />
          Thông tin người dùng
        </Link>
      </Menu.Item>
      <Menu.Item key="1" onClick={handleLogout}>
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
          {name} <DownOutlined />
        </a>
      </Dropdown>
    </Header>
  );
}
