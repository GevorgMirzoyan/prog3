class Grass 
{
    constructor(x, y) 
    {
        this.x = x;
        this.y = y;
        this.multiply = 0;
        this.multiply2 = 0;
        this.directions = [
            [this.x - 1, this.y - 1],
            [this.x, this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y],
            [this.x + 1, this.y],
            [this.x - 1, this.y + 1],
            [this.x, this.y + 1],
            [this.x + 1, this.y + 1]
        ];
    }

    yntrelVandak(ch) 
    {
        var found = [];

        for (var i in this.directions) 
        {
            var x = this.directions[i][0];
            var y = this.directions[i][1];

            if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) 
            {
                if (matrix[y][x] == ch) 
                {
                    found.push(this.directions[i]);
                }
            }
        }

        return found;
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
            for (var i = 0; i < 3000; i++)
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

class Xotaker 
{
    constructor(x, y) 
    {
        this.x = x;
        this.y = y;
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

        var found = [];
        for (var i in this.directions) 
        {
            var x = this.directions[i][0];
            var y = this.directions[i][1];

            if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) 
            {
                if (matrix[y][x] == ch) 
                {
                    found.push(this.directions[i]);
                }
            }
        }

        return found;
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

class Gishatich 
{
    constructor(x, y) 
    {
        this.x = x;
        this.y = y;
        this.yntaniKendani = false;
        this.energy = 15;
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
            [this.x + 2, this.y + 2],

            [this.x - 3, this.y - 3],
            [this.x, this.y - 3],
            [this.x + 3, this.y - 3],
            [this.x - 3, this.y],
            [this.x + 3, this.y],
            [this.x - 3, this.y + 3],
            [this.x, this.y + 3],
            [this.x + 3, this.y + 3]
        ];
    }

    yntrelVandak(ch) 
    {
        this.stanalNorKordinatner();

        var found = [];
        for (var i in this.directions) 
        {
            var x = this.directions[i][0];
            var y = this.directions[i][1];

            if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) 
            {
                if (matrix[y][x] == ch) 
                {
                    found.push(this.directions[i]);
                }
            }
        }

        return found;
    }

    sharjvel() 
    {
        var datarkVandakner = this.yntrelVandak(0);
        var norVandak = random(datarkVandakner);

        var datarkVandakner2 = this.yntrelVandak(1);
        var norVandak2 = random(datarkVandakner2);

        if (norVandak) 
        {
            this.axorjak = 0;
            matrix[this.y][this.x] = 0;
            var norx = norVandak[0];
            var nory = norVandak[1];
            matrix[nory][norx] = 3;
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
            if(this.yntaniKendani == true)
            {
                matrix[this.y][this.x] = 7;
            }

            else if(this.yntaniKendani == false)
            {
                matrix[this.y][this.x] = 3;
            }

            this.axorjak = 0;
            matrix[this.y][this.x] = 1;
            var norx = norVandak2[0];
            var nory = norVandak2[1];
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
        if(this.yntaniKendani == true)
        {
            var xotaker = this.yntrelVandak(2);
            var norVandak = random(xotaker);

            if (norVandak) 
            {
                this.axorjak += 1;
                this.energy += 2;

                matrix[this.y][this.x] = 0;
                var norx = norVandak[0];
                var nory = norVandak[1];
                matrix[nory][norx] = 7;
                this.x = norx;
                this.y = nory;

                if (this.energy > 30) 
                {
                    this.energy = 30;
                }

                for (var i in xotakerArr) 
                {
                    if (this.x == xotakerArr[i].x && this.y == xotakerArr[i].y) 
                    {
                        xotakerArr.splice(i, 1);
                    }
                }

                if(this.axorjak >= 12)
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

        else if(this.yntaniKendani == false)
        {
            var xotaker = this.yntrelVandak(2);
            var norVandak = random(xotaker);

            if (norVandak) 
            {
                this.axorjak += 1;
                this.energy += 2;
                matrix[this.y][this.x] = 0;
                var norx = norVandak[0];
                var nory = norVandak[1];
                matrix[nory][norx] = 3;
                this.x = norx;
                this.y = nory;

                if (this.energy > 15) 
                {
                    this.energy = 15;
                }

                for (var i in xotakerArr) 
                {
                    if (this.x == xotakerArr[i].x && this.y == xotakerArr[i].y) 
                    {
                        xotakerArr.splice(i, 1);
                    }
                }

                if(this.axorjak >= 7)
                {
                    this.bazmanal();
                }
            }

            else 
            {
                this.sharjvel();
            }
        }
    }

    mahanal() 
    {
        for (var i in gishatichArr) 
        {
            if (this.x == gishatichArr[i].x && this.y == gishatichArr[i].y) 
            {
                matrix[this.y][this.x] = 0;
                gishatichArr.splice(i, 1);
            }
        }
    }

    bazmanal() 
    {
        if(this.yntaniKendani == false)
        {
            var datarkVandakner = this.yntrelVandak(0);
            var norVandak = random(datarkVandakner);

            if (norVandak && this.axorjak == 7) 
            {
                this.axorjak = 0;
                var norx = norVandak[0];
                var nory = norVandak[1];
                matrix[nory][norx] = 3;

                var norGishatich = new Gishatich(norx, nory);
                gishatichArr.push(norGishatich);
            }

            else
            {
                this.axorjak = 0;
            }     
        }

        else if(this.yntaniKendani == true)
        {
            var datarkVandakner = this.yntrelVandak(0);
            var norVandak = random(datarkVandakner);

            if (norVandak && this.axorjak == 7) 
            {
                this.axorjak = 0;
                var norx = norVandak[0];
                var nory = norVandak[1];
                matrix[nory][norx] = 7;

                var norGishatich = new Gishatich(norx, nory);
                gishatichArr.push(norGishatich);
                norGishatich.yntaniKendani = true;
                norGishatich.energy = 30;
            }

            else
            {
                this.axorjak = 0;
            } 
        }
    }
}

class Mard 
{
    constructor(x, y) 
    {
        this.x = x;
        this.y = y;
        this.energy = 25;
        this.axorjak = 0;
        this.wood = 3;
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
            [this.x + 2, this.y + 2],

            [this.x - 3, this.y - 3],
            [this.x, this.y - 3],
            [this.x + 3, this.y - 3],
            [this.x - 3, this.y],
            [this.x + 3, this.y],
            [this.x - 3, this.y + 3],
            [this.x, this.y + 3],
            [this.x + 3, this.y + 3],

            [this.x - 4, this.y - 4],
            [this.x, this.y - 4],
            [this.x + 4, this.y - 4],
            [this.x - 4, this.y],
            [this.x + 4, this.y],
            [this.x - 4, this.y + 4],
            [this.x, this.y + 4],
            [this.x + 4, this.y + 4],

            [this.x - 5, this.y - 5],
            [this.x, this.y - 5],
            [this.x + 5, this.y - 5],
            [this.x - 5, this.y],
            [this.x + 5, this.y],
            [this.x - 5, this.y + 5],
            [this.x, this.y + 5],
            [this.x + 5, this.y + 5]
        ];
    }

    yntrelVandak(ch) 
    {
        this.stanalNorKordinatner();

        var found = [];
        for (var i in this.directions) 
        {
            var x = this.directions[i][0];
            var y = this.directions[i][1];

            if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) 
            {
                if (matrix[y][x] == ch) 
                {
                    found.push(this.directions[i]);
                }
            }
        }

        return found;
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
            matrix[nory][norx] = 4;
            this.x = norx;
            this.y = nory;

            this.energy-= 1;
            if(this.energy <= 0)
            {
                this.mahanal();
            }
        }
    }

    utel() 
    {
        var xot = this.yntrelVandak(1);
        var norVandak = random(xot);

        var xotaker = this.yntrelVandak(2);
        var norVandak2 = random(xotaker);

        var gishatich = this.yntrelVandak(3);
        var norVandak3 = random(gishatich);

        var tree = this.yntrelVandak(5);
        var norVandak4 = random(tree);

        if (this.wood < 8 && norVandak4)
        {
            this.axorjak = 0;
            this.wood += 3; 
            matrix[this.y][this.x] = 0;
            var norx = norVandak4[0];
            var nory = norVandak4[1];
            matrix[nory][norx] = 4;
            this.x = norx;
            this.y = nory;

            if(this.wood > 8)
            {
                this.wood = 8;
            }

            for (var i in treeArr) 
            {
                if (this.x == treeArr[i].x && this.y == treeArr[i].y) 
                {
                    treeArr.splice(i,1);
                }
            }

            this.energy -= 2;
            if(this.energy <= 0)
            {
                this.mahanal;
            }
        }
        
        else if (norVandak3)
        {
            if(norVandak3.yntaniKendani == true)
            {
                this.axorjak = 0;
                this.energy -= 1;
                if(this.energy <= 0)
                {
                    this.mahanal();
                }
            }

            else if(norVandak3.yntaniKendani == false)
            {
                if(this.wood >= 3)
                {
                    this.axorjak = 0;
                    this.wood -= 3;
                    norVandak3.yntaniKendani = true;
                    var norx = norVandak3[0];
                    var nory = norVandak3[1];

                    //for(var i = 0; i < 10; i++)
                    //{
                        //matrix[nory][norx] = 6;
                        //if(i >= 10)
                        //{
                            matrix[nory][norx] = 7; 
                        //}
                    //}

                    this.energy -= 2;
                    if(this.energy <= 0)
                    {
                        this.mahanal();
                    }
                }

                else
                {
                    var i = Math.round(random(10));

                    if (i >= 1) 
                    {
                        this.axorjak += 1;
                        this.energy += 3;

                        for (var i in gishatichArr) 
                        {
                            if (this.x == gishatichArr[i].x && this.y == gishatichArr[i].y) 
                            {
                                gishatichArr.splice(i, 1);
                                matrix[this.y][this.x] = 0;
                                var norx = norVandak3[0];
                                var nory = norVandak3[1];
                                this.x = norx;
                                this.y = nory;
                                matrix[nory][norx] = 4;

                                if (this.energy > 25) 
                                {
                                    this.energy = 25;
                                }

                                if(this.axorjak >= 12)
                                {
                                    this.bazmanal();
                                    this.axorjak = 0;
                                }
                            }
                        }
                    }

                    else if (i == 0) 
                    {
                        this.mahanal();
                        norVandak3.energy += 3;
                        if(norVandak3.energy >= 7)
                        {
                            norVandak3.bazmanal();
                        }
                    }
                }
            }
        }
            
        else if (norVandak2) 
        {
            this.axorjak += 1;
            this.energy += 2;

            matrix[this.y][this.x] = 0;
            var norx = norVandak2[0];
            var nory = norVandak2[1];
            matrix[nory][norx] = 4;
            this.x = norx;
            this.y = nory;

            if (this.energy > 25) 
            {
                this.energy = 25;
            }

            if(this.axorjak >= 12)
            {
                this.bazmanal();
                this.axorjak = 0;
            }

            for (var i in xotakerArr) 
            {
                if (this.x == xotakerArr[i].x && this.y == xotakerArr[i].y) 
                {
                    xotakerArr.splice(i, 1);
                }
            }
        }

        else if (norVandak) 
        {
            this.axorjak += 1;
            this.energy += 1;
            matrix[this.y][this.x] = 0;
            var norx = norVandak[0];
            var nory = norVandak[1];
            matrix[nory][norx] = 4;
            this.x = norx;
            this.y = nory;

            if (this.energy >= 25) 
            {
                this.energy = 25;
            }

            if(this.axorjak >= 12)
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
        for (var i in mardArr) 
        {
            if (this.x == mardArr[i].x && this.y == mardArr[i].y) 
            {
                matrix[this.y][this.x] = 0;
                mardArr.splice(i, 1);
            }
        }
    }

    bazmanal() 
    {
        var datarkVandakner = this.yntrelVandak(0);
        var norVandak = random(datarkVandakner);

        if (norVandak && this.axorjak >= 12) 
        {
            this.axorjak = 0;
            var norx = norVandak[0];
            var nory = norVandak[1];
            matrix[nory][norx] = 4;

            var norMard = new Mard(norx, nory);
            mardArr.push(norMard);
            this.axorjak = 0;
        }

        else
        {
            this.axorjak = 0;
        }     
    }
}

class Tree 
{
    constructor(x, y) 
    {
        this.x = x;
        this.y = y;
        this.multiply = 0;
        this.directions = [
            [this.x - 1, this.y - 1],
            [this.x, this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y],
            [this.x + 1, this.y],
            [this.x - 1, this.y + 1],
            [this.x, this.y + 1],
            [this.x + 1, this.y + 1]
        ];
    }

    yntrelVandak(ch) 
    {
        var found = [];

        for (var i in this.directions) 
        {
            var x = this.directions[i][0];
            var y = this.directions[i][1];

            if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) 
            {
                if (matrix[y][x] == ch) 
                {
                    found.push(this.directions[i]);
                }
            }
        }

        return found;
    }

    bazmanal() 
    {
        this.multiply++;

        var datarkVandakner = this.yntrelVandak(0);
        var norVandak = random(datarkVandakner);

        if (norVandak && this.multiply >= 300) 
        {
            var norx = norVandak[0];
            var nory = norVandak[1];
            matrix[nory][norx] = 5;

            var newTree = new Tree(norx, nory);
            treeArr.push(newTree);
            this.multiply = 0;
        }
    }
}