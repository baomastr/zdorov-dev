/*
 rating
 */
(function() {
    $('.rating input:hidden[value]').each(function() {
        var $wrap = $(this).closest('.rating');

        setValue($wrap, this.value);
    });

    $('.rating[data-value]').each(function() {
        setValue($(this), this.getAttribute('data-value'));
    });

    function setValue($wrap, value) {
        value = value > 5 ? 5 : value;

        var width = $wrap.find('li:first-child').width();
        width = width || 17;

        $wrap.find('.rating-value').css('width', value * width);
    };

    // function wrapML() {
    //     var $this = $(this),
    //         input = $this.find('input:hidden')[0];
    //
    //     setValue($this, input.value);
    // }
    //
    // function itemME() {
    //     var $wrap = $(this).closest('.rating');
    //
    //     setValue($wrap, parseInt(this.getAttribute('data-value')));
    // }
    //
    // function itemClick() {
    //     $(this).closest('.rating').find('input:hidden').val(this.getAttribute('data-value'));
    // }

    // $(document).on('mouseleave', '.rating:not(.disabled)', wrapML);
    // $(document).on('mouseenter', '.rating:not(.disabled) li', itemME);
    // $(document).on('click', '.rating:not(.disabled) li', itemClick);
})();