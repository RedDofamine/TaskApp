import Task from '../models/task.js'

async function get(req, res) {
	const { id } = req.params
	const queryObj = {}
	try {
		if (id) queryObj._id = id
		const tasks = await Task.find(queryObj)
		if (!tasks || !tasks.length) return res.status(404).json({ message: "tasks not found " })
		res.status(200).json(tasks)
	} catch (err) {
		res.status(500).json({ error: err.message })
	}
}
async function create(req, res) {
	const { title } = req.body
	try {
		if (!title) return res.status(500).json({ message: "title was not included" })
		const task = await Task.create({ title: title })
		res.status(201).json(task)
	} catch (err) {
		res.status(500).json({ error: err.message })
	}
}
async function update(req, res) {
	const { id } = req.params
	const { title, status } = req.body
	const queryObj = {}
	try {
		if (!id) return res.status(500).json({ message: 'id was not received' })
		if (title) queryObj.title = title
		if (status !== undefined) queryObj.status = status
		const task = await Task.findOneAndUpdate({ _id: id }, queryObj, { new: true })
		res.status(200).json(task)
	} catch (err) {
		res.status(500).json({ error: err.message })
	}
}
async function remove(req, res) {
	const { id } = req.params
	try {
		if (!id) return res.status(500).json({ message: 'id was not received' })
		const removed = await Task.findOneAndDelete({ _id: id })
		if (!removed) return res.status(500).json({ message: 'task wasn\'t removed' })
		res.status(200).json(removed)
	} catch (err) {
		res.status(500).json({ error: err.message })
	}
}

export default {
	create,
	get,
	update,
	remove
}