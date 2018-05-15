class Class10 //done
{
    constructor(x, y, hivandutyun_timeout, hivandutyun_mahacu, vandak_virus, virus_time, changeTime, spring, summer, autumn, winter) //done
    {
        this.x = x;
        this.y = y;
        this.hivandutyun_timeout = 0;
        this.hivandutyun_mahacu = false;
        this.vandak_virus = false;
        this.virus_time = 0;
        this.changeTime = 0;
        this.spring = true;
        this.summer = false;
        this.autumn = false;
        this.winter = false;
    }

    yntrelVandak(ch) //done
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

    weather() //done
    {
        if(this.spring == true)
        {
            this.changeTime ++;

            if(this.changeTime >= 10)
            {
                this.changeTime = 0;

                this.spring = false;
                this.summer = true;
            }
        }

        else if(this.summer == true)
        {
            this.changeTime ++;

            if(this.changeTime >= 10)
            {
                this.changeTime = 0;
                
                this.summer = false;
                this.autumn = true;
            }
        }

        else if(this.autumn == true)
        {
            this.changeTime ++;

            if(this.changeTime >= 10)
            {
                this.changeTime = 0;
                
                this.autumn = false;
                this.winter = true;
            }
        }

        else if(this.winter == true)
        {
            this.changeTime ++;

            if(this.changeTime >= 10)
            {
                this.changeTime = 0;
                
                this.winter = false;
                this.spring = true;
            }
        }

        return this.spring, this.summer, this.autumn, this.winter;
    }
}