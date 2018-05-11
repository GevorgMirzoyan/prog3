class Grass extends Class10 //done
{
    constructor(x, y, changeTime, spring, summer, autumn, winter) 
    {
        super(x, y, changeTime, spring, summer, autumn, winter);
        this.multiply_bazmanal = 0;
    }

    stanalNorKordinatner() 
    {
        this.directions = [
            [this.x - 1, this.y - 1],
            [this.x, this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y],
            [this.x + 1, this.y],
            [this.x - 1, this.y + 1],
            [this.x, this.y + 1],
            [this.x + 1, this.y + 1],
        ];
    }

    yntrelVandak(ch) 
    {
       this.stanalNorKordinatner();
       return super.yntrelVandak(ch);
    }

    bazmanal() //done
    {
        this.multiply_bazmanal++;

        var datarkVandakner = this.yntrelVandak(0);
        var norVandak = random(datarkVandakner);

        if (norVandak && this.multiply_bazmanal >= 1) 
        {
            this.multiply_bazmanal = 0;
            var norx = norVandak[0];
            var nory = norVandak[1];
            matrix[nory][norx] = 1;

            var norXot = new Grass(norx, nory);
            grassArr.push(norXot);
        }
    }

    // rain() //not done
    // {
    //     if(grassArr != [])
    //     {
    //         this.multiply_rain++;
    //         console.log(this.multiply_rain);

    //         if (this.multiply_rain >= 5) 
    //         {
    //             this.multiply_rain = 0;

    //             for (var i = 0; i < 10; i++)
    //             {
    //                 var x = Math.round(random(100));
    //                 var y = Math.round(random(100));
            
    //                 if (matrix[y][x] == 0) 
    //                 {
    //                     matrix[y][x] = 6;

    //                     var rain_time = 0;
    //                     rain_time++;
    //                     console.log(rain_time);
    //                     if(rain_time >= 3)
    //                     {
    //                         matrix[y][x] = 1;

    //                         var norXot = new Grass(x, y);
    //                         grassArr.push(norXot);
    //                     }
    //                 }
    //             }
    //         }
    //     }
    // }
}