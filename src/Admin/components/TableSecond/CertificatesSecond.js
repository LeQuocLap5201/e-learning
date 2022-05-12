import { Button, Card, Table, Tag } from "antd";
import React from "react";
import moment from "moment";
import { Link } from "react-router-dom";
import { DownloadOutlined } from "@ant-design/icons";

const columns = [
  {
    key: "code",
    render: (certificate) => {
      let code = certificate?.code;
      let id = certificate?.subject_id;
      return <Link to={`/admin/certificates/${id}`}>{code}</Link>;
    },
    title: "Mã certificate",
  },
  {
    dataIndex: ["subject_info", "title"],
    key: "name",
    title: "Tên chuyên đề / chương",
  },
  {
    dataIndex: "type",
    key: "type",
    title: "Loại Certificate",
    render: (type) => {
      if (type === 1) {
        return <Tag color="#2b75b5">Chuyên đề</Tag>;
      }
      if (type === 2) {
        return <Tag color="#1f8f9ae0">Chương</Tag>;
      }
    },
  },
  {
    dataIndex: "certificate_id",
    key: "certificate",
    title: "File Certificate",
    render: (certificateId) => (
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
    ),
  },
  {
    dataIndex: "createdAt",
    key: "createdAt",
    render: (date) => {
      return moment(date).format("DD-MM-YYYY");
    },
    title: "Ngày tạo",
    width: 200,
  },
];

const data = [
  {
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
    subject_info: {
      key: "741236e1-02bc-4932-8f50-40383b2ec804",
      label:
        "Chương IX: Biện pháp thực hành phòng ngừa nhiễm khuẩn huyết bệnh viện",
      id: "741236e1-02bc-4932-8f50-40383b2ec804",
      subject_id: 10,
      code: "CR-59-GGTDQ-3",
      title:
        "Chương IX: Biện pháp thực hành phòng ngừa nhiễm khuẩn huyết bệnh viện",
      subjectTime: null,
      parent_info: {
        key: "da462367-9552-4b48-82a8-6ea45cbda692",
        label: "Thực hành phòng ngừa các loại nhiễm khuẩn bệnh viện",
        id: "da462367-9552-4b48-82a8-6ea45cbda692",
        subject_id: 20,
        code: "CR-59-GGTDQ",
        title: "Thực hành phòng ngừa các loại nhiễm khuẩn bệnh viện",
        mediafiles: [
          {
            id: "8053ec98-fb23-4360-ab76-d92c61b3f1a4",
            name: "Chuyên đề 4.jpg",
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
    },
  },
  {
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
    subject_info: {
      key: "e80807c6-ef1f-4eda-a374-aec6057de7a9",
      label: "Chương VIII: Biện pháp thực hành phòng ngừa nhiễm khuẩn vết mổ",
      id: "e80807c6-ef1f-4eda-a374-aec6057de7a9",
      subject_id: 9,
      code: "CR-59-GGTDQ-2",
      title: "Chương VIII: Biện pháp thực hành phòng ngừa nhiễm khuẩn vết mổ",
      subjectTime: null,
      parent_info: {
        key: "da462367-9552-4b48-82a8-6ea45cbda692",
        label: "Thực hành phòng ngừa các loại nhiễm khuẩn bệnh viện",
        id: "da462367-9552-4b48-82a8-6ea45cbda692",
        subject_id: 20,
        code: "CR-59-GGTDQ",
        title: "Thực hành phòng ngừa các loại nhiễm khuẩn bệnh viện",
        mediafiles: [
          {
            id: "8053ec98-fb23-4360-ab76-d92c61b3f1a4",
            name: "Chuyên đề 4.jpg",
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
    },
  },
  {
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
    subject_info: {
      key: "2e472f66-ff81-4867-a13e-3454304a2e41",
      label: "Chương VII: Biện pháp thực hành phòng ngừa viêm phổi bệnh viện",
      id: "2e472f66-ff81-4867-a13e-3454304a2e41",
      subject_id: 8,
      code: "CR-59-GGTDQ-1",
      title: "Chương VII: Biện pháp thực hành phòng ngừa viêm phổi bệnh viện",
      subjectTime: null,
      parent_info: {
        key: "da462367-9552-4b48-82a8-6ea45cbda692",
        label: "Thực hành phòng ngừa các loại nhiễm khuẩn bệnh viện",
        id: "da462367-9552-4b48-82a8-6ea45cbda692",
        subject_id: 20,
        code: "CR-59-GGTDQ",
        title: "Thực hành phòng ngừa các loại nhiễm khuẩn bệnh viện",
        mediafiles: [
          {
            id: "8053ec98-fb23-4360-ab76-d92c61b3f1a4",
            name: "Chuyên đề 4.jpg",
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
    },
  },
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
    id: "b117a774-7238-4cc3-a7ab-5f6ea0ff8f59",
    certificate_id: 2215,
    member_exam_id: "f4a31fe2-c971-4cc8-990f-eb69de92926d",
    member_id: "36e951fa-2d07-4c61-ae1f-fd3c09d4eef9",
    subject_id: "de8147e3-ae02-4418-b48a-22a4476d15ad",
    code: "CR-2022-CNLLWEI",
    type: 2,
    status: 1,
    meta: {},
    createdAt: "2022-01-13T03:19:12.784Z",
    updatedAt: "2022-01-13T03:19:12.784Z",
    subject_info: {
      key: "de8147e3-ae02-4418-b48a-22a4476d15ad",
      label: "Chương V: Sử dụng dụng cụ phòng hộ",
      id: "de8147e3-ae02-4418-b48a-22a4476d15ad",
      subject_id: 6,
      code: "CR-59-BP1NS-3",
      title: "Chương V: Sử dụng dụng cụ phòng hộ",
      subjectTime: null,
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
    },
    member_info: {
      id: "36e951fa-2d07-4c61-ae1f-fd3c09d4eef9",
      code: "",
      member_id: 207,
      full_name: "DƯƠNG THỊ NGUYỆT YẾN",
    },
    member_exam_info: {
      id: "f4a31fe2-c971-4cc8-990f-eb69de92926d",
      member_id: "36e951fa-2d07-4c61-ae1f-fd3c09d4eef9",
      exam_id: "98a2ece9-fc73-4359-be2b-1f140840994f",
      startTime: "2022-01-13T03:18:13.231Z",
      endTime: "2022-01-13T03:19:12.772Z",
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
      createdAt: "2022-01-13T03:18:13.237Z",
      updatedAt: "2022-01-13T03:19:12.772Z",
    },
  },
];

export default function CertificatesSecond() {
  return (
    <div className="certificatess-second table-second">
      <Card title="Danh sách Certificate">
        <Table
          pagination={{
            showTotal: (total, range) =>
              `${total} certificate | Từ ${range[0]} đến ${range[1]}`,
            showLessItems: true,
            showSizeChanger: false,
          }}
          columns={columns}
          scroll={{ x: 1300 }}
          dataSource={data}
          rowKey={(record) => record?.id}
        />
      </Card>
    </div>
  );
}
