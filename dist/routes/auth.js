"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const auth_controller_1 = require("../controllers/auth.controller");
const router = express_1.Router();
router.post("/signup", auth_controller_1.SingUp);
router.post("/signin", auth_controller_1.SingIn);
router.get("/profile", auth_controller_1.ViewProfile);
exports.default = router;
//# sourceMappingURL=auth.js.map