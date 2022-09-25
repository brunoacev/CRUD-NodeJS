import express from "express";
import userRouter from "./routers/users.routes";
import routerLogin from "./routers/login.routes";
import "dotenv/config";

const app = express();
app.use(express.json());

const PORT = process.env.PORT || 3000;

app.use("/users", userRouter);
app.use("/login", routerLogin);

app.listen(PORT, () => {
  console.log(`server is running at port ${PORT}`);
});

export default app;
