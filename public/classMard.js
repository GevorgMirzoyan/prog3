class Mard extends Class10
{
    constructor(x, y) 
    {
        super(x,y);
        this.energy = 25;
        this.axorjak = 0;
        this.wood = 3;
        this.ser;
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

        if (this.wood < 8 && norVandak4 && this.ser == 1)
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
                    //
                    matrix[nory][norx] = 7;
                    //
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
        if(this.ser == 1)
        {
            this.multiply_bazmanal++;

            if(this.multiply_bazmanal >= 50)
            {
                this.multiply_bazmanal = 0;
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
    }
}