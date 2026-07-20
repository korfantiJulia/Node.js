import { Router } from "express";
import * as usersController from "../controllers/users.controller.js";

const router = Router();

router.get("/", usersController.getUsers);
router.post("/", usersController.createUser);
router.get("/:userId", usersController.getUserById);
router.put("/:userId", usersController.updateUser);
router.delete("/:userId", usersController.deleteUser);

export default router;
