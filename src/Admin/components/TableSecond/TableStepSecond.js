import {
  CheckOutlined,
  CloseOutlined,
  EditOutlined,
  StopOutlined,
  UploadOutlined,
} from "@ant-design/icons";
import {
  Button,
  Card,
  Form,
  Input,
  InputNumber,
  message,
  Table,
  Tooltip,
  Typography,
  Upload,
} from "antd";
import React, { useState } from "react";

const data = [
  {
    key: "1a90a195-2a46-4fae-a74d-8d32a42dab95",
    label: "b",
    id: "1a90a195-2a46-4fae-a74d-8d32a42dab95",
    subject_id: 26,
    creator_id: "9960954f-eb17-449b-b756-b2d8e6cbc205",
    parent_id: "00cf70c0-6f87-44ec-812e-f01bfd31d6b5",
    code: "CR-59-S2VZ1-2",
    title: "b",
    type: 2,
    mediafiles: [],
    author_info: {
      name: "",
      image: null,
      title: "",
      hospital_name: "",
      department_name: "",
    },
    published_date: null,
    order: 2,
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
            createdAt: "1652237091798",
          },
        ],
      ],
    },
    meta: {
      link: "https://www.youtube.com/watch?v=rPuHCF5xPp0",
      lesson_total: 6,
    },
    subjectTime: null,
    target: [],
    createdAt: "2022-05-11T02:44:51.828Z",
    updatedAt: "2022-05-11T02:44:51.828Z",
    parent_info: {
      key: "00cf70c0-6f87-44ec-812e-f01bfd31d6b5",
      label: "test 3",
      id: "00cf70c0-6f87-44ec-812e-f01bfd31d6b5",
      subject_id: 24,
      code: "CR-59-S2VZ1",
      title: "test 3",
      mediafiles: [],
    },
    user_info: {
      id: "9960954f-eb17-449b-b756-b2d8e6cbc205",
      user_id: 4,
      username: "LRTDoanThy",
    },
    exam_info: null,
    degree_info: null,
    target_info: [],
    total_certificate: 0,
    total_chapter: null,
    total_member_studing: null,
  },
  {
    key: "52e35cde-db2a-49bb-83b9-cbf64dbc39e8",
    label: "a",
    id: "52e35cde-db2a-49bb-83b9-cbf64dbc39e8",
    subject_id: 25,
    creator_id: "9960954f-eb17-449b-b756-b2d8e6cbc205",
    parent_id: "00cf70c0-6f87-44ec-812e-f01bfd31d6b5",
    code: "CR-59-S2VZ1-1",
    title: "a",
    type: 2,
    mediafiles: [],
    author_info: {
      name: "",
      image: null,
      title: "",
      hospital_name: "",
      department_name: "",
    },
    published_date: null,
    order: 1,
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
            createdAt: "1652236623465",
          },
        ],
      ],
    },
    meta: {
      link: "https://www.youtube.com/watch?v=rPuHCF5xPp0",
      lesson_total: 5,
    },
    subjectTime: null,
    target: [],
    createdAt: "2022-05-11T02:37:03.539Z",
    updatedAt: "2022-05-11T02:37:03.539Z",
    parent_info: {
      key: "00cf70c0-6f87-44ec-812e-f01bfd31d6b5",
      label: "test 3",
      id: "00cf70c0-6f87-44ec-812e-f01bfd31d6b5",
      subject_id: 24,
      code: "CR-59-S2VZ1",
      title: "test 3",
      mediafiles: [],
    },
    user_info: {
      id: "9960954f-eb17-449b-b756-b2d8e6cbc205",
      user_id: 4,
      username: "LRTDoanThy",
    },
    exam_info: null,
    degree_info: null,
    target_info: [],
    total_certificate: 0,
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

export default function TableStepSecond() {
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
        return <Input.TextArea rows={1} />;
      }
      if (inputType === "number") {
        return <InputNumber min={0} />;
      }
      if (inputType === "file") {
        return (
          <Upload {...propsUpload} accept=".pdf">
            <Button icon={<UploadOutlined />}>Tải lên file PDF</Button>
          </Upload>
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
      dataIndex: "mediafiles",
      editable: true,
      key: "mediafiles",
      title: "File PDF",
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

  return (
    <Form form={form} component={false}>
      <Card title="Nội dung bài học">
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
  );
}
