class Matrix{
    
    /* 
     * на дз - M x N
     * */
    constructor(elem, rows = 20, cols = 20){
        this.elem = elem;
        this.cells = [];
        this.rows = rows;
        this.cols = cols;
    }
    
    create(){
        for(let i = 0; i < this.rows * this.cols; i++){
            let div = document.createElement('div');
            
            if(i % this.cols === 0){
                div.classList.add('row-start');
            }
            
            div.setAttribute('data-game', '');
            this.elem.appendChild(div);
            this.cells[i] = '';
        }
    }
    
    getCell(x, y){
        let num = this._calcNum(x, y);
        return this.cells[num];
    }
    
    setCell(x, y, val){
        let num = this._calcNum(x, y);
        this.cells[num] = val;
        this.elem.children[num].setAttribute('data-game', val);
    }
    
    /* пересчитать № строки и № столбца в i */ 
    _calcNum(x, y){
        return (y - 1) * this.cols + x - 1;
    }
}