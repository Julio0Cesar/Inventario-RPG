import { Box, Typography } from "@mui/material"
import {
  raridade, peso, preco, alcance, empunhadura,
  encantamento, tipoDano, d20, bonus, definirIcon
} from "../../../../utils/Icons"

const InfoRow = ({ icon, label }: { icon: string, label: string }) => (
  <Box className='flex mb-1 items-center'>
    <img src={icon} alt={label} />
    <Typography variant="body1" className="capitalize">&nbsp;{label}</Typography>
  </Box>
)

const ItemDetalhes = ({ item }: { item: any }) => {
  const infoList = [
    item.tipo && { icon: definirIcon(item.tipo), label: item.tipo },
    { icon: raridade, label: item.raridade ? `raridade: ${item.raridade}` : "raridade: Nenhum"},
    item.ca && { icon: bonus, label: `CA: ${item.ca}` },
    item.desvantagem && { icon: empunhadura, label: `Desvantagem Furtiva: ${item.desvantagem}` },
    item.bonusCa && { icon: bonus, label: `Bônus CA: + ${item.bonusCa}` },
    item.alcance && { icon: alcance, label: `alcance: ${item.alcance}` },
    item.empunhadura && { icon: empunhadura, label: `empunhadura: ${item.empunhadura}` },
    item.encantamento && { icon: encantamento, label: `encantamento: ${item.encantamento || 'Nenhum'}` },
    item.tipoDano && { icon: tipoDano, label: `tipo de dano: ${item.tipoDano}` },
    item.dano && { icon: d20, label: `dano: ${item.dano}` },
    item.modalidade && { icon: encantamento, label: `modalidade: ${item.modalidade}` },
    { icon: peso, label: `peso: ${item.peso} Kg` },
    { icon: preco, label: `preço: ${item.preco} PO` }
  ].filter(Boolean)

  return (
    <Box className='w-full my-4'>
      <Box className='my-5'>
        <Typography variant="h6">Detalhes</Typography>
      </Box>
      {infoList.map((info, idx) => <InfoRow key={idx} {...info} />)}
    </Box>
  )
}


export default ItemDetalhes
