window.formValidation = {};

$(function () {
    function handleForm($form, errors) {
        var hasErrors = 0;
        for (var key in errors) {
            hasErrors++;
        }

        $form.find('input, select, textarea').each(function () {
            var $this = $(this);
            var id = $this.attr('id');
            var errorsId = id + '_errors';
            var $errors = $('ul#' + errorsId);
            if ($errors.length) {
                $errors.html('');
                var name = $this.attr('name');
                if (errors[name]) {
                    $errors.css('display', '');
                    var inputErrors = errors[name];
                    for (var key in inputErrors) {
                        var error = inputErrors[key];
                        $errors.append($('<li/>').text(error));
                    }
                } else {
                    $errors.css('display', 'none');
                }
            }
        });

        if (!hasErrors) {
            formValidation[$form.attr('id')] = true;
            $form.submit();
        } else {
            formValidation[$form.attr('id')] = false;
        }
    }

    $(document).on('submit', 'form.ajax-validation', function (e) {
        var $this = $(this);

        if (formValidation[$(this).attr('id')]) {
            $this.find('input, select, textarea').each(function () {
                var errorsId = $(this).attr('id') + '_errors';
                $('ul#' + errorsId).css('display', 'none');
            });
        } else {
            e.preventDefault();

            var url = $this.attr('action');
            var method = $this.attr('method');
            if (!method) {
                method = 'get';
            }

            var data = $this.serialize();
            data += (data ? '&' : '') + 'ajax_validation=1';

            $.ajax({
                url: url,
                type: method,
                data: data,
                dataType: 'json',
                success: function (data) {
                    handleForm($this, data);
                }
            });

            return false;
        }
        return true;
    });
});
