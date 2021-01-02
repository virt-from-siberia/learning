type Cat = IPet & IFeline;

interface IPet {
    pose(): void;
}

interface IFeline {
    nightvision: boolean;
}

let cat:Cat;

// Both methods and properties are available
// cat.nightvision
// cat.pose()