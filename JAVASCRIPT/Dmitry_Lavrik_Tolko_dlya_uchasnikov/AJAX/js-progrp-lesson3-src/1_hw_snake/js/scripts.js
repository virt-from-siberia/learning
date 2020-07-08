window.onload = function (e) {

    let div = document.querySelector('.fields');
    let matrix = new Matrix(div, 15, 15);
    matrix.create();
    
    (new Fruit(matrix, [[1, 4]])).show();
    
    let wall = new Wall(matrix, [[3, 7], [4, 7], [5, 7], [6, 7]]);
    wall.show();
    
    let snake = new Snake(matrix, [[5, 5], [4, 5], [3, 5]], 'right');
    snake.show();
    
    let score = 0;
    
    document.onkeydown = function(e){
        /* добавить защиту от смены курса на противоположный */
        switch(e.keyCode){
            case 37:
                if(snake.course !== 'right'){
                    snake.newCourse = 'left';
                }
                break;
            case 38:
                if(snake.course !== 'down'){
                    snake.newCourse = 'up';
                }
                break;
            case 39:
                if(snake.course !== 'left'){
                    snake.newCourse = 'right';
                }
                break;
            case 40:
                if(snake.course !== 'up'){
                    snake.newCourse = 'down';
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
        
        if(snake.eaten){
            score++;
            console.log(score);
            
            let x, y;
            
            do{
                x = Helpers.random(1, matrix.cols);
                y = Helpers.random(1, matrix.rows);
            }
            while(matrix.getCell(x, y) !== '');
            
            (new Fruit(matrix, [[x, y]])).show();
        }
    }, 200);
}
