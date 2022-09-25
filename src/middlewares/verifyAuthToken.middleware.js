import jwt from "jsonwebtoken";

const verifyAuthTokenMiddleware = (request, response, next) => {
  let token = request.headers.authorization;

  if (!token) {
    return response
      .status(401)
      .json({ message: "Missing authorization headers" });
  }

  jwt.verify(token, "SECRET_KEY", (error, decoded) => {
    if (error) {
      return response.status(401).json({ message: "Token inválido." });
    }
  });

  next();
  return response.json({ Token: token });
};

export default verifyAuthTokenMiddleware;
