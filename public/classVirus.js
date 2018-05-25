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

        if(this.timer >= 10)
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