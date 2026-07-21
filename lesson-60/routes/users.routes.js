import { Router } from "express";
import * as usersController from "../controllers/users.controller.js";
import { basicAuth } from "../middlewares/auth.js";
import { validateUserInput } from "../middlewares/validate.js";

const router = Router();
router.use(basicAuth);

router.get("/", usersController.getUsers);
router.post("/", validateUserInput, usersController.createUser);
router.get("/:userId", usersController.getUserById);
router.put("/:userId", validateUserInput, usersController.updateUser);
router.delete("/:userId", usersController.deleteUser);

export default router;
