import type { ILoginUser } from "../interfaces/ILoginUser"

export type AuthStore = {
  user: ILoginUser | null
  login: (user: ILoginUser) => void
  logout: () => void
}