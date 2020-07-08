const fs = require("fs");
const path = require("path");

//File system
//NOTE/: Метод mkdir создает новую папку в определенной директории
// fs.mkdir(path.join(__dirname, "notes"), (err) => {
//     if (err) throw new Error(err);

//     console.group("Folder created");
// });

//NOTE/: Метод writeFile создает новую папку в определенной директории

// fs.writeFile(
//     path.join(__dirname, "notes", "mynotes.txt"),
//     "Hello World",
//     (err) => {
//         if (err) throw new Error(err);
//         console.log("File created");

//         //NOTE/: Метод appendFile добавляет в выбранный фаел конент

//         fs.appendFile(
//             path.join(__dirname, "notes", "mynotes.txt"),
//             " From append file",
//             (err) => {
//                 if (err) throw new Error(err);
//                 console.log("File changed");

//                 //NOTE/: Метод readFile позволяет считывать файлы
//                 fs.readFile(
//                     path.join(__dirname, "notes", "mynotes.txt"),
//                     //NOTE/: кодировка utf-8 для правильного отображения букв
//                     "utf-8",
//                     (err, data) => {
//                         if (err) throw err;
//                         console.log(data);
//                     }
//                 );
//             }
//         );
//     }
// );

//NOTE/: Метод rename Переименовывает название файла
fs.rename(
    path.join(__dirname, "notes", "mynotes.txt"),
    path.join(__dirname, "notes", "notes.txt"),
    (err) => {
        if (err) throw err;
        console.log("File renamed");
    }
);
