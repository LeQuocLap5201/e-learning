import { Layout } from "antd";
import HeaderStudent from "../components/HeaderStudent";
import React, { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";

const { Content } = Layout;

export default function LayoutStudent() {
  const token = JSON.parse(localStorage.getItem("e-learning-student"));

  const navigate = useNavigate();

  useEffect(() => {
    if (!token) {
      return navigate("/student/login");
    }
  }, [navigate, token]);

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
