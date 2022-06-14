import React, { useState } from "react";
// import PropTypes from "prop-types";
import { Card, Drawer, Modal } from "antd";
import "./index.css";

CardCertificate.propTypes = {};

function CardCertificate(props) {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [visibleDrawer, setVisibleDrawer] = useState(false);

  return (
    <>
      <Card
        className="card-certificate"
        onClick={() => {
          setVisibleDrawer(true);
        }}
        bordered={false}
      >
        <img src="/img/default.jpg" alt="thumbnail" />
        <p className="card-certificat__title">Test bài học ngày 14</p>
        <div className="card-certificat__content">
          <p>My Trinh - Giám đốc Trung Tâm</p>
          <p
            // className="text-gray"
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            Bv. Chợ Rẫy
            <span
              onClick={(e) => {
                e.stopPropagation();
                setIsModalVisible(true);
              }}
              className="link-hover"
            >
              Xem kết quả
            </span>
          </p>
        </div>
      </Card>
      <Modal
        title="Modal Detail Certificate"
        visible={isModalVisible}
        onOk={() => {
          setIsModalVisible(false);
        }}
        onCancel={() => {
          setIsModalVisible(false);
        }}
      >
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Modal>
      <Drawer
        placement="right"
        onClose={() => {
          setVisibleDrawer(false);
        }}
        visible={visibleDrawer}
        width={500}
      >
        <div className="drawer-certificate">
          <div className="bg-img">
            <img src="/img/default.jpg" alt="thumbnail" />
          </div>
          <p className="card-certificat__title drawer-certificate__title">
            Test bài học ngày 14
          </p>
          <div
            className="card-certificat__content"
            style={{ marginBottom: 20 }}
          >
            <p className="text-gray">My Trinh - Giám đốc Trung Tâm</p>
            <p
              className="text-gray"
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              Bv. Chợ Rẫy
              <span
                className="link-hover"
                style={{ color: "#0083b0", cursor: "pointer" }}
                onClick={(e) => {
                  e.stopPropagation();
                  setIsModalVisible(true);
                }}
              >
                Xem kết quả
              </span>
            </p>
          </div>
          <p className="drawer-certificate__title drawer-certificate__title--list">
            Danh sách chương có thành tích
          </p>
          <p
            className="drawer-certificate__p text-gray"
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            Bv. Chợ Rẫy
            <span
              className="link-hover"
              style={{ color: "#0083b0", cursor: "pointer" }}
              onClick={(e) => {
                e.stopPropagation();
                setIsModalVisible(true);
              }}
            >
              Xem thành tích
            </span>
          </p>
        </div>
      </Drawer>
    </>
  );
}

export default CardCertificate;
