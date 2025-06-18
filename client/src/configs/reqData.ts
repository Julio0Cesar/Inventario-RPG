import type { IHomeCard } from './interfaces/IHomeCard'
import type { ILoginUser } from './interfaces/ILoginUser'
import HomeCardData from './data/HomeCardData.json'
import LoginUserData from './data/LoginUserData.json'

export function getCardsData(): IHomeCard[] {return HomeCardData}

export function getLoginUsers(): ILoginUser[] {return LoginUserData}
