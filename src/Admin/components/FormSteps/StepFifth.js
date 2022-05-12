import React from "react";
import PropTypes from "prop-types";
import { Button, Card, Checkbox, Col, Form, Row, Select } from "antd";
import "./index.css";

StepFifth.propTypes = {
  currentStep: PropTypes.number,
  nextStep: PropTypes.func,
};

StepFifth.defaultProps = {
  currentStep: 0,
  nextStep: null,
};

function StepFifth({ currentStep, nextStep }) {
  const [form] = Form.useForm();

  return (
    <Card>
      <Form
        form={form}
        className="step-fifth"
        labelCol={{ span: 4 }}
        wrapperCol={{ span: 18 }}
      >
        <Row>
          <Col span={24}>
            <p style={{ color: "red" }}>
              Vui lòng chọn các chương sẽ có câu hỏi trong bài kiểm tra chuyên
              đề !
            </p>
          </Col>
          <Col span={16}>
            <Form.Item
              style={{ marginBottom: 10 }}
              name="chapter_ids"
              label="Chương"
              rules={[
                {
                  required: true,
                  message: "Vui lòng chọn chương!",
                  type: "array",
                },
              ]}
            >
              <Select
                showSearch
                mode="multiple"
                placeholder="Chương"
                optionFilterProp="children"
                filterOption={(input, option) =>
                  option.children.toLowerCase().indexOf(input.toLowerCase()) >=
                  0
                }
              >
                <Select.Option value="jack">Jack</Select.Option>
                <Select.Option value="lucy">Lucy</Select.Option>
                <Select.Option value="tom">Tom</Select.Option>
              </Select>
            </Form.Item>
            <Form.Item
              name="check_all"
              valuePropName="checked"
              wrapperCol={{ offset: 4 }}
            >
              <Checkbox id="check_all">Tất cả đối tượng</Checkbox>
            </Form.Item>
          </Col>
        </Row>
        <Row style={{ justifyContent: "flex-end" }}>
          <Button
            htmlType="submit"
            type="primary"
            className="btn-primary"
            onClick={() => {
              if (!nextStep) return;

              return nextStep(currentStep + 1);
            }}
          >
            Lưu thông tin bài kiểm tra
          </Button>
        </Row>
      </Form>
    </Card>
  );
}

export default StepFifth;
