import { CrownOutlined, SafetyCertificateOutlined } from "@ant-design/icons";
import { Card, Col, Input, Pagination, Row } from "antd";
import React from "react";
import "./index.css";
import CardCertificate from "../CardCertificate";

export default function TabCertificate() {
  return (
    <div className="tab-certificate">
      <Card className="tab-certificate__card">
        <Row gutter={[16, 5]}>
          <Col xl={8} lg={8} md={12} sm={12} xs={12}>
            Thành tích chuyên đề
          </Col>
          <Col xl={16} lg={16} md={12} sm={12} xs={12}>
            <b style={{ marginRight: 5 }}>10</b>
            <CrownOutlined style={{ fontSize: 18, color: "#008000" }} />
          </Col>
          <Col xl={8} lg={8} md={12} sm={12} xs={12}>
            Thành tích chương
          </Col>
          <Col xl={16} lg={16} md={12} sm={12} xs={12}>
            <b style={{ marginRight: 5 }}>10</b>
            <SafetyCertificateOutlined
              style={{ fontSize: 18, color: "#008000" }}
            />
          </Col>
        </Row>
      </Card>
      <Row gutter={16}>
        <Col xl={14} lg={14} md={14} sm={24} xs={24}>
          <h3>Danh sách chuyên đề có thành tích</h3>
        </Col>
        <Col xl={10} lg={10} md={10} sm={24} xs={24}>
          <Input.Search
            style={{ width: "100%" }}
            className="btn-search"
            enterButton
            placeholder="Tìm tên chuyên đề/tên chương"
            allowClear
          />
        </Col>
      </Row>
      <Row style={{ marginTop: 15 }}>
        <Pagination
          style={{ marginLeft: "auto" }}
          simple
          defaultCurrent={1}
          total={2}
        />
      </Row>
      <Row gutter={[16, 16]}>
        <Col span={8}>
          <CardCertificate />
        </Col>
        <Col span={8}>
          <CardCertificate />
        </Col>
        <Col span={8}>
          <CardCertificate />
        </Col>
        <Col span={8}>
          <CardCertificate />
        </Col>
      </Row>
      <Row style={{ marginTop: 15 }}>
        <Pagination
          style={{ marginLeft: "auto" }}
          simple
          defaultCurrent={1}
          total={2}
        />
      </Row>
    </div>
  );
}
