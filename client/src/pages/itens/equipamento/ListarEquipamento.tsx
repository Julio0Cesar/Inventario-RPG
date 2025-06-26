import { obterEquipamentos } from "../../../services/items/obterEquipamentosService"
import { useCategoriaFormatada } from "../../../hooks/useCategoriaFormatada"
import { FetchLoader } from "../../../components/FetchLoader"
import { FetchError } from "../../../components/FetchError"
import { Typography, Divider } from "@mui/material"
import { useFetch } from "../../../hooks/useFetch"
import { useParams } from "react-router-dom"
import ItemContainer from "../components/container/ItemContainer"
import TabelaItens from "../components/tabela/TabelaItens"

const ListarEquipamento = () => {
    const { categoria } = useParams<{ categoria: string }>()
    const { frase } = useCategoriaFormatada(categoria)
    const { data: itens, loading, error } = useFetch(() => obterEquipamentos(categoria!),[categoria])
    
    if (loading) return <FetchLoader />
    if (error) return <FetchError message={error} />
    return (
        <ItemContainer destino='/itens/'>
            <Typography variant="h4">{frase}</Typography>
            <Divider className="!mb-8 bg-yellow-600 p-[0.2px]"/>
            <TabelaItens
                dados={Array.isArray(itens) ? itens : []} 
                categoria={categoria!}
                colunas={["encantamento", "ca", "bonusCa", "desvantagem", "dano", "tipoDano", "peso", "preco", "efeitos"]}
            />
        </ItemContainer>
    )
}

export default ListarEquipamento