import {
  CheckCircleOutlined,
  CheckOutlined,
  MinusCircleOutlined,
  PlusOutlined,
} from "@ant-design/icons";
import {
  Button,
  Card,
  Col,
  Form,
  Input,
  Modal,
  Row,
  Select,
  Space,
} from "antd";
import React, { useState } from "react";
import Question from "../Question";
import "./index.css";

export default function ChapterSecond() {
  const [choose, setChoose] = useState();
  const [showAnswer, setShowAnswer] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <div className="chapter-second table-second">
      <Card
        title="Danh sách câu hỏi"
        extra={
          <Button
            icon={<PlusOutlined />}
            style={{ color: "#1890ff", borderColor: "#1890ff" }}
            onClick={showModal}
          >
            Thêm câu hỏi
          </Button>
        }
      >
        <Row>
          <Question />
          <Question />
        </Row>
      </Card>
      <Modal
        title="Thêm câu hỏi"
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
        okText="Thêm mới"
        cancelText="Hủy bỏ"
        width={700}
      >
        <Form labelCol={{ span: 4 }} wrapperCol={{ span: 20 }}>
          <Row>
            <Col span={24}>
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
            <Col span={24}>
              <Form.Item name="note" label="Chú thích">
                <Input.TextArea rows={1} placeholder="Chú thích" allowClear />
              </Form.Item>
            </Col>
            <Col span={24}>
              <Form.Item name="subject_id" label="Link chương">
                <Select placeholder="Link chương">
                  <Select.Option value={1}>Link 1</Select.Option>
                  <Select.Option value={2}>Link 2</Select.Option>
                </Select>
              </Form.Item>
            </Col>
            {showAnswer && (
              <Col span={24}>
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
                  wrapperCol={{ span: 24 }}
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
                            labelCol={{ span: 4 }}
                            wrapperCol={{ span: 20 }}
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
        </Form>
      </Modal>
    </div>
  );
}
