class Matrix{
    
    constructor(elem, rows = 20, cols = 20, cellSize = 20){
        this.elem = elem;
        this.cells = [];
        this.rows = rows;
        this.cols = cols;
        this.cellSize = cellSize;
    }
    
    create(){
        this.elem.innerHTML = '';
        for(let i = 0; i < this.rows * this.cols; i++){
            let div = document.createElement('div');
            div.style.width = this.cellSize + 'px';
            div.style.height = this.cellSize + 'px';
            
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
        //console.log(`${x}  ${y} ${num}`);
        let type = this.elem.children[num].getAttribute('data-game');
        //return this.cells[num];
        return type;
    }
    
    setCell(x, y, val){
        let num = this._calcNum(x, y);
        //console.log(`${x}  ${y} ${num}`);
        this.cells[num] = val;
        this.elem.children[num].setAttribute('data-game', val);
    }
    
    _calcNum(x, y){
        return (y - 1) * this.cols + x - 1;
    }
}