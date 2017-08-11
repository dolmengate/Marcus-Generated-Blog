$(document).ready(function (){

    var navs = ["one", "two", "three"];

    // navigation bar onclick animations and mouseovers
    navs.forEach(function(nav) {

        var $navButton = $("#nav-button-" + nav);
        var $navExpanded = $("#nav-expanded-" + nav);

        $navButton.mousedown(function () {
            // show expanded nav and revert to normal colors
            $navExpanded.show();
            $(this).css({"background-color": "#54418b"});
            $(this).find("p").css({"color": "white"});

          // get all nav buttons not clicked
          var unselecteds = navs.filter(function (string) { return string !== nav; });

          // and hide them so the expanded nav displays properly
          if ($navExpanded.css("display") === "block")
            unselecteds.forEach( function (unselected) {
              $("#nav-expanded-" + unselected).css({"display": "none"})
            })
        });

        $navExpanded.mouseleave(function () {
            $navExpanded.hide();
        });

        // invert colors on hover, etc.
        $navButton.mouseenter(function () {
            $(this).css({"background-color": "white"});
            $(this).find("p").css({"color": "#54418b"});
        }).mouseleave(function () {
            $(this).css({"background-color": "#54418b"});
            $(this).find("p").css({"color": "white"});
        })
    });
});