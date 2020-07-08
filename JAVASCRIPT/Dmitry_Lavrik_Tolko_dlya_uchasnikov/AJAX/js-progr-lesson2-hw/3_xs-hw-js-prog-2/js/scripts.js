"use strict";/**/
window.onload = function (e) {

    var div = document.querySelector('.fields');
    var cellSize = 20;
    var cols = 10;
    var rows = 10;

   
    let divTime = document.createElement('div');
        divTime.className = 'time';
        document.querySelector('body').appendChild(divTime);
        

    let divScore = document.createElement('div');
        divScore.className = 'score';
        document.querySelector('body').appendChild(divScore);
        

    let butStart = document.createElement('button');
        butStart.className = 'start';
        document.querySelector('body').appendChild(butStart);
        document.querySelector('.start').innerHTML = 'START';

        document.querySelector('.start').onclick = function() {
            cellSize = document.querySelector('input[name="cellSize"]').value;
            cols = document.querySelector('input[name="cols"]').value;
            rows = document.querySelector('input[name="rows"]').value;
            
            document.querySelector('.time').innerHTML = 'TIME:';
            document.querySelector('.score').innerHTML = 'SCORE:';


            var matrix = new Matrix(div, rows, cols, cellSize);
            matrix.create();
            
            let col_fruit = Math.floor(Math.random() * cols)+1;
             /*for (let i = 0; i < col_fruit; i++) {
                (new Fruit( matrix,
                            [[Math.floor(Math.random() * cols)+1, Math.floor(Math.random() * rows)+1]], 
                            Math.floor(Math.random() * 3)+1)
                ).show();
            }*/
            
            let f_coord = [];
            
            for (let i = 0; i < col_fruit; i++) {
                f_coord[i] = [Math.floor(Math.random() * cols)+1, Math.floor(Math.random() * rows)+1];
            }
            (new Fruit( matrix, f_coord, 1)).show();
            for (let i = 0; i < col_fruit; i++) {
                f_coord[i] = [Math.floor(Math.random() * cols)+1, Math.floor(Math.random() * rows)+1];
            }
            (new Fruit( matrix, f_coord, 2)).show();
            for (let i = 0; i < col_fruit; i++) {
                f_coord[i] = [Math.floor(Math.random() * cols)+1, Math.floor(Math.random() * rows)+1];
            }
            (new Fruit( matrix, f_coord, 3)).show();
            

            //var wall = new Wall(matrix, [[3, 7], [4, 7], [5, 7], [6, 7]]); 
            //wall.show();
           
           (new Wall(matrix, [[Math.floor(Math.random() * cols)+1, Math.floor(Math.random() * rows)+1]], Math.floor(Math.random() * rows/2) +1, 'up')).show();
           (new Wall(matrix, [[Math.floor(Math.random() * cols)+1, Math.floor(Math.random() * rows)+1]], Math.floor(Math.random() * cols/2) +1, 'left')).show();
           (new Wall(matrix, [[Math.floor(Math.random() * cols)+1, Math.floor(Math.random() * rows)+1]], Math.floor(Math.random() * rows/2) +1, 'right')).show();
           (new Wall(matrix, [[Math.floor(Math.random() * cols)+1, Math.floor(Math.random() * rows)+1]], Math.floor(Math.random() * cols/2) +1, 'down')).show();

           //(new Wall(matrix, [[Math.floor(Math.random() * cols)+1, Math.floor(Math.random() * rows)+1]], 5, 'down')).show();

            
            var snake = new Snake(matrix, [[5, 5], [4, 5], [3, 5]], 'right');
            snake.show();

            let key = 39;
            
            document.onkeydown = function(e){
                let oldCourse = key;
                if (Math.abs(oldCourse - e.keyCode) == 2) { key = oldCourse; }
                else {key = e.keyCode} 

                switch(key){
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


            
            let time = 0;


            let timer = setInterval(() => {
                snake.move();
                time += 0.5;
                if ((time ^ 0) === time) {
                    document.querySelector('.time').innerHTML = 'TIME: ' + time;
                }

                if  ((document.querySelector('.fields > div[data-game="fruit1"]') === null) &&
                    (document.querySelector('.fields > div[data-game="fruit2"]') === null) && 
                    (document.querySelector('.fields > div[data-game="fruit3"]') === null)) {
                    clearInterval(timer);
                    alert('you win!!!!');
                }
                if(!snake.alive){
                    clearInterval(timer);
                    alert('GAME OVER...');
                }
                if (snake.eat) {
                    document.querySelector('.score').innerHTML = 'SCORE: ' + snake.score;
                    (new Fruit( matrix,
                            [[Math.floor(Math.random() * cols)+1, Math.floor(Math.random() * rows)+1]], 
                            Math.floor(Math.random() * 3)+1)
                    ).show();
                }
            }, 500);
        }

    

}
