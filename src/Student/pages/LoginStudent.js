import React from "react";
import LoginFormStudent from "../components/LoginFormStudent";

export default function LoginStudent() {
  return (
    <div className="login-student">
      <div className="login-student__logo">
        <img src="/img/iconMediad.png" alt="" />
      </div>
      <LoginFormStudent />
    </div>
  );
}
