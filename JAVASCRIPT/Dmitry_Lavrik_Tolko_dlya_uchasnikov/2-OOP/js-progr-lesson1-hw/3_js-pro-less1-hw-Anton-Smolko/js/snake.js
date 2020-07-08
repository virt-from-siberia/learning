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
                if ((this.x + 1) % this.matrix.width == 0) {
                   this.course = 'left';
                   this.x--;
                } else {
                    this.x++;
                }
                break;
            case 'left':
                if (this.x % this.matrix.width == 0) {
                    this.x++;
                    this.course = 'right';
                } else {
                    this.x--;
                }
                break;
            case 'top':
                if (this.y == 1) {
                   this.course = 'bottom';
                   this.y++;
                } else {
                    this.y--;
                }
                break;
            case 'bottom':
                if (this.y == this.matrix.height) {
                   this.course = 'top';
                   this.y--;
                } else {
                    this.y++;
                }
                break;
        }

        this.matrix.setCell(this.x, this.y, 'snake');
    }
}