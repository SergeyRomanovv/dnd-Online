require("dotenv").config();
const { PORT } = process.env || 3001;
const express = require("express");
const cors = require("cors");
const coockieParser = require("cookie-parser");
const mainRouter = require("./routes/main.js");
const authRouter = require("./routes/auth");
const errormiddleware = require('./middlewares/error-middleware');
const dbConnectCheck = require('./db/dbConnectCheck');


// Импортируем созданный в отдельный файлах рутеры.
const app = express();
dbConnectCheck();

app.use(express.urlencoded({ extended: true }));
// Подключаем middleware, которое позволяет читать переменные JavaScript, сохранённые в формате JSON в body HTTP-запроса.
app.use(express.json());
app.use(coockieParser());
app.use(cors({
  credentials: true,
  origin: process.env.CLIENT_URL
}));

app.use("/main", mainRouter);
app.use("/auth", authRouter);

app.use(errormiddleware);

const start = async () => {
  try {
    app.listen(PORT, () => {console.log(`server started PORT: ${PORT}`);});
  } catch (err) {
    console.error(err);
  }
};

start();
