import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import "antd/dist/antd.min.css";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import NotFoundPage from "./NotFoundPage";
import Admin from "./Admin";
import Student from "./Student";
// import CertificatesDetail from "./CertificatesDetail";
// import LoginAdmin from "./Admin/pages/LoginAdmin";
// import LayoutAdmin from "./Admin/pages/LayoutAdmin";
import MembersAdmin from "./Admin/pages/MembersAdmin";
import StudiesAdmin from "./Admin/pages/StudiesAdmin";
import EtestsAdmin from "./Admin/pages/EtestsAdmin";
import CertificatesAdmin from "./Admin/pages/CertificatesAdmin";
import ResultsAdmin from "./Admin/pages/ResultsAdmin";
import UsersAdmin from "./Admin/pages/UsersAdmin";
import AddMemberAdmin from "./Admin/pages/AddMemberAdmin";
import DetailMemberAdmin from "./Admin/pages/DetailMemberAdmin";
import AddStudiesAdmin from "./Admin/pages/AddStudiesAdmin";
import DetailStudyAdmin from "./Admin/pages/DetailStudyAdmin";
import AddEtestsAdmin from "./Admin/pages/AddEtestsAdmin";
import DetailEtestAdmin from "./Admin/pages/DetailEtestAdmin";
import DetailCertificateAdmin from "./Admin/pages/DetailCertificateAdmin";
import AddUsersAdmin from "./Admin/pages/AddUsersAdmin";
import DetailUserAdmin from "./Admin/pages/DetailUserAdmin";
// import LoginStudent from "./Student/pages/LoginStudent";
// import LayoutStudent from "./Student/pages/LayoutStudent";
import HomeStudent from "./Student/pages/HomeStudent";
import IntroduceStudent from "./Student/pages/IntroduceStudent";
import CoursesStudent from "./Student/pages/CoursesStudent";
import ResultsStudent from "./Student/pages/ResultsStudent";
import InfoStudent from "./Student/pages/InfoStudent";
import ChangePassStudent from "./Student/pages/ChangePassStudent";
import DetailCourseStudent from "./Student/pages/DetailCourseStudent";
import ContentCourseStudent from "./Student/pages/ContentCourseStudent";
import DetailTestStudent from "./Student/pages/DetailTestStudent";
// import ContentTestStudent from "./Student/pages/ContentTestStudent";
import { Spin } from "antd";

const LayoutStudent = React.lazy(() => import("./Student/pages/LayoutStudent"));
const LoginStudent = React.lazy(() => import("./Student/pages/LoginStudent"));
const ContentTestStudent= React.lazy(() => import("./Student/pages/ContentTestStudent"));

const LayoutAdmin= React.lazy(() => import("./Admin/pages/LayoutAdmin"));
const LoginAdmin= React.lazy(() => import("./Admin/pages/LoginAdmin"));

const CertificatesDetail= React.lazy(() => import("./CertificatesDetail"));

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Suspense
        fallback={
          <div
            style={{
              height: "100vh",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Spin size="large" />
          </div>
        }
      >
        <Routes>
          <Route path="/" element={<App />}>
            <Route index element={<Navigate to={"/student"} />} />
            <Route path="student" element={<Student />}>
              <Route path="" element={<LayoutStudent />}>
                <Route index element={<Navigate to={"home"} />} />
                <Route path="home" element={<HomeStudent />} />
                <Route path="introduce" element={<IntroduceStudent />} />
                <Route path="courses" element={<CoursesStudent />} />
                <Route
                  path="courses/:courseId"
                  element={<DetailCourseStudent />}
                />
                <Route
                  path="courses/:courseId/:contentId"
                  element={<ContentCourseStudent />}
                />
                <Route path="results" element={<ResultsStudent />} />
                <Route path="test/:testId" element={<DetailTestStudent />} />
                <Route path="info" element={<InfoStudent />} />
                <Route path="changePass" element={<ChangePassStudent />} />
              </Route>
              <Route
                path="test/:testId/:contentId"
                element={<ContentTestStudent />}
              />
              <Route path="login" element={<LoginStudent />} />
            </Route>
            <Route path="admin" element={<Admin />}>
              <Route path="" element={<LayoutAdmin />}>
                <Route index element={<Navigate to={"members"} />} />
                <Route path="members" element={<MembersAdmin />} />
                <Route path="members/add" element={<AddMemberAdmin />} />
                <Route
                  path="members/:memberId"
                  element={<DetailMemberAdmin />}
                />
                <Route path="studies" element={<StudiesAdmin />} />
                <Route path="studies/add" element={<AddStudiesAdmin />} />
                <Route path="studies/:studyId" element={<DetailStudyAdmin />} />
                <Route path="e-tests" element={<EtestsAdmin />} />
                <Route path="e-tests/add" element={<AddEtestsAdmin />} />
                <Route path="e-tests/:testId" element={<DetailEtestAdmin />} />
                <Route path="certificates" element={<CertificatesAdmin />} />
                <Route
                  path="certificates/:certificateId"
                  element={<DetailCertificateAdmin />}
                />
                <Route path="results" element={<ResultsAdmin />} />
                <Route path="users" element={<UsersAdmin />} />
                <Route path="users/add" element={<AddUsersAdmin />} />
                <Route path="users/:userId" element={<DetailUserAdmin />} />
              </Route>
              <Route path="login" element={<LoginAdmin />} />
            </Route>
            <Route
              path="certificates/:certificatesId"
              element={<CertificatesDetail />}
            />
          </Route>
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
