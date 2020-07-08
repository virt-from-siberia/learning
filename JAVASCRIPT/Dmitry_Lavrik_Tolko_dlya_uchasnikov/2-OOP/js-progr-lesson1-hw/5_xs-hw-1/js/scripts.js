window.onload = function (e) {

    var div = document.querySelector('.fields');
    var N = 20;
    var matrix = new Matrix(div, N);
    matrix.create();

    let col_fruit = Math.floor(Math.random() * N);
    for (i = 0; i < col_fruit; i++) {
    	matrix.setCell(	Math.floor(Math.random() * N),
    					Math.floor(Math.random() * N), 'fruit');
    }
    
    var snake = new Snake(matrix, 2, 2, 'right');
    snake.show();

   document.querySelector('body').onkeydown = function(e) {
		//console.log('key: ' + e.keyCode);
		switch(e.keyCode){
            case 38:
                snake.course = 'up';
                console.log('up');
                break;
            case 39:
                snake.course = 'right';
                console.log('right');
                break;
            case 40:
                snake.course = 'down';
                break;
            case 37:
                snake.course = 'left';
                break;
        }
	} 
    
    let game_snake = setInterval(() => {
        snake.move();
    }, 500);

    var timer = new Timer(0, document.querySelector('body'));
    let game_time = setInterval(() => {
			timer.tick();
			if (document.querySelector('.fruit') === null) {
				clearInterval(game_time);
				clearInterval(game_snake);
			}
		}, 1000);
}


