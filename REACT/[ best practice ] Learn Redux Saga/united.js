function sayHi() {
  //statements
  return "hi";
  return "world"; //was never executed
}

const result = sayHi();
console.log(result);

function* sayHiGenerator() {
  yield "hey";
  yield "word";
  yield "js";
  return "hi";
}

const resultGenerator = sayHiGenerator();

console.log(resultGenerator.next());
console.log(resultGenerator.next());
console.log(resultGenerator.next());

const resultGeneratorForof = sayHiGenerator();

for (const iterator of resultGeneratorForof) {
  console.log(iterator);
}

console.log("====================================");

function* newGenetrator() {
  yield "something";
  const final = yield "give me value";
  return final;
}

const neewGeneratorIt = newGenetrator();

console.log(neewGeneratorIt.next());
console.log(neewGeneratorIt.next());
console.log(neewGeneratorIt.next("custom value"));
