import { CrownOutlined, SafetyCertificateOutlined } from "@ant-design/icons";
import { Card, Col, Input, Pagination, Row } from "antd";
import React from "react";
import "./index.css";
import CardCertificate from "../CardCertificate";
import Lottie from "lottie-react";
import Graduation from "../../../lotties/graduation.json";

export default function TabCertificate() {
  return (
    <div className="tab-certificate">
      <Card className="tab-certificate__card">
        <Row gutter={[16, 5]}>
          <Col span={16}>Thành tích chuyên đề</Col>
          <Col span={8}>
            <b style={{ marginRight: 5 }}>10</b>
            <CrownOutlined
            // style={{ fontSize: 18, color: "#008000" }}
            />
          </Col>
          <Col span={16}>Thành tích chương</Col>
          <Col span={8}>
            <b style={{ marginRight: 5 }}>10</b>
            <SafetyCertificateOutlined
            // style={{ fontSize: 18, color: "#008000" }}
            />
          </Col>
        </Row>
        <Lottie
          className="certificate-svg"
          animationData={Graduation}
          autoPlay={true}
          loop={true}
        />
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
      <Row style={{ margin: "15px 0" }}>
        <Pagination
          style={{ marginLeft: "auto" }}
          simple
          defaultCurrent={1}
          total={20}
        />
      </Row>
      <Row gutter={[20, 20]}>
        <Col lg={8} xl={8} md={12} xs={24}>
          <CardCertificate />
        </Col>
        <Col lg={8} xl={8} md={12} xs={24}>
          <CardCertificate />
        </Col>
        <Col lg={8} xl={8} md={12} xs={24}>
          <CardCertificate />
        </Col>
        <Col lg={8} xl={8} md={12} xs={24}>
          <CardCertificate />
        </Col>
      </Row>
      <Row style={{ marginTop: 15 }}>
        <Pagination
          style={{ marginLeft: "auto" }}
          simple
          defaultCurrent={1}
          total={20}
        />
      </Row>
    </div>
  );
}
