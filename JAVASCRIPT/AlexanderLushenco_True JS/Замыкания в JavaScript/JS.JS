let a = 0;

function count() {
    a++;
    console.log(a);
}

count();
count();
count();
count();
count();

function cs2() {
    let c = 0;
    return function () {
        c++;
        console.log(c);
    }
}

let d = cs2();

d();
d();
d();
d();
