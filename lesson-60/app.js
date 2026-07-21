import express from "express";
import indexRoutes from "./routes/index.routes.js";
import usersRoutes from "./routes/users.routes.js";
import articlesRoutes from "./routes/articles.routes.js";
import { logRequests } from "./middlewares/logger.js";
import { errorHandler } from "./middlewares/errorHandler.js";

const app = express();
app.use(logRequests);
app.use(express.json());

app.use("/", indexRoutes);
app.use("/users", usersRoutes);
app.use("/articles", articlesRoutes);

app.use((req, res) => {
  res.status(404).send("Page is not found");
});

app.use(errorHandler);

export default app;
