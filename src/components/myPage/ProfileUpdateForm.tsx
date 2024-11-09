import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuthStore } from "../../zustand/authStore";
import { updateProfile } from "../../api/api.auth";
import InputField from "../common/InputField";

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
    <form
      onSubmit={handleProfileChange}
      className="flex flex-col items-center gap-3"
    >
      {user && (
        <img
          src={user.avatar}
          className="w-[200px] h-[200px] object-cover rounded-full"
        />
      )}
      <InputField
        title="닉네임"
        value={newNickname}
        type="text"
        setState={setNewNickname}
        placeholder="닉네임을 입력하세요."
      />
      <label
        htmlFor="profileImg"
        className="w-full bg-green-500 rounded text-white p-2 text-center cursor-pointer"
      >
        이미지 변경
      </label>
      <input
        id="profileImg"
        type="file"
        onChange={handleAvatarChange}
        className="hidden"
      />
      <button
        type="submit"
        className="w-full bg-blue-400 rounded text-white p-2"
      >
        프로필 수정
      </button>
    </form>
  );
}

export default ProfileUpdateForm;
