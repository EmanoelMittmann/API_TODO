import express, { RequestHandler, Response, Router } from 'express'
import {App} from '../connection'
import routes from './routes'

const server = express()

App.initialize().then(() => {
    server.use(express.json())

    server.get('/', (req, res) => {
        res.send('Rodando API')
    })
    server.use(routes)

    server.listen(process.env.PORT,() => {
        console.log(`Rodando na porta ${process.env.PORT}`)
    })
})
