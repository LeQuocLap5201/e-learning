import React from "react";
import PropTypes from "prop-types";
import "./index.css";
import { useNavigate } from "react-router-dom";
import { Button } from "antd";
import { ArrowLeftOutlined } from "@ant-design/icons";

ButtonBack.propTypes = { title: PropTypes.string };

ButtonBack.defaultProps = {
  title: "Quay lại",
};

function ButtonBack({ title }) {
  const navigate = useNavigate();

  return (
    <Button
      type="link"
      style={{ color: "#000", padding: 0 }}
      onClick={() => navigate(-1)}
      icon={<ArrowLeftOutlined />}
    >
      {title}
    </Button>
  );
}

export default ButtonBack;
