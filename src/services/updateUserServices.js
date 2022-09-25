import userDB from "../database";

const updateUserServices = (id, name, email) => {
  const userIndex = userDB.findIndex((elem) => elem.id === id);
  const usersRegisted = userDB.findIndex((elem) => elem);

  const updateUser = {
    name,
    email,
    updatedAt: new Date(),
  };

  if (userDB[usersRegisted].isAdm === false) {
    return {
      message: "User not autorization to change ADM value.",
    };
  }

  if (userIndex === -1) {
    return {
      message: "User not found!",
    };
  }

  userDB[userIndex] = { ...userDB[userIndex], ...updateUser };

  return userDB[userIndex];
};

export default updateUserServices;
