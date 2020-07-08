window.onload = function (e) {

    var div = document.querySelector('.fields');
    var scores = document.querySelector('.scores span');
    var matrix = new Matrix(div, 15, 15);
    matrix.create();
    
    var fruit = new Fruit(matrix, [[1, 4]]);
    fruit.show();
    
    var wall = new Wall(matrix, [[3, 7], [4, 7], [5, 7], [6, 7]]);
    wall.show();
    
    var snake = new Snake(matrix, [[5, 5], [4, 5], [3, 5]], 'right');
    snake.show();
    
    document.onkeydown = function(e){
        
        switch(e.keyCode){
            case 37:
                if(snake.course != 'right') {
                    snake.course = 'left';
                }
                break;
            case 38:
                if(snake.course != 'down') {
                    snake.course = 'up';
                }               
                break;
            case 39:
                if(snake.course != 'left') {
                    snake.course = 'right';
                }               
                break;
            case 40:
                if(snake.course != 'up') {
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

        if(snake.hasEated) {
            var s = +scores.innerHTML;
            scores.innerHTML = s + 10;
            newFruit();
        }
        
    }, 500);

    function newFruit() {
        var newX = getRandomInt(1, matrix.cols + 1);
        var newY = getRandomInt(1, matrix.rows + 1);

        for(let cord of wall.cords) {
            if(cord[0] === newX && cord[1] === newY) {
                newFruit();
            } else {
                var fruit = new Fruit(matrix, [[newX, newY]]);
                fruit.show();
            }
        }
    }
}

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}
