import usersData from "../database";

const listAllController = (req, res) => {
  return res.json(usersData);
};

export default listAllController;
