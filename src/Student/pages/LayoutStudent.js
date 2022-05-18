/* eslint-disable jsx-a11y/anchor-is-valid */
import {
  CloseCircleOutlined,
  CrownOutlined,
  EditOutlined,
  FileSearchOutlined,
  HomeOutlined,
  MenuUnfoldOutlined,
  SearchOutlined,
  UserOutlined,
} from "@ant-design/icons";
import {
  Button,
  Divider,
  Dropdown,
  Input,
  Layout,
  List,
  Menu,
  Modal,
} from "antd";
import { Header } from "antd/lib/layout/layout";
import React, { useEffect, useState } from "react";
import { Link, NavLink, Outlet, useLocation } from "react-router-dom";
import useViewport from "../../hooks/useViewport";

const { Content } = Layout;

const data = [
  {
    id: "ecc83134-77ed-4b8d-a6a6-973960f56c76",
    subject_id: 233,
    code: "CR-59-MGLAG",
    title: "Test bài học ngày 14",
    type: 1,
    mediafiles: [],
    author_info: { name: "My Trinh", title: "Giám  đốc Trung Tâm" },
    published_date: "2021-12-30",
    summary: "",
    order: null,
    subjectTime: null,
    status: 2,
    meta: { lesson_total: 2 },
    createdAt: "2021-12-14T10:32:35.209Z",
    updatedAt: "2021-12-30T08:19:38.893Z",
    parent_id: null,
    parent_info: null,
    degree_info: {
      id: 9,
      attributes_id: 1,
      type: 1,
      subject_id: "ecc83134-77ed-4b8d-a6a6-973960f56c76",
      detail: { id: 1, value: "TS.BS" },
    },
  },
  {
    id: "92a2d9f7-aa1d-48fd-8153-1d708d9e55e8",
    subject_id: 150,
    code: "CR-59-F4SI4",
    title: "Tim mạch",
    type: 1,
    mediafiles: [
      {
        id: "c7258739-f444-4f80-8313-261477e1d6b8",
        name: "chuyen-khoa-tim-mach.jpg",
      },
    ],
    author_info: { name: "Hồng Hạnh", title: "Trưởng khoa" },
    published_date: "2021-12-03",
    summary:
      "Tim mạch là bệnh lý xuất hiện âm thầm nhưng để lại nhiều hậu quả nghiêm trọng đối với tính mạng",
    order: null,
    subjectTime: null,
    status: 2,
    meta: { lesson_total: 20 },
    createdAt: "2021-12-02T02:37:17.721Z",
    updatedAt: "2021-12-03T10:40:01.033Z",
    parent_id: null,
    parent_info: null,
    degree_info: null,
  },
  {
    id: "85a36753-4253-4b25-89cc-5eaec29d8967",
    subject_id: 17,
    code: "CR-59-FA0ZE",
    title: "Quy trình thực hành kiểm soát nhiễm khuẩn 5",
    type: 1,
    mediafiles: [],
    author_info: { name: "Tran Thanh Loc", title: "Giám đốc" },
    published_date: "2021-03-13",
    summary: "Quy trình thực hành kiểm soát nhiễm khuẩn 4",
    order: null,
    subjectTime: null,
    status: 2,
    meta: {},
    createdAt: "2021-01-29T08:02:37.145Z",
    updatedAt: "2021-03-13T02:36:27.448Z",
    parent_id: null,
    parent_info: null,
    degree_info: null,
  },
];

const menu = (
  <Menu>
    <Menu.Item key="0">
      <Link to="/student/info">
        <b>Thông tin người dùng</b>
      </Link>
    </Menu.Item>
    <Divider style={{ margin: 0 }} />
    <Menu.Item key="1">
      <Link to="/student/introduce">
        <MenuUnfoldOutlined /> Giới thiệu
      </Link>
    </Menu.Item>
    <Menu.Item key="2">
      <Link to="/student/results">
        <CrownOutlined /> Kết quả
      </Link>
    </Menu.Item>
    <Menu.Item key="3">
      <Link to="/student/courses">
        <FileSearchOutlined /> Tiến độ học
      </Link>
    </Menu.Item>
    <Menu.Item key="4">
      <Link to="/student/changePass">
        <EditOutlined /> Đổi mật khẩu
      </Link>
    </Menu.Item>
    <Menu.Item key="5">
      <CloseCircleOutlined /> Đăng xuất
    </Menu.Item>
  </Menu>
);

export default function LayoutStudent() {
  const viewPort = useViewport();

  const location = useLocation();
  const [current, setCurrent] = useState(location.pathname);

  const [isModalSearch, setIsModalSearch] = useState(false);

  useEffect(() => {
    setCurrent(location.pathname.split("/")?.[2]);
  }, [location]);

  return (
    <>
      <Layout className="layout-student">
        <div
          style={{
            position: "sticky",
            top: 0,
            zIndex: 999,
          }}
        >
          <Header className="header-student">
            <div className="logo-mobile">
              <img src="/img/iconMediad.png" alt="" />
            </div>
            <Link to="/student">
              <img src="/img/iconChoRay.png" alt="logo" />
            </Link>
            <div className="header-student__title">
              <h2>HỆ THỐNG HỌC & THI TRỰC TUYẾN</h2>
              <h2>BỆNH VIỆN CHỢ RẪY</h2>
            </div>
            <Menu
              mode="horizontal"
              selectedKeys={[current]}
              className="menu-student"
            >
              <Menu.Item key="home">
                <Link to="home">Trang chủ</Link>
              </Menu.Item>
              <Menu.Item key="introduce">
                <Link to="introduce">Giới thiệu</Link>
              </Menu.Item>
              <Menu.Item key="courses">
                <Link to="courses">Tiến độ học</Link>
              </Menu.Item>
              <Menu.Item key="results">
                <Link to="results">Kết quả</Link>
              </Menu.Item>
            </Menu>
            <Button
              type="link"
              icon={<SearchOutlined style={{ color: "#fff", fontSize: 20 }} />}
              className="header-student__btn"
              onClick={() => {
                setIsModalSearch(true);
              }}
            />
            <Divider
              style={{
                height: "100%",
                width: 1,
                backgroundColor: "#fff",
                margin: "0 20px",
              }}
              type="vertical"
            />
            <Dropdown overlay={menu} trigger={["click"]}>
              <a
                className="ant-dropdown-link"
                onClick={(e) => e.preventDefault()}
              >
                <UserOutlined style={{ color: "#fff", fontSize: 20 }} />
              </a>
            </Dropdown>
          </Header>
          {viewPort <= 720 && (
            <div className="nav-mobile">
              <ul className="menu-mobile">
                <li>
                  <NavLink to="home">
                    <HomeOutlined />
                    Trang chủ
                  </NavLink>
                </li>
                <li>
                  <a
                    onClick={(e) => {
                      e.preventDefault();
                      setIsModalSearch(true);
                    }}
                  >
                    <SearchOutlined />
                    Tìm kiếm
                  </a>
                </li>
                <li>
                  <NavLink to="results">
                    <CrownOutlined />
                    Kết quả
                  </NavLink>
                </li>
              </ul>
            </div>
          )}
        </div>
        <Content
          style={{
            minHeight: "calc(100vh - 64px)",
            backgroundColor: "#fff",
          }}
        >
          <div className="site-layout-content">
            <Outlet />
          </div>
        </Content>
      </Layout>
      <Modal
        title="Tìm kiếm"
        visible={isModalSearch}
        onOk={() => {
          setIsModalSearch(false);
        }}
        onCancel={() => {
          setIsModalSearch(false);
        }}
        width={1100}
        footer={null}
      >
        <Input.Search
          className="btn-search"
          enterButton
          placeholder="Tìm tên chuyên đề"
          allowClear
        />
        <List
          style={{ marginTop: 10 }}
          dataSource={data}
          renderItem={(item) => (
            <List.Item>
              <Link
                to={`/student/courses/${item?.id}`}
                style={{ display: "flex", alignItems: "center" }}
                onClick={() => setIsModalSearch(false)}
              >
                <img
                  src="/img/default.jpg"
                  alt="thumbnail"
                  style={{ width: 80, marginRight: 20 }}
                />{" "}
                {item?.title}
              </Link>
            </List.Item>
          )}
        />
      </Modal>
    </>
  );
}
