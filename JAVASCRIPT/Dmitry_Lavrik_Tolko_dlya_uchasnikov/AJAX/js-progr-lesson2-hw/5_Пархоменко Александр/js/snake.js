class Snake extends Elem{
    
    constructor(matrix, coords, course){
        super(matrix, coords);
        this.value = 'snake';
        this.course = course;
        this.alive = true;
        this.eating = false;
    }

    move(){
        if(!this.alive){
            return;
        }

        var before = this.cords.length;
        
        var head = this.cords[0].slice();
        
        switch(this.course){
            case 'right':
            if (this.course == 'left'){
                break;
            }else
                head[0]++;
                break;
            case 'left':
                head[0]--;
                break;
            case 'up':
                head[1]--;
                break;
            case 'down':
                head[1]++;
                break;
        }
       
        var elem_matrix =  this.matrix.getCell(head[0], head[1]);
       
        if(!this._checkAlive(head,elem_matrix)){
            this.alive = false;
            return;
        }


        
        
        
        if (elem_matrix != 'fruit'){
            var tail = this.cords.pop();
            this.matrix.setCell(tail[0], tail[1], '');
        }

        this.cords.unshift(head);
        this.matrix.setCell(head[0], head[1], 'snake');
        var after = this.cords.length;
        this.eating = this._checkEat(before, after);
        console.log(before + ' ' + after + ' ' + this.eating);    

    }

    _checkEat(before, after){
        return after > before;        
    }


    _checkAlive(head, elem_matrix){
        
    
    
       return head[0] >= 1 && head[0] <= this.matrix.cols &&
               head[1] >= 1 && head[1] <= this.matrix.rows && 
               elem_matrix != 'wall' && elem_matrix != 'snake';
    }
}