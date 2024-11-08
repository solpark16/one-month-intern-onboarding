import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuthStore } from "../zustand/authStore";

function Home() {
  const user = useAuthStore((state) => state.user);
  const navigate = useNavigate();
  const clearUser = useAuthStore((state) => state.clearUser);

  return (
    <div>
      <button
        onClick={() => {
          navigate("/mypage");
        }}
      >
        마이 페이지
      </button>
      {user ? (
        <button
          onClick={() => {
            alert("로그아웃되었습니다.");
            clearUser();
            navigate("/login");
          }}
        >
          로그아웃
        </button>
      ) : (
        <button onClick={() => navigate("/login")}>로그인</button>
      )}
      {user ? (
        <div>
          <p>아이디: {user.userId}</p>
          <p>닉네임: {user.nickname}</p>
          <img src={user.avatar} alt="Avatar" />
        </div>
      ) : (
        <p>로그인되지 않았습니다.</p>
      )}
    </div>
  );
}

export default Home;
