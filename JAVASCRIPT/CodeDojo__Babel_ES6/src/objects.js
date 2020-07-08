console.log('=============== OBJECTS ===============');

let firstName = 'Bill',
    lastNmae = 'Gates',
    email = 'lol@mail.ru';

let person = {
    firstName,
    lastNmae,
    email,
    sayHi() {
        console.log(`HI my name in ${firstName} ${lastNmae}`);
    }
}

Object.defineProperty(person, 'fullName', {
    get: function () {
        return this.firstName + '' + this.lastNmae;
    },
    set: function (value) {
        this.firstName = value;
    }
});



console.log(person);

person.sayHi();

// let property = 'email';
// person[property];

// person = {
//     [property]: 'Bill'
// };

function createCar(property, value) {
    var car = {};
    car[property] = value;

    return car;
}

console.log(createCar('vin', 1));

function createCarES6(property, value) {
    return {
        [property]: value,
        ['_' + property]: value,
        [property]: value,
        [property.toUpperCase()]: value,
        ['get ' + property]() {
            return this[property];
        }
    };
}

console.log((createCarES6('vin', 2)) instanceof Object);
console.log(createCarES6('vin', 2));