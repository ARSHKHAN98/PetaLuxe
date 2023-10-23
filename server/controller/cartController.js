import user from "../model/user.js";
import dotenv from "dotenv";

dotenv.config();

export const updateCart = async (req, res) => {
	const { product, _id } = req.body;
	console.log(product, _id);
	try {
		const cartUpdate = await user.findByIdAndUpdate(_id, { product: product }, { new: true });
		console.log(cartUpdate);
		res.status(200).send(cartUpdate);
	} catch (error) {
		console.log(error);
		res.status(501).send({ message: error.message });
	}
};
