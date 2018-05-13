class Class10 //not done
{
    constructor(x, y) //done
    {
        this.x = x;
        this.y = y;
        this.changeTime = 0;
        // this.spring = true;    
        // this.summer = false;      
        // this.autumn = false;     
        // this.winter = false;
        this.weather = [this.spring = true,this.summer = false,this.autumn = false,this.winter = false];
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

    Weather()
    {
        for(var a = 0; a < 3; a++)
        {
            for(var b = 0; b < 3; b++)
            {
                this.changeTime ++;

                if(this.changeTime > 3)
                {
                    this.weather[a] = false;
                    this.weather[a + 1] = true;
                }
            }       
        }
    }

    // Weather() //not done
    // {
    //     if(this.spring == true)
    //     {
    //         this.changeTime ++;
    //         console.log('spring')
    //         if(this.changeTime >= 10)
    //         {
    //             this.changeTime = 0;
    //             this.spring = false;
    //             this.summer = true;
    //             this.autumn = false;
    //             this.winter = false;
    //         }
    //     }

    //     else if(this.summer == true)
    //     {
    //         this.changeTime ++;
    //         console.log('summer')
    //         if(this.changeTime >= 10)
    //         {
    //             this.changeTime = 0;
    //             this.spring = false;
    //             this.summer = false;
    //             this.autumn = true;
    //             this.winter = false;
    //         }
    //     }

    //     else if(this.autumn == true)
    //     {
    //         this.changeTime ++;
    //         console.log('autumn')
    //         if(this.changeTime >= 10)
    //         {
    //             this.changeTime = 0;
    //             this.spring = false;
    //             this.summer = false;
    //             this.autumn = false;
    //             this.winter = true;
    //         }
    //     }

    //     else if(this.winter == true)
    //     {
    //         this.changeTime ++;
    //         console.log('winter')
    //         if(this.changeTime >= 10)
    //         {
    //             this.changeTime = 0;
    //             this.spring = true;
    //             this.summer = false;
    //             this.autumn = false;
    //             this.winter = false;
    //         }
    //     }
    // }
}