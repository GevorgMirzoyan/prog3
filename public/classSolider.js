class Solider extends Class10 //not done
{
    constructor(x, y) 
    {
        super(x, y);
        this.energy = 10;
        this.lvlUpScore = 0;
        this.lvl = 1;
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

    sharjvel() //not done
    {
        var datarkVandakner = this.yntrelVandak(0);
        var norVandak = random(datarkVandakner);

        var virus = this.yntrelVandak(8);
        var norVandak2 = random(virus);

        if (norVandak) 
        {
            this.lvlUpScore = 0;
            matrix[this.y][this.x] = 8;

            var cordX = this.x;
            var cordY = this.y;

            this.cords = [cordX,cordY]; 
            virusZoneArr.push(this.cords);
            this.cords = [];

            this.antiVirus();

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

        else if (norVandak2) 
        {
            this.lvlUpScore = 0;
            matrix[this.y][this.x] = 8;
            var norx = norVandak2[0];
            var nory = norVandak2[1];

            matrix[nory][norx] = 9;

            this.x = norx;
            this.y = nory;

            this.energy -= 1;

            if(this.energy <= 0)
            {
                this.mahanal();
            }
        }

        else
        {
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
                matrix[this.y][this.x] = 0;
                mutantArr.splice(i, 1);

                // matrix[this.y][this.x] = 8;
                // for(var i in this.directions)
                // {
                //     this.directions[i][0] = 8;
                //     this.directions[i][1] = 8;
                // }

                // this.antiVirus();
            }
        }
    }

    utel() //not done
    {
        var mutant = this.yntrelVandak(9);
        var norVandak = random(mutant);
        
        if(norVandak) 
        {
            this.energy += 1;
            matrix[this.y][this.x] = 8;

            var cordX = this.x;
            var cordY = this.y;

            this.cords = [cordX,cordY]; 
            virusZoneArr.push(this.cords);
            this.cords = [];

            this.antiVirus();

            if(this.lvl != 10)
            {
                this.lvlUpScore += 1;
            }
            
            var norx = norVandak[0];
            var nory = norVandak[1];

            matrix[nory][norx] = 9;

            this.x = norx;
            this.y = nory;

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

        this.lvlChange();
    }

    lvlChange() //done
    {
        if(this.lvl != 10)
        {
            if(this.lvl == 1)
            {
                if(this.energy > 10)
                {
                    this.energy = 10;
                }
            }

            if(this.lvlUpScore > 10 && this.lvl == 1) 
            {
                this.lvl = 2;   
                this.lvlUpScore = 0;
                this.energy = 20;

                if(this.energy > 20)
                {
                    this.energy = 20;
                }
            }

            else if(this.lvlUpScore > 10 && this.lvl == 2)
            {
                this.lvl = 3;
                this.lvlUpScore = 0;
                this.energy = 30;
                
                if(this.energy > 30)
                {
                    this.energy = 30;
                }
            }

            else if(this.lvlUpScore > 10 && this.lvl == 3)
            {
                this.lvl = 4;
                this.lvlUpScore = 0;
                this.energy = 40;

                if(this.energy > 40)
                {
                    this.energy = 40;
                }
            }

            else if(this.lvlUpScore > 10 && this.lvl == 4)
            {
                this.lvl = 5;
                this.lvlUpScore = 0;
                this.energy = 50;

                if(this.energy > 50)
                {
                    this.energy = 50;
                }
            }

            else if(this.lvlUpScore > 10 && this.lvl == 5)
            {
                this.lvl = 6;
                this.lvlUpScore = 0;
                this.energy = 60;

                if(this.energy > 60)
                {
                    this.energy = 60;
                }
            }

            else if(this.lvlUpScore > 10 && this.lvl == 6)
            {
                this.lvl = 7;       
                this.lvlUpScore = 0;
                this.energy = 70;

                if(this.energy > 70)
                {
                    this.energy = 70;
                }
            }

            else if(this.lvlUpScore > 10 && this.lvl == 7)
            {
                this.lvl = 8;
                this.lvlUpScore = 0;
                this.energy = 80;

                if(this.energy > 80)
                {
                    this.energy = 80;
                }
            }

            else if(this.lvlUpScore > 10 && this.lvl == 8)
            {
                this.lvl = 9;
                this.lvlUpScore = 0;
                this.energy = 90;

                if(this.energy > 90)
                {
                    this.energy = 90;
                }
            }

            else if(this.lvlUpScore > 10 && this.lvl == 9)
            {
                this.lvl = 10;
                this.lvlUpScore = 0;
                this.energy = 100;
            }
        }

        else
        {
            if(this.energy > 100)
            {
                this.energy = 100;
            }
        }
    }
}