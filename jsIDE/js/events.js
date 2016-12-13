$(function () {
    $("#btOpenConsole").on("click", function (e) {
        $("#Console").fadeIn(0, function () {
            evalCode();
        });
        
    });

    $("#btCloseConsole").on("click", function (e) {
        $("#Console").fadeOut(0);
    });

    $("#aSaveFile").on("click", function (e) {
        saveFile();
    });

    $("#aOpenFile").on("click", function (e) {
        document.getElementById('openFileDlg').click();
    });

    $("#openFileDlg").on("change", function (e) {
        openFile(e);
    });
});