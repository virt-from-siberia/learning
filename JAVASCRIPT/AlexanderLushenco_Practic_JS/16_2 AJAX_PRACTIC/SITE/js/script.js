// TODO:
// FIXME:
// TODO:
// TODO:



document.querySelector('button').onclick = () => {
    let input = document.querySelector('#inp-date');
    let date = {
        "date": input.value
    };
    ajax('datetime.php', 'POST', showTime, date);
}





function showTime(data) {
    data = JSON.parse(data);
    console.log(data);
}