import { useNavigate } from "react-router-dom";
import { useAuthStore } from "../zustand/authStore";
import Box from "../components/common/Box";
import Title from "../components/common/Title";
import { useQuery } from "@tanstack/react-query";
import { getJsonPlaceholder } from "../api/api.json";

function Home() {
  const user = useAuthStore((state) => state.user);
  const navigate = useNavigate();
  const clearUser = useAuthStore((state) => state.clearUser);

  const { data, isPending, isError } = useQuery({
    queryKey: ["jsonPlaceholder"],
    queryFn: getJsonPlaceholder,
  });

  if (isPending) {
    return <div>로딩중입니다...</div>;
  }

  if (isError) {
    return <div>데이터 조회 중 오류가 발생했습니다.</div>;
  }

  console.log(data);

  return (
    <Box>
      <Title title="메인 페이지" />
      <div className="flex flex-col gap-3">
        {user ? (
          <div className="flex justify-center items-center">
            <img
              src={user.avatar}
              alt="Avatar"
              className="w-10 h-10 object-cover rounded-full"
            />
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
        <div className="flex flex-col gap-3">
          <h2 className="text-center font-bold text-2xl">
            JSON Placeholder 테스트
          </h2>
          {data &&
            data.map((todo: any) => {
              return (
                <div key={todo.id} className="flex gap-2 border p-2 rounded-lg">
                  {todo.completed ? (
                    <p className="text-green-700 flex-shrink-0">완료!</p>
                  ) : (
                    <p className="text-red-700 flex-shrink-0">진행 중</p>
                  )}
                  <p>{todo.title}</p>
                </div>
              );
            })}
        </div>
      </div>
    </Box>
  );
}

export default Home;
