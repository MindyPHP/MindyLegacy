'use strict';

(function($) {
    $(document).ready(function(){
        var margin = 1;
        if (typeof endless_on_scroll_margin != 'undefined') {
            margin = endless_on_scroll_margin;
        }
        $(window).scroll(function(){
            var $more =  $(".endless-pager .show-more");
            if (($(document).height() - $(window).height() - $(window).scrollTop() <= margin) && !$more.hasClass('clicked')) {
                $more.addClass('clicked');
                $more.click();
            }
        });
    });
})(jQuery);