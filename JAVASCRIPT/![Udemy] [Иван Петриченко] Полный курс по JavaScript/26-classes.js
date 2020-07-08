class Rectangle {
    constructor(height, width = 20) {
        this.height = height;
        this.width = width;
    }
    calcAria() {
        return this.height * this.width;
    }
}

const square = new Rectangle(10, 10);

console.log(square.calcAria());


let video = ['youtube', 'vimeo', 'rutube'],
    blogs = ['worldpress', 'livejournal', 'blogger'],
    internet = [...video, ...blogs, 'vk', 'facebok'];

console.log(internet);


function log(a, b, c) {
    console.log(a);
    console.log(b);
    console.log(c);
    console.log(a + b + c);
}
let numeric = [2, 5, 7];

log(...numeric);