class Xotaker extends Class10
{
    constructor(x, y) 
    {
        super(x,y);
        this.energy = 8;
        this.axorjak = 0;
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

            [this.x - 2, this.y - 2],
            [this.x, this.y - 2],
            [this.x + 2, this.y - 2],
            [this.x - 2, this.y],
            [this.x + 2, this.y],
            [this.x - 2, this.y + 2],
            [this.x, this.y + 2],
            [this.x + 2, this.y + 2]
        ];
    }

    yntrelVandak(ch) 
    {
       this.stanalNorKordinatner();
       return super.yntrelVandak(ch);
    }

    sharjvel() 
    {
        var datarkVandakner = this.yntrelVandak(0);
        var norVandak = random(datarkVandakner);

        if (norVandak) 
        {
            this.axorjak = 0;
            matrix[this.y][this.x] = 0;
            var norx = norVandak[0];
            var nory = norVandak[1];
            matrix[nory][norx] = 2;
            this.x = norx;
            this.y = nory;

            this.energy -= 1;
            if(this.energy <= 0)
            {
                this.mahanal();
            }
        }
    }

    utel() 
    {
        var xoter = this.yntrelVandak(1);
        var norVandak = random(xoter);

        if (norVandak) 
        {
            this.axorjak += 1;
            this.energy += 3;
            matrix[this.y][this.x] = 0;
            var norx = norVandak[0];
            var nory = norVandak[1];
            matrix[nory][norx] = 2;
            this.x = norx;
            this.y = nory;

            if (this.energy > 8) 
            {
                this.energy = 8;
            }

            for (var i in grassArr) 
            {
                if (this.x == grassArr[i].x && this.y == grassArr[i].y) 
                {
                    grassArr.splice(i, 1);
                }
            }

            if(this.axorjak >= 5)
            {
                this.bazmanal();
                this.axorjak = 0;
            }
        }

        else 
        {
            this.sharjvel();
        }
    }

    mahanal() 
    {
        for(var i in xotakerArr)
        {
            if (this.x == xotakerArr[i].x && this.y == xotakerArr[i].y) 
            {
                matrix[this.y][this.x] = 0;
                xotakerArr.splice(i, 1);
            }
        }        
    }

    bazmanal() 
    {
        var datarkVandakner = this.yntrelVandak(0);
        var norVandak = random(datarkVandakner);

        if (norVandak && this.axorjak >= 5) 
        {
            this.axorjak = 0;
            var norx = norVandak[0];
            var nory = norVandak[1];
            matrix[nory][norx] = 2;

            var norXotaker = new Xotaker(norx, nory);
            xotakerArr.push(norXotaker);
        }

        else
        {
            this.axorjak = 0;
        }     
    }
}