(function () {
  var toggle = document.querySelector(".search-toggle");
  var container = document.querySelector(".search-container");
  var input = document.getElementById("search-input");
  var results = document.getElementById("search-results");

  if (toggle && container) {
    toggle.addEventListener("click", function (e) {
      e.stopPropagation();
      var visible = container.style.display !== "none";
      container.style.display = visible ? "none" : "block";
      if (!visible && input) input.focus();
    });

    document.addEventListener("click", function (e) {
      if (!e.target.closest(".search-toggle-wrapper")) {
        container.style.display = "none";
      }
    });
  }

  if (typeof SimpleJekyllSearch === "undefined") {
    console.warn("SimpleJekyllSearch not loaded");
    return;
  }
  if (!input || !results) {
    console.warn("Search input or results container not found");
    return;
  }

  SimpleJekyllSearch({
    searchInput: input,
    resultsContainer: results,
    json: "/search.json",
    searchResultTemplate: '<li><a href="{url}">{title}</a></li>',
    noResultsText: '<li>No results found</li>',
    limit: 10,
    fuzzy: true
  });
})();
