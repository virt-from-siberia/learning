interface IPet {
    name: string;
    age: number;
    favoritePark?: string;
}

type ReadonlyPet = {
    readonly [K in keyof IPet]-?: IPet[K];
}

// Mutable State
const pet:IPet = {name: 'Buttons', age: 5};

// Immutable State
const readonlyPet: ReadonlyPet = {name: 'Buttons', age: 5};