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
                if (this.x >  this.matrix.size) { 
                    this.x = 1; this.y++;
                    if (this.y > this.matrix.size) this.y = 1;
                }
                break;
            case 'left':
                this.x--;
                if (this.x < 1) { 
                    this.x = this.matrix.size; this.y--;
                    if (this.y < 1) this.y = this.matrix.size;
                }
                break;
            case 'up':
                this.y--;
                if (this.y < 1) { this.y = this.matrix.size}
                break;
            case 'down':
                this.y++;
                if (this.y > this.matrix.size) { this.y = 1;}
                break;
        }
        
        this.matrix.setCell(this.x, this.y, 'snake');
    }

}