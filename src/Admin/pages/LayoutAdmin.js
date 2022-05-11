import { Layout } from "antd";
import React from "react";
import { Outlet } from "react-router-dom";
// import Footer from "../components/Footer";
import HeaderAdmin from "../components/HeaderAdmin";
import MenuAdmin from "../components/MenuAdmin";

const { Content } = Layout;

export default function LayoutAdmin() {
  return (
    <Layout className="layout-admin">
      <div style={{ position: "sticky", top: 0, zIndex: 999 }}>
        <HeaderAdmin />
        <MenuAdmin />
      </div>
      <Content style={{ padding: "0 20px", minHeight: "calc(100vh - 110px)" }}>
        <div className="site-layout-content">
          <Outlet />
        </div>
      </Content>
      {/* <div style={{ margin: "25px 0" }}>
        <Footer />
      </div> */}
    </Layout>
  );
}
