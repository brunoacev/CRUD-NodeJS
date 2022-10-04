import jwt from "jsonwebtoken";

const checkUserAdm = (req, res, next) => {
  const userToken = req.headers.authorization;

  const newToken = userToken.split(" ")[1];

  const encriptedAuth = jwt.verify(newToken, "SECRET_KEY", (error, decoded) => {
    if (error) {
      console.log(error);
      return res.status(401).json({ message: "Unauthorized" });
    }
    return decoded;
  });

  if (!newToken) {
    return res.status(401).json({ message: "Missing authorization headers" });
  }

  if (encriptedAuth.isAdm == false) {
    return res.status(401).json({ message: "Missing admin permissions" });
  }

  next();
};

export default checkUserAdm;
