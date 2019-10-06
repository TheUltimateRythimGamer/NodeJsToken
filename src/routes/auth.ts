import { Router } from "express";
import { SingIn, SingUp, ViewProfile } from "../controllers/auth.controller";
const router: Router = Router();

router.post("/signup", SingUp);
router.post("/signin", SingIn);
router.get("/profile", ViewProfile);

export default router;
