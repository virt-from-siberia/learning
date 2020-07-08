let xhttp = new XMLHttpRequest();
let url = 'back.php';
let method = 'post';

function ajax(url, method, functionName, dataArray) {
    let xhttp = new XMLHttpRequest();
    xhttp.open(method, url, true);
    xhttp.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    xhttp.send(dataArray);

    xhttp.onreadystatechange = function (evt) {
        if (this.readyState == 4 && this.status == 200) {
            functionName(this);
        }
    };
}

function requestData(dataArr) {
    let out = '';
    for (let key in dataArr) {
        out += `${key} = ${dataArr[key]}&`;

    }
    console.log(out);
    return out;
}


function done(data) {
    console.log(data);
}


let a = {
    "name": "ivan",
    "age": 53
};
//name=ivan&age=53

ajax('back.php', 'post', done, requestData(a));