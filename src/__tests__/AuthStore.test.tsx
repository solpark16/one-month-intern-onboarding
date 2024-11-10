import { render, screen, fireEvent } from "@testing-library/react";
import { useAuthStore } from "../zustand/authStore"; // zustand store 경로에 맞게 수정

describe("Zustand authStore 테스트", () => {
  test("setUser 메서드를 호출하여 로그인 정보 저장 확인", () => {
    const TestComponent = () => {
      const { user, setUser, clearUser } = useAuthStore((state) => ({
        user: state.user,
        setUser: state.setUser,
        clearUser: state.clearUser,
      }));

      const handleLogin = () => {
        setUser({ userId: "1234", nickname: "JohnDoe", avatar: "avatarUrl" });
      };

      const handleLogout = () => {
        clearUser();
      };

      return (
        <div>
          <button onClick={handleLogin}>로그인</button>
          <button onClick={handleLogout}>로그아웃</button>
          {user && (
            <div>
              <div>{user.userId}</div>
              <div>{user.nickname}</div>
              <div>{user.avatar}</div>
            </div>
          )}
        </div>
      );
    };

    render(<TestComponent />);

    // 로그인 버튼 클릭
    fireEvent.click(screen.getByText("로그인"));

    // 로그인 후 상태값이 제대로 업데이트 되었는지 확인
    expect(screen.getByText("1234")).toBeInTheDocument();
    expect(screen.getByText("JohnDoe")).toBeInTheDocument();
    expect(screen.getByText("avatarUrl")).toBeInTheDocument();

    // 로그아웃 버튼 클릭
    fireEvent.click(screen.getByText("로그아웃"));

    // 로그아웃 후 상태값이 null로 리셋되었는지 확인
    expect(screen.queryByText("1234")).not.toBeInTheDocument();
    expect(screen.queryByText("JohnDoe")).not.toBeInTheDocument();
    expect(screen.queryByText("avatarUrl")).not.toBeInTheDocument();
  });

  test("clearUser 호출 시 localStorage가 비어 있는지 확인", () => {
    const TestComponent = () => {
      const { clearUser } = useAuthStore((state) => ({
        clearUser: state.clearUser,
      }));

      const handleLogout = () => {
        clearUser();
      };

      return (
        <div>
          <button onClick={handleLogout}>로그아웃</button>
        </div>
      );
    };

    render(<TestComponent />);

    // 로그아웃 버튼 클릭
    fireEvent.click(screen.getByText("로그아웃"));

    // localStorage가 비어 있는지 확인
    expect(localStorage.length).toBe(0); // localStorage.clear()가 호출되어야 하므로 비어 있어야 함
  });
});
