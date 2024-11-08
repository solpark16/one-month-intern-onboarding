import React, { ReactNode } from "react";
import { useAuthStore } from "../zustand/authStore";
import { Navigate } from "react-router-dom";

interface PrivateRouteProps {
  children: ReactNode;
}

function PrivateRoute({ children }: PrivateRouteProps) {
  const user = useAuthStore((state) => state.user);

  if (!user) {
    alert("로그인한 회원만 이용 가능합니다.");
    return <Navigate to="/login" />;
  }

  return <>{children}</>;
}

export default PrivateRoute;
