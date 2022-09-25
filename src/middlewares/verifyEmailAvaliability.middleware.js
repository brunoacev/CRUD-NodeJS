import usersDB from "../database";

const veryfyEmailAvaliabilityMiddleware = (request, response, next) => {
  const { email } = request.body;

  const userAlreadyExists = usersDB.find((user) => user.email === email);

  if (userAlreadyExists) {
    return response.status(400).json({
      message: "E-mail already registered",
    });
  }
  next();
};

export default veryfyEmailAvaliabilityMiddleware;
