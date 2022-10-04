import usersData from "../database";
import jwt from "jsonwebtoken";

const updateUserService = (authorization, uuid, data) => {
  const newToken = authorization.split(" ")[1];

  const encriptedAuth = jwt.verify(newToken, "SECRET_KEY", (error, decoded) => {
    if (error) {
      return { message: "Unauthorized" };
    }
    return decoded;
  });

  // Verifica se o usuário é administrador, se sim...
  if (encriptedAuth.isAdm === true) {
    const userIndex = usersData.findIndex((user) => user.uuid === uuid);
    const updatedOn = new Date();

    usersData[userIndex] = {
      ...usersData[userIndex],
      ...data,
      updatedOn,
    };

    return usersData[userIndex];
  }

  // Verifica se o usuário é administrador, se não...
  if (
    encriptedAuth.uuid === uuid &&
    encriptedAuth.isAdm === false &&
    data.isAdm === undefined
  ) {
    const userIndex = usersData.findIndex((user) => user.uuid === uuid);
    const updatedOn = new Date();

    const user = (usersData[userIndex] = {
      ...usersData[userIndex],
      ...data,
      updatedOn,
    });

    const keys = ["uuid", "createdOn", "updatedOn", "name", "email", "isAdm"];
    const newUser = keys
      .map((key) => ({ [key]: user[key] }))
      .reduce((anterior, atual) => {
        return { ...anterior, ...atual };
      }, {});

    return newUser;
  } else {
    return { message: "Missing admin permissions" };
  }
};

export default updateUserService;
