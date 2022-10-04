import loginUserServices from "../services/login.services";

const loginController = async (req, res) => {
  const { email, password } = req.body;
  const loginService = await loginUserServices(email, password);

  if (loginService.message === "Required fields: E-mail/password!") {
    return res.status(401).json(loginService);
  }
  if (loginService.message === "Wrong email/password") {
    return res.status(401).json(loginService);
  }
  return res.json({ token: loginService });
};

export default loginController;
