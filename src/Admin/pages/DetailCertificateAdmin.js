import { DownloadOutlined } from "@ant-design/icons";
import { Button, Card, Descriptions, Table } from "antd";
import React from "react";
import { Link } from "react-router-dom";
import BreadcrumbAdmin from "../components/BreadcrumbAdmin";
import Footer from "../components/Footer";
import moment from "moment";

const columns = [
  {
    dataIndex: ["member_info", "member_id"],
    key: "id",
    title: "ID Thành viên",
    render: (memberId) => (
      <Link to={`/admin/members/${memberId}`}>{memberId}</Link>
    ),
  },
  {
    dataIndex: ["member_info", "full_name"],
    key: "name",
    title: "Tên thành viên",
  },
  {
    dataIndex: "id",
    key: "certificate",
    title: "File certificate",
    render: (certificateId) =>
      certificateId ? (
        <>
          <Link style={{ color: "#000" }} to={`/certificates/${certificateId}`}>
            FileCertificate.PDF
          </Link>
          <Button
            type="text"
            style={{ marginLeft: 5, color: "#2E9CD1" }}
            icon={<DownloadOutlined />}
          />
        </>
      ) : null,
  },
  {
    dataIndex: "updatedAt",
    key: "updatedAt",
    title: "Ngày tạo",
    render: (date) => {
      return moment(date).format("DD-MM-YYYY");
    },
  },
];

const data = [
  {
    id: "4981c016-a703-4f0f-9068-a2270dfe532a",
    certificate_id: 2216,
    member_exam_id: "5d5d8cb3-ca96-481a-a6e5-365c27f76cee",
    member_id: "36e951fa-2d07-4c61-ae1f-fd3c09d4eef9",
    subject_id: "ef5d0454-5d07-49d9-86fc-068e1e93386e",
    code: "CR-2022-C84CCPG",
    type: 2,
    status: 1,
    meta: {},
    createdAt: "2022-01-13T03:22:18.272Z",
    updatedAt: "2022-01-13T03:22:18.272Z",
    subject_info: {
      key: "ef5d0454-5d07-49d9-86fc-068e1e93386e",
      label: "Chương VI: Làm sạch, khử khuẩn và tiệt khuẩn dụng cụ",
      id: "ef5d0454-5d07-49d9-86fc-068e1e93386e",
      subject_id: 7,
      code: "CR-59-NRTJB-1",
      title: "Chương VI: Làm sạch, khử khuẩn và tiệt khuẩn dụng cụ",
      subjectTime: null,
      parent_info: {
        key: "1556f49c-28a1-4fd2-87bf-62501462ffd3",
        label: "Quy trình làm sạch, khử khuẩn và tiệt khuẩn dụng cụ",
        id: "1556f49c-28a1-4fd2-87bf-62501462ffd3",
        subject_id: 19,
        code: "CR-59-NRTJB",
        title: "Quy trình làm sạch, khử khuẩn và tiệt khuẩn dụng cụ",
        mediafiles: [
          {
            id: "367764e0-722c-4788-9226-7fd6693cc836",
            name: "Hình chuyên đề 3.jpg",
          },
        ],
      },
    },
    member_info: {
      id: "36e951fa-2d07-4c61-ae1f-fd3c09d4eef9",
      code: "",
      member_id: 207,
      full_name: "DƯƠNG THỊ NGUYỆT YẾN",
    },
    member_exam_info: {
      id: "5d5d8cb3-ca96-481a-a6e5-365c27f76cee",
      member_id: "36e951fa-2d07-4c61-ae1f-fd3c09d4eef9",
      exam_id: "3b6e06ac-1ad7-4d94-9252-acc61d9f99b6",
      startTime: "2022-01-13T03:21:12.653Z",
      endTime: "2022-01-13T03:22:18.260Z",
      time: 15,
      status: 2,
      no_retries: 1,
      result: {
        status: 1,
        final_score: 100,
        total_question: 10,
        total_wrong_answers: 0,
        total_correct_answers: 10,
      },
      type: 2,
      meta: { time_exam: 2 },
      createdAt: "2022-01-13T03:21:12.659Z",
      updatedAt: "2022-01-13T03:22:18.260Z",
    },
  },
  {
    id: "79ba35bc-b9f6-45a3-95fa-e6c47d6b5d07",
    certificate_id: 2175,
    member_exam_id: "73408361-8745-4f5f-977a-765808605f28",
    member_id: "3809b8ec-589d-445f-bb09-be5de2e1c64d",
    subject_id: "ef5d0454-5d07-49d9-86fc-068e1e93386e",
    code: "CR-2021-CWKVCQC",
    type: 2,
    status: 1,
    meta: {},
    createdAt: "2021-12-30T15:01:11.623Z",
    updatedAt: "2021-12-30T15:01:11.623Z",
    subject_info: {
      key: "ef5d0454-5d07-49d9-86fc-068e1e93386e",
      label: "Chương VI: Làm sạch, khử khuẩn và tiệt khuẩn dụng cụ",
      id: "ef5d0454-5d07-49d9-86fc-068e1e93386e",
      subject_id: 7,
      code: "CR-59-NRTJB-1",
      title: "Chương VI: Làm sạch, khử khuẩn và tiệt khuẩn dụng cụ",
      subjectTime: null,
      parent_info: {
        key: "1556f49c-28a1-4fd2-87bf-62501462ffd3",
        label: "Quy trình làm sạch, khử khuẩn và tiệt khuẩn dụng cụ",
        id: "1556f49c-28a1-4fd2-87bf-62501462ffd3",
        subject_id: 19,
        code: "CR-59-NRTJB",
        title: "Quy trình làm sạch, khử khuẩn và tiệt khuẩn dụng cụ",
        mediafiles: [
          {
            id: "367764e0-722c-4788-9226-7fd6693cc836",
            name: "Hình chuyên đề 3.jpg",
          },
        ],
      },
    },
    member_info: {
      id: "3809b8ec-589d-445f-bb09-be5de2e1c64d",
      code: "",
      member_id: 41,
      full_name: "Lê thắng Toàn",
    },
    member_exam_info: {
      id: "73408361-8745-4f5f-977a-765808605f28",
      member_id: "3809b8ec-589d-445f-bb09-be5de2e1c64d",
      exam_id: "3b6e06ac-1ad7-4d94-9252-acc61d9f99b6",
      startTime: "2021-12-30T14:56:20.622Z",
      endTime: "2021-12-30T15:01:11.610Z",
      time: 15,
      status: 2,
      no_retries: 0,
      result: {
        status: 1,
        final_score: 90,
        total_question: 10,
        total_wrong_answers: 1,
        total_correct_answers: 9,
      },
      type: 2,
      meta: { time_exam: 1 },
      createdAt: "2021-12-30T14:56:20.627Z",
      updatedAt: "2021-12-30T15:01:11.610Z",
    },
  },
  {
    id: "ce5f999e-3f1b-4a9e-8a44-ee7b775acef7",
    certificate_id: 2170,
    member_exam_id: "684bb945-32e1-4dba-8083-48ddfa8402cb",
    member_id: "67cd549e-c034-4fbc-a46c-9abf17cf4160",
    subject_id: "ef5d0454-5d07-49d9-86fc-068e1e93386e",
    code: "CR-2021-CIJ0JNA",
    type: 2,
    status: 1,
    meta: {},
    createdAt: "2021-12-30T13:18:27.587Z",
    updatedAt: "2021-12-30T13:18:27.587Z",
    subject_info: {
      key: "ef5d0454-5d07-49d9-86fc-068e1e93386e",
      label: "Chương VI: Làm sạch, khử khuẩn và tiệt khuẩn dụng cụ",
      id: "ef5d0454-5d07-49d9-86fc-068e1e93386e",
      subject_id: 7,
      code: "CR-59-NRTJB-1",
      title: "Chương VI: Làm sạch, khử khuẩn và tiệt khuẩn dụng cụ",
      subjectTime: null,
      parent_info: {
        key: "1556f49c-28a1-4fd2-87bf-62501462ffd3",
        label: "Quy trình làm sạch, khử khuẩn và tiệt khuẩn dụng cụ",
        id: "1556f49c-28a1-4fd2-87bf-62501462ffd3",
        subject_id: 19,
        code: "CR-59-NRTJB",
        title: "Quy trình làm sạch, khử khuẩn và tiệt khuẩn dụng cụ",
        mediafiles: [
          {
            id: "367764e0-722c-4788-9226-7fd6693cc836",
            name: "Hình chuyên đề 3.jpg",
          },
        ],
      },
    },
    member_info: {
      id: "67cd549e-c034-4fbc-a46c-9abf17cf4160",
      code: "",
      member_id: 40,
      full_name: "Nguyễn Thị Hồng Phúc",
    },
    member_exam_info: {
      id: "684bb945-32e1-4dba-8083-48ddfa8402cb",
      member_id: "67cd549e-c034-4fbc-a46c-9abf17cf4160",
      exam_id: "3b6e06ac-1ad7-4d94-9252-acc61d9f99b6",
      startTime: "2021-12-30T13:09:23.821Z",
      endTime: "2021-12-30T13:18:27.573Z",
      time: 15,
      status: 2,
      no_retries: 0,
      result: {
        status: 1,
        final_score: 90,
        total_question: 10,
        total_wrong_answers: 1,
        total_correct_answers: 9,
      },
      type: 2,
      meta: { time_exam: 1 },
      createdAt: "2021-12-30T13:09:23.830Z",
      updatedAt: "2021-12-30T13:18:27.574Z",
    },
  },
  {
    id: "a71e5d08-a9dc-4e96-90c7-4fafc018e454",
    certificate_id: 2164,
    member_exam_id: "43967141-e855-4a70-a6f5-c6d7f0fd6912",
    member_id: "d6f81d28-0f12-4086-9ea0-19cb9fa99ac3",
    subject_id: "ef5d0454-5d07-49d9-86fc-068e1e93386e",
    code: "CR-2021-CLAWWTR",
    type: 2,
    status: 1,
    meta: {},
    createdAt: "2021-12-30T07:43:59.785Z",
    updatedAt: "2021-12-30T07:43:59.785Z",
    subject_info: {
      key: "ef5d0454-5d07-49d9-86fc-068e1e93386e",
      label: "Chương VI: Làm sạch, khử khuẩn và tiệt khuẩn dụng cụ",
      id: "ef5d0454-5d07-49d9-86fc-068e1e93386e",
      subject_id: 7,
      code: "CR-59-NRTJB-1",
      title: "Chương VI: Làm sạch, khử khuẩn và tiệt khuẩn dụng cụ",
      subjectTime: null,
      parent_info: {
        key: "1556f49c-28a1-4fd2-87bf-62501462ffd3",
        label: "Quy trình làm sạch, khử khuẩn và tiệt khuẩn dụng cụ",
        id: "1556f49c-28a1-4fd2-87bf-62501462ffd3",
        subject_id: 19,
        code: "CR-59-NRTJB",
        title: "Quy trình làm sạch, khử khuẩn và tiệt khuẩn dụng cụ",
        mediafiles: [
          {
            id: "367764e0-722c-4788-9226-7fd6693cc836",
            name: "Hình chuyên đề 3.jpg",
          },
        ],
      },
    },
    member_info: {
      id: "d6f81d28-0f12-4086-9ea0-19cb9fa99ac3",
      code: "",
      member_id: 202,
      full_name: "trần Thị Ly Ly",
    },
    member_exam_info: {
      id: "43967141-e855-4a70-a6f5-c6d7f0fd6912",
      member_id: "d6f81d28-0f12-4086-9ea0-19cb9fa99ac3",
      exam_id: "3b6e06ac-1ad7-4d94-9252-acc61d9f99b6",
      startTime: "2021-12-30T07:42:09.858Z",
      endTime: "2021-12-30T07:43:59.772Z",
      time: 15,
      status: 2,
      no_retries: 0,
      result: {
        status: 1,
        final_score: 90,
        total_question: 10,
        total_wrong_answers: 1,
        total_correct_answers: 9,
      },
      type: 2,
      meta: { time_exam: 1 },
      createdAt: "2021-12-30T07:42:09.863Z",
      updatedAt: "2021-12-30T07:43:59.772Z",
    },
  },
  {
    id: "fb47105a-3585-4ec7-aecb-96144fc26182",
    certificate_id: 2144,
    member_exam_id: "d4dc44d1-280e-4a4b-a413-6765a4eae7ab",
    member_id: "24486d94-6c84-4429-ac89-cd9adbac9cb0",
    subject_id: "ef5d0454-5d07-49d9-86fc-068e1e93386e",
    code: "CR-2021-C2QCP7O",
    type: 2,
    status: 1,
    meta: {},
    createdAt: "2021-12-30T02:33:02.635Z",
    updatedAt: "2021-12-30T02:33:02.635Z",
    subject_info: {
      key: "ef5d0454-5d07-49d9-86fc-068e1e93386e",
      label: "Chương VI: Làm sạch, khử khuẩn và tiệt khuẩn dụng cụ",
      id: "ef5d0454-5d07-49d9-86fc-068e1e93386e",
      subject_id: 7,
      code: "CR-59-NRTJB-1",
      title: "Chương VI: Làm sạch, khử khuẩn và tiệt khuẩn dụng cụ",
      subjectTime: null,
      parent_info: {
        key: "1556f49c-28a1-4fd2-87bf-62501462ffd3",
        label: "Quy trình làm sạch, khử khuẩn và tiệt khuẩn dụng cụ",
        id: "1556f49c-28a1-4fd2-87bf-62501462ffd3",
        subject_id: 19,
        code: "CR-59-NRTJB",
        title: "Quy trình làm sạch, khử khuẩn và tiệt khuẩn dụng cụ",
        mediafiles: [
          {
            id: "367764e0-722c-4788-9226-7fd6693cc836",
            name: "Hình chuyên đề 3.jpg",
          },
        ],
      },
    },
    member_info: {
      id: "24486d94-6c84-4429-ac89-cd9adbac9cb0",
      code: "",
      member_id: 166,
      full_name: "Vũ Thị liên",
    },
    member_exam_info: {
      id: "d4dc44d1-280e-4a4b-a413-6765a4eae7ab",
      member_id: "24486d94-6c84-4429-ac89-cd9adbac9cb0",
      exam_id: "3b6e06ac-1ad7-4d94-9252-acc61d9f99b6",
      startTime: "2021-12-30T02:29:38.043Z",
      endTime: "2021-12-30T02:33:02.622Z",
      time: 15,
      status: 2,
      no_retries: 1,
      result: {
        status: 1,
        final_score: 100,
        total_question: 10,
        total_wrong_answers: 0,
        total_correct_answers: 10,
      },
      type: 2,
      meta: { time_exam: 2 },
      createdAt: "2021-12-30T02:29:38.048Z",
      updatedAt: "2021-12-30T02:33:02.622Z",
    },
  },
];

export default function DetailCertificateAdmin() {
  return (
    <div className="detail-certificate-admin">
      <BreadcrumbAdmin
        namePrimaryLink="Danh sách certificates"
        primaryLink="certificates"
        nameSubLink="Chi tiết certificate"
      />
      <Card title="Thông tin chương">
        <Descriptions column={1}>
          <Descriptions.Item label="Tên chương">
            <b>Tên chương</b>
          </Descriptions.Item>
          <Descriptions.Item label="Code">Code chương</Descriptions.Item>
          <Descriptions.Item label="Số lượng bằng">100</Descriptions.Item>
        </Descriptions>
      </Card>
      <Card style={{ marginTop: 15 }} title="Danh sách thành viên đạt">
        <Table
          pagination={{
            position: ["topRight", "bottomRight"],
            showTotal: (total, range) =>
              `${total} thành viên | Từ ${range[0]} đến ${range[1]}`,
            showLessItems: true,
            showSizeChanger: false,
          }}
          columns={columns}
          scroll={{ x: 1300 }}
          dataSource={data}
          rowKey={(record) => record?.id}
        />
      </Card>
      <div style={{ margin: "25px 0" }}>
        <Footer />
      </div>
    </div>
  );
}
