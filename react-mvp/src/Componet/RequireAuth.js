import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "./Auth";

export const RequireAuth = ({ children }) => {
  const auth = useAuth();
  //   const navigate = useNavigate();

  if (!auth.user) {
    return <Navigate to="/" />;
  }
  return children;
};
