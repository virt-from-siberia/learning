// setTimeout(() => {

//     const backendData = {
//         server: "aws",
//         port: 2000,
//         status: "working",
//     };

//     setTimeout(() => {
//         backendData.modified = true;
//     }, 2000);
// }, 2000);

// const p = new Promise(function (resolve, reject) {
//     setTimeout(() => {
//         const backendData = {
//             server: "aws",
//             port: 2000,
//             status: "working",
//         };

//         resolve(backendData);
//     }, 2000);
// });

// p.then((data) => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             data.modified = true;
//             reject(data);
//         }, 2000);
//     });
// })
//     .then((clientData) => {
//         console.log("Data received ", clientData);
//         clientData.new = true;
//         return clientData;
//     })
//     .then((clientData) => {
//         console.log("clientData", clientData);
//         return clientData;
//     })
//     .then((finalData) => {
//         console.log("finalData", finalData);
//     })
//     .catch((err) => {
//         console.error(err);
//     })
//     .finally(() => console.log("finally"));

const sleep = (ms) => new Promise((resolve) => setTimeout(() => resolve(), ms));

// sleep(2000).then(() => console.log("After 2 seconds"));
// sleep(3000).then(() => console.log("After 3 seconds"));

Promise.all([sleep(2000, sleep(5000))]).then(() => {
    console.log("All promises");
});

Promise.race([sleep(2000, sleep(5000))]).then(() => {
    console.log("Race promises");
});
