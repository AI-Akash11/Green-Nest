import React from "react";
import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";
import { Navigate, useLocation } from "react-router";
import Loader from "../components/Loader";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();

  console.log(loading);

  if (loading) return <Loader></Loader>;

  if (user) {
    return children;
  } else {
    return <Navigate state={location.pathname} to="/auth/login" />;
  }
};

export default PrivateRoute;
