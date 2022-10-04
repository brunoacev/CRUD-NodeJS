import jwt from "jsonwebtoken";

const profileUserService = (authorization, uuid) => {
  const newToken = authorization.split(" ")[1];

  const encriptedAuth = jwt.verify(newToken, "SECRET_KEY", (error, decoded) => {
    if (error) {
      console.log(error);
      return res.status(401).json({ message: "Unauthorized" });
    }
    return decoded;
  });

  const keys = ["uuid", "createdOn", "updatedOn", "name", "email", "isAdm"];

  const newUser = keys
    .map((key) => ({ [key]: encriptedAuth[key] }))
    .reduce((anterior, atual) => {
      return { ...anterior, ...atual };
    }, {});

  if (encriptedAuth.isAdm === false) {
    return newUser;
  }

  return encriptedAuth;
};

export default profileUserService;
