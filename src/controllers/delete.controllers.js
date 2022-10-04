import deleteUserService from "../services/delete.services";

const deleteController = (req, res) => {
  const { authorization } = req.headers;
  const uuid = req.params.id;

  const userDelete = deleteUserService(authorization, uuid);

  // if (userDelete.message === "Unauthorized") {
  //   return res.status(401).json(userDelete);
  // }

  return res.json(userDelete);
};

export default deleteController;
