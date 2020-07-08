console.log('=============== FOROF ===============');

let browsers = ['Chrome', 'FireFox', 'EDGE', 'OPERA', 'SAFARI'];

console.log('===forIn===');
for (let browser in browsers) {
    console.log(browser);
}
console.log(browsers);

for (let index in browsers) {
    console.log(browsers[index]);
}
console.log('===forOf===');

for (let browser of browsers) {
    console.log(browser);
}