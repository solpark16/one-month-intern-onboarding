import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuthStore } from "../../zustand/authStore";
import { updateProfile } from "../../api/api.auth";

function ProfileUpdateForm() {
  const [newNickname, setNewNickname] = useState("");
  const [newAvatar, setNewAvatar] = useState<File | null>(null);
  const navigate = useNavigate();
  const user = useAuthStore((state) => state.user);
  const setUser = useAuthStore((state) => state.setUser);

  useEffect(() => {
    if (user) {
      setNewNickname(user.nickname);
    } else {
    }
  }, [user]);

  const handleAvatarChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files ? e.target.files[0] : null; // 안전하게 파일을 처리
    setNewAvatar(file);
  };

  const handleProfileChange = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (newNickname.length < 1 || 10 < newNickname.length) {
      alert("닉네임은 1~10 글자로 입력해주세요.");
      return;
    }

    const formData = new FormData();
    if (newAvatar) {
      formData.append("avatar", newAvatar);
    }
    formData.append("nickname", newNickname);

    const response = await updateProfile(formData);

    if (response.success && user) {
      setUser(
        response.avatar
          ? { ...user, nickname: response.nickname, avatar: response.avatar }
          : { ...user, nickname: response.nickname }
      );
      navigate("/");
    }
  };

  return (
    <form onSubmit={handleProfileChange}>
      {user && <img src={user.avatar} className="w-[200px] h-[200px]" />}
      <div>
        <label>닉네임</label>
        <input
          type="text"
          value={newNickname}
          onChange={(e) => {
            setNewNickname(e.target.value);
          }}
        />
      </div>
      <div>
        <label>아바타 이미지</label>
        <input type="file" onChange={handleAvatarChange} />
      </div>
      <button type="submit">프로필 수정</button>
    </form>
  );
}

export default ProfileUpdateForm;
