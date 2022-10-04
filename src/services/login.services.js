import usersData from "../database";
import jwt from "jsonwebtoken";
import { compare } from "bcryptjs";

const loginUserServices = async (email, password) => {
  if (!email || !password) {
    return { message: "Required fields: E-mail/password!" };
  }

  const user = usersData.find((user) => user.email == email);
  const passwordMatch = await compare(password, user.password);

  if (!user) {
    return { message: "Wrong email/password" };
  }
  if (passwordMatch == false) {
    return { message: "Wrong email/password" };
  }

  const token = jwt.sign(user, "SECRET_KEY");

  return token;
};

export default loginUserServices;
