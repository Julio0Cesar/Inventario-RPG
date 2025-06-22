import Equipamentos from "./components/Equipamentos"
import Consumiveis from "./components/Consumiveis"
import Diversos from "./components/Diversos"
import ItemContainer from "./components/ItemContainer";

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