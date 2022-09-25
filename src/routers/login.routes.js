import { Router } from "express";

import loginUserController from "../controllers/loginUser.controllers";
import verifyUserAdm from "../middlewares/verifyUserAdm.middleware";

const routerLogin = Router();

routerLogin.post("", loginUserController);

export default routerLogin;
