import React from "react";
import BreadcrumbAdmin from "../components/BreadcrumbAdmin";
import FormDetailStudy from "../components/DetailAdmin/FormDetailStudy";
import Footer from "../components/Footer";
import DetailStudySecond from "../components/TableSecond/DetailStudySecond";

export default function DetailStudyAdmin() {
  return (
    <div className="detail-study-admin">
      <BreadcrumbAdmin
        namePrimaryLink="Danh sách bài học"
        primaryLink="studies"
        nameSubLink="Chi tiết bài học"
      />
      <FormDetailStudy />
      <DetailStudySecond />
      <div style={{ margin: "25px 0" }}>
        <Footer />
      </div>
    </div>
  );
}
