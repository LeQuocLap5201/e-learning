import React, { useCallback, useState } from "react";
import PropTypes from "prop-types";
import {
  Button,
  Card,
  Checkbox,
  Col,
  Form,
  Input,
  InputNumber,
  Row,
  Select,
  Spin,
  Upload,
} from "antd";
import { PlusOutlined } from "@ant-design/icons";
import "./index.css";
import { normFile, getBase64 } from "../../support";

StepFirst.propTypes = {
  currentStep: PropTypes.number,
  nextStep: PropTypes.func,
};

StepFirst.defaultProps = {
  currentStep: 0,
  nextStep: null,
};

function StepFirst({ currentStep, nextStep }) {
  const [form] = Form.useForm();

  const [isSpinning, setIsSpinning] = useState(false);
  const [previewImage, setPreviewImage] = useState();
  // const [fileUploadApi, setFileUploadApi] = useState();

  const handleUploadChange = useCallback((info) => {
    setIsSpinning(true);
    if (info.file.status === "uploading") {
      info.file.status = "done";
      getBase64(info.file.originFileObj, (imageUrl) =>
        setPreviewImage(imageUrl)
      );
    }
    if (info.file.status === "removed") {
      setIsSpinning(false);
    }
  }, []);

  return (
    <Form
      form={form}
      className="step-first"
      labelCol={{ span: 8 }}
      wrapperCol={{ span: 16 }}
    >
      <Card>
        <Row gutter={16}>
          <Col span={6} style={{ textAlign: "center" }}>
            <Spin spinning={isSpinning} style={{ width: 200 }}>
              <Form.Item
                name="pictures"
                valuePropName="fileList"
                getValueFromEvent={normFile}
              >
                <Upload
                  // disabled={isSpinning}
                  // customRequest={uploadImage}
                  listType="picture-card"
                  onChange={handleUploadChange}
                  showUploadList={false}
                  style={{ width: 200 }}
                >
                  {previewImage ? (
                    <img
                      src={previewImage}
                      alt="preview-upload"
                      style={{ maxHeight: 200, maxWidth: 200 }}
                    />
                  ) : (
                    <div>
                      <PlusOutlined />
                      <div style={{ marginTop: 8 }}>Th??m ???nh</div>
                    </div>
                  )}
                </Upload>
              </Form.Item>
            </Spin>
          </Col>
          <Col span={18}>
            <Row gutter={16}>
              <Col span={12}>
                <Form.Item
                  name="title"
                  label="T??n chuy??n ?????"
                  rules={[
                    { message: "Vui l??ng nh???p t??n chuy??n ?????", required: true },
                  ]}
                >
                  <Input placeholder="T??n chuy??n ?????" />
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item
                  style={{ marginBottom: 10 }}
                  name="target"
                  label="?????i t?????ng h???c"
                  rules={[
                    {
                      required: true,
                      message: "Vui l??ng ch???n ?????i t?????ng h???c",
                      type: "array",
                    },
                  ]}
                >
                  <Select
                    showSearch
                    mode="multiple"
                    placeholder="?????i t?????ng h???c"
                    optionFilterProp="children"
                    filterOption={(input, option) =>
                      option.children
                        .toLowerCase()
                        .indexOf(input.toLowerCase()) >= 0
                    }
                  >
                    <Select.Option value="jack">Jack</Select.Option>
                    <Select.Option value="lucy">Lucy</Select.Option>
                    <Select.Option value="tom">Tom</Select.Option>
                  </Select>
                </Form.Item>
                <Form.Item
                  name="check_all"
                  valuePropName="checked"
                  wrapperCol={{ offset: 8 }}
                >
                  <Checkbox id="check_all">T???t c??? ?????i t?????ng</Checkbox>
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item
                  name="lesson_total"
                  label="S??? ti???t"
                  rules={[
                    {
                      required: true,
                      message: "Vui l??ng nh???p s??? ti???t",
                    },
                  ]}
                >
                  <InputNumber min={0} placeholder="S??? ti???t" />
                </Form.Item>
              </Col>
            </Row>
            <Row gutter={16}>
              <Col span={12}>
                <Form.Item name="author_name" label="T??n t??c gi???">
                  <Input placeholder="T??n t??c gi???" />
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item name="author_title" label="Ch???c v??? t??c gi???">
                  <Select placeholder="Ch???c v??? t??c gi???" allowClear>
                    <Select.Option value="jack">Jack</Select.Option>
                    <Select.Option value="lucy">Lucy</Select.Option>
                    <Select.Option value="Yiminghe">yiminghe</Select.Option>
                  </Select>
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item name="degree_id" label="H???c v???">
                  <Select
                    allowClear
                    showSearch
                    placeholder="H???c v???"
                    optionFilterProp="children"
                    filterOption={(input, option) =>
                      option.children
                        .toLowerCase()
                        .indexOf(input.toLowerCase()) >= 0
                    }
                  >
                    <Select.Option value="jack">Jack</Select.Option>
                    <Select.Option value="lucy">Lucy</Select.Option>
                    <Select.Option value="tom">Tom</Select.Option>
                  </Select>
                </Form.Item>
              </Col>
            </Row>
            <Row>
              <Col span={24}>
                <Form.Item
                  name="summary"
                  label="Gi???i thi???u chuy??n ?????"
                  labelCol={{ span: 4 }}
                  wrapperCol={{ span: 20 }}
                >
                  <Input.TextArea rows={4} placeholder="Gi???i thi???u chuy??n ?????" />
                </Form.Item>
              </Col>
            </Row>
            <Row style={{ justifyContent: "flex-end" }}>
              <Button
                htmlType="submit"
                type="primary"
                className="btn-primary"
                onClick={() => {
                  if (!nextStep) return;

                  return nextStep(currentStep + 1);
                }}
              >
                Th??m chuy??n ?????
              </Button>
            </Row>
          </Col>
        </Row>
      </Card>
    </Form>
  );
}

export default StepFirst;
