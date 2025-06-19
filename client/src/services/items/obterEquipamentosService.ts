import { getEquipamentos } from "../../configs/reqData"
import { getErrorMessage } from "../../utils/errorHandler"

export const obterEquipamentos = async (categoria?: string)=>{
    try {
        const data = getEquipamentos()
        
        if (!data) throw new Error("Sem Equipamentos") 
        if (categoria) return data[categoria as keyof typeof data]

        return data
    } catch (error) {
        throw new Error(getErrorMessage(error))
    }
}