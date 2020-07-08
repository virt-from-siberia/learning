class Snake{
    
    constructor(matrix, x, y, course){
        this.matrix = matrix;
        this.x = x;
        this.y = y;
        this.course = course || '';
    }
    
    show(){
        this.matrix.setCell(this.x, this.y, 'snake');
    }
    
    move(direction){
        this.matrix.setCell(this.x, this.y, '');
        
        //switch(this.course){
		switch(direction){
            case 'right':
                this.x++;
				if (this.x > this.matrix.m) {
					this.x = 1;
				}
			    break;
			case 'left':
                this.x--;
				if (this.x < 1) {
					this.x = this.matrix.m;
				}
			    break;
			case 'top':
                this.y--;
				if (this.y < 1) {
					this.y = this.matrix.n;
				}
			    break;
			case 'bottom':
                this.y++;
				if (this.y > this.matrix.n) {
					this.y = 1;
				}
			    break;	
        }
        
        this.matrix.setCell(this.x, this.y, 'snake');
    }

}