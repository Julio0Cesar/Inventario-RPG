import { getDiversos } from "../../configs/reqData"
import { getErrorMessage } from "../../utils/errorHandler"

export const obterDiversos = async (categoria?: string)=>{
    try {
        const data = getDiversos()
        
        if (!data) throw new Error("Sem itens diversos") 
        if (categoria) return data[categoria as keyof typeof data]

        return data
    } catch (error) {
        throw new Error(getErrorMessage(error))
    }
}