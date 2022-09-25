import userDB from "../database";

const deleteUserService = (id) => {
  const userIndex = userDB.findIndex((elem) => elem.id === id);
  const usersRegisted = userDB.findIndex((elem) => elem);

  if (userIndex === -1) {
    return {
      message: "User not found",
    };
  }

  if (userDB[usersRegisted].isAdm === true) {
    userDB.splice(userIndex, 1);

    return {
      message: "User deleted with success",
    };
  }

  return {
    message: "User not autorization to change ADM value.",
  };
};

export default deleteUserService;
