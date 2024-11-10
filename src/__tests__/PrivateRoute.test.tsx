import { render, screen, act } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import PrivateRoute from "../routes/PrivateRoute";
import MyPage from "../pages/MyPage";
import { useAuthStore } from "../zustand/authStore";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

jest.mock("../zustand/authStore");

describe("PrivateRoute", () => {
  const queryClient = new QueryClient();

  it("redirects to /login if user is not logged in", async () => {
    (useAuthStore as unknown as jest.Mock).mockReturnValue({ user: null });

    // act를 사용하여 비동기 작업을 기다림
    await act(async () => {
      render(
        <QueryClientProvider client={queryClient}>
          <MemoryRouter initialEntries={["/mypage"]}>
            <PrivateRoute>
              <MyPage />
            </PrivateRoute>
          </MemoryRouter>
        </QueryClientProvider>
      );
    });

    // 테스트 코드
    expect(screen.queryByText("Protected Content")).not.toBeInTheDocument();
    expect(screen.getByText("로그인")).toBeInTheDocument();
  });

  it("renders children if user is logged in", async () => {
    (useAuthStore as unknown as jest.Mock).mockReturnValue({
      user: { name: "Test User" },
    });

    // act를 사용하여 비동기 작업을 기다림
    await act(async () => {
      render(
        <QueryClientProvider client={queryClient}>
          <MemoryRouter initialEntries={["/mypage"]}>
            <PrivateRoute>
              <MyPage />
            </PrivateRoute>
          </MemoryRouter>
        </QueryClientProvider>
      );
    });

    // 테스트 코드
    expect(screen.getByText("Protected Content")).toBeInTheDocument();
  });
});
