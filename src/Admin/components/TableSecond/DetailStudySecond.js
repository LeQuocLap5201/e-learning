import {
  InboxOutlined,
  PlusOutlined,
  UploadOutlined,
  CheckOutlined,
  StopOutlined,
  CloseOutlined,
  EditOutlined,
} from "@ant-design/icons";
import {
  Button,
  Card,
  Descriptions,
  Form,
  Input,
  InputNumber,
  message,
  Modal,
  Row,
  Table,
  Tooltip,
  Typography,
  Upload,
} from "antd";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { normFile } from "../../support";

const data = [
  {
    key: "de8147e3-ae02-4418-b48a-22a4476d15ad",
    label: "Chương V: Sử dụng dụng cụ phòng hộ",
    id: "de8147e3-ae02-4418-b48a-22a4476d15ad",
    subject_id: 6,
    creator_id: "9960954f-eb17-449b-b756-b2d8e6cbc205",
    parent_id: "e61a22ba-b1e5-4672-aba2-54a07638da52",
    code: "CR-59-BP1NS-3",
    title: "Chương V: Sử dụng dụng cụ phòng hộ",
    type: 2,
    mediafiles: [
      {
        id: "f0e6e3b5-b227-4483-9f23-eb373b3687de",
        name: "Quy trình thực hành KSNK 1_Chương 5.pdf",
      },
    ],
    author_info: {
      name: "",
      image: null,
      title: "",
      hospital_name: "",
      department_name: "",
    },
    published_date: null,
    order: 5,
    summary: "",
    status: 1,
    logs: {
      list: [
        [
          {
            id: 1,
            user: {
              id: "9960954f-eb17-449b-b756-b2d8e6cbc205",
              user_name: "LRTDoanThy",
            },
            createdAt: "1638775795228",
          },
        ],
      ],
    },
    meta: { lesson_total: 1, is_chapter_question: true },
    subjectTime: null,
    target: [],
    createdAt: "2021-12-06T07:29:55.238Z",
    updatedAt: "2022-04-05T09:15:43.428Z",
    parent_info: {
      key: "e61a22ba-b1e5-4672-aba2-54a07638da52",
      label: "Vệ sinh tay, Phòng ngừa cách ly, sử dụng phương tiện phòng hộ",
      id: "e61a22ba-b1e5-4672-aba2-54a07638da52",
      subject_id: 18,
      code: "CR-59-BP1NS",
      title: "Vệ sinh tay, Phòng ngừa cách ly, sử dụng phương tiện phòng hộ",
      mediafiles: [
        {
          id: "f02f2f4a-993c-4445-9fe1-ac8c45c1ca4e",
          name: "Chuyên đề 2 1 (1).png",
        },
      ],
    },
    user_info: {
      id: "9960954f-eb17-449b-b756-b2d8e6cbc205",
      user_id: 4,
      username: "LRTDoanThy",
    },
    exam_info: {
      id: "98a2ece9-fc73-4359-be2b-1f140840994f",
      exam_id: 5,
      name: "Sử dụng dụng cụ phòng hộ",
    },
    degree_info: null,
    target_info: [],
    total_certificate: 133,
    total_chapter: null,
    total_member_studing: null,
  },
  {
    key: "b0a875f6-a65d-4c7e-9518-7209736011dd",
    label: "Chương IV: Vệ sinh tay",
    id: "b0a875f6-a65d-4c7e-9518-7209736011dd",
    subject_id: 5,
    creator_id: "9960954f-eb17-449b-b756-b2d8e6cbc205",
    parent_id: "e61a22ba-b1e5-4672-aba2-54a07638da52",
    code: "CR-59-BP1NS-2",
    title: "Chương IV: Vệ sinh tay",
    type: 2,
    mediafiles: [
      {
        id: "9fa41457-9255-406f-a6c8-f8bdfa0db19f",
        name: "Quy trình thực hành KSNK 1_Chương 4.pdf",
      },
    ],
    author_info: {
      name: "",
      image: null,
      title: "",
      hospital_name: "",
      department_name: "",
    },
    published_date: null,
    order: 4,
    summary: "",
    status: 1,
    logs: {
      list: [
        [
          {
            id: 1,
            user: {
              id: "9960954f-eb17-449b-b756-b2d8e6cbc205",
              user_name: "LRTDoanThy",
            },
            createdAt: "1638775760064",
          },
        ],
      ],
    },
    meta: { lesson_total: 1, is_chapter_question: true },
    subjectTime: null,
    target: [],
    createdAt: "2021-12-06T07:29:20.072Z",
    updatedAt: "2022-04-05T09:15:43.432Z",
    parent_info: {
      key: "e61a22ba-b1e5-4672-aba2-54a07638da52",
      label: "Vệ sinh tay, Phòng ngừa cách ly, sử dụng phương tiện phòng hộ",
      id: "e61a22ba-b1e5-4672-aba2-54a07638da52",
      subject_id: 18,
      code: "CR-59-BP1NS",
      title: "Vệ sinh tay, Phòng ngừa cách ly, sử dụng phương tiện phòng hộ",
      mediafiles: [
        {
          id: "f02f2f4a-993c-4445-9fe1-ac8c45c1ca4e",
          name: "Chuyên đề 2 1 (1).png",
        },
      ],
    },
    user_info: {
      id: "9960954f-eb17-449b-b756-b2d8e6cbc205",
      user_id: 4,
      username: "LRTDoanThy",
    },
    exam_info: {
      id: "d979c8d2-9c4f-48c3-9bfa-12d2bd5b8d03",
      exam_id: 4,
      name: "Vệ sinh tay",
    },
    degree_info: null,
    target_info: [],
    total_certificate: 133,
    total_chapter: null,
    total_member_studing: null,
  },
  {
    key: "8e5d96ac-4781-4209-91c6-64d090e59972",
    label: "Chương III: Biện pháp cách ly phòng ngừa",
    id: "8e5d96ac-4781-4209-91c6-64d090e59972",
    subject_id: 4,
    creator_id: "9960954f-eb17-449b-b756-b2d8e6cbc205",
    parent_id: "e61a22ba-b1e5-4672-aba2-54a07638da52",
    code: "CR-59-BP1NS-1",
    title: "Chương III: Biện pháp cách ly phòng ngừa",
    type: 2,
    mediafiles: [
      {
        id: "e1e46c36-8bad-4a2d-9107-0487e7b38d8a",
        name: "Quy trình thực hành KSNK 1_Chương 3.pdf",
      },
    ],
    author_info: {
      name: "",
      image: null,
      title: "",
      hospital_name: "",
      department_name: "",
    },
    published_date: null,
    order: 3,
    summary: "",
    status: 1,
    logs: {
      list: [
        [
          {
            id: 1,
            user: {
              id: "9960954f-eb17-449b-b756-b2d8e6cbc205",
              user_name: "LRTDoanThy",
            },
            createdAt: "1638775711404",
          },
        ],
      ],
    },
    meta: { lesson_total: 1, is_chapter_question: true },
    subjectTime: null,
    target: [],
    createdAt: "2021-12-06T07:28:31.413Z",
    updatedAt: "2022-04-05T09:15:43.435Z",
    parent_info: {
      key: "e61a22ba-b1e5-4672-aba2-54a07638da52",
      label: "Vệ sinh tay, Phòng ngừa cách ly, sử dụng phương tiện phòng hộ",
      id: "e61a22ba-b1e5-4672-aba2-54a07638da52",
      subject_id: 18,
      code: "CR-59-BP1NS",
      title: "Vệ sinh tay, Phòng ngừa cách ly, sử dụng phương tiện phòng hộ",
      mediafiles: [
        {
          id: "f02f2f4a-993c-4445-9fe1-ac8c45c1ca4e",
          name: "Chuyên đề 2 1 (1).png",
        },
      ],
    },
    user_info: {
      id: "9960954f-eb17-449b-b756-b2d8e6cbc205",
      user_id: 4,
      username: "LRTDoanThy",
    },
    exam_info: {
      id: "51f2e7b4-f696-4797-9312-deb9f42ab21b",
      exam_id: 3,
      name: "Biện pháp cách ly phòng ngừa",
    },
    degree_info: null,
    target_info: [],
    total_certificate: 135,
    total_chapter: null,
    total_member_studing: null,
  },
];

const propsUpload = {
  name: "file",
  action: "https://www.mocky.io/v2/5cc8019d300000980a055e76",
  headers: {
    authorization: "authorization-text",
  },
  onChange(info) {
    if (info.file.status !== "uploading") {
      console.log(info.file, info.fileList);
    }
    if (info.file.status === "done") {
      message.success(`${info.file.name} file uploaded successfully`);
    } else if (info.file.status === "error") {
      message.error(`${info.file.name} file upload failed.`);
    }
  },
};

export default function DetailStudySecond() {
  const [form] = Form.useForm();

  const [editingKey, setEditingKey] = useState("");

  const isEditing = (record) => record?.id === editingKey;

  const EditableCell = ({
    editing,
    dataIndex,
    title,
    inputType,
    record,
    index,
    children,
    ...restProps
  }) => {
    const inputNode = () => {
      if (inputType === "area") {
        return <Input.TextArea />;
      }
      if (inputType === "number") {
        return <InputNumber min={0} />;
      }
      if (inputType === "file") {
        return (
          <>
            {/* <p>{record?.exam_info?.name}</p> */}
            {record?.mediafiles?.map((file) => (
              <p key={file?.id}>{file?.name}</p>
            ))}
            <Upload {...propsUpload} accept=".pdf">
              <Button icon={<UploadOutlined />}>Tải lên file PDF</Button>
            </Upload>
          </>
        );
      } else {
        return <Input />;
      }
    };
    return (
      <td {...restProps}>
        {editing ? (
          <Form.Item
            name={dataIndex}
            style={{
              margin: 0,
            }}
            rules={[
              {
                required: true,
                message: `Vui lòng nhập ${title}!`,
              },
            ]}
          >
            {inputNode()}
          </Form.Item>
        ) : (
          children
        )}
      </td>
    );
  };

  const columns = [
    {
      dataIndex: "title",
      editable: true,
      key: "title",
      title: "Tên chương",
      width: 200,
    },
    {
      dataIndex: ["meta", "lesson_total"],
      editable: true,
      key: "lesson_total",
      title: "Số tiết",
      width: 150,
    },
    {
      dataIndex: "exam_info",
      key: "exam_info",
      title: "Tên bài kiểm tra",
      render: (exam_info) => (
        <Link to={`/admin/e-tests/${exam_info?.id}`}>{exam_info?.name}</Link>
      ),
    },
    {
      dataIndex: "mediafiles",
      editable: true,
      key: "mediafiles",
      title: "File PDF",
      render: (mediafiles) => mediafiles?.map((file) => file?.name),
    },
    {
      dataIndex: ["meta", "link"],
      editable: true,
      key: "link",

      title: "Link video",
    },
    {
      align: "center",
      fixed: "right",
      key: "action",
      title: "Chức năng",
      width: 110,
      render: (data, record) => {
        const editable = isEditing(record);
        const editNode = editable ? (
          <span className="edit-sticker">
            <Typography.Link onClick={() => save(record?.id)}>
              <CheckOutlined style={{ color: "#1890FF", marginRight: 8 }} />
            </Typography.Link>

            <Typography.Link onClick={cancel}>
              <CloseOutlined style={{ color: "red" }} />
            </Typography.Link>
          </span>
        ) : (
          <Tooltip title="Chỉnh sửa">
            <Typography.Link
              className="btn-edit"
              disabled={editingKey !== ""}
              onClick={() => edit(record)}
            >
              {editingKey !== "" ? <StopOutlined /> : <EditOutlined />}
            </Typography.Link>
          </Tooltip>
        );

        return editNode;
      },
    },
  ];

  const edit = (record) => {
    form.setFieldsValue({
      ...record,
      lesson_total: record?.meta?.lesson_total,
    });
    setEditingKey(record?.id);
  };

  const cancel = () => {
    setEditingKey("");
  };

  const save = async (key) => {
    await form.validateFields();
  };

  const mergedColumns = columns.map((col) => {
    if (!col.editable) {
      return col;
    }
    return {
      ...col,
      onCell: (record) => {
        return {
          record,
          dataIndex:
            JSON.stringify(col.dataIndex) ===
            JSON.stringify(["meta", "lesson_total"])
              ? "lesson_total"
              : col.dataIndex,
          inputType: (() => {
            if (
              JSON.stringify(col.dataIndex) ===
              JSON.stringify(["meta", "lesson_total"])
                ? true
                : false
            ) {
              return "number";
            } else if (col.dataIndex === "mediafiles") {
              return "file";
            } else if (col.dataIndex === "title") {
              return "area";
            } else {
              return "text";
            }
          })(),
          title: col.title,
          editing: isEditing(record),
        };
      },
    };
  });

  // Form Modal
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
    <div className="detail-study-second table-second">
      <Form form={form} component={false}>
        <Card
          title="Nội dung bài học"
          extra={
            <Button
              icon={<PlusOutlined />}
              style={{ color: "#40a9ff", borderColor: "#40a9ff" }}
              onClick={showModal}
            >
              Thêm chương
            </Button>
          }
        >
          <Table
            components={{
              body: {
                cell: EditableCell,
              },
            }}
            rowClassName="editable-row"
            pagination={{
              showTotal: (total, range) =>
                `${total} chương | Từ ${range[0]} đến ${range[1]}`,
              showLessItems: true,
              showSizeChanger: false,
            }}
            columns={mergedColumns}
            scroll={{ x: 1010 }}
            dataSource={data}
            rowKey={(record) => record?.id}
          />
        </Card>
      </Form>
      <Modal
        title="Thêm chương mới"
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
        width={900}
        footer={null}
      >
        <Form>
          <Descriptions column={2} bordered>
            <Descriptions.Item
              label={
                <>
                  Tên chương <span className="input-required">*</span>
                </>
              }
              span={2}
            >
              <Form.Item
                name="title"
                rules={[
                  {
                    required: true,
                    message: "Vui lòng nhập tên chương!",
                  },
                ]}
              >
                <Input allowClear placeholder="Tên chương" />
              </Form.Item>
            </Descriptions.Item>
            <Descriptions.Item
              label={
                <>
                  Số tiết <span className="input-required">*</span>
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
            <Descriptions.Item label="File PDF" span={2}>
              <Form.Item
                name="dragger"
                valuePropName="fileList"
                getValueFromEvent={normFile}
                noStyle
              >
                <Upload.Dragger name="files" action="/upload.do" accept=".pdf">
                  <p className="ant-upload-drag-icon">
                    <InboxOutlined />
                  </p>
                  <p className="ant-upload-text">
                    Nhấn chuột hoặc kéo thả file PDF vào khu vực này
                  </p>
                </Upload.Dragger>
              </Form.Item>
            </Descriptions.Item>
            <Descriptions.Item label="Link video" span={2}>
              <Form.Item name="link">
                <Input allowClear placeholder="Link video" />
              </Form.Item>
            </Descriptions.Item>
          </Descriptions>
          <Row style={{ justifyContent: "flex-end", marginTop: 10 }}>
            <Button
              htmlType="submit"
              type="primary"
              className="btn-primary"
              onClick={handleOk}
            >
              Thêm chương
            </Button>
          </Row>
        </Form>
      </Modal>
    </div>
  );
}
