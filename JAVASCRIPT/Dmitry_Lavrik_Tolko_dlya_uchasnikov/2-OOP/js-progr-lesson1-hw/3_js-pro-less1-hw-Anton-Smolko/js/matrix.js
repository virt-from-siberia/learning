class Matrix{
    
    /* 
     * на дз - M x N
     * */
    constructor(elem, width, height){
        this.elem = elem;
        this.cells = [];
        this.width = width || 20;
        this.height = height || 20;
    }
    
    create(){
        let length = this.width * this.height
        for(let i = 0; i < length; i++){
            let div = document.createElement('div');
            this.elem.appendChild(div);
            this.elem.style.width = this.width * 20 + 'px';
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
        this.elem.children[num].className = val;
    }
    
    _calcNum(x, y){
        return this.width * (y - 1) + x;
    }
}