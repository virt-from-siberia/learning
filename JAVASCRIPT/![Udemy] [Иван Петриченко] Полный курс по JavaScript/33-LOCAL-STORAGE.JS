

// let div = document.querySelector('.div');

// let local = localStorage.setItem("number", 1);

// console.log(localStorage.getItem("number"));

// localStorage.removeItem("number");

// localStorage.clear();

window.addEventListener("DOMContentLoaded", function(){

    let checkbox = document.getElementById('rememberMe'),
        change = document.getElementById('change');

    if (localStorage.getItem("isChecked") == "true"){
        checkbox.checked = true;
    };

    checkbox.addEventListener('click', function(){
        localStorage.setItem("isChecked", true);
    });

    let persone = {
        name : "Alex",
        age : 33,
        tech : ["mobilr", "notebook"]
    };

    let serializedPersone = JSON.stringify(persone);
    localStorage.setItem("Alex", serializedPersone);

    console.log(JSON.parse(localStorage.getItem("Alex")));



});

