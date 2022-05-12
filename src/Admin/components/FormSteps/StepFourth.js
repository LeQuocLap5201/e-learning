import React, { useState } from "react";
import PropTypes from "prop-types";
import { Button, Col, Form, Input, Row, Select, Space } from "antd";
import "./index.css";
import {
  CheckCircleOutlined,
  CheckOutlined,
  MinusCircleOutlined,
  PlusOutlined,
} from "@ant-design/icons";
import Question from "../Question";

StepFourth.propTypes = {
  currentStep: PropTypes.number,
  nextStep: PropTypes.func,
};

StepFourth.defaultProps = {
  currentStep: 0,
  nextStep: null,
};

function StepFourth({ currentStep, nextStep }) {
  const [form] = Form.useForm();

  const [choose, setChoose] = useState();
  const [showAnswer, setShowAnswer] = useState(false);

  return (
    <Form
      form={form}
      className="step-fourth"
      labelCol={{ span: 4 }}
      wrapperCol={{ span: 18 }}
    >
      <Row>
        <Col span={16}>
          <Form.Item
            name="content"
            label="Câu hỏi"
            rules={[{ message: "Vui lòng nhập câu hỏi!", required: true }]}
          >
            <Input.TextArea
              onChange={(e) => {
                if (e.target.value !== "") {
                  setShowAnswer(true);
                } else {
                  setShowAnswer(false);
                }
              }}
              rows={1}
              placeholder="Câu hỏi"
              allowClear
            />
          </Form.Item>
        </Col>
        <Col span={16}>
          <Form.Item name="note" label="Chú thích">
            <Input.TextArea rows={1} placeholder="Chú thích" allowClear />
          </Form.Item>
        </Col>
        <Col span={16}>
          <Form.Item name="subject_id" label="Link chương">
            <Select placeholder="Link chương">
              <Select.Option value={1}>Link 1</Select.Option>
              <Select.Option value={2}>Link 2</Select.Option>
            </Select>
          </Form.Item>
        </Col>
        {showAnswer && (
          <Col span={16}>
            <Form.Item
              name="checkAnswer"
              style={{ marginBottom: 0 }}
              rules={[
                ({ getFieldValue }) => ({
                  validator(rule, value) {
                    if (
                      getFieldValue("answers") &&
                      getFieldValue("answers").length >= 2
                    ) {
                      return Promise.resolve();
                    }
                    return Promise.reject("Phải có ít nhất 2 đáp án");
                  },
                }),
              ]}
            >
              <Form.List name="answers" initialValue={["", "", "", ""]}>
                {(fields, { add, remove }, { errors }) => (
                  <>
                    {fields.map((field, index) => (
                      <Form.Item
                        style={{ marginBottom: 15 }}
                        required={false}
                        key={field.key}
                        label={`Đáp án #${index + 1}`}
                      >
                        <Form.Item
                          {...field}
                          validateTrigger={["onChange", "onBlur"]}
                          rules={[
                            {
                              required: true,
                              message: "Vui lòng nhập đáp án!.",
                            },
                          ]}
                          noStyle
                        >
                          <Input
                            placeholder="Đáp án"
                            style={{ width: "85%" }}
                          />
                        </Form.Item>
                        {fields.length > 2 ? (
                          <Space style={{ marginLeft: 15 }}>
                            {choose === field.key ? (
                              <CheckCircleOutlined
                                style={{ color: "#42A4FF" }}
                              />
                            ) : (
                              <CheckOutlined
                                onClick={() => setChoose(field.key)}
                              />
                            )}
                            <MinusCircleOutlined
                              onClick={() => remove(field.name)}
                            />
                          </Space>
                        ) : (
                          <Space style={{ marginLeft: 15 }}>
                            {choose === field.key ? (
                              <CheckCircleOutlined
                                style={{ color: "#42A4FF" }}
                              />
                            ) : (
                              <CheckOutlined
                                onClick={() => setChoose(field.key)}
                              />
                            )}
                          </Space>
                        )}
                      </Form.Item>
                    ))}

                    <Form.Item>
                      <Button
                        style={{ width: "100%" }}
                        type="dashed"
                        onClick={() => add()}
                        icon={<PlusOutlined />}
                      >
                        Thêm đáp án
                      </Button>
                      <Form.ErrorList errors={errors} />
                    </Form.Item>
                  </>
                )}
              </Form.List>
            </Form.Item>
          </Col>
        )}
      </Row>
      <Row>
        <Question />
        <Question />
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
          Kế tiếp
        </Button>
      </Row>
    </Form>
  );
}

export default StepFourth;
