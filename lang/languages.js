var currentLanguage;
function setRes() {
    $('*[data-res]').each(function () {
        $(this).html(currentLanguage[$(this).data("res")]);
    });
}

$(function () {
    var scriptEls = document.getElementsByTagName('script');
    var thisScriptEl = scriptEls[scriptEls.length - 1];
    var langFolder = thisScriptEl.src.substr(0, thisScriptEl.src.lastIndexOf('/') + 1);

    var userLang = navigator.language || navigator.userLanguage;

        $.getJSON(langFolder + userLang + ".json", function (result) {
            currentLanguage = result;
            setRes();
        }).fail(function (jqXHR) {
            if (jqXHR.status == 404) {
                $.getJSON(langFolder + "en-US.json", function (result) {
                    currentLanguage = result;
                    setRes();
                })
            }
        });

        

    

});