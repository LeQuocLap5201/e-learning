import React from "react";
import BreadcrumbAdmin from "../components/BreadcrumbAdmin";
import AddEtest from "../components/FormAdd/AddEtest";
import Footer from "../components/Footer";

export default function AddEtestsAdmin() {
  return (
    <>
      <BreadcrumbAdmin
        namePrimaryLink="Danh sách bài kiểm tra"
        primaryLink="e-tests"
        nameSubLink="Thêm bài kiểm tra"
      />
      <AddEtest />
      <div style={{ margin: "25px 0" }}>
        <Footer />
      </div>
    </>
  );
}
