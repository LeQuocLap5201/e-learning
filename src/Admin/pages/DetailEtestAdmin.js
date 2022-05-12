import React from "react";
import BreadcrumbAdmin from "../components/BreadcrumbAdmin";
import Footer from "../components/Footer";
import FormDetailTest from "../components/DetailAdmin/FormDetailTest";
import ChapterSecond from "../components/TableSecond/ChapterSecond";
import ThematicSecond from "../components/TableSecond/ThematicSecond";

export default function DetailEtestAdmin() {
  return (
    <div className="detail-etest-admin">
      <BreadcrumbAdmin
        namePrimaryLink="Danh sách bài kiểm tra"
        primaryLink="e-tests"
        nameSubLink="Chi tiết bài kiểm tra"
      />
      <FormDetailTest />
      <ChapterSecond />
      <ThematicSecond />
      <div style={{ margin: "25px 0" }}>
        <Footer />
      </div>
    </div>
  );
}
