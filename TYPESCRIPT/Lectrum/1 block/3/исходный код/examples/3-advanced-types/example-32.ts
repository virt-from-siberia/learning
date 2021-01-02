interface IPet {
    pose(): void;
}

interface IFeline {
    nightvision: boolean;
}

interface ICat extends IPet, IFeline {
    
}

let cat:ICat;

// Both methods and properties are available
// cat.nightvision
// cat.pose()