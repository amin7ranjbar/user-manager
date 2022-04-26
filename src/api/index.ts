import { Router } from "express";

import authRoutes from "./auth/auth.route";
import userRoutes from "./user/user.route";

const router: Router = Router();

router.use("/auth", authRoutes);
router.use("/user", userRoutes);

router.use("/", (req, res, next) => {
  interface BetterError extends Error {
    status?: number;
  }

  const err: BetterError = new Error("Not Found");
  err.status = 404;
  next(err);
});

export const MainRouter: Router = router;
