
// let app ={
//     data : 45
// };
// console.log(app);


// let input = document.querySelector('.input');
// let inputValue = document.querySelector('.input').value;
// let btn = document.querySelector('.btn');


// function User(name, age) {
//     this.name = name;
//     let userAge = age;

//     this.getAge = function () {
//         return userAge;
//     };
//     this.setAge = function (age) {
//         if (typeof (age === 'number') && age > 0 && age < 110) {
//             userAge = age;
//         } else {
//             console.log('Это не допустимое значение');
//         }
//     };
//     this.say = function () {
//         console.log(`Имя пользователя ${this.name}, возраст : ${this.userAge}`);
//     };
// }

// let user = new User('Ivan', 25);

// console.log(user.name);
// console.log(user.userAge);
// user.say();
// console.log(user.setAge(20));
// console.log(user.getAge());

// let div = document.querySelector('.div').innerHTML = user.getAge();


// input.addEventListener('change', function () {
//     inputValue = this.value;
// })

// btn.addEventListener('click', function () {
//     console.log(inputValue);
//     var newDiv = document.createElement("div");
//     // and give it some content 
//     var newContent = document.createTextNode(inputValue);
//     // add the text node to the newly created div
//     newDiv.appendChild(newContent);
// })

// let number = 1;

// (function(){
//     let number =2;
//     console.log(number);

//     return console.log(number + 3);
// }());

//  console.log(number);

let user = (function(){
    let private = function(){
        console.log('I am private function');
    };
    let sayHello = function(){
            console.log('hello');
        }
    return {
       private : private
    };
}());

console.log(user);
console.log(user.private());

