class Header {
  constructor(h1, h2) {
    this.h1 = h1;
    this.h2 = h2;
  }
}

const header = new Header("Hello", "My site");
let a = {
  a1: "object A",
  _a3: 5,
  a2: function() {
    console.log(this.a1);
    return true;
  },

  set _a3(x) {
    this.a3 = x;
  }
};

let b = {
  a1: "bbbbbb",
  b1: "object B"
};

// b.__proto__ = a;
Object.setPrototypeOf(b, a);

console.log(a);
console.log(b);
console.log(b.b1);
console.log(b.a1);
console.log(b.a2());
console.log("------ ");
console.log((a.a3 = 77));
console.log(a);
b.a3 = 88;
console.log(b);

for (let key in a) {
  console.log(key);
}

for (let key of a) {
  console.log(key);
}
