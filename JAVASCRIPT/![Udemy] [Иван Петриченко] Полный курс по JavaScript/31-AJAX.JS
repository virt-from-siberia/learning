


let inputRUB = document.getElementById('rub'),
    inputUSD = document.getElementById('usd');


inputRUB.addEventListener('input', () => {
    let request = new XMLHttpRequest();

    // request.open(method, url, async, login, pass);
    request.open('GET', '31-AJAX.JSON');
    request.setRequestHeader('Content-type', 'application/json; charset=utf-8');
    request.send();

   


    //status
    //stastusText
    //responseText / response
    //readyState
    request.addEventListener('readystatechange', function(){
        if(request.readyState === 4 && request.status == 200){
            let data = JSON.parse(request.response);

            inputUSD.value = inputRUB.value /  data.usd;
        }else{
            inputUSD.value = "something went wrong";
        }
    });

});


