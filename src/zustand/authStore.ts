// authStore.ts
import { create } from "zustand";

interface User {
  userId: string;
  nickname: string;
  avatar: string;
}

interface AuthState {
  user: User | null;
  setUser: (user: User) => void;
  clearUser: () => void;
}

export const useAuthStore = create<AuthState>((set) => ({
  user: null,
  setUser: (user) => set({ user }),
  clearUser: () => {
    set({ user: null });
    localStorage.clear();
  },
}));
