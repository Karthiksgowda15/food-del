


import express from "express";
import authMiddleware from "../middleware/auth.js";
import { placeOrder, userOrders, verifyOrder,listOrders ,updateStatus} from "../controllers/orderController.js";


const router = express.Router();
router.post("/place", authMiddleware, placeOrder);
router.post("/verify",verifyOrder);
router.post("/userorders",authMiddleware,userOrders);
router.get("/list",listOrders);
router.post("/status",updateStatus)

export default router;
