import { Col, Form, Input } from "antd";
import React, { useState } from "react";
import FormFilterAdmin from "../components/FormFilterAdmin";
import HeadingAdmin from "../components/HeadingAdmin";
import CertificatesMainAdmin from "../components/MainAdmin/CertificatesMainAdmin";

const listInput = [
  <Col span={6} key={1}>
    <Form.Item name="id">
      <Input placeholder="ID" allowClear />
    </Form.Item>
  </Col>,
  <Col span={6} key={2}>
    <Form.Item name="title">
      <Input placeholder="Tên chuyên đề" allowClear />
    </Form.Item>
  </Col>,
];

export default function CertificatesAdmin() {
  // Data filter
  const [filter, setFilter] = useState({});

  const filterChange = (val) => {
    const newVal = {
      ...val,
      id: val?.id === "" ? undefined : val?.id,
      title: val?.title === "" ? undefined : val?.title,
    };
    setFilter({ ...newVal });
  };

  return (
    <>
      <HeadingAdmin title="Danh sách Certificates" />
      <FormFilterAdmin listInput={listInput} onFilterChange={filterChange} />
      <CertificatesMainAdmin filter={filter} />
    </>
  );
}
