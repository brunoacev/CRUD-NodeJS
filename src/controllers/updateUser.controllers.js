import updateUserServices from "../services/updateUserServices";

const updateUserController = (request, response) => {
  const { id } = request.params;
  const { name, email, password, isAdm } = request.body;
  const updateUserService = updateUserServices(id, name, email);

  if (updateUserService.message) {
    return response.status(401).json(updateUserService);
  }
  return response.json(updateUserService);
};

export default updateUserController;
