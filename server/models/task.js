import mongoose from "mongoose"

const taskSchema = mongoose.Schema({
	title: { type: String, required: true },
	status: { type: Boolean, default: false },
	createdAt: { type: Date, default: Date.now() }
})

export default mongoose.model('Task', taskSchema)