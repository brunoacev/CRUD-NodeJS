import jwt from "jsonwebtoken";

const checkUserToken = (req, res, next) => {
  const { authorization } = req.headers;

  if (!authorization) {
    return res.status(401).json({ message: "Missing authorization headers" });
  }
  const newToken = authorization.split(" ")[1];

  jwt.verify(newToken, "SECRET_KEY", (error, decoded) => {
    if (error) {
      console.log(error);
      return res.status(401).json({ message: "Unauthorized" });
    }
  });

  next();
};

export default checkUserToken;
