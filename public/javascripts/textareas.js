$(document).ready(function () {

    var $codez = $('#codez');

    $codez.keydown(function (event) {

        var $this = $(this);

        // check for keywords
        if (event.which !== 8) {
            $this.val($this.val() + '');

            //if there are apply styling
        }

        if (event.which === 9) {
            var start = this.selectionStart;
            var end = this.selectionEnd;
            var value = $this.val();

            // set textarea value to: text before caret + tab + text after caret
            $this.val(value.substring(0, start) + "  " + value.substring(end));

            this.selectionStart = this.selectionEnd = start + 2;

            event.preventDefault();

        }
    });

    $codez.focus(function () {
        $(this).css('background-color', 'rgba(175, 89, 255, 0.05)')
    });

    $codez.blur(function () {
        $(this).css('background-color', 'white')
    });
});