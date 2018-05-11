class Class10 //not done
{
    constructor(x, y) //done
    {
        this.x = x;
        this.y = y;
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

    // weather() //not done
    // {
    //     if(this.spring == true)
    //     {
    //         this.spring_time ++;

    //         if(this.spring_time >= 3)
    //         {
    //             this.spring = false;
    //             this.summer = true;
    //         }
    //     }

    //     if(this.summer == true)
    //     {
    //         this.summer_time ++;

    //         if(this.summer_time >= 3)
    //         {
    //             this.summer = false;
    //             this.autumn = true;
    //         }
    //     }

    //     if(this.autumn == true)
    //     {
    //         this.autumn_time ++;

    //         if(this.autumn_time >= 3)
    //         {
    //             this.autumn = false;
    //             this.winter = true;
    //         }
    //     }

    //     if(this.winter == true)
    //     {
    //         this.winter_time ++;

    //         if(this.winter_time >= 3)
    //         {
    //             this.winter_time = false;
    //             this.spring = true;
    //         }
    //     }
    // }
}