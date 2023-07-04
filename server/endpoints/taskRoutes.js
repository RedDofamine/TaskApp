import TaskController from '../contollers/TaskController.js'
import express from 'express'

const router = express.Router()

router.route('/task')
	.get((req, res) => TaskController.get(req, res))
	.post((req, res) => TaskController.create(req, res))
router.route('/task/:id')
	.get((req, res) => TaskController.get(req, res))
	.patch((req, res) => TaskController.update(req, res))
	.delete((req, res) => TaskController.remove(req, res))

export default router