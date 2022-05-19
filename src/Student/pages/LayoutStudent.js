import { Layout } from "antd";
import HeaderStudent from "../components/HeaderStudent";
import React from "react";
import { Outlet } from "react-router-dom";

const { Content } = Layout;

export default function LayoutStudent() {
  return (
    <>
      <Layout className="layout-student">
        <div
          style={{
            position: "sticky",
            top: 0,
            zIndex: 999,
          }}
        >
          <HeaderStudent />
        </div>
        <Content
          style={{
            minHeight: "calc(100vh - 64px)",
            backgroundColor: "#fff",
          }}
        >
          <div className="site-layout-content">
            <Outlet />
          </div>
        </Content>
      </Layout>
    </>
  );
}
