class Snake{
    
    constructor(matrix, x, y, course){
        this.matrix = matrix;
        this.x = x;
        this.y = y;
        this.course = course;
    }
    
    show(){
        this.matrix.setCell(this.x, this.y, 'snake');
    }
    
    move(){
        this.matrix.setCell(this.x, this.y, '');
        
        switch(this.course){
            case 'right':
                this.x++;
                break;
            case 'left':
                this.x--;
                break;
            case 'up':
                this.y--;
                break;
            case 'down':
                this.y++;
                break;
        }

        if ((this.x == 21) && (this.course = 'right')){
            this.x--;
            this.x--;
            this.course = 'left';
        }

        if ((this.x == 0) && (this.course = 'left')){
            this.x++;
            this.x++;
            this.course = 'right';
        }

        if ((this.y== 0) && (this.course = 'up')){
            this.y++;
            this.y++;
            this.course = 'down';
        }

        if ((this.y == 21) && (this.course = 'down')){
            this.y--;
            this.y--;
            this.course = 'up';
        }

        
        this.matrix.setCell(this.x, this.y, 'snake');
        console.log(this.x + ' ' + this.y);
    }

}