;
(function ($) {
    var WebChat = function (element, options) {
        return this.init(element, options);
    };

    WebChat.prototype = {
        $element: null,
        socket: null,
        options: {},
        getLog: function () {
            return $(this.options.logSelector);
        },
        init: function (element, options) {
            var min = 1000, max = 9999;

            this.$element = $(element);
            this.defaultOptions = {
                maxMessages: 100,
                username: "Гость" + Math.floor(Math.random() * (max - min + 1)) + min,
                logSelector: "#log",
                formSelector: '#form',
                messageTemplate: "<p><span class='from'><% if (from.indexOf('Гость') == 0) { %><%= from %><% } else { %><a class='mmodal' data-width='978' target='_blank' href='/user/<%= from %>'><%= from %></a><% } %></span><span class='message'><%= message %></span></p>",
                notSupportedMessage: 'Ваш браузер не поддерживает технологию WebSocket.',
                onCloseMessage: 'Что то пошло не так. Пожалуйста обновите страницу.'
            };

            this.options = $.extend({}, this.defaultOptions, options);
            this.messageTemplate = _.template(this.options.messageTemplate);

            this.initWebSocket();
            this.initEvents();
        },
        initEvents: function () {
            if (!this.socket) {
                return false;
            }

            var self = this;

            $(document).on('submit', this.options.formSelector, function (e) {
                e.preventDefault();
                if (!self.$element.val()) {
                    return false;
                }
                var data = JSON.stringify({
                    from: self.options.username ? self.options.username : self.defaultOptions.username,
                    message: self.$element.val()
                });

                self.socket.send(data);
                self.$element.val("");
                return false
            });
        },
        log: function ($msg) {
            var $log = this.getLog(),
                d = $log[0],
                doScroll = d.scrollTop == d.scrollHeight - d.clientHeight;
            $msg.appendTo($log);
            if (doScroll) {
                d.scrollTop = d.scrollHeight - d.clientHeight;
            }
        },
        initWebSocket: function () {
            var self = this;
            if (window["WebSocket"]) {
                this.socket = new WebSocket(this.options.socketUrl ? this.options.socketUrl : "ws://chat." + window.location.host);
                this.socket.onclose = function (e) {
                    self.log($("<div><strong>" + self.options.onCloseMessage + "</strong></div>"))
                };
                this.socket.onmessage = function (e) {
                    var data = $.parseJSON(e.data);
                    self.log($('<div class="message-item"/>').html(self.messageTemplate(data)));

                    var $messages = $('.message-item');
                    if ($messages.length > self.options.maxMessages) {
                        $messages[0].remove();
                    }
                }
            } else {
                this.log($("<div><b>" + this.options.notSupportedMessage + "</b></div>"))
            }
        }
    };

    $.fn.extend({
        webchat: function (options) {
            return new WebChat(this, options);
        }
    });
})(jQuery);