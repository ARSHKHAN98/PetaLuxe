import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import bodyParser from "body-parser";
import routes from "./routes.js";
import dotenv from "dotenv";

const app = express();

app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use((req, res, next) => {
	res.header("Access-Control-Allow-Credentials", true);
	next();
});
app.use(
	cors({
		origin: "http://localhost:3000",
	})
);
app.use(routes);

dotenv.config();

mongoose.set("strictQuery", false);

mongoose
	.connect(process.env.CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
	.then(() => console.log("Connected to Server"))
	.catch((error) => console.log(error.message));

app.listen(process.env.PORT || 4000, () => console.log(`Server running on port: ${process.env.PORT || 4000}`));
