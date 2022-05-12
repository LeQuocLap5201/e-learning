import React from "react";
import PropTypes from "prop-types";
import { Button, Card, Table, Tag } from "antd";
import { DownloadOutlined, PlusOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import "./index.css";
import moment from "moment";
import Footer from "../Footer";

StudiesMainAdmin.propTypes = {
  filter: PropTypes.object,
};

StudiesMainAdmin.defaultProps = {
  filter: {},
};

const columns = [
  {
    dataIndex: "subject_id",
    key: "subject_id",
    title: "ID",
    width: 100,
    render: (id) => <Link to={`${id}`}>{id}</Link>,
  },
  {
    key: "title",
    title: "Tên chuyên đề",
    render: (study) => <Link to={`${study?.id}`}>{study?.title}</Link>,
  },
  {
    key: "exam_info",
    title: "Tên bài kiểm tra",
    render: (study) => (
      <Link to={`/admin/e-tests/${study?.exam_info?.exam_id}`}>
        {study?.exam_info?.name}
      </Link>
    ),
  },
  {
    align: "center",
    dataIndex: "total_chapter",
    key: "total_chapter",
    title: "Số chương",
    width: 110,
  },
  {
    // dataIndex: "total_chapter",
    key: "total_chapter",
    title: "Đối tượng học",
    render: (study) => <Tag>Tất cả</Tag>,
  },
  {
    align: "center",

    dataIndex: ["meta", "lesson_total"],
    key: "",
    title: "Số tiết",
    width: 90,
  },
  {
    align: "center",
    dataIndex: "total_member_studing",
    key: "total_member_studing",
    title: "Số người đang học",
    width: 110,
  },
  {
    dataIndex: "published_date",
    key: "published_date",
    title: "Ngày phát hành",
    width: 150,
    render: (date) =>
      date !== null ? moment(date).format("DD/MM/YYYY") : "---",
  },
  {
    title: "Ngày tạo",
    dataIndex: "createdAt",
    key: "createdAt",
    width: 110,
    render: (date) => {
      return moment(date).format("DD/MM/YYYY");
    },
  },
  {
    align: "center",
    dataIndex: "status",
    key: "status",
    title: "Trạng thái",
    width: 160,
    render: (status) => {
      if (status === 1) {
        return (
          <Tag style={{ minWidth: 130 }} color="#297fb9">
            Chưa phát hành
          </Tag>
        );
      }
      if (status === -1) {
        return (
          <Tag style={{ minWidth: 130 }} color="#696969">
            Hủy bài học
          </Tag>
        );
      }
      if (status === 2) {
        return (
          <Tag style={{ minWidth: 130 }} color="#2ea219">
            Phát hành
          </Tag>
        );
      }
      if (status === -2) {
        return (
          <Tag style={{ minWidth: 130 }} color="#f39c12">
            Tạm ngưng
          </Tag>
        );
      }
    },
  },
  {
    title: "Chức năng",
    dataIndex: "subject_id",
    key: "action",
    fixed: "right",
    align: "center",
    width: 110,
    render: (id) => <Link to={`${id}`}>Xem</Link>,
  },
];

const data = [
  {
    key: "25911ac0-6d2f-448f-8aa9-d32b946cbfd7",
    label:
      "Quy định về kiến trúc, tổ chức, tiêu chuẩn môi trường, vệ sinh bệnh viện, quản lý đồ vải, chất thải trong bệnh viện",
    id: "25911ac0-6d2f-448f-8aa9-d32b946cbfd7",
    subject_id: 21,
    creator_id: "621b0ebd-fdb8-48d1-9c89-5ec22f891c0a",
    parent_id: null,
    code: "CR-59-VSF9P",
    title:
      "Quy định về kiến trúc, tổ chức, tiêu chuẩn môi trường, vệ sinh bệnh viện, quản lý đồ vải, chất thải trong bệnh viện",
    type: 1,
    mediafiles: [
      {
        id: "c48a1e02-46f1-4032-b45b-f1da2aaf68a3",
        name: "Chuyên đề 5.jpg",
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
    order: null,
    summary: "",
    status: 1,
    logs: {
      list: [
        [
          {
            id: 1,
            user: {
              id: "621b0ebd-fdb8-48d1-9c89-5ec22f891c0a",
              user_name: "LRTAdminSystem",
            },
            createdAt: "1643046284042",
          },
        ],
        {
          id: 2,
          user: {
            id: "9960954f-eb17-449b-b756-b2d8e6cbc205",
            user_name: "LRTDoanThy",
          },
          field: "chapter_question",
          createdAt: "1643186671389",
          new_value: [
            {
              id: "dfb8c175-393e-4577-8f9d-87255d4f643c",
              title: "Chương XVI: Quản lý chất thải rắn",
            },
            {
              id: "4aec3dc2-e926-45c9-84f5-3a8b7802391f",
              title: "Chương XV: Quy trình vệ sinh bệnh viện",
            },
            {
              id: "dd3025c0-55aa-47ad-8237-bc9857d3bdc8",
              title: "Chương XIV: Quản lý đồ vải trong bệnh viện",
            },
            {
              id: "98811483-1b34-4c3e-a4e2-fa43088bfdf1",
              title:
                "Chương XII: Quy định kiến trúc, tổ chức và tiêu chuẩn môi trường tại khoa lâm sàng",
            },
          ],
          old_value: [
            {
              id: "dfb8c175-393e-4577-8f9d-87255d4f643c",
              title: "Chương XVI: Quản lý chất thải rắn",
            },
            {
              id: "98811483-1b34-4c3e-a4e2-fa43088bfdf1",
              title:
                "Chương XII: Quy định kiến trúc, tổ chức và tiêu chuẩn môi trường tại khoa lâm sàng",
            },
            {
              id: "dd3025c0-55aa-47ad-8237-bc9857d3bdc8",
              title: "Chương XIV: Quản lý đồ vải trong bệnh viện",
            },
            {
              id: "4aec3dc2-e926-45c9-84f5-3a8b7802391f",
              title: "Chương XV: Quy trình vệ sinh bệnh viện",
            },
          ],
        },
        {
          id: 3,
          user: {
            id: "9960954f-eb17-449b-b756-b2d8e6cbc205",
            user_name: "LRTDoanThy",
          },
          field: "mediafiles",
          createdAt: "1643190922088",
          new_value: [
            {
              id: "c48a1e02-46f1-4032-b45b-f1da2aaf68a3",
              name: "Chuyên đề 5.jpg",
            },
          ],
          old_value: [],
        },
      ],
    },
    meta: { lesson_total: 4 },
    subjectTime: null,
    target: [
      1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
      22, 23, 24, 25, 26, 27,
    ],
    createdAt: "2022-01-24T17:44:44.160Z",
    updatedAt: "2022-01-26T09:55:22.090Z",
    parent_info: null,
    user_info: {
      id: "621b0ebd-fdb8-48d1-9c89-5ec22f891c0a",
      user_id: 1,
      username: "LRTAdminSystem",
    },
    exam_info: {
      id: "50d48dce-7649-430f-88e8-db928b8e13ea",
      exam_id: 18,
      name: "Quy định về kiến trúc, tổ chức, tiêu chuẩn môi trường, vệ sinh bệnh viện, quản lý đồ vải, chất thải trong bệnh viện",
    },
    degree_info: null,
    target_info: [
      { id: 1, name: "Giáo sư, Tiến sĩ" },
      { id: 2, name: "PGS, Tiến sĩ" },
      { id: 3, name: "Tiến sĩ, Bác sĩ" },
      { id: 4, name: "Tiến sĩ, Dược sĩ" },
      { id: 5, name: "Thạc sĩ, Bác sĩ" },
      { id: 6, name: "BS.CKII" },
      { id: 7, name: "BS.CKI" },
      { id: 8, name: "BS Nội trú" },
      { id: 9, name: "Bác sĩ" },
      { id: 10, name: "Dược sĩ" },
      { id: 11, name: "Tiến sĩ, Điều dưỡng" },
      { id: 12, name: "Thạc sĩ, Điều dưỡng" },
      { id: 13, name: "Điều dưỡng CKI" },
      { id: 14, name: "Điều dưỡng" },
      { id: 15, name: "Kỹ thuật viên" },
      { id: 16, name: "Hộ lý" },
      { id: 17, name: "Thư ký y khoa" },
      { id: 18, name: "Nhân viên tổng đài" },
      { id: 19, name: "Nhân viên phục vụ" },
      { id: 20, name: "Nhân viên vi tính" },
      { id: 21, name: "Kỹ sư" },
      { id: 22, name: "Chuyên viên Quản trị kinh doanh" },
      { id: 23, name: "Cử nhân công nghệ thông tin" },
      { id: 24, name: "Nhân viên văn thư" },
      { id: 25, name: "Nhân viên lái xe " },
      { id: 26, name: "Khác" },
      { id: 27, name: "Tất  cả" },
    ],
    total_certificate: 0,
    total_member_studing: 0,
    total_chapter: 4,
  },
  {
    key: "da462367-9552-4b48-82a8-6ea45cbda692",
    label: "Thực hành phòng ngừa các loại nhiễm khuẩn bệnh viện",
    id: "da462367-9552-4b48-82a8-6ea45cbda692",
    subject_id: 20,
    creator_id: "621b0ebd-fdb8-48d1-9c89-5ec22f891c0a",
    parent_id: null,
    code: "CR-59-GGTDQ",
    title: "Thực hành phòng ngừa các loại nhiễm khuẩn bệnh viện",
    type: 1,
    mediafiles: [
      {
        id: "8053ec98-fb23-4360-ab76-d92c61b3f1a4",
        name: "Chuyên đề 4.jpg",
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
    order: null,
    summary: "",
    status: 1,
    logs: {
      list: [
        [
          {
            id: 1,
            user: {
              id: "621b0ebd-fdb8-48d1-9c89-5ec22f891c0a",
              user_name: "LRTAdminSystem",
            },
            createdAt: "1643046254369",
          },
        ],
        {
          id: 2,
          user: {
            id: "9960954f-eb17-449b-b756-b2d8e6cbc205",
            user_name: "LRTDoanThy",
          },
          field: "mediafiles",
          createdAt: "1643190936418",
          new_value: [
            {
              id: "8053ec98-fb23-4360-ab76-d92c61b3f1a4",
              name: "Chuyên đề 4.jpg",
            },
          ],
          old_value: [],
        },
        {
          id: 3,
          user: {
            id: "9960954f-eb17-449b-b756-b2d8e6cbc205",
            user_name: "LRTDoanThy",
          },
          field: "chapter_question",
          createdAt: "1649836215388",
          new_value: [
            {
              id: "e80807c6-ef1f-4eda-a374-aec6057de7a9",
              title:
                "Chương VIII: Biện pháp thực hành phòng ngừa nhiễm khuẩn vết mổ",
            },
            {
              id: "741236e1-02bc-4932-8f50-40383b2ec804",
              title:
                "Chương IX: Biện pháp thực hành phòng ngừa nhiễm khuẩn huyết bệnh viện",
            },
            {
              id: "467093d9-3f66-47fa-af3b-dd358151a858",
              title:
                "Chương X: Biện pháp thực hành phòng ngừa nhiễm khuẩn tiết niệu bệnh viện",
            },
            {
              id: "86b6b5a0-de7b-4cab-8db6-566cb8b2db5d",
              title:
                "Chương XI: Biện pháp thực hành phòng ngừa nhiễm khuẩn da và mô mềm",
            },
          ],
          old_value: [
            {
              id: "2e472f66-ff81-4867-a13e-3454304a2e41",
              title:
                "Chương VII: Biện pháp thực hành phòng ngừa viêm phổi bệnh viện",
            },
            {
              id: "e80807c6-ef1f-4eda-a374-aec6057de7a9",
              title:
                "Chương VIII: Biện pháp thực hành phòng ngừa nhiễm khuẩn vết mổ",
            },
            {
              id: "741236e1-02bc-4932-8f50-40383b2ec804",
              title:
                "Chương IX: Biện pháp thực hành phòng ngừa nhiễm khuẩn huyết bệnh viện",
            },
            {
              id: "467093d9-3f66-47fa-af3b-dd358151a858",
              title:
                "Chương X: Biện pháp thực hành phòng ngừa nhiễm khuẩn tiết niệu bệnh viện",
            },
            {
              id: "86b6b5a0-de7b-4cab-8db6-566cb8b2db5d",
              title:
                "Chương XI: Biện pháp thực hành phòng ngừa nhiễm khuẩn da và mô mềm",
            },
          ],
        },
        {
          id: 4,
          user: {
            id: "9960954f-eb17-449b-b756-b2d8e6cbc205",
            user_name: "LRTDoanThy",
          },
          field: "chapter_question",
          createdAt: "1649836220566",
          new_value: [
            {
              id: "86b6b5a0-de7b-4cab-8db6-566cb8b2db5d",
              title:
                "Chương XI: Biện pháp thực hành phòng ngừa nhiễm khuẩn da và mô mềm",
            },
            {
              id: "467093d9-3f66-47fa-af3b-dd358151a858",
              title:
                "Chương X: Biện pháp thực hành phòng ngừa nhiễm khuẩn tiết niệu bệnh viện",
            },
            {
              id: "741236e1-02bc-4932-8f50-40383b2ec804",
              title:
                "Chương IX: Biện pháp thực hành phòng ngừa nhiễm khuẩn huyết bệnh viện",
            },
            {
              id: "e80807c6-ef1f-4eda-a374-aec6057de7a9",
              title:
                "Chương VIII: Biện pháp thực hành phòng ngừa nhiễm khuẩn vết mổ",
            },
            {
              id: "2e472f66-ff81-4867-a13e-3454304a2e41",
              title:
                "Chương VII: Biện pháp thực hành phòng ngừa viêm phổi bệnh viện",
            },
          ],
          old_value: [
            {
              id: "e80807c6-ef1f-4eda-a374-aec6057de7a9",
              title:
                "Chương VIII: Biện pháp thực hành phòng ngừa nhiễm khuẩn vết mổ",
            },
            {
              id: "741236e1-02bc-4932-8f50-40383b2ec804",
              title:
                "Chương IX: Biện pháp thực hành phòng ngừa nhiễm khuẩn huyết bệnh viện",
            },
            {
              id: "467093d9-3f66-47fa-af3b-dd358151a858",
              title:
                "Chương X: Biện pháp thực hành phòng ngừa nhiễm khuẩn tiết niệu bệnh viện",
            },
            {
              id: "86b6b5a0-de7b-4cab-8db6-566cb8b2db5d",
              title:
                "Chương XI: Biện pháp thực hành phòng ngừa nhiễm khuẩn da và mô mềm",
            },
          ],
        },
      ],
    },
    meta: { lesson_total: 5 },
    subjectTime: null,
    target: [
      1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
      22, 23, 24, 25, 26, 27,
    ],
    createdAt: "2022-01-24T17:44:17.056Z",
    updatedAt: "2022-04-13T07:50:20.568Z",
    parent_info: null,
    user_info: {
      id: "621b0ebd-fdb8-48d1-9c89-5ec22f891c0a",
      user_id: 1,
      username: "LRTAdminSystem",
    },
    exam_info: {
      id: "4f26130e-922d-4284-9ed3-6a720f89e31b",
      exam_id: 19,
      name: "Thực hành phòng ngừa các loại nhiễm khuẩn bệnh viện",
    },
    degree_info: null,
    target_info: [
      { id: 1, name: "Giáo sư, Tiến sĩ" },
      { id: 2, name: "PGS, Tiến sĩ" },
      { id: 3, name: "Tiến sĩ, Bác sĩ" },
      { id: 4, name: "Tiến sĩ, Dược sĩ" },
      { id: 5, name: "Thạc sĩ, Bác sĩ" },
      { id: 6, name: "BS.CKII" },
      { id: 7, name: "BS.CKI" },
      { id: 8, name: "BS Nội trú" },
      { id: 9, name: "Bác sĩ" },
      { id: 10, name: "Dược sĩ" },
      { id: 11, name: "Tiến sĩ, Điều dưỡng" },
      { id: 12, name: "Thạc sĩ, Điều dưỡng" },
      { id: 13, name: "Điều dưỡng CKI" },
      { id: 14, name: "Điều dưỡng" },
      { id: 15, name: "Kỹ thuật viên" },
      { id: 16, name: "Hộ lý" },
      { id: 17, name: "Thư ký y khoa" },
      { id: 18, name: "Nhân viên tổng đài" },
      { id: 19, name: "Nhân viên phục vụ" },
      { id: 20, name: "Nhân viên vi tính" },
      { id: 21, name: "Kỹ sư" },
      { id: 22, name: "Chuyên viên Quản trị kinh doanh" },
      { id: 23, name: "Cử nhân công nghệ thông tin" },
      { id: 24, name: "Nhân viên văn thư" },
      { id: 25, name: "Nhân viên lái xe " },
      { id: 26, name: "Khác" },
      { id: 27, name: "Tất  cả" },
    ],
    total_certificate: 0,
    total_member_studing: 0,
    total_chapter: 5,
  },
  {
    key: "1556f49c-28a1-4fd2-87bf-62501462ffd3",
    label: "Quy trình làm sạch, khử khuẩn và tiệt khuẩn dụng cụ",
    id: "1556f49c-28a1-4fd2-87bf-62501462ffd3",
    subject_id: 19,
    creator_id: "621b0ebd-fdb8-48d1-9c89-5ec22f891c0a",
    parent_id: null,
    code: "CR-59-NRTJB",
    title: "Quy trình làm sạch, khử khuẩn và tiệt khuẩn dụng cụ",
    type: 1,
    mediafiles: [
      {
        id: "367764e0-722c-4788-9226-7fd6693cc836",
        name: "Hình chuyên đề 3.jpg",
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
    order: null,
    summary: "",
    status: 1,
    logs: {
      list: [
        [
          {
            id: 1,
            user: {
              id: "621b0ebd-fdb8-48d1-9c89-5ec22f891c0a",
              user_name: "LRTAdminSystem",
            },
            createdAt: "1643046214916",
          },
        ],
        {
          id: 2,
          user: {
            id: "9960954f-eb17-449b-b756-b2d8e6cbc205",
            user_name: "LRTDoanThy",
          },
          field: "chapter_question",
          createdAt: "1643186792019",
          new_value: [
            {
              id: "ef5d0454-5d07-49d9-86fc-068e1e93386e",
              title: "Chương VI: Làm sạch, khử khuẩn và tiệt khuẩn dụng cụ",
            },
          ],
          old_value: [
            {
              id: "ef5d0454-5d07-49d9-86fc-068e1e93386e",
              title: "Chương VI: Làm sạch, khử khuẩn và tiệt khuẩn dụng cụ",
            },
          ],
        },
        {
          id: 3,
          user: {
            id: "9960954f-eb17-449b-b756-b2d8e6cbc205",
            user_name: "LRTDoanThy",
          },
          field: "mediafiles",
          createdAt: "1643190956674",
          new_value: [
            {
              id: "367764e0-722c-4788-9226-7fd6693cc836",
              name: "Hình chuyên đề 3.jpg",
            },
          ],
          old_value: [],
        },
      ],
    },
    meta: { lesson_total: 3 },
    subjectTime: null,
    target: [
      1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
      22, 23, 24, 25, 26, 27,
    ],
    createdAt: "2022-01-24T17:43:35.099Z",
    updatedAt: "2022-01-26T09:55:56.676Z",
    parent_info: null,
    user_info: {
      id: "621b0ebd-fdb8-48d1-9c89-5ec22f891c0a",
      user_id: 1,
      username: "LRTAdminSystem",
    },
    exam_info: {
      id: "aa754be7-ac99-4cef-8079-6a9c915935d4",
      exam_id: 20,
      name: "Quy trình làm sạch, khử khuẩn và tiệt khuẩn dụng cụ",
    },
    degree_info: null,
    target_info: [
      { id: 1, name: "Giáo sư, Tiến sĩ" },
      { id: 2, name: "PGS, Tiến sĩ" },
      { id: 3, name: "Tiến sĩ, Bác sĩ" },
      { id: 4, name: "Tiến sĩ, Dược sĩ" },
      { id: 5, name: "Thạc sĩ, Bác sĩ" },
      { id: 6, name: "BS.CKII" },
      { id: 7, name: "BS.CKI" },
      { id: 8, name: "BS Nội trú" },
      { id: 9, name: "Bác sĩ" },
      { id: 10, name: "Dược sĩ" },
      { id: 11, name: "Tiến sĩ, Điều dưỡng" },
      { id: 12, name: "Thạc sĩ, Điều dưỡng" },
      { id: 13, name: "Điều dưỡng CKI" },
      { id: 14, name: "Điều dưỡng" },
      { id: 15, name: "Kỹ thuật viên" },
      { id: 16, name: "Hộ lý" },
      { id: 17, name: "Thư ký y khoa" },
      { id: 18, name: "Nhân viên tổng đài" },
      { id: 19, name: "Nhân viên phục vụ" },
      { id: 20, name: "Nhân viên vi tính" },
      { id: 21, name: "Kỹ sư" },
      { id: 22, name: "Chuyên viên Quản trị kinh doanh" },
      { id: 23, name: "Cử nhân công nghệ thông tin" },
      { id: 24, name: "Nhân viên văn thư" },
      { id: 25, name: "Nhân viên lái xe " },
      { id: 26, name: "Khác" },
      { id: 27, name: "Tất  cả" },
    ],
    total_certificate: 0,
    total_member_studing: 0,
    total_chapter: 1,
  },
  {
    key: "e61a22ba-b1e5-4672-aba2-54a07638da52",
    label: "Vệ sinh tay, Phòng ngừa cách ly, sử dụng phương tiện phòng hộ",
    id: "e61a22ba-b1e5-4672-aba2-54a07638da52",
    subject_id: 18,
    creator_id: "621b0ebd-fdb8-48d1-9c89-5ec22f891c0a",
    parent_id: null,
    code: "CR-59-BP1NS",
    title: "Vệ sinh tay, Phòng ngừa cách ly, sử dụng phương tiện phòng hộ",
    type: 1,
    mediafiles: [
      {
        id: "f02f2f4a-993c-4445-9fe1-ac8c45c1ca4e",
        name: "Chuyên đề 2 1 (1).png",
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
    order: null,
    summary: "",
    status: 1,
    logs: {
      list: [
        [
          {
            id: 1,
            user: {
              id: "621b0ebd-fdb8-48d1-9c89-5ec22f891c0a",
              user_name: "LRTAdminSystem",
            },
            createdAt: "1643046188166",
          },
        ],
        {
          id: 2,
          user: {
            id: "9960954f-eb17-449b-b756-b2d8e6cbc205",
            user_name: "LRTDoanThy",
          },
          field: "chapter_question",
          createdAt: "1643187117903",
          new_value: [
            {
              id: "de8147e3-ae02-4418-b48a-22a4476d15ad",
              title: "Chương V: Sử dụng dụng cụ phòng hộ",
            },
            {
              id: "b0a875f6-a65d-4c7e-9518-7209736011dd",
              title: "Chương IV: Vệ sinh tay",
            },
            {
              id: "8e5d96ac-4781-4209-91c6-64d090e59972",
              title: "Chương III: Biện pháp cách ly phòng ngừa",
            },
          ],
          old_value: [
            {
              id: "8e5d96ac-4781-4209-91c6-64d090e59972",
              title: "Chương III: Biện pháp cách ly phòng ngừa",
            },
            {
              id: "b0a875f6-a65d-4c7e-9518-7209736011dd",
              title: "Chương IV: Vệ sinh tay",
            },
            {
              id: "de8147e3-ae02-4418-b48a-22a4476d15ad",
              title: "Chương V: Sử dụng dụng cụ phòng hộ",
            },
          ],
        },
        {
          id: 3,
          user: {
            id: "9960954f-eb17-449b-b756-b2d8e6cbc205",
            user_name: "LRTDoanThy",
          },
          field: "mediafiles",
          createdAt: "1643191234668",
          new_value: [
            {
              id: "f02f2f4a-993c-4445-9fe1-ac8c45c1ca4e",
              name: "Chuyên đề 2 1 (1).png",
            },
          ],
          old_value: [],
        },
        {
          id: 4,
          user: {
            id: "9960954f-eb17-449b-b756-b2d8e6cbc205",
            user_name: "LRTDoanThy",
          },
          field: "chapter_question",
          createdAt: "1649150143407",
          new_value: [
            {
              id: "de8147e3-ae02-4418-b48a-22a4476d15ad",
              title: "Chương V: Sử dụng dụng cụ phòng hộ",
            },
            {
              id: "b0a875f6-a65d-4c7e-9518-7209736011dd",
              title: "Chương IV: Vệ sinh tay",
            },
            {
              id: "8e5d96ac-4781-4209-91c6-64d090e59972",
              title: "Chương III: Biện pháp cách ly phòng ngừa",
            },
          ],
          old_value: [
            {
              id: "de8147e3-ae02-4418-b48a-22a4476d15ad",
              title: "Chương V: Sử dụng dụng cụ phòng hộ",
            },
            {
              id: "b0a875f6-a65d-4c7e-9518-7209736011dd",
              title: "Chương IV: Vệ sinh tay",
            },
            {
              id: "8e5d96ac-4781-4209-91c6-64d090e59972",
              title: "Chương III: Biện pháp cách ly phòng ngừa",
            },
          ],
        },
      ],
    },
    meta: { lesson_total: 3 },
    subjectTime: null,
    target: [
      1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
      22, 23, 24, 25, 26, 27,
    ],
    createdAt: "2022-01-24T17:43:08.312Z",
    updatedAt: "2022-04-05T09:15:43.413Z",
    parent_info: null,
    user_info: {
      id: "621b0ebd-fdb8-48d1-9c89-5ec22f891c0a",
      user_id: 1,
      username: "LRTAdminSystem",
    },
    exam_info: {
      id: "1bea4520-cc29-4435-b539-df41e93862ab",
      exam_id: 21,
      name: "Vệ sinh tay, Phòng ngừa cách ly, sử dụng phương tiện phòng hộ",
    },
    degree_info: null,
    target_info: [
      { id: 1, name: "Giáo sư, Tiến sĩ" },
      { id: 2, name: "PGS, Tiến sĩ" },
      { id: 3, name: "Tiến sĩ, Bác sĩ" },
      { id: 4, name: "Tiến sĩ, Dược sĩ" },
      { id: 5, name: "Thạc sĩ, Bác sĩ" },
      { id: 6, name: "BS.CKII" },
      { id: 7, name: "BS.CKI" },
      { id: 8, name: "BS Nội trú" },
      { id: 9, name: "Bác sĩ" },
      { id: 10, name: "Dược sĩ" },
      { id: 11, name: "Tiến sĩ, Điều dưỡng" },
      { id: 12, name: "Thạc sĩ, Điều dưỡng" },
      { id: 13, name: "Điều dưỡng CKI" },
      { id: 14, name: "Điều dưỡng" },
      { id: 15, name: "Kỹ thuật viên" },
      { id: 16, name: "Hộ lý" },
      { id: 17, name: "Thư ký y khoa" },
      { id: 18, name: "Nhân viên tổng đài" },
      { id: 19, name: "Nhân viên phục vụ" },
      { id: 20, name: "Nhân viên vi tính" },
      { id: 21, name: "Kỹ sư" },
      { id: 22, name: "Chuyên viên Quản trị kinh doanh" },
      { id: 23, name: "Cử nhân công nghệ thông tin" },
      { id: 24, name: "Nhân viên văn thư" },
      { id: 25, name: "Nhân viên lái xe " },
      { id: 26, name: "Khác" },
      { id: 27, name: "Tất  cả" },
    ],
    total_certificate: 0,
    total_member_studing: 0,
    total_chapter: 3,
  },
  {
    key: "554ceeef-fe0d-47e8-a430-de744c2a0e9a",
    label:
      "Tổng quan về Kiểm soát nhiễm khuẩn, Giám sát kiểm soát nhiễm khuẩn, Phòng ngừa phơi nhiễm",
    id: "554ceeef-fe0d-47e8-a430-de744c2a0e9a",
    subject_id: 1,
    creator_id: "9960954f-eb17-449b-b756-b2d8e6cbc205",
    parent_id: null,
    code: "CR-59-DKEFG",
    title:
      "Tổng quan về Kiểm soát nhiễm khuẩn, Giám sát kiểm soát nhiễm khuẩn, Phòng ngừa phơi nhiễm",
    type: 1,
    mediafiles: [
      {
        id: "4f32f066-06fc-476d-9ea3-45a2144fcd99",
        name: "Hình chuyên đề 1.jpg",
      },
    ],
    author_info: {
      name: "PHÙNG MẠNH THẮNG",
      image: null,
      title: "Trưởng khoa",
      hospital_name: "",
      department_name: "",
    },
    published_date: "2021-12-07",
    order: null,
    summary: "",
    status: -2,
    logs: {
      list: [
        [
          {
            id: 1,
            user: {
              id: "9960954f-eb17-449b-b756-b2d8e6cbc205",
              user_name: "LRTDoanThy",
            },
            createdAt: "1638775328933",
          },
        ],
        {
          id: 2,
          user: {
            id: "621b0ebd-fdb8-48d1-9c89-5ec22f891c0a",
            user_name: "LRTAdminSystem",
          },
          field: "chapter_question",
          createdAt: "1638804760109",
          new_value: [
            {
              id: "dfb8c175-393e-4577-8f9d-87255d4f643c",
              title: "Chương XVI: Quản lý chất thải rắn",
            },
            {
              id: "4aec3dc2-e926-45c9-84f5-3a8b7802391f",
              title: "Chương XV: Quy trình vệ sinh bệnh viện",
            },
            {
              id: "dd3025c0-55aa-47ad-8237-bc9857d3bdc8",
              title: "Chương XIV: Quản lý đồ vải trong bệnh viện",
            },
            {
              id: "89aa3e03-e765-43f2-9c6f-743cb0e8e87c",
              title:
                "Chương XIII: Phòng ngừa phơi nhiễm với HIV, viêm gan B, viên gan C do nghề nghiệp",
            },
            {
              id: "98811483-1b34-4c3e-a4e2-fa43088bfdf1",
              title:
                "Chương XII: Quy định kiến trúc, tổ chức và tiêu chuẩn môi trường tại khoa lâm sàng",
            },
            {
              id: "86b6b5a0-de7b-4cab-8db6-566cb8b2db5d",
              title:
                "Chương XI: Biện pháp thực hành phòng ngừa nhiễm khuẩn da và mô mềm",
            },
            {
              id: "467093d9-3f66-47fa-af3b-dd358151a858",
              title:
                "Chương X: Biện pháp thực hành phòng ngừa nhiễm khuẩn tiết niệu bệnh viện",
            },
            {
              id: "741236e1-02bc-4932-8f50-40383b2ec804",
              title:
                "Chương IX: Biện pháp thực hành phòng ngừa nhiễm khuẩn huyết bệnh viện",
            },
            {
              id: "e80807c6-ef1f-4eda-a374-aec6057de7a9",
              title:
                "Chương VIII: Biện pháp thực hành phòng ngừa nhiễm khuẩn vết mổ",
            },
            {
              id: "2e472f66-ff81-4867-a13e-3454304a2e41",
              title:
                "Chương VII: Biện pháp thực hành phòng ngừa viêm phổi bệnh viện",
            },
            {
              id: "ef5d0454-5d07-49d9-86fc-068e1e93386e",
              title: "Chương VI: Làm sạch, khử khuẩn và tiệt khuẩn dụng cụ",
            },
            {
              id: "de8147e3-ae02-4418-b48a-22a4476d15ad",
              title: "Chương V: Sử dụng dụng cụ phòng hộ",
            },
            {
              id: "b0a875f6-a65d-4c7e-9518-7209736011dd",
              title: "Chương IV: Vệ sinh tay",
            },
            {
              id: "8e5d96ac-4781-4209-91c6-64d090e59972",
              title: "Chương III: Biện pháp cách ly phòng ngừa",
            },
            {
              id: "ffcd81de-f462-464f-821b-63912219fd8f",
              title: "Chương II: Giám sát nhiễm khuẩn bệnh viện",
            },
            {
              id: "381c1d02-3c82-4b27-a9d0-b442d73828e8",
              title: "Chương I: Tổ chức kiểm soát nhiễm khuẩn bệnh viện",
            },
          ],
          old_value: [],
        },
        {
          id: 3,
          user: {
            id: "621b0ebd-fdb8-48d1-9c89-5ec22f891c0a",
            user_name: "LRTAdminSystem",
          },
          field: "title",
          createdAt: "1638807527768",
          new_value: "Quy trình thực hành kiểm soát nhiễm khuẩn",
          old_value: "Quy trình thực hành KSNK 2020",
        },
        {
          id: 4,
          user: {
            id: "c8e53fc4-b3f2-4baa-9132-c68f1ba0382f",
            user_name: "CRThangPhung",
          },
          field: "author_info",
          createdAt: "1638853590918",
          new_value: "PHÙNG MẠNH THẮNG",
          old_value: "",
        },
        {
          id: 5,
          user: {
            id: "c8e53fc4-b3f2-4baa-9132-c68f1ba0382f",
            user_name: "CRThangPhung",
          },
          field: "author_info",
          createdAt: "1638853590918",
          new_value: "Trưởng khoa",
          old_value: "",
        },
        {
          id: 6,
          user: {
            id: "c8e53fc4-b3f2-4baa-9132-c68f1ba0382f",
            user_name: "CRThangPhung",
          },
          field: "status",
          createdAt: "1638854580383",
          new_value: "2021-12-07",
          old_value: null,
        },
        {
          id: 7,
          user: {
            id: "c8e53fc4-b3f2-4baa-9132-c68f1ba0382f",
            user_name: "CRThangPhung",
          },
          field: "status",
          createdAt: "1638854580383",
          new_value: 2,
          old_value: 1,
        },
        {
          id: 8,
          user: {
            id: "c8e53fc4-b3f2-4baa-9132-c68f1ba0382f",
            user_name: "CRThangPhung",
          },
          field: "status",
          createdAt: "1638854619513",
          new_value: -2,
          old_value: 2,
        },
        {
          id: 9,
          user: {
            id: "c8e53fc4-b3f2-4baa-9132-c68f1ba0382f",
            user_name: "CRThangPhung",
          },
          field: "target",
          createdAt: "1638854657104",
          new_value: [
            1, 2, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
            21, 22, 23, 24, 25, 26, 27,
          ],
          old_value: [
            1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19,
            20, 21, 22, 23, 24, 25, 26, 27,
          ],
        },
        {
          id: 10,
          user: {
            id: "c8e53fc4-b3f2-4baa-9132-c68f1ba0382f",
            user_name: "CRThangPhung",
          },
          field: "status",
          createdAt: "1638854660519",
          new_value: 2,
          old_value: -2,
        },
        {
          id: 11,
          user: {
            id: "c8e53fc4-b3f2-4baa-9132-c68f1ba0382f",
            user_name: "CRThangPhung",
          },
          field: "status",
          createdAt: "1639019473435",
          new_value: -2,
          old_value: 2,
        },
        {
          id: 12,
          user: {
            id: "c8e53fc4-b3f2-4baa-9132-c68f1ba0382f",
            user_name: "CRThangPhung",
          },
          field: "mediafiles",
          createdAt: "1639019488249",
          new_value: [
            {
              id: "70310a33-d98e-4339-a15f-1b33cd261638",
              name: "BÌA SÁCH QUY TRÌNH THỰC HÀNH KSNK 2020 (1).jpg",
            },
          ],
          old_value: [],
        },
        {
          id: 13,
          user: {
            id: "c8e53fc4-b3f2-4baa-9132-c68f1ba0382f",
            user_name: "CRThangPhung",
          },
          field: "status",
          createdAt: "1639019501724",
          new_value: 2,
          old_value: -2,
        },
        {
          id: 14,
          user: {
            id: "621b0ebd-fdb8-48d1-9c89-5ec22f891c0a",
            user_name: "LRTAdminSystem",
          },
          field: "status",
          createdAt: "1643046391712",
          new_value: -2,
          old_value: 2,
        },
        {
          id: 15,
          user: {
            id: "9960954f-eb17-449b-b756-b2d8e6cbc205",
            user_name: "LRTDoanThy",
          },
          field: "mediafiles",
          createdAt: "1643191245145",
          new_value: [
            {
              id: "4f32f066-06fc-476d-9ea3-45a2144fcd99",
              name: "Hình chuyên đề 1.jpg",
            },
          ],
          old_value: [
            {
              id: "70310a33-d98e-4339-a15f-1b33cd261638",
              name: "BÌA SÁCH QUY TRÌNH THỰC HÀNH KSNK 2020 (1).jpg",
            },
          ],
        },
      ],
    },
    meta: { lesson_total: 3 },
    subjectTime: null,
    target: [
      1, 2, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
      22, 23, 24, 25, 26, 27,
    ],
    createdAt: "2021-12-06T07:22:08.989Z",
    updatedAt: "2022-01-26T10:00:45.147Z",
    parent_info: null,
    user_info: {
      id: "9960954f-eb17-449b-b756-b2d8e6cbc205",
      user_id: 4,
      username: "LRTDoanThy",
    },
    exam_info: {
      id: "5a4d2557-45b0-4bfe-9b82-2888fce2c87f",
      exam_id: 17,
      name: "Tổng quan về Kiểm soát nhiễm khuẩn, Giám sát kiểm soát nhiễm khuẩn, Phòng ngừa phơi nhiễm",
    },
    degree_info: null,
    target_info: [
      { id: 1, name: "Giáo sư, Tiến sĩ" },
      { id: 2, name: "PGS, Tiến sĩ" },
      { id: 4, name: "Tiến sĩ, Dược sĩ" },
      { id: 5, name: "Thạc sĩ, Bác sĩ" },
      { id: 6, name: "BS.CKII" },
      { id: 7, name: "BS.CKI" },
      { id: 8, name: "BS Nội trú" },
      { id: 9, name: "Bác sĩ" },
      { id: 10, name: "Dược sĩ" },
      { id: 11, name: "Tiến sĩ, Điều dưỡng" },
      { id: 12, name: "Thạc sĩ, Điều dưỡng" },
      { id: 13, name: "Điều dưỡng CKI" },
      { id: 14, name: "Điều dưỡng" },
      { id: 15, name: "Kỹ thuật viên" },
      { id: 16, name: "Hộ lý" },
      { id: 17, name: "Thư ký y khoa" },
      { id: 18, name: "Nhân viên tổng đài" },
      { id: 19, name: "Nhân viên phục vụ" },
      { id: 20, name: "Nhân viên vi tính" },
      { id: 21, name: "Kỹ sư" },
      { id: 22, name: "Chuyên viên Quản trị kinh doanh" },
      { id: 23, name: "Cử nhân công nghệ thông tin" },
      { id: 24, name: "Nhân viên văn thư" },
      { id: 25, name: "Nhân viên lái xe " },
      { id: 26, name: "Khác" },
      { id: 27, name: "Tất  cả" },
    ],
    total_certificate: 0,
    total_member_studing: 81,
    total_chapter: 3,
  },
];

function StudiesMainAdmin({ filter }) {
  return (
    <>
      <Card
        className="main-card"
        extra={
          <>
            <Button style={{ marginRight: 8 }} icon={<DownloadOutlined />}>
              Xuất dữ liệu
            </Button>
            <Link to="add">
              <Button
                type="primary"
                icon={<PlusOutlined />}
                className="btn-primary"
              >
                Thêm bài học
              </Button>
            </Link>
          </>
        }
      >
        <Table
          pagination={{
            position: ["topRight", "bottomRight"],
            showTotal: (total, range) =>
              `${total} chuyên đề | Từ ${range[0]} đến ${range[1]}`,
            showLessItems: true,
            showSizeChanger: false,
          }}
          columns={columns}
          scroll={{ x: 1300 }}
          dataSource={data}
          rowKey="subject_id"
        />
      </Card>
      <div style={{ margin: "25px 0" }}>
        <Footer />
      </div>
    </>
  );
}

export default StudiesMainAdmin;
