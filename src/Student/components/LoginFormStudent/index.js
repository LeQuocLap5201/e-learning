import { LockOutlined, UserOutlined } from "@ant-design/icons";
import {
  Button,
  Card,
  Col,
  DatePicker,
  Descriptions,
  Form,
  Input,
  Modal,
  Row,
  Select,
  Space,
} from "antd";
import React, { useState } from "react";
import useViewport from "../../../hooks/useViewport";
import "./index.css";

export default function LoginFormStudent() {
  const viewPort = useViewport();

  const [form] = Form.useForm();
  const [isForget, setIsForget] = useState(false);
  const [isRegistration, setIsRegistration] = useState(false);

  return (
    <div className="login-form-student">
      <span className="login-form-student__title">HỌC VÀ THI TRỰC TUYẾN</span>
      <Row className="login-form-student__form">
        <Col xxl={6} xl={6} lg={12} md={12} sm={16}>
          <Card bordered className="login-form-student__card">
            <h2>ĐĂNG NHẬP</h2>
            <p>Bệnh Viện Chợ Rẫy</p>
            <Form>
              <Form.Item
                name="username"
                rules={[
                  {
                    required: true,
                    message: "Vui lòng nhập số điện thoại/ email!",
                  },
                ]}
              >
                <Input
                  placeholder="Số điện thoại/ email!"
                  prefix={<UserOutlined />}
                />
              </Form.Item>
              <Form.Item
                name="password"
                rules={[
                  {
                    required: true,
                    message: "Vui lòng nhập mật khẩu!",
                  },
                ]}
              >
                <Input.Password
                  placeholder="Password"
                  prefix={<LockOutlined />}
                />
              </Form.Item>
              <Form.Item>
                <Button
                  className="btn-primary btn-student"
                  block
                  type="primary"
                  htmlType="submit"
                >
                  Đăng nhập
                </Button>
              </Form.Item>
              <Space
                style={{
                  width: "100%",
                  justifyContent: "space-between",
                  flexWrap: "wrap",
                }}
              >
                <Button
                  type="link"
                  onClick={() => {
                    setIsForget(true);
                  }}
                  style={{ color: "#0083b0" }}
                >
                  Quên mật khẩu
                </Button>
                <Button
                  type="link"
                  onClick={() => {
                    setIsRegistration(true);
                  }}
                  style={{ color: "#0083b0" }}
                >
                  Đăng ký
                </Button>
              </Space>
            </Form>
          </Card>
          <span style={{ color: "#6c757d" }}>Version: 0.1.1</span>
        </Col>
      </Row>
      <Modal
        title="Quên mật khẩu"
        visible={isForget}
        onOk={() => {
          setIsForget(false);
        }}
        onCancel={() => {
          setIsForget(false);
        }}
        width={950}
        className="login-form-student__modal modal-custom"
        footer={null}
      >
        <Form form={form}>
          <Descriptions
            bordered
            column={1}
            layout={viewPort <= 576 ? "vertical" : "horizontal"}
          >
            <Descriptions.Item
              label={
                <>
                  Số điện thoại <span className="input-required">*</span>
                </>
              }
            >
              <Form.Item
                name="phone"
                rules={[
                  {
                    required: true,
                    message: "Vui lòng nhập số điện thoại!",
                  },
                ]}
              >
                <Input placeholder="Số điện thoại" />
              </Form.Item>
            </Descriptions.Item>
            <Descriptions.Item
              label={
                <>
                  Email <span className="input-required">*</span>
                </>
              }
            >
              <Form.Item
                name="email"
                rules={[
                  {
                    required: true,
                    message: "Vui lòng nhập email!",
                  },
                  {
                    type: "email",
                    message: "Email chưa đúng định dạng!",
                  },
                ]}
              >
                <Input placeholder="Email" />
              </Form.Item>
            </Descriptions.Item>
            <Descriptions.Item
              label={
                <>
                  Mật khẩu mới
                  <span className="input-required">*</span>
                </>
              }
            >
              <Form.Item
                hasFeedback
                name="passwordNew"
                rules={[
                  {
                    required: true,
                    message: "Vui lòng nhập mật khẩu mới!",
                  },
                  {
                    message:
                      "Mật khẩu phải có ít nhất 6 ký tự bao gồm chữ và số và không có ký tự đặc biệt",
                    pattern: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/,
                  },
                ]}
              >
                <Input.Password placeholder="Mật khẩu mới" />
              </Form.Item>
            </Descriptions.Item>
            <Descriptions.Item
              label={
                <>
                  Xác nhận mật khẩu mới
                  <span className="input-required">*</span>
                </>
              }
            >
              <Form.Item
                hasFeedback
                name="passwordConfirm"
                dependencies={["passwordNew"]}
                rules={[
                  {
                    required: true,
                    message: "Vui lòng xác nhận mật khẩu mớii!",
                  },
                  ({ getFieldValue }) => ({
                    validator(_, value) {
                      if (!value || getFieldValue("passwordNew") === value) {
                        return Promise.resolve();
                      }

                      return Promise.reject(
                        new Error(
                          "Xác nhận mật khẩu chưa trùng khớp với mật khẩu mới!"
                        )
                      );
                    },
                  }),
                ]}
              >
                <Input.Password placeholder="Xác nhận mật khẩu mới" />
              </Form.Item>
            </Descriptions.Item>
          </Descriptions>
          <Space
            style={{
              display: "flex",
              justifyContent: "flex-end",
              marginTop: 15,
            }}
          >
            <Button
              htmlType="submit"
              type="primary"
              className="btn-primary btn-student"
            >
              Hoàn thành
            </Button>
          </Space>
        </Form>
      </Modal>
      <Modal
        title="Đăng ký thành viên"
        visible={isRegistration}
        onOk={() => {
          setIsRegistration(false);
        }}
        onCancel={() => {
          setIsRegistration(false);
        }}
        width={950}
        className="login-form-student__modal modal-custom"
        footer={null}
      >
        <Form>
          <Descriptions
            column={1}
            bordered
            layout={viewPort <= 576 ? "vertical" : "horizontal"}
          >
            <Descriptions.Item
              label={
                <>
                  Họ tên thành viên <span className="input-required">*</span>
                </>
              }
            >
              <Form.Item
                name="full_name"
                rules={[
                  {
                    required: true,
                    message: "Vui lòng nhập họ tên thành viên!",
                  },
                ]}
              >
                <Input placeholder="Họ tên thành viên" />
              </Form.Item>
            </Descriptions.Item>
            <Descriptions.Item label="Giới tính">
              <Form.Item name="gender">
                <Select placeholder="Giới tính" defaultValue={1}>
                  <Select.Option value={1}>Nam</Select.Option>
                  <Select.Option value={2}>Nữ</Select.Option>
                </Select>
              </Form.Item>
            </Descriptions.Item>
            <Descriptions.Item
              label={
                <>
                  Ngày sinh <span className="input-required">*</span>
                </>
              }
            >
              <Form.Item
                name="birthday"
                rules={[
                  {
                    required: true,
                    message: "Vui lòng chọn ngày sinh!",
                  },
                ]}
              >
                <DatePicker placeholder="Chọn ngày sinh" format="DD-MM-YYYY" />
              </Form.Item>
            </Descriptions.Item>
            <Descriptions.Item
              label={
                <>
                  Số điện thoại <span className="input-required">*</span>
                </>
              }
            >
              <Form.Item
                name="phone"
                rules={[
                  {
                    required: true,
                    message: "Vui lòng nhập số điện thoại!",
                  },
                ]}
              >
                <Input placeholder="Số điện thoại" />
              </Form.Item>
            </Descriptions.Item>
            <Descriptions.Item
              label={
                <>
                  Email <span className="input-required">*</span>
                </>
              }
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
                <Input placeholder="Email" />
              </Form.Item>
            </Descriptions.Item>
            <Descriptions.Item label="Đơn vị công tác">
              <Form.Item name="hospital">
                <Input
                  placeholder="Đơn vị công tác"
                  defaultValue="Bệnh viện Chợ Rẫy"
                  readOnly
                />
              </Form.Item>
            </Descriptions.Item>
            <Descriptions.Item
              label={
                <>
                  Đối tượng <span className="input-required">*</span>
                </>
              }
            >
              <Form.Item
                name="object"
                rules={[
                  {
                    required: true,
                    message: "Vui lòng chọn đối tượng!",
                    type: "array",
                  },
                ]}
              >
                <Select
                  mode="multiple"
                  allowClear
                  showSearch
                  placeholder="Đối tượng"
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
            </Descriptions.Item>
            <Descriptions.Item
              label={
                <>
                  Khoa-Phòng-Đơn vị
                  <span className="input-required">*</span>
                </>
              }
            >
              <Row gutter={16}>
                <Col span={12}>
                  <Form.Item name="group">
                    <Select placeholder="Nhóm">
                      <Select.Option value="jack">Jack</Select.Option>
                      <Select.Option value="lucy">Lucy</Select.Option>
                      <Select.Option value="Yiminghe">yiminghe</Select.Option>
                    </Select>
                  </Form.Item>
                </Col>
                <Col span={12}>
                  <Form.Item name="kpdv">
                    <Select placeholder="Khoa-Phòng-Đơn vị">
                      <Select.Option value="jack">Jack</Select.Option>
                      <Select.Option value="lucy">Lucy</Select.Option>
                      <Select.Option value="Yiminghe">yiminghe</Select.Option>
                    </Select>
                  </Form.Item>
                </Col>
              </Row>
            </Descriptions.Item>
            <Descriptions.Item label="Học vị">
              <Form.Item name="hocvi">
                <Select
                  showSearch
                  placeholder="Học vị"
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
            </Descriptions.Item>
            <Descriptions.Item label="Chức vụ">
              <Form.Item name="position">
                <Select
                  showSearch
                  placeholder="Chức vụ"
                  optionFilterProp="children"
                  // onChange={onChange}
                  // onSearch={onSearch}
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
            </Descriptions.Item>
          </Descriptions>
          <Space
            style={{
              display: "flex",
              justifyContent: "flex-end",
              marginTop: 15,
            }}
          >
            <Button
              htmlType="submit"
              type="primary"
              className="btn-primary btn-student"
            >
              Hoàn thành
            </Button>
          </Space>
        </Form>
      </Modal>
    </div>
  );
}
