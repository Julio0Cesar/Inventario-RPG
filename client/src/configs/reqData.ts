import type { IHomeCard } from './types/IHomeCard'
import HomeCardData from './data/HomeCardData.json'

export function getCardsData(): IHomeCard[] {
  return HomeCardData
}
