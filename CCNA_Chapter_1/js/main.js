function getUrlParameter(sParam) {
    var sPageURL = decodeURIComponent(window.location.search.substring(1)),
        sURLVariables = sPageURL.split('&'),
        sParameterName,
        i;

    for (i = 0; i < sURLVariables.length; i++) {
        sParameterName = sURLVariables[i].split('=');

        if (sParameterName[0] === sParam) {
            return sParameterName[1] === undefined ? true : sParameterName[1];
        }
    }
};

function setUrlParameter(key, value) {
    key = encodeURI(key); value = encodeURI(value);

    var kvp = document.location.search.substr(1).split('&');

    var i = kvp.length; var x; while (i--) {
        x = kvp[i].split('=');

        if (x[0] == key) {
            x[1] = value;
            kvp[i] = x.join('=');
            break;
        }
    }

    if (i < 0) { kvp[kvp.length] = [key, value].join('='); }

    if (history.pushState) {
        var newurl = window.location.protocol + "//" + window.location.host + window.location.pathname + "?" + kvp.join("");
        window.history.pushState({ path: newurl }, '', newurl);
    }
}



$(function () {
    "use strict";

    var currentSlide = getUrlParameter("slide") == undefined ? 0 : getUrlParameter("slide");
    showSlide(currentSlide);

    function showSlide(id) {
        $("div[data-slide='" + id + "'").nextAll().fadeOut();
        var chapter = $("div[data-slide='" + id + "'").data("chapter");
        $("div[data-target='" + chapter + "'").addClass("active");
        $("div[data-target='" + (parseInt(chapter) - 1) + "'").removeClass("active");
        setUrlParameter("slide", id);
        currentSlide = id;
    }

    function prevSlide(id) {
        if (id != 0) {
            var chapter = $("div[data-slide='" + (id - 1) + "'").fadeIn().data("chapter");

            $("div[data-target='" + chapter + "'").addClass("active");
            $("div[data-target='" + (parseInt(chapter) + 1) + "'").removeClass("active");
            setUrlParameter("slide", id-1);
            currentSlide = id - 1;
        }

    }

    var nextSlideEvent = function () {
        showSlide(parseInt(currentSlide) + 1);
    };

    var prevSlideEvent = function () {
        prevSlide(parseInt(currentSlide));
    };

    //$(document).click(nextSlideEvent);

    $(document).on("swipeleft", nextSlideEvent);
    $(document).on("swiperight", prevSlideEvent);

    $(document).unbind('keydown').bind('keydown', function (e) {
        switch (e.which) {
            case 8:
                prevSlideEvent();
                e.preventDefault();
                e.stopPropagation();
                return false;
                break;
            case 32:
                nextSlideEvent();
                break;
            case 37:
                prevSlideEvent();
                break;
            case 39:
                nextSlideEvent();
                break;
            case 13:
                nextSlideEvent();
                e.preventDefault();
                e.stopPropagation();
                return false;
                break;
            default:
                break;
        }

    });
});