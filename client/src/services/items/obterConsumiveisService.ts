import { getConsumiveis } from "../../configs/reqData"
import { getErrorMessage } from "../../utils/errorHandler"

export const obterConsumiveis = async (categoria?: string)=>{
    try {
        const data = getConsumiveis()
        
        if (!data) throw new Error("Sem Consumiveis") 
        if (categoria) return data[categoria as keyof typeof data]

        return data
    } catch (error) {
        throw new Error(getErrorMessage(error))
    }
}