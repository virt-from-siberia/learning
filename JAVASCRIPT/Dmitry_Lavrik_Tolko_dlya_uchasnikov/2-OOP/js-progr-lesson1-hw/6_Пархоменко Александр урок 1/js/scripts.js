window.onload = function (e) {

    var div = document.querySelector('.fields');
    var matrix = new Matrix(div);
    matrix.create();
    
    matrix.setCell(10, 10, 'fruit');
    
    var snake = new Snake(matrix, 3, 5, 'right');
    snake.show();

 
    document.addEventListener("keydown", function(e){
    	var keyCode = e.keyCode;
    	if (keyCode == 37) {snake.course = 'left';}
    	if (keyCode == 38) {snake.course = 'up';}
    	if (keyCode == 39) {snake.course = 'right';}
    	if (keyCode == 40) {snake.course = 'down';}
    });


    setInterval(() => {
        snake.move();
    }, 500);


}
