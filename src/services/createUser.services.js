import userDB from "../database";
import { v4 as uuidv4 } from "uuid";
import * as bycrypt from "bcryptjs";

const createUserService = async (name, email, password, isAdm) => {
  const id = uuidv4();
  const hashedPassword = await bycrypt.hash(password, 10);
  const hashedID = await bycrypt.hash(id, 10);

  const user = {
    name,
    email,
    password: hashedPassword,
    isAdm,
    id,
    createdOn: new Date(),
    updatedAt: new Date(),
  };

  userDB.push(user);

  return user;
};

export default createUserService;
