const arr1 = [11, 2, 3];
const arr2 = [4, 8, 9];

const res = Math.max(...arr1, ...arr2);

const shallowCopy = [...arr1, ...arr2];

console.log(shallowCopy);

// Деструктуризация

const persone = {
  name: {
    first: "Peter",
    last: "Smith"
  },
  age: 25,
  row: 25
};

const {
  name: { first: firstName, last: lastName }
} = persone;

console.log(firstName, lastName);

const { row = "user" } = persone;

console.log(row);

function connect({ host = "localhost", port = 12345, user = "guest" }) {
  console.log(user, port, host);
}

connect({
  host: "localhost",
  port: 1829,
  user: "peter"
});

const dict = {
  duck: "quack",
  dog: "wuff",
  mouse: "squeak"
};

const { duck, ...otherAnimmals } = dict;
console.log(duck);
console.log(otherAnimmals);

const fib = [1, 2, 213, 2, 4, 345, 6];

const [a, b, c] = fib;

console.log(a, b, c);

const line = [
  [10, 7],
  [14, 7]
];

const [[p1x, p1y], [p2x, p2y]] = line;
console.log(p1x, p1y, p2x, p2y);

const dict2 = {
  duck: "quack",
  dog: "wuff",
  mouse: "squeak",
  hamster: "squeak"
};

const result = Object.entries(dict2)
  .filter(([key, value]) => value === "squeak")
  .map(([key]) => key);
console.log(result);

const shape = {
  type: "sigment",
  coordinates: {
    start: [10, 15],
    end: [17, 15]
  }
};

const {
  coordinates: {
    start: [startX, startY],
    end: [endX, endY]
  }
} = shape;

console.log(startX, startY);
console.log(endX, endY);

//OBJECTS

const x = 10;
const y = 10;

const point = {
  draw() {}
};

const prefix = "_blah";

const data = {
  [prefix + "name"]: "Bob",
  [prefix + "age"]: 23
};

console.log(data);

const def = {
  host: "localhost",
  drName: "blog",
  user: "admin"
};

const opts = {
  user: "john",
  password: "123456"
};

const ass = Object.assign({}, def, opts);

console.log(ass);

const persones = {
  name: "Bob",
  friends: ["Mark", "John"]
};

const shallowCopyNext = Object.assign({}, persones);
persones.friends.push("July");

console.log(shallowCopyNext);
