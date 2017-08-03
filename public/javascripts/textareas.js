$(document).ready(function () {

    var $codez = $('#codez');

    $codez.keyup(function (event) {

        var $this = $(this);

        $.post('/', {"textareaText": $codez.val()})
          .done(function ( res ) {

          for (var line in Object.keys(res)) {
            // if line div doesn't already exist
            if ($('#line-' + line).length === 0) {
              $('div#snippet').append("<div id='line-" + line + "' class='line'></div>");
              // append to #line-0 : <div id='line-number-0' class='line-number'> 0 </div>
              $('div#line-' + line).append("<div id='line-number-" + line + "' class='line-number'>" + line + "</div>");
              // append to #line-0 : <div id='line-text-0' class='line-text'> res[0] </div>
              $('div#line-' + line).append("<div id='line-text-" + line + "' class='line-text'>" + res[line] + "</div>");
            }

            $('div#line-text-' + line).html(res[line]);

          }
        });

        // if tab
        if (event.which === 9) {
            var start = this.selectionStart;
            var end = this.selectionEnd;
            var value = $this.val();

            // set textarea value to: text before insertion point + tab + text after insertion point
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