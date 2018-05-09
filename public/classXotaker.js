class Xotaker extends Class10
{
    constructor(x, y) 
    {
        super(x,y);
        this.energy = 8;
        this.axorjak = 0;
        this.ser = 0;
        this.bazmacox = false;
        this.timeout_time = 0;
        this.bazmanal_timeout = false;
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
                matrix[nory][norx] = 2;
            }

            else
            {
                matrix[nory][norx] = 2.5;
            }

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
        for(var i in xotakerArr)
        {
            if (this.x == xotakerArr[i].x && this.y == xotakerArr[i].y) 
            {
                matrix[this.y][this.x] = 0;
                xotakerArr.splice(i, 1);
            }
        }        
    }

    timeout() //done
    {
        if(this.bazmanal_timeout == false)
        {
            this.timeout_time ++;
            
            if(this.timeout_time >= 30)
            {
                this.timeout_time = 0;
                this.bazmanal_timeout = true;
            }
        }
    }

    bazmanal() //done
    {
        if(this.bazmanal_timeout == true)
        {
            if(this.ser == 1)
            {
                var datarkVandakner = this.yntrelVandak(0);
                var norVandak = random(datarkVandakner);
    
                var xot = this.yntrelVandak(1);
                var norVandak3 = random(xot);
    
                var xotaker = this.yntrelVandak(2.5);
                var norVandak2 = random(xotaker);
    
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
                                matrix[nory][norx] = 2;
                            }
        
                            else
                            {
                                matrix[nory][norx] = 2.5;
                            }
        
                            var norXotaker = new Xotaker(norx, nory);
                            xotakerArr.push(norXotaker);
        
                            if(matrix[nory][norx] == 2)
                            {
                                norXotaker.ser = 1;
                            }
        
                            else
                            {
                                norXotaker.ser = 2 ;
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
                                matrix[nory][norx] = 2;
                            }
        
                            else
                            {
                                matrix[nory][norx] = 2.5;
                            }
        
                            var norXotaker = new Xotaker(norx, nory);
                            xotakerArr.push(norXotaker);
        
                            if(matrix[nory][norx] == 2)
                            {
                                norXotaker.ser = 1;
                            }
        
                            else
                            {
                                norXotaker.ser = 2 ;
                            }
        
                            if (norx == grassArr[i].x && nor.y == grassArr[i].y) 
                            {
                                grassArr.splice(i, 1);
                                norXotaker.energy += 1;
                            }
        
                            console.log(norXotaker);
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
    
                var xotaker = this.yntrelVandak(2);
                var norVandak2 = random(xotaker);
    
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
                                matrix[nory][norx] = 2;
                            }
        
                            else
                            {
                                matrix[nory][norx] = 2.5;
                            }
        
                            var norXotaker = new Xotaker(norx, nory);
                            xotakerArr.push(norXotaker);
        
                            if(matrix[nory][norx] == 2)
                            {
                                norXotaker.ser = 1;
                            }
        
                            else
                            {
                                norXotaker.ser = 2 ;
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
                                matrix[nory][norx] = 2;
                            }
        
                            else
                            {
                                matrix[nory][norx] = 2.5;
                            }
        
                            var norXotaker = new Xotaker(norx, nory);
                            xotakerArr.push(norXotaker);
        
                            if(matrix[nory][norx] == 2)
                            {
                                norXotaker.ser = 1;
                            }
        
                            else
                            {
                                norXotaker.ser = 2 ;
                            }
        
                            if (norx == grassArr[i].x && nor.y == grassArr[i].y) 
                            {
                                grassArr.splice(i, 1);
                                norXotaker.energy += 1;
                            }
        
                            console.log(norXotaker);
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
        var xoter = this.yntrelVandak(1);
        var norVandak = random(xoter);

        if (norVandak) 
        {
            this.axorjak += 1;
            this.energy += 3;
            matrix[this.y][this.x] = 0;
            var norx = norVandak[0];
            var nory = norVandak[1];

            if(this.ser == 1)
            {
                matrix[nory][norx] = 2;
            }

            else
            {
                matrix[nory][norx] = 2.5;
            }

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
}