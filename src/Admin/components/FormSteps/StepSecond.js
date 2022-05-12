import React, { useState } from "react";
import PropTypes from "prop-types";
import {
  Button,
  Card,
  Descriptions,
  Form,
  Input,
  InputNumber,
  Row,
  Upload,
} from "antd";
import { normFile } from "../../support";
import { InboxOutlined } from "@ant-design/icons";
import "./index.css";
import TableStepSecond from "../TableSecond/TableStepSecond";
import ReactPlayer from "react-player";

StepSecond.propTypes = {
  currentStep: PropTypes.number,
  nextStep: PropTypes.func,
};

StepSecond.defaultProps = {
  currentStep: 0,
  nextStep: null,
};

function StepSecond({ currentStep, nextStep }) {
  const [form] = Form.useForm();

  const [urlLink, setUrlLink] = useState("");

  const handleLinkChange = (e) => {
    setUrlLink(e?.target?.value);
  };

  return (
    <Card>
      <Form form={form} className="step-second">
        <Descriptions column={2} bordered>
          <Descriptions.Item
            label={
              <>
                Tên chương <span className="input-required">*</span>
              </>
            }
            span={2}
          >
            <Form.Item
              name="title"
              rules={[
                {
                  required: true,
                  message: "Vui lòng nhập tên chương!",
                },
              ]}
            >
              <Input allowClear placeholder="Tên chương" />
            </Form.Item>
          </Descriptions.Item>
          <Descriptions.Item
            label={
              <>
                Số tiết <span className="input-required">*</span>
              </>
            }
            span={2}
          >
            <Form.Item
              name="lesson_total"
              rules={[
                {
                  required: true,
                  message: "Vui lòng nhập số tiết",
                },
              ]}
            >
              <InputNumber min={0} placeholder="Số tiết" />
            </Form.Item>
          </Descriptions.Item>
          <Descriptions.Item label="File PDF" span={2}>
            <Form.Item
              name="dragger"
              valuePropName="fileList"
              getValueFromEvent={normFile}
              noStyle
            >
              <Upload.Dragger name="files" action="/upload.do" accept=".pdf">
                <p className="ant-upload-drag-icon">
                  <InboxOutlined />
                </p>
                <p className="ant-upload-text">
                  Nhấn chuột hoặc kéo thả file PDF vào khu vực này
                </p>
              </Upload.Dragger>
            </Form.Item>
          </Descriptions.Item>
          <Descriptions.Item label="Link video" span={2}>
            <Form.Item name="link">
              <Input
                allowClear
                placeholder="Link video"
                onChange={handleLinkChange}
              />
            </Form.Item>
            {urlLink !== "" ? (
              <ReactPlayer
                url={urlLink}
                style={{ width: "100%", marginTop: 15 }}
              />
            ) : null}
          </Descriptions.Item>
        </Descriptions>
        <Row style={{ justifyContent: "flex-end", marginTop: 10 }}>
          <Button htmlType="submit" type="primary" className="btn-primary">
            Thêm chương
          </Button>
        </Row>
      </Form>
      <TableStepSecond />
      <Row style={{ justifyContent: "flex-end" }}>
        <Button
          type="primary"
          className="btn-primary"
          onClick={() => {
            if (!nextStep) return;

            return nextStep(currentStep + 1);
          }}
        >
          Kế tiếp
        </Button>
      </Row>
    </Card>
  );
}

export default StepSecond;
