import user from "../model/user.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

export const register = async (req, res) => {
	const { email, password, phone, firstName, lastName } = req.body;
	try {
		const existingUser = await user.findOne({ email });
		if (existingUser) return res.status(400).json({ message: "User already exists" });

		const hashedPassord = await bcrypt.hash(password, 8);
		const result = await user.create({ name: firstName + lastName, email, password: hashedPassord, phone });

		res.status(200).json(result);
	} catch (error) {
		res.status(500).json({ message: "Something went wrong" });
	}
};

export const login = async (req, res) => {
	const { email, password } = req.body;

	const pass = password;

	try {
		const existingUser = await user.findOne({ email });
		if (!existingUser) return res.status(404).json({ message: "User does not exist" });

		const isPasswordCorrect = await bcrypt.compare(pass, existingUser.password);
		if (!isPasswordCorrect) return res.status(404).json({ message: "Invalid credentials" });

		const { password, profilepic, ...others } = existingUser._doc;
		const token = jwt.sign({ user: others }, process.env.TOKEN_SECRET, { expiresIn: "1d" });

		res.cookie("accessToken", token, {
			httpOnly: true,
		});
		res.status(200).json(others);
	} catch (error) {
		res.status(500).json({ message: "Something went wrong" });
	}
};

export const logout = (req, res) => {
	try {
		res.clearCookie("accessToken", {
			secure: true,
			sameSite: "none",
		})
			.status(200)
			.json({ message: "logged out" });
	} catch (error) {
		res.status(500).json({ message: "Something went wrong" });
	}
};
