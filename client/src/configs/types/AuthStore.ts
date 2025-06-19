import type { ILogin } from "../interfaces/ILogin"

export type AuthStore = {
  user: ILogin | null
  login: (user: ILogin) => void
  logout: () => void
}