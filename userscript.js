// ==UserScript==
// @name         Reddit search on Google
// @version      1.0
// @description  Adds a button to search Reddit posts with Google
// @author       Mario O.M.
// @namespace    https://github.com/marioortizmanero
// @include      http*://www.google.*/search*
// @include      http*://google.*/search*
// @run-at       document-end
// ==/UserScript==

const queryRegex = /q=(.*?)([^&]+)/g;
const redditUrl = "+site%3Areddit.com";

(function() {
    var el = document.createElement('div');
    el.className = 'hdtb-mitem';
    var link = document.createElement('a');
    link.appendChild(document.createTextNode('Reddit'));

    link.href = window.location.href.replace(queryRegex, (match,p1,p2) => {
        return p2.lastIndexOf(redditUrl)==-1 ? ['q=', p2, redditUrl].join('') : ['q=', p2].join(''); // Only adds the url once
    });
    el.appendChild(link);

    var toolsBtn = document.getElementById('hdtb-tls');
    toolsBtn.parentNode.insertBefore(el, toolsBtn.nextSibling);
})();
