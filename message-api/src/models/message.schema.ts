import { Schema, model } from 'mongoose'

const messageSchema = new Schema(
    {
        message: String,
        to: String,
        from: String,
        timeToLifeSec: Number,
    },
    {
        versionKey: false,
        timestamps: true,
    }
)

const messageModel = model('messages',messageSchema)

export default messageModel

