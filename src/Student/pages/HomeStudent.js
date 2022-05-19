import React from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import CardCourse from "../components/CardCourse";
import FooterStudent from "../components/FooterStudent";
import { Space } from "antd";
import { Link } from "react-router-dom";
import RelatedCourse from "../components/RelatedCourse";

const options = {
  gap: 20,
  perPage: 2,
  perMove: 1,
  pagination: false,
  breakpoints: {
    850: {
      perPage: 1,
    },
  },
};

const options2 = {
  gap: 20,
  perPage: 3,
  perMove: 1,
  pagination: false,
  breakpoints: {
    1200: {
      perPage: 2,
    },
    700: {
      perPage: 1,
    },
  },
};

export default function HomeStudent() {
  return (
    <div
      style={{
        minHeight: "calc(100vh - 64px)",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      <div className="home-student main-student" style={{ marginBottom: 40 }}>
        <Space
          style={{
            justifyContent: "space-between",
            alignItems: "center",
            width: "100%",
            marginBottom: 15,
          }}
        >
          <h3>Tiến độ học của bạn</h3>
          <Link to="/student/courses" className="link-hover">
            Xem thêm
          </Link>
        </Space>
        <Splide options={options} aria-label="Learning progress">
          <SplideSlide>
            <CardCourse />
          </SplideSlide>
          <SplideSlide>
            <CardCourse />
          </SplideSlide>
          <SplideSlide>
            <CardCourse />
          </SplideSlide>
          <SplideSlide>
            <CardCourse />
          </SplideSlide>
        </Splide>
        <Space
          style={{
            width: "100%",
            marginTop: 40,
            marginBottom: 15,
          }}
        >
          <h3>Chuyên đề khác</h3>
        </Space>
        <Splide options={options2} aria-label="Related Courses">
          <SplideSlide>
            <RelatedCourse />
          </SplideSlide>
          <SplideSlide>
            <RelatedCourse />
          </SplideSlide>
          <SplideSlide>
            <RelatedCourse />
          </SplideSlide>
          <SplideSlide>
            <RelatedCourse />
          </SplideSlide>
        </Splide>
      </div>
      <FooterStudent />
    </div>
  );
}
