import React from "react";
import PropTypes from "prop-types";
import "./index.css";

HeadingAdmin.propTypes = {
  title: PropTypes.string,
};

HeadingAdmin.defaultProps = {
  title: "Danh sách",
};

function HeadingAdmin({ title }) {
  return <p className="heading-admin">{title}</p>;
}

export default HeadingAdmin;
