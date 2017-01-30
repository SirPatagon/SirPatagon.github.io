var ungeradeWoche =
        '<div data-role="collapsibleset" data-inset="false" data-iconpos="right" data-collapsed-icon="carat-d" data-expanded-icon="carat-u">' +
            '<div data-role="collapsible">' +
                '<h3>8:00 - 9:30&emsp;&emsp;Politik</h3>' +
                '<p>' +
                    'Lehrer: Herr Wichmann' +
                    '<br />' +
                    'Raum: 116' +
                '</p>' +
            '</div>' +
            '<div data-role="collapsible">' +
                '<h3>9:50 - 11:20&emsp;&emsp;IT7+c</h3>' +
                '<p>' +
                    'Lehrer: Herr Wichmann' +
                    '<br />' +
                    'Raum: 311' +
                '</p>' +
            '</div>' +
            '<div data-role="collapsible">' +
                '<h3>11:40 - 13:10&emsp;&emsp;IT6+9</h3>' +
                '<p>' +
                    'Lehrer: Herr Korte' +
                    '<br />' +
                    'Raum: 6' +
                '</p>' +
            '</div>' +
        '</div>';

var geradeWoche =
        '<div data-role="collapsibleset" data-inset="false" data-iconpos="right" data-collapsed-icon="carat-d" data-expanded-icon="carat-u">' +
                '<div data-role="collapsible">' +
                    '<h3>08:00 - 09:30&emsp;&emsp;IT6+9</h3>' +
                    '<p>' +
                        'Lehrer: Herr Korte' +
                        '<br />' +
                        'Raum: 113' +
                    '</p>' +
                '</div>' +
                '<div data-role="collapsible">' +
                    '<h3>09:50 - 11:20&emsp;&emsp;IT6+9</h3>' +
                    '<p>' +
                        'Lehrer: Herr Korte' +
                        '<br />' +
                        'Raum: 324' +
                    '</p>' +
                '</div>' +
                '<div data-role="collapsible">' +
                    '<h3>11:40 - 13:10&emsp;&emsp;IT7+c</h3>' +
                    '<p>' +
                        'Lehrer: Herr Wichmann' +
                        '<br />' +
                        'Raum: 324' +
                    '</p>' +
                '</div>' +
                '<div data-role="collapsible">' +
                    '<h3>13:30 - 15:00&emsp;&emsp;Politik</h3>' +
                    '<p>' +
                        'Lehrer: Herr Wichmann' +
                        '<br />' +
                        'Raum: 324' +
                    '</p>' +
                '</div>' +
            '</div>';

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

$(function () {
    "use strict";
        if (getWeekNumber(new Date()) % 2 == 0) {
            $("#dieseWoche").html(geradeWoche);
            $("#naechsteWoche").html(ungeradeWoche);
        }
        else {
            $("#dieseWoche").html(ungeradeWoche);
            $("#naechsteWoche").html(geradeWoche);
        }

        $(document).enhanceWithin();
});
