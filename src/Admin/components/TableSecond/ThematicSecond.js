import { DeleteOutlined, PlusOutlined } from "@ant-design/icons";
import { Button, Card, Checkbox, Form, Modal, Popconfirm, Select } from "antd";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./index.css";

export default function ThematicSecond() {
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
    <div className="thematic-second table-second">
      <Card
        title="Danh sách chương"
        extra={
          <Button
            icon={<PlusOutlined />}
            style={{ color: "#1890ff", borderColor: "#1890ff" }}
            onClick={showModal}
          >
            Thêm chương
          </Button>
        }
      >
        <div className="list-thematics">
          <div className="thematic-item">
            <Link to={`/admin/e-tests/10`}>
              <Button>Chương 1</Button>
            </Link>
            <Popconfirm
              title="Bạn muốn xóa chương này ra khỏi bài kiểm tra chuyên đề?"
              okText="Có"
              cancelText="Không"
            >
              <Button
                size="small"
                danger
                shape="circle"
                icon={<DeleteOutlined />}
              />
            </Popconfirm>
          </div>
        </div>
      </Card>
      <Modal
        title="Danh sách chương"
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
        okText="Lưu"
        cancelText="Hủy bỏ"
        width={700}
      >
        <Form labelCol={{ span: 4 }} wrapperCol={{ span: 20 }}>
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
                option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
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
        </Form>
      </Modal>
    </div>
  );
}
