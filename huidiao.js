(function($) {
    $.fn.MyCss = function(options, callback) {
        var defaults = {
            bd: 'yellow',
            cl: 'red'
        };
        var opts = $.extend(defaults, options);
        $(this).each(function() {
            $(this).css({
            	'background': opts.bd, 
            	'color': opts.cl
            });
        });
        if(callback) {
            callback();
        }
        
        //调用
//      $(function() {
//            $("#foo, .bar").MyCss({}, function() {
//             alert("CSS 设置成功");
//       });
//      });
    };
})(jQuery);