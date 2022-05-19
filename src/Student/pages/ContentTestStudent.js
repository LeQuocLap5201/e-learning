import { Button, Modal, Space, Result, Card } from "antd";
import React, { useState } from "react";
import TestQuestion from "../components/TestQuestion";
import { Link } from "react-router-dom";

export default function ContentTestStudent() {
  const [isSuccess, setSuccess] = useState(false);

  return (
    <div className="content-test-student">
      <h3>NỘI DUNG BÀI THI</h3>
      <Card style={{marginBottom: 10}}>
        <Result
          status="success"
          title="Chúc mừng bạn đã vượt qua bài thi"
          extra={
            <>
              <Link to="/student/courses/3">
                <Button type="primary" className="btn-student">
                  Học tiếp
                </Button>
              </Link>
              <Link to="/student">
                <Button>Trang chủ</Button>
              </Link>
            </>
          }
        />
      </Card>
      <Card style={{marginBottom: 10}}>
        <Result
          status="error"
          title="Rất tiếc!Bạn chưa vượt qua bài thi"
          subTitle={
            <div>
              <p>Số câu đúng:1/5</p>
              <p>Tỷ lệ:20%</p>
            </div>
          }
          extra={
            <>
              <Link to="/student/test/3">
                <Button type="primary" className="btn-student">
                  Thi lại
                </Button>
              </Link>
              <Link to="/student/courses/3">
                <Button type="primary" className="btn-student">
                  Học lại
                </Button>
              </Link>
              <Link to="/student">
                <Button>Trang chủ</Button>
              </Link>
            </>
          }
        />
      </Card>
      <div className="content-test-student__list">
        <TestQuestion />
        <TestQuestion status={-1} />
        <TestQuestion status={1} />
        <TestQuestion />
      </div>
      <Button
        className="btn-student btn-fixed"
        type="primary"
        onClick={() => {
          setSuccess(true);
        }}
      >
        Gửi kết quả (00:40)
      </Button>
      <Modal
        title="Hoàn thành bài thi"
        visible={isSuccess}
        onOk={() => {
          setSuccess(false);
        }}
        onCancel={() => {
          setSuccess(false);
        }}
        footer={null}
      >
        <p>
          <b>Bạn có muốn nộp bài thi ?</b>
        </p>
        <Space style={{ width: "100%", justifyContent: "center" }}>
          <Button
            type="primary"
            className="btn-student"
            onClick={() => {
              setSuccess(false);
            }}
          >
            Đồng ý
          </Button>
          <Button
            type="primary"
            className="btn-student"
            onClick={() => {
              setSuccess(false);
            }}
          >
            Hủy
          </Button>
        </Space>
      </Modal>
    </div>
  );
}
