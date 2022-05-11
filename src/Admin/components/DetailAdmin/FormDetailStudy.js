import { PlusOutlined } from "@ant-design/icons";
import {
  Button,
  Card,
  Checkbox,
  Col,
  Descriptions,
  Form,
  Input,
  InputNumber,
  Row,
  Select,
  Spin,
  Tag,
  Upload,
} from "antd";
import React, { useCallback, useState } from "react";
import { Link } from "react-router-dom";
import { getBase64 } from "../../support";
import "./index.css";

export default function FormDetailStudy() {
  const [form] = Form.useForm();

  const [isSpinning, setIsSpinning] = useState(false);
  const [previewImage, setPreviewImage] = useState();

  const handleUploadChange = useCallback((info) => {
    setIsSpinning(true);
    if (info.file.status === "uploading") {
      info.file.status = "done";
      getBase64(info.file.originFileObj, (imageUrl) =>
        setPreviewImage(imageUrl)
      );
    }
    if (info.file.status === "removed") {
      setIsSpinning(false);
    }
  }, []);

  return (
    <Form form={form} className="form-detail-study">
      <Card
        title={
          <>
            Thông tin bài học <span style={{ fontWeight: 700 }}>#Study ID</span>
          </>
        }
        extra={
          <>
            <Button
              style={{
                backgroundColor: "#959595",
                color: "#fff",
                marginRight: 8,
                borderColor: "#959595",
              }}
            >
              Hủy bài
            </Button>
            <Button
              style={{
                backgroundColor: "#27AE60",
                color: "#fff",
                borderColor: "#27AE60",
              }}
            >
              Phát hành
            </Button>
          </>
        }
      >
        <Row gutter={16}>
          <Col span={4} style={{ textAlign: "center" }}>
            <Spin spinning={isSpinning} style={{ width: 185 }}>
              <Upload
                listType="picture-card"
                onChange={handleUploadChange}
                showUploadList={false}
                style={{ width: 185 }}
              >
                {previewImage ? (
                  <img
                    src={previewImage}
                    alt="preview-upload"
                    style={{ maxHeight: 185, maxWidth: 185 }}
                  />
                ) : (
                  <div>
                    <PlusOutlined />
                    <div style={{ marginTop: 8 }}>Thêm ảnh</div>
                  </div>
                )}
              </Upload>
            </Spin>
          </Col>
          <Col span={20}>
            <Descriptions column={2} bordered>
              <Descriptions.Item
                label={
                  <>
                    Tên chuyên đề <span className="input-required">*</span>
                  </>
                }
              >
                <Form.Item
                  name="title"
                  rules={[
                    {
                      required: true,
                      message: "Vui lòng nhập tên chuyên đề!",
                    },
                  ]}
                >
                  <Input placeholder="Tên chuyên đề" />
                </Form.Item>
              </Descriptions.Item>
              <Descriptions.Item label="Người tạo">
                <Form.Item name="creator">
                  <Input defaultValue="LRTAdminSystem" readOnly />
                </Form.Item>
              </Descriptions.Item>

              <Descriptions.Item label="Trạng thái">
                <Tag
                  style={{ minWidth: 130, textAlign: "center" }}
                  color="#297fb9"
                >
                  Chưa phát hành
                </Tag>
              </Descriptions.Item>
              <Descriptions.Item label="Bài kiểm tra">
                <Link to="/admin/e-tests/18">Tên bài kiểm tra</Link>
              </Descriptions.Item>

              <Descriptions.Item
                label={
                  <>
                    Đối tượng học <span className="input-required">*</span>
                  </>
                }
              >
                <Form.Item
                  style={{ marginBottom: 10 }}
                  name="target"
                  rules={[
                    { required: true, message: "Vui lòng chọn đối tượng học" },
                  ]}
                >
                  <Select
                    showSearch
                    allowClear
                    placeholder="Đối tượng học"
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
                <Form.Item name="check_all" valuePropName="checked">
                  <Checkbox id="check_all">Tất cả đối tượng</Checkbox>
                </Form.Item>
              </Descriptions.Item>
              <Descriptions.Item label="Ngày phát hành">
                <Form.Item name="public">
                  <Input defaultValue="11/05/2022" readOnly />
                </Form.Item>
              </Descriptions.Item>

              <Descriptions.Item label="Tác giả">
                <Form.Item name="author">
                  <Input placeholder="Tên tác giả" />
                </Form.Item>
              </Descriptions.Item>
              <Descriptions.Item label="Ngày cập nhật lần cuối">
                <Form.Item name="updatedAt">
                  <Input defaultValue="11/05/2022" readOnly />
                </Form.Item>
              </Descriptions.Item>

              <Descriptions.Item label="Học vị">
                <Form.Item name="degree_id">
                  <Select
                    allowClear
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
              <Descriptions.Item label="Ngày tạo">
                <Form.Item name="createdAt">
                  <Input defaultValue="11/05/2022" readOnly />
                </Form.Item>
              </Descriptions.Item>
              <Descriptions.Item
                label={
                  <>
                    Số tiết<span className="input-required">*</span>
                  </>
                }
                span={2}
              >
                <Form.Item
                  name="lesson_total"
                  rules={[
                    {
                      required: true,
                      message: "Vui lòng nhập số tiết",
                    },
                  ]}
                >
                  <InputNumber min={0} placeholder="Số tiết" />
                </Form.Item>
              </Descriptions.Item>
              <Descriptions.Item label="Giới thiệu chuyên đề" span={2}>
                <Form.Item name="summary">
                  <Input.TextArea rows={4} placeholder="Giới thiệu chuyên đề" />
                </Form.Item>
              </Descriptions.Item>
            </Descriptions>
          </Col>
        </Row>
        <Row style={{ justifyContent: "flex-end" }}>
          <Button style={{ marginRight: 8 }}>Hủy thay đổi</Button>
          <Button htmlType="submit" type="primary" className="btn-primary">
            Lưu thay đổi
          </Button>
        </Row>
      </Card>
    </Form>
  );
}
