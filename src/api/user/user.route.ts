import { Router } from "express";
import { editUser, getUser, removeUser } from "./user.controller";
import { checkToken } from "./user.guard";
import { editUserJoi, getUserJoi } from "./user.validation";
const router: Router = Router();

router.get("/:userId", checkToken, getUserJoi, getUser);
router.put("/:userId", checkToken, editUserJoi, editUser);
router.delete("/:userId", checkToken, getUserJoi, removeUser);

export default router;
