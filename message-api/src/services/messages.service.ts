import messageModel from "../models/message.schema"
import { messageInterface } from "../types/message.type"

/**
 * Enviar Mensaje 
 * @param message 
 * @returns 
 */
const createMessage = async (message: messageInterface) => {
    const response = await messageModel.create(message)
    return response
}

export { createMessage }