
import express from 'express'
import dbConfig from './config/db.js'
import ioConfig from './config/ioConfig.js'
import configMiddlewares from './config/middlewares.js'
import cors from 'cors'
import http from 'http'
import SocketIO from 'socket.io'
import { routeCreator } from './lib/index.js'

// use port from env or 4000 if it doesn't exist. feel free to change
const port = process.env.PORT || 4000
const app = express()

// add your cors
app.use( cors())

dbConfig(app)
configMiddlewares(app)


const server = http.Server(app)
export const io = new SocketIO(server)

ioConfig(io)

// inserts io to each route/to the app params
// const { io } = req.app
app.io = io

server.listen(port, () => console.log(`App listening on port ${port}`));
