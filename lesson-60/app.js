import express from "express";
import indexRoutes from "./routes/index.routes.js";
import usersRoutes from "./routes/users.routes.js";
import articlesRoutes from "./routes/articles.routes.js";

const app = express();

app.use(express.json());

app.use("/", indexRoutes);
app.use("/users", usersRoutes);
app.use("/articles", articlesRoutes);

app.use((req, res) => {
  res.status(404).send("Page is not found");
});

export default app;
