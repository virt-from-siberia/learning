// function* strGenerator() {
//     yield "Hello";
//     yield "World";
//     yield "Java-";
//     yield "Script-";
// }

// const str = strGenerator();

// function* numberGen(n = 10) {
//     for (let i = 0; i < n; i++) {
//         yield i;
//     }
// }

// const number = numberGen(7);

// const iteerator = {
//     [Symbol.iterator](n = 10) {
//         let i = 0;

//         return {
//             next() {
//                 if (i < n) {
//                     return { value: ++i, danoe: false };
//                 }
//                 return { value: undefined, done: true };
//             },
//         };
//     },
// };

function* iter(n = 10) {
    for (let i = 0; i < n; i++) {
        yield i;
    }
}

for (let k of iter(6)) {
    console.log(k);
}
