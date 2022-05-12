import React from "react";
import PropTypes from "prop-types";
import Footer from "../Footer";
import { Card, Table } from "antd";
import { Link } from "react-router-dom";

CertificatesMainAdmin.propTypes = {
  filter: PropTypes.object,
};

CertificatesMainAdmin.defaultProps = {
  filter: {},
};

const columns = [
  {
    dataIndex: "subject_id",
    key: "subject_id",
    title: "ID chuyên đề",
    render: (subId) => <Link to={`/admin/studies/${subId}`}>{subId}</Link>,
  },
  { dataIndex: "title", key: "title", title: "Tên chuyên đề " },
  {
    align: "center",
    dataIndex: "total_certificate",
    key: "number",
    title: "Số lượng bằng",
  },
  {
    align: "center",
    fixed: "right",
    key: "action",
    title: "Chức năng",
    width: 110,
    dataIndex: "subject_id",
    render: (subId) => <Link to={`${subId}`}>Xem</Link>,
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
];

const expandedRowRender = () => {
  const columns = [
    { dataIndex: "subject_id", key: "chapter_id", title: "ID chương" },
    { dataIndex: "title", key: "title_chapter", title: "Tên chương " },
    {
      align: "center",
      dataIndex: "total_certificate",
      key: "number_chap",
      title: "Số lượng bằng",
    },
    {
      align: "center",
      key: "action",
      title: "Chức năng",
      width: 110,
      dataIndex: "subject_id",
      render: (subId) => <Link to={`${subId}`}>Xem</Link>,
    },
  ];

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
  ];
  return <Table columns={columns} dataSource={data} pagination={false} />;
};

function CertificatesMainAdmin({ filter }) {
  return (
    <>
      <Card className="main-card">
        <Table
          pagination={{
            position: ["topRight", "bottomRight"],
            showTotal: (total, range) =>
              `${total} chuyên đề | Từ ${range[0]} đến ${range[1]}`,
            showLessItems: true,
            showSizeChanger: false,
          }}
          expandable={{ expandedRowRender }}
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

export default CertificatesMainAdmin;
