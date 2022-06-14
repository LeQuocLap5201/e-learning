import { Layout } from "antd";
import React, { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import HeaderAdmin from "../components/HeaderAdmin";
import MenuAdmin from "../components/MenuAdmin";

const { Content } = Layout;

export default function LayoutAdmin() {
  const token = JSON.parse(localStorage.getItem("e-learning-crm"));

  const navigate = useNavigate();

  useEffect(() => {
    if (!token) {
      return navigate("/admin/login");
    }
  }, [navigate, token]);

  return (
    <Layout className="layout-admin">
      <div style={{ position: "sticky", top: 0, zIndex: 999 }}>
        <HeaderAdmin name={token?.name} />
        <MenuAdmin />
      </div>
      <Content style={{ padding: "0 20px", minHeight: "calc(100vh - 110px)" }}>
        <div className="site-layout-content">
          <Outlet />
        </div>
      </Content>
    </Layout>
  );
}
