



function generateWindow() {

    var content = document.querySelector('.content');
    var selectCols = document.getElementById('cols');
    var selectCherry = document.getElementById('cherry');
    var selectSpeed = document.getElementById('speed');
    var valueOfCols = 0;
    var valueOfCherry = 0;
    var Speed = 0;


    switch (selectCols.options[selectCols.selectedIndex].value) {
        case '10 X 10':
            console.log('10 cols');
            valueOfCols = 10;
            break;
        case '20 X 20':
            console.log('20 cols');
            valueOfCols = 20;
            break;
        case '30 X 30':
            console.log('30 cols');
            valueOfCols = 30;
            break;
    }

    switch (selectCherry.options[selectCherry.selectedIndex].value) {
        case 'Мало':
            if (valueOfCols == 10) {
                valueOfCherry = 10;
            } else if (valueOfCols == 20) {
                valueOfCherry = 15;
            } else if (valueOfCols == 30) {
                valueOfCherry = 20;
            }
            break;
        case 'Средне':
            if (valueOfCols == 10) {
                valueOfCherry = 20;
            } else if (valueOfCols == 20) {
                valueOfCherry = 25;
            } else if (valueOfCols == 30) {
                valueOfCherry = 30;
            }
            break;
        case 'Много':
            if (valueOfCols == 10) {
                valueOfCherry = 30;
            } else if (valueOfCols == 20) {
                valueOfCherry = 35;
            } else if (valueOfCols == 30) {
                valueOfCherry = 40;
            }
            break;
    }

    switch (selectSpeed.options[selectSpeed.selectedIndex].value) {
        case 'медленно':
            console.log('10 cols');
            Speed = 1000;
            break;
        case 'средне':
            console.log('20 cols');
            Speed = 500;
            break;
        case 'весокоя':
            console.log('30 cols');
            Speed = 250;
            break;
    }


    content.innerHTML = '';

    var div = document.querySelector('.fields');
    var matrix = new Matrix(div, valueOfCols, valueOfCols);

    matrix.create();
    var fruit = new Fruit(matrix, valueOfCherry, valueOfCols);
    var snake = new Snake(matrix, 6, 6, 'down');
    var frog = new Frog(matrix, [[5, 5], [1, 7]]);
    frog.show();
    var walls = new Walls(matrix, [[4, 1], [4, 2], [4, 3]]);
    walls.show();
    // var snake = new Snake(matrix, [5, 5], 'right');
    // snake.show();



    document.onkeydown = function (e) {
        switch (e.keyCode) {
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
    };

    let timer = setInterval(() => {
        snake.move();

        if (!snake.alive) {
            clearInterval(timer);
            alert('game over');
        }

    }, Speed);

}

window.onload = function (e) {

    let button = document.querySelector('button');
    button.addEventListener('click', generateWindow);


};
