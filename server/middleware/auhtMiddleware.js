import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

export const verifyToken = async (req, res, next) => {
	let accessToken = undefined;
	req.headers.cookie
		? (accessToken = req.headers.cookie
				.split("; ")
				.find((row) => row.startsWith("accessToken="))
				.split("=")[1])
		: undefined;
	if (!accessToken) {
		if (!req.body.check) res.status(401).send("Access Token Expired, Please Login Again");
		else res.status(200).send("Re-login");
	} else {
		try {
			const decoded = jwt.verify(accessToken, process.env.TOKEN_SECRET);
			const newAccessToken = jwt.sign({ user: decoded.user }, process.env.TOKEN_SECRET, { expiresIn: "30d" });
			req.user = decoded.user;
			res.cookie("accessToken", newAccessToken, { httpOnly: true });
			if (!req.body.check) next();
			else res.status(200).send("Access Token Found");
		} catch (err) {
			res.status(500).send({ message: err.message });
		}
	}
};
