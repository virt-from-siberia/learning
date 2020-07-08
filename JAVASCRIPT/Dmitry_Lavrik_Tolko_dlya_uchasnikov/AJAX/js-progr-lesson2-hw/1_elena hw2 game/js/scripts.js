window.onload = function (e) {
	var score = 0;
	var totalScore = document.querySelector('.score > span');
	
    var div = document.querySelector('.fields');
    var matrix = new Matrix(div, 15, 15);
    matrix.create();
    
	var fruit = new Fruit(matrix, [[10, 4]]);
    fruit.show();
  
    var wall = new Wall(matrix, [[3, 7], [4, 7], [5, 7], [6, 7]]);
    wall.show();
    
    var snake = new Snake(matrix, [[5, 5], [4, 5], [3, 5]], 'right');
    snake.show();
    
    document.onkeydown = function(e){
             
        /* добавить защиту от смены курса на противоположный */
        switch(e.keyCode){
            case 37:
				if (snake.course != 'right') {
					snake.course = 'left';
				}
                break;
            case 38:
				if (snake.course != 'down') {
					snake.course = 'up';
				}
                break;
            case 39:
				if (snake.course != 'left') {
					snake.course = 'right';
				}
                break;
            case 40:
				if (snake.course != 'up') {
					snake.course = 'down';
				}
                break;
        }
    }
 
	function randomValue() {   // случайная координата
		var arr = [];
		arr[0] = Math.floor(Math.random() * matrix.cols) + 1; // координата по x
		arr[1] = Math.floor(Math.random() * matrix.rows) + 1; // координата по y
		return arr;
	}
	
	function newFruits(colElems) {  
		var arrCol = [];
		for (var i = 0; i < colElems; i++) {
			
			arrCol[i] = randomValue();
			var cellValue = matrix.getCell(arrCol[i][0], arrCol[i][1]);
			
			while ((cellValue == 'snake') || (cellValue == 'wall')) {
			//	новый фрукт выкидывать не на стену и не на змею
				arrCol[i] = randomValue();
				cellValue = matrix.getCell(arrCol[i][0], arrCol[i][1]);
			}
		}
		return arrCol;
	}
	
	var snakeLenght = snake.cords.length; // старая длина змеи
		
    var timer = setInterval(() => {
        snake.move();
        
		if (snake.cords.length > snakeLenght) {
		
			snakeLenght++;  // змея поела 
			score += 20;	// увеличить очки
			totalScore.innerHTML = score;
			
			var colElems = Math.floor(Math.random() * 3) + 1; // новых фруктов не больше 3-х
			
			var fruitCords = newFruits(colElems); // кординаты новых фруктов
			
			for (var i = 0; i < colElems; i++) {
				var fruit = new Fruit(matrix, [[fruitCords[i][0], fruitCords[i][1]]]);
				fruit.show();
			}
		
		}
		
        if(!snake.alive){
            clearInterval(timer);
            alert('gameover');
        }
        
        /* 
         * если покушала, новый фрукт на случайном поле + очки
         * 
         * */
    }, 500);
}
