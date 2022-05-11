import {
  Button,
  Card,
  Col,
  DatePicker,
  Descriptions,
  Form,
  Input,
  Row,
  Select,
  Space,
  Tag,
} from "antd";
import React from "react";
import PropTypes from "prop-types";
import "./index.css";

AddMember.propTypes = {
  showDetail: PropTypes.bool,
  dataDetail: PropTypes.object,
};

AddMember.defaultProps = {
  showDetail: false,
  dataDetail: {},
};

export default function AddMember({ showDetail, dataDetail }) {
  const [form] = Form.useForm();

  return (
    <div className="member-admin">
      <Card
        title={showDetail ? "Thông tin thành viên" : "Thêm thành viên"}
        extra={
          showDetail ? (
            <>
              <Button style={{ marginRight: 8 }}>Reset mật khẩu</Button>
              <Button
                style={{
                  backgroundColor: "rgb(149 149 149)",
                  color: "#fff",
                  borderColor: "rgb(149 149 149)",
                  width: 100,
                }}
              >
                Khóa
              </Button>
            </>
          ) : null
        }
      >
        <Form form={form} name="member-admin">
          <Row>
            <Col span={24}>
              <Descriptions column={2} bordered>
                <Descriptions.Item
                  label={
                    <>
                      Tên thành viên <span className="input-required">*</span>
                    </>
                  }
                >
                  <Form.Item
                    name="full_name"
                    rules={[
                      {
                        required: true,
                        message: "Vui lòng nhập tên thành viên!",
                      },
                    ]}
                  >
                    <Input placeholder="Tên thành viên" />
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
                    <DatePicker
                      placeholder="Chọn ngày sinh"
                      format="DD-MM-YYYY"
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

                <Descriptions.Item label="Giới tính">
                  <Form.Item name="gender">
                    <Select placeholder="Giới tính" defaultValue={1}>
                      <Select.Option value={1}>Nam</Select.Option>
                      <Select.Option value={2}>Nữ</Select.Option>
                    </Select>
                  </Form.Item>
                </Descriptions.Item>
                <Descriptions.Item label="Trạng thái">
                  <Form.Item name="status">
                    <Tag color="green">Đang hoạt động</Tag>
                  </Form.Item>
                </Descriptions.Item>

                <Descriptions.Item
                  label={
                    <>
                      Khoa-Phòng-Đơn vị
                      <span className="input-required">*</span>
                    </>
                  }
                  span={2}
                >
                  <Row gutter={16}>
                    <Col span={12}>
                      <Form.Item name="group">
                        <Select placeholder="Nhóm">
                          <Select.Option value="jack">Jack</Select.Option>
                          <Select.Option value="lucy">Lucy</Select.Option>
                          <Select.Option value="Yiminghe">
                            yiminghe
                          </Select.Option>
                        </Select>
                      </Form.Item>
                    </Col>
                    <Col span={12}>
                      <Form.Item name="kpdv">
                        <Select placeholder="Khoa-Phòng-Đơn vị">
                          <Select.Option value="jack">Jack</Select.Option>
                          <Select.Option value="lucy">Lucy</Select.Option>
                          <Select.Option value="Yiminghe">
                            yiminghe
                          </Select.Option>
                        </Select>
                      </Form.Item>
                    </Col>
                  </Row>
                </Descriptions.Item>

                {!showDetail && (
                  <Descriptions.Item
                    label={
                      <>
                        Mật khẩu
                        <span className="input-required">*</span>
                      </>
                    }
                    span={2}
                  >
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
                      <Input.Password placeholder="Mật khẩu" />
                    </Form.Item>
                  </Descriptions.Item>
                )}

                {showDetail && (
                  <Descriptions.Item label="Ngày tạo" span={2}>
                    05/09/2022
                  </Descriptions.Item>
                )}
              </Descriptions>
            </Col>
            {!showDetail && (
              <Col
                span={24}
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
          </Row>
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
              <Button htmlType="submit" type="primary" className="btn-primary">
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
              <Button htmlType="submit" type="primary" className="btn-primary">
                Thêm thành viên
              </Button>
            </Space>
          )}
        </Form>
      </Card>
    </div>
  );
}
