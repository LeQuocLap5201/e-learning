import { Button, Form, Input, message } from "antd";
import React from "react";
import { useNavigate } from "react-router-dom";
import userApi from "../../api/userApi";
import "./index.css";

export default function LoginForm() {
  const navigate = useNavigate();

  const onFinish = async (value) => {
    try {
      const { data } = await userApi.login(value);
      localStorage.setItem("e-learning-crm", JSON.stringify(data));
      return navigate("/admin");
    } catch (error) {
      message.error("Email hoặc mật khẩu không chính xác");
    }
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <div className="login-form">
      <h2>QUẢN LÝ HỆ THỐNG HỌC {"&"} THI TRỰC TUYẾN</h2>
      <Form
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        name="login"
        style={{ width: 450, margin: "0 auto" }}
      >
        <Form.Item
          name="email"
          rules={[
            {
              type: "email",
              message: "Sai định dạng E-mail!",
            },
            {
              required: true,
              message: "Vui lòng nhập E-mail!",
            },
          ]}
        >
          <Input size="large" placeholder="Email" />
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
