import type { IHomeCard } from './types/IHomeCard'
import type { ILoginUser } from './types/ILoginUser'
import HomeCardData from './data/HomeCardData.json'
import LoginUserData from './data/LoginUserData.json'

export function getCardsData(): IHomeCard[] {return HomeCardData}

export function getLoginUsers(): ILoginUser[] {return LoginUserData}
