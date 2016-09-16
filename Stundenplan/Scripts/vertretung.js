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
function GetUrlForWeekNo(nr) {
    return "http://dev3.bbs-os-brinkstr.de/fileadmin/00info/Stundenplan/1Stdplan_nur_Vertretung/" + nr + "/w/w00090.htm";
}

$(document).on("pageshow", "#vertretung", function () {
    "use strict";
    var weekNo = getWeekNumber(new Date());
    $('a[href="#one"]').click().focus();
    $("#vertretungDieseWoche").attr("src", GetUrlForWeekNo(weekNo));
    $("#vertretungNaechsteWoche").attr("src", GetUrlForWeekNo(weekNo + 1));
});
