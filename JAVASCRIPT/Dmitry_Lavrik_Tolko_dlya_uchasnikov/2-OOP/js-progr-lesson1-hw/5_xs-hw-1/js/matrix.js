class Matrix{

    constructor(elem, N){
        this.elem = elem;
        this.size = N;
        this.cells = [];
    }
    
    create(){
        for(let i = 0; i < Math.pow(this.size,2); i++){
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
        console.log(`${x} ${y} ${num}`);
        this.cells[num] = val;
        this.elem.children[num].className = val;
    }
    
    /* пересчитать № строки и № столбца в i */ 
    _calcNum(x, y){
        //console.log(y*this.size +x);
        return (y-1)*this.size +x-1;
    }
}