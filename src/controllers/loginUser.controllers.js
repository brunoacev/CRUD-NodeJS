import loginUserService from "../services/loginUser.services";

const loginUserController = (request, response) => {
  const { email, password } = request.body;
  const userLogin = loginUserService(email, password);
  console.log(userLogin.message);

  if (userLogin.message) {
    return response.status(401).json(userLogin);
  }

  return response.status(200).json(userLogin);
};

export default loginUserController;
