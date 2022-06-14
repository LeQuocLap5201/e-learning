import React from "react";
import PropTypes from "prop-types";
import { Button, Card, Col, Form, Input, Row, Select, Space } from "antd";

AddUser.propTypes = {
  showDetail: PropTypes.bool,
  dataDetail: PropTypes.object,
};

AddUser.defaultProps = {
  showDetail: false,
  dataDetail: {},
};

const layoutForm = {
  labelCol: { span: 6 },
  wrapperCol: { offset: 1, span: 15 },
};

function AddUser({ showDetail, dataDetail }) {
  const [form] = Form.useForm();

  //Submit
  const onFinish = (val) => {
    if (showDetail) {
      console.log("form-update");
    } else {
      const data = JSON.parse(JSON.stringify(val));
      console.log("form-add: ", data);
    }
  };

  return (
    <div className="add-user">
      <Card
        title={showDetail ? "Thông tin người dùng" : "Thêm người dùng"}
        extra={
          showDetail ? (
            <Button type="primary" className="btn-primary">
              Thay đổi mật khẩu
            </Button>
          ) : null
        }
      >
        <Form form={form} onFinish={onFinish}>
          <Row>
            <Col span={24}>
              <Form.Item
                name="name"
                label="Tên người dùng"
                rules={[
                  {
                    required: true,
                    message: "Vui lòng nhập tên người dùng!",
                  },
                ]}
                {...layoutForm}
              >
                <Input placeholder="Tên người dùng" />
              </Form.Item>
            </Col>
            <Col span={24}>
              <Form.Item
                name="phoneNumber"
                label="Số điện thoại"
                rules={[
                  {
                    required: true,
                    message: "Vui lòng nhập số điện thoại!",
                  },
                ]}
                {...layoutForm}
              >
                <Input placeholder="Số điện thoại" />
              </Form.Item>
            </Col>
            <Col span={24}>
              <Form.Item
                name="email"
                label="Email"
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
                {...layoutForm}
              >
                <Input placeholder="Email" />
              </Form.Item>
            </Col>
            <Col span={24}>
              <Form.Item name="role" label="Quyền hạn" {...layoutForm}>
                <Select placeholder="Quyền hạn" allowClear>
                  <Select.Option value={1}>Admin System</Select.Option>
                  {/* <Select.Option value={2}>Manager</Select.Option> */}
                  {/* <Select.Option value={3}>Executive</Select.Option> */}
                </Select>
              </Form.Item>
            </Col>
            {!showDetail && (
              <Col span={24}>
                <Form.Item
                  hasFeedback
                  label="Mật khẩu"
                  name="password"
                  rules={[
                    {
                      required: true,
                      message: "Vui lòng nhập mật khẩu!",
                    },
                  ]}
                  {...layoutForm}
                >
                  <Input.Password placeholder="Mật khẩu" />
                </Form.Item>
              </Col>
            )}
            {!showDetail && (
              <Col
                span={22}
                style={{ display: "flex", justifyContent: "flex-end" }}
              >
                <Button
                  type="primary"
                  className="btn-primary"
                  onClick={() => {
                    form.setFieldsValue({
                      password: "123456a@",
                    });
                  }}
                >
                  Mật khẩu mặc định (123456a@)
                </Button>
              </Col>
            )}
            {showDetail && (
              <Col span={24}>
                <Form.Item name="status" label="Trạng thái" {...layoutForm}>
                  <Select placeholder="Trạng thái" allowClear>
                    <Select.Option value={1}>Hoạt động</Select.Option>
                    <Select.Option value={-1}>Đã khóa</Select.Option>
                  </Select>
                </Form.Item>
              </Col>
            )}
            {showDetail && (
              <Col span={24}>
                <Form.Item label="Ngày tạo" {...layoutForm}>
                  <p>12/05/2022</p>
                </Form.Item>
              </Col>
            )}
            <Col span={22}>
              {showDetail ? (
                <Space
                  style={{
                    display: "flex",
                    justifyContent: "flex-end",
                    marginTop: 15,
                  }}
                >
                  <Button
                    onClick={() => {
                      form.resetFields();
                    }}
                  >
                    Hủy thay đổi
                  </Button>
                  <Button
                    htmlType="submit"
                    type="primary"
                    className="btn-primary"
                  >
                    Lưu thay đổi
                  </Button>
                </Space>
              ) : (
                <Space
                  style={{
                    display: "flex",
                    justifyContent: "flex-end",
                    marginTop: 15,
                  }}
                >
                  <Button
                    onClick={() => {
                      form.resetFields();
                    }}
                  >
                    Hủy bỏ
                  </Button>
                  <Button
                    htmlType="submit"
                    type="primary"
                    className="btn-primary"
                  >
                    Thêm người dùng
                  </Button>
                </Space>
              )}
            </Col>
          </Row>
        </Form>
      </Card>
    </div>
  );
}

export default AddUser;
