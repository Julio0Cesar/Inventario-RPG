import citacaoIcon from '../../public/icons/itens/descrever/citacao-icon.png'
import raridadeIcon from '../../public/icons/itens/descrever/raridade-icon.png'
import pesoIcon from '../../public/icons/itens/descrever/peso-icon.png'
import precoIcon from '../../public/icons/itens/descrever/preco-icon.png'
import alcanceIcon from '../../public/icons/itens/descrever/alcance-icon.png'
import empunhaduraIcon from '../../public/icons/itens/descrever/empunhadura-icon.png'
import encantamentoIcon from '../../public/icons/itens/descrever/encantamento-icon.png'
import tipoDanoIcon from '../../public/icons/itens/descrever/tipoDano-icon.png'
import d20Icon from '../../public/icons/itens/descrever/d20-icon.png'
import swordIcon from '../../public/icons/itens/descrever/sword-icon.png'
import amuletoIcon from '../../public/icons/itens/descrever/amuleto-icon.png'
import anelIcon from '../../public/icons/itens/descrever/anel-icon.png'
import luvaIcon from '../../public/icons/itens/descrever/luva-icon.png'
import calcadoIcon from '../../public/icons/itens/descrever/botas-icon.png'
import armaduraLeveIcon from '../../public/icons/itens/descrever/armadura-leve-icon.png'
import armaduraMediaIcon from '../../public/icons/itens/descrever/armadura-media-icon.png'
import armaduraPesadaIcon from '../../public/icons/itens/descrever/armadura-pesada-icon.png'
import chapeuIcon from '../../public/icons/itens/descrever/chapeu-icon.png'
import escudoIcon from '../../public/icons/itens/descrever/escudo-icon.png'
import capaIcon from '../../public/icons/itens/descrever/capa-icon.png'
import bonusIcon from '../../public/icons/itens/descrever/bonus-icon.png'

export const citacao = citacaoIcon
export const raridade = raridadeIcon
export const peso = pesoIcon
export const preco = precoIcon
export const alcance = alcanceIcon
export const empunhadura = empunhaduraIcon
export const encantamento = encantamentoIcon
export const tipoDano = tipoDanoIcon
export const d20 = d20Icon
export const bonus = bonusIcon


export const iconesPorTipo: Record<string, string> = {
  rapieira: swordIcon,
  amuleto: amuletoIcon,
  escudo: escudoIcon,
  capa: capaIcon,
  anel: anelIcon,
  luva: luvaIcon,
  capacetes: chapeuIcon,
  botas: calcadoIcon,
  "Armadura Leve": armaduraLeveIcon,
  "Armadura Media": armaduraMediaIcon,
  "Armadura Pesada": armaduraPesadaIcon,
}

export const definirIcon = (tipo: string) => {
  return iconesPorTipo[tipo] 
}