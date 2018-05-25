class Solider extends Class10 //not done
{
    constructor(x, y, virus_time) 
    {
        super(x, y, virus_time);
        this.energy = 10;
        this.lvlUpScore = 0;
        this.lvl = 1;
        this.ser = 1;
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
            
            [this.x - 6, this.y - 6],
            [this.x, this.y - 6],
            [this.x + 6, this.y - 6],
            [this.x - 6, this.y],
            [this.x + 6, this.y],
            [this.x - 6, this.y + 6],
            [this.x, this.y + 6],
            [this.x + 6, this.y + 6]

            [this.x - 7, this.y - 7],
            [this.x, this.y - 7],
            [this.x + 7, this.y - 7],
            [this.x - 7, this.y],
            [this.x + 7, this.y],
            [this.x - 7, this.y + 7],
            [this.x, this.y + 7],
            [this.x + 7, this.y + 7]
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
            this.lvlUpScore = 0;
            matrix[this.y][this.x] = 0;

            var norx = norVandak[0];
            var nory = norVandak[1];

            matrix[nory][norx] = 11;

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
        for(var i in soliderArr)
        {
            if (this.x == soliderArr[i].x && this.y == soliderArr[i].y) 
            {
                matrix[this.y][this.x] = 0;
                soliderArr.splice(i, 1);
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

    bazmanal() //done
    {
        if(this.ser == 1 && this.bazmanal_timeout == true && this.hivandutyun_mahacu == false)
        {
            var datarkVandakner = this.yntrelVandak(0);
            var norVandak = random(datarkVandakner);
            var norVandak3 = random(datarkVandakner);

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
                            matrix[nory][norx] = 11;
           
                            var norZinvor = new Solider(norx, nory);
                            soliderArr.push(norZinvor);
                        }
                
                        else
                        {
                            matrix[nory][norx] = 4.5;

                            var norMard = new Mard(norx, nory);
                            mardArr.push(norMard);

                            norMard.ser = 2 ;
                        }
                    }
                    
                    else if(mard_igakan.bazmacox == true)
                    {
                        mard_igakan.bazmacox = false;

                        var norx = norVandak[0];
                        var nory = norVandak[1];

                        var r = Math.floor(random(5));
            
                        if(r >= 1)
                        {
                            matrix[nory][norx] = 11;
           
                            var norZinvor = new Solider(norx, nory);
                            soliderArr.push(norZinvor);
                        }
                
                        else
                        {
                            matrix[nory][norx] = 4.5;

                            var norMard = new Mard(norx, nory);
                            mardArr.push(norMard);

                            norMard.ser = 2 ;
                        }

                        if(norVandak3[0] != norVandak[0] && norVandak3[1] != norVandak[1])
                        {
                            var norx = norVandak3[0];
                            var nory = norVandak3[1];

                            var r2 = Math.floor(random(5));
                
                            if(r >= 1)
                            {
                                matrix[nory][norx] = 11;
            
                                var norZinvor = new Solider(norx, nory);
                                soliderArr.push(norZinvor);
                            }
                    
                            else
                            {
                                matrix[nory][norx] = 4.5;

                                var norMard = new Mard(norx, nory);
                                mardArr.push(norMard);

                                norMard.ser = 2 ;
                            }
                        }
                    }
                }
            }
        }
    }

    timeout() //done  timeout-45s
    {
        if(this.bazmanal_timeout == false && this.hivandutyun_mahacu == false)
        {
            this.timeout_time ++;
            
            if(this.timeout_time >= 30)
            {
                this.timeout_time = 0;
                this.bazmanal_timeout = true;
            }
        }
    }

    hivandutyun() //done
    {
        this.hivandutyun_timeout ++;

        if(this.hivandutyun_timeout >= 3)
        {
            this.hivandutyun_timeout = 0;

            var r = Math.round(random(300));
    
            if(150 % r != 0 && r % 2 == 0)
            {
                this.hivandutyun_mahacu = true;
                this.mahanal();
            }
        }
    }

    antiVirus() //done
    {
        this.virus_time ++;

        if(this.virus_time >= 5)
        {
            for(var i in soliderArr)
            {
                if (this.x == soliderArr[i].x && this.y == soliderArr[i].y) 
                {
                    matrix[this.y][this.x] = 0;
                    soliderArr.splice(i, 1);
                }
            }
        }
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