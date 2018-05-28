var express = require('express');
var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);
var fs = require('fs');
global.matrix = [];

var qanak = 50;

global.xotakerQanak = 0;
global.gishatichQanak = 0;
global.mardQanak = 0;
global.treeQanak = 0;
global.mutantQanak = 0;
global.soliderQanak = 0;

for (var a = 0; a < qanak; ++a) 
{
    matrix[a] = [];

    for (var b = 0; b < qanak; ++b) 
    {
        matrix[a][b] = Math.round(Math.random(1));
    }
}

    var i = 0;

    while (i < xotakerQanak)
    {
      var x = Math.floor(Math.random(qanak));
      var y = Math.floor(Math.random(qanak));
      var r = Math.floor(Math.random(5));
        
      if(r >= 1)
      {
        matrix[y][x] = 2;
      }
        
      else
      {
        matrix[y][x] = 2.5;
      }

      i++;
    }
        
    var i = 0;

    while (i < gishatichQanak)
    {
      var x = Math.floor(Math.random(qanak));
      var y = Math.floor(Math.random(qanak));
        
      if (matrix[y][x] != 2 && matrix[y][x] != 2.5) 
      {
        var r = Math.floor(Math.random(5));
        
        if(r >= 1)
        {
          matrix[y][x] = 3;
        }
        
        else
        {
          matrix[y][x] = 3.5;
        }

        i++;
      }
    }
        
    var i = 0;

    while (i < mardQanak)
    {
      var x = Math.floor(Math.random(qanak));
      var y = Math.floor(Math.random(qanak));
        
      if (matrix[y][x] != 2 && matrix [y][x] != 3 && matrix[y][x] != 2.5 && matrix [y][x] != 3.5) 
      {
        var r = Math.floor(Math.random(5));
        
        if(r >= 1)
        {
          matrix[y][x] = 4;              
        }
        
        else
        {
          matrix[y][x] = 4.5;               
        }

        i++;
      }
    }
        
    var i = 0;

    while (i < treeQanak)
    {
      var x = Math.floor(Math.random(qanak));
      var y = Math.floor(Math.random(qanak));
        
      if (matrix[y][x] != 2 && matrix [y][x] != 3 && matrix [y][x] != 4 && matrix[y][x] != 2.5 && matrix [y][x] != 3.5 && matrix [y][x] != 4.5) 
      {
        matrix[y][x] = 5;

        i++;
      }
    }
        
    var i = 0;

    while (i < mutantQanak)
    {
      var x = Math.floor(Math.random(qanak));
      var y = Math.floor(Math.random(qanak));
        
      if (matrix[y][x] != 2 && matrix [y][x] != 3 && matrix [y][x] != 4 && matrix[y][x] != 2.5 && matrix [y][x] != 3.5 && matrix [y][x] != 4.5 && matrix [y][x] != 5)
      {
        matrix[y][x] = 9;
        i++;
      }
    }
        
    var i = 0;

    while (i < soliderQanak)
    {
      var x = Math.floor(Math.random(qanak));
      var y = Math.floor(Math.random(qanak));
        
      if (matrix[y][x] != 2 && matrix [y][x] != 3 && matrix [y][x] != 4 && matrix[y][x] != 2.5 && matrix [y][x] != 3.5 && matrix [y][x] != 4.5 && matrix [y][x] != 5 && matrix [y][x] != 9)
      {
        matrix[y][x] = 11;
        i++;
      }
    }
    
app.use(express.static("."));
app.get('/', function (req, res) {
  res.redirect('index.html');
});
server.listen(3000);

global.Class10 = require("./public/class.js");
global.Grass = require("./public/classGrass.js");
global.Tree = require("./public/classTree.js");
global.Xotaker = require("./public/classXotaker.js");
global.Gishatich = require("./public/classGishatich.js");
global.Mard = require("./public/classMard.js");
global.Mutant = require("./public/classMutant.js");
global.Solider = require("./public/classSolider.js");
global.Virus = require("./public/classVirus.js");

global.changeTime = 0;
global.weather = 'spring';

global.grassArr = [];
global.xotakerArr = [];
global.gishatichArr = [];
global.yntaniKendaniArr = [];
global.mardArr = [];
global.soliderArr = [];
global.mutantArr = [];
global.virusArr = [];
global.treeArr = [];

global.norXotakerner = 0;
global.norGishatichner = 0;
global.norMardik = 0;
global.norMutantner = 0;
global.norZinvorner = 0;

global.hinvandXotakerner = 0;
global.hinvandGishatichner = 0;
global.hinvandMardik = 0;
global.hinvandMutantner = 0;
global.hinvandZinvorner = 0;

for (var y = 0; y < matrix.length; ++y) 
{
    for (var x = 0; x < matrix[y].length; ++x) 
    {
        if (matrix[y][x] == 1) 
        {
            var xot = new Grass(x,y);
            grassArr.push(xot);
        }

        if (matrix[y][x] == 2) 
        {
            var xotaker = new Xotaker(x,y);
            xotakerArr.push(xotaker);
            xotaker.ser = 1;
        }

        if (matrix[y][x] == 2.5) 
        {
            var xotaker = new Xotaker(x,y);
            xotakerArr.push(xotaker);
            xotaker.ser = 2;
        }

        if (matrix[y][x] == 3) 
        {
            var gishatich = new Gishatich(x,y);
            gishatichArr.push(gishatich);
            gishatich.ser = 1;
        }
            
        if (matrix[y][x] == 3.5) 
        {
            var gishatich = new Gishatich(x,y);
            gishatichArr.push(gishatich);
            gishatich.ser = 2;
        }
            
        if (matrix[y][x] == 4) 
        {
            var mard = new Mard(x,y);
            mardArr.push(mard);
            mard.ser = 1;
        }

        if (matrix[y][x] == 4.5) 
        {
            var mard = new Mard(x,y);
            mardArr.push(mard);
            mard.ser = 2;
        }

        if (matrix[y][x] == 5) 
        {
            var tree = new Tree(x,y);
            treeArr.push(tree);
        }

        if (matrix[y][x] == 9) 
        {
              var mutant = new Mutant(x,y);
              mutantArr.push(mutant);
        }
            
        if (matrix[y][x] == 11) 
        {
            var solider = new Solider(x,y);
            soliderArr.push(solider);
        }
    }
}

function weatherChange()
{
    changeTime++;

    if (changeTime >= 90) 
    {
        if (weather == 'spring') 
        {
            weather = 'summer';
        }

        else if (weather == 'summer') 
        {
            weather = 'autumn';
        }

        else if (weather == 'autumn') 
        {
            weather = 'winter';
        }

        else if (weather == 'winter') 
        {
            weather = 'spring';
        }
        
        changeTime = 0;
    }
    
    return weather;
}


setInterval(function () 
{
  for (var i in soliderArr)
  {
    soliderArr[i].timeout();
    soliderArr[i].healthPlus();
    soliderArr[i].utel();
    soliderArr[i].hivandutyun();
    soliderArr[i].mahanal();
  }

  for (var i in mutantArr)
  {
    mutantArr[i].timeout();
    mutantArr[i].healthPlus();
    mutantArr[i].utel();
  }
    
  for(var i in virusArr)
  {
    virusArr[i].antiVirus();
  }

  for (var i in mardArr) 
  {
    mardArr[i].timeout();
    mardArr[i].utel();
    mardArr[i].hivandutyun();
    mardArr[i].mahanal();
  }
    
  for (var i in grassArr)
  {
    grassArr[i].bazmanal();
    grassArr[i].hivandutyun();
  }
    
  for (var i in gishatichArr) 
  {
    gishatichArr[i].timeout();
    gishatichArr[i].utel();
    gishatichArr[i].hivandutyun();
    gishatichArr[i].mahanal();
  }

  for (var i in treeArr) 
  {
    treeArr[i].bazmanal();
    treeArr[i].hivandutyun();
  }
    
  for (var i in xotakerArr)
  {   
    xotakerArr[i].timeout();
    xotakerArr[i].utel();
    xotakerArr[i].hivandutyun();
    xotakerArr[i].mahanal();
  }

  io.sockets.emit('send matrix', matrix);
}, 1000)


// io.on('connection', function (socket) {
//   for (var i in cords) {
//     io.sockets.emit("staci kordinatnnery", cords[i]);
//   }
//   socket.on("nor kordinater", function (data) {
//     cords.push(data);
//     io.sockets.emit("staci kordinatnnery", data);
//   })
// });