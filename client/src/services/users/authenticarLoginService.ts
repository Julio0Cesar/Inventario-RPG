import { getLoginUsers } from "../../configs/reqData"
import { getErrorMessage } from "../../utils/errorHandler"

export const autenticarLogin = async (email: string, senha: string)=>{
    try {
        const data = getLoginUsers()
        const todosUsuarios = [...data.usuarios, ...data.aministradores]
        const usuarioEncontrado = todosUsuarios.find((user) => user.email === email && user.senha === senha)

        if (!usuarioEncontrado) throw new Error("E-mail ou senha inválida")    
        return usuarioEncontrado
    } catch (error) {
        throw new Error(getErrorMessage(error))
    }
}