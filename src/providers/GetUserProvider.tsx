import { PropsWithChildren, useEffect } from "react";
import { useAuthStore } from "../zustand/authStore";
import { getUserInfo } from "../api/api.auth";

function GetUserProvider({ children }: PropsWithChildren) {
  const setUser = useAuthStore((state) => state.setUser);
  const clearUser = useAuthStore((state) => state.clearUser);

  useEffect(() => {
    getUserInfo().then((res) => {
      if (res) {
        setUser({
          userId: res.id,
          nickname: res.nickname,
          avatar: res.avatar,
        });
      } else {
        clearUser;
      }
    });
  }, []);

  return <>{children}</>;
}

export default GetUserProvider;
