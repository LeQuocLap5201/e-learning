import React from "react";
import PropTypes from "prop-types";
import { Card, Form, Row, Col } from "antd";

StepThird.propTypes = {
  currentStep: PropTypes.number,
  nextStep: PropTypes.func,
};

StepThird.defaultProps = {
  currentStep: 0,
  nextStep: null,
};

function StepThird({ currentStep, nextStep }) {
  const [form] = Form.useForm();

  return (
    <Form className="step-third">
      <Card>
        <Row gutter={16}>
          <Col span={12}>col-12</Col>
          <Col span={12}>col-12</Col>
          <Col span={12}>col-12</Col>
          <Col span={12}>col-12</Col>
        </Row>
      </Card>
    </Form>
  );
}

export default StepThird;
