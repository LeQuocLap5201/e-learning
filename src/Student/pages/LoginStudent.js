import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import LoginFormStudent from "../components/LoginFormStudent";

export default function LoginStudent() {
  const token = JSON.parse(localStorage.getItem("e-learning-student"));
  const navigate = useNavigate();

  useEffect(() => {
    if (token) {
      return navigate("/student");
    }
  }, [navigate, token]);

  return (
    <div className="login-student">
      <div className="login-student__logo">
        <img src="/img/iconMediad.png" alt="" />
      </div>
      <LoginFormStudent />
    </div>
  );
}
