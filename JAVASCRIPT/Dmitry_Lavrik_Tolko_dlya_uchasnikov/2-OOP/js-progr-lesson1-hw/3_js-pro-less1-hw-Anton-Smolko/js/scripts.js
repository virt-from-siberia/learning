window.onload = function (e) {

    var div = document.querySelector('.fields');
    var matrix = new Matrix(div, 25, 15);
    matrix.create();
    
    matrix.setCell(4, 5, 'fruit');
    
    var snake = new Snake(matrix, 5, 5, 'top');
    snake.show();
    
    setInterval(() => {
        snake.move();
    }, 500);

    window.onkeyup = function(e) {
      switch(e.keyCode){
        case 37:
          snake.course = 'left';
          break;
        case 38:
          snake.course = 'top';
          break;
        case 39:
          snake.course = 'right';
          break;
        case 40:
          snake.course = 'bottom';
          break;
      }
    }
}
