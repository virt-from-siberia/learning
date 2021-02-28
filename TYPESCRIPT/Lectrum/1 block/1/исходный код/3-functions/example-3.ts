type f = (baseValue: number, increment: number) => number;

let increase = <f>function increase(x, y) {
  return x + y;
};

const updatedValue: number = increase(3,1);

console.log(updatedValue);
