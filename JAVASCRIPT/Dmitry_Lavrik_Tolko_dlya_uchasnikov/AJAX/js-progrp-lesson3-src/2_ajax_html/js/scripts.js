$(function(){
    
    let $form = $('.app');
    let $res = $('.result');
    
    $('.send').on('click', function(){

        $.post('app.php', $form.serialize(), function(data){
            if(data == '1'){
                $res.html('Заявка отправлена!');
                $form.slideUp(300);
            }
            else{
                $res.html(data);
            }
        });
        
    });

    /*
        $(...).load - подгрузить в html-элемент данные с сервера
        $.get       - выполнить get-запрос на сервер
        $.post      - выполнить post-запрос на сервер
        $.ajax      - выполнить любой запрос на сервер с тонкой настройкой
    */
    
    /*
        $.post(урл, объект, коллбек на успех, тип данных для коллбека)
    
    */
    
});