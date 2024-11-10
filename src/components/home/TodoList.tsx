import { useQuery } from "@tanstack/react-query";
import { getJsonPlaceholder } from "../../api/api.json";

interface todo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

function TodoList() {
  const {
    data: todos,
    isPending,
    isError,
  } = useQuery({
    queryKey: ["todos"],
    queryFn: getJsonPlaceholder,
  });

  if (isPending) {
    return <div>로딩중입니다...</div>;
  }

  if (isError) {
    return <div>데이터 조회 중 오류가 발생했습니다.</div>;
  }

  return (
    <div className="flex flex-col gap-3">
      <h2 className="text-center font-bold text-2xl">
        JSON Placeholder 테스트
      </h2>
      {todos &&
        todos.map((todo: todo) => {
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
  );
}

export default TodoList;
