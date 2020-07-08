class Timer{
    
    constructor(time, elem){
        this.elem = elem;
        this.time = time;
        let div = document.createElement('div');
        this.elem.appendChild(div);
    }
    
    tick() {
        this.time++;
        this.elem.lastChild.innerHTML = 'TIME: ' + this.time;
    }
}
