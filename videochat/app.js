require("dotenv").config();
const { PORT } = process.env || 3001;
const express = require("express");
const cors = require("cors");
const coockieParser = require("cookie-parser");
const ACTIONS = require("./action/soketAction");


// Импортируем созданный в отдельный файлах рутеры.
const app = express();
const server = require("http").createServer(app);
const io = require("socket.io")(server);

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


function getClientRooms() {
  const { rooms } = io.sockets.adapter;
  return Array.from(rooms.keys());
}

function shareRoomsInfo() {
  io.emit(ACTIONS.SHARE_ROOMS, {
    rooms: getClientRooms(),
  });
}

function startSocket() {
  io.on("connection", (socket) => {
    shareRoomsInfo();
    // ! Присоединение к комнате пользователя, проверка повтора комнаты
    socket.on(ACTIONS.JOIN, (config) => {
      const { room: roomID } = config;
      const { rooms: joinedRooms } = socket;
      // ! Получаем всех клиентов подключенных к комнате
      if (Array.from(joinedRooms).includes(roomID)) {
        return console.warn(`Already joined to ${roomID}`);
      }

      const clients = Array.from(io.sockets.adapter.rooms.get(roomID) || []);
      // ! Передача метаданных между пользователями
      clients.forEach((clientID) => {
        io.to(clientID).emit(ACTIONS.ADD_PEER, {
          peerID: socket.id,
          createOffer: false,
        });

        socket.emit(ACTIONS.ADD_PEER, {
          peerID: clientID,
          createOffer: true,
        });
      });

      socket.join(roomID);
      shareRoomsInfo();
    });
    // ! Механика выхода из комнаты/ сессии
    function leaveRoom() {
      const { rooms } = socket;

      Array.from(rooms)
      // LEAVE ONLY CLIENT CREATED ROOM
      .forEach((roomID) => {
        const clients = Array.from(io.sockets.adapter.rooms.get(roomID) || []);

          clients.forEach((clientID) => {
            io.to(clientID).emit(ACTIONS.REMOVE_PEER, {
              peerID: socket.id,
            });

            socket.emit(ACTIONS.REMOVE_PEER, {
              peerID: clientID,
            });
          });

          socket.leave(roomID);
        });

      shareRoomsInfo();
    }

    socket.on(ACTIONS.LEAVE, leaveRoom);
    
    socket.on("disconnecting", leaveRoom);

    socket.on(ACTIONS.RELAY_SDP, ({peerID, sessionDescription}) => {
      io.to(peerID).emit(ACTIONS.SESSION_DESCRIPTION, {
        peerID: socket.id,
        sessionDescription,
      });
    });

    socket.on(ACTIONS.RELAY_ICE, ({peerID, iceCandidate}) => {
      io.to(peerID).emit(ACTIONS.ICE_CANDIDATE, {
        peerID: socket.id,
        iceCandidate,
      });
    });
  });
}

const start = async () => {
  try {
    startSocket();
    server.listen(PORT, () => {
      console.log(`server started PORT: ${PORT}`);
    });
  } catch (err) {
    console.error(err);
  }
};

start();
