const persone = {
    name: 'Max',
    age: 30
}
console.log(Object.getOwnPropertyDescriptors(persone)
)
console.log(Object.entries(persone));
console.log(Object.fromEntries([['name', 'Max'], ['age', 30]]))
console.log(Object.entries(['M', 'A', 'X']));

for (const [key, val] of Object.entries(persone)) {
    console.log(key, val);
};

console.log(Object.values(persone))
console.log(Object.keys(persone))