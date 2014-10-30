'use strict';

(function($) {
    $(document).ready(function(){
        var margin = 1;
        if (typeof endless_on_scroll_margin != 'undefined') {
            margin = endless_on_scroll_margin;
        }
        $(window).scroll(function(){
            if ($(document).height() - $(window).height() - $(window).scrollTop() <= margin) {
                $(".endless-pager .show-more").click();
            }
        });
    });
})(jQuery);