class Header {
  static hello(a) {
    console.log("static method " + a);
  }

  constructor(h1, h2) {
    this.h1 = h1;
    this.h2 = h2;
  }
}

const header = new Header("hellow", "world");

console.log(header);

class Children extends Header {
  constructor(hero, h1, h2) {
    super(h1, h2);
    this._hero = hero;
  }

  get hero() {
    return this._hero;
  }

  set hero(c) {
    this._hero = c;
  }
}

const children = new Children("new hello", "new site", "go go og");
console.log(children);
console.log(children.hero);
children.hero = " Google";
console.log(children.hero);

Header.hello("asd");

header.h2 = 3.123;

console.log(header.h2);
