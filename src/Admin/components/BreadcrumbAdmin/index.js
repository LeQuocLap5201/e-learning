import React from "react";
import PropTypes from "prop-types";
import "./index.css";
import { Breadcrumb } from "antd";
import { Link } from "react-router-dom";

BreadcrumbAdmin.propTypes = {
  primaryLink: PropTypes.string,
  namePrimaryLink: PropTypes.string,
  nameSubLink: PropTypes.string,
};

BreadcrumbAdmin.defaultProps = {
  primaryLink: "",
  namePrimaryLink: "Trang chủ",
  nameSubLink: "",
};

function BreadcrumbAdmin({ primaryLink, namePrimaryLink, nameSubLink }) {
  return (
    <Breadcrumb className="breadcrumb-admin">
      <Breadcrumb.Item>
        <Link to={`/admin/${primaryLink}`}>{namePrimaryLink}</Link>
      </Breadcrumb.Item>
      {nameSubLink && <Breadcrumb.Item>{nameSubLink}</Breadcrumb.Item>}
    </Breadcrumb>
  );
}

export default BreadcrumbAdmin;
