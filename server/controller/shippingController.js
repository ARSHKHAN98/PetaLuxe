import shipping from "../model/shipping.js";
import dotenv from "dotenv";

dotenv.config();

export const all = async (req, res) => {
	const { _id } = req.user;
	try {
		const allShipping = await shipping.find({ userID: _id });
		res.status(200).json(allShipping);
	} catch (error) {
		res.status(500).json({ message: error.message });
	}
};

export const add = async (req, res) => {
	const { flatno, address, postalcode, landmark, city, state } = req.body;
	const { _id } = req.user;
	try {
		const saved = await shipping.create({ userID: _id, flatno, address, postalcode, landmark, city, state });
		res.status(200).json(saved);
	} catch (error) {
		res.status(500).json({ message: error.message });
	}
};

export const update = async (req, res) => {
	const { _id, ...details } = req.body;
	try {
		const updatedDetails = await shipping.findByIdAndUpdate(_id, { ...details, _id }, { new: true });
		res.status(200).json(updatedDetails);
	} catch (error) {
		res.status(500).json({ message: error.message });
	}
};

export const remove = async (req, res) => {
	const { id } = req.params;
	try {
		await shipping.deleteOne(id);
		res.status(200).json("Shipping Address Successfully Removed");
	} catch (error) {
		res.status(500).json({ message: error.message });
	}
};
