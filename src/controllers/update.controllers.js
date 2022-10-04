import updateUserService from "../services/update.services";

const updateController = (req, res) => {
  const { authorization } = req.headers;
  const uuid = req.params.id;
  const data = req.body;
  const userUpdate = updateUserService(authorization, uuid, data);

  if (userUpdate.message === "Missing admin permissions") {
    return res.status(401).json(userUpdate);
  }
  return res.json(userUpdate);
};

export default updateController;
