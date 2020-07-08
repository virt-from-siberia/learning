console.log(this);


const backgrounds = {
    red: "red",
    green: "green",
    blue: "blue"
};

function abc() {
    console.log(this);
    console.log(3 + 5 / 2);
    this.style.background = backgrounds.red;
}


// abc();

// let p = document.querySelectorAll('p');

// p.forEach(function (el) {
//     el.onclick = abc;
// });

document.querySelector('p').addEventListener('click', abc, false);

