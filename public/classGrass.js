class Grass extends Class10 //not done
{
    constructor(x, y) 
    {
        super(x, y);
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
        if(this.hivandutyun_mahacu == false && weather != 'winter')
        {
            this.multiply_bazmanal++;

            var datarkVandakner = this.yntrelVandak(0);
            var norVandak = random(datarkVandakner);

            var bazmanal_timeout = 0;

            if(weather == 'spring')
            {
                bazmanal_timeout = 3;
            }

            else if(weather == 'summer')
            {
                bazmanal_timeout = 1;
            }

            else if(weather == 'autumn')
            {
                bazmanal_timeout = 10;
            }

            if (norVandak && this.multiply_bazmanal >= bazmanal_timeout) 
            {
                this.multiply_bazmanal = 0;
                var norx = norVandak[0];
                var nory = norVandak[1];
                
                matrix[nory][norx] = 1;
                
                var norXot = new Grass(norx, nory);
                grassArr.push(norXot);
            }
        }
    }

    hivandutyun() //not done
    {
        this.hivandutyun_timeout ++;

        var hivandutyun_repeat = 0;
        var numCount = 0;
        var randomNumCount = 0;

        if(weather == 'spring')
        {
            hivandutyun_repeat = 10;
            numCount = 2000;
            randomNumCount = 150;
        }

        else if(weather == 'summer')
        {
            hivandutyun_repeat = 10;
            numCount = 3000;
            randomNumCount = 100;
        }

        else if(weather == 'autumn')
        {
            hivandutyun_repeat = 10;
            numCount = 1500;
            randomNumCount = 250;
        }

        else if(weather == 'winter')
        {
            hivandutyun_repeat = 10;
            numCount = 1000;
            randomNumCount = 200;
        }
        
        var numArr = [];

        for(var a = 0; a < numCount; a++) //Numbers Array
        {
            var num = a;
            numArr.push(num);
        }

        if(this.hivandutyun_timeout >= hivandutyun_repeat)
        {
            this.hivandutyun_timeout = 0;

            var randomArr = [];
            var bool = false;

            for(var r = 0; r < randomNumCount; r++) //Random Numbers Array
            {
                var rand = Math.round(random(numCount));
                randomArr.push(rand);
            }
            
            for(var i in randomArr) //Comparison of Arrays
            {
                var b = Math.round(random(numCount));
                
                if(randomArr[i] == numArr[b])
                {
                    console.log('I find it', randomArr[i], numArr[b])
                    bool = true;
                }
            }
            
            if(bool == true)
            {
                this.hivandutyun_mahacu = true;
                bool = false;
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
}