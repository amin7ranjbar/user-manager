import { Router } from "express";
import { loginUser, registerUser } from "./auth.controller";
import { loginUserJoi, registerUserJoi } from "./auth.validation";
const router: Router = Router();

router.post("/register", registerUserJoi, registerUser);
router.post("/login", loginUserJoi, loginUser);

export default router;
