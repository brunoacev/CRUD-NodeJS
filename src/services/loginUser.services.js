import userDB from "../database";
import Jwt from "jsonwebtoken";
import * as bycrypt from "bcryptjs";

const loginUserService = (email, password) => {
  const userIndexValidated = userDB.findIndex((user) => user.email === email);
  const userValidated = userDB.find((user) => user.email === email);

  const passwordMatch = bycrypt.compareSync(password, userValidated.password);

  if (userIndexValidated === -1) {
    return {
      message: "Wrong email/password",
    };
  }

  if (!passwordMatch) {
    return {
      message: "Wrong email/password",
    };
  }

  const token = Jwt.sign({ email: email }, "SECRET_KEY", { expiresIn: "24h" });

  return token;
};

export default loginUserService;
