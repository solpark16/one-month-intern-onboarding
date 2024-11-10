import { useNavigate } from "react-router-dom";
import { useAuthStore } from "../zustand/authStore";
import Box from "../components/common/Box";
import Title from "../components/common/Title";
import TodoList from "../components/home/todoList";

function Home() {
  const user = useAuthStore((state) => state.user);
  const navigate = useNavigate();
  const clearUser = useAuthStore((state) => state.clearUser);

  return (
    <Box>
      <Title title="메인 페이지" />
      <div className="flex flex-col gap-3">
        {user ? (
          <div className="flex justify-center items-center gap-2">
            {user.avatar ? (
              <img
                src={user.avatar}
                alt="Avatar"
                className="w-10 h-10 object-cover rounded-full"
              />
            ) : (
              <div className="w-10 h-10 rounded-full bg-gray-400"></div>
            )}
            <p>{user.nickname}님, 안녕하세요!</p>
          </div>
        ) : (
          <p className="text-center">로그인되지 않았습니다.</p>
        )}
        <button
          onClick={() => {
            navigate("/mypage");
          }}
          className="w-full bg-blue-400 rounded text-white p-2"
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
            className="w-full bg-green-500 rounded text-white p-2 text-center cursor-pointer"
          >
            로그아웃
          </button>
        ) : (
          <button
            onClick={() => navigate("/login")}
            className="w-full bg-green-500 rounded text-white p-2 text-center cursor-pointer"
          >
            로그인
          </button>
        )}
        <TodoList />
      </div>
    </Box>
  );
}

export default Home;
