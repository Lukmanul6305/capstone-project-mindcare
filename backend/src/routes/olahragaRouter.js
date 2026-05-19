import { Router } from "express";
import olahragaController from "../controllers/olahragaController.js";
import { validate } from "../middleware/validate.js";
import { olahragaSchema } from "../validations/olahragaValidation.js";
import verifyToken from "../middleware/verifyToken.js";
import verifyAdmin from "../middleware/verifyAdmin.js";

const olahragaRouter = Router();

// endpoint for user
olahragaRouter.post("/", verifyToken, validate(olahragaSchema), olahragaController.createOlahraga);
olahragaRouter.get("/me", verifyToken, olahragaController.getAllOlahragaByUserLogin);
olahragaRouter.get("/statistik", verifyToken, olahragaController.getStatistikOlahraga);
olahragaRouter.get("/:id", verifyToken, olahragaController.getOlahragaById);
olahragaRouter.delete("/:id", verifyToken, olahragaController.deleteOlahraga);

// endpoint admin only
olahragaRouter.get("/", verifyToken, verifyAdmin, olahragaController.getAllOlahraga);

export default olahragaRouter;
