import React from "react";
import BreadcrumbAdmin from "../components/BreadcrumbAdmin";
import Footer from "../components/Footer";
import AddUser from "../components/FormAdd/AddUser";

export default function DetailUserAdmin() {
  return (
    <div className="detail-user-admin">
      <BreadcrumbAdmin
        namePrimaryLink="Danh sách người dùng"
        primaryLink="users"
        nameSubLink="Chi tiết người dùng"
      />
      <AddUser showDetail />
      <div style={{ margin: "25px 0" }}>
        <Footer />
      </div>
    </div>
  );
}
