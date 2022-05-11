import React from "react";
import "./index.css";
import Lottie from "lottie-react";
import Page404v2 from "../lotties/page404v2.json";

export default function NotFoundPage() {
  return (
    <div className="page404">
      <Lottie
        className="svg"
        animationData={Page404v2}
        autoPlay={true}
        loop={true}
      />
    </div>
  );
}
