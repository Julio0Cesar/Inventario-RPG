import Equipamentos from "./equipamento/Equipamentos"
import Consumiveis from "./consumiveis/Consumiveis"
import Diversos from "./diversos/Diversos"
import ItemContainer from "./components/container/ItemContainer"

const Itens = () => {
    return(
        <ItemContainer destino='/'>
            <Equipamentos/>
            <Consumiveis/>
            <Diversos/>
        </ItemContainer>
    )
}

export default Itens