import { Col, Row } from "antd";
import React from "react";
import ButtonBack from "../components/ButtonBack";
import CardCourse from "../components/CardCourse";
import FooterStudent from "../components/FooterStudent";

export default function CoursesStudent() {
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
        className="courses-student main-student"
        style={{ marginBottom: 40 }}
      >
        <div style={{ marginBottom: 20 }}>
          <ButtonBack />
        </div>
        <Row gutter={[20, 20]}>
          <Col span={6}>
            <CardCourse />
          </Col>
          <Col span={6}>
            <CardCourse />
          </Col>
          <Col span={6}>
            <CardCourse />
          </Col>
          <Col span={6}>
            <CardCourse />
          </Col>
          <Col span={6}>
            <CardCourse />
          </Col>
          <Col span={6}>
            <CardCourse />
          </Col>
          <Col span={6}>
            <CardCourse />
          </Col>
          <Col span={6}>
            <CardCourse />
          </Col>
          <Col span={6}>
            <CardCourse />
          </Col>
        </Row>
      </div>
      <FooterStudent />
    </div>
  );
}
