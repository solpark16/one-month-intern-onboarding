import React, { useState } from "react";
import { login } from "../../../api/api.auth";
import { useNavigate } from "react-router-dom";
import { useAuthStore } from "../../../zustand/authStore";
import InputField from "../../common/InputField";

function LogInForm() {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const setUser = useAuthStore((state) => state.setUser);

  const handleLogIn = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!id.trim() || !password.trim()) {
      alert("아이디, 비밀번호를 모두 입력해주세요.");
      return;
    }
    const { userId, nickname, avatar } = await login({ id, password });
    setUser({ userId, nickname, avatar });
    alert("로그인 되었습니다.");
    navigate("/");
  };
  return (
    <form onSubmit={handleLogIn} className="flex flex-col gap-3">
      <InputField
        title="아이디"
        value={id}
        type="text"
        setState={setId}
        placeholder="아이디를 입력하세요."
      />
      <InputField
        title="비밀번호"
        value={password}
        type="password"
        setState={setPassword}
        placeholder="비밀번호를 입력하세요."
      />
      <button
        type="submit"
        className="w-full bg-blue-400 rounded text-white p-2"
      >
        로그인
      </button>
    </form>
  );
}

export default LogInForm;
