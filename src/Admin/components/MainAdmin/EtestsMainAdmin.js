import React from "react";
import PropTypes from "prop-types";
import { Footer } from "antd/lib/layout/layout";
import { Button, Card, Table, Tag } from "antd";
import { DownloadOutlined, PlusOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import moment from "moment";

EtestsMainAdmin.propTypes = {
  filter: PropTypes.object,
};

EtestsMainAdmin.defaultProps = {
  filter: {},
};

const columns = [
  {
    key: "id",
    title: "ID",
    width: 100,
    render: (test) => <Link to={`${test?.id}`}>{test?.exam_id}</Link>,
  },
  {
    dataIndex: "name",
    key: "name",
    title: "Tên bài kiểm tra",
  },
  {
    dataIndex: "subject_info",
    key: "subject_info",
    title: "Tên chuyên đề / chương",
    render: (subject) => (
      <Link to={`/admin/studies/${subject?.subject_id}`}>{subject?.title}</Link>
    ),
  },
  {
    align: "center",
    dataIndex: "total_question",
    key: "total_question",
    title: "Số câu hỏi",
  },
  {
    align: "center",
    dataIndex: "total_member_apply",
    key: "total_member_apply",
    title: "Số người tham gia",
  },
  {
    align: "center",
    dataIndex: "type",
    key: "type",
    title: "Loại bài kiểm tra",
    render: (type) => {
      if (type === 1) {
        return <Tag color="#2B75B5">Bài kiểm tra chuyên đề</Tag>;
      }
      if (type === 2) {
        return <Tag color="#3A9CA6">Bài kiểm tra chương</Tag>;
      }
    },
  },
  {
    align: "center",
    dataIndex: "createdAt",
    key: "createdAt",
    title: "Ngày tạo",
    render: (date) =>
      date !== null ? moment(date).format("DD/MM/YYYY") : "---",
  },
  {
    align: "center",
    dataIndex: "user_info",
    key: "user_info",
    title: "Người tạo",
    render: (user) => user?.username,
  },
  {
    title: "Chức năng",
    dataIndex: "id",
    key: "action",
    fixed: "right",
    align: "center",
    width: 110,
    render: (id) => <Link to={`${id}`}>Xem</Link>,
  },
];

const data = [
  {
    id: "1bea4520-cc29-4435-b539-df41e93862ab",
    exam_id: 21,
    subject_id: "e61a22ba-b1e5-4672-aba2-54a07638da52",
    creator_id: "9960954f-eb17-449b-b756-b2d8e6cbc205",
    name: "Vệ sinh tay, Phòng ngừa cách ly, sử dụng phương tiện phòng hộ",
    type: 1,
    status: 1,
    no_questions: 40,
    meta: {},
    logs: {
      list: [
        [
          {
            id: 1,
            user: {
              id: "9960954f-eb17-449b-b756-b2d8e6cbc205",
              user_name: "LRTDoanThy",
            },
            createdAt: "1643187114178",
          },
        ],
      ],
    },
    createdAt: "2022-01-26T08:51:54.183Z",
    examTime: 40,
    updatedAt: "2022-01-26T08:51:54.183Z",
    subject_info: {
      key: "e61a22ba-b1e5-4672-aba2-54a07638da52",
      label: "Vệ sinh tay, Phòng ngừa cách ly, sử dụng phương tiện phòng hộ",
      id: "e61a22ba-b1e5-4672-aba2-54a07638da52",
      subject_id: 18,
      code: "CR-59-BP1NS",
      title: "Vệ sinh tay, Phòng ngừa cách ly, sử dụng phương tiện phòng hộ",
      parent_info: null,
    },
    user_info: {
      id: "9960954f-eb17-449b-b756-b2d8e6cbc205",
      user_id: 4,
      username: "LRTDoanThy",
    },
    total_question: 0,
    total_member_apply: 0,
  },
  {
    id: "aa754be7-ac99-4cef-8079-6a9c915935d4",
    exam_id: 20,
    subject_id: "1556f49c-28a1-4fd2-87bf-62501462ffd3",
    creator_id: "9960954f-eb17-449b-b756-b2d8e6cbc205",
    name: "Quy trình làm sạch, khử khuẩn và tiệt khuẩn dụng cụ",
    type: 1,
    status: 1,
    no_questions: 25,
    meta: {},
    logs: {
      list: [
        [
          {
            id: 1,
            user: {
              id: "9960954f-eb17-449b-b756-b2d8e6cbc205",
              user_name: "LRTDoanThy",
            },
            createdAt: "1643186787878",
          },
        ],
        {
          id: 2,
          user: {
            id: "9960954f-eb17-449b-b756-b2d8e6cbc205",
            user_name: "LRTDoanThy",
          },
          field: "no_questions",
          createdAt: "1643187143004",
          new_value: 25,
          old_value: 40,
        },
        {
          id: 3,
          user: {
            id: "9960954f-eb17-449b-b756-b2d8e6cbc205",
            user_name: "LRTDoanThy",
          },
          field: "examTime",
          createdAt: "1643187143005",
          new_value: 25,
          old_value: 40,
        },
      ],
    },
    createdAt: "2022-01-26T08:46:27.884Z",
    examTime: 25,
    updatedAt: "2022-01-26T08:52:23.005Z",
    subject_info: {
      key: "1556f49c-28a1-4fd2-87bf-62501462ffd3",
      label: "Quy trình làm sạch, khử khuẩn và tiệt khuẩn dụng cụ",
      id: "1556f49c-28a1-4fd2-87bf-62501462ffd3",
      subject_id: 19,
      code: "CR-59-NRTJB",
      title: "Quy trình làm sạch, khử khuẩn và tiệt khuẩn dụng cụ",
      parent_info: null,
    },
    user_info: {
      id: "9960954f-eb17-449b-b756-b2d8e6cbc205",
      user_id: 4,
      username: "LRTDoanThy",
    },
    total_question: 0,
    total_member_apply: 0,
  },
  {
    id: "4f26130e-922d-4284-9ed3-6a720f89e31b",
    exam_id: 19,
    subject_id: "da462367-9552-4b48-82a8-6ea45cbda692",
    creator_id: "9960954f-eb17-449b-b756-b2d8e6cbc205",
    name: "Thực hành phòng ngừa các loại nhiễm khuẩn bệnh viện",
    type: 1,
    status: 1,
    no_questions: 40,
    meta: {},
    logs: {
      list: [
        [
          {
            id: 1,
            user: {
              id: "9960954f-eb17-449b-b756-b2d8e6cbc205",
              user_name: "LRTDoanThy",
            },
            createdAt: "1643186696977",
          },
        ],
      ],
    },
    createdAt: "2022-01-26T08:44:56.985Z",
    examTime: 40,
    updatedAt: "2022-01-26T08:44:56.985Z",
    subject_info: {
      key: "da462367-9552-4b48-82a8-6ea45cbda692",
      label: "Thực hành phòng ngừa các loại nhiễm khuẩn bệnh viện",
      id: "da462367-9552-4b48-82a8-6ea45cbda692",
      subject_id: 20,
      code: "CR-59-GGTDQ",
      title: "Thực hành phòng ngừa các loại nhiễm khuẩn bệnh viện",
      parent_info: null,
    },
    user_info: {
      id: "9960954f-eb17-449b-b756-b2d8e6cbc205",
      user_id: 4,
      username: "LRTDoanThy",
    },
    total_question: 0,
    total_member_apply: 0,
  },
  {
    id: "50d48dce-7649-430f-88e8-db928b8e13ea",
    exam_id: 18,
    subject_id: "25911ac0-6d2f-448f-8aa9-d32b946cbfd7",
    creator_id: "9960954f-eb17-449b-b756-b2d8e6cbc205",
    name: "Quy định về kiến trúc, tổ chức, tiêu chuẩn môi trường, vệ sinh bệnh viện, quản lý đồ vải, chất thải trong bệnh viện",
    type: 1,
    status: 1,
    no_questions: 40,
    meta: {},
    logs: {
      list: [
        [
          {
            id: 1,
            user: {
              id: "9960954f-eb17-449b-b756-b2d8e6cbc205",
              user_name: "LRTDoanThy",
            },
            createdAt: "1643186660882",
          },
        ],
      ],
    },
    createdAt: "2022-01-26T08:44:20.889Z",
    examTime: 40,
    updatedAt: "2022-01-26T08:44:20.889Z",
    subject_info: {
      key: "25911ac0-6d2f-448f-8aa9-d32b946cbfd7",
      label:
        "Quy định về kiến trúc, tổ chức, tiêu chuẩn môi trường, vệ sinh bệnh viện, quản lý đồ vải, chất thải trong bệnh viện",
      id: "25911ac0-6d2f-448f-8aa9-d32b946cbfd7",
      subject_id: 21,
      code: "CR-59-VSF9P",
      title:
        "Quy định về kiến trúc, tổ chức, tiêu chuẩn môi trường, vệ sinh bệnh viện, quản lý đồ vải, chất thải trong bệnh viện",
      parent_info: null,
    },
    user_info: {
      id: "9960954f-eb17-449b-b756-b2d8e6cbc205",
      user_id: 4,
      username: "LRTDoanThy",
    },
    total_question: 0,
    total_member_apply: 0,
  },
  {
    id: "5a4d2557-45b0-4bfe-9b82-2888fce2c87f",
    exam_id: 17,
    subject_id: "554ceeef-fe0d-47e8-a430-de744c2a0e9a",
    creator_id: "621b0ebd-fdb8-48d1-9c89-5ec22f891c0a",
    name: "Tổng quan về Kiểm soát nhiễm khuẩn, Giám sát kiểm soát nhiễm khuẩn, Phòng ngừa phơi nhiễm",
    type: 1,
    status: 1,
    no_questions: 40,
    meta: {},
    logs: {
      list: [
        [
          {
            id: 1,
            user: {
              id: "621b0ebd-fdb8-48d1-9c89-5ec22f891c0a",
              user_name: "LRTAdminSystem",
            },
            createdAt: "1638804749707",
          },
        ],
        {
          id: 2,
          user: {
            id: "9960954f-eb17-449b-b756-b2d8e6cbc205",
            user_name: "LRTDoanThy",
          },
          field: "name",
          createdAt: "1643187085051",
          new_value:
            "Tổng quan về Kiểm soát nhiễm khuẩn, Giám sát kiểm soát nhiễm khuẩn, Phòng ngừa phơi nhiễm",
          old_value: "Quy trình thực hành KSNK 2020",
        },
      ],
    },
    createdAt: "2021-12-06T15:32:29.713Z",
    examTime: 40,
    updatedAt: "2022-01-26T08:51:25.051Z",
    subject_info: {
      key: "554ceeef-fe0d-47e8-a430-de744c2a0e9a",
      label:
        "Tổng quan về Kiểm soát nhiễm khuẩn, Giám sát kiểm soát nhiễm khuẩn, Phòng ngừa phơi nhiễm",
      id: "554ceeef-fe0d-47e8-a430-de744c2a0e9a",
      subject_id: 1,
      code: "CR-59-DKEFG",
      title:
        "Tổng quan về Kiểm soát nhiễm khuẩn, Giám sát kiểm soát nhiễm khuẩn, Phòng ngừa phơi nhiễm",
      parent_info: null,
    },
    user_info: {
      id: "621b0ebd-fdb8-48d1-9c89-5ec22f891c0a",
      user_id: 1,
      username: "LRTAdminSystem",
    },
    total_question: 0,
    total_member_apply: 121,
  },
  {
    id: "77b079ae-2bee-4dd3-847a-00854a844f1a",
    exam_id: 16,
    subject_id: "89aa3e03-e765-43f2-9c6f-743cb0e8e87c",
    creator_id: "9960954f-eb17-449b-b756-b2d8e6cbc205",
    name: "Phòng ngừa phơi nhiễm với HIV, viêm gan B, viêm gan C do nghề nghiệ",
    type: 2,
    status: 1,
    no_questions: 10,
    meta: {},
    logs: {
      list: [
        [
          {
            id: 1,
            user: {
              id: "9960954f-eb17-449b-b756-b2d8e6cbc205",
              user_name: "LRTDoanThy",
            },
            createdAt: "1638802733767",
          },
        ],
      ],
    },
    createdAt: "2021-12-06T14:58:53.772Z",
    examTime: 15,
    updatedAt: "2021-12-06T14:58:53.772Z",
    subject_info: {
      key: "89aa3e03-e765-43f2-9c6f-743cb0e8e87c",
      label:
        "Chương XIII: Phòng ngừa phơi nhiễm với HIV, viêm gan B, viên gan C do nghề nghiệp",
      id: "89aa3e03-e765-43f2-9c6f-743cb0e8e87c",
      subject_id: 14,
      code: "CR-59-DKEFG-3",
      title:
        "Chương XIII: Phòng ngừa phơi nhiễm với HIV, viêm gan B, viên gan C do nghề nghiệp",
      parent_info: {
        key: "554ceeef-fe0d-47e8-a430-de744c2a0e9a",
        label:
          "Tổng quan về Kiểm soát nhiễm khuẩn, Giám sát kiểm soát nhiễm khuẩn, Phòng ngừa phơi nhiễm",
        id: "554ceeef-fe0d-47e8-a430-de744c2a0e9a",
        subject_id: 1,
        code: "CR-59-DKEFG",
        title:
          "Tổng quan về Kiểm soát nhiễm khuẩn, Giám sát kiểm soát nhiễm khuẩn, Phòng ngừa phơi nhiễm",
        mediafiles: [
          {
            id: "4f32f066-06fc-476d-9ea3-45a2144fcd99",
            name: "Hình chuyên đề 1.jpg",
          },
        ],
      },
    },
    user_info: {
      id: "9960954f-eb17-449b-b756-b2d8e6cbc205",
      user_id: 4,
      username: "LRTDoanThy",
    },
    total_question: 31,
    total_member_apply: 123,
  },
  {
    id: "07e06b4c-70e3-474d-9719-f6f93b6f9215",
    exam_id: 15,
    subject_id: "98811483-1b34-4c3e-a4e2-fa43088bfdf1",
    creator_id: "9960954f-eb17-449b-b756-b2d8e6cbc205",
    name: "Quy định kiến trúc thượng tầng, tổ chức và tiêu chuẩn môi trường tại khoa lâm sàn",
    type: 2,
    status: 1,
    no_questions: 10,
    meta: {},
    logs: {
      list: [
        [
          {
            id: 1,
            user: {
              id: "9960954f-eb17-449b-b756-b2d8e6cbc205",
              user_name: "LRTDoanThy",
            },
            createdAt: "1638801875982",
          },
        ],
      ],
    },
    createdAt: "2021-12-06T14:44:35.987Z",
    examTime: 15,
    updatedAt: "2021-12-06T14:44:35.987Z",
    subject_info: {
      key: "98811483-1b34-4c3e-a4e2-fa43088bfdf1",
      label:
        "Chương XII: Quy định kiến trúc, tổ chức và tiêu chuẩn môi trường tại khoa lâm sàng",
      id: "98811483-1b34-4c3e-a4e2-fa43088bfdf1",
      subject_id: 13,
      code: "CR-59-VSF9P-1",
      title:
        "Chương XII: Quy định kiến trúc, tổ chức và tiêu chuẩn môi trường tại khoa lâm sàng",
      parent_info: {
        key: "25911ac0-6d2f-448f-8aa9-d32b946cbfd7",
        label:
          "Quy định về kiến trúc, tổ chức, tiêu chuẩn môi trường, vệ sinh bệnh viện, quản lý đồ vải, chất thải trong bệnh viện",
        id: "25911ac0-6d2f-448f-8aa9-d32b946cbfd7",
        subject_id: 21,
        code: "CR-59-VSF9P",
        title:
          "Quy định về kiến trúc, tổ chức, tiêu chuẩn môi trường, vệ sinh bệnh viện, quản lý đồ vải, chất thải trong bệnh viện",
        mediafiles: [
          {
            id: "c48a1e02-46f1-4032-b45b-f1da2aaf68a3",
            name: "Chuyên đề 5.jpg",
          },
        ],
      },
    },
    user_info: {
      id: "9960954f-eb17-449b-b756-b2d8e6cbc205",
      user_id: 4,
      username: "LRTDoanThy",
    },
    total_question: 20,
    total_member_apply: 123,
  },
  {
    id: "7eee04f1-bc76-409e-b9bb-59c794cf2700",
    exam_id: 14,
    subject_id: "741236e1-02bc-4932-8f50-40383b2ec804",
    creator_id: "9960954f-eb17-449b-b756-b2d8e6cbc205",
    name: "Biện pháp thực hành phòng ngừa nhiễm khuẩn huyết bệnh viện",
    type: 2,
    status: 1,
    no_questions: 10,
    meta: {},
    logs: {
      list: [
        [
          {
            id: 1,
            user: {
              id: "9960954f-eb17-449b-b756-b2d8e6cbc205",
              user_name: "LRTDoanThy",
            },
            createdAt: "1638800374999",
          },
        ],
      ],
    },
    createdAt: "2021-12-06T14:19:35.004Z",
    examTime: 15,
    updatedAt: "2021-12-06T14:19:35.004Z",
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
        mediafiles: [
          {
            id: "8053ec98-fb23-4360-ab76-d92c61b3f1a4",
            name: "Chuyên đề 4.jpg",
          },
        ],
      },
    },
    user_info: {
      id: "9960954f-eb17-449b-b756-b2d8e6cbc205",
      user_id: 4,
      username: "LRTDoanThy",
    },
    total_question: 31,
    total_member_apply: 128,
  },
  {
    id: "89b8be67-029c-4c95-b019-ac45e4082454",
    exam_id: 13,
    subject_id: "467093d9-3f66-47fa-af3b-dd358151a858",
    creator_id: "9960954f-eb17-449b-b756-b2d8e6cbc205",
    name: "Biện pháp thực hành phòng ngừa nhiễm khuẩn tiết niệu bệnh viện",
    type: 2,
    status: 1,
    no_questions: 10,
    meta: {},
    logs: {
      list: [
        [
          {
            id: 1,
            user: {
              id: "9960954f-eb17-449b-b756-b2d8e6cbc205",
              user_name: "LRTDoanThy",
            },
            createdAt: "1638798833639",
          },
        ],
      ],
    },
    createdAt: "2021-12-06T13:53:53.644Z",
    examTime: 15,
    updatedAt: "2021-12-06T13:53:53.644Z",
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
        mediafiles: [
          {
            id: "8053ec98-fb23-4360-ab76-d92c61b3f1a4",
            name: "Chuyên đề 4.jpg",
          },
        ],
      },
    },
    user_info: {
      id: "9960954f-eb17-449b-b756-b2d8e6cbc205",
      user_id: 4,
      username: "LRTDoanThy",
    },
    total_question: 26,
    total_member_apply: 126,
  },
  {
    id: "b3868d2e-4870-4829-83de-b861726e778b",
    exam_id: 12,
    subject_id: "86b6b5a0-de7b-4cab-8db6-566cb8b2db5d",
    creator_id: "9960954f-eb17-449b-b756-b2d8e6cbc205",
    name: "Biện pháp phòng ngừa nhiễm khuẩn da và mô mềm",
    type: 2,
    status: 1,
    no_questions: 10,
    meta: {},
    logs: {
      list: [
        [
          {
            id: 1,
            user: {
              id: "9960954f-eb17-449b-b756-b2d8e6cbc205",
              user_name: "LRTDoanThy",
            },
            createdAt: "1638796634675",
          },
        ],
      ],
    },
    createdAt: "2021-12-06T13:17:14.679Z",
    examTime: 15,
    updatedAt: "2021-12-06T13:17:14.679Z",
    subject_info: {
      key: "86b6b5a0-de7b-4cab-8db6-566cb8b2db5d",
      label:
        "Chương XI: Biện pháp thực hành phòng ngừa nhiễm khuẩn da và mô mềm",
      id: "86b6b5a0-de7b-4cab-8db6-566cb8b2db5d",
      subject_id: 12,
      code: "CR-59-GGTDQ-5",
      title:
        "Chương XI: Biện pháp thực hành phòng ngừa nhiễm khuẩn da và mô mềm",
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
    user_info: {
      id: "9960954f-eb17-449b-b756-b2d8e6cbc205",
      user_id: 4,
      username: "LRTDoanThy",
    },
    total_question: 10,
    total_member_apply: 123,
  },
];

function EtestsMainAdmin({ filter }) {
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
                Thêm bài kiểm tra
              </Button>
            </Link>
          </>
        }
      >
        <Table
          pagination={{
            position: ["topRight", "bottomRight"],
            showTotal: (total, range) =>
              `${total} bài kiểm tra | Từ ${range[0]} đến ${range[1]}`,
            showLessItems: true,
            showSizeChanger: false,
          }}
          columns={columns}
          scroll={{ x: 1300 }}
          dataSource={data}
          // rowKey="subject_id"
        />
      </Card>
      <div style={{ margin: "25px 0" }}>
        <Footer />
      </div>
    </>
  );
}

export default EtestsMainAdmin;
