class Tree extends Class10 //done
{
    constructor(x, y, hivandutyun_timeout, hivandutyun_mahacu, vandak_virus, virus_time, changeTime, spring, summer, autumn, winter) 
    {
        super(x, y, hivandutyun_timeout, hivandutyun_mahacu, vandak_virus, virus_time, changeTime, spring, summer, autumn, winter);
        this.multiply = 0;
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
            this.multiply++;

            var datarkVandakner = this.yntrelVandak(0);
            var norVandak = random(datarkVandakner);

            if (norVandak && this.multiply >= 30) 
            {
                this.multiply = 0;

                var norx = norVandak[0];
                var nory = norVandak[1];
                matrix[nory][norx] = 5;

                var newTree = new Tree(norx, nory);
                treeArr.push(newTree);
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
            for(var i in treeArr)
            {
                if (this.x == treeArr[i].x && this.y == treeArr[i].y) 
                {
                    matrix[this.y][this.x] = 8;
                    this.antiVirus();
                }
            }
        }

        else
        {
            for(var i in treeArr)
            {
                if (this.x == treeArr[i].x && this.y == treeArr[i].y) 
                {
                    matrix[this.y][this.x] = 0;
                    treeArr.splice(i, 1);
                }
            }
        }
    }

    antiVirus() //done
    {
        this.virus_time ++;

        if(this.virus_time >= 5)
        {
            for(var i in treeArr)
            {
                if (this.x == treeArr[i].x && this.y == treeArr[i].y) 
                {
                    matrix[this.y][this.x] = 0;
                    treeArr.splice(i, 1);
                }
            }
        }
    }
}