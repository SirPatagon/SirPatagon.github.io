$(function () {
    $("#start").on("click", function (e) {
        startCode();
    });

    var editor = ace.edit("editor");
    editor.setTheme("ace/theme/chrome");
    editor.getSession().setMode("ace/mode/javascript");

    function printf(str) {
        var add = str.replace("\n", "<br/>");
        $("#console").html($("#console").html() + add)
    }

    function clear() {
        $("#console").html("");
    }

    function scanf(title) {
        $("#console").html($("#console").html() + title);
        var input = prompt($("#console").html().replace("<br>", "\n"));
        $("#console").html($("#console").html()+ "<br/>" + input + "<br/>");
        return input;
    }

    function startCode() {
        $("#console").html("");
        $("#myModal").modal("show");
        try {
            eval(editor.getValue());
            printf("\nProcess ended without exceptions...");
        }
        catch (exception) {
            printf("\nError: " + exception);
        }
    }
});