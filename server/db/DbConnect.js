import { mongo } from '../config/config.js'
import mongoose from 'mongoose'

export default function DbConnect() {
	mongoose.connect(mongo.token, mongo.options)
}