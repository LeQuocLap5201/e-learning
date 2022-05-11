import { Button, Form, Input } from "antd";
import React from "react";
import "./index.css";

export default function LoginForm() {
  return (
    <div className="login-form">
      <h2>QUẢN LÝ HỆ THỐNG HỌC & THI TRỰC TUYẾN</h2>
      <Form name="login" style={{ width: 450, margin: "0 auto" }}>
        <Form.Item
          name="username"
          rules={[{ message: "Vui lòng nhập tên đăng nhập!", required: true }]}
        >
          <Input size="large" placeholder="Username" />
        </Form.Item>

        <Form.Item
          hasFeedback
          name="password"
          rules={[
            {
              required: true,
              message: "Vui lòng nhập mật khẩu!",
            },
          ]}
        >
          <Input.Password size="large" placeholder="Password" />
        </Form.Item>

        <Form.Item>
          <Button
            size="large"
            block
            type="primary"
            htmlType="submit"
            className="login-form__btn"
          >
            Đăng nhập
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}
