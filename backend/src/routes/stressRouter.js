import { Router } from "express";
import stressUpdateController from "../controllers/stressUpdateController.js";
import verifyToken from "../middleware/verifyToken.js";

const stressRouter = Router();

stressRouter.post("/update", verifyToken, stressUpdateController.updateStress);

export default stressRouter;
