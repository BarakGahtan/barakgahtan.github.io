// Open links that lead off this site in a new tab.
// Same-site links (with or without "www."), in-page anchors and mailto:/tel: links are left alone.
(function () {
  var siteHost = location.hostname.replace(/^www\./, "");
  var anchors = document.querySelectorAll("a[href]");
  for (var i = 0; i < anchors.length; i++) {
    var a = anchors[i];
    if (a.protocol !== "http:" && a.protocol !== "https:") continue;
    if (a.hostname.replace(/^www\./, "") === siteHost) continue;
    if (a.target) continue;
    a.target = "_blank";
    if (!/\bnoopener\b/.test(a.rel)) a.rel = (a.rel + " noopener").trim();
  }
})();
