window.onload = function (e) {

    var div = document.querySelector('.fields');
    var matrix = new Matrix(div);
    matrix.create();
    
    matrix.setCell(4, 5, 'fruit');
    matrix.setCell(10, 2, 'fruit');
    matrix.setCell(17, 19, 'fruit');
    matrix.setCell(20, 3, 'fruit');
    matrix.setCell(10, 10, 'fruit');

    var snake = new Snake(matrix, 2, 18, '');
    snake.show();
    
    setInterval(() => {
        snake.move();
    }, 200);


/*ДЗ №3*/
    document.onkeydown = function(e){

        switch(e.keyCode){
            case 68:
                console.log('right');
                snake.course = 'right';
                break;

            case 65:
                console.log('left');
                snake.course = 'left';
                break;

            case 87:
                console.log('top');
                snake.course = 'top';
                break;

            case 83:
                console.log('bottom');
                snake.course = 'bottom';
                break;
        }

    }

};
