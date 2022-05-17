import { Tabs } from "antd";
import React from "react";
import ButtonBack from "../components/ButtonBack";
import FooterStudent from "../components/FooterStudent";
import TabResult from "../components/TabResult";
import TabCertificate from "../components/TabCertificate";

export default function ResultsStudent() {
  return (
    <div
      style={{
        minHeight: "calc(100vh - 64px)",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      <div
        className="results-student main-student"
        style={{ marginBottom: 40 }}
      >
        <div style={{ marginBottom: 20 }}>
          <ButtonBack />
        </div>
        <Tabs defaultActiveKey={1} type="card">
          <Tabs.TabPane tab="Kết quả" key={1}>
            <TabResult />
          </Tabs.TabPane>
          <Tabs.TabPane tab="Thành tích" key={2}>
            <TabCertificate />
          </Tabs.TabPane>
        </Tabs>
      </div>
      <FooterStudent />
    </div>
  );
}
