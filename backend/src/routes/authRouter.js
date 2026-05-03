import { Router } from "express";
import { loginSchema, registerSchema } from "../validations/authValidation.js";
import authController from "../controllers/authController.js";
import { validate } from "../middleware/validate.js";
import verifyToken from "../middleware/VerifyToken.js";

const authRouter = Router();

authRouter.get("/refreshToken", authController.RefreshToken);
authRouter.get("/user", verifyToken, authController.getUserByToken); 

authRouter.post('/register', validate(registerSchema), authController.Register);
authRouter.post("/login", validate(loginSchema), authController.Login);

authRouter.delete('/logout', validate(registerSchema), authController.Logout);


export default authRouter;