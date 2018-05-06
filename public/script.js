var socket = io();
socket = io.connect('http://localhost:3000');

var matrix = [];
var side = 20;
var qanak = 50;
var grassArr = [];
var xotakerArr = [];
var gishatichArr = [];
var mardArr = [];
var treeArr = [];
var xotakerQanak = 500;
var gishatichQanak = 250;
var mardQanak = 10;
var treeCount = 150;

function setup()
{
    for (var a = 0; a < qanak; ++a) 
    {
        matrix[a] = [];

        for (var b = 0; b < qanak; ++b) 
        {
            matrix[a][b] = Math.round(random(1));
        }
    }
    
    var i = 0;
    while (i < xotakerQanak)
    {
        var x = Math.floor(random(qanak));
        var y = Math.floor(random(qanak));

        matrix[y][x] = 2;
        i++;
    }
    
    var i = 0;
    while (i < gishatichQanak)
    {
        var x = Math.floor(random(qanak));
        var y = Math.floor(random(qanak));

        if (matrix[y][x] != 2) 
        {
            matrix[y][x] = 3;
            i++;
        }
    }

    var i = 0;
    while (i < mardQanak)
    {
        var x = Math.floor(random(qanak));
        var y = Math.floor(random(qanak));

        if (matrix[y][x] != 2 || matrix [y][x] != 3) 
        {
            matrix[y][x] = 4;
            i++;
        }
    }

    var i = 0;
    while (i < treeCount)
    {
        var x = Math.floor(random(qanak));
        var y = Math.floor(random(qanak));

        if (matrix[y][x] != 2 || matrix [y][x] != 3 || matrix [y][x] != 4 || matrix [y][x] != 6) 
        {
            matrix[y][x] = 5;
            i++;
        }
    }

    frameRate(10);
    createCanvas(matrix[0].length * side, matrix.length * side);
    background('#acacac');

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
            }

            if (matrix[y][x] == 3) 
            {
                var gishatich = new Gishatich(x,y);
                gishatichArr.push(gishatich);
            }

            if (matrix[y][x] == 4) 
            {
                var mard = new Mard(x,y);
                mardArr.push(mard);
            }

            if (matrix[y][x] == 5) 
            {
                var tree = new Tree(x,y);
                treeArr.push(tree);
            }
        }
    }
}

function draw() 
{
    for (var y = 0; y < matrix.length; y++) 
    {
        for (var x = 0; x < matrix[y].length; x++) 
        {
            if (matrix[y][x] == 0) 
            {
                fill("#acacac");
                rect(x * side, y * side, side, side);
            }

            if (matrix[y][x] == 1) 
            {
                fill("green");
                rect(x * side, y * side, side, side);
            }

            if (matrix[y][x] == 2) 
            {
                fill("yellow");
                rect(x * side, y * side, side, side);
            }

            if (matrix[y][x] == 3) 
            {
                fill("#FF6400");
                rect(x * side, y * side, side, side);
            }

            if (matrix[y][x] == 4) 
            {
                fill("red");
                rect(x * side, y * side, side, side);
            }

            if (matrix[y][x] == 5) 
            {
                fill("brown");
                rect(x * side, y * side, side, side);
            }

            if (matrix[y][x] == 6) 
            {
                fill("black");
                rect(x * side, y * side, side / 1.5, side / 1.5);
            }

            if (matrix[y][x] == 7) 
            {
                fill("blue");
                rect(x * side, y * side, side, side);
            }
        }
    }
    
    for (var i in mardArr) 
    {
        mardArr[i].utel();   
    }
    
    for (var i in grassArr) 
    {
        grassArr[i].bazmanal();
        grassArr[i].rain();
    }
    
    for (var i in gishatichArr) 
    {
        gishatichArr[i].utel();
    }

    for (var i in treeArr) 
    {
        treeArr[i].bazmanal();
    }
    
    for (var i in xotakerArr) 
    {
        xotakerArr[i].utel();
    } 
}

socket.on("staci kordinatnnery", gcel);