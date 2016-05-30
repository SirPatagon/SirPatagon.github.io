function getWeekNumber(d) {
    // Copy date so don't modify original
    d = new Date(+d);
    d.setHours(0, 0, 0);
    // Set to nearest Thursday: current date + 4 - current day number
    // Make Sunday's day number 7
    d.setDate(d.getDate() + 4 - (d.getDay() || 7));
    // Get first day of year
    var yearStart = new Date(d.getFullYear(), 0, 1);
    // Calculate full weeks to nearest Thursday
    var weekNo = Math.ceil((((d - yearStart) / 86400000) + 1) / 7);
    // Return array of year and week number
    return weekNo;
}

(function () {
    var weekNo = getWeekNumber(new Date());

    $("#vertretungsplan").attr("src", "http://dev3.bbs-os-brinkstr.de/fileadmin/00info/Stundenplan/1Stdplan_nur_Vertretung/" + weekNo + "/w/w00037.htm");
    $("#vertretungsplan2").attr("src", "http://dev3.bbs-os-brinkstr.de/fileadmin/00info/Stundenplan/1Stdplan_nur_Vertretung/" + (weekNo + 1) + "/w/w00037.htm");

    if ((weekNo % 2) == 0) {
        //$('#grade').addClass('panel-primary');
        //$('#ungrade').addClass('panel-default');
        //document.getElementById('footGrade').innerHTML = "<b>Diese Woche</b>";
        //document.getElementById('footUngrade').innerHTML = "Nächste Woche";
        $("#dieseWoche").html($("#gradeWoche").html());
        $("#naechsteWoche").html($("#ungradeWoche").html());
    }
    else {
        //$('#grade').addClass('panel-default');
        //$('#ungrade').addClass('panel-primary');
        //document.getElementById('footGrade').innerHTML = "Nächste Woche";
        //document.getElementById('footUngrade').innerHTML = "<b>Diese Woche</b>";
        $("#dieseWoche").html($("#ungradeWoche").html());
        $("#naechsteWoche").html($("#gradeWoche").html());
    }
})();

$('*').click(function (event) {
    $('td').removeClass('focus');
    $(this).addClass('focus');
    event.stopPropagation();
});

function Politik(R, obj, info) {
    document.getElementById('Fach').innerText = 'Politik';
    document.getElementById('Lehrer').innerText = 'Frau Haji';
    document.getElementById('Raum').innerText = 'Raum ' + R;
    document.getElementById('Zeit').innerText = obj.parentElement.children[0].innerText;
    document.getElementById('Info').innerText = info;
    $('#myModal').modal('show');
}

function IT4(R, obj, info) {
    document.getElementById('Fach').innerText = 'IT4 / "Hardware"';
    document.getElementById('Lehrer').innerText = 'Herr Wasmuth';
    document.getElementById('Raum').innerText = 'Raum ' + R;
    document.getElementById('Zeit').innerText = obj.parentElement.children[0].innerText;
    document.getElementById('Info').innerText = info;
    $('#myModal').modal('show');
}

function IT6(R, obj, info) {
    document.getElementById('Fach').innerText = 'IT6 / "Programmieren"';
    document.getElementById('Lehrer').innerText = 'Frau Haji';
    document.getElementById('Raum').innerText = 'Raum ' + R;
    document.getElementById('Zeit').innerText = obj.parentElement.children[0].innerText;
    document.getElementById('Info').innerText = info;
    $('#myModal').modal('show');
}

function IT128(R, obj, info) {
    document.getElementById('Fach').innerText = 'IT1/2/8 / "Wirtschaft"';
    document.getElementById('Lehrer').innerText = 'Frau Brade';
    document.getElementById('Raum').innerText = 'Raum ' + R;
    document.getElementById('Zeit').innerText = obj.parentElement.children[0].innerText;
    document.getElementById('Info').innerText = info;
    $('#myModal').modal('show');
}

function Sport(obj, info) {
    document.getElementById('Fach').innerText = 'Sport';
    document.getElementById('Lehrer').innerText = 'Herr Heinbach';
    document.getElementById('Raum').innerText = 'Sporthalle 1-2';
    document.getElementById('Zeit').innerText = obj.parentElement.children[0].innerText;
    document.getElementById('Info').innerText = info;
    $('#myModal').modal('show');
}

function Englisch(R, obj, info) {
    document.getElementById('Fach').innerText = 'Englisch';
    document.getElementById('Lehrer').innerText = 'Herr Kriege';
    document.getElementById('Raum').innerText = 'Raum ' + R;
    document.getElementById('Zeit').innerText = obj.parentElement.children[0].innerText;
    document.getElementById('Info').innerText = info;
    $('#myModal').modal('show');
}

function Deutsch(R, obj, info) {
    document.getElementById('Fach').innerText = 'Deutsch';
    document.getElementById('Lehrer').innerText = 'Frau Lecomte';
    document.getElementById('Raum').innerText = 'Raum ' + R;
    document.getElementById('Zeit').innerText = obj.parentElement.children[0].innerText;
    document.getElementById('Info').innerText = info;
    $('#myModal').modal('show');
}