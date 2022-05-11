import React from "react";
import BreadcrumbAdmin from "../components/BreadcrumbAdmin";
import Footer from "../components/Footer";
import AddMember from "../components/FormAdd/AddMember";

export default function AddMemberAdmin() {
  return (
    <>
      <BreadcrumbAdmin
        namePrimaryLink="Danh sách thành viên"
        primaryLink="members"
        nameSubLink="Thêm thành viên"
      />
      <AddMember />
      <div style={{ margin: "25px 0" }}>
        <Footer />
      </div>
    </>
  );
}
