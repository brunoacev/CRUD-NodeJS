import userDB from "../database";

const listUserIDService = (id) => {
  const userID = userDB.find((user) => user.id === id);

  return userID;
};

export default listUserIDService;
