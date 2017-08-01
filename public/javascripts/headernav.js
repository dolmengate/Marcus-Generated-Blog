$(document).ready(function (){

    var navs = ["one", "two", "three"];

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
            $("#nav-button-" + nav).css({"background-color": "#54418b"});
            $("#nav-button-" + nav).find("p").css({"color": "white"});
        });

        $("#nav-expanded-" + nav).mouseleave(function () {
            $("#nav-expanded-" + nav).slideUp();
        });

        $("#nav-button-" + nav).mouseenter(function () {
            $("#nav-button-" + nav).css({"background-color": "white"});
            $("#nav-button-" + nav).find("p").css({"color": "#54418b"});
        });

        $("#nav-button-" + nav).mouseleave(function () {
            $("#nav-button-" + nav).css({"background-color": "#54418b"});
            $("#nav-button-" + nav).find("p").css({"color": "white"});
        })
    });
});