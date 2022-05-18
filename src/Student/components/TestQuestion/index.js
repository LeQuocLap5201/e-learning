import React, { useState } from "react";
import PropTypes from "prop-types";
import { Radio, Space } from "antd";
import "./index.css";
import { CheckOutlined, CloseOutlined } from "@ant-design/icons";

TestQuestion.propTypes = {
  index: PropTypes.number,
  title: PropTypes.string,
  status: PropTypes.number,
};

//status: -1 = Fail, 0: Đang thi, 1 = Pass

TestQuestion.defaultProps = {
  index: 0,
  title: "Câu hỏi",
  status: 0,
};

function TestQuestion({ index, title, status }) {
  const [value, setValue] = useState();

  return (
    <div className="test-question">
      {status === 0 && (
        <>
          <p className="test-question__title">
            <b>{`${index}. ${title}`}</b>
          </p>
          <Radio.Group onChange={(e) => setValue(e.target.value)} value={value}>
            <Space direction="vertical">
              <Radio value={1}>Option A</Radio>
              <Radio value={2}>Option B</Radio>
              <Radio value={3}>Option C</Radio>
              <Radio value={4}>Option D</Radio>
            </Space>
          </Radio.Group>
        </>
      )}
      {status === -1 && (
        <>
          <p className="test-question__title test-fail">
            <CloseOutlined /> <b>{`${index}. ${title}`}</b>
          </p>
          <Radio.Group
            className="test-fail"
            onChange={(e) => setValue(e.target.value)}
            value={value}
          >
            <Space direction="vertical">
              <Radio value={1}>Option A</Radio>
              <Radio value={2}>Option B</Radio>
              <Radio value={3}>Option C</Radio>
              <Radio value={4}>Option D</Radio>
            </Space>
          </Radio.Group>
        </>
      )}
      {status === 1 && (
        <>
          <p className="test-question__title">
            <CheckOutlined style={{ color: "#52C41A" }} />{" "}
            <b>{`${index}. ${title}`}</b>
          </p>
          <Radio.Group onChange={(e) => setValue(e.target.value)} value={value}>
            <Space direction="vertical">
              <Radio value={1}>Option A</Radio>
              <Radio value={2}>Option B</Radio>
              <Radio value={3}>Option C</Radio>
              <Radio value={4}>Option D</Radio>
            </Space>
          </Radio.Group>
        </>
      )}
    </div>
  );
}

export default TestQuestion;
