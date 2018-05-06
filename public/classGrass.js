class Grass extends Class10
{
    constructor(x, y) 
    {
        super(x,y);
        this.multiply = 0;
        this.multiply2 = 0;
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

    bazmanal() 
    {
        this.multiply++;
        var datarkVandakner = this.yntrelVandak(0);
        var norVandak = random(datarkVandakner);

        if (norVandak && this.multiply >= 30) 
        {
            var norx = norVandak[0];
            var nory = norVandak[1];
            matrix[nory][norx] = 1;

            var norXot = new Grass(norx, nory);
            grassArr.push(norXot);
            this.multiply = 0;
        }
    }

    rain()
    {
        this.multiply2++;

        if (this.multiply >= 700) 
        {
            this.multiply2 = 0;
            for (var i = 0; i < 300; i++)
            {
                var x = Math.floor(random(100));
                var y = Math.floor(random(100));
        
                if (matrix[y][x] == 0) 
                {
                    matrix[y][x] = 1;
                    var norXot = new Grass(x, y);
                    grassArr.push(norXot);
                }
            }
        }
    }
}