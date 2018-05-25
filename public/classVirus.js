class Virus extends Class10 //not done
{
    constructor(x, y) 
    {
        super(x, y);
        this.timer = 0;
    }

    antiVirus() //not done
    {
        matrix[this.x][this.y] = 8;
        this.timer ++;

        if(this.timer >= 5)
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