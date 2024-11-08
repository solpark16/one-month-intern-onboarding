import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { register } from "../../../api/api.auth";
import InputField from "../../common/InputField";

function SignUpForm() {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const [nickname, setNickname] = useState("");

  const navigate = useNavigate();

  const handleSignUp = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // 유효성 검사
    if (!id.trim() || !password.trim() || !nickname.trim()) {
      alert("아이디, 비밀번호, 닉네임을 모두 입력해주세요.");
      return;
    }
    if (id.length < 4 || 10 < id.length) {
      alert("아이디는 4~10 글자로 입력해주세요.");
      return;
    }
    if (password.length < 4 || 15 < password.length) {
      alert("비밀번호는 4~15 글자로 입력해주세요.");
      return;
    }
    if (nickname.length < 1 || 10 < nickname.length) {
      alert("닉네임은 1~10 글자로 입력해주세요.");
      return;
    }
    const response = await register({ id, password, nickname });
    console.log(response);
    if (response.success) {
      alert("회원가입이 완료되었습니다.");
      navigate("/login");
    }
  };
  return (
    <form onSubmit={handleSignUp} className="flex flex-col gap-3">
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
      <InputField
        title="닉네임"
        value={nickname}
        type="text"
        setState={setNickname}
        placeholder="닉네임을 입력하세요."
      />
      <button
        type="submit"
        className="w-full bg-blue-400 rounded text-white p-2"
      >
        회원가입
      </button>
    </form>
  );
}

export default SignUpForm;
