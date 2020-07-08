class Snake extends Elem{
    
    constructor(matrix, cords, course){
        super(matrix, cords);
        this.value = 'snake';
        this.course = course;
        this.alive = true;
        this.summ = 0;
    }

    move(){
        if(!this.alive){
            return;
        }
        
        var head = this.cords[0].slice();

        switch(this.course){
            case 'right':
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
        
        if(!this._checkAlive(head)){
            this.alive = false;
            return;
        }
        
        /* getCell 
         *  фрукт - покушали, хвост не отпал
         *  стена - game over
         *  змея - game over
         *  стена - game over
         * */

        var p = this.matrix.getCell(head[0],head[1]);
        console.log(p);

        if(p === ''){
            let tail = this.cords.pop();
            this.matrix.setCell(tail[0], tail[1], '');
        }

        else if (p === 'wall' || p === 'snake'){
            this.alive = false;
        }


        this.cords.unshift(head);
        this.matrix.setCell(head[0], head[1], 'snake');

    }

    _checkAlive(head){
        return head[0] >= 1 && head[0] <= this.matrix.cols &&
               head[1] >= 1 && head[1] <= this.matrix.rows;
    }
}