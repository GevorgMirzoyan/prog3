class Class10 //done
{
    constructor(x, y, hivandutyun_timeout, hivandutyun_mahacu, virus_time, changeTime, weather) //done
    {
        this.x = x;
        this.y = y;
        this.hivandutyun_timeout = 0;
        this.hivandutyun_mahacu = false;
        this.virus_time = 0;
        this.changeTime = 0;
        this.weather = 'spring';
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

    weatherChange() //done
    {
        if(this.weather == 'spring')
        {
            this.changeTime ++;
            
            if(this.changeTime >= 10)
            {              
                this.changeTime = 0;
                this.weather = 'summer';
            }
        }

        else if(this.weather == 'summer')
        {
            this.changeTime ++;

            if(this.changeTime >= 10)
            {               
                this.changeTime = 0;
                this.weather = 'autumn';
            }
        }

        else if(this.weather == 'autumn')
        {
            this.changeTime ++;

            if(this.changeTime >= 10)
            {                
                this.changeTime = 0;
                this.weather = 'winter';
            }
        }

        else if(this.weather == 'winter')
        {
            this.changeTime ++;

            if(this.changeTime >= 10)
            {
                this.changeTime = 0;
                this.weather = 'spring';
            }
        }

        return this.weather;
    }
}

//     weatherChange(Arr) //done
//     {
//         if(this.spring == true)
//         {
//             for(var i in Arr)
//             {
//                 console.log('spring')
//                 matrix[Arr[i].y][Arr[i].x] = 1;
//             }
//         }

//         else if(this.summer == true)
//         {
//             for(var i in Arr)
//             {
//                 console.log('summer')
//                 matrix[Arr[i].y][Arr[i].x] =  2;
//             }
//         }

//         else if(this.autumn == true)
//         {
//             for(var i in Arr)
//             {
//                 console.log('autumn')
//                 matrix[Arr[i].y][Arr[i].x] =  3;
//             }
//         }

//         else if(this.winter == true)
//         {
//             for(var i in Arr)
//             {
//                 console.log('winter')
//                 matrix[Arr[i].y][Arr[i].x] =  4;
//             }
//         }
//     }
// }