const path = require("path");

console.log("-----");
console.log(__filename);
console.log(path.basename(__filename));
console.log(path.dirname(__filename));
console.log(path.extname(__filename));

//NOTE/: МЕТОД PARSE выводит все данные файла в обьекте
console.log(path.parse(__filename));

console.log(path.parse(__filename).ext);
console.log(path.parse(__filename).name);
console.log(path.parse(__filename).base);

//NOTE/: Метод Join позволяет обьеденить строки в один путь
console.log(path.join(__dirname, "test", "second.html"));

//NOTE/: Метод resolve позволяет обьеденить строки в один путь
console.log(path.resolve(__dirname, "./test", "/second.html"));
