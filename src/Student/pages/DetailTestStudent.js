import { Alert, Button, Col, Row } from "antd";
import React from "react";
import { Link } from "react-router-dom";
import ButtonBack from "../components/ButtonBack";

export default function DetailTestStudent() {
  return (
    <div
      style={{
        minHeight: "calc(100vh - 64px)",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      <div className="detail-test main-student" style={{ marginBottom: 40 }}>
        <div style={{ marginBottom: 20 }}>
          <ButtonBack />
        </div>
        <div className="detail-test__content">
          <Alert
            message={<b>Lưu ý</b>}
            description={
              <p style={{ color: "red" }}>
                Bạn không vượt qua bài thi 3 lần liên tục. Vui lòng chờ đến{" "}
                <b>16:48 01/12/2021</b> để thi lại.
              </p>
            }
            type="warning"
            showIcon
          />
          <h3>1412 Test</h3>
          <Row gutter={[16, 10]}>
            <Col xs={12} sm={4}>
              <b>Số câu hỏi</b>
            </Col>
            <Col xs={12} sm={20}>
              5
            </Col>
            <Col xs={12} sm={4}>
              <b>Thời gian thi</b>
            </Col>
            <Col xs={12} sm={20}>
              10 phút
            </Col>
          </Row>
        </div>
      </div>
      <Link to={`${5}`}>
        <Button className="btn-student btn-fixed" type="primary">
          Bắt đầu thi
        </Button>
      </Link>
    </div>
  );
}
