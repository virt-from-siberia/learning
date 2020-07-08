class Animal {
  constructor(name, voice) {
    this.name = name;
    this.voice = voice;
  }

  say() {
    console.log(this.name, "goes", this.voice);
  }
}

class Bird extends Animal {
  constructor(name, voice, canFly) {
    super(name, voice);
    super.say();
    this.canFly = canFly;
  }
  say() {
    console.log("Birds do not like to talk");
  }
}

const duck = new Bird("Duck", "quack", true);

duck.say();

class Count {
  constructor(value) {
    this.value = value;
    this.count = 0;
    this.inc = () => {
      return (this.count += this.value);
    };
  }
}

const a = new Count();
console.log(a.inc(1000));
