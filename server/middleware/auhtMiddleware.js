import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import cookie from "cookie";

dotenv.config();

export const verifyToken = async (req, res, next) => {
	let accessToken = undefined;
	const cookies = cookie.parse(req.headers.cookie || "");
	if (!cookies.accessToken) {
		if (!req.body.check) res.status(401).send("Access Token Expired, Please Login Again");
		else res.status(200).send("Re-login");
	} else {
		try {
			const decoded = jwt.verify(cookies.accessToken, process.env.TOKEN_SECRET);
			const newAccessToken = jwt.sign({ user: decoded.user }, process.env.TOKEN_SECRET, { expiresIn: "30d" });
			req.user = decoded.user;
			const expirationDate = new Date();
			expirationDate.setDate(expirationDate.getDate() + 30);
			res.cookie("accessToken", newAccessToken, { httpOnly: true, expires: expirationDate });
			if (!req.body.check) next();
			else res.status(200).send("Access Token Found");
		} catch (err) {
			console.log(err);
			res.status(500).send({ message: err.message });
		}
	}
};
