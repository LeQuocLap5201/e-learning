import React from "react";
import PropTypes from "prop-types";
import {
  Card,
  Form,
  Row,
  Col,
  Input,
  Select,
  InputNumber,
  Tooltip,
  Button,
} from "antd";
import "./index.css";
import { QuestionCircleOutlined } from "@ant-design/icons";

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

  const initData = {
    examTime: 1,
    no_questions: 5,
  };

  return (
    <Form
      form={form}
      className="step-third"
      labelCol={{ span: 7 }}
      wrapperCol={{ span: 17 }}
      initialValues={initData}
    >
      <Card>
        <Row gutter={16}>
          <Col span={12}>
            <Form.Item
              name="name"
              label="Tên bài kiểm tra"
              rules={[
                {
                  message: "Vui lòng nhập tên bài kiểm tra!",
                  required: true,
                },
              ]}
            >
              <Input placeholder="Tên bài kiểm tra" />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item
              noStyle
              shouldUpdate={(prev, curr) => {
                return prev.type !== curr.type;
              }}
            >
              {({ getFieldValue }) => {
                if (
                  getFieldValue("type") === 1 ||
                  getFieldValue("type") === 2
                ) {
                  return (
                    <Form.Item
                      name="subject_id"
                      label="Chuyên đề"
                      rules={[
                        {
                          message: "Mời chọn chuyên đề!",
                          required: true,
                        },
                      ]}
                    >
                      <Select
                        showSearch
                        placeholder="Chọn chuyên đề"
                        optionFilterProp="children"
                        filterOption={(input, option) =>
                          option.children
                            .toLowerCase()
                            .indexOf(input.toLowerCase()) >= 0
                        }
                      >
                        <Select.Option value="jack">Jack</Select.Option>
                        <Select.Option value="lucy">Lucy</Select.Option>
                        <Select.Option value="tom">Tom</Select.Option>
                      </Select>
                    </Form.Item>
                  );
                }
              }}
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item
              name="type"
              label="Loại bài kiểm tra"
              rules={[
                {
                  message: "Vui lòng nhập loại bài kiểm tra!",
                  required: true,
                },
              ]}
            >
              <Select placeholder="Loại bài kiểm tra">
                <Select.Option value={1}>Bài kiểm tra chuyên đề</Select.Option>
                <Select.Option value={2}>Bài kiểm tra chương</Select.Option>
              </Select>
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item
              noStyle
              shouldUpdate={(prev, curr) => {
                return prev.type !== curr.type;
              }}
            >
              {({ getFieldValue }) => {
                if (getFieldValue("type") === 2) {
                  return (
                    <Form.Item
                      name="chap_id"
                      label="Chương"
                      rules={[
                        {
                          message: "Mời chọn chương!",
                          required: true,
                        },
                      ]}
                    >
                      <Select
                        showSearch
                        placeholder="Chọn chương"
                        optionFilterProp="children"
                        filterOption={(input, option) =>
                          option.children
                            .toLowerCase()
                            .indexOf(input.toLowerCase()) >= 0
                        }
                      >
                        <Select.Option value="jack">Jack</Select.Option>
                        <Select.Option value="lucy">Lucy</Select.Option>
                        <Select.Option value="tom">Tom</Select.Option>
                      </Select>
                    </Form.Item>
                  );
                }
              }}
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item
              name="examTime"
              label="Thời gian làm bài"
              rules={[
                {
                  message: "Vui lòng nhập thời gian!",
                  required: true,
                },
              ]}
            >
              <InputNumber placeholder="Thời gian làm bài" min={1} />
            </Form.Item>
          </Col>
          <Col span={12} />
          <Col span={12}>
            <Form.Item
              name="no_questions"
              label={
                <>
                  Số lượng câu hỏi{" "}
                  <Tooltip title="Số lượng câu hỏi được chọn lọc ngẫu nhiên cho bài kiểm tra. Ít nhất 5 câu hỏi">
                    <QuestionCircleOutlined
                      style={{ marginLeft: 5, color: "#a9a9a9" }}
                    />
                  </Tooltip>
                </>
              }
              rules={[
                { message: "Vui lòng số lượng câu hỏi!", required: true },
              ]}
            >
              <InputNumber placeholder="Số lượng câu hỏi" min={5} />
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
            Tạo bài kiểm tra
          </Button>
        </Row>
      </Card>
    </Form>
  );
}

export default StepThird;
