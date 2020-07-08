window.onload = function (e) {

    // var btn = document.querySelector('input[name=calc]');
    // var inp1 = document.querySelector('input[name=num1]');
    // var inp2 = document.querySelector('input[name=num2]');
    // var span = document.querySelector('.res');

    // btn.onclick = function () {

    //     var res = parseInt(inp1.value) + parseInt(inp2.value);
    //     span.innerHTML = res;

    // }

   var btn = document.querySelector('input[name=calc]');
   var inp1 = document.querySelector('input[name=num1]');
   var inp2 = document.querySelector('input[name=num2]');
   var span = document.querySelector('.res');

    btn.onclick = function () {

        var res = parseInt(inp1.value) + parseInt(inp2.value);
        span.innerHTML = res;


    }
}