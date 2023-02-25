import express, { Application, Request, Response, NextFunction } from "express";
import "dotenv/config";
import bodyParser from "body-parser";
import Routes from "./Routes";
import connect from "./connect";
import routes from "./Routes/index";
import cors = require("cors");

const app = express();
const env = app.get("env");

app.use(cors<Request>());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const PORT = process.env.PORT;

connect();

app.use("/api", routes);

app.listen(PORT, () => {
  console.log(`server is running on PORT ${PORT}`);
});
