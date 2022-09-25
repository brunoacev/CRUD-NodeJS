import { Router } from "express";
import createUseController from "../controllers/createUser.controllers";
import deleteUserController from "../controllers/deleteUser.controllers";
import listUserController from "../controllers/listUser.controllers";
import listUserIDController from "../controllers/listUserID.controllers";
import updateUserController from "../controllers/updateUser.controllers";

import verifyAuthTokenMiddleware from "../middlewares/verifyAuthToken.middleware";
import veryfyEmailAvaliabilityMiddleware from "../middlewares/verifyEmailAvaliability.middleware";
import verifyUserAdm from "../middlewares/verifyUserAdm.middleware";

const router = Router();

router.post("", veryfyEmailAvaliabilityMiddleware, createUseController);

router.get("", verifyUserAdm, listUserController);

router.get("/:id", verifyAuthTokenMiddleware, listUserIDController);

router.patch("/:id", verifyAuthTokenMiddleware, updateUserController);

router.delete("/:id", verifyAuthTokenMiddleware, deleteUserController);

export default router;

