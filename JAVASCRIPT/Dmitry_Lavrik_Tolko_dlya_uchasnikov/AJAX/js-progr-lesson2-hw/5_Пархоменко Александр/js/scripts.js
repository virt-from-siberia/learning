window.onload = function (e) {

    var div = document.querySelector('.fields');
    var matrix = new Matrix(div, 15, 15);
    matrix.create();
    
    var fruit = new Fruit(matrix, [[1, 4]]);
    fruit.show();
    
    var wall = new Wall(matrix, [[3, 7], [4, 7], [5, 7], [6, 7]]);
    wall.show();
    
    var snake = new Snake(matrix, [[8, 5],[7, 5],[6, 5],[5, 5], [4, 5], [3, 5]], 'right');
    snake.show();
    
    document.onkeydown = function(e){
        if ((snake.course == 'right')&&(e.keyCode == 37)){
            return
        }
        if ((snake.course == 'left')&&(e.keyCode == 39)){
            return
        }
        if ((snake.course == 'up')&&(e.keyCode == 40)){
            return
        }
        if ((snake.course == 'down')&&(e.keyCode == 38)){
            return
        }
        snake.course = e.keyCode;

        
        /* добавить защиту от смены курса на противоположный */
        switch(e.keyCode){
            case 37:
                snake.course = 'left';
                break;
            case 38:
                snake.course = 'up';
                break;
            case 39:
                snake.course = 'right';
                break;
            case 40:
                snake.course = 'down';
                break;
        }
    }
    
    let timer = setInterval(() => {
        snake.move();
        
        if(!snake.alive){
            clearInterval(timer);
            alert('gameover');
        }

        if (snake.eating){
            /*новый фрукт*/
            function new_cords(matrix){

                var newX = Math.floor(Math.random() * matrix.cols) + 1;
                var newY = Math.floor(Math.random() * matrix.rows) + 1;
                if (matrix.getCell(newX, newY) == ''){
                    return [newX, newY];
                }
                else return new_cords(matrix);
                
            }

            
            (new Fruit(matrix, [new_cords(matrix)])).show();
            
        }


        
        /* 
         * если покушала, новый фрукт на случайном поле + очки
         * 
         * */
    }, 500);
}
