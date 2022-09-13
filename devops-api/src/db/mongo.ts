import { connect } from "mongoose"

const DB_URI = `${process.env.DB_URI}`

const mongodb = async () => {
    await connect(DB_URI)
    console.log('Conexión exitosa con Mongo')
}

export default mongodb