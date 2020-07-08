const def = {
  host: "localhost",
  drName: "blog",
  user: "admin"
};

const opts = {
  user: "john",
  password: "123456"
};

const port = 8080;

const res = {
  ...def,
  ...opts,
  port: port,
  connect() {
    console.log("connect");
  }
};

console.log(res);

// const animal = {
//   say() {
//     console.log(this.name, " goes", this.voice);
//   }
// };

function Animal(name, voice) {
  this.name = name;
  this.voice = voice;
}
Animal.prototype.say = function() {
  console.log(this.name, " goes", this.voice);
};
const dog = new Animal("Dog", "Woof");
const cat = new Animal("Dog", "Woof");

dog.say();
dog.say();
