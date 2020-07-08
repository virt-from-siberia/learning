class Snake extends Elem{
    
    constructor(matrix, coords, course){
        super(matrix, coords);
        this.value = 'snake';
        this.course = course;
        this.alive = true;
        this.eat = false;
        this.score = 0;
    }

    move(){
        if(!this.alive){
            return;
        }
        this.eat = false;
        
        let head = this.cords[0].slice();

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

        this._getCell(head);
        
        if (!this.eat) {
            var tail = this.cords.pop();
            this.matrix.setCell(tail[0], tail[1], '');
         }
        /* else {
            нарастить змею 
            this.cords.push([])
        }*/
        
        this.cords.unshift(head);
        this.matrix.setCell(head[0], head[1], 'snake');
    }

    _getCell(head) {
        let type = this.matrix.getCell(head[0], head[1]);
        if ((type == 'wall') || (type == 'snake')) this.alive = false;
        if (type == 'fruit1') { this.score++; this.eat = true; }
        if (type == 'fruit2') { this.score += 2; this.eat = true; }
        if (type == 'fruit3') { this.score += 10; this.eat = true; }
    }

    _checkAlive(head){
        return head[0] >= 1 && head[0] <= this.matrix.cols &&
               head[1] >= 1 && head[1] <= this.matrix.rows;
    }
}