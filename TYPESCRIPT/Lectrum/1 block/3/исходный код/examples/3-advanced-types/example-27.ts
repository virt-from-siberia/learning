interface IPet {
    name: string;
    age: number;
}

type ReadonlyPet = {
    readonly [K in keyof IPet]: IPet[K];
}

// Mutable State
const pet:IPet = {name: 'Buttons', age: 5};

// Immutable State
const readonlyPet: ReadonlyPet = {name: 'Buttons', age: 1};

// State mutations
pet.age = 6;

// State mutations
readonlyPet.age = 6;
