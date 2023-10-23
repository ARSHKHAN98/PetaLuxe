import express from "express";
import { verifyToken } from "./middleware/auhtMiddleware.js";
import { login, logout, register } from "./controller/authController.js";
import { all, add, update, remove } from "./controller/shippingController.js";
import { updateCart } from "./controller/cartController.js";

const router = express.Router();

router.post("/api/login", login);
router.get("/api/logout", logout);
router.post("/api/register", register);
router.get("/api/shipping", verifyToken, all);
router.post("/api/shipping", verifyToken, add);
router.put("/api/shipping", verifyToken, update);
router.delete("/api/shipping", verifyToken, remove);
router.post("/api/cart", verifyToken, updateCart);
router.post("/api/check", verifyToken);

export default router;
