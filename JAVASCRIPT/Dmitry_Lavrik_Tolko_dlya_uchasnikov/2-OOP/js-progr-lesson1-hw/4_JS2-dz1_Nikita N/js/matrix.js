class Matrix{
    
    /* 
     * на дз - M x N
     * */
    constructor(elem,m,n){
        this.elem = elem;
        this.cells = [];
        /*this.m = m;
        this.n = n;*/
    }
    
    create(){

        for(let i = 0; i <400 /*this.m * this.n*/; i++){
            let div = document.createElement('div');
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
        this.elem.children[num].className = val;
    }
    
    /* ДЗ № 1 */
    _calcNum(x, y){
        let m = 20;
        return y * m + x - 1;
    }
}