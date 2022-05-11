import { Card, Table, Tag } from "antd";
import React from "react";
import "./index.css";
import moment from "moment";

const columns = [
  { dataIndex: ["subject_info", "subject_id"], key: "id", title: "ID" },
  {
    dataIndex: ["subject_info", "parent_info", "title"],
    key: "subject_info",
    title: "Tên chuyên đề",
  },
  { dataIndex: ["subject_info", "title"], key: "chap", title: "Tên chương" },
  {
    dataIndex: ["meta", "time_studying_total"],
    key: "time_studying_total",
    title: "Thời gian học",
    width: 200,
    render: (time) => `${Math.floor(time)}s`,
  },
  {
    align: "center",
    dataIndex: "status",
    key: "status",
    render: (status) => {
      if (status === 1) {
        return <Tag color="#696969">Chưa học xong</Tag>;
      }
      if (status === 2) {
        return <Tag color="#2ea219">Học xong</Tag>;
      }
    },
    title: "Trạng thái",
  },
  {
    dataIndex: "updatedAt",
    key: "updatedAt",
    render: (date) => {
      return moment(date).format("DD/MM/YYYY HH:mm");
    },
    title: "Ngày cập nhật",
    width: 200,
  },
];

const data = [
  {
    id: "a60fdcc7-709a-4872-b1a5-0f3963ad17d0",
    member_id: "36e951fa-2d07-4c61-ae1f-fd3c09d4eef9",
    subject_id: "467093d9-3f66-47fa-af3b-dd358151a858",
    status: 2,
    type: 2,
    meta: {
      time_studying_list: [
        { created_at: "2022-01-14 10:40:18", time_total: 0.008 },
        { created_at: "2022-01-14 10:40:18", time_total: 0.095 },
        { created_at: "2022-01-14 10:40:18", time_total: 0.11 },
        { created_at: "2022-01-14 10:40:18", time_total: 0.113 },
        { created_at: "2022-01-14 10:40:18", time_total: 0.114 },
        { created_at: "2022-01-14 10:40:18", time_total: 0.135 },
        { created_at: "2022-01-14 10:40:18", time_total: 0.141 },
        { created_at: "2022-01-14 10:40:20", time_total: 1.652 },
        { created_at: "2022-01-14 10:40:20", time_total: 1.653 },
        { created_at: "2022-01-14 10:40:20", time_total: 1.678 },
      ],
      time_studying_total: 5.699,
    },
    startTime: "2022-01-14T03:40:18.807Z",
    endTime: null,
    createdAt: "2022-01-14T03:40:18.813Z",
    updatedAt: "2022-01-14T03:40:20.417Z",
    subject_info: {
      key: "467093d9-3f66-47fa-af3b-dd358151a858",
      label:
        "Chương X: Biện pháp thực hành phòng ngừa nhiễm khuẩn tiết niệu bệnh viện",
      id: "467093d9-3f66-47fa-af3b-dd358151a858",
      subject_id: 11,
      code: "CR-59-GGTDQ-4",
      title:
        "Chương X: Biện pháp thực hành phòng ngừa nhiễm khuẩn tiết niệu bệnh viện",
      parent_info: {
        key: "da462367-9552-4b48-82a8-6ea45cbda692",
        label: "Thực hành phòng ngừa các loại nhiễm khuẩn bệnh viện",
        id: "da462367-9552-4b48-82a8-6ea45cbda692",
        subject_id: 20,
        code: "CR-59-GGTDQ",
        title: "Thực hành phòng ngừa các loại nhiễm khuẩn bệnh viện",
      },
    },
  },
  {
    id: "6da38b84-2397-4f4d-9f35-6e7b1a6b54da",
    member_id: "36e951fa-2d07-4c61-ae1f-fd3c09d4eef9",
    subject_id: "741236e1-02bc-4932-8f50-40383b2ec804",
    status: 2,
    type: 2,
    meta: {
      time_studying_list: [
        { created_at: "2022-01-14 10:35:56", time_total: 0.002 },
        { created_at: "2022-01-14 10:35:56", time_total: 0.091 },
        { created_at: "2022-01-14 10:35:56", time_total: 0.092 },
        { created_at: "2022-01-14 10:35:57", time_total: 0.096 },
        { created_at: "2022-01-14 10:35:57", time_total: 0.121 },
        { created_at: "2022-01-14 10:35:57", time_total: 0.127 },
        { created_at: "2022-01-14 10:36:02", time_total: 5.601 },
        { created_at: "2022-01-14 10:36:02", time_total: 5.603 },
        { created_at: "2022-01-14 10:36:02", time_total: 5.62 },
      ],
      time_studying_total: 17.353,
    },
    startTime: "2022-01-14T03:35:56.940Z",
    endTime: null,
    createdAt: "2022-01-14T03:35:56.946Z",
    updatedAt: "2022-01-14T03:36:02.507Z",
    subject_info: {
      key: "741236e1-02bc-4932-8f50-40383b2ec804",
      label:
        "Chương IX: Biện pháp thực hành phòng ngừa nhiễm khuẩn huyết bệnh viện",
      id: "741236e1-02bc-4932-8f50-40383b2ec804",
      subject_id: 10,
      code: "CR-59-GGTDQ-3",
      title:
        "Chương IX: Biện pháp thực hành phòng ngừa nhiễm khuẩn huyết bệnh viện",
      parent_info: {
        key: "da462367-9552-4b48-82a8-6ea45cbda692",
        label: "Thực hành phòng ngừa các loại nhiễm khuẩn bệnh viện",
        id: "da462367-9552-4b48-82a8-6ea45cbda692",
        subject_id: 20,
        code: "CR-59-GGTDQ",
        title: "Thực hành phòng ngừa các loại nhiễm khuẩn bệnh viện",
      },
    },
  },
  {
    id: "6849e8a1-f34a-4fd1-aec4-2de27f3f4b0c",
    member_id: "36e951fa-2d07-4c61-ae1f-fd3c09d4eef9",
    subject_id: "e80807c6-ef1f-4eda-a374-aec6057de7a9",
    status: 2,
    type: 2,
    meta: {
      time_studying_list: [
        { created_at: "2022-01-14 10:32:29", time_total: 0.003 },
        { created_at: "2022-01-14 10:32:29", time_total: 0.076 },
        { created_at: "2022-01-14 10:32:29", time_total: 0.077 },
        { created_at: "2022-01-14 10:32:29", time_total: 0.083 },
        { created_at: "2022-01-14 10:32:29", time_total: 0.094 },
        { created_at: "2022-01-14 10:32:29", time_total: 0.099 },
        { created_at: "2022-01-14 10:32:29", time_total: 0.099 },
        { created_at: "2022-01-14 10:32:29", time_total: 0.104 },
        { created_at: "2022-01-14 10:32:29", time_total: 0.121 },
        { created_at: "2022-01-14 10:32:30", time_total: 1.221 },
        { created_at: "2022-01-14 10:32:30", time_total: 1.223 },
        { created_at: "2022-01-14 10:32:30", time_total: 1.239 },
      ],
      time_studying_total: 4.439,
    },
    startTime: "2022-01-14T03:32:29.447Z",
    endTime: null,
    createdAt: "2022-01-14T03:32:29.453Z",
    updatedAt: "2022-01-14T03:32:30.649Z",
    subject_info: {
      key: "e80807c6-ef1f-4eda-a374-aec6057de7a9",
      label: "Chương VIII: Biện pháp thực hành phòng ngừa nhiễm khuẩn vết mổ",
      id: "e80807c6-ef1f-4eda-a374-aec6057de7a9",
      subject_id: 9,
      code: "CR-59-GGTDQ-2",
      title: "Chương VIII: Biện pháp thực hành phòng ngừa nhiễm khuẩn vết mổ",
      parent_info: {
        key: "da462367-9552-4b48-82a8-6ea45cbda692",
        label: "Thực hành phòng ngừa các loại nhiễm khuẩn bệnh viện",
        id: "da462367-9552-4b48-82a8-6ea45cbda692",
        subject_id: 20,
        code: "CR-59-GGTDQ",
        title: "Thực hành phòng ngừa các loại nhiễm khuẩn bệnh viện",
      },
    },
  },
  {
    id: "a43c8d33-97b4-4733-9e13-9b517cc27c25",
    member_id: "36e951fa-2d07-4c61-ae1f-fd3c09d4eef9",
    subject_id: "2e472f66-ff81-4867-a13e-3454304a2e41",
    status: 2,
    type: 2,
    meta: {
      time_studying_list: [
        { created_at: "2022-01-13 10:22:27", time_total: 0.003 },
        { created_at: "2022-01-13 10:22:27", time_total: 0.1 },
        { created_at: "2022-01-13 10:22:27", time_total: 0.106 },
        { created_at: "2022-01-13 10:22:27", time_total: 0.131 },
        { created_at: "2022-01-13 10:22:27", time_total: 0.136 },
        { created_at: "2022-01-13 10:22:28", time_total: 1.214 },
        { created_at: "2022-01-13 10:22:28", time_total: 1.23 },
      ],
      time_studying_total: 2.92,
    },
    startTime: "2022-01-13T03:22:27.677Z",
    endTime: null,
    createdAt: "2022-01-13T03:22:27.681Z",
    updatedAt: "2022-01-13T03:22:28.873Z",
    subject_info: {
      key: "2e472f66-ff81-4867-a13e-3454304a2e41",
      label: "Chương VII: Biện pháp thực hành phòng ngừa viêm phổi bệnh viện",
      id: "2e472f66-ff81-4867-a13e-3454304a2e41",
      subject_id: 8,
      code: "CR-59-GGTDQ-1",
      title: "Chương VII: Biện pháp thực hành phòng ngừa viêm phổi bệnh viện",
      parent_info: {
        key: "da462367-9552-4b48-82a8-6ea45cbda692",
        label: "Thực hành phòng ngừa các loại nhiễm khuẩn bệnh viện",
        id: "da462367-9552-4b48-82a8-6ea45cbda692",
        subject_id: 20,
        code: "CR-59-GGTDQ",
        title: "Thực hành phòng ngừa các loại nhiễm khuẩn bệnh viện",
      },
    },
  },
  {
    id: "76e3204b-72e2-4aa5-be45-b24d6b214f06",
    member_id: "36e951fa-2d07-4c61-ae1f-fd3c09d4eef9",
    subject_id: "ef5d0454-5d07-49d9-86fc-068e1e93386e",
    status: 2,
    type: 2,
    meta: {
      time_studying_list: [
        { created_at: "2022-01-13 10:19:21", time_total: 0.004 },
        { created_at: "2022-01-13 10:19:21", time_total: 0.086 },
        { created_at: "2022-01-13 10:19:21", time_total: 0.093 },
        { created_at: "2022-01-13 10:19:21", time_total: 0.096 },
        { created_at: "2022-01-13 10:19:21", time_total: 0.105 },
        { created_at: "2022-01-13 10:19:21", time_total: 0.109 },
        { created_at: "2022-01-13 10:19:22", time_total: 1.368 },
        { created_at: "2022-01-13 10:19:22", time_total: 1.369 },
        { created_at: "2022-01-13 10:19:22", time_total: 1.386 },
      ],
      time_studying_total: 4.6160000000000005,
    },
    startTime: "2022-01-13T03:19:21.514Z",
    endTime: null,
    createdAt: "2022-01-13T03:19:21.520Z",
    updatedAt: "2022-01-13T03:19:22.882Z",
    subject_info: {
      key: "ef5d0454-5d07-49d9-86fc-068e1e93386e",
      label: "Chương VI: Làm sạch, khử khuẩn và tiệt khuẩn dụng cụ",
      id: "ef5d0454-5d07-49d9-86fc-068e1e93386e",
      subject_id: 7,
      code: "CR-59-NRTJB-1",
      title: "Chương VI: Làm sạch, khử khuẩn và tiệt khuẩn dụng cụ",
      parent_info: {
        key: "1556f49c-28a1-4fd2-87bf-62501462ffd3",
        label: "Quy trình làm sạch, khử khuẩn và tiệt khuẩn dụng cụ",
        id: "1556f49c-28a1-4fd2-87bf-62501462ffd3",
        subject_id: 19,
        code: "CR-59-NRTJB",
        title: "Quy trình làm sạch, khử khuẩn và tiệt khuẩn dụng cụ",
      },
    },
  },
];

export default function StudiesSecond() {
  return (
    <div className="studies-second table-second">
      <Card title="Danh sách bài học">
        <Table
          pagination={{
            showTotal: (total, range) =>
              `${total} bài học | Từ ${range[0]} đến ${range[1]}`,
            showLessItems: true,
            showSizeChanger: false,
          }}
          columns={columns}
          scroll={{ x: 1300 }}
          dataSource={data}
          rowKey={(record) => record?.subject_info?.subject_id}
        />
      </Card>
    </div>
  );
}
