class Matrix {
    
    constructor(elem, columns, rows) {
        this.elem = elem;
        this.cols = columns;
        this.rows = rows;
        this.elem.style.width = this.cols * 20 + 'px';
        this.cells = [];
    }
    
    create() {
        for(let i = 1; i <= this.cols * this.rows; i++) {
            let div = document.createElement('div');
            this.elem.appendChild(div);
            this.cells[i] = '';
        }
    }
    
    getCell(x, y) {
        let num = this._calcNum(x, y);
        return this.cells[num];
    }
    
    setCell(x, y, val) {
        let num = this._calcNum(x, y);
        this.cells[num] = val;
        this.elem.children[num-1].className = val;
    }
    
    /* пересчитать № строки и № столбца в i */ 
    _calcNum(x, y) {
        return this.cols * (y-1) + x;
    }
}