var express = require("express");
var app = express();

global.class = require('./public/class.js')

app.use(express.static("public"));

app.get("/", function(req, res){
   res.redirect("public");
});

app.listen(3000, function(){
   console.log("Example is running on port 3000");
});

var express = require('express');
var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);


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