(function ($) {

    "use strict";

    /**
     * Описание объекта
     */
    var mendless = function () {
        return mendless.init.apply(arguments);
    };

    /**
     * Расширение объекта
     */
    $.extend(mendless, {
        /**
         * Настройки по умолчанию
         */
        options: {
            pagerHolderSelector: '.endless-holder',
            pagerSelector: '.endless-pager',
            showMoreSelector: '.show-more',
            dataSelector: '.endless',
            // 2 вида добавления контента:
            // Перед пагинатором options.pagerHolder  - "beforePager"
            // После всех элементов списка options.dataSelector - "afterData"
            appendStrategy: 'beforePager'
        },
        /**
         * Элемент, над которым выполняются действия
         */
        element: undefined,
        /**
         * Инициализация
         * @param element
         * @param options
         */
        init: function (options) {
            this.options = $.extend(this.options, options);
            this.bind();
            return this;
        },
        /**
         * "Навешиваем" события
         */
        bind: function () {
            var me = this;

            $(document).on('click', me.options.showMoreSelector, function(e){
                e.preventDefault();
                $.ajax({
                    'url': $(this).attr('href'),
                    'dataType': 'html',
                    'success': function(data){
                        me.setupPage(data);
                    }
                });
                return false;
            });
        },
        setupPage: function(data) {
            var $data = $(data), $dataHolder;
            $(this.options.pagerSelector).replaceWith($data.find(this.options.pagerSelector));
            $dataHolder = $data.find(this.options.dataSelector);
            $dataHolder.find(this.options.pagerHolderSelector).remove();
            if (this.options.appendStrategy == 'beforePager') {
                $(this.options.pagerHolderSelector).before($dataHolder.html());
            }else if (this.options.appendStrategy == 'afterData') {
                $(this.options.dataSelector).append($dataHolder.html());
            }
        }
    });

    /**
     * Инициализация функции объекта для jQuery
     */
    return $.mendless = function (options) {
        return mendless.init(options);
    };

})($);

//$(function(){
//  $.mendless({...});
//});