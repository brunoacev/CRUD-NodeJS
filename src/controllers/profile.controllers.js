import profileUserService from "../services/profile.services";

const profileController = (req, res) => {
  const { authorization } = req.headers;
  const { uuid } = req.params;

  const profileSerivce = profileUserService(authorization, uuid);

  return res.json(profileSerivce);
};

export default profileController;
