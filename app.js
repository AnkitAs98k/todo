import express from "express";
import todoRoutes from "./routes/todo.routes.js";
import users from "./routes/user.routes.js"

const app = express();

app.use(express.json());

app.use("/api", todoRoutes);
app.use("/api/v1/users",users);

export default app;