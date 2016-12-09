var evalCode;

$(function () {
    //irgendwas ist da kaputt
    var editor = ace.edit("editor");
    editor.setTheme("ace/theme/iplastic");
    editor.getSession().setMode("ace/mode/javascript");

    $("#Console").fadeOut(0);

    function write(str) {
        var add = str.replace("\n", "<br>");
        $(".console-core").html($(".console-core").html() + add);
    }

    function writeln(str) {
        var add = str.replace("\n", "<br>");
        $(".console-core").html($(".console-core").html() + add + "<br>");
    }

    function clr() {
        $(".console-core").html("");
    }

    function readln(title) {
        $(".console-core").html($(".console-core").html() + title);
        var input = prompt($(".console-core").html().replace(/<br>/g, "\n"));
        $(".console-core").html($(".console-core").html() + "<br>" + input + "<br>");
        return input;
    }

    evalCode = function() {
        $(".console-core").html("");
        try {
            eval("main();\n" + editor.getValue());
        }
        catch (ex) {
            writeln("\nError: " + ex);
        }
    }
});

