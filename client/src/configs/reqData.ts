import type { IHomeCard } from './interfaces/IHomeCard'
import type { ILoginData } from './interfaces/ILoginData'
import type { IEquipamentosData } from './interfaces/IEquipamentosData'
import type { IConsumiveisData } from './interfaces/IConsumiveisData'
import type { IDiversosData } from './interfaces/IDiversosData'
import HomeCardData from './data/HomeCardData.json'
import LoginUserData from './data/LoginUserData.json'
import ItensEquipamentosData from './data/ItensEquipamentosData.json'
import ItensConsumiveisData from './data/ItensConsumiveisData.json'
import ItensDiversosData from './data/ItensDiversosData.json'

export function getCardsData(): IHomeCard[] {return HomeCardData}

export function getLoginUsers(): ILoginData {return LoginUserData}

export function getEquipamentos(): IEquipamentosData {return ItensEquipamentosData}

export function getConsumiveis(): IConsumiveisData {return ItensConsumiveisData}

export function getDiversos(): IDiversosData {return ItensDiversosData}