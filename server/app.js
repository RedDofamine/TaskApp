import { server } from './config/config.js'
import DbConnect from './db/DbConnect.js'
import taskRouter from './endpoints/taskRoutes.js'

import express from 'express'


const app = new express()

app.use(express.json())

app.use('/api', taskRouter)


function start() {
	DbConnect()
	app.listen(server.port, console.log(`App running on port ${server.port}`))
}

start()
