(function($){
    $.fn.duplicate = function(settings){
        var defaults = {
            d: ' ',
            cnt: 2
        };
        
        var options = $.extend(defaults, settings);

        this.each(function(){
            var elem = $(this);
            var text = elem.html();
            var out = '';
            
            for(var i = 0; i < options.cnt; i++){
                out += text;
                
                if(i < options.cnt - 1){
                    out += options.d;
                }
            }
            
            elem.html(out);
        });
        
        return this;
    };
})(jQuery);
