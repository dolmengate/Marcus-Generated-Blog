$(document).ready(function () {

  var $codez = $('#codez');


  $codez.keyup(function (event) {

    var $this = $(this);
    var lineText, lineNumber;

    // if selection is multiline
    if ($this.selectionEnd > $this.selectionStart) {
      // do something
    } else {
      // find number of newlines in $codez.val()
      var nl = /\n/g;
      var newlineIndices = [];
      while (nl.exec($this.val()) !== null)
        newlineIndices.push(nl.lastIndex);

      // determine which line the insertion point is on
      if (newlineIndices.length === 0) {  // if this is the only line (i.e. there are no newlines)
        lineNumber = 0;
      } else {
        newlineIndices.forEach(function (newlineLoc, index) {
          if ($this.selectionEnd < newlineLoc) {
            lineNumber = index;
          } else {
            lineNumber = index + 1;
          }
        });
      }
    }

    lineText = $this.val().split('\n')[lineNumber];

    // send line content of current line only
    $.post('/', {"lineText": lineText, "lineNumber": lineNumber})
      .done(function (res) { // e.g.: { 0: "<span class='keyword'>for</span>" }

        // if line div doesn't already exist
        if ($('#line-' + lineNumber).length === 0) {
          $('div#snippet').append("<div id='line-" + lineNumber + "' class='line'></div>");
          // append to #line-0 : <div id='line-number-0' class='line-number'> 0 </div>
          $('div#line-' + lineNumber).append("<div id='line-number-" + lineNumber + "' class='line-number'>" + lineNumber + "</div>");
          // append to #line-0 : <div id='line-text-0' class='line-text'></div>
          $('div#line-' + lineNumber).append("<div id='line-text-" + lineNumber + "' class='line-text'></div>");
        }

        $('div#line-text-' + lineNumber).html(res[lineNumber]);

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
