import {
  Alert,
  Card,
  Descriptions,
  Form,
  Input,
  InputNumber,
  Select,
} from "antd";
import React from "react";
import "./index.css";

export default function FormDetailTest() {
  const [form] = Form.useForm();

  return (
    <Form form={form} className="form-detail form-detail-test">
      <Card
        title="Thông tin bài kiểm tra"
        extra={<Alert message="Được phép chỉnh sửa" type="success" showIcon />}
      >
        <Descriptions bordered column={2}>
          <Descriptions.Item
            label={
              <>
                <span className="input-required">*</span> Tên bài kiểm tra
              </>
            }
          >
            <Form.Item
              name="name"
              rules={[
                {
                  required: true,
                  message: "Vui lòng nhập tên bài kiểm tra!",
                },
              ]}
            >
              <Input placeholder="Tên bài kiểm tra" />
            </Form.Item>
          </Descriptions.Item>
          <Descriptions.Item label="Số người tham gia">0</Descriptions.Item>

          <Descriptions.Item
            label={
              <>
                <span className="input-required">*</span> Loại bài kiểm tra
              </>
            }
          >
            <Form.Item
              name="type"
              rules={[
                {
                  message: "Vui lòng nhập loại bài kiểm tra!",
                  required: true,
                },
              ]}
            >
              <Select placeholder="Loại bài kiểm tra" disabled>
                <Select.Option value={1}>Bài kiểm tra chuyên đề</Select.Option>
                <Select.Option value={2}>Bài kiểm tra chương</Select.Option>
              </Select>
            </Form.Item>
          </Descriptions.Item>
          <Descriptions.Item label="Ngày cập nhật">
            12/05/2022
          </Descriptions.Item>

          <Descriptions.Item
            label={
              <>
                <span className="input-required">*</span> Tên chuyên đề
              </>
            }
          >
            <Form.Item
              name="subject_id"
              rules={[
                {
                  message: "Mời chọn chuyên đề!",
                  required: true,
                },
              ]}
            >
              <Select
                disabled
                showSearch
                placeholder="Chọn chuyên đề"
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
          </Descriptions.Item>
          <Descriptions.Item label="Ngày tạo">12/05/2022</Descriptions.Item>

          <Descriptions.Item
            label={
              <>
                <span className="input-required">*</span> Tên chương
              </>
            }
          >
            <Form.Item
              name="chapter_id"
              rules={[
                {
                  message: "Mời chọn chương!",
                  required: true,
                },
              ]}
            >
              <Select
                disabled
                showSearch
                placeholder="Chọn chương"
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
          </Descriptions.Item>
          <Descriptions.Item label="Người tạo">LRTDoanThy</Descriptions.Item>

          <Descriptions.Item
            label={
              <>
                <span className="input-required">*</span> Thời gian làm bài
              </>
            }
            span={2}
          >
            <Form.Item
              name="examTime"
              rules={[
                {
                  message: "Vui lòng nhập thời gian!",
                  required: true,
                },
              ]}
            >
              <InputNumber placeholder="Thời gian làm bài" min={1} />
            </Form.Item>
          </Descriptions.Item>
          <Descriptions.Item
            label={
              <>
                <span className="input-required">*</span> Số lượng câu hỏi chọn
                lọc
              </>
            }
            span={2}
          >
            <Form.Item
              name="no_questions"
              rules={[
                { message: "Vui lòng số lượng câu hỏi!", required: true },
              ]}
            >
              <InputNumber placeholder="Số lượng câu hỏi" min={5} />
            </Form.Item>
          </Descriptions.Item>
        </Descriptions>
      </Card>
    </Form>
  );
}
