$(function () {
    $("#btOpenConsole").on("click", function (e) {
        $("#Console").fadeIn(0, function () {
            evalCode();
        });
        
    });

    $("#btCloseConsole").on("click", function (e) {
        $("#Console").fadeOut(0);
    });
});