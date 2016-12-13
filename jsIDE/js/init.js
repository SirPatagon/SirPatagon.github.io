var evalCode;
var saveFile;
var openFile;

var originalCode;

$(function () {
    //irgendwas ist da kaputt
    var editor = ace.edit("editor");
    editor.setTheme("ace/theme/iplastic");
    editor.getSession().setMode("ace/mode/javascript");
    originalCode = editor.getValue();

    window.onbeforeunload = function (e) {
        var test = editor.getValue();
        if (test != originalCode) {
            return 'Der Code wurde noch nicht gespeichert! Fortfahren?';
        }
    };


    $("#Console").fadeOut(0);

    saveFile = function () {
        var a = document.createElement('a');
        var str = editor.getValue().replace(/\n/g, "\r\n");
        var file = new Blob([str], { type: 'text/plain' });
        a.href = URL.createObjectURL(file);
        a.download = ($("#tbFileName").val() ? $("#tbFileName").val() : "jsIDE-File") + ".js";
        a.click();

        originalCode = editor.getValue();
    }

    openFile = function (e) {
        var file = e.target.files[0];
        if (!file) {
            return;
        }
        var reader = new FileReader();
        reader.onload = function (e) {
            editor.setValue(e.target.result);
        };
        reader.readAsText(file);
    }

    function write(str) {
        var add = str.replace(/\n/g, "<br>");
        $(".console-core").html($(".console-core").html() + add);
    }

    function writeln(str) {
        var add = str.replace(/\n/g, "<br>");
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

    evalCode = function () {
        $(".console-core").html("");
        try {
            eval("main();\n" + editor.getValue());
        }
        catch (ex) {
            writeln("\nError: " + ex);
        }
    }
});

