class Mutant extends Class10 //not done
{
    constructor(x, y, virus_time) 
    {
        super(x, y, virus_time);
        this.energy = 10;
        this.lvlUpScore = 0;
        this.lvl = 1;
        this.cords = [];
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

        var virus = this.yntrelVandak(8);
        var norVandak2 = random(virus);

        if (norVandak) 
        {
            this.lvlUpScore = 0;
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

    antiVirus() //not done
    {
        this.virus_time = 0;

        for(var i in virusZoneArr)
        {
            this.virus_time ++;
            var a = virusZoneArr[i][1];
            var b = virusZoneArr[i][0];

            if(this.virus_time >= 5)
            {
                console.log(a,b);
                matrix[a][b] = 0;
                virusZoneArr.splice(i, 1);
            }
        }
    }

    utel() //done
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

        else if(norVandak2 || norVandak3)
        {
            this.energy += 1;
            matrix[this.y][this.x] = 8;

            if(this.lvl != 10)
            {
                this.lvlUpScore += 1;
            }
            
            if(norVandak2)
            {
                var norx = norVandak2[0];
                var nory = norVandak2[1];
            }

            else if(norVandak3)
            {
                var norx = norVandak3[0];
                var nory = norVandak3[1];
            }

            matrix[nory][norx] = 9;

            this.x = norx;
            this.y = nory;

            for (var i in xotakerArr) 
            {
                if (this.x == xotakerArr[i].x && this.y == xotakerArr[i].y) 
                {
                    xotakerArr.splice(i, 1);
                }
            }
        }

        else if(norVandak4 || norVandak5)
        {
            this.energy += 1;
            matrix[this.y][this.x] = 8;
            
            if(this.lvl != 10)
            {
                this.lvlUpScore += 1;
            }
            
            if(norVandak4)
            {
                var norx = norVandak4[0];
                var nory = norVandak4[1];
            }

            else if(norVandak5)
            {
                var norx = norVandak5[0];
                var nory = norVandak5[1];
            }

            matrix[nory][norx] = 9;

            this.x = norx;
            this.y = nory;

            for (var i in gishatichArr) 
            {
                if (this.x == gishatichArr[i].x && this.y == gishatichArr[i].y) 
                {
                    gishatichArr.splice(i, 1);
                }
            }
        }

        else if(norVandak6 || norVandak7)
        {
            this.energy += 1;
            matrix[this.y][this.x] = 8;

            if(this.lvl != 10)
            {
                this.lvlUpScore += 1;
            }
            
            if(norVandak6)
            {
                var norx = norVandak6[0];
                var nory = norVandak6[1];
            }

            else if(norVandak7)
            {
                var norx = norVandak7[0];
                var nory = norVandak7[1];
            }

            matrix[nory][norx] = 9;

            this.x = norx;
            this.y = nory;

            for (var i in mardArr) 
            {
                if (this.x == mardArr[i].x && this.y == mardArr[i].y) 
                {
                    mardArr.splice(i, 1);
                }
            }
        }

        else if(norVandak8)
        {
            this.energy += 1;
            matrix[this.y][this.x] = 8;

            if(this.lvl != 10)
            {
                this.lvlUpScore += 1;
            }

            var norx = norVandak8[0];
            var nory = norVandak8[1]; 

            matrix[nory][norx] = 9;

            this.x = norx;
            this.y = nory;

            for (var i in treeArr) 
            {
                if (this.x == treeArr[i].x && this.y == treeArr[i].y) 
                {
                    treeArr.splice(i, 1);
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