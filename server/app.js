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
const attributesRouter = require('./routes/attributesRouter');

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
app.use('/attributies', attributesRouter);

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
    const user = lobbyService.getUser(socket.id);
    io.to(user.room).emit('sendMapFromServer', { user: user.user, map: data.oneGame});
  });
  
  socket.on('sendRerenderMapToServer', (data) => {
    const user = lobbyService.getUser(socket.id);
    console.log(data)
    io.to(user.room).emit('sendRerenderMapFromServer', { user: user.user, map: data.rerenderMap});
  });


  socket.on('sendRollToServer', (data) => {
    const user = lobbyService.getUser(socket.id);
      if (Object.keys(data.rollState).length !== 0) {
      io.to(user.room).emit('sendRollFromServer', { user: user.user, roll: data.rollState });
    }
  });

  socket.on('disconnect',() => {
    console.log("User disconnected");
    const user = lobbyService.removeUser(socket.id);
  });
});
