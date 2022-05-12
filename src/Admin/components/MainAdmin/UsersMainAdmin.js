import React from "react";
import PropTypes from "prop-types";
import "./index.css";
import Footer from "../Footer";
import moment from "moment";
import { Button, Card, Table, Tag } from "antd";
import { DownloadOutlined, PlusOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";

UsersMainAdmin.propTypes = {
  filter: PropTypes.object,
};

UsersMainAdmin.defaultProps = {
  filter: {},
};

const columns = [
  {
    align: "center",
    dataIndex: "user_id",
    key: "user_id",
    title: "ID",
    width: 100,
    render: (id) => <Link to={`${id}`}>{id}</Link>,
  },
  {
    dataIndex: "username",
    key: "username",
    title: "Tên người dùng",
  },
  {
    dataIndex: "phone",
    key: "phone",
    title: "Số điện thoại",
  },
  { dataIndex: "email", key: "email", title: "Email" },
  {
    align: "center",
    dataIndex: "type",
    key: "type",
    title: "Quyền hạn",
    render: (type) => {
      if (type === 1) {
        return (
          <Tag style={{ minWidth: 110 }} color="#FF7728">
            Admin System
          </Tag>
        );
      }
      if (type === 2) {
        return (
          <Tag style={{ minWidth: 110 }} color="#3A9CA6">
            Manager
          </Tag>
        );
      }
      if (type === 3) {
        return (
          <Tag style={{ minWidth: 110 }} color="#2B75B5">
            Executives
          </Tag>
        );
      }
    },
  },
  {
    dataIndex: "status",
    key: "status",
    title: "Trạng thái",
    render: (status) => {
      if (status === 1) {
        return (
          <Tag style={{ minWidth: 80, textAlign: "center" }} color="#27AE60">
            Hoạt động
          </Tag>
        );
      }
      if (status === -1) {
        return (
          <Tag style={{ minWidth: 80, textAlign: "center" }} color="#959595">
            Đã khóa
          </Tag>
        );
      }
    },
  },
  {
    dataIndex: "createdAt",
    key: "createdAt",
    title: "Ngày tạo",
    render: (date) => {
      if (date === null) {
        return;
      }
      return moment(date).format("DD/MM/YYYY");
    },
  },
  {
    align: "center",
    fixed: "right",
    key: "action",
    title: "Chức năng",
    width: 110,
    dataIndex: "user_id",
    render: (id) => <Link to={`${id}`}>Xem</Link>,
  },
];

const data = [
  {
    id: "9960954f-eb17-449b-b756-b2d8e6cbc205",
    user_id: 4,
    username: "LRTDoanThy",
    phone: "0969366695",
    email: "doanthy.do@lubrytics.com",
    type: 1,
    status: 1,
    login_info: {
      token:
        "eyJhbGciOiJFUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6Ijk5NjA5NTRmLWViMTctNDQ5Yi1iNzU2LWIyZDhlNmNiYzIwNSIsInVzZXJuYW1lIjoiTFJURG9hblRoeSIsImVtYWlsIjoiZG9hbnRoeS5kb0BsdWJyeXRpY3MuY29tIiwidHlwZSI6MSwidXNlcl9pZCI6NCwiaWF0IjoxNjUyMzQ1NjI5fQ.HvfYG7ehJcCS3In1jJmJj4t_W3wVoShVXQd0ZfatSROAA3Je3HxGzfZGjKC1Rv9DzEkf8yiMmJGnxXcDwvRlLw",
      status: 1,
    },
    logs: {
      list: [
        [
          {
            id: 1,
            user: { id: "cf3fe455-b4f1-4c08-a677-a3ba25ee2b4a" },
            createdAt: "1635389106757",
          },
        ],
      ],
    },
    mediafiles: [],
    createdAt: "2021-10-28T02:45:06.766Z",
    updatedAt: "2022-05-12T08:53:49.401Z",
    deletedAt: null,
  },
  {
    id: "c8e53fc4-b3f2-4baa-9132-c68f1ba0382f",
    user_id: 3,
    username: "CRThangPhung",
    phone: "0988461808",
    email: "thangmanhphung@gmail.com",
    type: 1,
    status: 1,
    login_info: { token: null, status: -1 },
    logs: {
      list: [
        [
          {
            id: 1,
            user: { id: "cf3fe455-b4f1-4c08-a677-a3ba25ee2b4a" },
            createdAt: "1617678780012",
          },
        ],
        {
          id: 2,
          user: { id: "cf3fe455-b4f1-4c08-a677-a3ba25ee2b4a" },
          field: "username",
          createdAt: "1617678799929",
          new_value: "anhThang",
          old_value: "anh Thang",
        },
        {
          id: 3,
          user: { id: "cf3fe455-b4f1-4c08-a677-a3ba25ee2b4a" },
          field: "username",
          createdAt: "1635386227249",
          new_value: "CRThangPhung",
          old_value: "anhThang",
        },
        {
          id: 4,
          user: { id: "cf3fe455-b4f1-4c08-a677-a3ba25ee2b4a" },
          field: "email",
          createdAt: "1635386227253",
          new_value: "thangmanhphung@gmail.com",
          old_value: "123@gmail.com",
        },
        {
          id: 5,
          user: { id: "cf3fe455-b4f1-4c08-a677-a3ba25ee2b4a" },
          field: "phone",
          createdAt: "1635386227257",
          new_value: "0988461808",
          old_value: "0987654321",
        },
      ],
    },
    mediafiles: [],
    createdAt: "2021-04-06T03:13:00.020Z",
    updatedAt: "2022-01-21T09:44:52.114Z",
    deletedAt: null,
  },
  {
    id: "cf3fe455-b4f1-4c08-a677-a3ba25ee2b4a",
    user_id: 2,
    username: "LRTHongPhuc",
    phone: "0934026404",
    email: "hongphuc.phannguyen@lubrytics.com",
    type: 2,
    status: 1,
    login_info: { token: null, status: -1 },
    logs: {
      list: [
        [
          {
            id: 1,
            user: { id: "621b0ebd-fdb8-48d1-9c89-5ec22f891c0a" },
            createdAt: "1610350910457",
          },
        ],
        {
          id: 2,
          user: { id: "621b0ebd-fdb8-48d1-9c89-5ec22f891c0a" },
          field: "username",
          createdAt: "1610642576242",
          new_value: "nguyetbichhh",
          old_value: "nguyetbich",
        },
        {
          id: 3,
          user: { id: "621b0ebd-fdb8-48d1-9c89-5ec22f891c0a" },
          field: "username",
          createdAt: "1614315184075",
          new_value: "admin",
          old_value: "nguyetbichhh",
        },
        {
          id: 4,
          user: { id: "cf3fe455-b4f1-4c08-a677-a3ba25ee2b4a" },
          field: "username",
          createdAt: "1635388554998",
          new_value: "LRTDoanThy",
          old_value: "admin",
        },
        {
          id: 5,
          user: { id: "cf3fe455-b4f1-4c08-a677-a3ba25ee2b4a" },
          field: "email",
          createdAt: "1635388555000",
          new_value: "doanthy.do@lurytics.com",
          old_value: "admin@gmail.com",
        },
        {
          id: 6,
          user: { id: "cf3fe455-b4f1-4c08-a677-a3ba25ee2b4a" },
          field: "phone",
          createdAt: "1635388555002",
          new_value: "0969366695",
          old_value: "0909222333",
        },
        {
          id: 7,
          user: { id: "cf3fe455-b4f1-4c08-a677-a3ba25ee2b4a" },
          field: "username",
          createdAt: "1635389010168",
          new_value: "LRTTest1",
          old_value: "LRTDoanThy",
        },
        {
          id: 8,
          user: { id: "cf3fe455-b4f1-4c08-a677-a3ba25ee2b4a" },
          field: "email",
          createdAt: "1635389010170",
          new_value: "test1@gmail.com",
          old_value: "doanthy.do@lurytics.com",
        },
        {
          id: 9,
          user: { id: "cf3fe455-b4f1-4c08-a677-a3ba25ee2b4a" },
          field: "phone",
          createdAt: "1635389010172",
          new_value: "0987654322",
          old_value: "0969366695",
        },
        {
          id: 10,
          user: { id: "cf3fe455-b4f1-4c08-a677-a3ba25ee2b4a" },
          field: "username",
          createdAt: "1635402987475",
          new_value: "LRTHongPhuc",
          old_value: "LRTTest1",
        },
        {
          id: 11,
          user: { id: "cf3fe455-b4f1-4c08-a677-a3ba25ee2b4a" },
          field: "email",
          createdAt: "1635402987477",
          new_value: "hongphuc.phannguyen@lubrytics.com",
          old_value: "test1@gmail.com",
        },
        {
          id: 12,
          user: { id: "cf3fe455-b4f1-4c08-a677-a3ba25ee2b4a" },
          field: "phone",
          createdAt: "1635402987479",
          new_value: "0934026404",
          old_value: "0987654322",
        },
      ],
    },
    mediafiles: [],
    createdAt: "2021-01-11T07:41:50.466Z",
    updatedAt: "2022-04-29T05:08:45.162Z",
    deletedAt: null,
  },
  {
    id: "621b0ebd-fdb8-48d1-9c89-5ec22f891c0a",
    user_id: 1,
    username: "LRTAdminSystem",
    phone: "0987654321",
    email: "adminsystem@lubrytics.com",
    type: 1,
    status: 1,
    login_info: {
      token:
        "eyJhbGciOiJFUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyMWIwZWJkLWZkYjgtNDhkMS05Yzg5LTVlYzIyZjg5MWMwYSIsInVzZXJuYW1lIjoiTFJUQWRtaW5TeXN0ZW0iLCJlbWFpbCI6ImFkbWluc3lzdGVtQGx1YnJ5dGljcy5jb20iLCJ0eXBlIjoxLCJ1c2VyX2lkIjoxLCJpYXQiOjE2NTE2MzEwNDB9.7R-UGzKBnVD-cpeFFvukKx7Mg55YrPUq0MM6l8CdPX88p1dRo_QEH9ktl8qQB2NBN34nE8WoeyBl4rkNDrcNpw",
      status: 1,
    },
    logs: [],
    mediafiles: [],
    createdAt: null,
    updatedAt: "2022-05-04T02:23:59.522Z",
    deletedAt: null,
  },
];

function UsersMainAdmin({ filter }) {
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
                Thêm người dùng
              </Button>
            </Link>
          </>
        }
      >
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
          rowKey="user_id"
        />
      </Card>
      <div style={{ margin: "25px 0" }}>
        <Footer />
      </div>
    </>
  );
}

export default UsersMainAdmin;
