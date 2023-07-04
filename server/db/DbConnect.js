import mongoose from "mongoose"

const db = {
	token: "mongodb+srv://m001-student:Vitya777Vitya@sandbox.8eg5n.mongodb.net/?retryWrites=true&w=majority",
	options: {
		useNewUrlParser: true,
		useUnifiedTopology: true,
		dbName: "taskApp"
	}
}

export default function DbConnect() {
	mongoose.connect(db.token, db.options)
}