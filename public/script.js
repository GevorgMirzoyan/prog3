var socket = io();
// socket = io.connect('http://localhost:3000');

var matrix = [];
var fr = 10;
var side = 15;

// var norXotakernerJSON = JSON.stringify(norXotakerner);
// window.location = "package.json" + norXotakernerJSON;
//document.getElementById("demo").innerHTML = norXotakernerJSON;

function setup()
{
    frameRate(fr);
    createCanvas(matrix[0].length * side + 1, matrix.length * side + 1);
    background('#acacac');
}
    
socket.on('send matrix', function(matrix) 
{
    weatherChange();

    for (var y = 0; y < matrix.length; y++) 
    {
        for (var x = 0; x < matrix[y].length; x++) 
        {
            if (matrix[y][x] == 0) //datark vandak
            {
                if(weather == 'winter')
                {
                    fill("white");
                    rect(x * side, y * side, side, side);
                }

                else
                {
                    fill("#acacac");
                    rect(x * side, y * side, side, side); 
                }
            }

            else if (matrix[y][x] == 1) //xot
            {
                if(window.weather == 'spring')
                {
                    fill("#30ff30");
                    rect(x * side, y * side, side, side);
                }

                if(window.weather == 'summer')
                {
                    fill("#008000");
                    rect(x * side, y * side, side, side);
                }

                if(window.weather == 'autumn')
                {
                    fill("#ffe000");
                    rect(x * side, y * side, side, side);
                }

                if(window.weather == 'winter')
                {
                    fill("#e0ffe0");
                    rect(x * side, y * side, side, side);
                }
            }

            else if (matrix[y][x] == 2) //xotaker_arakan
            {
                fill("yellow");
                rect(x * side, y * side, side, side);
            }
            
            else if (matrix[y][x] == 2.5) //xotaker_igakan
            {
                fill("pink");
                rect(x * side, y * side, side, side);
            }

            else if (matrix[y][x] == 3) //gishatich_arakan
            {
                fill("#FF6400");
                rect(x * side, y * side, side, side);
            }

            else if (matrix[y][x] == 3.5) //gishatich_igakan
            {
                fill("pink");
                rect(x * side, y * side, side, side);
            }

            else if (matrix[y][x] == 4) //mard_arakan
            {
                fill("red");
                rect(x * side, y * side, side, side);
            }

            else if (matrix[y][x] == 4.5) //mard_igakan
            {
                fill("pink");
                rect(x * side, y * side, side, side);
            }

            else if (matrix[y][x] == 5) //tree
            {
                if(window.weather == 'spring')
                {
                    fill("red");
                    rect(x * side, y * side, side, side);
                }

                if(window.weather == 'summer')
                {
                    fill("yellow");
                    rect(x * side, y * side, side, side);
                }

                if(window.weather == 'autumn')
                {
                    fill("blue");
                    rect(x * side, y * side, side, side);
                }

                if(window.weather == 'winter')
                {
                    fill("black");
                    rect(x * side, y * side, side, side);
                }
            }
            
            else if (matrix[y][x] == 6) //water
            {
                fill("blue");
                rect(x * side, y * side, side, side);
            }
            
            else if (matrix[y][x] == 7) //vandak
            {
                fill("black");
                rect(x * side, y * side, side, side);
            }

            else if (matrix[y][x] == 8) //virus
            {
                fill("black");
                rect(x * side, y * side, side, side);
            }

            else if (matrix[y][x] == 9) //mutant
            {
                fill("red");
                rect(x * side, y * side, side, side);
            }

            else if (matrix[y][x] == 10) //virus_mutant
            {
                fill("black");
                rect(x * side, y * side, side, side);
            }

            else if (matrix[y][x] == 11) //virus_mutant
            {
                fill("blue");
                rect(x * side, y * side, side, side);
            }
        }
    }
})