import userDB from "../database";

const verifyUserAdm = (request, response, next) => {
  let token = request.headers.authorization;
  const usersRegisted = userDB.findIndex((elem) => elem);

  if (!token) {
    return response
      .status(401)
      .json({ message: "Missing authorization headers" });
  }
  
  if (userDB[usersRegisted].isAdm === true) {
    return response.status(200).json(userDB);
  }
  return response.status(401).json({ message: "Missing admin permissions" });
};

export default verifyUserAdm;


