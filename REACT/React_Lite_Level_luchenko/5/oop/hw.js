console.log("============ home work ==========");

class Man {
  constructor(name, age, passport, sex) {
    this._name = name;
    this.age = age;
    this.passport = passport;
    this.sex = sex;
  }

  render() {
    let out = "";
    out += `<p>${this._name}</p>`;
    out += `<p>${this.age}</p>`;
    out += `<p>${this.passport.series}</p>`;
    out += `<p>${this.passport.num}</p>`;
    out += `<p>${this.sex}</p>`;
    out += `<p>================</p>`;

    let target = document.querySelector(".employer");
    target.innerHTML = out;
  }
}

const alex = new Man("alex", 34, { series: 12313, num: 13123 }, "man");
alex.render();

console.log(alex);

class Employer extends Man {
  constructor(name, age, passport, sex, create, salary) {
    super(name, age, passport, sex);
    this.create = create;
    this.salary = salary;
  }

  render(name, age, passport, sex) {
    super.render(name, age, passport, sex);
    let out = "";
    out += `<p>${this.create}</p>`;
    out += `<p>${this.salary}</p>`;

    let target = document.querySelector(".employerNew");
    target.innerHTML = out;
  }

  get name() {
    return this._name;
  }

  set name(value) {
    if (typeof value !== "string") {
      value = "ERROR NAME IS UNDEFINED";
    }
    this._name = value.trim();
  }
}

const employer = new Employer(
  "alex",
  34,
  { series: 12313, num: 13123 },
  "man",
  "21-02-1990",
  "2004USD"
);
employer.render();
console.log(employer);

console.log("getter employer " + employer.name);

employer.name = "Iva n";

console.log("setter employer " + employer.name);
