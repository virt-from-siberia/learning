window.onload = function (e) {

    var div = document.querySelector('.fields');
    var matrix = new Matrix(div, 20, 20);
    matrix.create();
    
    matrix.setCell(5, 5, 'fruit');
    
    var snake = new Snake(matrix, 6, 5, 'right');
    snake.show();
    
    var handle = setInterval(() => {
        snake.move();
    }, 400);

    document.addEventListener ('keydown', function(e) {
        if (e.keyCode === 37) {
            snake.course = 'left';
        } else if (e.keyCode === 38) {
            snake.course = 'up';
        } else if (e.keyCode === 39) {
            snake.course = 'right';
        } else if (e.keyCode === 40) {
            snake.course = 'down';
        } else if (e.keyCode === 19) {
            /* при нажатии Pause/Break змейка либо останавливается, либо
             снова двигается */
            if(handle) {
                window.clearInterval(handle);
                handle = '';
            } else {
                handle = setInterval(() => {
                    snake.move();
                }, 400);
            }
        }
    });
}
