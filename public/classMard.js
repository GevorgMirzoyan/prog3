class Mard extends Class10 //done
{
    constructor(x, y, changeTime, spring, summer, autumn, winter) 
    {
        super(x, y, changeTime, spring, summer, autumn, winter);
        this.energy = 30;
        this.axorjak = 0;
        this.wood = 3;
        this.ser = 0;
        this.bazmacox = false;
        this.timeout_time = 0;
        this.bazmanal_timeout = true;
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

    timeout() //done
    {
        if(this.bazmanal_timeout == false)
        {
            this.timeout_time ++;
            
            if(this.timeout_time >= 3)
            {
                this.timeout_time = 0;
                this.bazmanal_timeout = true;
            }
        }
    }

    sharjvel() //done
    {
        var datarkVandakner = this.yntrelVandak(0);
        var norVandak = random(datarkVandakner);

        if (norVandak) 
        {
            this.axorjak = 0;

            matrix[this.y][this.x] = 0;
            var norx = norVandak[0];
            var nory = norVandak[1];

            if(this.ser == 1)
            {
                matrix[nory][norx] = 4;
            }

            else
            {
                matrix[nory][norx] = 4.5;
            }

            this.x = norx;
            this.y = nory;

            this.energy-= 1;

            if(this.energy <= 0)
            {
                this.mahanal();
            }
        }
    }

    utel() // done
    {
        var xot = this.yntrelVandak(1);
        var norVandak = random(xot);

        var xotaker = this.yntrelVandak(2, 2.5);
        var norVandak2 = random(xotaker);

        var gishatich = this.yntrelVandak(3, 3.5);
        var norVandak3 = random(gishatich);

        var tree = this.yntrelVandak(5);
        var norVandak4 = random(tree);

        for(var i in gishatichArr)
        {
            if(norVandak3[0] == gishatichArr[i].x && norVandak3[1] == gishatichArr[i].y)
            {
                var gishatich = gishatichArr[i];
            }
        }

        if (this.wood < 3 && norVandak4)
        {
            this.axorjak = 0;
            this.wood += 3;

            matrix[this.y][this.x] = 0;
            var norx = norVandak4[0];
            var nory = norVandak4[1];
            
            if(this.ser == 1)
            {
                matrix[nory][norx] = 4;
            }

            else
            {
                matrix[nory][norx] = 4.5;
            }

            this.x = norx;
            this.y = nory;

            if(this.wood > 10)
            {
                this.wood = 10;
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
                this.mahanal();
            }
        }
        
        else if (norVandak3 && gishatich.yntaniKendani == false  && this.ser == 1)
        {
            if(this.wood >= 3)
            {
                gishatich.yntaniKendani = true;

                this.axorjak = 0;
                this.wood -= 3;

                var norx = norVandak3[0];
                var nory = norVandak3[1];

                matrix[nory][norx] = 7;

                gishatich.yntaniKendani();

                if(gishatich.vandak_off == true)
                {
                    if(gishatich.ser == 1)
                    {
                        matrix[nory][norx] = 3;
                    }

                    else
                    {
                        matrix[nory][norx] = 3.5;
                    }
                }

                this.energy -= 5;

                if(this.energy <= 0)
                {
                    this.mahanal();
                }
            }

            else
            {
                var i = Math.round(random(10));

                if (i >= 3) 
                {
                    for (var i in gishatichArr) 
                    {
                        if (this.x == gishatichArr[i].x && this.y == gishatichArr[i].y) 
                        {
                            gishatichArr.splice(i, 1);
                            matrix[this.y][this.x] = 0;                        
                        }
                    }

                    this.axorjak += 1;
                    this.energy += 3;

                    var norx = norVandak3[0];
                    var nory = norVandak3[1];

                    this.x = norx;
                    this.y = nory;

                    if(this.ser == 1)
                    {
                        matrix[nory][norx] = 4;
                    }

                    else
                    {
                        matrix[nory][norx] = 4.5;
                    }
                   
                    if (this.energy > 50) 
                    {
                        this.energy = 50;
                    }

                    if(this.axorjak >= 20 && this.ser == 1)
                    {
                        this.bazmacox = true;
                        this.axorjak = 0;
                        this.bazmanal();
                    }

                    else if(this.axorjak >= 20 && this.ser == 2)
                    {
                        this.bazmacox = true;
                        this.axorjak = 0;
                    }
                }

                else 
                {
                    this.mahanal();

                    gishatich.axorjak += 1;
                    gishatich.energy += 3;

                    if(gishatich.energy >= 25)
                    {
                        gishatich.energy = 25;
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

            if(this.ser == 1)
            {
                matrix[nory][norx] = 4;
            }

            else
            {
                matrix[nory][norx] = 4.5;
            }

            this.x = norx;
            this.y = nory;

            if (this.energy > 50) 
            {
                this.energy = 50;
            }

            if(this.axorjak >= 20 && this.ser == 1)
            {
                this.bazmacox = true;
                this.axorjak = 0;
                this.bazmanal();
            }

            else if(this.axorjak >= 20 && this.ser == 2)
            {
                this.bazmacox = true;
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

            if(this.ser == 1)
            {
                matrix[nory][norx] = 4;
            }

            else
            {
                matrix[nory][norx] = 4.5;
            }
            
            this.x = norx;
            this.y = nory;

            if (this.energy >= 50) 
            {
                this.energy = 50;
            }

            if(this.axorjak >= 20 && this.ser == 1)
            {
                this.bazmacox = true;
                this.axorjak = 0;
                this.bazmanal();
            }

            else if(this.axorjak >= 20 && this.ser == 2)
            {
                this.bazmacox = true;
                this.axorjak = 0;
            }
        }

        else
        {
            this.sharjvel();
        }
    }

    mahanal() //done
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
    
    bazmanal() //done
    {
        if(this.ser == 1 && this.bazmanal_timeout == true)
        {
            var datarkVandakner = this.yntrelVandak(0);
            var norVandak = random(datarkVandakner);
            var norVandak3 = random(datarkVandakner);

            var xotaker = this.yntrelVandak(2,2.5);
            var norVandak4 = random(xotaker);
            var norVandak5 = random(xotaker);

            var mard = this.yntrelVandak(4.5);
            var norVandak2 = random(mard);
        
            if (norVandak2)
            {
                for(var i in mardArr)
                {
                    if(norVandak2[0] == mardArr[i].x && norVandak2[1] == mardArr[i].y)
                    {
                        var mard_igakan = mardArr[i];
                    }
                }

                if(norVandak)
                {
                    this.bazmanal_timeout = false; 

                    if(mard_igakan.bazmacox == false)
                    {
                        var norx = norVandak[0];
                        var nory = norVandak[1];

                        var r = Math.floor(random(5));
            
                        if(r >= 1)
                        {
                            matrix[nory][norx] = 4;
                        }
                
                        else
                        {
                            matrix[nory][norx] = 4.5;
                        }
                
                        var norMard = new Mard(norx, nory);
                        mardArr.push(norMard);
                
                        if(matrix[nory][norx] == 4)
                        {
                            norMard.ser = 1;
                        }
                
                        else
                        {
                            norMard.ser = 2 ;
                        }
                    }
                    
                    else if(mard_igakan.bazmacox == true)
                    {
                        norMard.bazmacox = false;

                        var norx = norVandak[0];
                        var nory = norVandak[1];

                        var r = Math.floor(random(5));
            
                        if(r >= 1)
                        {
                            matrix[nory][norx] = 4;
                        }
                
                        else
                        {
                            matrix[nory][norx] = 4.5;
                        }
                
                        var norMard = new Mard(norx, nory);
                        mardArr.push(norMard);
                
                        if(matrix[nory][norx] == 4)
                        {
                            norMard.ser = 1;
                        }
                
                        else
                        {
                            norMard.ser = 2 ;
                        }

                        if(norVandak3[0] != norVandak[0] && norVandak3[1] != norVandak[1])
                        {
                            var norx = norVandak3[0];
                            var nory = norVandak3[1];

                            var r2 = Math.floor(random(5));
                
                            if(r2 >= 1)
                            {
                                matrix[nory][norx] = 3;
                            }
                    
                            else
                            {
                                matrix[nory][norx] = 3.5;
                            }
                    
                            var norMard = new Mard(norx, nory);
                            mardArr.push(norMard);
                    
                            if(matrix[nory][norx] == 3)
                            {
                                norMard.ser = 1;
                            }
                    
                            else
                            {
                                norMard.ser = 2 ;
                            }
                        }
                    }
                }

                if(norVandak4)
                {
                    this.bazmanal_timeout = false; 

                    if(mard_igakan.bazmacox == false)
                    {
                        var norx = norVandak4[0];
                        var nory = norVandak4[1];

                        var r = Math.floor(random(5));
            
                        if(r >= 1)
                        {
                            matrix[nory][norx] = 4;
                        }
                
                        else
                        {
                            matrix[nory][norx] = 4.5;
                        }
                
                        var norMard = new Mard(norx, nory);                       
                        mardArr.push(norMard);
                
                        if(matrix[nory][norx] == 4)
                        {
                            norMard.ser = 1;
                        }
                
                        else
                        {
                            norMard.ser = 2 ;
                        }
                        
                        for(var i in xotakerArr)
                        {
                            if(norMard.x == xotakerArr[i].x && norMard.y == xotakerArr[i].y)
                            {
                                xotakerArr.splice(i, 1);
                                norMard.axorjak += 1;
                            }
                        }
                    }
                    
                    else if(mard_igakan.bazmacox == true)
                    {
                        mard_igakan.bazmacox = false;

                        var norx = norVandak4[0];
                        var nory = norVandak4[1];

                        var r = Math.floor(random(5));
            
                        if(r >= 1)
                        {
                            matrix[nory][norx] = 4;
                        }
                
                        else
                        {
                            matrix[nory][norx] = 4.5;
                        }
                
                        var norMard = new Mard(norx, nory);
                        mardArr.push(norMard);
                
                        if(matrix[nory][norx] == 4)
                        {
                            norMard.ser = 1;
                        }
                
                        else
                        {
                            norMard.ser = 2 ;
                        }

                        for(var i in xotakerArr)
                        {
                            if(norMard.x == xotakerArr[i].x && norMard.y == xotakerArr[i].y)
                            {
                                xotakerArr.splice(i, 1);
                                norMard.axorjak += 1;
                            }
                        }

                        if(norVandak4[0] != norVandak5[0] && norVandak4[1] != norVandak5[1])
                        {
                            var norx = norVandak5[0];
                            var nory = norVandak5[1];

                            var r2 = Math.floor(random(5));
                
                            if(r2 >= 1)
                            {
                                matrix[nory][norx] = 4;
                            }
                    
                            else
                            {
                                matrix[nory][norx] = 4.5;
                            }
                    
                            var norMard2 = new Mard(norx, nory);
                            mardArr.push(norMard2);
                    
                            if(matrix[nory][norx] == 4)
                            {
                                norMard2.ser = 1;
                            }
                    
                            else
                            {
                                norMard2.ser = 2 ;
                            }

                            for(var i in xotakerArr)
                            {
                                if(norMard2.x == xotakerArr[i].x && norMard2.y == xotakerArr[i].y)
                                {
                                    mardArr.splice(i, 1);
                                    norMard2.axorjak += 1;
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}