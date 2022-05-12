import React from "react";
import PropTypes from "prop-types";
import "./index.css";
import Footer from "../Footer";
import { Button, Card, Table } from "antd";
import { DownloadOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import moment from "moment";

ResultsMainAdmin.propTypes = {
  filter: PropTypes.object,
};

ResultsMainAdmin.defaultProps = {
  filter: {},
};

const columns = [
  {
    dataIndex: ["member_info", "full_name"],
    key: "full_name",
    title: "Tên thành viên",
  },
  {
    dataIndex: "result",
    key: "result",
    title: "Kết quả thi",
    render: (result) =>
      `${result?.total_correct_answers}/${result?.total_question}`,
  },
  {
    dataIndex: "result",
    key: "percent",
    title: "Tỉ lệ",
    render: (result) => {
      const percent =
        (result?.total_correct_answers / result?.total_question) * 100;
      return `${percent}%`;
    },
  },
  {
    align: "center",
    dataIndex: ["times_test"],
    key: "times_test",
    title: "Lần thi đậu",
    render: (time) => `Lần ${time}`,
  },
  {
    dataIndex: ["exam_info", "subject_info"],
    key: "subject_info",
    title: "Tên chuyên đề",
    render: (sub) => (
      <Link to={`/admin/studies/${sub?.subject_id}`}>{sub?.title}</Link>
    ),
  },
  {
    dataIndex: ["exam_info", "subject_info"],
    key: "chapter_info",
    title: "Tên chương",
    render: (sub) => (sub?.type === 2 ? sub?.title : ""),
  },
  {
    dataIndex: ["exam_info", "subject_info", "meta", "lesson_total"],
    key: "lesson_total",
    title: "Số tiết",
    width: 100,
  },
  {
    dataIndex: "time_studying_total",
    key: "time_studying_total",
    title: "Thời gian học",
    width: 200,
    render: (time) => (time > 0 ? `${Math.floor(time)}s` : ""),
  },
  {
    dataIndex: ["member_info", "department_info", "name"],
    key: "department_info",
    title: "Khoa-Phòng-Đơn vị",
    width: 200,
  },
  {
    dataIndex: ["certificate_info", "certificate_id"],
    key: "certificate",
    title: "File Certificate",
    width: 180,
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
    width: 110,
    render: (date) => {
      return moment(date).format("DD-MM-YYYY");
    },
  },
];

const data = [
  {
    id: "a45157b9-0ff5-4880-bb8c-c7ad989b388a",
    member_id: "d2658ce8-a6b7-4665-ae8f-75296d4893d6",
    exam_id: "5a4d2557-45b0-4bfe-9b82-2888fce2c87f",
    startTime: "2022-01-14T03:49:13.828Z",
    endTime: "2022-01-14T03:52:23.423Z",
    time: 40,
    status: 2,
    no_retries: 0,
    result: {
      status: 1,
      final_score: 95,
      total_question: 40,
      total_wrong_answers: 2,
      total_correct_answers: 38,
    },
    type: 1,
    meta: { time_exam: 1 },
    createdAt: "2022-01-14T03:49:13.835Z",
    updatedAt: "2022-01-14T03:52:23.424Z",
    member_info: {
      id: "d2658ce8-a6b7-4665-ae8f-75296d4893d6",
      code: "",
      member_id: 14,
      full_name: "nguyễn thị thùy trang",
      department_info: {
        id: "748f37bf-7d41-458a-a986-a12a0c7c257b",
        department_id: 72,
        name: "Khoa Kiểm Soát Nhiễm Khuẩn",
        type: 2,
        parent_id: "50e55ee4-e44d-4500-8730-bd3a588325ae",
      },
    },
    exam_info: {
      id: "5a4d2557-45b0-4bfe-9b82-2888fce2c87f",
      name: "Tổng quan về Kiểm soát nhiễm khuẩn, Giám sát kiểm soát nhiễm khuẩn, Phòng ngừa phơi nhiễm",
      exam_id: 17,
      subject_id: "554ceeef-fe0d-47e8-a430-de744c2a0e9a",
      subject_info: {
        key: "554ceeef-fe0d-47e8-a430-de744c2a0e9a",
        label:
          "Tổng quan về Kiểm soát nhiễm khuẩn, Giám sát kiểm soát nhiễm khuẩn, Phòng ngừa phơi nhiễm",
        id: "554ceeef-fe0d-47e8-a430-de744c2a0e9a",
        subject_id: 1,
        code: "CR-59-DKEFG",
        title:
          "Tổng quan về Kiểm soát nhiễm khuẩn, Giám sát kiểm soát nhiễm khuẩn, Phòng ngừa phơi nhiễm",
        meta: { lesson_total: 3 },
        type: 1,
        parent_info: null,
      },
    },
    certificate_info: null,
    times_test: 1,
    time_studying_total: 0,
  },
  {
    id: "cef6c462-4516-4cde-8402-4fa126126854",
    member_id: "d2658ce8-a6b7-4665-ae8f-75296d4893d6",
    exam_id: "8418ad8a-a45a-4ed8-bf0f-3dd5facd3336",
    startTime: "2022-01-14T03:48:36.710Z",
    endTime: "2022-01-14T03:49:03.932Z",
    time: 15,
    status: 2,
    no_retries: 1,
    result: {
      status: 1,
      final_score: 90,
      total_question: 10,
      total_wrong_answers: 1,
      total_correct_answers: 9,
    },
    type: 2,
    meta: { time_exam: 5 },
    createdAt: "2022-01-14T03:48:36.717Z",
    updatedAt: "2022-01-14T03:49:03.933Z",
    member_info: {
      id: "d2658ce8-a6b7-4665-ae8f-75296d4893d6",
      code: "",
      member_id: 14,
      full_name: "nguyễn thị thùy trang",
      department_info: {
        id: "748f37bf-7d41-458a-a986-a12a0c7c257b",
        department_id: 72,
        name: "Khoa Kiểm Soát Nhiễm Khuẩn",
        type: 2,
        parent_id: "50e55ee4-e44d-4500-8730-bd3a588325ae",
      },
    },
    exam_info: {
      id: "8418ad8a-a45a-4ed8-bf0f-3dd5facd3336",
      name: "Quản lý chất thải rắn",
      exam_id: 9,
      subject_id: "dfb8c175-393e-4577-8f9d-87255d4f643c",
      subject_info: {
        key: "dfb8c175-393e-4577-8f9d-87255d4f643c",
        label: "Chương XVI: Quản lý chất thải rắn",
        id: "dfb8c175-393e-4577-8f9d-87255d4f643c",
        subject_id: 17,
        code: "CR-59-VSF9P-4",
        title: "Chương XVI: Quản lý chất thải rắn",
        meta: { lesson_total: 1, is_chapter_question: true },
        type: 2,
        parent_info: {
          key: "25911ac0-6d2f-448f-8aa9-d32b946cbfd7",
          label:
            "Quy định về kiến trúc, tổ chức, tiêu chuẩn môi trường, vệ sinh bệnh viện, quản lý đồ vải, chất thải trong bệnh viện",
          id: "25911ac0-6d2f-448f-8aa9-d32b946cbfd7",
          subject_id: 21,
          code: "CR-59-VSF9P",
          title:
            "Quy định về kiến trúc, tổ chức, tiêu chuẩn môi trường, vệ sinh bệnh viện, quản lý đồ vải, chất thải trong bệnh viện",
        },
      },
    },
    certificate_info: {
      id: "c31d9fab-2d45-433f-ba45-0b6b62eb1218",
      certificate_id: 2227,
      member_exam_id: "cef6c462-4516-4cde-8402-4fa126126854",
      member_id: "d2658ce8-a6b7-4665-ae8f-75296d4893d6",
      subject_id: "dfb8c175-393e-4577-8f9d-87255d4f643c",
      code: "CR-2022-CHG0GTS",
      type: 2,
      status: 1,
      meta: {},
      createdAt: "2022-01-14T03:49:03.947Z",
      updatedAt: "2022-01-14T03:49:03.947Z",
    },
    times_test: 5,
    time_studying_total: 5.609,
  },
  {
    id: "ce70477f-a2c9-4fab-85c4-8ca30f5a63d1",
    member_id: "36e951fa-2d07-4c61-ae1f-fd3c09d4eef9",
    exam_id: "7eee04f1-bc76-409e-b9bb-59c794cf2700",
    startTime: "2022-01-14T03:38:38.843Z",
    endTime: "2022-01-14T03:39:58.142Z",
    time: 15,
    status: 2,
    no_retries: 2,
    result: {
      status: 1,
      final_score: 90,
      total_question: 10,
      total_wrong_answers: 1,
      total_correct_answers: 9,
    },
    type: 2,
    meta: { time_exam: 3 },
    createdAt: "2022-01-14T03:38:38.849Z",
    updatedAt: "2022-01-14T03:39:58.142Z",
    member_info: {
      id: "36e951fa-2d07-4c61-ae1f-fd3c09d4eef9",
      code: "",
      member_id: 207,
      full_name: "DƯƠNG THỊ NGUYỆT YẾN",
      department_info: {
        id: "748f37bf-7d41-458a-a986-a12a0c7c257b",
        department_id: 72,
        name: "Khoa Kiểm Soát Nhiễm Khuẩn",
        type: 2,
        parent_id: "50e55ee4-e44d-4500-8730-bd3a588325ae",
      },
    },
    exam_info: {
      id: "7eee04f1-bc76-409e-b9bb-59c794cf2700",
      name: "Biện pháp thực hành phòng ngừa nhiễm khuẩn huyết bệnh viện",
      exam_id: 14,
      subject_id: "741236e1-02bc-4932-8f50-40383b2ec804",
      subject_info: {
        key: "741236e1-02bc-4932-8f50-40383b2ec804",
        label:
          "Chương IX: Biện pháp thực hành phòng ngừa nhiễm khuẩn huyết bệnh viện",
        id: "741236e1-02bc-4932-8f50-40383b2ec804",
        subject_id: 10,
        code: "CR-59-GGTDQ-3",
        title:
          "Chương IX: Biện pháp thực hành phòng ngừa nhiễm khuẩn huyết bệnh viện",
        meta: { lesson_total: 1, is_chapter_question: true },
        type: 2,
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
    certificate_info: {
      id: "50c5ffd9-77b9-4955-9a2a-cc3dfcecbd81",
      certificate_id: 2226,
      member_exam_id: "ce70477f-a2c9-4fab-85c4-8ca30f5a63d1",
      member_id: "36e951fa-2d07-4c61-ae1f-fd3c09d4eef9",
      subject_id: "741236e1-02bc-4932-8f50-40383b2ec804",
      code: "CR-2022-CXKHXZN",
      type: 2,
      status: 1,
      meta: {},
      createdAt: "2022-01-14T03:39:58.155Z",
      updatedAt: "2022-01-14T03:39:58.155Z",
    },
    times_test: 3,
    time_studying_total: 17.353,
  },
  {
    id: "5514b923-ad50-490d-b474-08f0d2727d04",
    member_id: "36e951fa-2d07-4c61-ae1f-fd3c09d4eef9",
    exam_id: "df706e0d-8d60-4787-b983-be1455f9dadc",
    startTime: "2022-01-14T03:32:32.607Z",
    endTime: "2022-01-14T03:35:50.039Z",
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
    createdAt: "2022-01-14T03:32:32.621Z",
    updatedAt: "2022-01-14T03:35:50.039Z",
    member_info: {
      id: "36e951fa-2d07-4c61-ae1f-fd3c09d4eef9",
      code: "",
      member_id: 207,
      full_name: "DƯƠNG THỊ NGUYỆT YẾN",
      department_info: {
        id: "748f37bf-7d41-458a-a986-a12a0c7c257b",
        department_id: 72,
        name: "Khoa Kiểm Soát Nhiễm Khuẩn",
        type: 2,
        parent_id: "50e55ee4-e44d-4500-8730-bd3a588325ae",
      },
    },
    exam_info: {
      id: "df706e0d-8d60-4787-b983-be1455f9dadc",
      name: "Biện pháp thực hành phòng ngừa nhiễm khuẩn vết mổ",
      exam_id: 8,
      subject_id: "e80807c6-ef1f-4eda-a374-aec6057de7a9",
      subject_info: {
        key: "e80807c6-ef1f-4eda-a374-aec6057de7a9",
        label: "Chương VIII: Biện pháp thực hành phòng ngừa nhiễm khuẩn vết mổ",
        id: "e80807c6-ef1f-4eda-a374-aec6057de7a9",
        subject_id: 9,
        code: "CR-59-GGTDQ-2",
        title: "Chương VIII: Biện pháp thực hành phòng ngừa nhiễm khuẩn vết mổ",
        meta: { lesson_total: 1, is_chapter_question: true },
        type: 2,
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
    certificate_info: {
      id: "f4b5f92a-a7c8-46de-a4fc-f4310e375c9c",
      certificate_id: 2225,
      member_exam_id: "5514b923-ad50-490d-b474-08f0d2727d04",
      member_id: "36e951fa-2d07-4c61-ae1f-fd3c09d4eef9",
      subject_id: "e80807c6-ef1f-4eda-a374-aec6057de7a9",
      code: "CR-2022-CK8GJMO",
      type: 2,
      status: 1,
      meta: {},
      createdAt: "2022-01-14T03:35:50.054Z",
      updatedAt: "2022-01-14T03:35:50.054Z",
    },
    times_test: 1,
    time_studying_total: 4.439,
  },
  {
    id: "cde71d14-1109-49e7-aa44-245f8b8144de",
    member_id: "36e951fa-2d07-4c61-ae1f-fd3c09d4eef9",
    exam_id: "e6faa818-3da6-4e9b-b77d-8d199e896eca",
    startTime: "2022-01-14T03:28:50.893Z",
    endTime: "2022-01-14T03:32:18.441Z",
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
    meta: { time_exam: 4 },
    createdAt: "2022-01-14T03:28:50.900Z",
    updatedAt: "2022-01-14T03:32:18.441Z",
    member_info: {
      id: "36e951fa-2d07-4c61-ae1f-fd3c09d4eef9",
      code: "",
      member_id: 207,
      full_name: "DƯƠNG THỊ NGUYỆT YẾN",
      department_info: {
        id: "748f37bf-7d41-458a-a986-a12a0c7c257b",
        department_id: 72,
        name: "Khoa Kiểm Soát Nhiễm Khuẩn",
        type: 2,
        parent_id: "50e55ee4-e44d-4500-8730-bd3a588325ae",
      },
    },
    exam_info: {
      id: "e6faa818-3da6-4e9b-b77d-8d199e896eca",
      name: "Biện pháp thực hành phòng ngừa viêm phổi bệnh viện",
      exam_id: 7,
      subject_id: "2e472f66-ff81-4867-a13e-3454304a2e41",
      subject_info: {
        key: "2e472f66-ff81-4867-a13e-3454304a2e41",
        label: "Chương VII: Biện pháp thực hành phòng ngừa viêm phổi bệnh viện",
        id: "2e472f66-ff81-4867-a13e-3454304a2e41",
        subject_id: 8,
        code: "CR-59-GGTDQ-1",
        title: "Chương VII: Biện pháp thực hành phòng ngừa viêm phổi bệnh viện",
        meta: { lesson_total: 1, is_chapter_question: true },
        type: 2,
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
    certificate_info: {
      id: "bd1a141d-10f8-404a-b5f8-32a47bded7b7",
      certificate_id: 2224,
      member_exam_id: "cde71d14-1109-49e7-aa44-245f8b8144de",
      member_id: "36e951fa-2d07-4c61-ae1f-fd3c09d4eef9",
      subject_id: "2e472f66-ff81-4867-a13e-3454304a2e41",
      code: "CR-2022-CRMWWO4",
      type: 2,
      status: 1,
      meta: {},
      createdAt: "2022-01-14T03:32:18.453Z",
      updatedAt: "2022-01-14T03:32:18.453Z",
    },
    times_test: 4,
    time_studying_total: 2.92,
  },
];

function ResultsMainAdmin({ filter }) {
  return (
    <>
      <Card
        className="main-card"
        extra={<Button icon={<DownloadOutlined />}>Xuất dữ liệu</Button>}
      >
        <Table
          pagination={{
            position: ["topRight", "bottomRight"],
            showTotal: (total, range) =>
              `${total} kết quả | Từ ${range[0]} đến ${range[1]}`,
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
    </>
  );
}

export default ResultsMainAdmin;
