import express from "express";
import { placeOrder, getOrders } from "../controllers/order.controller.js";

import verifyToken from "../middleware/auth.middleware.js";

const router = express.Router();

router.post("/place-order", verifyToken, placeOrder);

router.get("/orders", verifyToken, getOrders);

export default router;
