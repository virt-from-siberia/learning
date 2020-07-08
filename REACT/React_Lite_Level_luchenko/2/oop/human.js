class Human {
  constructor(height, weight, age, sex, name, passport, eye) {
    this.height = height;
    this.weight = weight;
    this.age = age;
    this.sex = sex;
    this.name = name;
    this.passport = passport;
    this.eye = eye;
  }
}

let ivan = new Human(160, 59, 32, "man", "Ivan", "has", "brown");

console.log(ivan);
