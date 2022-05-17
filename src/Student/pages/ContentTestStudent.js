import { Button, Modal, Space, Result } from "antd";
import React, { useState } from "react";
import TestQuestion from "../components/TestQuestion";

export default function ContentTestStudent() {
  const [isSuccess, setSuccess] = useState(false);

  return (
    <div className="content-test-student">
      <h3>NỘI DUNG BÀI THI</h3>
      <Result
        status="success"
        title="Chúc mừng bạn đã vượt qua bài thi"
        extra={[
          <Button type="primary" key="console">
            Go Console
          </Button>,
          <Button key="buy">Buy Again</Button>,
        ]}
      />
      <div className="content-test-student__list">
        <TestQuestion />
        <TestQuestion />
        <TestQuestion />
        <TestQuestion />
      </div>
      <Button
        className="btn-primary btn-fixed"
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
            className="btn-primary"
            onClick={() => {
              setSuccess(false);
            }}
          >
            Đồng ý
          </Button>
          <Button
            type="primary"
            className="btn-primary"
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
