import user from "../model/user.js";
import dotenv from "dotenv";

dotenv.config();

export const updateCart = async (req, res) => {
	const { product, _id } = req.body;
	try {
		const cartUpdate = await user.findByIdAndUpdate(_id, { product: product }, { new: true });
		res.status(200).send(cartUpdate);
	} catch (error) {
		console.log(error);
		res.status(501).send({ message: error.message });
	}
};
