$(window).on('ready', function () {



});
$(window).on('load', function () {
    $(".blackBorder").css({ "border": "solid 2px", "border-color": "black", "margin": "5% auto", "width": "80%", "padding-left": "20px" });
    $(".jQueryLogo").css({ "width": "20%" });
    $(".jQuerytext").css({ "color": "#0769AA" });
    $("#jQueryMessage").css({ "font-weight": "bold" });

    $(".jQueryLogo").click(function () {
        $(this).css({ "border": "solid 10px", "border-color": "blue", "width": "80%"});
        $("#jQueryMessage").text("Doppelklicken um zurückzukehren");
    });

    $(".jQueryLogo").dblclick(function () {
        $(this).css({ "border": "solid 0px", "border-color": "transparent", "width": "20%"});
        $("#jQueryMessage").text("Klicke auf das Logo");
    });
});