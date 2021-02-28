window.onload = function(e){
    
    var a = ['a', 'b', 'c'];
    
    for(var i = 0; i < a.length; i++){
        console.log(a[i]);
    }
    
    var b = {
        russia: 'Moscow',
        usa: 'Vashington',
        knr: 'Beijing'
    };
    
    console.log(b.knr);
    console.log(b['knr']);
    
    /* у объектов НЕТ length !!!!!!!!!!!!!!! */
    
    for(var key in b){
        console.log(b[key]);
    }
    
    for(var i in a){
        console.log(a[i]);
        /* у массива есть length __PROTO__ */
    }
}

