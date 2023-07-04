import express from 'express'
import DbConnect from './db/DbConnect.js'
import taskRouter from './endpoints/taskRoutes.js'

const app = new express()

app.use(express.json())

app.use(taskRouter)

function start() {
	DbConnect()
	app.listen(3000, console.log(`App running on port 3000`))
}

start()