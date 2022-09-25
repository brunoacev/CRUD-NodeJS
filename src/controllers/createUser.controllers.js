import createUserService from "../services/createUser.services";

const createUseController = async (request, response) => {
  const { name, email, password, isAdm } = request.body;
  const userRegister = await createUserService(name, email, password, isAdm);
  return response.status(201).json(userRegister);
};

export default createUseController;

