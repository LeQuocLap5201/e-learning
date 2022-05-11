import { Col, Row } from "antd";
import React from "react";
import Lottie from "lottie-react";
import Learning from "../../lotties/learning.json";
import Footer from "../components/Footer";
import LoginForm from "../components/LoginForm";

export default function LoginAdmin() {
  return (
    <div className="login-admin">
      <Row align="middle" justify="center">
        <Col xs={24} sm={12} md={12} lg={12} xl={12} xxl={12}>
          <Lottie animationData={Learning} autoPlay={true} loop={true} />
        </Col>
        <Col xs={24} sm={12} md={12} lg={12} xl={12} xxl={12}>
          <LoginForm />
        </Col>
      </Row>
      <Footer />
    </div>
  );
}
