import deleteUserService from "../services/deleteUser.services";

const deleteUserController = (request, response) => {
  const { id } = request.params;
  const userDelete = deleteUserService(id);
  return response.json(userDelete);
};

export default deleteUserController;
