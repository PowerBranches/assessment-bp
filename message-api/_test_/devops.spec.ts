import { request, Request, response, Response } from 'express'
import { insertMessage } from "../src/controllers/message.controller"

describe('DevOps endpoint',()=>{
    test('it should response with a message',()=>{
        const sut = new insertMessage(httpRequest:request,httpResponse:response)
        const httpRequest = {
            body:{
                message:'This is a Test',
                to:'Juan Perez',
                from:'Rita Asturia',
                timeToLifeSec:45
            }
        }

        const httpResponse = sut.handle(httpRequest)
        expect(httpResponse.statusCode).toBe({
            message: `Hello ${httpRequest.body.to} your message will be send`
        })
    })
})