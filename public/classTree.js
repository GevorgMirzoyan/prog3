class Tree extends Class10 //done
{
    constructor(x, y) 
    {
        super(x,y);
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
       this.stanalNorKordinatner();
       return super.yntrelVandak(ch);
    }

    bazmanal() //done
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