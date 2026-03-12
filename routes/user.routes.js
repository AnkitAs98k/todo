import express from "express"
import { registerUser,login } from "../controllers/users.controllers.js"

const router = express.Router();

router.post("/register",registerUser);
router.get("/verify",login);
export default router;