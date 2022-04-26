import { Router } from "express";
import { editUser, getUser, removeUser } from "./user.controller";
const router: Router = Router();

router.get("/:userId", getUser);
router.put("/:userId", editUser);
router.delete("/:userId", removeUser);

export default router;
