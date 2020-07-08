let options = {
    width: 1024,
    height: 1024,
    name: "test"
};

console.log(options.name);

options.bool = false;
options.colors = {
    border: "black",
    background: "red"
};

delete options.bool;

console.log(options);

for(let key in options){
    console.log('Свойство ' + key + ' имеет значение ' + options[key]);
}
console.log(Object.keys(options));



