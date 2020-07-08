
document.querySelectorAll('.order').forEach((el) => {
    el.onclick = orderFunction;
});

function orderFunction() {
    let speed = document.querySelector('.order[value="speed"]');
    let chep = document.querySelector('.order[value="chep"]');
    let quality = document.querySelector('.order[value="quality"]');
    console.log(1);
    console.log(this.value);

    if (this.value == 'speed' && quality.checked) {
        chep.checked = false;
        return true;
    }
    if (this.value == 'speed' && chep.checked) {
        quality.checked = false;
        return true;
    }
    if (this.value == 'chep' && speed.checked) {
        quality.checked = false;
        return true;
    }
    if (this.value == 'chep' && quality.checked) {
        speed.checked = false;
        return true;
    }
    if (this.value == 'quality' && speed.checked) {
        chep.checked = false;
        return true;
    }
    if (this.value == 'quality' && chep.checked) {
        speed.checked = false;
        return true;
    }
}
