import React from "react";
import BreadcrumbAdmin from "../components/BreadcrumbAdmin";
import Footer from "../components/Footer";
import AddMember from "../components/FormAdd/AddMember";
import StudiesSecond from "../components/TableSecond/StudiesSecond";
import TestsSecond from "../components/TableSecond/TestsSecond";
import CertificatesSecond from "../components/TableSecond/CertificatesSecond";

export default function DetailMemberAdmin() {
  return (
    <div className="detail-member-admin">
      <BreadcrumbAdmin
        namePrimaryLink="Danh sách thành viên"
        primaryLink="members"
        nameSubLink="Chi tiết thành viên"
      />
      <AddMember showDetail />
      <StudiesSecond />
      <TestsSecond />
      <CertificatesSecond />
      <div style={{ margin: "25px 0" }}>
        <Footer />
      </div>
    </div>
  );
}
