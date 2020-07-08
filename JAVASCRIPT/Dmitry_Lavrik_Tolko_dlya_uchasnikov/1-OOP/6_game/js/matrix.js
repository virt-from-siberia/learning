
class Matrix {

    /*
     * на дз - M x N
     * */
    constructor(elem, rows, cols) {
        this.elem = elem;
        this.cells = [];
        this.rows = rows;
        this.cols = cols;

    }

    create(valueOf) {
        for (let i = 0; i < this.rows * this.cols; i++) {
            let div = document.createElement('div');

            // if (i % this.cols === 0) {
            //     div.classList.add('row-start');
            // }

            this.elem.appendChild(div);
            this.cells[i] = '';
        }
        this.elem.style.width = (this.cols * 20) + 'px';
    }

    getCell(x, y) {
        let num = this._calcNum(x, y);
        return this.cells[num];
    }

    setCell(x, y, val) {
        let num = this._calcNum(x, y);
        this.cells[num] = val;
        // this.elem.children[num].className = val;
        this.elem.children[num].setAttribute('data-game', val);
    }

    /* пересчитать № строки и № столбца в i */
    _calcNum(x, y) {
        // return x * 20 - 20 + y - 1;
        return (y - 1) * this.cols + x - 1;
    }
}