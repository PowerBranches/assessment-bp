import { Request, Response } from 'express'
import { createMessage } from '../services/messages.service'

const insertMessage = async (req: Request, res: Response) => {

    const { to, from, timeToLifeSec, message } = req.body

    const newMessage = await createMessage({
        message,
        from,
        to,
        timeToLifeSec
    })

    res.send({ message: `Hello ${req.body.to} your message will be send` })
}

export { insertMessage }