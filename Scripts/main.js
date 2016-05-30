$(function () {
    var datum = new Date();
    var startmenu = document.getElementById("metrostart");

    document.getElementById("cont").onload = loaded;
    function changeColor(borderColorHover, borderColorClick, backgroundColor) {
        $(".metro > div").css("background-color", backgroundColor);
        $(".metro > div").css("border-color", backgroundColor);
        $(".metro > div").hover(function () {
            $(this).css("border-color", borderColorHover);
        }, function () {
            $(this).css("border-color", backgroundColor);
        });
        $(".metro > div").mousedown(function () {
            $(this).css("border-color", borderColorClick);
        });
        $(".metro > div").mouseup(function () {
            $(this).css("border-color", borderColorHover);
        });

    }

    $("img").on('dragstart', function (event) { event.preventDefault(); });

    if (datum.getHours() < 12) {
        startmenu.style.backgroundImage = "url(Icons/aufgang.jpg)";
        changeColor("#E6C394", "#6A4C23", "#CC8629");
    }
    else if (datum.getHours() < 18) {
        startmenu.style.backgroundImage = "url(Icons/mittag.jpg)";
        changeColor("#80BCEB", "#1B2B38", "#0078D7");
    }
    else {
        startmenu.style.backgroundImage = "url(Icons/untergang.jpg)";
        changeColor("#ED9D80", "#AD3408", "#DA3B01");
    }

    

    var load = false;
    function loaded() {
        if (isStartOpen) {
            $('#metrostart').fadeOut(300);
            document.getElementById("menu").className = "navbar-brand";
            document.getElementById("chrome").className = "active";
            $('#load').fadeOut(300);
            isStartOpen = false;
        }
    }



    if (matchMedia) {
        var mq = window.matchMedia("(min-width: 768px)");
        mq.addListener(WidthChange);
        WidthChange(mq);
    }

    // media query change
    function WidthChange(mq) {

        if (mq.matches) {
            document.getElementById("Taskbar").style.display = 'block';
            document.getElementById("Mobbar").style.display = 'none';
        } else {
            document.getElementById("Taskbar").style.display = 'none';
            document.getElementById("Mobbar").style.display = 'block';
        }

    }



    window.setTimeout(showTime, 1);

    function pad(num, size) {
        var s = "000000000" + num;
        return s.substr(s.length - size);
    }

    function showTime() {
        var jetzt = new Date();
        var stunde = pad(jetzt.getHours(), 2);
        var minute = pad(jetzt.getMinutes(), 2);
        var tag = pad(jetzt.getDate(), 2);
        var monat = pad((jetzt.getMonth() + 1), 2);
        document.getElementById("time").innerHTML = stunde + ":" + minute +
            "<br/>" + tag + "." + monat + "." + jetzt.getFullYear();
        window.setTimeout(showTime, 1);
    }
});

var isStartOpen = true;

function navigate(str) {
    document.getElementById("cont").src = str;
    $('#load').fadeIn(300);
    document.getElementById("menu").className = "navbar-brand active";
    document.getElementById("chrome").className = "";
}

function home() {
    if (isStartOpen) {
        $('#metrostart').fadeOut(300)
        isStartOpen = false;
        document.getElementById("menu").className = "navbar-brand";
        document.getElementById("chrome").className = "active";
    }
    else {
        $('#metrostart').fadeIn(300)
        isStartOpen = true;
        document.getElementById("menu").className = "navbar-brand active";
        document.getElementById("chrome").className = "";
    }


}