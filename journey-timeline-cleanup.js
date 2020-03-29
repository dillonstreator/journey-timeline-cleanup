// ==UserScript==
// @name         Journey Timeline Cleaner
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Remove upsell modal and ad from Journey timeline
// @author       Dillon Streator
// @match        https://journey.cloud/timeline
// @grant        none
// ==/UserScript==

(function($) {

    var checkExistModal = setInterval(function() {
        if ($('#upsellModal').length) {
            document.getElementById('upsellModal').remove()
            clearInterval(checkExistModal);
        }
    }, 100);

    var checkExistAd = setInterval(function() {
        if ($('.card.timelinex-card.status2.col2').length) {
            $('.card.timelinex-card.status2.col2')[0].remove()
            clearInterval(checkExistAd);
        }
    }, 100);

    (function() {
        var style_rules = [];

        style_rules.push(".card.timelinex-card.share.share-other.col2.entry { width: 100% !important }");
        style_rules.push(".day.m-t-25 { max-width: none !important }");

        var style = '<style type="text/css">' + style_rules.join("\n") + "</style>";
        $("head").append(style);
    })();

})($);