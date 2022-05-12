import React from "react";
import BreadcrumbAdmin from "../components/BreadcrumbAdmin";
import Footer from "../components/Footer";
import AddUser from "../components/FormAdd/AddUser";

export default function AddUsersAdmin() {
  return (
    <>
      <BreadcrumbAdmin
        namePrimaryLink="Danh sách người dùng"
        primaryLink="users"
        nameSubLink="Thêm người dùng"
      />
      <AddUser />
      <div style={{ margin: "25px 0" }}>
        <Footer />
      </div>
    </>
  );
}
