import createUserService from "../services/create.services";

const createController = async (req, res) => {
  const { name, email, password, isAdm } = req.body;
  const createService = await createUserService(name, email, password, isAdm);

  if (
    createService.message ===
    "Required fields: name, email, password and isAdm!"
  ) {
    return res.status(400).json(createService);
  }
  if (createService.message === "E-mail already registered") {
    return res.status(400).json(createService);
  }

  return res.status(201).json(createService);
};

export default createController;
