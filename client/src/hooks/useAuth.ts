import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import type { AuthStore } from '../configs/types/AuthStore'

export const useAuth = create<AuthStore>()(persist((set) =>({
      user: null,
      login: (user) => set({ user }),
      logout: () => set({ user: null }),
    }),
    {
      name: 'auth-storage',
    }
  )
)
