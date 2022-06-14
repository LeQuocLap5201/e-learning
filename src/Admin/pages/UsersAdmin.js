import { Col, Form, Input, Select } from "antd";
import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import FormFilterAdmin from "../components/FormFilterAdmin";
import HeadingAdmin from "../components/HeadingAdmin";
import UsersMainAdmin from "../components/MainAdmin/UsersMainAdmin";

const queryString = require("query-string");

const listInput = [
  <Col span={6} key={1}>
    <Form.Item name="id">
      <Input placeholder="ID" allowClear />
    </Form.Item>
  </Col>,
  <Col span={6} key={2}>
    <Form.Item name="username">
      <Input placeholder="Tên người dùng" allowClear />
    </Form.Item>
  </Col>,
  <Col span={6} key={3}>
    <Form.Item name="phone">
      <Input placeholder="Số điện thoại" allowClear />
    </Form.Item>
  </Col>,
  <Col span={6} key={4}>
    <Form.Item name="type">
      <Select placeholder="Quyền hạn" allowClear>
        <Select.Option value={1}>Admin System</Select.Option>
        <Select.Option value={2}>Manager</Select.Option>
        <Select.Option value={3}>Executive</Select.Option>
      </Select>
    </Form.Item>
  </Col>,
  <Col span={6} key={5}>
    <Form.Item name="status">
      <Select placeholder="Trạng thái" allowClear>
        <Select.Option value={1}>Hoạt động</Select.Option>
        <Select.Option value={-1}>Đã khóa</Select.Option>
      </Select>
    </Form.Item>
  </Col>,
];

export default function UsersAdmin() {
  // Get Params URL
  const location = useLocation();
  const queryParams = queryString.parse(location.search);
  // Data filter
  const [filter, setFilter] = useState(queryParams);

  const filterChange = (val) => {
    const newVal = {
      ...val,
      id: val?.id === "" ? undefined : val?.id,
      username: val?.username === "" ? undefined : val?.username,
      phone: val?.phone === "" ? undefined : val?.phone,
    };
    setFilter({ ...newVal });
  };

  console.log("filter: ", filter);

  return (
    <>
      <HeadingAdmin title="Danh sách người dùng" />
      <FormFilterAdmin listInput={listInput} onFilterChange={filterChange} />
      <UsersMainAdmin filter={filter} />
    </>
  );
}
