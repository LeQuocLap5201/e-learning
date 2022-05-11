import React, { useRef } from "react";
import PropTypes from "prop-types";
import "./index.css";
import { Button, Col, Form, Row } from "antd";
import { ClearOutlined } from "@ant-design/icons";
import debounce from "lodash.debounce";

FormFilterAdmin.propTypes = {
  listInput: PropTypes.array,
  onFilterChange: PropTypes.func,
};

FormFilterAdmin.defaultProps = {
  listInput: [],
  onFilterChange: null,
};

function FormFilterAdmin({ listInput, onFilterChange }) {
  const [form] = Form.useForm();

  const debounceFilter = useRef(
    debounce((nextValue) => onFilterChange(nextValue), 1000)
  ).current;

  const handleValuesChange = (changedValues, allValues) => {
    if (onFilterChange) {
      debounceFilter(allValues);
    }
  };

  return (
    <Form
      form={form}
      name="filter-admin"
      className="filter-admin"
      onValuesChange={handleValuesChange}
    >
      <Row className="filter-admin__main" gutter={20}>
        {listInput}
      </Row>
      <Row className="filter-admin__footer">
        <Col
          span={24}
          style={{
            textAlign: "right",
          }}
        >
          <Button
            icon={<ClearOutlined />}
            onClick={() => {
              form.resetFields();
              if (onFilterChange) {
                return onFilterChange({});
              }
            }}
          >
            Xóa bộ lọc
          </Button>
        </Col>
      </Row>
    </Form>
  );
}

export default FormFilterAdmin;
