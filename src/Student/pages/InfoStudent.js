import { Card, Col, Row } from "antd";
import React from "react";
import ButtonBack from "../components/ButtonBack";
import FooterStudent from "../components/FooterStudent";

export default function InfoStudent() {
  return (
    <div
      style={{
        minHeight: "calc(100vh - 64px)",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      <div className="info-student main-student">
        <div style={{ marginBottom: 20 }}>
          <ButtonBack />
        </div>
        <Card className="info-student__card">
          <Row gutter={[16, 10]}>
            <Col span={10}>Họ và tên</Col>
            <Col span={14}>
              <b>Admin 1</b>
            </Col>
            <Col span={10}>Tên đăng nhập</Col>
            <Col span={14}>
              <b>LRTNguyetbich</b>
            </Col>
            <Col span={10}>Email</Col>
            <Col span={14}>
              <b>lrtnguyetbich@lubrytics.com</b>
            </Col>
            <Col span={10}>Số điện thoại</Col>
            <Col span={14}>
              <b>0345678900</b>
            </Col>
            <Col span={10}>Đơn vị công tác</Col>
            <Col span={14}>
              <b>Bệnh viện Chợ Rẫy</b>
            </Col>
            <Col span={10}>Đối tượng</Col>
            <Col span={14}>
              <b>Giáo sư, Tiến sĩ, PGS, Tiến sĩ, Tiến sĩ, Bác sĩ</b>
            </Col>
            <Col span={10}>Khoa/ Phòng/ Đơn vị</Col>
            <Col span={14}>
              <b>Phòng Điều Dưỡng</b>
            </Col>
            <Col span={10}>Học vị</Col>
            <Col span={14}>
              <b>TS.BS</b>
            </Col>
            <Col span={10}>Chức vụ</Col>
            <Col span={14}>
              <b>Khác</b>
            </Col>
            <Col span={10}>Ngày kích hoạt</Col>
            <Col span={14}>
              <b>22-01-2021</b>
            </Col>
          </Row>
        </Card>
      </div>
      <FooterStudent />
    </div>
  );
}
