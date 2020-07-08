class Fruit extends Elem{
    
    constructor(matrix, cords, type){

    	for (let i = 0; i < cords.length; i++){
    		if (matrix.getCell(cords[i][0], cords[i][1]) != '') {
    			cords.splice(i,1);
    			console.log('splice!!!!!!');
    		}
    	}

        super(matrix, cords);
        this.type = type;
        this.value = 'fruit' + this.type;

    }
    
}