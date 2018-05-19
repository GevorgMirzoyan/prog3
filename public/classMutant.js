class Mutant extends Class10 //not done
{
    constructor(x, y, virus_time) 
    {
        super(x, y, virus_time);
        this.energy = 70;
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

    sharjvel() //done
    {
        var datarkVandakner = this.yntrelVandak(0);
        var norVandak = random(datarkVandakner);

        if (norVandak) 
        {
            matrix[this.y][this.x] = 8;
            var norx = norVandak[0];
            var nory = norVandak[1];

            matrix[nory][norx] = 9;

            this.x = norx;
            this.y = nory;

            this.energy -= 1;

            if(this.energy <= 0)
            {
                this.mahanal();
            }
        }
    }

    mahanal() //done
    {
        for(var i in mutantArr)
        {
            if (this.x == mutantArr[i].x && this.y == mutantArr[i].y) 
            {
                // matrix[this.y][this.x] = 8;
                for(var i in this.directions)
                {
                    this.directions[i][0] = 8;
                    this.directions[i][1] = 8;
                }

                this.antiVirus();
            }
        }
    }

    antiVirus() //done
    {
        this.virus_time ++;

        if(this.virus_time >= 5)
        {
            for(var i in mutantArr)
            {
                if (this.x == mutantArr[i].x && this.y == mutantArr[i].y) 
                {
                   for(var i in this.directions)
                    {
                        this.directions[i][0] = 0;
                        this.directions[i][1] = 0;
                    }

                    mutantArr.splice(i, 1);
                }
            }
        }
    }

    utel() //not done
    {
        var xot = this.yntrelVandak(1);
        var norVandak = random(xot);

        var xotaker = this.yntrelVandak(2);
        var norVandak2 = random(xotaker);

        var xotaker2 = this.yntrelVandak(2.5);
        var norVandak3 = random(xotaker2);

        var gishatich = this.yntrelVandak(3);
        var norVandak4 = random(gishatich);

        var gishatich2 = this.yntrelVandak(3.5);
        var norVandak5 = random(gishatich2);

        var mard = this.yntrelVandak(4)
        var norVandak6 = random(mard);

        var mard2 = this.yntrelVandak(4.5)
        var norVandak7 = random(mard2);

        var tree = this.yntrelVandak(5);
        var norVandak8 = random(tree);
        
        if(norVandak)
        {
            this.energy += 1;
            matrix[this.y][this.x] = 8;

            var norx = norVandak[0];
            var nory = norVandak[1];

            matrix[nory][norx] = 9;

            this.x = norx;
            this.y = nory;

            if (this.energy > 50) //not done
            {
                this.energy = 50;
            }

            for (var i in grassArr) 
            {
                if (this.x == grassArr[i].x && this.y == grassArr[i].y) 
                {
                    grassArr.splice(i, 1);
                }
            }
        }

        else
        {
            this.sharjvel();
        }
    }
}