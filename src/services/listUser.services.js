import userDB from "../database";

const listUserService = () => {
  const usersRegisted = userDB.findIndex((elem) => elem);
  if (usersRegisted === -1) {
    return { message: "Não há usuários cadastrados!" };
  }
  
  return userDB;
};

export default listUserService;
