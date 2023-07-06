export const server = {
	port: 80
}
export const mongo = {
	token: "mongodb+srv://m001-student:Vitya777Vitya@sandbox.8eg5n.mongodb.net/?retryWrites=true&w=majority",
	options: {
		useNewUrlParser: true,
		useUnifiedTopology: true,
		dbName: "taskApp"
	}
}
export default {
	server,
	mongo
}