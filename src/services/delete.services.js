import jwt from "jsonwebtoken";
import usersData from "../database";

const deleteUserService = (authorization, uuid) => {
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
    usersData.splice(userIndex, 1);

    return { message: "User deleted with success" };
  }

  // Verifica se o usuário é administrador, se não...
  if (encriptedAuth.uuid === uuid && encriptedAuth.isAdm === false) {
    const userIndex = usersData.findIndex((user) => user.uuid);
    usersData.splice(userIndex, 1);
    return { message: "User deleted with success" };
  } else {
    return { message: "Missing admin permissions" };
  }
};

export default deleteUserService;
