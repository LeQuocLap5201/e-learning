import { Button, Descriptions, Form, Input, Space } from "antd";
import React from "react";
import useViewport from "../../hooks/useViewport";
import FooterStudent from "../components/FooterStudent";

export default function ChangePassStudent() {
  const viewPort = useViewport();

  const [form] = Form.useForm();

  return (
    <div
      style={{
        minHeight: "calc(100vh - 64px)",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      <div className="change-pass-student main-student">
        <Form
          form={form}
          className="change-pass-student"
          style={{ marginBottom: 20 }}
        >
          <h3>Đổi mật khẩu</h3>
          <Descriptions
            bordered
            column={1}
            layout={viewPort <= 576 ? "vertical" : "horizontal"}
          >
            <Descriptions.Item
              label={
                <>
                  Mật khẩu cũ
                  <span className="input-required">*</span>
                </>
              }
            >
              <Form.Item
                hasFeedback
                name="passwordOld"
                rules={[
                  {
                    required: true,
                    message: "Vui lòng nhập mật khẩu cũ!",
                  },
                ]}
              >
                <Input.Password placeholder="Mật khẩu cũ" />
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
            <Button htmlType="submit" type="primary" className="btn-student">
              Đổi mật khẩu
            </Button>
          </Space>
        </Form>
      </div>
      <FooterStudent />
    </div>
  );
}
