interface IAnimal {
    age: number;
    eat(): void;
    speak(): string;
}

type AnimalTypeAlias = {
    age: number;
    eat(): void;
    speak(): string;
}

let animalInterface: IAnimal = {
    age: 1,
    eat() {},
    speak() { return 'speak' }
};

let animalTypeAlias: AnimalTypeAlias = {
    age: 1,
    eat() {},
    speak() { return 'speak' }
}

animalInterface = animalTypeAlias;
