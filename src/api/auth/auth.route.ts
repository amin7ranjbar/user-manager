import { Router } from "express";
import { loginUser, registerUser } from "./auth.controller";
import { loginUserJoi, registerUserJoi } from "./auth.validation";
const router: Router = Router();

router.get("/register", registerUserJoi, registerUser);
router.get("/login", loginUserJoi, loginUser);

export default router;
