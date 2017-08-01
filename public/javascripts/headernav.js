$(document).ready(function (){

    var navs = ["one", "two", "three"];

    // navigation bar onclick animations and mouseovers
    navs.forEach(function(nav) {

        $("#nav-button-" + nav).mouseup( function () {

            var unselecteds = navs.filter(function (string) {
                return string !== nav;
            });

            if ($("#nav-expanded-" + nav).css("display") === "block") {
                unselecteds.forEach( function (unselected) {
                    $("#nav-expanded-" + unselected).css({"display": "none"})
                })
            }

        }).mousedown(function () {
            $("#nav-expanded-" + nav).slideDown();
            $(this).css({"background-color": "#54418b"});
            $(this).find("p").css({"color": "white"});
        });

        $("#nav-expanded-" + nav).mouseleave(function () {
            $("#nav-expanded-" + nav).slideUp();
        });

        $("#nav-button-" + nav).mouseenter(function () {
            $(this).css({"background-color": "white"});
            $(this).find("p").css({"color": "#54418b"});
        }).mouseleave(function () {
            $(this).css({"background-color": "#54418b"});
            $(this).find("p").css({"color": "white"});
        })
    });
});