class Wall extends Elem{
    
    constructor(matrix, cords, len, dir){
    	super(matrix, cords);
        this.value = 'wall';
    	let x = this.cords[0][0];
    	let y = this.cords[0][1];

    	for (let i=1; i <= len-1; i++) {
    		switch (dir){
	    		case 'right':
		    		x++;
		    		break;
	    		case 'left':
	    			x--;
	    			break;
	    		case 'up':
	    			y--;
	    			break;
	    		case 'down':
	    			y++;
	    			break;
	    	}
	    	if ((x <= this.matrix.cols) && (x >= 1) && (y <= this.matrix.rows) && (y > 1)) {
	    		this.cords.push([x, y]);
	    	}

    	}
    }
}