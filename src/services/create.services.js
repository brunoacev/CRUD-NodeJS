import usersData from "../database";
import { v4 as uuidv4 } from "uuid";
import { hash } from "bcryptjs";

const createUserService = async (name, email, password, isAdm) => {
  if (!email || !name || !password) {
    return { message: "Required fields: name, email, password and isAdm!" };
  }

  const userIsAlreadyExist = usersData.find((user) => user.email === email);

  if (userIsAlreadyExist) {
    return { message: "E-mail already registered" };
  }

  const passwordHashed = await hash(password, 10);

  const user = {
    uuid: uuidv4(),
    createdOn: new Date(),
    updatedOn: new Date(),
    name,
    email,
    isAdm,
    password: passwordHashed,
  };

  usersData.push(user);

  const userIndex = usersData.findIndex((user) => user.email === email);
  const userSendData = usersData[userIndex];

  const keys = ["name", "email", "createdOn", "updatedOn", "uuid", "isAdm"];
  const userFiltred = keys
    .map((key) => ({ [key]: userSendData[key] }))
    .reduce((anterior, atual) => {
      return { ...anterior, ...atual };
    }, {});

  return userFiltred;
};

export default createUserService;
