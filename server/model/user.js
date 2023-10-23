import mongoose from "mongoose";

const user = mongoose.Schema({
	name: {
		type: String,
		required: true,
	},
	password: {
		type: String,
		required: true,
	},
	email: {
		type: String,
		unique: true,
	},
	phone: {
		type: String,
		unique: true,
	},
	product: {
		type: Number,
		default: 0,
	},
	timestamps: Date,
});

export default mongoose.model("user", user);
