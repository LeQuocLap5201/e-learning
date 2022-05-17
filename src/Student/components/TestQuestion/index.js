import React, { useState } from "react";
import PropTypes from "prop-types";
import { Radio, Space } from "antd";
import "./index.css";

TestQuestion.propTypes = {
  index: PropTypes.number,
  title: PropTypes.string,
};

TestQuestion.defaultProps = {
  index: 0,
  title: "Câu hỏi",
};

function TestQuestion({ index, title }) {
  const [value, setValue] = useState();

  return (
    <div className="test-question">
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
    </div>
  );
}

export default TestQuestion;
