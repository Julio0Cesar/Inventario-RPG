import type { IHomeCard } from './interfaces/IHomeCard'
import type { ILoginData } from './interfaces/ILoginData'
import type { IEquipamentosData } from './interfaces/IEquipamentosData'
import HomeCardData from './data/HomeCardData.json'
import LoginUserData from './data/LoginUserData.json'
import ItensEquipamentosData from './data/ItensEquipamentosData.json'

export function getCardsData(): IHomeCard[] {return HomeCardData}

export function getLoginUsers(): ILoginData {return LoginUserData}

export function getEquipamentos(): IEquipamentosData {return ItensEquipamentosData}
