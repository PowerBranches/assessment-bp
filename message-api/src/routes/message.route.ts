import { Router } from "express"
import { insertMessage } from "../controllers/message.controller"

const route = Router()


/**
 * Ruta POST para DevOps
 */
route.post(`/DevOps`, insertMessage)

export default route
