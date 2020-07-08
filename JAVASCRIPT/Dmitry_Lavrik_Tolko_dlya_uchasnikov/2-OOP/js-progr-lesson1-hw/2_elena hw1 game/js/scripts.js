window.onload = function (e) {

    var div = document.querySelector('.fields');
    var matrix = new Matrix(div, 20, 10);
    matrix.create();
    
    matrix.setCell(4, 10, 'fruit');
    
  //  var snake = new Snake(matrix, 5, 9, 'bottom');
	var snake = new Snake(matrix, 5, 9);
    snake.show();
    
	document.onkeydown = function(e) {
		if (e.keyCode == 38) {
			snake.move('top');
			moveIt('top');
		}
		if (e.keyCode == 40) {
			snake.move('bottom');
			moveIt('bottom');
		}
		if (e.keyCode == 37) {
			snake.move('left');
			moveIt('left');
		}
		if (e.keyCode == 39) {
			snake.move('right');
			moveIt('right');
		}
	}
	
	var snakeInt;
	
	function moveIt(direc) {
		clearInterval(snakeInt);
		snakeInt = setInterval(function() {
		snake.move(direc);}, 500);
		
	};
	
	moveIt('left');
	

}
