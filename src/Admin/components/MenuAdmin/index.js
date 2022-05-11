import { Menu } from "antd";
import React, { useEffect, useState } from "react";
import "./index.css";
import { Link, useLocation } from "react-router-dom";

export default function MenuAdmin() {
  const location = useLocation();
  const [current, setCurrent] = useState(location.pathname);

  useEffect(() => {
    setCurrent(location.pathname.split("/")?.[2]);
  }, [location]);

  return (
    <Menu
      theme="light"
      mode="horizontal"
      selectedKeys={[current]}
      className="menu-admin"
    >
      <Menu.Item key="members">
        <Link to="members">Quản lý thành viên</Link>
      </Menu.Item>
      <Menu.Item key="studies">
        <Link to="studies">Quản lý bài học</Link>
      </Menu.Item>
      <Menu.Item key="e-tests">
        <Link to="e-tests">Quản lý bài kiểm tra</Link>
      </Menu.Item>
      <Menu.SubMenu key="submenu" title="Quản lý kết quả">
        <Menu.Item key="certificates">
          <Link to="certificates">Quản lý Certificate</Link>
        </Menu.Item>
        <Menu.Item key="results">
          <Link to="results">Danh sách kết quả</Link>
        </Menu.Item>
      </Menu.SubMenu>
      <Menu.Item key="users">
        <Link to="users">Quản lý bài người dùng</Link>
      </Menu.Item>
    </Menu>
  );
}
