import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const useAuth = () => {
  const token = JSON.parse(localStorage.getItem("e-learning-student"));

  if (token) {
    return true;
  } else {
    return false;
  }
};

export default function PrivateRouteStudent() {
  const isAuth = useAuth();

  return isAuth ? <Outlet /> : <Navigate to="/student/login" />;
}
