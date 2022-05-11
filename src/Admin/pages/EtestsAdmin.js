import { Col, DatePicker, Form, Input, Select } from "antd";
import React, { useState } from "react";
import FormFilterAdmin from "../components/FormFilterAdmin";
import HeadingAdmin from "../components/HeadingAdmin";
import EtestsMainAdmin from "../components/MainAdmin/EtestsMainAdmin";

const dateFormat = "DD-MM-YYYY";

export default function EtestsAdmin() {
  // Layout Form Filter
  const [dateFrom, setDateFrom] = useState(null);
  const [dateTo, setDateTo] = useState(null);

  const disabledStartDate = (startValue) => {
    if (!startValue || !dateTo) {
      return false;
    }
    return startValue.valueOf() > dateTo.valueOf();
  };

  const disabledEndDate = (endValue) => {
    if (!endValue || !dateFrom) {
      return false;
    }
    return endValue.valueOf() < dateFrom.valueOf();
  };

  const listInput = [
    <Col span={6} key={1}>
      <Form.Item name="name">
        <Input placeholder="Tên bài kiểm tra" allowClear />
      </Form.Item>
    </Col>,
    <Col span={6} key={2}>
      <Form.Item name="type">
        <Select placeholder="Loại bài kiểm tra" allowClear>
          <Select.Option value={1}>Bài kiểm tra chuyên đề</Select.Option>
          <Select.Option value={2}>Bài kiểm tra chương</Select.Option>
        </Select>
      </Form.Item>
    </Col>,
    <Col span={6} key={3}>
      <Form.Item name="created_from">
        <DatePicker
          placeholder="Ngày tạo từ"
          onChange={(val) => setDateFrom(val)}
          disabledDate={disabledStartDate}
          format={dateFormat}
        />
      </Form.Item>
    </Col>,
    <Col span={6} key={4}>
      <Form.Item name="created_to">
        <DatePicker
          placeholder="Ngày tạo đến"
          onChange={(val) => setDateTo(val)}
          disabledDate={disabledEndDate}
          format={dateFormat}
        />
      </Form.Item>
    </Col>,
  ];

  // Data filter
  const [filter, setFilter] = useState({});

  const filterChange = (val) => {
    const newVal = {
      ...val,
      name: val?.name === "" ? undefined : val?.name,
      created_from: val["created_from"]?.format("YYYY-MM-DD"),
      created_to: val["created_to"]?.format("YYYY-MM-DD"),
    };
    setFilter({ ...newVal });
  };

  return (
    <>
      <HeadingAdmin title={"Danh sách bài kiểm tra"} />
      <FormFilterAdmin listInput={listInput} onFilterChange={filterChange} />
      <EtestsMainAdmin filter={filter} />
    </>
  );
}
