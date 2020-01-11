
import express from 'express'
import dbConfig from './config/db'
import ioConfig from './config/ioConfig'
import configMiddlewares from './config/middlewares'
import cors from 'cors'
import https from 'https'
import http from 'http'
import SocketIO from 'socket.io'
import { routeCreator } from './lib/index'

const port = process.env.PORT || 4000
const app = express()
app.disable('x-powered-by')

// add your cors
app.use( cors())

dbConfig(app)
configMiddlewares(app)

app.use(routeCreator())

const server = http.Server(app)
export const io = new SocketIO(server)

ioConfig(io)

// inserts io to each route/to the app params
// const { io } = req.app
app.io = io

server.listen(port, () => console.log(`App listening on port ${port}`))
