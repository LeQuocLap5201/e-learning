import { Col, Row } from "antd";
import React, { useEffect } from "react";
import Lottie from "lottie-react";
import Learning from "../../lotties/learning.json";
import Footer from "../components/Footer";
import LoginForm from "../components/LoginForm";
import { useNavigate } from "react-router-dom";

export default function LoginAdmin() {
  const token = JSON.parse(localStorage.getItem("e-learning-crm"));
  const navigate = useNavigate();

  useEffect(() => {
    if (token) {
      return navigate("/admin");
    }
  }, [navigate, token]);

  if (token) {
    return <></>;
  }

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
