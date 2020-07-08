

$(document).ready(function () {
    $('button').on('click', myAjaxFull);

});

function myAjax() {
    //AJAX ЗАПРОС
    $.get(
        "BACKEND.PHP",
        {
            "a": $('#num1').val()
        },
        function (data) {
            console.log(data);
        }
    );
}


function myAjaxFull() {
    $.ajax({
        url: "BACKEND.PHP",
        type: "GET",
        data: { "a": $('#num1').val() },
        success: function (data) {
            console.log(data);
        }
    });
}
