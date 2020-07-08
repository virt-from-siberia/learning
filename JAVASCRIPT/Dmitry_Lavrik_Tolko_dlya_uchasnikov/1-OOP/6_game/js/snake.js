class Snake {

    constructor(matrix, x, y, course, cords) {
        // super(matrix, cords);
        this.cords = cords;
        this.matrix = matrix;
        this.course = course;
        this.y = y;
        this.x = x;
        // this.value = 'snake';
        this.show();
        this.alive = true;
    }

    show() {
        this.matrix.setCell(this.x, this.y, 'snake');
    }

    move() {
        if (!this.alive) {
            return;
        }
        var head = this.cords[0];
        var lastX = this.x;
        var lastY = this.y;


        switch (this.course) {
            case 'right':
                this.x++;
                break;
            case 'left':
                this.x--;
                break;
            case 'up':
                this.y--;
                break;
            case 'down':
                this.y++;
                break;
        }

        if (!this.checkAlive()) {
            this.alive = false;
            return;
        }
        this.matrix.setCell(lastX, lastY, '');
        this.matrix.setCell(this.x, this.y, 'snake');
    }

    checkAlive() {
        return this.x >= 1 && this.x <= this.matrix.cols && this.y >= 1 && this.y <= this.matrix.rows;
    }
}