import express from "express";
import "dotenv/config";
import userRoutes from "./routers/users.routes";
import loginRoutes from "./routers/login.routes";
import usersData from "./database";

const app = express();
app.use(express.json());
app.use("/users", userRoutes);
app.use("/login", loginRoutes);

app.get("/teste", (req, res) => {
  return res.json(usersData);
});
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`server is running at port ${PORT}`);
});

export default app;
