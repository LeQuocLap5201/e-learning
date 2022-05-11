import React from "react";
import BreadcrumbAdmin from "../components/BreadcrumbAdmin";
import Footer from "../components/Footer";
import AddStudy from "../components/FormAdd/AddStudy";

export default function AddStudiesAdmin() {
  return (
    <>
      <BreadcrumbAdmin
        namePrimaryLink="Danh sách bài học"
        primaryLink="studies"
        nameSubLink="Thêm bài học"
      />
      <AddStudy />
      <div style={{ margin: "25px 0" }}>
        <Footer />
      </div>
    </>
  );
}
