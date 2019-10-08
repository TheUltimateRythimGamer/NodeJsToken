import { Router } from "express";
import { SingIn, SingUp, ViewProfile } from "../controllers/auth.controller";
import { TokenValidation } from '../lib/verifyToken';
const router: Router = Router();

router.post("/signup", SingUp);
router.post("/signin", SingIn);

router.get("/profile", TokenValidation, ViewProfile);

export default router;
