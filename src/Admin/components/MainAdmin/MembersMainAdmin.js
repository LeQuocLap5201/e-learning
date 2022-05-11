import React from "react";
import PropTypes from "prop-types";
import { Button, Card, Table, Tag } from "antd";
import { Link } from "react-router-dom";
import { DownloadOutlined, PlusOutlined } from "@ant-design/icons";
import "./index.css";
import moment from "moment";
import Footer from "../Footer";

MembersMainAdmin.propTypes = {
  filter: PropTypes.object,
};

MembersMainAdmin.defaultProps = {
  filter: {},
};

const columns = [
  { dataIndex: "member_id", key: "id", title: "ID", width: 100, fixed: "left" },
  {
    key: "full_name",
    title: "Tên thành viên",
    fixed: "left",
    // width: 240,
    render: (data) => <Link to={`${data?.member_id}`}>{data?.full_name}</Link>,
  },
  {
    dataIndex: "gender",
    key: "gender",
    title: "Giới tính",
    // width: 240,
    render: (gender) => {
      if (gender === 1) {
        return "Nam";
      }
      if (gender === 2) {
        return "Nữ";
      }
    },
  },
  { dataIndex: "phone", key: "phone", title: "Số điện thoại", width: 242 },
  {
    dataIndex: "department_info",
    key: "department_info",
    title: "Khoa-Phòng-Đơn vị",
    // width: 240,
    render: (department_info) => department_info?.name,
  },
  {
    dataIndex: "target_info",
    key: "target_info",
    title: "Đối tượng",
    width: 300,
    render: (target_info) =>
      target_info.map((info) => (
        <Tag key={`target_info-${info?.id}`}>{info?.name}</Tag>
      )),
  },
  {
    title: "Ngày tạo",
    dataIndex: "createdAt",
    key: "createdAt",
    // width: 240,
    render: (date) => {
      return moment(date).format("DD/MM/YYYY");
    },
  },
  {
    title: "Trạng thái",
    dataIndex: "status",
    key: "status",
    width: 100,
    render: (status) => {
      if (status === 1) {
        return <Tag color="#2ea219">Hoạt động</Tag>;
      }
      if (status === 2) {
        return <Tag color="#696969">Đã khóa</Tag>;
      }
    },
  },
  {
    title: "Chức năng",
    dataIndex: "member_id",
    key: "action",
    fixed: "right",
    align: "center",
    width: 110,
    render: (id) => <Link to={`${id}`}>Xem</Link>,
  },
];

const data = [
  {
    id: "36e951fa-2d07-4c61-ae1f-fd3c09d4eef9",
    department_id: "748f37bf-7d41-458a-a986-a12a0c7c257b",
    position_id: null,
    member_id: 207,
    code: "",
    full_name: "DƯƠNG THỊ NGUYỆT YẾN",
    birthday: "1967-07-30",
    username: "",
    phone: "0902797275",
    email: "nguyetyen1967@gmail.com",
    id_card: "",
    type: 1,
    status: 1,
    login_info: { token: null, status: -1 },
    gender: 2,
    logs: [],
    target: [14],
    mediafiles: [],
    createdAt: "2022-01-13T03:02:56.220Z",
    updatedAt: "2022-01-14T03:46:46.565Z",
    deletedAt: null,
    position_info: null,
    department_info: {
      id: "748f37bf-7d41-458a-a986-a12a0c7c257b",
      department_id: 72,
      name: "Khoa Kiểm Soát Nhiễm Khuẩn",
      type: 2,
      parent_id: "50e55ee4-e44d-4500-8730-bd3a588325ae",
    },
    degree_info: null,
    subject_studying: {
      id: "cff1582f-1cfa-462b-b783-06361acf22a6",
      member_id: "36e951fa-2d07-4c61-ae1f-fd3c09d4eef9",
      subject_id: "554ceeef-fe0d-47e8-a430-de744c2a0e9a",
      status: 1,
      type: 1,
      meta: {},
      startTime: "2022-01-13T03:04:15.354Z",
      endTime: null,
      createdAt: "2022-01-13T03:04:15.363Z",
      updatedAt: "2022-01-13T03:04:15.363Z",
      subject_info: {
        key: "554ceeef-fe0d-47e8-a430-de744c2a0e9a",
        label:
          "Tổng quan về Kiểm soát nhiễm khuẩn, Giám sát kiểm soát nhiễm khuẩn, Phòng ngừa phơi nhiễm",
        id: "554ceeef-fe0d-47e8-a430-de744c2a0e9a",
        subject_id: 1,
        code: "CR-59-DKEFG",
        title:
          "Tổng quan về Kiểm soát nhiễm khuẩn, Giám sát kiểm soát nhiễm khuẩn, Phòng ngừa phơi nhiễm",
      },
    },
    target_info: [{ id: 14, name: "Điều dưỡng" }],
  },
  {
    id: "9692904b-cc17-402d-a9ad-bd990de57f3a",
    department_id: "e6523d80-b0cb-40bc-9f64-ca5594272395",
    position_id: null,
    member_id: 206,
    code: "",
    full_name: "nguyễn thị thực",
    birthday: "1984-04-24",
    username: "",
    phone: "0938516346",
    email: "thuc2014@yahoo.com",
    id_card: "",
    type: 1,
    status: 1,
    login_info: {
      token:
        "eyJhbGciOiJFUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6Ijk2OTI5MDRiLWNjMTctNDAyZC1hOWFkLWJkOTkwZGU1N2YzYSIsImlhdCI6MTY0MTQzNTUzMn0.5pCRlWVHBy3wzcbhV_0uA55_A0jOA8Dyy9w17pXeuhcVs977Ftgip77QQUnaeqTdeQmw9q1aiDWRhX7_9DESOQ",
      status: 1,
    },
    gender: 2,
    logs: [],
    target: [14],
    mediafiles: [],
    createdAt: "2022-01-06T02:18:36.827Z",
    updatedAt: "2022-01-06T02:19:09.478Z",
    deletedAt: null,
    position_info: null,
    department_info: {
      id: "e6523d80-b0cb-40bc-9f64-ca5594272395",
      department_id: 52,
      name: "Khoa Phẫu Thuật - Gây Mê Hồi Sức",
      type: 2,
      parent_id: "e9eb70cd-8b6d-4ecd-b314-fdd16f68014c",
    },
    degree_info: null,
    subject_studying: {
      id: "a907638d-9bb7-4beb-98e5-402085266066",
      member_id: "9692904b-cc17-402d-a9ad-bd990de57f3a",
      subject_id: "554ceeef-fe0d-47e8-a430-de744c2a0e9a",
      status: 1,
      type: 1,
      meta: {},
      startTime: "2022-01-06T02:19:20.859Z",
      endTime: null,
      createdAt: "2022-01-06T02:19:20.861Z",
      updatedAt: "2022-01-06T02:19:20.861Z",
      subject_info: {
        key: "554ceeef-fe0d-47e8-a430-de744c2a0e9a",
        label:
          "Tổng quan về Kiểm soát nhiễm khuẩn, Giám sát kiểm soát nhiễm khuẩn, Phòng ngừa phơi nhiễm",
        id: "554ceeef-fe0d-47e8-a430-de744c2a0e9a",
        subject_id: 1,
        code: "CR-59-DKEFG",
        title:
          "Tổng quan về Kiểm soát nhiễm khuẩn, Giám sát kiểm soát nhiễm khuẩn, Phòng ngừa phơi nhiễm",
      },
    },
    target_info: [{ id: 14, name: "Điều dưỡng" }],
  },
  {
    id: "045c79af-86cb-486b-a396-c6708103f977",
    department_id: "748f37bf-7d41-458a-a986-a12a0c7c257b",
    position_id: null,
    member_id: 205,
    code: "",
    full_name: "TRẦN THỊ KIM NGỌC",
    birthday: "1982-07-25",
    username: "",
    phone: "0909312507",
    email: "ngoctran250782@gmail.com",
    id_card: "",
    type: 1,
    status: 1,
    login_info: {
      token:
        "eyJhbGciOiJFUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjA0NWM3OWFmLTg2Y2ItNDg2Yi1hMzk2LWM2NzA4MTAzZjk3NyIsImlhdCI6MTY0MTg5MjMzN30.6tgPFILtDkUUa6ZjhrCC3K98WcXvZotlchXX_R_OVJNerL7KbXJo-s-2-VBlspkzcVDtXSCkoAZ-b_7un7Fb0w",
      status: 1,
    },
    gender: 2,
    logs: [],
    target: [14],
    mediafiles: [],
    createdAt: "2022-01-05T02:49:49.462Z",
    updatedAt: "2022-01-11T09:12:17.405Z",
    deletedAt: null,
    position_info: null,
    department_info: {
      id: "748f37bf-7d41-458a-a986-a12a0c7c257b",
      department_id: 72,
      name: "Khoa Kiểm Soát Nhiễm Khuẩn",
      type: 2,
      parent_id: "50e55ee4-e44d-4500-8730-bd3a588325ae",
    },
    degree_info: null,
    subject_studying: {
      id: "34b9f636-1172-4f43-816f-659919750a66",
      member_id: "045c79af-86cb-486b-a396-c6708103f977",
      subject_id: "554ceeef-fe0d-47e8-a430-de744c2a0e9a",
      status: 1,
      type: 1,
      meta: {},
      startTime: "2022-01-11T09:12:26.077Z",
      endTime: null,
      createdAt: "2022-01-11T09:12:26.080Z",
      updatedAt: "2022-01-11T09:12:26.080Z",
      subject_info: {
        key: "554ceeef-fe0d-47e8-a430-de744c2a0e9a",
        label:
          "Tổng quan về Kiểm soát nhiễm khuẩn, Giám sát kiểm soát nhiễm khuẩn, Phòng ngừa phơi nhiễm",
        id: "554ceeef-fe0d-47e8-a430-de744c2a0e9a",
        subject_id: 1,
        code: "CR-59-DKEFG",
        title:
          "Tổng quan về Kiểm soát nhiễm khuẩn, Giám sát kiểm soát nhiễm khuẩn, Phòng ngừa phơi nhiễm",
      },
    },
    target_info: [{ id: 14, name: "Điều dưỡng" }],
  },
  {
    id: "7da7be2b-7783-40fd-8e90-09e7081faed5",
    department_id: "748f37bf-7d41-458a-a986-a12a0c7c257b",
    position_id: null,
    member_id: 204,
    code: "",
    full_name: "Đinh Thị Thanh Thanh",
    birthday: "1995-03-07",
    username: "",
    phone: "0702758749",
    email: "thanhthanh95vn@gmail.com",
    id_card: "",
    type: 1,
    status: 1,
    login_info: {
      token:
        "eyJhbGciOiJFUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjdkYTdiZTJiLTc3ODMtNDBmZC04ZTkwLTA5ZTcwODFmYWVkNSIsImlhdCI6MTY0MDc1NDYxNH0.pdLGOEV3eoXPoGPTDNyN-sxBrDOwSmbktxNUtTSkr8XWaM9GoyTBJ3BZNt1OTUYa0nOjT0m8rXtdhtFib6n8Bg",
      status: 1,
    },
    gender: 2,
    logs: [],
    target: [9],
    mediafiles: [],
    createdAt: "2021-12-29T05:10:00.988Z",
    updatedAt: "2021-12-29T05:11:14.629Z",
    deletedAt: null,
    position_info: null,
    department_info: {
      id: "748f37bf-7d41-458a-a986-a12a0c7c257b",
      department_id: 72,
      name: "Khoa Kiểm Soát Nhiễm Khuẩn",
      type: 2,
      parent_id: "50e55ee4-e44d-4500-8730-bd3a588325ae",
    },
    degree_info: null,
    subject_studying: {
      id: "2c0e7dae-dc20-46d4-9049-039fa6ac8579",
      member_id: "7da7be2b-7783-40fd-8e90-09e7081faed5",
      subject_id: "554ceeef-fe0d-47e8-a430-de744c2a0e9a",
      status: 1,
      type: 1,
      meta: {},
      startTime: "2021-12-29T05:12:17.161Z",
      endTime: null,
      createdAt: "2021-12-29T05:12:17.163Z",
      updatedAt: "2021-12-29T05:12:17.163Z",
      subject_info: {
        key: "554ceeef-fe0d-47e8-a430-de744c2a0e9a",
        label:
          "Tổng quan về Kiểm soát nhiễm khuẩn, Giám sát kiểm soát nhiễm khuẩn, Phòng ngừa phơi nhiễm",
        id: "554ceeef-fe0d-47e8-a430-de744c2a0e9a",
        subject_id: 1,
        code: "CR-59-DKEFG",
        title:
          "Tổng quan về Kiểm soát nhiễm khuẩn, Giám sát kiểm soát nhiễm khuẩn, Phòng ngừa phơi nhiễm",
      },
    },
    target_info: [{ id: 9, name: "Bác sĩ" }],
  },
  {
    id: "8d837bf4-587c-4142-b36b-98d82db174f9",
    department_id: "e6523d80-b0cb-40bc-9f64-ca5594272395",
    position_id: null,
    member_id: 203,
    code: "",
    full_name: "LÊ HỮU ĐẠT",
    birthday: "1961-09-04",
    username: "",
    phone: "0906698189",
    email: "drlehuudat@gmail.com",
    id_card: "",
    type: 1,
    status: 1,
    login_info: { token: null, status: -1 },
    gender: 1,
    logs: [],
    target: [6],
    mediafiles: [],
    createdAt: "2021-12-27T07:11:22.211Z",
    updatedAt: "2021-12-27T07:28:49.631Z",
    deletedAt: null,
    position_info: null,
    department_info: {
      id: "e6523d80-b0cb-40bc-9f64-ca5594272395",
      department_id: 52,
      name: "Khoa Phẫu Thuật - Gây Mê Hồi Sức",
      type: 2,
      parent_id: "e9eb70cd-8b6d-4ecd-b314-fdd16f68014c",
    },
    degree_info: null,
    subject_studying: null,
    target_info: [{ id: 6, name: "BS.CKII" }],
  },
  {
    id: "d6f81d28-0f12-4086-9ea0-19cb9fa99ac3",
    department_id: "748f37bf-7d41-458a-a986-a12a0c7c257b",
    position_id: null,
    member_id: 202,
    code: "",
    full_name: "trần Thị Ly Ly",
    birthday: "1996-11-05",
    username: "",
    phone: "0392669024",
    email: "tranthilyly0511@gmail.com",
    id_card: "",
    type: 1,
    status: 1,
    login_info: { token: null, status: -1 },
    gender: 2,
    logs: [],
    target: [26],
    mediafiles: [],
    createdAt: "2021-12-27T03:56:16.294Z",
    updatedAt: "2022-01-14T03:19:52.070Z",
    deletedAt: null,
    position_info: null,
    department_info: {
      id: "748f37bf-7d41-458a-a986-a12a0c7c257b",
      department_id: 72,
      name: "Khoa Kiểm Soát Nhiễm Khuẩn",
      type: 2,
      parent_id: "50e55ee4-e44d-4500-8730-bd3a588325ae",
    },
    degree_info: null,
    subject_studying: {
      id: "4c1aaaae-d015-4ed3-8601-0b04f0e05b7c",
      member_id: "d6f81d28-0f12-4086-9ea0-19cb9fa99ac3",
      subject_id: "554ceeef-fe0d-47e8-a430-de744c2a0e9a",
      status: 1,
      type: 1,
      meta: {},
      startTime: "2021-12-27T03:57:17.266Z",
      endTime: null,
      createdAt: "2021-12-27T03:57:17.268Z",
      updatedAt: "2021-12-27T03:57:17.268Z",
      subject_info: {
        key: "554ceeef-fe0d-47e8-a430-de744c2a0e9a",
        label:
          "Tổng quan về Kiểm soát nhiễm khuẩn, Giám sát kiểm soát nhiễm khuẩn, Phòng ngừa phơi nhiễm",
        id: "554ceeef-fe0d-47e8-a430-de744c2a0e9a",
        subject_id: 1,
        code: "CR-59-DKEFG",
        title:
          "Tổng quan về Kiểm soát nhiễm khuẩn, Giám sát kiểm soát nhiễm khuẩn, Phòng ngừa phơi nhiễm",
      },
    },
    target_info: [{ id: 26, name: "Khác" }],
  },
  {
    id: "6c579997-5d2f-4923-9b7d-f8b40368727b",
    department_id: "e6523d80-b0cb-40bc-9f64-ca5594272395",
    position_id: null,
    member_id: 201,
    code: "",
    full_name: "NGUYỄN ĐỨC VINH",
    birthday: "1975-12-26",
    username: "",
    phone: "0984676343",
    email: "ngducvinh@gmail.com",
    id_card: "",
    type: 1,
    status: 1,
    login_info: { token: null, status: -1 },
    gender: 1,
    logs: [],
    target: [15],
    mediafiles: [],
    createdAt: "2021-12-27T02:45:56.667Z",
    updatedAt: "2021-12-27T02:54:01.140Z",
    deletedAt: null,
    position_info: null,
    department_info: {
      id: "e6523d80-b0cb-40bc-9f64-ca5594272395",
      department_id: 52,
      name: "Khoa Phẫu Thuật - Gây Mê Hồi Sức",
      type: 2,
      parent_id: "e9eb70cd-8b6d-4ecd-b314-fdd16f68014c",
    },
    degree_info: null,
    subject_studying: null,
    target_info: [{ id: 15, name: "Kỹ thuật viên" }],
  },
  {
    id: "45a2be16-ebb4-4486-8f98-4c279b87d5fa",
    department_id: "30216299-c65d-4c61-9685-6d2692fec655",
    position_id: null,
    member_id: 200,
    code: "",
    full_name: "LÊ NGỌC ANH THUY",
    birthday: "1993-05-24",
    username: "",
    phone: "0349522155",
    email: "anhthuyvt2405@gmail.com",
    id_card: "",
    type: 1,
    status: 1,
    login_info: { token: null, status: -1 },
    gender: 2,
    logs: [],
    target: [7, 8],
    mediafiles: [],
    createdAt: "2021-12-27T02:06:13.521Z",
    updatedAt: "2021-12-27T05:15:47.990Z",
    deletedAt: null,
    position_info: null,
    department_info: {
      id: "30216299-c65d-4c61-9685-6d2692fec655",
      department_id: 58,
      name: "Khoa Phục Hồi Chức Năng",
      type: 2,
      parent_id: "e9eb70cd-8b6d-4ecd-b314-fdd16f68014c",
    },
    degree_info: null,
    subject_studying: null,
    target_info: [
      { id: 7, name: "BS.CKI" },
      { id: 8, name: "BS Nội trú" },
    ],
  },
  {
    id: "c8be7e4c-c131-4ee9-835d-6193bdb56ef1",
    department_id: "9bde8045-8975-4918-9ff4-f10a5b92f631",
    position_id: null,
    member_id: 199,
    code: "",
    full_name: "Lê Huỳnh Phương Thảo",
    birthday: "1988-08-04",
    username: "",
    phone: "0907472047",
    email: "phuongthao@gmail.com",
    id_card: "",
    type: 1,
    status: 1,
    login_info: { token: null, status: -1 },
    gender: 2,
    logs: [],
    target: [26],
    mediafiles: [],
    createdAt: "2021-12-25T12:16:50.488Z",
    updatedAt: "2022-01-03T03:24:29.060Z",
    deletedAt: null,
    position_info: null,
    department_info: {
      id: "9bde8045-8975-4918-9ff4-f10a5b92f631",
      department_id: 39,
      name: "Khoa Nội Phổi (8B1)",
      type: 2,
      parent_id: "e9eb70cd-8b6d-4ecd-b314-fdd16f68014c",
    },
    degree_info: null,
    subject_studying: {
      id: "3e165efa-a749-450d-9556-a3555ad3599e",
      member_id: "c8be7e4c-c131-4ee9-835d-6193bdb56ef1",
      subject_id: "554ceeef-fe0d-47e8-a430-de744c2a0e9a",
      status: 1,
      type: 1,
      meta: {},
      startTime: "2021-12-25T12:17:30.516Z",
      endTime: null,
      createdAt: "2021-12-25T12:17:30.518Z",
      updatedAt: "2021-12-25T12:17:30.518Z",
      subject_info: {
        key: "554ceeef-fe0d-47e8-a430-de744c2a0e9a",
        label:
          "Tổng quan về Kiểm soát nhiễm khuẩn, Giám sát kiểm soát nhiễm khuẩn, Phòng ngừa phơi nhiễm",
        id: "554ceeef-fe0d-47e8-a430-de744c2a0e9a",
        subject_id: 1,
        code: "CR-59-DKEFG",
        title:
          "Tổng quan về Kiểm soát nhiễm khuẩn, Giám sát kiểm soát nhiễm khuẩn, Phòng ngừa phơi nhiễm",
      },
    },
    target_info: [{ id: 26, name: "Khác" }],
  },
  {
    id: "92bf0486-032d-44d8-8b06-95f71b63fea9",
    department_id: "e6523d80-b0cb-40bc-9f64-ca5594272395",
    position_id: 16,
    member_id: 198,
    code: "",
    full_name: "thái văn minh",
    birthday: "1973-03-16",
    username: "",
    phone: "0948554839",
    email: "thaiminhcr08@gmail.com",
    id_card: "",
    type: 1,
    status: 1,
    login_info: { token: null, status: -1 },
    gender: 1,
    logs: [],
    target: [15],
    mediafiles: [],
    createdAt: "2021-12-24T04:43:04.691Z",
    updatedAt: "2021-12-27T01:46:27.414Z",
    deletedAt: null,
    position_info: { id: 16, name: "Khác", type: 1, status: 1, meta: {} },
    department_info: {
      id: "e6523d80-b0cb-40bc-9f64-ca5594272395",
      department_id: 52,
      name: "Khoa Phẫu Thuật - Gây Mê Hồi Sức",
      type: 2,
      parent_id: "e9eb70cd-8b6d-4ecd-b314-fdd16f68014c",
    },
    degree_info: null,
    subject_studying: null,
    target_info: [{ id: 15, name: "Kỹ thuật viên" }],
  },
];

function MembersMainAdmin({ filter }) {
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
                Thêm thành viên
              </Button>
            </Link>
          </>
        }
      >
        <Table
          // loading={isLoading}
          pagination={{
            position: ["topRight", "bottomRight"],
            // defaultPageSize: pagination.pageSize,
            // current: pagination.currentPage,
            // onChange: handlePaginationChange,
            // total: dataSource?.totalCount,
            showTotal: (total, range) =>
              `${total} thành viên | Từ ${range[0]} đến ${range[1]}`,
            showLessItems: true,
            showSizeChanger: false,
          }}
          columns={columns}
          scroll={{ x: 1300 }}
          dataSource={data}
          rowKey="member_id"
        />
      </Card>
      <div style={{ margin: "25px 0" }}>
        <Footer />
      </div>
    </>
  );
}

export default MembersMainAdmin;
