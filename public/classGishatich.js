class Gishatich extends Class10 //not done
{
    constructor(x, y) 
    {
        super(x,y);
        this.yntaniKendani = false;
        this.energy = 15;
        this.axorjak = 0;
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
            [this.x + 3, this.y + 3]
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

        var xot = this.yntrelVandak(1);
        var norVandak2 = random(xot);

        this.axorjak = 0;

        if (norVandak) 
        {
            matrix[this.y][this.x] = 0;
            var norx = norVandak[0];
            var nory = norVandak[1];

            if(this.ser == 1)
            {
                matrix[nory][norx] = 3;
            }

            else
            {
                matrix[nory][norx] = 3.5;
            }

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
            for (var i in grassArr) 
            {
                if (this.x == grassArr[i].x && this.y == grassArr[i].y) 
                {
                    grassArr.splice(i, 1);
                }
            }

            matrix[this.y][this.x] = 0;
            
            var norx = norVandak2[0];
            var nory = norVandak2[1];

            this.x = norx;
            this.y = nory;

            if(this.ser == 1)
            {
                matrix[nory][norx] = 3;
            }

            else
            {
                matrix[nory][norx] = 3.5;
            }

            this.energy -= 1;

            if(this.energy <= 0)
            {
                this.mahanal();
            }
        }
    }

    mahanal() //done
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

    timeout() //done
    {
        if(this.bazmanal_timeout == false)
        {
            this.timeout_time ++;
            
            if(this.timeout_time >= 10)
            {
                this.timeout_time = 0;
                this.bazmanal_timeout = true;
            }
        }
    }

    bazmanal() //not done
    {
        if(this.bazmanal_timeout == true)
        {
            if(this.ser == 1)
            {
                var datarkVandakner = this.yntrelVandak(0);
                var norVandak = random(datarkVandakner);
    
                var xot = this.yntrelVandak(1);
                var norVandak3 = random(xot);
    
                var gishatich = this.yntrelVandak(3.5);
                var norVandak2 = random(gishatich);
    
                if (norVandak2) 
                {
                    // if(this.bazmacox == true)
                    // {
                        this.bazmanal_timeout = false;

                        if(norVandak)
                        {
                            this.axorjak = 0;
        
                            var norx = norVandak[0];
                            var nory = norVandak[1];
                
                            var r = Math.floor(random(5));
        
                            if(r >= 1)
                            {
                                matrix[nory][norx] = 3;
                            }
        
                            else
                            {
                                matrix[nory][norx] = 3.5;
                            }
        
                            var norGishatich = new Gishatich(norx, nory);
                            gishatichArr.push(norGishatich);
        
                            if(matrix[nory][norx] == 3)
                            {
                                norGishatich.ser = 1;
                            }
        
                            else
                            {
                                norGishatich.ser = 2 ;
                            }
                        }
        
                        else if(norVandak3)
                        {
                            this.axorjak = 0;
        
                            var norx = norVandak3[0];
                            var nory = norVandak3[1];
                
                            var r = Math.floor(random(5));
        
                            if(r >= 1)
                            {
                                matrix[nory][norx] = 3;
                            }
        
                            else
                            {
                                matrix[nory][norx] = 3.5;
                            }
        
                            var norGishatich = new Gishatich(norx, nory);
                            gishatichArr.push(norGishatich);
        
                            if(matrix[nory][norx] == 3)
                            {
                                norGishatich.ser = 1;
                            }
        
                            else
                            {
                                norGishatich.ser = 2 ;
                            }
        
                            for(var i in xotakerArr)
                            {
                                if (norx == xotakerArr[i].x && nor.y == xotakerArr[i].y) 
                                {
                                    xotakerArr.splice(i, 1);
                                    norGishatich.energy += 2;
                                }
                            }
                        }
                    //}
    
                    
                    // else if(norVandak2.bazmacox == false)
                    // {
                    //     if(norVandak)
                    //     {
                    //         console.log('datark vandak');
                    //         this.axorjak = 0;
                    //         norVandak2.axorjak = 0;
    
                    //         var norx = norVandak[0];
                    //         var nory = norVandak[1];
                
                    //         var r = Math.floor(random(5));
    
                    //         if(r >= 1)
                    //         {
                    //             matrix[nory][norx] = 2;
                    //         }
    
                    //         else
                    //         {
                    //             matrix[nory][norx] = 2.5;
                    //         }
    
                    //         var norXotaker = new Xotaker(norx, nory);
                    //         xotakerArr.push(norXotaker);
    
                    //         if(matrix[nory][norx] == 2)
                    //         {
                    //             norXotaker.ser = 1;
                    //         }
    
                    //         else
                    //         {
                    //             norXotaker.ser = 2 ;
                    //         }
    
                    //         console.log(norXotaker);
                    //     }
    
                    //     else if(norVandak3)
                    //     {
                    //         console.log('xot');
                    //         this.axorjak = 0;
                    //         norVandak2.axorjak = 0;
    
                    //         var norx = norVandak3[0];
                    //         var nory = norVandak3[1];
                
                    //         var r = Math.floor(random(5));
    
                    //         if(r >= 1)
                    //         {
                    //             matrix[nory][norx] = 2;
                    //         }
    
                    //         else
                    //         {
                    //             matrix[nory][norx] = 2.5;
                    //         }
    
                    //         var norXotaker = new Xotaker(norx, nory);
                    //         xotakerArr.push(norXotaker);
    
                    //         if(matrix[nory][norx] == 2)
                    //         {
                    //             norXotaker.ser = 1;
                    //         }
    
                    //         else
                    //         {
                    //             norXotaker.ser = 2 ;
                    //         }
    
                    //         if (norx == grassArr[i].x && nor.y == grassArr[i].y) 
                    //         {
                    //             grassArr.splice(i, 1);
                    //             norXotaker.energy += 1;
                    //         }
    
                    //         console.log(norXotaker);
                    //     }
                    // }
                }
    
                else
                {
                    this.axorjak = 0;
                }
            }
                
            else
            {
                var datarkVandakner = this.yntrelVandak(0);
                var norVandak = random(datarkVandakner);
    
                var xot = this.yntrelVandak(1);
                var norVandak3 = random(xot);
    
                var gishatich = this.yntrelVandak(3);
                var norVandak2 = random(gishatich);
    
                if (norVandak2) 
                {
                    // if(this.bazmacox == true)
                    // {
                        this.bazmanal_timeout = false;

                        if(norVandak)
                        {
                            this.axorjak = 0;
        
                            var norx = norVandak[0];
                            var nory = norVandak[1];
                
                            var r = Math.floor(random(5));
        
                            if(r >= 1)
                            {
                                matrix[nory][norx] = 3;
                            }
        
                            else
                            {
                                matrix[nory][norx] = 3.5;
                            }
        
                            var norGishatich = new Gishatich(norx, nory);
                            gishatichArr.push(norGishatich);
        
                            if(matrix[nory][norx] == 3)
                            {
                                norGishatich.ser = 1;
                            }
        
                            else
                            {
                                norGishatich.ser = 2 ;
                            }
                        }
        
                        else if(norVandak3)
                        {
                            this.axorjak = 0;
        
                            var norx = norVandak3[0];
                            var nory = norVandak3[1];
                
                            var r = Math.floor(random(5));
        
                            if(r >= 1)
                            {
                                matrix[nory][norx] = 3;
                            }
        
                            else
                            {
                                matrix[nory][norx] = 3.5;
                            }
        
                            var norGishatich = new Gishatich(norx, nory);
                            gishatichArr.push(norGishatich);
        
                            if(matrix[nory][norx] == 3)
                            {
                                norGishatich.ser = 1;
                            }
        
                            else
                            {
                                norGishatich.ser = 2 ;
                            }
        
                            for(var i in xotakerArr)
                            {
                                if (norx == xotakerArr[i].x && nor.y == xotakerArr[i].y) 
                                {
                                    xotakerArr.splice(i, 1);
                                    norGishatich.energy += 2;
                                }
                            }
                        }
                    //}
    
                    
                    // else if(norVandak2.bazmacox == false)
                    // {
                    //     if(norVandak)
                    //     {
                    //         console.log('datark vandak');
                    //         this.axorjak = 0;
                    //         norVandak2.axorjak = 0;
    
                    //         var norx = norVandak[0];
                    //         var nory = norVandak[1];
                
                    //         var r = Math.floor(random(5));
    
                    //         if(r >= 1)
                    //         {
                    //             matrix[nory][norx] = 2;
                    //         }
    
                    //         else
                    //         {
                    //             matrix[nory][norx] = 2.5;
                    //         }
    
                    //         var norXotaker = new Xotaker(norx, nory);
                    //         xotakerArr.push(norXotaker);
    
                    //         if(matrix[nory][norx] == 2)
                    //         {
                    //             norXotaker.ser = 1;
                    //         }
    
                    //         else
                    //         {
                    //             norXotaker.ser = 2 ;
                    //         }
    
                    //         console.log(norXotaker);
                    //     }
    
                    //     else if(norVandak3)
                    //     {
                    //         console.log('xot');
                    //         this.axorjak = 0;
                    //         norVandak2.axorjak = 0;
    
                    //         var norx = norVandak3[0];
                    //         var nory = norVandak3[1];
                
                    //         var r = Math.floor(random(5));
    
                    //         if(r >= 1)
                    //         {
                    //             matrix[nory][norx] = 2;
                    //         }
    
                    //         else
                    //         {
                    //             matrix[nory][norx] = 2.5;
                    //         }
    
                    //         var norXotaker = new Xotaker(norx, nory);
                    //         xotakerArr.push(norXotaker);
    
                    //         if(matrix[nory][norx] == 2)
                    //         {
                    //             norXotaker.ser = 1;
                    //         }
    
                    //         else
                    //         {
                    //             norXotaker.ser = 2 ;
                    //         }
    
                    //         if (norx == grassArr[i].x && nor.y == grassArr[i].y) 
                    //         {
                    //             grassArr.splice(i, 1);
                    //             norXotaker.energy += 1;
                    //         }
    
                    //         console.log(norXotaker);
                    //     }
                    // }
                }
    
                else
                {
                    this.axorjak = 0;
                }
            }
        }
    }

    utel() //done
    {
        // if(this.yntaniKendani == true)
        // {
            var xotaker = this.yntrelVandak(2, 2.5);
            var norVandak = random(xotaker);

            if (norVandak) 
            {
                this.axorjak += 1;
                this.energy += 2;

                matrix[this.y][this.x] = 0;
                var norx = norVandak[0];
                var nory = norVandak[1];

                if(this.ser == 1)
                {
                    matrix[nory][norx] = 3;
                }

                else
                {
                    matrix[nory][norx] = 3.5;
                }

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

                if(this.axorjak >= 7)
                {
                    this.bazmacox = true;
                    this.axorjak = 0;
                    this.bazmanal();
                }
            }

            else 
            {
                this.sharjvel();
            }
        // }
    }
}