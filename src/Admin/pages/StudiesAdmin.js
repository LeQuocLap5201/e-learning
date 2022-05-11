import { Col, DatePicker, Form, Input, Select } from "antd";
import React, { useState } from "react";
import FormFilterAdmin from "../components/FormFilterAdmin";
import HeadingAdmin from "../components/HeadingAdmin";
import StudiesMainAdmin from "../components/MainAdmin/StudiesMainAdmin";

const dateFormat = "DD-MM-YYYY";

export default function StudiesAdmin() {
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
      <Form.Item name="id">
        <Input placeholder="ID" allowClear />
      </Form.Item>
    </Col>,
    <Col span={6} key={2}>
      <Form.Item name="title">
        <Input placeholder="Tên chuyên đề" allowClear />
      </Form.Item>
    </Col>,
    <Col span={6} key={3}>
      <Form.Item name="target">
        <Select
          showSearch
          placeholder="Đối tượng"
          optionFilterProp="children"
          filterOption={(input, option) =>
            option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
          }
        >
          <Select.Option value="jack">Jack 1</Select.Option>
          <Select.Option value="lucy">Lucy 1</Select.Option>
          <Select.Option value="tom">Tom 1</Select.Option>
        </Select>
      </Form.Item>
    </Col>,
    <Col span={6} key={4}>
      <Form.Item name="status">
        <Select placeholder="Trạng thái" allowClear>
          <Select.Option value={1}>Chưa phát hành</Select.Option>
          <Select.Option value={-1}>Hủy bài học</Select.Option>
          <Select.Option value={2}>Phát hành</Select.Option>
          <Select.Option value={-2}>Tạm ngưng</Select.Option>
        </Select>
      </Form.Item>
    </Col>,
    <Col span={6} key={5}>
      <Form.Item name="created_from">
        <DatePicker
          placeholder="Ngày phát hành từ"
          onChange={(val) => setDateFrom(val)}
          disabledDate={disabledStartDate}
          format={dateFormat}
        />
      </Form.Item>
    </Col>,
    <Col span={6} key={6}>
      <Form.Item name="created_to">
        <DatePicker
          placeholder="Ngày phát hành đến"
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
      id: val?.id === "" ? undefined : val?.id,
      title: val?.title === "" ? undefined : val?.title,
      created_from: val["created_from"]?.format("YYYY-MM-DD"),
      created_to: val["created_to"]?.format("YYYY-MM-DD"),
    };
    setFilter({ ...newVal });
  };

  return (
    <>
      <HeadingAdmin title={"Danh sách bài học"} />
      <FormFilterAdmin listInput={listInput} onFilterChange={filterChange} />
      <StudiesMainAdmin filter={filter} />
    </>
  );
}
