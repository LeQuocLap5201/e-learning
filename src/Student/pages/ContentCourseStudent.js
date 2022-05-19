import { EditOutlined } from "@ant-design/icons";
import { Button, Form, Input, Modal, Space, Tabs } from "antd";
import React, { useState } from "react";
import ReactPlayer from "react-player";
import ButtonBack from "../components/ButtonBack";
import { Worker } from "@react-pdf-viewer/core";
// File PDF => Link Youtube: https://youtu.be/nzelgXXCxvY
import { Viewer } from "@react-pdf-viewer/core";
import "@react-pdf-viewer/core/lib/styles/index.css";
import { defaultLayoutPlugin } from "@react-pdf-viewer/default-layout";
import "@react-pdf-viewer/default-layout/lib/styles/index.css";
import { Link } from "react-router-dom";
import useViewport from "../../hooks/useViewport";

export default function ContentCourseStudent() {
  const viewPort = useViewport();

  const defaultLayoutPluginInstance = defaultLayoutPlugin();
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isSuccess, setSuccess] = useState(false);

  return (
    <div
      style={{
        minHeight: "calc(100vh - 64px)",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      <div className="content-course-student main-student">
        <div
          style={{
            marginBottom: 20,
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <ButtonBack />
          <Button
            type="primary"
            icon={<EditOutlined />}
            className="btn-student"
            onClick={() => {
              setIsModalVisible(true);
            }}
          >
            Ghi chú
          </Button>
        </div>
        <h3>1412 TEST 2.1</h3>
        <br />
        <Tabs defaultActiveKey={1} type="card">
          <Tabs.TabPane tab="Link Video" key={1}>
            <ReactPlayer
              {...(viewPort <= 720 ? { width: "100%" } : {})}
              url="https://www.youtube.com/watch?v=5Q2Pc-e-8Qc"
            />
          </Tabs.TabPane>
          <Tabs.TabPane tab="File PDF" key={2}>
            <Worker workerUrl="https://unpkg.com/pdfjs-dist@2.13.216/build/pdf.worker.min.js">
              <Viewer
                fileUrl="/img/js.pdf"
                plugins={[defaultLayoutPluginInstance]}
              />
            </Worker>
          </Tabs.TabPane>
        </Tabs>
        <Modal
          className="modal-custom"
          title="Ghi chú"
          visible={isModalVisible}
          onOk={() => {
            setIsModalVisible(false);
          }}
          onCancel={() => {
            setIsModalVisible(false);
          }}
          footer={null}
        >
          <Form>
            <Form.Item name="note">
              <Input.TextArea rows={5} placeholder="Nhập nội dung ghi chú" />
            </Form.Item>
            <Space style={{ width: "100%", justifyContent: "flex-end" }}>
              <Button htmlType="submit" type="primary" className="btn-student">
                Lưu ghi chú
              </Button>
            </Space>
          </Form>
        </Modal>
      </div>
      <Button
        className="btn-student btn-fixed"
        type="primary"
        onClick={() => {
          setSuccess(true);
        }}
      >
        Hoàn thành chương
      </Button>
      <Modal
        className="modal-custom"
        title="Hoàn thành chương"
        visible={isSuccess}
        onOk={() => {
          setSuccess(false);
        }}
        onCancel={() => {
          setSuccess(false);
        }}
        footer={null}
      >
        <Space style={{ width: "100%", justifyContent: "center" }}>
          <Link to="/student/test/2">
            <Button type="primary" className="btn-student">
              Làm bài thi
            </Button>
          </Link>
          <Link to="/student">
            <Button>Trang chủ</Button>
          </Link>
        </Space>
      </Modal>
    </div>
  );
}
