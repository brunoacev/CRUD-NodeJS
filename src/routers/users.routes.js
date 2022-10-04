import { Router } from "express";
import createController from "../controllers/create.controllers";
import deleteController from "../controllers/delete.controllers";
import listAllController from "../controllers/listAll.controllers";
import profileController from "../controllers/profile.controllers";
import updateController from "../controllers/update.controllers";

import checkUserAdm from "../middlewares/checkUserAdm.middlewares";
import checkUserToken from "../middlewares/checkUserToken.middlewares";

const userRoutes = Router();

userRoutes.post("", createController);
userRoutes.get("", checkUserToken, checkUserAdm, listAllController);
userRoutes.get("/:id", checkUserToken, profileController);
userRoutes.patch("/:id", checkUserToken, updateController);
userRoutes.delete("/:id", checkUserToken, deleteController)

export default userRoutes;
