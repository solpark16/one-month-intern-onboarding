import React, { ReactNode } from "react";
import { useAuthStore } from "../zustand/authStore";
import { Navigate } from "react-router-dom";

interface PublicRouteProps {
  children: ReactNode;
}

function PublicRoute({ children }: PublicRouteProps) {
  const user = useAuthStore((state) => state.user);
  if (user) {
    return <Navigate to="/" />;
  }

  return <>{children}</>;
}

export default PublicRoute;
