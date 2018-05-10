class Mard extends Class10 //not done
{
    constructor(x, y) 
    {
        super(x,y,spring_time,spring,summer_time,summer,autumn_time,autumn,winter_time,winter);
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

    utel() //done
    {
        var xot = this.yntrelVandak(1);
        var norVandak = random(xot);

        var xotaker = this.yntrelVandak(2);
        var norVandak2 = random(xotaker);

        var gishatich = this.yntrelVandak(3);
        var norVandak3 = random(gishatich);

        var tree = this.yntrelVandak(5);
        var norVandak4 = random(tree);

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
        
        else if (norVandak3 && norVandak3.yntaniKendani == false  && this.ser == 1)
        {
            if(this.wood >= 3)
            {
                this.axorjak = 0;
                this.wood -= 3;
                norVandak3.yntaniKendani = true;

                var norx = norVandak3[0];
                var nory = norVandak3[1];

                matrix[nory][norx] = 7;

                norVandak3.yntaniKendani();

                if(norVandak3.vandak_off == true)
                {
                    if(norVandak3.ser == 1)
                    {
                        matrix[nory][norx] = 3;
                    }

                    else
                    {
                        matrix[nory][norx] = 3.5;
                    }
                }

                this.energy -= 2;

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
                    matrix[nory][norx] = 4;
                   
                    if (this.energy > 50) 
                    {
                        this.energy = 50;
                    }

                    if(this.axorjak >= 25)
                    {
                        this.bazmacox = true;
                        this.axorjak = 0;
                        this.bazmanal();                       
                    }
                }

                else 
                {
                    this.mahanal();

                    norVandak3.axorjak += 1;
                    norVandak3.energy += 3;

                    if(norVandak3.energy >= 25)
                    {
                        norVandak3.energy = 25;
                    }

                    if(norVandak3.axorjak >= 7)
                    {
                        norVandak3.bazmanal();
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

            if(this.axorjak >= 25)
            {
                this.bazmacox = true;
                this.axorjak = 0;
                this.bazmanal();
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

            if(this.axorjak >= 3)
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
    
                var mard_igakan = this.yntrelVandak(4.5);
                var norVandak2 = random(mard_igakan);
    
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
        
                        else if(norVandak3)
                        {
                            this.axorjak = 0;
        
                            var norx = norVandak3[0];
                            var nory = norVandak3[1];
                
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
                                if (norx == xotakerArr[i].x && nor.y == xotakerArr[i].y) 
                                {
                                    xotakerArr.splice(i, 1);
                                    norMard.energy += 1;
                                    norMard.axorjak += 1;
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
    
                var mard_igakan = this.yntrelVandak(4);
                var norVandak2 = random(mard_igakan);
    
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
        
                        else if(norVandak3)
                        {
                            this.axorjak = 0;
        
                            var norx = norVandak3[0];
                            var nory = norVandak3[1];
                
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
                                if (norx == xotakerArr[i].x && nor.y == xotakerArr[i].y) 
                                {
                                    xotakerArr.splice(i, 1);
                                    norMard.energy += 1;
                                    norMard.axorjak += 1;
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
}