import 'dotenv/config'
import express from 'express'
import cors from 'cors'
import messageRoute from './routes/message.route'
import mongodb from './db/mongo'

const app = express()
app.use(cors())
app.use(express.json())

const port = process.env.PORT || 3001

app.use(messageRoute)

mongodb()

app.listen(port,()=>{
    console.log(`Servidor escuchando en el puerto ${port}`)
})