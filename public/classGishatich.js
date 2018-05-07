class Gishatich extends Class10
{
    constructor(x, y) 
    {
        super(x,y);
        this.yntaniKendani = false;
        this.energy = 15;
        this.axorjak = 0;
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
            [this.x + 3, this.y + 3]
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

            var mard = this.yntrelVandak(4.5);
            var norVandak2 = random(mard);

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

            if (norVandak2) 
            {
                this.axorjak += 1;
                this.energy += 2;
                matrix[this.y][this.x] = 0;
                var norx = norVandak2[0];
                var nory = norVandak2[1];
                matrix[nory][norx] = 3;
                this.x = norx;
                this.y = nory;

                if (this.energy > 15) 
                {
                    this.energy = 15;
                }

                for (var i in mardArr) 
                {
                    if (this.x == mardArr[i].x && this.y == mardArr[i].y) 
                    {
                        mardArr.splice(i, 1);
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
        if(this.ser == 1)
        {
            this.multiply_bazmanal++;

            if(this.multiply_bazmanal >= 50)
            {
                this.multiply_bazmanal = 0;

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
    }
}