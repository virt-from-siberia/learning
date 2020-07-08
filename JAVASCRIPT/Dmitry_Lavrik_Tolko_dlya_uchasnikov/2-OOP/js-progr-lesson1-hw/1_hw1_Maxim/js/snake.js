class Snake {
    
    constructor(matrix, x, y, course) {
        this.matrix = matrix;
        this.x = x;
        this.y = y;
        this.course = course;
    }
    
    show() {
        this.matrix.setCell(this.x, this.y, 'snake');
    }
    
    move() {
        this.matrix.setCell(this.x, this.y, '');

        switch(this.course){
            case 'right':
                if(this.x === this.matrix.cols) {
                    this.x = 1;
                } else {
                    this.x++;
                }
                break;
            case 'down':
                if(this.y === this.matrix.rows) {
                    this.y = 1;
                } else {
                    this.y++;
                }
                break;
            case 'left':
                if(this.x === 1) {
                    this.x = this.matrix.cols;
                } else {
                    this.x--;
                }
                break;
            case 'up':
                if(this.y === 1) {
                    this.y = this.matrix.rows;
                } else {
                    this.y--;
                }
                break;
        }
       
        this.matrix.setCell(this.x, this.y, 'snake');
    }

}