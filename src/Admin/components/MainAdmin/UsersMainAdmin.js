import React from "react";
import PropTypes from "prop-types";
import "./index.css";
import Footer from "../Footer";
import moment from "moment";
import { Button, Card, Table, Tag } from "antd";
import { DownloadOutlined, PlusOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import userApi from "../../api/userApi";
import { useQuery } from "react-query";

UsersMainAdmin.propTypes = {
  filter: PropTypes.object,
};

UsersMainAdmin.defaultProps = {
  filter: {},
};

const columns = [
  {
    align: "center",
    key: "order",
    title: "Số thứ tự",
    width: 110,
    dataIndex: "user_id",
    render: (_, data, index) => {
      return <Link to={`${data?.id}`}>{index + 1}</Link>;
    },
  },
  {
    dataIndex: "name",
    key: "name",
    title: "Tên người dùng",
  },
  {
    dataIndex: "phoneNumber",
    key: "phoneNumber",
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
      if (status === "created") {
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
    dataIndex: "id",
    render: (id) => <Link to={`${id}`}>Xem</Link>,
  },
];

function UsersMainAdmin({ filter }) {
  const { isLoading, data } = useQuery("list-user", userApi.getAll, {
    select: (data) => data.data,
  });

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
          loading={isLoading}
          pagination={{
            position: ["topRight", "bottomRight"],
            total: data?.count,
            showTotal: (total, range) =>
              `${total} người dùng | Từ ${range[0]} đến ${range[1]}`,
            showLessItems: true,
            showSizeChanger: false,
          }}
          columns={columns}
          scroll={{ x: 1300 }}
          dataSource={data?.users}
          rowKey="id"
        />
      </Card>
      <div style={{ margin: "25px 0" }}>
        <Footer />
      </div>
    </>
  );
}

export default UsersMainAdmin;
