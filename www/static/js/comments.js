$(function(){
    $(document).on('click', '.reply-comment', function(e){
        e.preventDefault();

        var $this = $(this),
            $item = $this.closest('li'),
            username = $item.find('.username').text(),
            id = $this.data('reply'),
            $form = $('.comments-form'),
            $parent = $form.find('[name=parent]');

        $parent.val(id);
        $form.find('.username').text(username);
        $form.addClass('with-reply');

        $form.detach().insertAfter($this.parent());

        $form.find('textarea').focus();
        return false;
    });

    $(document).on('click', '.no-reply', function(e){
        e.preventDefault();

        var $form = $(this).closest('.comments-form'),
            $parent = $form.find('[name=parent]');
        $parent.val('');
        $form.removeClass('with-reply');
        $('.comments-form-holder').append($form.detach());
        return false;
    });
});