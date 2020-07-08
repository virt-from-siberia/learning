const arr = ['str', 5, {}];

arr.forEach(item => console.log(item));


arr.forEach(function (item, index, array) {

});

const btn = document.querySelectorAll('.btn');

btn.forEach(item => {
    item.addEventListener('click', () => {
        console.log(`Вы нажали на кнопку:  ${item.className} с атрибутом ${item.getAttribute('data-btn')}`);
        item.setAttribute('data-btn', 20);
        console.log(`Вы нажали на кнопку:  ${item.className} с атрибутом ${item.getAttribute('data-btn')}`);
    });
});

const names = ['Ivan', 'Ann', 'Ksenya', 'Vladimir'];

const shortNames = names.filter(name => name.length < 5);

console.log(shortNames);

let answers = ['IvaN', 'ANNa', 'HEllO'];

answers = answers.map(item => item.toLocaleLowerCase());

console.log(answers);

const some = [4, 'qwe', 'qwer'];

console.log(some.every(item => typeof (item) === 'number'));
console.log(some.some(item => typeof (item) === 'number'));

let numbers = [4, 5, 7, 7, 4, 40, 55];
let res = numbers.reduce((sum, current) => sum + current);
console.log(res);

let newNumbers = ['ivan ', ' Elchin'];
let newNumbersConc = newNumbers.reduce((sum, current) => sum + current);
console.log(newNumbersConc);

const obj = {
    ival: 'persone',
    ann: 'persone',
    dog: 'animal',
    cat: 'animal'
};

const alex = {
    name: 'alex',
    surname: 'elchin',
    say: function (text) {
        console.log(`${alex.name} say ${text}`);
    }
}

let newArr = Object.entries(obj).filter(item => item[1] === 'persone');
console.log(newArr);

alex.say('alex');
let newAlex = Object.entries(alex);
console.log(newAlex);


console.log('====================================================');


let newAlexFunc = Object.entries(alex).filter(item => item[0] === 'surname');
console.log(newAlexFunc);


let randomGeb = {
    "product": "Live JSON generator",
    "version": 3.1,
    "releaseDate": "2014-06-25T00:00:00.000Z",
    "demo": true,
    "person": {
        "id": 12345,
        "name": "John Doe",
        "phones": {
            "home": "800-123-4567",
            "mobile": "877-123-1234"
        },
        "email": [
            "jd@example.com",
            "jd@example.org"
        ],
        "dateOfBirth": "1980-01-02T00:00:00.000Z",
        "registered": true,
        "emergencyContacts": [{
                "name": "Jane Doe",
                "phone": "888-555-1212",
                "relationship": "spouse"
            },
            {
                "name": "Justin Doe",
                "phone": "877-123-1212",
                "relationship": "parent"
            }
        ]
    }
}


console.log('====================================================');

let newRandomGeb = Object.entries(randomGeb);
console.log(newRandomGeb);
console.table(newRandomGeb);