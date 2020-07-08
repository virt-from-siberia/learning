class Matrix{
    
    /* 
     * на дз - M x N
     * */
    constructor(elem, m, n){
        this.elem = elem;
		this.m = m;
		this.n = n;
		this.cells = [];
    }
    
    create(){
		let elemTotal = this.m * this.n;
	    for(let i = 0; i < elemTotal; i++){
            let div = document.createElement('div');
            this.elem.appendChild(div);
			let elemWidth = this.m * 20;
			this.elem.style.cssText = 'width:' + elemWidth + 'px';
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
    
    /* пересчитать № строки и № столбца в i */ 
    _calcNum(x, y){
        /* НЕПРАВИЛЬНО */
       // return Math.floor(Math.random() * this.elemTotal);
	   return (((y - 1) * this.m + x) - 1);
    }
}