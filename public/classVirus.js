class Virus extends Class10 //done
{
    constructor(x, y) 
    {
        super(x, y);
        this.timer = 0;
    }

    antiVirus() //done
    {
        this.timer ++;

        var antiVirus_timeout = 0;

        if(weather == 'spring')
        {
            antiVirus_timeout = 10;
        }

        else if(weather == 'summer')
        {
            antiVirus_timeout = 5;
        }

        else if(weather == 'autumn')
        {
            antiVirus_timeout = 15;
        }

        else if(weather == 'winter')
        {
            antiVirus_timeout = 20;
        }

        if(this.timer >= antiVirus_timeout)
        {
            for(var i in virusArr)
            {
                if(this.x == virusArr[i].x && this.y == virusArr[i].y)
                {
                    matrix[this.y][this.x] = 0;
                    virusArr.splice(i, 1);
                }
            }
        }
    }
}