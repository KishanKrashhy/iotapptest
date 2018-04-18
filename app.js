const express = require("express");
const http = require("http");
//const ws = require('ws');
const url = require('url');
const socketIo = require("socket.io");
const axios = require("axios");
const bodyParser = require('body-parser');
const port = process.env.PORT || 8080;
const config = require('./config');
const wsconn = require('./wsServer');
const SensorController = require("./controllers/SensorController");
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(function(req, res, next) {
  res.setHeader('Access-Control-Expose-Headers', 'Access-Control-*, Origin, X-Requested-With, Content-Type, Accept, Authorization');
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'HEAD, GET, POST, OPTIONS, PUT, PATCH, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Access-Control-*, Origin, X-Requested-With, Content-Type, Accept, Authorization');
   res.setHeader('Access-Control-Allow-Credentials', true);
   next();
})

app.use(function (req, res, next) {
  console.log("Got request for",req.url);
  req.path === '/edit' ? wsconn.UpdateDataSet(config.iosocket) : config.stateUpdate = false;
  next();
});


app.use(SensorController);


const server = http.createServer(app);


const io = socketIo(server);

io.on("connection", socket => {
  config.iosocket = socket;
  console.log("New client connected"), setInterval(
    () => wsconn.getApiAndEmit(socket),
    1000
  );

  socket.on("disconnect", () => console.log("Client disconnected"));
});


server.listen(port, () => {

  console.log(`Listening on port ${port}`)

});