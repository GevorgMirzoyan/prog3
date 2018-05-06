var express = require('express');
var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);
var cords = [];

app.use(express.static("."));
app.get('/', function (req, res) {
  res.redirect('index.html');
});
server.listen(3000);

io.on('connection', function (socket) {
  for (var i in cords) {
    io.sockets.emit("staci kordinatnnery", cords[i]);
  }
  socket.on("nor kordinater", function (data) {
    cords.push(data);
    io.sockets.emit("staci kordinatnnery", data);
  })
});