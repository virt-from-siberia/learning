console.log('=============== DISTRUCTURING ARRAYS ===============');

let languages = ['Javascript', 'PHP', 'Python', 'Ruby'];

let js = languages[0],
    php = languages[1],
    python = languages[2],
    ruby = languages[3];

console.log(js, php, python, ruby);

let [jsD, phpD, pythonD, rubyD] = languages;

console.log(jsD, phpD, pythonD, rubyD);

let scores = [3, 4, 5];
let [low, mid, hight, higher] = scores;
console.log(low, mid, hight, higher);

let [newLow, ...rest] = scores;

console.log(newLow, rest);

let doubleArray = [3, 4, 234, [3, 5, 5, 567, 7]];

let [first, second, third, [...anotherArray]] = doubleArray;
console.log(first, second, third, anotherArray);
console.log(anotherArray);

function computeScore([low, mid]) {
    console.log(low, mid);
}

computeScore([3, 5]);

function getScores() {
    return [2, 3, 5];
}

let score = getScores();
console.log('function getScores ' + score);

let [getLow, getMid, getHight] = getScores();
console.log(getLow, getMid, getHight);

let yes = 'yes';
let no = 'no';
[yes, no] = [no, yes];
console.log('yes = ' + yes, 'no = ' + no);

console.log('=============== DISTRUCTURING OBJECTS ===============');

let personeObj = {
    firstName: 'John',
    lastName: 'Doe'
}

let firstNameObj = personeObj.firstName;
let lastNameObj = personeObj.lastName;
console.log(firstNameObj, lastNameObj);

let {
    firstName: firstNmaeObjES6,
    lastName: lastNmaeObjES6
} = personeObj;

console.log(firstNmaeObjES6, lastNmaeObjES6);
console.log(personeObj);


let user = {
    login: 'virtyoz777',
    password: '123123',
    social: {
        facebook: 'virt',
        vk: 'vkvirt',
    }
};

let {
    login,
    password: password,
    social: {
        facebook
    },
    age = 25
} = user;

console.log(login, password, facebook, age);

function post(url, {
    data,
    cache
}) {
    console.log(data, cache);
}
let res = post('api/users', {
    data: user,
    cache: false
});

function getUserInfo() {
    return {
        login: 'virtyoz777',
        password: '123123',
        social: {
            facebook: 'virt',
            vk: 'vkvirt',
        }
    }
}