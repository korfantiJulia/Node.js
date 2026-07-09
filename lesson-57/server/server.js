import http from "http";
import { handleRequest } from "./routes.js";

const PORT = process.env.PORT || 3000;

const server = http.createServer(handleRequest);

server.listen(PORT, () => {
  console.log(`Сервер запущено на порті ${PORT}`);
});
