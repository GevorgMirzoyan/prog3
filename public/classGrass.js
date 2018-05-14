class Grass extends Class10 //done
{
    constructor(x, y, hivandutyun_timeout, hivandutyun_mahacu, vandak_virus, virus_time) 
    {
        super(x, y, hivandutyun_timeout, hivandutyun_mahacu, vandak_virus, virus_time);
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
       this.stanalNorKordinatner();
       return super.yntrelVandak(ch);
    }

    bazmanal() //done
    {
        this.multiply_bazmanal++;

        var datarkVandakner = this.yntrelVandak(0);
        var norVandak = random(datarkVandakner);

        if (norVandak && this.multiply_bazmanal >= 10) 
        {
            this.multiply_bazmanal = 0;
            var norx = norVandak[0];
            var nory = norVandak[1];

            matrix[nory][norx] = 1;
            
            var norXot = new Grass(norx, nory);
            grassArr.push(norXot);
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
                    grassArr.splice(i, 1);

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

    antiVirus()
    {
        console.log('yoyoyoyoyo');
        this.virus_time ++;

        if(this.virus_time >= 5)
        {
            console.log('y');
            matrix[this.y][this.x] = 0;
        }
    }
}