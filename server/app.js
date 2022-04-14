require("dotenv").config();
const { PORT } = process.env || 3001;
const express = require("express");
const ws = require("ws");
const cors = require("cors");
const coockieParser = require("cookie-parser");

const mainRouter = require("./routes/main.js");
const authRouter = require("./routes/auth");
const builderRouter = require("./routes/builderRouter");
const boardsRouter = require("./routes/boardsRouter");
const errormiddleware = require("./middlewares/error-middleware");
const dbConnectCheck = require("./db/dbConnectCheck");

// Импортируем созданный в отдельный файлах рутеры.
const app = express();
dbConnectCheck();

app.use(express.urlencoded({ extended: true }));
// Подключаем middleware, которое позволяет читать переменные JavaScript, сохранённые в формате JSON в body HTTP-запроса.
app.use(express.json());
app.use(coockieParser());
app.use(
  cors({
    credentials: true,
    origin: process.env.CLIENT_URL,
  })
);

app.use("/", mainRouter);
app.use("/auth", authRouter);
app.use("/builder", builderRouter);
app.use("/boards", boardsRouter);

app.use(errormiddleware);

const httpServer = app.listen(PORT, () => {
  console.log(`server started PORT: ${PORT}`);
});

const wsServer = new ws.WebSocketServer({
  server: httpServer,
});

const start = async () => {
  try {
    wsServer.on("connection", (clients) => {
      console.log(">>>> client connected. clients: ", wsServer.clients.size);
      clients.on("message", (message) => {
        const input = message.toString("utf-8");
        console.log(input);
        wsServer.clients.forEach((client)=>{
          client.send(input);
      });

      });
    });
  } catch (err) {
    console.error(err);
  }
};

start();
