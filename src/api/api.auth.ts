import authApi from "../axios/authApi";

export const register = async ({
  id,
  password,
  nickname,
}: {
  id: string;
  password: string;
  nickname: string;
}) => {
  try {
    const response = await authApi.post("/register", {
      id,
      password,
      nickname,
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const login = async ({
  id,
  password,
}: {
  id: string;
  password: string;
}) => {
  try {
    const response = await authApi.post("/login?expiresIn=30m", {
      id,
      password,
    });
    localStorage.setItem("accessToken", response.data.accessToken);
    return response.data;
  } catch (error) {
    // alert(error?.response?.data?.message);
  }
};

export const getUserInfo = async () => {
  const accessToken = localStorage.getItem("accessToken");
  if (accessToken) {
    try {
      const { data } = await authApi.get("/user", {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });
      return data;
    } catch (error) {
      alert("액세스 토큰이 만료되었습니다.");
      localStorage.clear();
    }
  }
};

export const updateProfile = async (formData: FormData) => {
  const accessToken = localStorage.getItem("accessToken");
  if (accessToken) {
    try {
      const { data } = await authApi.patch("/profile", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${accessToken}`,
        },
      });
      return data;
    } catch (error) {
      alert("프로필 수정을 실패했습니다.");
    }
  }
};
