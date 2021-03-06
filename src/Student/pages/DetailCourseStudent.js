import {
  CheckOutlined,
  CrownOutlined,
  FileDoneOutlined,
} from "@ant-design/icons";
import { Button, Col, Row, Tooltip, Tree } from "antd";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import ButtonBack from "../components/ButtonBack";
import FooterStudent from "../components/FooterStudent";

const data = [
  {
    id: "540319a9-0a24-4dba-a3e6-0508ba857c0f",
    subject_id: 230,
    code: "CR-59-WEBDF-1",
    title: "1412 TEST 2.1",
    order: 1,
    progress_info: { status: 2, updatedAt: "2021-12-31T03:20:03.686Z" },
    exam_info: {
      id: "cee4de6f-f4f6-46fc-874c-66cc1e93f36f",
      status: 2,
      subject_id: "540319a9-0a24-4dba-a3e6-0508ba857c0f",
      createdAt: "2021-12-31T03:20:06.249Z",
    },
  },
  {
    id: "eac64bbb-a054-4d92-97ba-29daa8c382c9",
    subject_id: 231,
    code: "CR-59-WEBDF-2",
    title: "1412 TEST 2.2",
    order: 2,
    progress_info: { status: 2, updatedAt: "2022-04-27T08:00:57.263Z" },
    exam_info: {
      id: "6d563e31-9436-4ab9-b3a6-0ee51271b3ca",
      status: 2,
      subject_id: "eac64bbb-a054-4d92-97ba-29daa8c382c9",
      createdAt: "2022-04-27T08:02:26.062Z",
    },
  },
  {
    id: "7bc932ae-0e6a-4bde-849f-20a59797c397",
    subject_id: 232,
    code: "CR-59-WEBDF-3",
    title: "1412 TEST 2.3",
    order: 3,
    progress_info: { status: 2, updatedAt: "2022-04-27T08:03:04.325Z" },
    exam_info: {
      id: "85dd1e8c-ca80-4694-a84c-d148cecca21d",
      status: -2,
      subject_id: "7bc932ae-0e6a-4bde-849f-20a59797c397",
      createdAt: "2022-05-03T15:15:18.276Z",
    },
  },
];

export default function DetailCourseStudent() {
  const [treeSelected, setTreeSelected] = useState({});

  const onSelect = (selectedKeys, info) => {
    const newSelected = selectedKeys[0] !== treeSelected?.id ? info?.node : {};
    setTreeSelected(newSelected);
  };

  const newData = data.map((data) => ({
    ...data,
    key: data?.id,
    title: (
      <div
        className={
          data?.id === treeSelected?.id
            ? "detail-course__item active"
            : "detail-course__item"
        }
      >
        <Tooltip
          title={data?.progress_info?.status === 2 ? "H???c xong" : "Ch??a h???c"}
        >
          <FileDoneOutlined
            style={{
              fontSize: 20,
              marginRight: 5,
              color: data?.progress_info?.status === 2 ? "#52C41A" : "#000",
            }}
          />
        </Tooltip>
        <Tooltip title={data?.exam_info?.status === 2 ? "Pass" : "Fail"}>
          <CrownOutlined
            style={{
              fontSize: 20,
              marginRight: 5,
              color: data?.exam_info?.status === 2 ? "#52C41A" : "#000",
            }}
          />
        </Tooltip>
        <span style={{ marginRight: 5, fontSize: 16, fontWeight: 600 }}>
          {data?.title}
        </span>
        {data?.progress_info?.status === 2 && data?.exam_info?.status === 2 && (
          <CheckOutlined style={{ fontSize: 16, color: "#52C41A" }} />
        )}
      </div>
    ),
  }));

  return (
    <div
      style={{
        minHeight: "calc(100vh - 64px)",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      <div className="detail-course main-student" style={{ marginBottom: 40 }}>
        <div style={{ marginBottom: 20 }}>
          <ButtonBack />
        </div>
        <div className="detail-course__title">
          <Tooltip>
            <FileDoneOutlined style={{ fontSize: 20, marginRight: 8 }} />
          </Tooltip>
          <Tooltip>
            <CrownOutlined style={{ fontSize: 20, marginRight: 8 }} />
          </Tooltip>
          <span>TEST B??I H???C NG??Y 14</span>
        </div>
        <Row>
          <Col
            className="detail-course__left"
            xl={12}
            lg={12}
            md={12}
            sm={24}
            xs={24}
          >
            <img src="/img/default.jpg" alt="thumbnail" />
            <Row gutter={[16, 10]}>
              <Col span={10}>M?? kh??a h???c</Col>
              <Col span={14}>
                <b>CR-59-MGLAG</b>
              </Col>
              <Col span={10}>Ng??y ph??t h??nh</Col>
              <Col span={14}>
                <b>30-12-2021</b>
              </Col>
              <Col span={10}>T??c gi???</Col>
              <Col span={14}>
                <b>My Trinh</b>
              </Col>
              <Col span={10}>Ch???c v??? t??c gi???</Col>
              <Col span={14}>
                <b>Gi??m ?????c Trung T??m</b>
              </Col>
              <Col span={10}>????n v??? c??ng t??c</Col>
              <Col span={14}>
                <b>Bv. Ch??? R???y</b>
              </Col>
              <Col span={24}>
                <Link to="/student/test/4">
                  <Button
                    htmlType="submit"
                    type="primary"
                    className="btn-bg"
                  >
                    Thi chuy??n ?????
                  </Button>
                </Link>
              </Col>
              <Col span={24}>
                <b className="thematic-title">Gi???i thi???u chuy??n ?????</b>
              </Col>
              <Col span={24}>Gi???i thi???u chuy??n ????? CR-59-MGLAG</Col>
            </Row>
          </Col>
          <Col
            className="detail-course__right"
            xl={12}
            lg={12}
            md={12}
            sm={24}
            xs={24}
          >
            <p>
              <b>N???i dung chuy??n ?????</b>
            </p>
            <Tree
              expandedKeys={["id"]}
              onSelect={onSelect}
              defaultExpandAll
              treeData={newData}
            />
          </Col>
        </Row>
        {Object.keys(treeSelected).length !== 0 && (
          <Link
            to={
              treeSelected?.exam_info?.status === -2
                ? `/student/test/${treeSelected?.id}`
                : `${treeSelected?.id}`
            }
          >
            <Button className="btn-student btn-fixed" type="primary">
              {treeSelected?.exam_info?.status === -2
                ? "Thi l???i"
                : treeSelected?.progress_info?.status === 2
                ? "H???c l???i"
                : "B???t ?????u h???c"}
            </Button>
          </Link>
        )}
      </div>
      <FooterStudent />
    </div>
  );
}
