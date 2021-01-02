type Pet = {
    pose(): void;
}

interface IFeline {
    nightvision: boolean;
}

type Cat = IFeline & Pet

let cat:Cat;

// Both methods and properties are available
// cat.nightvision
// cat.pose()