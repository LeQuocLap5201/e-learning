import { Col, Form, Input, Select } from "antd";
import React, { useState } from "react";
import FormFilterAdmin from "../components/FormFilterAdmin";
import HeadingAdmin from "../components/HeadingAdmin";
import ResultsMainAdmin from "../components/MainAdmin/ResultsMainAdmin";

const listInput = [
  <Col span={6} key={1}>
    <Form.Item name="member_name">
      <Input placeholder="Tên thành viên" allowClear />
    </Form.Item>
  </Col>,
  <Col span={6} key={2}>
    <Form.Item name="subject_name">
      <Input placeholder="Tên chuyên đề/ tên chương" allowClear />
    </Form.Item>
  </Col>,
  <Col span={6} key={3}>
    <Form.Item name="type">
      <Select placeholder="Loại kết quả" allowClear>
        <Select.Option value={1}>Chuyên đề</Select.Option>
        <Select.Option value={2}>Chương</Select.Option>
      </Select>
    </Form.Item>
  </Col>,
];

export default function ResultsAdmin() {
  // Data filter
  const [filter, setFilter] = useState({});

  const filterChange = (val) => {
    const newVal = {
      ...val,
      member_name: val?.member_name === "" ? undefined : val?.member_name,
      subject_name: val?.subject_name === "" ? undefined : val?.subject_name,
    };
    setFilter({ ...newVal });
  };

  return (
    <>
      <HeadingAdmin title="Danh sách kết quả" />
      <FormFilterAdmin listInput={listInput} onFilterChange={filterChange} />
      <ResultsMainAdmin filter={filter} />
    </>
  );
}
