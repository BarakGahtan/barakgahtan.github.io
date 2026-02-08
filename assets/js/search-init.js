(function () {
  var toggle = document.querySelector(".search-toggle");
  var container = document.querySelector(".search-container");
  var input = document.getElementById("search-input");

  if (toggle) {
    toggle.addEventListener("click", function (e) {
      e.stopPropagation();
      var visible = container.style.display !== "none";
      container.style.display = visible ? "none" : "block";
      if (!visible) input.focus();
    });

    document.addEventListener("click", function (e) {
      if (!e.target.closest(".search-toggle-wrapper")) {
        container.style.display = "none";
      }
    });
  }

  if (typeof SimpleJekyllSearch !== "undefined" && input) {
    SimpleJekyllSearch({
      searchInput: input,
      resultsContainer: document.getElementById("search-results"),
      json: "/search.json",
      searchResultTemplate: '<li><a href="{url}">{title}</a></li>',
      noResultsText: '<li>No results found</li>',
      limit: 10
    });
  }
})();
