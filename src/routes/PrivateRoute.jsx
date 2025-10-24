import React from 'react';
import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";
import { Navigate } from "react-router";
import Loader from '../components/Loader';

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);

  if (loading) return <Loader></Loader>;

  return user ? children : <Navigate to="/auth/login" replace />;
};

export default PrivateRoute;
