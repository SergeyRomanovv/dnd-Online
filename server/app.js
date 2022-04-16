require("dotenv").config();
const { PORT } = process.env || 3001;
const express = require("express");
const socketio = require("socket.io");
const cors = require("cors");
const coockieParser = require("cookie-parser");

const mainRouter = require("./routes/main.js");
const authRouter = require("./routes/auth");
const builderRouter = require("./routes/builderRouter");
const boardsRouter = require("./routes/boardsRouter");
const errormiddleware = require("./middlewares/error-middleware");
const dbConnectCheck = require("./db/dbConnectCheck");
const lobbyService = require("./service/lobby-service");

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

const io = socketio(httpServer, { cors: { origin: '*' } });


io.on('connect', (socket) => {
  socket.on('join', ({ urlParamUser, urlParamRoom }, cb) => {
    const { response, error } = lobbyService.addUser({ id: socket.id, user: urlParamUser, room: urlParamRoom });
    console.log('response', response);
    if (error) {
      cb(error);
      return;
    }
    socket.join(response.room);
    socket.broadcast.to(response.room);
    io.to(response.room).emit('roomMembers', lobbyService.getRoomUsers(response.room));
  });

  socket.on('sendMapToServer', (data) => {
    console.log('sendMapToServer', data);
    const user = lobbyService.getUser(socket.id);
    io.to(user.room).emit('sendMapFromServer', { user: user.user, map: data });
  });

  socket.on('disconnect',() => {
    console.log("User disconnected");
    const user = lobbyService.removeUser(socket.id);
  });
});
// ! --------------------------------------web soket--------------------------------
// const wsServer = new ws.WebSocketServer({
//   server: httpServer,
// });

// const start = async () => {
//   try {
//     wsServer.on("connection", (clients) => {
//       console.log(">>>> client connected. clients: ", wsServer.clients.size);
//       clients.on("message", (message) => {
//         const input = message.toString("utf-8");
//         console.log(input);
//         wsServer.clients.forEach((client)=>{
//           client.send(input);
//       });

//       });
//     });
//   } catch (err) {
//     console.error(err);
//   }
// };

// start();
// ? --------------------------------------web soket--------------------------------
