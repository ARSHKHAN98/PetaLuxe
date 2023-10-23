import mongoose from "mongoose";

const shipping = mongoose.Schema({
	userID: {
		type: String,
		required: true,
	},
	flatno: {
		type: String,
		required: true,
	},
	address: {
		type: String,
		required: true,
	},
	postalcode: {
		type: String,
		required: true,
	},
	landmark: {
		type: String,
	},
	city: {
		type: String,
		required: true,
	},
	state: {
		type: String,
		required: true,
	},
});

export default mongoose.model("shipping", shipping);
