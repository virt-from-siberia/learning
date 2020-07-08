window.onload = function (e) {

    var div = document.querySelector('.fields');
    var matrix = new Matrix(div, 15, 15);
    matrix.create();
    
    (new Fruit(matrix, [[1, 4]])).show();
    
    var wall = new Wall(matrix, [[3, 7], [4, 7], [5, 7], [6, 7]]);
    wall.show();
    
    var snake = new Snake(matrix, wall, fruit, [[5, 5], [4, 5], [3, 5]], 'right');
    snake.show();
    
    document.onkeydown = function(e){
        // snake.course = e.keyCode;
        
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
    
    let timer = setInterval(() => {
        snake.move();
        
        if(!snake.alive){
            clearInterval(timer);
            alert('gameover');
        }
        
        /* 
         * если покушала, новый фрукт на случайном поле + очки
         * 
         * */
        if (snake.eat == true) {
            var fuitX = Math.floor(Math.random() * matrix.cols);
            var fuitY = Math.floor(Math.random() * matrix.rows);
            while (matrix.getCell(fuitX, fuitY) != '') {
                fuitX = Math.floor(Math.random() * matrix.cols);
                fuitY = Math.floor(Math.random() * matrix.rows);
            }
            fruit = new Fruit(matrix, [[fuitX, fuitY]]);
            fruit.show();
            var counter = document.querySelector('.score > span');
            counter.innerHTML++;
            snake.eat = false;
        }

    }, 500);
}
