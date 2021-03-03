const env = require("./env");
const db = require("./db");
const erroHandler = require("./middlewares/errorHandler");

const express = require("express");
const bodyParser = require("body-parser");

const routes = require("./routes");

const APP_PORT = process.env.APP_PORT || "3000";

const app = express();
app.set("port", APP_PORT);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/api", routes);

app.use(erroHandler.genericErrorHandler);

app.listen(app.get("port"), () => {
  console.log(`Sever started at ${app.get("port")}`);
});
