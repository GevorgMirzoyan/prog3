class Grass extends Class10 //not done
{
    constructor(x, y, hivandutyun_timeout, hivandutyun_mahacu, virus_time, changeTime, weather) 
    {
        super(x, y, hivandutyun_timeout, hivandutyun_mahacu, virus_time, changeTime, weather);
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
        ];
    }

    yntrelVandak(ch) 
    {
        if(this.hivandutyun_mahacu == false)
        {
            this.stanalNorKordinatner();
            return super.yntrelVandak(ch);
        }
    }

    bazmanal() //done
    {
        if(this.hivandutyun_mahacu == false)
        {
            this.multiply_bazmanal++;

            var datarkVandakner = this.yntrelVandak(0);
            var norVandak = random(datarkVandakner);

            if (norVandak && this.multiply_bazmanal >= 10) 
            {
                this.multiply_bazmanal = 0;
                var norx = norVandak[0];
                var nory = norVandak[1];
                
                if(this.spring == true)
                {
                    matrix[nory][norx] = 1;
                }

                else if(this.summer == true)
                {
                    matrix[nory][norx] = 2;
                }

                else if(this.autumn == true)
                {
                    matrix[nory][norx] = 3;
                }

                else if(this.winter == true)
                {
                    matrix[nory][norx] = 4;
                } 
                
                var norXot = new Grass(norx, nory);
                grassArr.push(norXot);
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

    mahanal() //done
    {
        if(this.hivandutyun_mahacu == true)
        {
            for(var i in grassArr)
            {
                if (this.x == grassArr[i].x && this.y == grassArr[i].y) 
                {
                    matrix[this.y][this.x] = 8;
                    this.antiVirus();
                }
            }
        }

        else
        {
            for(var i in grassArr)
            {
                if (this.x == grassArr[i].x && this.y == grassArr[i].y) 
                {
                    matrix[this.y][this.x] = 0;
                    grassArr.splice(i, 1);
                }
            }
        }
    }

    antiVirus() //done
    {
        this.virus_time ++;

        if(this.virus_time >= 5)
        {
            for(var i in grassArr)
            {
                if (this.x == grassArr[i].x && this.y == grassArr[i].y) 
                {
                    matrix[this.y][this.x] = 0;
                    grassArr.splice(i, 1);
                }
            }
        }
    }

    weatherChange() //not done
    {
        if(this.hivandutyun_mahacu == false)
        {
            console.log('about weather');
            return super.weatherChange();
        }
    }

    weatherSwitch() //not done
    {
        if(this.hivandutyun_mahacu == false)
        {
            if(this.weather == 'spring')
            {
                console.log('spring - on');
                matrix[this.y][this.x] = 1;
            }

            else if(this.weather == 'summer')
            {
                console.log('summer - on');
                matrix[this.y][this.x] = 2;
            }

            else if(this.weather == 'autumn')
            {
                console.log('autumn - on');
                matrix[this.y][this.x] = 3;
            }

            else if(this.weather == 'winter')
            {
                console.log('winter - on');
                matrix[this.y][this.x] = 4;
            }
        }
    }
}