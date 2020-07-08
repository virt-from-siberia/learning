

// let body = document.querySelector('#body');
// console.log(body.parentElement);

let html = document.children[0];
for (let i = 0; i < document.children.length; i++) {
    var child = html.children[i];
    console.log(child.tagName.toLowerCase());

    for (let j = 0; j < child.children.length; j++) {
        let innerChild = child.children[j];
        console.log('|---' + innerChild.tagName.toLowerCase());
    }
}


let body = document.querySelector('#body');

let lol = body.children[0];


console.log(lol.children[0]);
console.log(lol.parentNode);