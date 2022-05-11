import { Col, DatePicker, Form, Input, Select } from "antd";
import React, { useState } from "react";
import FormFilterAdmin from "../components/FormFilterAdmin";
import HeadingAdmin from "../components/HeadingAdmin";
import MembersMainAdmin from "../components/MainAdmin/MembersMainAdmin";

const dateFormat = "DD-MM-YYYY";

export default function MembersAdmin() {
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
      <Form.Item name="full_name">
        <Input placeholder="Tên thành viên" allowClear />
      </Form.Item>
    </Col>,
    <Col span={6} key={2}>
      <Form.Item name="phone">
        <Input placeholder="Số điện thoại" allowClear />
      </Form.Item>
    </Col>,
    <Col span={6} key={3}>
      <Form.Item name="department_id">
        <Select
          showSearch
          placeholder="Khoa-Phòng-Đơn vị"
          optionFilterProp="children"
          // onSearch={handleCreatorSearchChange}
          filterOption={(input, option) =>
            option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
          }
        >
          <Select.Option value="jack">Jack</Select.Option>
          <Select.Option value="lucy">Lucy</Select.Option>
          <Select.Option value="tom">Tom</Select.Option>
          {/* {listCreator.map((creator) => {
            return (
              <Select.Option key={creator.id} value={creator.id}>
                {creator.name}
              </Select.Option>
            );
          })} */}
        </Select>
      </Form.Item>
    </Col>,
    <Col span={6} key={4}>
      <Form.Item name="target">
        <Select
          showSearch
          placeholder="Đối tượng"
          optionFilterProp="children"
          // onSearch={handleCreatorSearchChange}
          filterOption={(input, option) =>
            option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
          }
        >
          <Select.Option value="jack">Jack 1</Select.Option>
          <Select.Option value="lucy">Lucy 1</Select.Option>
          <Select.Option value="tom">Tom 1</Select.Option>
          {/* {listCreator.map((creator) => {
            return (
              <Select.Option key={creator.id} value={creator.id}>
                {creator.name}
              </Select.Option>
            );
          })} */}
        </Select>
      </Form.Item>
    </Col>,
    <Col span={6} key={5}>
      <Form.Item name="created_from">
        <DatePicker
          placeholder="Ngày tạo từ"
          onChange={(val) => setDateFrom(val)}
          disabledDate={disabledStartDate}
          format={dateFormat}
        />
      </Form.Item>
    </Col>,
    <Col span={6} key={6}>
      <Form.Item name="created_to">
        <DatePicker
          placeholder="Ngày tạo đến"
          onChange={(val) => setDateTo(val)}
          disabledDate={disabledEndDate}
          format={dateFormat}
        />
      </Form.Item>
    </Col>,
    <Col span={6} key={7}>
      <Form.Item name="status">
        <Select placeholder="Trạng thái" allowClear>
          <Select.Option value={1}>Hoạt động</Select.Option>
          <Select.Option value={2}>Đã khóa</Select.Option>
        </Select>
      </Form.Item>
    </Col>,
  ];

  // Data filter
  const [filter, setFilter] = useState({});

  const filterChange = (val) => {
    const newVal = {
      ...val,
      full_name: val?.full_name === "" ? undefined : val?.full_name,
      phone: val?.phone === "" ? undefined : val?.phone,
      created_from: val["created_from"]?.format("YYYY-MM-DD"),
      created_to: val["created_to"]?.format("YYYY-MM-DD"),
    };
    setFilter({ ...newVal });
  };

  return (
    <>
      <HeadingAdmin title={"Danh sách thành viên"} />
      <FormFilterAdmin listInput={listInput} onFilterChange={filterChange} />
      <MembersMainAdmin filter={filter} />
    </>
  );
}
